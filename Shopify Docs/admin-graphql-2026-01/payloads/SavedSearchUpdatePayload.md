---
title: SavedSearchUpdatePayload - GraphQL Admin
description: Return type for `savedSearchUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SavedSearchUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SavedSearchUpdatePayload.md
---

# Saved​Search​Update​Payload

payload

Return type for `savedSearchUpdate` mutation.

## Fields

* saved​Search

  [Saved​Search](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch)

  The saved search that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [saved​Search​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchUpdate)

  mutation

  Updates a saved search.

  * input

    [Saved​Search​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchUpdateInput)

    required

    ### Arguments

    The input fields to update a saved search.

  ***

***

## Map

### Mutations with this payload

* [saved​Search​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/savedSearchUpdate)
