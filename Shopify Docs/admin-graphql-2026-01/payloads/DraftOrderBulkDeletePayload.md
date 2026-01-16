---
title: DraftOrderBulkDeletePayload - GraphQL Admin
description: Return type for `draftOrderBulkDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderBulkDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderBulkDeletePayload.md
---

# Draft​Order​Bulk​Delete​Payload

payload

Return type for `draftOrderBulkDelete` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job for deleting the draft orders.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [draft​Order​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkDelete)

  mutation

  Deletes multiple draft orders.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The conditions for filtering draft orders on. See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax).

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order saved search for filtering draft orders on.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the draft orders to delete.

  ***

***

## Map

### Mutations with this payload

* [draft​Order​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/draftOrderBulkDelete)
