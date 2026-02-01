import { useState } from "react";
import { Popover, Button, ActionList, Box } from "@shopify/polaris";

const FIELD_OPTIONS = [
  { value: "category", label: "Category" },
  { value: "sku", label: "SKU" },
  { value: "delivery", label: "Delivery" },
  { value: "location", label: "Location" },
  { value: "color", label: "Color" },
  { value: "dimension", label: "Dimension" },
  { value: "weight", label: "Weight" },
  { value: "price", label: "Price" },
  { value: "stock", label: "Stock" },
];

const ELECTRONICS_SMART_FIELDS = [
  { value: "battery", label: "Battery life" },
  { value: "voltage", label: "Voltage" },
];

export function ProductCardFieldPopover({
  onAddField,
  existingFields,
  category
}: {
  onAddField: (field: string) => void;
  existingFields: string[];
  category?: string;
}) {
  const [active, setActive] = useState(false);
  const options = [
    ...FIELD_OPTIONS,
    ...(category && category.toLowerCase() === "electronics" ? ELECTRONICS_SMART_FIELDS : [])
  ].filter(opt => !existingFields.includes(opt.value));

  return (
    <Popover
      active={active}
      activator={<Button size="slim" onClick={() => setActive(!active)} icon="add" accessibilityLabel="Add field" />}
      onClose={() => setActive(false)}
      autofocusTarget="first-node"
    >
      <Box minWidth="200px">
        <ActionList
          items={options.map(opt => ({
            content: opt.label,
            onAction: () => {
              onAddField(opt.value);
              setActive(false);
            }
          }))}
        />
      </Box>
    </Popover>
  );
}
