---
title: SavedSearchCreatePayload - GraphQL Admin
description: Return type for `savedSearchCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SavedSearchCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SavedSearchCreatePayload.md
---

# Saved​Search​Create​Payload

payload

Return type for `savedSearchCreate` mutation.

## Fields

* saved​Search

  [Saved​Search](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch)

  The saved search that was created.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [saved​Search​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchCreate)

  mutation

  Creates a saved search.

  * input

    [Saved​Search​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchCreateInput)

    required

    ### Arguments

    Specifies the input fields for a saved search.

  ***

***

## Map

### Mutations with this payload

* [saved​Search​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/savedSearchCreate)
