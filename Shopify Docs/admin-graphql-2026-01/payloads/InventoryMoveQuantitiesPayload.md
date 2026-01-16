---
title: InventoryMoveQuantitiesPayload - GraphQL Admin
description: Return type for `inventoryMoveQuantities` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryMoveQuantitiesPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryMoveQuantitiesPayload.md
---

# Inventory​Move​Quantities​Payload

payload

Return type for `inventoryMoveQuantities` mutation.

## Fields

* inventory​Adjustment​Group

  [Inventory​Adjustment​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup)

  The group of changes made by the operation.

* user​Errors

  [\[Inventory​Move​Quantities​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryMoveQuantitiesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Move​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryMoveQuantities)

  mutation

  Moves inventory quantities for a single inventory item between different states at a single location. Use this mutation to reallocate inventory across quantity states without moving it between locations.

  Each change specifies the quantity to move, the source state and location, and the destination state and location. The mutation returns an [`InventoryAdjustmentGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup) that tracks all changes made in a single operation, providing an audit trail with the reason and reference document URI.

  ***

  Caution

  As of version `2026-01`, this mutation supports an optional idempotency key using the `@idempotent` directive. As of version `2026-04`, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Move​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantitiesInput)

    required

    ### Arguments

    The information required to move inventory quantities.

  ***

***

## Map

### Mutations with this payload

* [inventory​Move​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryMoveQuantities)
