---
title: InventoryShipmentSetTrackingUserError - GraphQL Admin
description: An error that occurs during the execution of `InventoryShipmentSetTracking`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentSetTrackingUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentSetTrackingUserError.md
---

# Inventory​Shipment​Set​Tracking​User​Error

object

An error that occurs during the execution of `InventoryShipmentSetTracking`.

## Fields

* code

  [Inventory​Shipment​Set​Tracking​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentSetTrackingUserErrorCode)

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

* [inventory​Shipment​Set​Tracking](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentSetTracking)

  mutation

  Edits the tracking info on an inventory shipment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment whose tracking info is being edited.

  * tracking

    [Inventory​Shipment​Tracking​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentTrackingInput)

    required

    The tracking info to edit on the inventory shipment.

  ***

***

## <\~> InventoryShipmentSetTrackingUserError Mutations

### Mutated by

* <\~>[inventory​Shipment​Set​Tracking](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentSetTracking)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryShipmentSetTrackingUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
