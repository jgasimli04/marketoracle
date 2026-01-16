---
title: InventoryShipmentAddItemsPayload - GraphQL Admin
description: Return type for `inventoryShipmentAddItems` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentAddItemsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentAddItemsPayload.md
---

# Inventory​Shipment​Add​Items​Payload

payload

Return type for `inventoryShipmentAddItems` mutation.

## Fields

* added​Items

  [\[Inventory​Shipment​Line​Item!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem)

  The list of added line items.

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with the added items.

* user​Errors

  [\[Inventory​Shipment​Add​Items​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentAddItemsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Shipment​Add​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentAddItems)

  mutation

  Adds items to an inventory shipment.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to modify.

  * line​Items

    [\[Inventory​Shipment​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentLineItemInput)

    required

    The list of line items to add to the inventory shipment.

  ***

***

## Map

### Mutations with this payload

* [inventory​Shipment​Add​Items](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryShipmentAddItems)
