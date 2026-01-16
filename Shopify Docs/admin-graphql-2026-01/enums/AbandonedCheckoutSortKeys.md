---
title: AbandonedCheckoutSortKeys - GraphQL Admin
description: The set of valid sort keys for the AbandonedCheckout query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonedCheckoutSortKeys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonedCheckoutSortKeys.md
---

# Abandoned​Checkout​Sort​Keys

enum

The set of valid sort keys for the AbandonedCheckout query.

## Valid values

* CHECKOUT\_​ID

  Sort by the `checkout_id` value.

* CREATED\_​AT

  Sort by the `created_at` value.

* CUSTOMER\_​NAME

  Sort by the `customer_name` value.

* ID

  Sort by the `id` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* TOTAL\_​PRICE

  Sort by the `total_price` value.

***

## Fields

* [Query​Root.abandonedCheckouts(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.abandonedCheckouts.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [abandoned​Checkouts.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedCheckouts#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Query​Root.abandonedCheckouts(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.abandonedCheckouts.arguments.sortKey)
* <-|[abandoned​Checkouts.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedCheckouts#arguments-sortKey)
