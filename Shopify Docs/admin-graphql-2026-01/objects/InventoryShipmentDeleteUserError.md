---
title: InventoryShipmentDeleteUserError - GraphQL Admin
description: An error that occurs during the execution of `InventoryShipmentDelete`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentDeleteUserError.md
---

# Inventory​Shipment​Delete​User​Error

object

An error that occurs during the execution of `InventoryShipmentDelete`.

## Fields

* code

  [Inventory​Shipment​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentDeleteUserErrorCode)

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

* [inventory​Shipment​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentDelete)

  mutation

  Deletes an inventory shipment. Only draft shipments can be deleted.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to be deleted.

  ***

***

## <\~> InventoryShipmentDeleteUserError Mutations

### Mutated by

* <\~>[inventory​Shipment​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryShipmentDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
