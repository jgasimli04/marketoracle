---
title: InventoryShipmentReceiveUserError - GraphQL Admin
description: An error that occurs during the execution of `InventoryShipmentReceive`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentReceiveUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentReceiveUserError.md
---

# Inventory​Shipment​Receive​User​Error

object

An error that occurs during the execution of `InventoryShipmentReceive`.

## Fields

* code

  [Inventory​Shipment​Receive​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentReceiveUserErrorCode)

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

## <\~> InventoryShipmentReceiveUserError Mutations

### Mutated by

* <\~>[inventory​Shipment​Receive](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentReceive)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryShipmentReceiveUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
