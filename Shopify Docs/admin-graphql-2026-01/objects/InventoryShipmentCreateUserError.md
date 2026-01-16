---
title: InventoryShipmentCreateUserError - GraphQL Admin
description: An error that occurs during the execution of `InventoryShipmentCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentCreateUserError.md
---

# Inventory​Shipment​Create​User​Error

object

An error that occurs during the execution of `InventoryShipmentCreate`.

## Fields

* code

  [Inventory​Shipment​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentCreateUserErrorCode)

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

## <\~> InventoryShipmentCreateUserError Mutations

### Mutated by

* <\~>[inventory​Shipment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryShipmentCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
