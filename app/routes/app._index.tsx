import { Box, Divider, Text } from "@shopify/polaris";
import { Chatbox } from "../components/Chatbox";
import { useState, useRef, useEffect } from "react";
import { DecisionTerminal } from "../components/DecisionTerminal";
import { ProductInputPanel } from "../components/ProductInputPanel";
import { GuideSidebar } from "../components/GuideSidebar";

// Get video URL from environment (Remix convention)
const videoUrl = typeof process !== 'undefined' && process.env.ORAKEN_GUIDE_VIDEO_URL ? process.env.ORAKEN_GUIDE_VIDEO_URL : undefined;

export default function Index() {
  // Chatbox state
  const [chatboxValue, setChatboxValue] = useState("");
  // State machine: IDLE | ANALYZING
  const [appState, setAppState] = useState<'IDLE' | 'ANALYZING'>('IDLE');

  // Product card type and state
  interface ProductCard {
    id: string;
    name: string;
    category: string;
    image: File | null;
    url: string;
  }
  const [products, setProducts] = useState<ProductCard[]>([
    { id: crypto.randomUUID(), name: '', category: '', image: null, url: '' }
  ]);
  const [activeProductId, setActiveProductId] = useState<string>(products[0].id);

  // Terminal log queue for ANALYZING state
  const [logQueue, setLogQueue] = useState<Array<{ icon: string; text: string; status: 'pending' | 'done'; ts: string }>>([]);
  const [logStep, setLogStep] = useState(0);
  const logTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track which product is being analyzed (freeze terminal to this during ANALYZING)
  const [analyzedProductId, setAnalyzedProductId] = useState<string | null>(null);
  // Get active product (for editing)
  const activeProduct = products.find(p => p.id === activeProductId) || products[0];
  // Get product for terminal (mirrors active unless analyzing, then frozen)
  const terminalProduct =
    appState === 'ANALYZING' && analyzedProductId
      ? products.find(p => p.id === analyzedProductId) || products[0]
      : activeProduct;
  // For Analyze button
  const analyzeDisabled = !(activeProduct.name.trim() && activeProduct.category.trim()) || appState === 'ANALYZING';
  const analyzeLoading = appState === 'ANALYZING';

  // Log steps definition
  const logSteps = [
    {
      icon: '⏳',
      text: 'Initializing market oracle engine...',
    },
    {
      icon: '⏳',
      text: `Fetching demand trends for ${activeProduct.name || '[Product Name]'}...`,
    },
    {
      icon: '⏳',
      text: `Analyzing competitor landscape in ${activeProduct.category || '[Category]'}...`,
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
      setAnalyzedProductId(null);
    }
  }, [appState]);

  function handleAnalyze() {
    // Freeze terminal to current product
    setAnalyzedProductId(activeProductId);
    // Build payload before state transition
    const payload = {
      products,
      analyzedProductId: activeProductId,
      chatbox: chatboxValue,
    };
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
    <div style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh', width: '100vw' }}>
      {/* Left Sidebar */}
      <div style={{ width: 320, minWidth: 280, maxWidth: 360, height: '100vh', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--p-color-border-subdued)', position: 'relative' }}>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <Box padding="0">
            <DecisionTerminal
              productName={terminalProduct.name}
              category={terminalProduct.category}
              imageProvided={!!terminalProduct.image}
              productUrl={terminalProduct.url}
              additionalContext={chatboxValue}
              appState={appState}
              logQueue={logQueue}
            />
          </Box>
        </div>
        {/* Chatbox pinned to bottom */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 2, background: 'white', borderTop: '1px solid var(--p-color-border-subdued)' }}>
          <Chatbox
            value={chatboxValue}
            onChange={setChatboxValue}
            onAnalyze={handleAnalyze}
            analyzeDisabled={analyzeDisabled}
            analyzeLoading={analyzeLoading}
          />
        </div>
      </div>
      {/* Main Workspace */}
      <div style={{ flex: '1 1 0%', minWidth: 0, maxWidth: '100%', height: '100vh', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        <Box padding="0">
          {/* Branding Header */}
          <div style={{ padding: 24, borderBottom: '1px solid var(--p-color-border-subdued)' }}>
            <Text as="h1" variant="headingLg">ORAKEN</Text>
            <Text as="p" variant="bodyMd" tone="subdued">Paste a product idea or define your product below.</Text>
          </div>
          {/* Product Cards List */}
          <div style={{ padding: 24, paddingTop: 0 }}>
            {products.map((product, idx) => (
              <div
                key={product.id}
                style={{
                  marginBottom: 24,
                  border: '1px solid var(--p-color-border-subdued)',
                  background: '#fff',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.01)',
                  outline: product.id === activeProductId ? '2px solid #005bd3' : 'none',
                  cursor: 'pointer',
                }}
                onClick={() => setActiveProductId(product.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16 }}>
                  <Text as="h2" variant="headingSm">Product {idx + 1}</Text>
                  <button
                    aria-label="Delete product"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#d72c0d', fontSize: 18 }}
                    onClick={e => { e.stopPropagation(); setProducts(products => products.length === 1 ? products : products.filter(p => p.id !== product.id)); }}
                    disabled={products.length === 1}
                  >🗑️</button>
                </div>
                <div style={{ padding: 16 }}>
                  {product.id === activeProductId ? (
                    <ProductInputPanel
                      productName={product.name}
                      setProductName={name => setProducts(ps => ps.map(p => p.id === product.id ? { ...p, name } : p))}
                      category={product.category}
                      setCategory={category => setProducts(ps => ps.map(p => p.id === product.id ? { ...p, category } : p))}
                      imageFile={product.image}
                      setImageFile={image => setProducts(ps => ps.map(p => p.id === product.id ? { ...p, image } : p))}
                      productUrl={product.url}
                      setProductUrl={url => setProducts(ps => ps.map(p => p.id === product.id ? { ...p, url } : p))}
                      additionalContext={chatboxValue}
                      setAdditionalContext={setChatboxValue}
                    />
                  ) : (
                    <Text as="span" variant="bodySm" tone="subdued">Name: {product.name || '—'} | Category: {product.category || '—'}</Text>
                  )}
                </div>
              </div>
            ))}
            {/* Add (+) Button */}
            <div style={{ textAlign: 'center', marginTop: 16 }}>
              <button
                style={{ background: '#005bd3', color: '#fff', border: 'none', borderRadius: 0, padding: '12px 32px', fontSize: 18, cursor: 'pointer' }}
                onClick={() => setProducts(products => [...products, { id: crypto.randomUUID(), name: '', category: '', image: null, url: '' }])}
              >
                ＋ Add Product
              </button>
            </div>
          </div>
        </Box>
      </div>
      {/* Right Sidebar */}
      <div style={{ width: 320, minWidth: 280, maxWidth: 360, height: '100vh', display: 'flex', flexDirection: 'column', borderLeft: '1px solid var(--p-color-border-subdued)' }}>
        <Box padding="0">
          <GuideSidebar videoUrl={videoUrl} />
        </Box>
      </div>
    </div>
  );
}
