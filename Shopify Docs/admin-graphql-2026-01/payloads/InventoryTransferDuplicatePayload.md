---
title: InventoryTransferDuplicatePayload - GraphQL Admin
description: Return type for `inventoryTransferDuplicate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferDuplicatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferDuplicatePayload.md
---

# Inventory​Transfer​Duplicate​Payload

payload

Return type for `inventoryTransferDuplicate` mutation.

## Fields

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The duplicated inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Duplicate​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferDuplicateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Transfer​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferDuplicate)

  mutation

  This mutation allows duplicating an existing inventory transfer. The duplicated transfer will have the same line items and quantities as the original transfer, but will be in a draft state with no shipments.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer to duplicate.

  ***

***

## Map

### Mutations with this payload

* [inventory​Transfer​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryTransferDuplicate)
