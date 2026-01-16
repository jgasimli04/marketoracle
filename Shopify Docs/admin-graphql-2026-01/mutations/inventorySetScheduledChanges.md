---
title: inventorySetScheduledChanges - GraphQL Admin
description: >-
  Set up scheduled changes of inventory items.


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
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetScheduledChanges
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetScheduledChanges.md
---

# inventory​Set​Scheduled​Changes

mutation

Requires `write_inventory` access scope. Also: The user must have permission to update an inventory.

Set up scheduled changes of inventory items.

***

Caution

As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

***

## Arguments

* input

  [Inventory​Set​Scheduled​Changes​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetScheduledChangesInput)

  required

  The input fields for setting up scheduled changes of inventory items.

***

## Inventory​Set​Scheduled​Changes​Payload returns

* scheduled​Changes

  [\[Inventory​Scheduled​Change!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryScheduledChange)

  The scheduled changes that were created.

* user​Errors

  [\[Inventory​Set​Scheduled​Changes​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetScheduledChangesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### inventorySetScheduledChanges reference

## Mutation Reference

```graphql
mutation inventorySetScheduledChanges($input: InventorySetScheduledChangesInput!) {
  inventorySetScheduledChanges(input: $input) {
    scheduledChanges {
      # InventoryScheduledChange fields
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
  "input": {
    "reason": "<your-reason>",
    "items": [
      {
        "inventoryItemId": "gid://shopify/<objectName>/10079785100",
        "locationId": "gid://shopify/<objectName>/10079785100",
        "ledgerDocumentUri": "https://example.myshopify.com",
        "scheduledChanges": [
          {}
        ]
      }
    ],
    "referenceDocumentUri": "https://example.myshopify.com"
  }
}
```

##### Schema

```graphql
input InventorySetScheduledChangesInput {
  reason: String!
  items: [InventoryScheduledChangeItemInput!]!
  referenceDocumentUri: URL!
}

input InventoryScheduledChangeItemInput {
  inventoryItemId: ID!
  locationId: ID!
  ledgerDocumentUri: URL!
  scheduledChanges: [InventoryScheduledChangeInput!]!
}
```
