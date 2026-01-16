---
title: InventoryTransferMarkAsReadyToShipUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `InventoryTransferMarkAsReadyToShip`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferMarkAsReadyToShipUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferMarkAsReadyToShipUserError.md
---

# Inventory​Transfer​Mark​As​Ready​To​Ship​User​Error

object

An error that occurs during the execution of `InventoryTransferMarkAsReadyToShip`.

## Fields

* code

  [Inventory​Transfer​Mark​As​Ready​To​Ship​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferMarkAsReadyToShipUserErrorCode)

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

* [inventory​Transfer​Mark​As​Ready​To​Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferMarkAsReadyToShip)

  mutation

  Sets an inventory transfer to ready to ship.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer to mark as ready to ship.

  ***

***

## <\~> InventoryTransferMarkAsReadyToShipUserError Mutations

### Mutated by

* <\~>[inventory​Transfer​Mark​As​Ready​To​Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferMarkAsReadyToShip)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryTransferMarkAsReadyToShipUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
