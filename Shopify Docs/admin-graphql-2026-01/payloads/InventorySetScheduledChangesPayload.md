---
title: InventorySetScheduledChangesPayload - GraphQL Admin
description: Return type for `inventorySetScheduledChanges` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventorySetScheduledChangesPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventorySetScheduledChangesPayload.md
---

# Inventory​Set​Scheduled​Changes​Payload

payload

Return type for `inventorySetScheduledChanges` mutation.

## Fields

* scheduled​Changes

  [\[Inventory​Scheduled​Change!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryScheduledChange)

  The scheduled changes that were created.

* user​Errors

  [\[Inventory​Set​Scheduled​Changes​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetScheduledChangesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [inventory​Set​Scheduled​Changes](https://shopify.dev/docs/api/admin-graphql/latest/types/inventorySetScheduledChanges)
