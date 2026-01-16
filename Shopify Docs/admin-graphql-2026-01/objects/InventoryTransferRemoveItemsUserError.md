---
title: InventoryTransferRemoveItemsUserError - GraphQL Admin
description: An error that occurs during the execution of `InventoryTransferRemoveItems`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferRemoveItemsUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferRemoveItemsUserError.md
---

# Inventory​Transfer​Remove​Items​User​Error

object

An error that occurs during the execution of `InventoryTransferRemoveItems`.

## Fields

* code

  [Inventory​Transfer​Remove​Items​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferRemoveItemsUserErrorCode)

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

* [inventory​Transfer​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems)

  mutation

  This mutation allows removing the shippable quantities of line items on a Transfer. It removes all quantities of the item from the transfer that are not associated with shipments.

  * input

    [Inventory​Transfer​Remove​Items​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferRemoveItemsInput)

    required

    ### Arguments

    The input fields for the InventoryTransferRemoveItems mutation.

  ***

***

## <\~> InventoryTransferRemoveItemsUserError Mutations

### Mutated by

* <\~>[inventory​Transfer​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryTransferRemoveItemsUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
