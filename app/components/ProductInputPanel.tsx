import { Card, BlockStack, TextField, Button, FormLayout, DropZone, Thumbnail } from "@shopify/polaris";
import { useRef } from "react";

interface ProductInputPanelProps {
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
  analyzeLoading?: boolean;
}

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
  analyzeLoading = false,
}: ProductInputPanelProps) {
  return (
    <Card>
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
              <BlockStack gap="100">
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
              </BlockStack>
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
          loading={analyzeLoading}
          onClick={onAnalyze}
        >
          Analyze
        </Button>
      </FormLayout>
    </Card>
  );
}
