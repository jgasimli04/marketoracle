---
title: InventoryShipmentCreateInTransitUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `InventoryShipmentCreateInTransit`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentCreateInTransitUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentCreateInTransitUserError.md
---

# Inventory​Shipment​Create​In​Transit​User​Error

object

An error that occurs during the execution of `InventoryShipmentCreateInTransit`.

## Fields

* code

  [Inventory​Shipment​Create​In​Transit​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentCreateInTransitUserErrorCode)

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

## <\~> InventoryShipmentCreateInTransitUserError Mutations

### Mutated by

* <\~>[inventory​Shipment​Create​In​Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreateInTransit)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryShipmentCreateInTransitUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
