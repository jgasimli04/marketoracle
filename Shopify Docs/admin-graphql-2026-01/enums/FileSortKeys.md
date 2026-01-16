---
title: FileSortKeys - GraphQL Admin
description: The set of valid sort keys for the File query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/FileSortKeys'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/FileSortKeys.md'
---

# File​Sort​Keys

enum

The set of valid sort keys for the File query.

## Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* FILENAME

  Sort by the `filename` value.

* ID

  Sort by the `id` value.

* ORIGINAL\_​UPLOAD\_​SIZE

  Sort by the `original_upload_size` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

## Fields

* [Query​Root.files(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.files.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [files.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Query​Root.files(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.files.arguments.sortKey)
* <-|[files.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#arguments-sortKey)
