---
title: DiscountSortKeys - GraphQL Admin
description: The set of valid sort keys for the Discount query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountSortKeys'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountSortKeys.md'
---

# Discount​Sort​Keys

enum

The set of valid sort keys for the Discount query.

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

* [Customer​Merge​Preview​Default​Fields.discountNodes(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.discountNodes.arguments.sortKey)

  ARGUMENT

  The fields that will be kept as part of a customer merge preview.

* [Query​Root.discountNodes(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.discountNodes.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [discount​Nodes.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodes#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Customer​Merge​Preview​Default​Fields.discountNodes(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.discountNodes.arguments.sortKey)
* <-|[Query​Root.discountNodes(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.discountNodes.arguments.sortKey)
* <-|[discount​Nodes.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodes#arguments-sortKey)
