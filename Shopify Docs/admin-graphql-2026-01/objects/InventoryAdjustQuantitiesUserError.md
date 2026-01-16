---
title: InventoryAdjustQuantitiesUserError - GraphQL Admin
description: An error that occurs during the execution of `InventoryAdjustQuantities`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustQuantitiesUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustQuantitiesUserError.md
---

# Inventory​Adjust​Quantities​User​Error

object

An error that occurs during the execution of `InventoryAdjustQuantities`.

## Fields

* code

  [Inventory​Adjust​Quantities​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryAdjustQuantitiesUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

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

## <\~> InventoryAdjustQuantitiesUserError Mutations

### Mutated by

* <\~>[inventory​Adjust​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryAdjustQuantities)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryAdjustQuantitiesUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
