---
title: InventoryShipmentCreateInTransitPayload - GraphQL Admin
description: Return type for `inventoryShipmentCreateInTransit` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentCreateInTransitPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentCreateInTransitPayload.md
---

# Inventory​Shipment​Create​In​Transit​Payload

payload

Return type for `inventoryShipmentCreateInTransit` mutation.

## Fields

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The created inventory shipment.

* user​Errors

  [\[Inventory​Shipment​Create​In​Transit​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentCreateInTransitUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Shipment​Create​In​Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreateInTransit)

  mutation

  Adds an in-transit shipment to an inventory transfer.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Shipment​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentCreateInput)

    required

    ### Arguments

    The input fields for the inventory shipment.

  ***

***

## Map

### Mutations with this payload

* [inventory​Shipment​Create​In​Transit](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryShipmentCreateInTransit)
