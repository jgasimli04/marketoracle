import { Card, BlockStack, Text, Box, Spinner, Icon } from "@shopify/polaris";
import { ClockIcon } from '@shopify/polaris-icons';

interface LogItem {
  icon: string;
  text: string;
  status: 'pending' | 'done';
  ts: string;
}

interface DecisionTerminalProps {
  productName: string;
  category: string;
  imageProvided: boolean;
  productUrl: string;
  additionalContext: string;
  appState: 'IDLE' | 'ANALYZING';
  logQueue: LogItem[];
}

export function DecisionTerminal({
  productName,
  category,
  imageProvided,
  productUrl,
  additionalContext,
  appState,
  logQueue,
}: DecisionTerminalProps) {
  if (appState === 'ANALYZING') {
    return (
      <Card>
        <BlockStack gap="200">
          <Box paddingBlockStart="200" paddingBlockEnd="100" paddingInline="200">
            <Text as="h2" variant="headingSm" fontWeight="medium" tone="subdued">
              System Execution... <Spinner size="small" accessibilityLabel="Processing" />
            </Text>
          </Box>
          <Box paddingInline="200">
            <div style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', fontSize: 14, background: '#FAFBFB', borderRadius: 6, minHeight: 180, margin: 0, padding: 0 }}>
              <ul style={{ margin: 0, padding: 0 }}>
                {logQueue.map((log, idx) => (
                  <li key={idx} style={{
                    color: log.status === 'done' ? '#637381' : '#212B36',
                    opacity: log.status === 'done' ? 0.7 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 8,
                    listStyle: 'none',
                  }}>
                    <span style={{ width: 22, display: 'inline-block', textAlign: 'center' }}>{log.icon}</span>
                    <span style={{ fontFamily: 'inherit', fontSize: 14 }}>{`[${log.ts}]`}</span>
                    <span style={{ fontFamily: 'inherit', fontSize: 14, marginLeft: 8 }}>{log.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Box>
        </BlockStack>
      </Card>
    );
  }

  // IDLE: Session Inputs
  return (
    <Card>
      <BlockStack gap="200">
        <Text as="h2" variant="headingSm" fontWeight="medium">
          Session Inputs
        </Text>
        <Text as="p" variant="bodySm" tone="subdued">
          What Oraken understands so far
        </Text>
        <ul style={{ margin: 0, paddingLeft: 20, fontFamily: 'monospace', fontSize: 14 }}>
          <li>Product Name: {productName ? productName : "—"}</li>
          <li>Category: {category ? category : "—"}</li>
          <li>Product Image: {imageProvided ? "Uploaded" : "—"}</li>
          <li>Product URL: {productUrl ? productUrl : "—"}</li>
          <li>Additional Context: {additionalContext ? "Provided" : "—"}</li>
        </ul>
      </BlockStack>
    </Card>
  );
}
