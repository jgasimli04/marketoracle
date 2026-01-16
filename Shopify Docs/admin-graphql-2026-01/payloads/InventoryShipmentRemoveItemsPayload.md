---
title: InventoryShipmentRemoveItemsPayload - GraphQL Admin
description: Return type for `inventoryShipmentRemoveItems` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentRemoveItemsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentRemoveItemsPayload.md
---

# Inventory​Shipment​Remove​Items​Payload

payload

Return type for `inventoryShipmentRemoveItems` mutation.

## Fields

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with items removed.

* user​Errors

  [\[Inventory​Shipment​Remove​Items​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentRemoveItemsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [inventory​Shipment​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryShipmentRemoveItems)
