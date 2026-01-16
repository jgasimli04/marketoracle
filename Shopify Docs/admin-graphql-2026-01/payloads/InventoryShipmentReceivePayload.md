---
title: InventoryShipmentReceivePayload - GraphQL Admin
description: Return type for `inventoryShipmentReceive` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentReceivePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryShipmentReceivePayload.md
---

# Inventory​Shipment​Receive​Payload

payload

Return type for `inventoryShipmentReceive` mutation.

## Fields

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with received items.

* user​Errors

  [\[Inventory​Shipment​Receive​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentReceiveUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Shipment​Receive](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentReceive)

  mutation

  Receive an inventory shipment.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to receive.

  * line​Items

    [\[Inventory​Shipment​Receive​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentReceiveItemInput)

    The list of receive line items for the inventory shipment.

  * date​Received

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date the inventory shipment was initially received.

  * bulk​Receive​Action

    [Inventory​Shipment​Receive​Line​Item​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentReceiveLineItemReason)

    The bulk receive action for the inventory shipment.

  ***

***

## Map

### Mutations with this payload

* [inventory​Shipment​Receive](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryShipmentReceive)
