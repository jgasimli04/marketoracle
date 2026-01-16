---
title: DeliveryBrandedPromise - GraphQL Admin
description: Represents a branded promise presented to buyers.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryBrandedPromise
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryBrandedPromise.md
---

# Delivery​Branded​Promise

object

Requires `read_orders` access scope.

Represents a branded promise presented to buyers.

## Fields

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The handle of the branded promise. For example: `shop_promise`.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the branded promise. For example: `Shop Promise`.

***

## Map

### Fields with this object

* {}[DeliveryMethod.brandedPromise](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethod#field-DeliveryMethod.fields.brandedPromise)
