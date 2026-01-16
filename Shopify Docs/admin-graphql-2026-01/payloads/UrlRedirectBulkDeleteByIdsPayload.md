---
title: UrlRedirectBulkDeleteByIdsPayload - GraphQL Admin
description: Return type for `urlRedirectBulkDeleteByIds` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectBulkDeleteByIdsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectBulkDeleteByIdsPayload.md
---

# Url​Redirect​Bulk​Delete​By​Ids​Payload

payload

Return type for `urlRedirectBulkDeleteByIds` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job removing the redirects.

* user​Errors

  [\[Url​Redirect​Bulk​Delete​By​Ids​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteByIdsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [url​Redirect​Bulk​Delete​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteByIds)

  mutation

  Asynchronously delete [URLRedirect](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) objects in bulk by IDs. Learn more about [URLRedirect](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) objects.

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of [`URLRedirect`](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) object IDs to delete.

  ***

***

## Map

### Mutations with this payload

* [url​Redirect​Bulk​Delete​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/types/urlRedirectBulkDeleteByIds)
