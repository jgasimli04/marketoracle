---
title: ShopifyPaymentsChargeStatementDescriptor - GraphQL Admin
description: The charge descriptors for a payments account.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ShopifyPaymentsChargeStatementDescriptor
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ShopifyPaymentsChargeStatementDescriptor.md
---

# Shopify​Payments​Charge​Statement​Descriptor

interface

Requires `read_shopify_payments` access scope.

The charge descriptors for a payments account.

## Fields

* default

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The default charge statement descriptor.

* prefix

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The prefix of the statement descriptor.

***

## Types implemented in

* [Shopify​Payments​Default​Charge​Statement​Descriptor](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDefaultChargeStatementDescriptor)

  OBJECT

  The charge descriptors for a payments account.

  * default

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The default charge statement descriptor.

  * prefix

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The prefix of the statement descriptor.

* [Shopify​Payments​Jp​Charge​Statement​Descriptor](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsJpChargeStatementDescriptor)

  OBJECT

  The charge descriptors for a Japanese payments account.

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

##### Variables

```json
{
	"default": "",
	"prefix": ""
}
```

##### Schema

```graphql
interface ShopifyPaymentsChargeStatementDescriptor {
  default: String
  prefix: String!
}
```
