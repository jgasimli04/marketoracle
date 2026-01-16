---
title: InventoryShipmentSetTrackingPayload - GraphQL Admin
description: Return type for `inventoryShipmentSetTracking` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentSetTrackingPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentSetTrackingPayload.md
---

# Inventory​Shipment​Set​Tracking​Payload

payload

Return type for `inventoryShipmentSetTracking` mutation.

## Fields

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with the edited tracking info.

* user​Errors

  [\[Inventory​Shipment​Set​Tracking​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentSetTrackingUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [inventory​Shipment​Set​Tracking](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryShipmentSetTracking)
