---
title: InventoryShipmentMarkInTransitUserError - GraphQL Admin
description: An error that occurs during the execution of `InventoryShipmentMarkInTransit`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentMarkInTransitUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentMarkInTransitUserError.md
---

# Inventory​Shipment​Mark​In​Transit​User​Error

object

An error that occurs during the execution of `InventoryShipmentMarkInTransit`.

## Fields

* code

  [Inventory​Shipment​Mark​In​Transit​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentMarkInTransitUserErrorCode)

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

* [inventory​Shipment​Mark​In​Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentMarkInTransit)

  mutation

  Marks a draft inventory shipment as in transit.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to mark in transit.

  * date​Shipped

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date the shipment was shipped.

  ***

***

## <\~> InventoryShipmentMarkInTransitUserError Mutations

### Mutated by

* <\~>[inventory​Shipment​Mark​In​Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentMarkInTransit)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryShipmentMarkInTransitUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
