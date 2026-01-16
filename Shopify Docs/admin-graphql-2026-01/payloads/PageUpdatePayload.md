---
title: PageUpdatePayload - GraphQL Admin
description: Return type for `pageUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/payloads/PageUpdatePayload'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PageUpdatePayload.md
---

# Page​Update​Payload

payload

Return type for `pageUpdate` mutation.

## Fields

* page

  [Page](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page)

  The page that was updated.

* user​Errors

  [\[Page​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [page​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageUpdate)

  mutation

  Updates an existing page's content and settings.

  For example, merchants can update their "Shipping Policy" page when rates change, or refresh their "About Us" page with new team information.

  Use the `pageUpdate` mutation to:

  * Update page content and titles
  * Modify publication status
  * Change page handles for URL structure
  * Adjust template settings

  The mutation supports partial updates, allowing specific changes while preserving other page properties.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the page to be updated.

  * page

    [Page​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PageUpdateInput)

    required

    The properties of the page to be updated.

  ***

***

## Map

### Mutations with this payload

* [page​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/pageUpdate)
