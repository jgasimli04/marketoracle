import {
  Card,
  BlockStack,
  Text,
  Button,
  TextField,
  Select,
  InlineGrid,
  Layout,
  Page,
  FormLayout,
  DropZone,
  Thumbnail,
  InlineStack,
} from "@shopify/polaris";
import { useState, useRef } from "react";

// --- LEFT SIDEBAR: Decision Terminal ---
export function DecisionTerminal({
  productName,
  category,
  imageProvided,
  productUrl,
  additionalContext,
}: {
  productName: string;
  category: string;
  imageProvided: boolean;
  productUrl: string;
  additionalContext: string;
}) {
  // Checklist status (static for empty state)
  const checklist = [
    { label: "Demand", status: "completed" },
    { label: "Competition", status: "completed" },
    { label: "Price range", status: "working" },
    { label: "Market saturation", status: "working" },
  ];
  const statusIcon = (status: string) => {
    if (status === "completed") return <span aria-label="completed" style={{ color: 'var(--p-color-success)' }}>✔️</span>;
    if (status === "working") return <span aria-label="working" style={{ color: 'var(--p-color-text)' }}>⏳</span>;
    return <span>—</span>;
  };
  return (
    <BlockStack gap="400">
      <Card padding="400">
        <BlockStack gap="0">
          <Text as="h2" variant="headingSm" fontWeight="medium">
            Session Inputs
          </Text>
          <Text as="p" tone="subdued" variant="bodySm">
            What Oraken understands so far
          </Text>
        </BlockStack>
        <ul style={{ margin: 0, paddingLeft: 20, fontFamily: 'monospace' }}>
          <li>Product Name: {productName ? productName : "—"}</li>
          <li>Category: {category ? category : "—"}</li>
          <li>Product Image: {imageProvided ? "Uploaded" : "—"}</li>
          <li>Product URL: {productUrl ? productUrl : "—"}</li>
          <li>Additional Context: {additionalContext ? "Provided" : "—"}</li>
        </ul>
      </Card>
      <Card padding="400">
        <BlockStack gap="100">
          <Text as="span" variant="bodySm" fontWeight="medium">
            {`“What we’re checking” checklist:`}
          </Text>
          <ul style={{ margin: 0, paddingLeft: 20, fontFamily: 'monospace' }}>
            {checklist.map((item) => (
              <li key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {statusIcon(item.status)} <span>{item.label} {item.status === 'completed' ? '(completed)' : '(working on...)'}</span>
              </li>
            ))}
          </ul>
        </BlockStack>
      </Card>
    </BlockStack>
  );
}

// --- MAIN CONTENT: Product Input Panel ---
export function ProductInputPanel({
  productName,
  setProductName,
  category,
  setCategory,
  imageFile,
  setImageFile,
  productUrl,
  setProductUrl,
  additionalContext,
  setAdditionalContext,
  onAnalyze,
  analyzeDisabled,
}: {
  productName: string;
  setProductName: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  imageFile: File | null;
  setImageFile: (f: File | null) => void;
  productUrl: string;
  setProductUrl: (v: string) => void;
  additionalContext: string;
  setAdditionalContext: (v: string) => void;
  onAnalyze: () => void;
  analyzeDisabled: boolean;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <Card padding="600">
      <FormLayout>
        <TextField
          label="Product Name"
          value={productName}
          onChange={setProductName}
          placeholder="e.g. Sony A7 Mirrorless Camera"
          autoComplete="off"
          requiredIndicator
        />
        <TextField
          label="Product Category"
          value={category}
          onChange={setCategory}
          placeholder="e.g. Camera, Electronics, Apparel"
          autoComplete="off"
          requiredIndicator
        />
        <BlockStack gap="100">
          <Text as="span" variant="bodySm">
            Product Image (optional)
          </Text>
          <DropZone
            accept="image/*"
            type="image"
            onDrop={(_files, acceptedFiles) => {
              setImageFile(acceptedFiles[0] || null);
            }}
            onFileDialogClose={() => {
              if (!imageFile) setImageFile(null);
            }}
          >
            {imageFile ? (
              <InlineStack gap="200" align="center">
                <Thumbnail
                  source={URL.createObjectURL(imageFile)}
                  alt="Uploaded product image"
                  size="small"
                />
                <Button
                  onClick={() => setImageFile(null)}
                  size="slim"
                  variant="tertiary"
                >
                  Remove
                </Button>
              </InlineStack>
            ) : (
              <DropZone.FileUpload actionTitle="Upload image" />
            )}
          </DropZone>
        </BlockStack>
        <TextField
          label="Product URL (optional)"
          value={productUrl}
          onChange={setProductUrl}
          placeholder="https://example.com/product"
          autoComplete="off"
          type="url"
        />
        <Button
          variant="primary"
          disabled={analyzeDisabled}
          onClick={onAnalyze}
        >
          Analyze
        </Button>
      </FormLayout>
    </Card>
  );
}

// --- RIGHT SIDEBAR: Guide Sidebar ---
export function GuideSidebar({ videoUrl }: { videoUrl?: string }) {
  return (
    <BlockStack gap="300">
      <BlockStack gap="100">
        {videoUrl ? (
          <div style={{ aspectRatio: '16/9', width: '100%', background: '#000', borderRadius: 8, overflow: 'hidden' }}>
            <iframe
              src={videoUrl}
              title="How Oraken Works"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div style={{ aspectRatio: '16/9', width: '100%', background: '#B5F5E3', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#222', position: 'relative' }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="8" fill="#B5F5E3" />
              <polygon points="18,14 36,24 18,34" fill="#222" />
            </svg>
            <span style={{ position: 'absolute', bottom: 8, right: 12, fontSize: 12, color: '#222', opacity: 0.7 }}>Video Thumbnails</span>
          </div>
        )}
      </BlockStack>
      <Text as="p" tone="subdued" variant="bodySm">
        Need help? Visit official docs{' '}
        <a href="https://oraken.io/docs/getting-started" target="_blank" rel="noopener noreferrer">https://oraken.io/docs/getting-started</a>
      </Text>
    </BlockStack>
  );
}
