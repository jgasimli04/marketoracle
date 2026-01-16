---
title: InventoryTransferDeleteUserError - GraphQL Admin
description: An error that occurs during the execution of `InventoryTransferDelete`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferDeleteUserError.md
---

# Inventory​Transfer​Delete​User​Error

object

An error that occurs during the execution of `InventoryTransferDelete`.

## Fields

* code

  [Inventory​Transfer​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferDeleteUserErrorCode)

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

* [inventory​Transfer​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferDelete)

  mutation

  Deletes an inventory transfer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer to delete.

  ***

***

## <\~> InventoryTransferDeleteUserError Mutations

### Mutated by

* <\~>[inventory​Transfer​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryTransferDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
