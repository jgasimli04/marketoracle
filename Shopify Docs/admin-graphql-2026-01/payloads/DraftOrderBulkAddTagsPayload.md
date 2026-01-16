---
title: DraftOrderBulkAddTagsPayload - GraphQL Admin
description: Return type for `draftOrderBulkAddTags` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderBulkAddTagsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderBulkAddTagsPayload.md
---

# Draft​Order​Bulk​Add​Tags​Payload

payload

Return type for `draftOrderBulkAddTags` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job for adding tags to the draft orders.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [draft​Order​Bulk​Add​Tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkAddTags)

  mutation

  Adds tags to multiple draft orders.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The conditions for filtering draft orders on. See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax).

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order saved search for filtering draft orders on.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the draft orders to add tags to.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    List of tags to be added.

  ***

***

## Map

### Mutations with this payload

* [draft​Order​Bulk​Add​Tags](https://shopify.dev/docs/api/admin-graphql/latest/types/draftOrderBulkAddTags)
