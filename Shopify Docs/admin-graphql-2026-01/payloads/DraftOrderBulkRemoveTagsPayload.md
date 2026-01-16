---
title: DraftOrderBulkRemoveTagsPayload - GraphQL Admin
description: Return type for `draftOrderBulkRemoveTags` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderBulkRemoveTagsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderBulkRemoveTagsPayload.md
---

# Draft​Order​Bulk​Remove​Tags​Payload

payload

Return type for `draftOrderBulkRemoveTags` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job for removing tags from the draft orders.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [draft​Order​Bulk​Remove​Tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkRemoveTags)

  mutation

  Removes tags from multiple draft orders.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The conditions for filtering draft orders on. See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax).

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order saved search for filtering draft orders on.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the draft orders to remove tags from.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    List of tags to be removed.

  ***

***

## Map

### Mutations with this payload

* [draft​Order​Bulk​Remove​Tags](https://shopify.dev/docs/api/admin-graphql/latest/types/draftOrderBulkRemoveTags)
