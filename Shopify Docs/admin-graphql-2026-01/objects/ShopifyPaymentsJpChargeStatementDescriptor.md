---
title: ShopifyPaymentsJpChargeStatementDescriptor - GraphQL Admin
description: The charge descriptors for a Japanese payments account.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsJpChargeStatementDescriptor
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsJpChargeStatementDescriptor.md
---

# Shopify​Payments​Jp​Charge​Statement​Descriptor

object

Requires `read_shopify_payments` access scope.

The charge descriptors for a Japanese payments account.

## Fields

* default

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The default charge statement descriptor.

* kana

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The charge statement descriptor in kana.

* kanji

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The charge statement descriptor in kanji.

* prefix

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The prefix of the statement descriptor.

***

## Map

No referencing types

***

## Interfaces

* [Shopify​Payments​Charge​Statement​Descriptor](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ShopifyPaymentsChargeStatementDescriptor)

  interface

***

## ||-ShopifyPaymentsJpChargeStatementDescriptor Implements

### Implements

* ||-[Shopify​Payments​Charge​Statement​Descriptor](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ShopifyPaymentsChargeStatementDescriptor)
