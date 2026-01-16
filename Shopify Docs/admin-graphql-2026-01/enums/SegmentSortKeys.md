---
title: SegmentSortKeys - GraphQL Admin
description: The set of valid sort keys for the Segment query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/SegmentSortKeys'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/SegmentSortKeys.md'
---

# Segment​Sort​Keys

enum

The set of valid sort keys for the Segment query.

## Valid values

* CREATION\_​DATE

  Sort by the `creation_date` value.

* ID

  Sort by the `id` value.

* LAST\_​EDIT\_​DATE

  Sort by the `last_edit_date` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

***

## Fields

* [Query​Root.segments(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.segments.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [segments.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/segments#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Query​Root.segments(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.segments.arguments.sortKey)
* <-|[segments.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/segments#arguments-sortKey)
