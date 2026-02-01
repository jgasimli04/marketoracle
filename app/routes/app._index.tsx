import { Box, Divider, Text, Button, ButtonGroup } from "@shopify/polaris";
import { ProductCardFieldPopover } from "../components/ProductCardFieldPopover";
import { Chatbox } from "../components/Chatbox";
import { useState, useRef, useEffect } from "react";
import { DecisionTerminal } from "../components/DecisionTerminal";
import { ProductInputPanel } from "../components/ProductInputPanel";
import { GuideSidebar } from "../components/GuideSidebar";
import { JSONMirror } from "../components/JSONMirror";

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
    fields: Record<string, string>;
    status: 'incomplete' | 'ready';
  }
  const [products, setProducts] = useState<ProductCard[]>([
    { id: crypto.randomUUID(), fields: { name: '' }, status: 'incomplete' }
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
  const analyzeDisabled = !activeProduct.fields.name?.trim() || appState === 'ANALYZING';
  const analyzeLoading = appState === 'ANALYZING';

  // Log steps definition
  const logSteps = [
    {
      icon: '⏳',
      text: 'Initializing market oracle engine...',
    },
    {
      icon: '⏳',
      text: `Fetching demand trends for ${activeProduct.fields.name || '[Product Name]'}...`,
    },
    {
      icon: '⏳',
      text: `Analyzing competitor landscape in ${activeProduct.fields.category || '[Category]'}...`,
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
              productName={terminalProduct.fields.name || ''}
              category={terminalProduct.fields.category || ''}
              imageProvided={false}
              productUrl={terminalProduct.fields.url || ''}
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
            replyingTo={`Replying to Product ${products.findIndex(p => p.id === activeProductId) + 1}`}
          />
        </div>
      </div>
      {/* Main Workspace */}
      <div style={{ flex: '1 1 0%', minWidth: 0, maxWidth: '100%', height: '100vh', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        <Box padding="0">
          {/* Branding Header */}
          <div style={{ padding: 24, borderBottom: '1px solid var(--p-color-border-subdued)', textAlign: 'center' }}>
            <Text as="h1" variant="heading3xl">ORAKEN</Text>
            <Text as="h4" variant="headingMd" tone="subdued">Paste a product idea or use a template below.</Text>
            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}>
              <ButtonGroup>
                <Button onClick={() => setProducts([
                  { id: crypto.randomUUID(), fields: { name: 'Wireless Earbuds', category: 'Electronics', price: '49.99', stock: '100', location: 'Shenzhen' }, status: 'ready' },
                  { id: crypto.randomUUID(), fields: { name: 'Yoga Mat', category: 'Fitness', price: '19.99', stock: '200', location: 'LA' }, status: 'ready' },
                ])}>Dropshipping</Button>
                <Button onClick={() => setProducts([
                  { id: crypto.randomUUID(), fields: { name: 'Custom Mug', category: 'Home', price: '12.99', stock: '500', location: 'NY' }, status: 'ready' },
                  { id: crypto.randomUUID(), fields: { name: 'Branded T-Shirt', category: 'Apparel', price: '24.99', stock: '300', location: 'LA' }, status: 'ready' },
                ])}>Private Label</Button>
                <Button onClick={() => setProducts([
                  { id: crypto.randomUUID(), fields: { name: 'Custom Poster', category: 'Art', price: '9.99', stock: '1000', location: 'Berlin' }, status: 'ready' },
                  { id: crypto.randomUUID(), fields: { name: 'Printed Hoodie', category: 'Apparel', price: '39.99', stock: '150', location: 'London' }, status: 'ready' },
                ])}>Print on Demand</Button>
              </ButtonGroup>
            </div>
          </div>
          {/* Product Cards List */}
          <div style={{ padding: 24, paddingTop: 0 }}>
            {products.map((product, idx) => (
              <div
                key={product.id}
                style={{
                  marginBottom: 24,
                  border: product.id === activeProductId ? '2px solid #303030' : '1px solid var(--p-color-border-subdued)',
                  background: 'var(--p-color-bg-surface, #fff)',
                  boxShadow: product.id === activeProductId ? 'var(--p-shadow-100, 0 2px 8px rgba(50,50,50,0.08))' : 'none',
                  borderRadius: 0,
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s, border 0.2s',
                }}
                onClick={() => setActiveProductId(product.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Text as="h2" variant="headingSm">Product {idx + 1}</Text>
                    {/* Status Dot & Tooltip */}
                    <span style={{ position: 'relative', display: 'inline-block' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          background: product.fields.name?.trim() ? '#36B37E' : '#D72C0D',
                          border: '1.5px solid #fff',
                          boxShadow: '0 0 0 1.5px #E3E3E3',
                          marginLeft: 2,
                          cursor: 'pointer',
                        }}
                        title={product.fields.name?.trim() ? 'Ready: All required fields filled' : 'Incomplete: Product Name is required'}
                      />
                    </span>
                  </div>
                  <button
                    aria-label="Delete product"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#d72c0d', fontSize: 18 }}
                    onClick={e => { e.stopPropagation(); setProducts(products => products.length === 1 ? products : products.filter(p => p.id !== product.id)); }}
                    disabled={products.length === 1}
                  >🗑️</button>
                </div>
                <div style={{ padding: 16 }}>
                  {product.id === activeProductId ? (
                    <>
                      <ProductInputPanel
                        productName={product.fields.name || ''}
                        setProductName={name => setProducts(ps => ps.map(p => p.id === product.id ? { ...p, fields: { ...p.fields, name } } : p))}
                        category={product.fields.category || ''}
                        setCategory={category => setProducts(ps => ps.map(p => p.id === product.id ? { ...p, fields: { ...p.fields, category } } : p))}
                        imageFile={null}
                        setImageFile={() => {}}
                        productUrl={product.fields.url || ''}
                        setProductUrl={url => setProducts(ps => ps.map(p => p.id === product.id ? { ...p, fields: { ...p.fields, url } } : p))}
                        additionalContext={chatboxValue}
                        setAdditionalContext={setChatboxValue}
                      />
                      <div style={{ marginTop: 12 }}>
                        <ProductCardFieldPopover
                          onAddField={field => setProducts(ps => ps.map(p => p.id === product.id ? { ...p, fields: { ...p.fields, [field]: '' } } : p))}
                          existingFields={Object.keys(product.fields)}
                          category={product.fields.category}
                        />
                      </div>
                    </>
                  ) : (
                    <Text as="span" variant="bodySm" tone="subdued">Name: {product.fields.name || '—'} | Category: {product.fields.category || '—'}</Text>
                  )}
                </div>
              </div>
            ))}
            {/* Add (+) Button */}
            <div style={{ textAlign: 'center', marginTop: 16 }}>
              <button
                style={{ background: '#005bd3', color: '#fff', border: 'none', borderRadius: 0, padding: '12px 32px', fontSize: 18, cursor: 'pointer' }}
                onClick={() => setProducts(products => [...products, { id: crypto.randomUUID(), fields: { name: '' }, status: 'incomplete' }])}
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
          <div style={{ marginTop: 24 }}>
            <JSONMirror products={products} setProducts={setProducts} />
          </div>
        </Box>
      </div>
    </div>
  );
}
