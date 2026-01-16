---
title: InventoryShipmentRemoveItemsUserError - GraphQL Admin
description: An error that occurs during the execution of `InventoryShipmentRemoveItems`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentRemoveItemsUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentRemoveItemsUserError.md
---

# Inventory​Shipment​Remove​Items​User​Error

object

An error that occurs during the execution of `InventoryShipmentRemoveItems`.

## Fields

* code

  [Inventory​Shipment​Remove​Items​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentRemoveItemsUserErrorCode)

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

* [inventory​Shipment​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentRemoveItems)

  mutation

  Remove items from an inventory shipment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to remove items from.

  * line​Items

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    A list of inventory shipment line item ids representing the items to be removed from the shipment.

  ***

***

## <\~> InventoryShipmentRemoveItemsUserError Mutations

### Mutated by

* <\~>[inventory​Shipment​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentRemoveItems)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryShipmentRemoveItemsUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
