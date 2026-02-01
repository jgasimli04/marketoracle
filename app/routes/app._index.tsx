import { Page, Layout, InlineGrid, BlockStack, Text } from "@shopify/polaris";
import { useState, useRef, useEffect } from "react";
import { DecisionTerminal } from "../components/DecisionTerminal";
import { ProductInputPanel } from "../components/ProductInputPanel";
import { GuideSidebar } from "../components/GuideSidebar";

// Get video URL from environment (Remix convention)
const videoUrl = typeof process !== 'undefined' && process.env.ORAKEN_GUIDE_VIDEO_URL ? process.env.ORAKEN_GUIDE_VIDEO_URL : undefined;

export default function Index() {
  // State machine: IDLE | ANALYZING
  const [appState, setAppState] = useState<'IDLE' | 'ANALYZING'>('IDLE');
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [productUrl, setProductUrl] = useState("");
  const [additionalContext, setAdditionalContext] = useState("");

  // Terminal log queue for ANALYZING state
  const [logQueue, setLogQueue] = useState<Array<{ icon: string; text: string; status: 'pending' | 'done'; ts: string }>>([]);
  const [logStep, setLogStep] = useState(0);
  const logTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // For Analyze button
  const analyzeDisabled = !(productName.trim() && category.trim()) || appState === 'ANALYZING';
  const analyzeLoading = appState === 'ANALYZING';

  // Log steps definition
  const logSteps = [
    {
      icon: '⏳',
      text: 'Initializing market oracle engine...',
    },
    {
      icon: '⏳',
      text: `Fetching demand trends for ${productName || '[Product Name]'}...`,
    },
    {
      icon: '⏳',
      text: `Analyzing competitor landscape in ${category || '[Category]'}...`,
    },
    {
      icon: '⏳',
      text: 'Calculating saturation index & pricing delta...',
    },
  ];

  // Sequential log injection effect
  useEffect(() => {
    if (appState !== 'ANALYZING') return;
    if (logStep >= logSteps.length) return;

    // Append next log
    if (logStep === 0) {
      setLogQueue([
        {
          icon: '⏳',
          text: logSteps[0].text,
          status: 'pending',
          ts: '01',
        },
      ]);
    } else {
      setLogQueue(prev => {
        // Mark previous as done, add new pending
        const updated = prev.map((l, i) =>
          i === logStep - 1 ? { ...l, icon: '✅', status: 'done' as const } : l
        );
        updated.push({
          icon: '⏳',
          text: logSteps[logStep].text,
          status: 'pending' as const,
          ts: `0${logStep + 1}`,
        });
        return updated;
      });
    }

    logTimeoutRef.current = setTimeout(() => {
      setLogStep(s => s + 1);
    }, 1000 + Math.random() * 500);

    return () => {
      if (logTimeoutRef.current) clearTimeout(logTimeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState, logStep]);

  // Reset state when returning to IDLE
  useEffect(() => {
    if (appState === 'IDLE') {
      setLogQueue([]);
      setLogStep(0);
    }
  }, [appState]);

  function handleAnalyze() {
    // Build payload before state transition
    const payload: {
      productName: string;
      category: string;
      imageProvided: boolean;
      imageFile?: File;
      productUrl?: string;
      additionalContext?: string;
    } = {
      productName,
      category,
      imageProvided: !!imageFile,
    };
    if (imageFile) payload.imageFile = imageFile;
    if (productUrl) payload.productUrl = productUrl;
    if (additionalContext) payload.additionalContext = additionalContext;
    // (Optional: send to backend here)
    fetch("/analyze", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });
    // Transition to ANALYZING
    setAppState('ANALYZING');
    setLogStep(0);
  }

  // When all logs are done, optionally allow reset (not required by spec)

  return (
    <Page fullWidth>
      <InlineGrid columns={{ xs: 1, md: 3 }} gap="400">
        <BlockStack gap="400">
          <DecisionTerminal
            productName={productName}
            category={category}
            imageProvided={!!imageFile}
            productUrl={productUrl}
            additionalContext={additionalContext}
            appState={appState}
            logQueue={logQueue}
          />
        </BlockStack>

        <ProductInputPanel
          productName={productName}
          setProductName={setProductName}
          category={category}
          setCategory={setCategory}
          imageFile={imageFile}
          setImageFile={setImageFile}
          productUrl={productUrl}
          setProductUrl={setProductUrl}
          additionalContext={additionalContext}
          setAdditionalContext={setAdditionalContext}
          onAnalyze={handleAnalyze}
          analyzeDisabled={analyzeDisabled}
          analyzeLoading={analyzeLoading}
        />
        <GuideSidebar videoUrl={videoUrl} />
      </InlineGrid>
    </Page>
  );
}
