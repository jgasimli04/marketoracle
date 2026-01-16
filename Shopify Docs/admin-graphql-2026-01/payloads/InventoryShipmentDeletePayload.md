---
title: InventoryShipmentDeletePayload - GraphQL Admin
description: Return type for `inventoryShipmentDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentDeletePayload.md
---

# Inventory​Shipment​Delete​Payload

payload

Return type for `inventoryShipmentDelete` mutation.

## Fields

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the inventory shipment that was deleted.

* user​Errors

  [\[Inventory​Shipment​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [inventory​Shipment​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryShipmentDelete)
