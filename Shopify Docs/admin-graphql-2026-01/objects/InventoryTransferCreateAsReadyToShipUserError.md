---
title: InventoryTransferCreateAsReadyToShipUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `InventoryTransferCreateAsReadyToShip`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateAsReadyToShipUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateAsReadyToShipUserError.md
---

# Inventory​Transfer​Create​As​Ready​To​Ship​User​Error

object

An error that occurs during the execution of `InventoryTransferCreateAsReadyToShip`.

## Fields

* code

  [Inventory​Transfer​Create​As​Ready​To​Ship​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferCreateAsReadyToShipUserErrorCode)

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

* [inventory​Transfer​Create​As​Ready​To​Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreateAsReadyToShip)

  mutation

  Creates an inventory transfer in ready to ship.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Transfer​Create​As​Ready​To​Ship​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateAsReadyToShipInput)

    required

    ### Arguments

    The input fields for the inventory transfer.

  ***

***

## <\~> InventoryTransferCreateAsReadyToShipUserError Mutations

### Mutated by

* <\~>[inventory​Transfer​Create​As​Ready​To​Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreateAsReadyToShip)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryTransferCreateAsReadyToShipUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
