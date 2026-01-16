---
title: InventoryTransferCancelUserError - GraphQL Admin
description: An error that occurs during the execution of `InventoryTransferCancel`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCancelUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCancelUserError.md
---

# Inventory​Transfer​Cancel​User​Error

object

An error that occurs during the execution of `InventoryTransferCancel`.

## Fields

* code

  [Inventory​Transfer​Cancel​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferCancelUserErrorCode)

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

* [inventory​Transfer​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCancel)

  mutation

  Cancels an inventory transfer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer to cancel.

  ***

***

## <\~> InventoryTransferCancelUserError Mutations

### Mutated by

* <\~>[inventory​Transfer​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCancel)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryTransferCancelUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
