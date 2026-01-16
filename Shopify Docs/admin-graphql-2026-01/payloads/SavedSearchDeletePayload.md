---
title: SavedSearchDeletePayload - GraphQL Admin
description: Return type for `savedSearchDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SavedSearchDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SavedSearchDeletePayload.md
---

# Saved​Search​Delete​Payload

payload

Return type for `savedSearchDelete` mutation.

## Fields

* deleted​Saved​Search​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the saved search that was deleted.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The shop of the saved search that was deleted.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [saved​Search​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchDelete)

  mutation

  Delete a saved search.

  * input

    [Saved​Search​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchDeleteInput)

    required

    ### Arguments

    The input fields to delete a saved search.

  ***

***

## Map

### Mutations with this payload

* [saved​Search​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/savedSearchDelete)
