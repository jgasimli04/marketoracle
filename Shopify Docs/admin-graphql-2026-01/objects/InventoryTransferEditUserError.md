---
title: InventoryTransferEditUserError - GraphQL Admin
description: An error that occurs during the execution of `InventoryTransferEdit`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferEditUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferEditUserError.md
---

# Inventory​Transfer​Edit​User​Error

object

An error that occurs during the execution of `InventoryTransferEdit`.

## Fields

* code

  [Inventory​Transfer​Edit​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferEditUserErrorCode)

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

* [inventory​Transfer​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferEdit)

  mutation

  Edits an inventory transfer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory Transfer to be edited.

  * input

    [Inventory​Transfer​Edit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferEditInput)

    required

    The input fields to edit the inventory transfer.

  ***

***

## <\~> InventoryTransferEditUserError Mutations

### Mutated by

* <\~>[inventory​Transfer​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferEdit)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryTransferEditUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
