---
title: UrlRedirectBulkDeleteBySearchPayload - GraphQL Admin
description: Return type for `urlRedirectBulkDeleteBySearch` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectBulkDeleteBySearchPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectBulkDeleteBySearchPayload.md
---

# Url​Redirect​Bulk​Delete​By​Search​Payload

payload

Return type for `urlRedirectBulkDeleteBySearch` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job removing the redirects.

* user​Errors

  [\[Url​Redirect​Bulk​Delete​By​Search​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteBySearchUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [url​Redirect​Bulk​Delete​By​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySearch)

  mutation

  Asynchronously delete redirects in bulk.

  * search

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Search query for filtering redirects on (both Redirect from and Redirect to fields).

  ***

***

## Map

### Mutations with this payload

* [url​Redirect​Bulk​Delete​By​Search](https://shopify.dev/docs/api/admin-graphql/latest/types/urlRedirectBulkDeleteBySearch)
