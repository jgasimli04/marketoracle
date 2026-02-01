import { Card, BlockStack, Text, Button } from "@shopify/polaris";

// --- Oraken UX State 1: EMPTY / BEFORE INPUT ---
export function EmptyStateView() {
  return (
    <Card>
      <BlockStack gap="400" align="center">
        <Text as="h1" variant="headingLg">
          What am I supposed to do here?
        </Text>
        <BlockStack gap="200" align="center">
          {/* Placeholder for primary input */}
          <Text as="p" tone="subdued">
            (Input area coming soon)
          </Text>
          {/* Placeholder for primary action button */}
          <Button disabled variant="primary">
            Continue
          </Button>
        </BlockStack>
      </BlockStack>
    </Card>
  );
}

// --- Oraken UX State 2: LOADING / ANALYZING ---
export function LoadingStateView() {
  return (
    <Card>
      <BlockStack gap="400" align="center">
        <Text as="h1" variant="headingLg">
          Analyzing...
        </Text>
        {/* Placeholder checklist/skeletons */}
        <BlockStack gap="200" align="center">
          <Text as="p" tone="subdued">
            (Checklist or skeletons coming soon)
          </Text>
        </BlockStack>
        <Button disabled variant="primary">
          Please wait
        </Button>
      </BlockStack>
    </Card>
  );
}

// --- Oraken UX State 3: RESULT / VERDICT ---
export function VerdictLayout() {
  return (
    <Card>
      <BlockStack gap="400" align="center">
        <Text as="h1" variant="headingLg">
          Decision Outcome
        </Text>
        {/* Placeholder verdict container */}
        <Text as="p" tone="subdued">
          (Verdict container coming soon)
        </Text>
        {/* Placeholder reasoning section */}
        <Text as="p" tone="subdued">
          (Reasoning section coming soon)
        </Text>
        {/* Placeholder next-action section */}
        <Text as="p" tone="subdued">
          (Next-action section coming soon)
        </Text>
      </BlockStack>
    </Card>
  );
}

// --- Oraken UX State 4: ITERATION / COMPARISON ---
export function ComparisonLayout() {
  return (
    <Card>
      <BlockStack gap="400" align="center">
        <Text as="h1" variant="headingLg">
          Compare Decisions
        </Text>
        {/* Placeholder comparison layout */}
        <Text as="p" tone="subdued">
          (Comparison layout coming soon)
        </Text>
      </BlockStack>
    </Card>
  );
}
