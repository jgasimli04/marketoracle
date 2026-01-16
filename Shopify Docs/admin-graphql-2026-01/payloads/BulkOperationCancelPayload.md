---
title: BulkOperationCancelPayload - GraphQL Admin
description: Return type for `bulkOperationCancel` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/BulkOperationCancelPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/BulkOperationCancelPayload.md
---

# Bulk​Operation​Cancel​Payload

payload

Return type for `bulkOperationCancel` mutation.

## Fields

* bulk​Operation

  [Bulk​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation)

  The bulk operation to be canceled.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [bulk​Operation​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationCancel)

  mutation

  Starts the cancelation process of a running bulk operation.

  There may be a short delay from when a cancelation starts until the operation is actually canceled.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the bulk operation to cancel.

  ***

***

## Map

### Mutations with this payload

* [bulk​Operation​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/types/bulkOperationCancel)
