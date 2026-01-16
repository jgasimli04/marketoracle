---
title: InventoryTransferCreateUserError - GraphQL Admin
description: An error that occurs during the execution of `InventoryTransferCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateUserError.md
---

# Inventory​Transfer​Create​User​Error

object

An error that occurs during the execution of `InventoryTransferCreate`.

## Fields

* code

  [Inventory​Transfer​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferCreateUserErrorCode)

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

* [inventory​Transfer​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreate)

  mutation

  Creates a draft inventory transfer to move inventory items between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects in your store. The transfer tracks which items to move, their quantities, and the origin and destination locations.

  Use [`inventoryTransferMarkAsReadyToShip`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferMarkAsReadyToShip) to mark the transfer as ready to ship.

  ***

  Caution

  As of version `2026-01`, this mutation supports an optional idempotency key using the `@idempotent` directive. As of version `2026-04`, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Transfer​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateInput)

    required

    ### Arguments

    The input fields for the inventory transfer.

  ***

***

## <\~> InventoryTransferCreateUserError Mutations

### Mutated by

* <\~>[inventory​Transfer​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryTransferCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
