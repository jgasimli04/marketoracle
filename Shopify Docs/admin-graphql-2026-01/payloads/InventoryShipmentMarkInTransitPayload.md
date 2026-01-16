---
title: InventoryShipmentMarkInTransitPayload - GraphQL Admin
description: Return type for `inventoryShipmentMarkInTransit` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentMarkInTransitPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentMarkInTransitPayload.md
---

# Inventory​Shipment​Mark​In​Transit​Payload

payload

Return type for `inventoryShipmentMarkInTransit` mutation.

## Fields

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The marked in transit inventory shipment.

* user​Errors

  [\[Inventory​Shipment​Mark​In​Transit​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentMarkInTransitUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [inventory​Shipment​Mark​In​Transit](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryShipmentMarkInTransit)
