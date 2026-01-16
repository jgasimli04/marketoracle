---
title: InventorySetScheduledChangesUserError - GraphQL Admin
description: An error that occurs during the execution of `InventorySetScheduledChanges`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetScheduledChangesUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetScheduledChangesUserError.md
---

# Inventory​Set​Scheduled​Changes​User​Error

object

An error that occurs during the execution of `InventorySetScheduledChanges`.

## Fields

* code

  [Inventory​Set​Scheduled​Changes​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventorySetScheduledChangesUserErrorCode)

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

* [inventory​Set​Scheduled​Changes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetScheduledChanges)

  mutation

  Set up scheduled changes of inventory items.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Set​Scheduled​Changes​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetScheduledChangesInput)

    required

    ### Arguments

    The input fields for setting up scheduled changes of inventory items.

  ***

***

## <\~> InventorySetScheduledChangesUserError Mutations

### Mutated by

* <\~>[inventory​Set​Scheduled​Changes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetScheduledChanges)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventorySetScheduledChangesUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
