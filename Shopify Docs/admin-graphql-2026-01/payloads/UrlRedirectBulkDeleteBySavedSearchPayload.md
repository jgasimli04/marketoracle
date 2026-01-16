---
title: UrlRedirectBulkDeleteBySavedSearchPayload - GraphQL Admin
description: Return type for `urlRedirectBulkDeleteBySavedSearch` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectBulkDeleteBySavedSearchPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectBulkDeleteBySavedSearchPayload.md
---

# Url​Redirect​Bulk​Delete​By​Saved​Search​Payload

payload

Return type for `urlRedirectBulkDeleteBySavedSearch` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job removing the redirects.

* user​Errors

  [\[Url​Redirect​Bulk​Delete​By​Saved​Search​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteBySavedSearchUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [url​Redirect​Bulk​Delete​By​Saved​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySavedSearch)

  mutation

  Asynchronously delete redirects in bulk.

  * saved​Search​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the URL redirect saved search for filtering.

  ***

***

## Map

### Mutations with this payload

* [url​Redirect​Bulk​Delete​By​Saved​Search](https://shopify.dev/docs/api/admin-graphql/latest/types/urlRedirectBulkDeleteBySavedSearch)
