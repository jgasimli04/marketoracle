---
title: InventoryMoveQuantitiesUserError - GraphQL Admin
description: An error that occurs during the execution of `InventoryMoveQuantities`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryMoveQuantitiesUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryMoveQuantitiesUserError.md
---

# Inventory​Move​Quantities​User​Error

object

An error that occurs during the execution of `InventoryMoveQuantities`.

## Fields

* code

  [Inventory​Move​Quantities​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryMoveQuantitiesUserErrorCode)

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

## <\~> InventoryMoveQuantitiesUserError Mutations

### Mutated by

* <\~>[inventory​Move​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryMoveQuantities)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryMoveQuantitiesUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
