---
title: urlRedirectBulkDeleteBySearch - GraphQL Admin
description: Asynchronously delete redirects in bulk.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySearch
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySearch.md
---

# url​Redirect​Bulk​Delete​By​Search

mutation

Requires `write_online_store_navigation` access scope. Also: Requires an active user.

Asynchronously delete redirects in bulk.

## Arguments

* search

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  Search query for filtering redirects on (both Redirect from and Redirect to fields).

***

## Url​Redirect​Bulk​Delete​By​Search​Payload returns

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job removing the redirects.

* user​Errors

  [\[Url​Redirect​Bulk​Delete​By​Search​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteBySearchUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### urlRedirectBulkDeleteBySearch reference

## Mutation Reference

```graphql
mutation urlRedirectBulkDeleteBySearch($search: String!) {
  urlRedirectBulkDeleteBySearch(search: $search) {
    job {
      # Job fields
    }
    userErrors {
      field
      message
    }
  }
}
```

## Input

##### Variables

```json
{
  "search": "<your-search>"
}
```
