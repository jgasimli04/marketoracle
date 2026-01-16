---
title: ProfileItemSortKeys - GraphQL Admin
description: The set of valid sort keys for the ProfileItem query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ProfileItemSortKeys'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProfileItemSortKeys.md
---

# Profile​Item​Sort​Keys

enum

The set of valid sort keys for the ProfileItem query.

## Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* INVENTORY\_​TOTAL

  Sort by the `inventory_total` value.

* PRODUCT\_​TYPE

  Sort by the `product_type` value.

* PUBLISHED\_​AT

  Sort by the `published_at` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* TITLE

  Sort by the `title` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

* VENDOR

  Sort by the `vendor` value.

***

## Fields

* [Delivery​Profile.profileItems(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.profileItems.arguments.sortKey)

  ARGUMENT

  Deprecated

***

## Map
