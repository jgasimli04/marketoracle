---
title: DeliveryProductVariantsCount - GraphQL Admin
description: How many product variants are in a profile. This count is capped at 500.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProductVariantsCount
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProductVariantsCount.md
---

# Delivery​Product​Variants​Count

object

Requires Any of `shipping` access scopes or `manage_delivery_settings` user permission.

How many product variants are in a profile. This count is capped at 500.

## Fields

* capped

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the count has reached the cap of 500.

* count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The product variant count.

***

## Map
