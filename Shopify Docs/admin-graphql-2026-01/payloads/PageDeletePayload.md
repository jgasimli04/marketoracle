---
title: PageDeletePayload - GraphQL Admin
description: Return type for `pageDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/payloads/PageDeletePayload'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PageDeletePayload.md
---

# Page​Delete​Payload

payload

Return type for `pageDelete` mutation.

## Fields

* deleted​Page​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted page.

* user​Errors

  [\[Page​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [page​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageDelete)

  mutation

  Permanently deletes a page from the online store.

  For example, merchants might delete seasonal landing pages after campaigns end, or remove outdated policy pages when terms change.

  Use the `pageDelete` mutation to:

  * Remove outdated or unnecessary pages
  * Clean up seasonal landing pages
  * Delete duplicate pages

  The deletion is permanent and returns the deleted page's ID for confirmation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the page to be deleted.

  ***

***

## Map

### Mutations with this payload

* [page​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/pageDelete)
