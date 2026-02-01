import { Box, TextField, Button, Tag } from "@shopify/polaris";
import { useState } from "react";

interface ChatboxProps {
  value: string;
  onChange: (v: string) => void;
  onAnalyze: () => void;
  analyzeDisabled: boolean;
  analyzeLoading?: boolean;
  replyingTo?: string;
}

export function Chatbox({ value, onChange, onAnalyze, analyzeDisabled, analyzeLoading = false, replyingTo }: ChatboxProps) {
  return (
    <Box padding="200" background="bg" width="100%">
      {replyingTo && (
        <div style={{ marginBottom: 8 }}>
          <Tag>{replyingTo}</Tag>
        </div>
      )}
      <TextField
        label="Context / Message"
        labelHidden
        value={value}
        onChange={onChange}
        placeholder="Add context or ask a question..."
        multiline
        autoComplete="off"
      />
      <div style={{ marginTop: 16 }}>
        <Button
          variant="primary"
          fullWidth
          disabled={analyzeDisabled}
          loading={analyzeLoading}
          onClick={onAnalyze}
          size="large"
        >
          Analyze
        </Button>
      </div>
    </Box>
  );
}
