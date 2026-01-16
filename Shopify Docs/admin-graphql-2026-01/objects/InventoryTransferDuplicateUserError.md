---
title: InventoryTransferDuplicateUserError - GraphQL Admin
description: An error that occurs during the execution of `InventoryTransferDuplicate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferDuplicateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferDuplicateUserError.md
---

# Inventory​Transfer​Duplicate​User​Error

object

An error that occurs during the execution of `InventoryTransferDuplicate`.

## Fields

* code

  [Inventory​Transfer​Duplicate​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferDuplicateUserErrorCode)

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

* [inventory​Transfer​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferDuplicate)

  mutation

  This mutation allows duplicating an existing inventory transfer. The duplicated transfer will have the same line items and quantities as the original transfer, but will be in a draft state with no shipments.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer to duplicate.

  ***

***

## <\~> InventoryTransferDuplicateUserError Mutations

### Mutated by

* <\~>[inventory​Transfer​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferDuplicate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryTransferDuplicateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
