---
title: CatalogSortKeys - GraphQL Admin
description: The set of valid sort keys for the Catalog query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogSortKeys'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogSortKeys.md'
---

# Catalog​Sort​Keys

enum

The set of valid sort keys for the Catalog query.

## Valid values

* ID

  Sort by the `id` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* TITLE

  Sort by the `title` value.

* TYPE

  Sort by the `type` value.

***

## Fields

* [Query​Root.catalogs(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.catalogs.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [catalogs.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Query​Root.catalogs(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.catalogs.arguments.sortKey)
* <-|[catalogs.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs#arguments-sortKey)
