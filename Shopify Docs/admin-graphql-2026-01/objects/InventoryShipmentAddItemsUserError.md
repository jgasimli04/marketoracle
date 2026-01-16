---
title: InventoryShipmentAddItemsUserError - GraphQL Admin
description: An error that occurs during the execution of `InventoryShipmentAddItems`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentAddItemsUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentAddItemsUserError.md
---

# Inventory​Shipment​Add​Items​User​Error

object

An error that occurs during the execution of `InventoryShipmentAddItems`.

## Fields

* code

  [Inventory​Shipment​Add​Items​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentAddItemsUserErrorCode)

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

## <\~> InventoryShipmentAddItemsUserError Mutations

### Mutated by

* <\~>[inventory​Shipment​Add​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentAddItems)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryShipmentAddItemsUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
