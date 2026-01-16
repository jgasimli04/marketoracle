---
title: InventorySetQuantitiesUserError - GraphQL Admin
description: An error that occurs during the execution of `InventorySetQuantities`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetQuantitiesUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetQuantitiesUserError.md
---

# Inventory​Set​Quantities​User​Error

object

An error that occurs during the execution of `InventorySetQuantities`.

## Fields

* code

  [Inventory​Set​Quantities​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventorySetQuantitiesUserErrorCode)

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

* [inventory​Set​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetQuantities)

  mutation

  Set quantities of specified name using absolute values. This mutation supports compare-and-set functionality to handle concurrent requests properly. If `ignoreCompareQuantity` is not set to true, the mutation will only update the quantity if the persisted quantity matches the `compareQuantity` value. If the `compareQuantity` value does not match the persisted value, the mutation will return an error. In order to opt out of the `compareQuantity` check, the `ignoreCompareQuantity` argument can be set to true.

  ***

  Note

  Only use this mutation if calling on behalf of a system that acts as the source of truth for inventory quantities, otherwise please consider using the [inventoryAdjustQuantities](https://shopify.dev/api/admin-graphql/latest/mutations/inventoryAdjustQuantities) mutation.

  Opting out of the `compareQuantity` check can lead to inaccurate inventory quantities if multiple requests are made concurrently. It is recommended to always include the `compareQuantity` value to ensure the accuracy of the inventory quantities and to opt out of the check using `ignoreCompareQuantity` only when necessary.

  ***

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Set​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetQuantitiesInput)

    required

    ### Arguments

    The information required to set inventory quantities.

  ***

***

## <\~> InventorySetQuantitiesUserError Mutations

### Mutated by

* <\~>[inventory​Set​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetQuantities)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventorySetQuantitiesUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
