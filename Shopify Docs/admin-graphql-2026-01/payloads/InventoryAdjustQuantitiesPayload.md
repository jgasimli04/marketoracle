---
title: InventoryAdjustQuantitiesPayload - GraphQL Admin
description: Return type for `inventoryAdjustQuantities` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryAdjustQuantitiesPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryAdjustQuantitiesPayload.md
---

# Inventory​Adjust​Quantities​Payload

payload

Return type for `inventoryAdjustQuantities` mutation.

## Fields

* inventory​Adjustment​Group

  [Inventory​Adjustment​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup)

  The group of changes made by the operation.

* user​Errors

  [\[Inventory​Adjust​Quantities​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustQuantitiesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Adjust​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryAdjustQuantities)

  mutation

  Adjusts quantities for inventory items by applying incremental changes at specific locations. Each adjustment modifies the quantity by a delta value rather than setting an absolute amount.

  The mutation tracks adjustments with a reason code and optional reference URI for audit trails. Returns an [`InventoryAdjustmentGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup) that records all changes made in the operation.

  Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#adjust-inventory-quantities).

  ***

  Caution

  As of version `2026-01`, this mutation supports an optional idempotency key using the `@idempotent` directive. As of version `2026-04`, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Adjust​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryAdjustQuantitiesInput)

    required

    ### Arguments

    The information required to adjust inventory quantities.

  ***

***

## Map

### Mutations with this payload

* [inventory​Adjust​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryAdjustQuantities)
