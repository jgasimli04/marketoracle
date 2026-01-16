---
title: UrlRedirectSortKeys - GraphQL Admin
description: The set of valid sort keys for the UrlRedirect query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectSortKeys'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectSortKeys.md
---

# Url​Redirect​Sort​Keys

enum

The set of valid sort keys for the UrlRedirect query.

## Valid values

* ID

  Sort by the `id` value.

* PATH

  Sort by the `path` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

***

## Fields

* [Query​Root.urlRedirects(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.urlRedirects.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [url​Redirects.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirects#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Query​Root.urlRedirects(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.urlRedirects.arguments.sortKey)
* <-|[url​Redirects.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirects#arguments-sortKey)
