---
title: InventoryTransferSetItemsUserError - GraphQL Admin
description: An error that occurs during the execution of `InventoryTransferSetItems`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferSetItemsUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferSetItemsUserError.md
---

# Inventory​Transfer​Set​Items​User​Error

object

An error that occurs during the execution of `InventoryTransferSetItems`.

## Fields

* code

  [Inventory​Transfer​Set​Items​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferSetItemsUserErrorCode)

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

* [inventory​Transfer​Set​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems)

  mutation

  This mutation allows for the setting of line items on a Transfer. Will replace the items already set, if any.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Transfer​Set​Items​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferSetItemsInput)

    required

    ### Arguments

    The input fields for the InventoryTransferSetItems mutation.

  ***

***

## <\~> InventoryTransferSetItemsUserError Mutations

### Mutated by

* <\~>[inventory​Transfer​Set​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryTransferSetItemsUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
