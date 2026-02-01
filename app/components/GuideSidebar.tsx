import { Card, BlockStack, Text } from "@shopify/polaris";

interface GuideSidebarProps {
  videoUrl?: string;
}

export function GuideSidebar({ videoUrl }: GuideSidebarProps) {
  return (
    <Card>
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
          Define a product idea. Oraken evaluates demand, competition, pricing range, and market saturation before giving a clear recommendation.
        </Text>
      </BlockStack>
    </Card>
  );
}
