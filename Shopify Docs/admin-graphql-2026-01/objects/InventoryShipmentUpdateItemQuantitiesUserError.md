---
title: InventoryShipmentUpdateItemQuantitiesUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `InventoryShipmentUpdateItemQuantities`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentUpdateItemQuantitiesUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentUpdateItemQuantitiesUserError.md
---

# Inventory​Shipment​Update​Item​Quantities​User​Error

object

An error that occurs during the execution of `InventoryShipmentUpdateItemQuantities`.

## Fields

* code

  [Inventory​Shipment​Update​Item​Quantities​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentUpdateItemQuantitiesUserErrorCode)

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

* [inventory​Shipment​Update​Item​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentUpdateItemQuantities)

  mutation

  Updates items on an inventory shipment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to update item quantities.

  * items

    [\[Inventory​Shipment​Update​Item​Quantities​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentUpdateItemQuantitiesInput)

    Default:\[]

    The list of line items to be updated to the shipment.

  ***

***

## <\~> InventoryShipmentUpdateItemQuantitiesUserError Mutations

### Mutated by

* <\~>[inventory​Shipment​Update​Item​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentUpdateItemQuantities)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryShipmentUpdateItemQuantitiesUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
