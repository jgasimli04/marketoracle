import { Card, BlockStack, Text, TextField } from "@shopify/polaris";
import { useState, useEffect } from "react";

interface JSONMirrorProps {
  products: any;
  setProducts: (products: any) => void;
}

export function JSONMirror({ products, setProducts }: JSONMirrorProps) {
  const [jsonValue, setJsonValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Sync products to JSON textarea
  useEffect(() => {
    setJsonValue(JSON.stringify(products, null, 2));
  }, [products]);

  // Handle JSON edits
  function handleChange(val: string) {
    setJsonValue(val);
    try {
      const parsed = JSON.parse(val);
      setProducts(parsed);
      setError(null);
    } catch (e) {
      setError("Invalid JSON");
    }
  }

  return (
    <Card>
      <BlockStack gap="200">
        <Text as="h3" variant="headingSm">Products JSON</Text>
        <TextField
          label="Products JSON"
          labelHidden
          value={jsonValue}
          onChange={handleChange}
          multiline
          autoComplete="off"
          error={error || undefined}
          helpText="Live two-way binding. Edit to update products."
        />
      </BlockStack>
    </Card>
  );
}
