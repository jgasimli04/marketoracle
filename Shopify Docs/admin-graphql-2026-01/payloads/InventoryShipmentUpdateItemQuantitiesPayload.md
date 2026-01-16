---
title: InventoryShipmentUpdateItemQuantitiesPayload - GraphQL Admin
description: Return type for `inventoryShipmentUpdateItemQuantities` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentUpdateItemQuantitiesPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentUpdateItemQuantitiesPayload.md
---

# Inventory​Shipment​Update​Item​Quantities​Payload

payload

Return type for `inventoryShipmentUpdateItemQuantities` mutation.

## Fields

* shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with updated item quantities.

* updated​Line​Items

  [\[Inventory​Shipment​Line​Item!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem)

  The updated item quantities.

* user​Errors

  [\[Inventory​Shipment​Update​Item​Quantities​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentUpdateItemQuantitiesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [inventory​Shipment​Update​Item​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryShipmentUpdateItemQuantities)
