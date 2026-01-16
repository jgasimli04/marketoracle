---
title: inventoryTransferDuplicate - GraphQL Admin
description: >-
  This mutation allows duplicating an existing inventory transfer. The
  duplicated transfer will have the same

  line items and quantities as the original transfer, but will be in a draft
  state with no shipments.


  > Caution:

  > As of 2026-01, this mutation supports an optional idempotency key using the
  `@idempotent` directive.

  > As of 2026-04, the idempotency key is required and must be provided using
  the `@idempotent` directive.

  > For more information, see the [idempotency
  documentation](https://shopify.dev/docs/api/usage/idempotent-requests).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferDuplicate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferDuplicate.md
---

# inventory​Transfer​Duplicate

mutation

Requires `write_inventory_transfers` access scope. Also: The user must have permission to manage inventory.

This mutation allows duplicating an existing inventory transfer. The duplicated transfer will have the same line items and quantities as the original transfer, but will be in a draft state with no shipments.

***

Caution

As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

***

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the inventory transfer to duplicate.

***

## Inventory​Transfer​Duplicate​Payload returns

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The duplicated inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Duplicate​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferDuplicateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### inventoryTransferDuplicate reference

## Mutation Reference

```graphql
mutation inventoryTransferDuplicate($id: ID!) {
  inventoryTransferDuplicate(id: $id) {
    inventoryTransfer {
      # InventoryTransfer fields
    }
    userErrors {
      field
      message
    }
  }
}
```

## Input

##### Variables

```json
{
  "id": "gid://shopify/<objectName>/10079785100"
}
```
