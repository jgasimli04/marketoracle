---
title: UrlRedirectBulkDeleteAllPayload - GraphQL Admin
description: Return type for `urlRedirectBulkDeleteAll` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectBulkDeleteAllPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectBulkDeleteAllPayload.md
---

# Url​Redirect​Bulk​Delete​All​Payload

payload

Return type for `urlRedirectBulkDeleteAll` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job removing the redirects.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [url​Redirect​Bulk​Delete​All](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteAll)

  mutation

  Asynchronously delete [URL redirects](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) in bulk.

***

## Map

### Mutations with this payload

* [url​Redirect​Bulk​Delete​All](https://shopify.dev/docs/api/admin-graphql/latest/types/urlRedirectBulkDeleteAll)
