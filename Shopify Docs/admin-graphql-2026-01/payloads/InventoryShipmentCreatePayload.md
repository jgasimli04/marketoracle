---
title: InventoryShipmentCreatePayload - GraphQL Admin
description: Return type for `inventoryShipmentCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentCreatePayload.md
---

# Inventory​Shipment​Create​Payload

payload

Return type for `inventoryShipmentCreate` mutation.

## Fields

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The created inventory shipment.

* user​Errors

  [\[Inventory​Shipment​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Shipment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreate)

  mutation

  Adds a draft shipment to an inventory transfer.

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

* [inventory​Shipment​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryShipmentCreate)
