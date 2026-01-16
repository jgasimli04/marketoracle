---
title: CodeDiscountSortKeys - GraphQL Admin
description: The set of valid sort keys for the CodeDiscount query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CodeDiscountSortKeys'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CodeDiscountSortKeys.md
---

# Code​Discount​Sort​Keys

enum

The set of valid sort keys for the CodeDiscount query.

## Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ENDS\_​AT

  Sort by the `ends_at` value.

* ID

  Sort by the `id` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* STARTS\_​AT

  Sort by the `starts_at` value.

* TITLE

  Sort by the `title` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

## Fields

* [Query​Root.codeDiscountNodes(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.codeDiscountNodes.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [code​Discount​Nodes.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Query​Root.codeDiscountNodes(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.codeDiscountNodes.arguments.sortKey)
* <-|[code​Discount​Nodes.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#arguments-sortKey)
