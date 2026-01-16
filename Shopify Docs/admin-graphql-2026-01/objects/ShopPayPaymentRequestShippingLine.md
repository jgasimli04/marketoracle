---
title: ShopPayPaymentRequestShippingLine - GraphQL Admin
description: Represents a shipping line for a Shop Pay payment request.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestShippingLine
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestShippingLine.md
---

# Shop​Pay​Payment​Request​Shipping​Line

object

Represents a shipping line for a Shop Pay payment request.

## Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount for the shipping line.

* code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The code of the shipping line.

* label

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The label of the shipping line.

***

## Map

### Fields with this object

* {}[ShopPayPaymentRequest.shippingLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequest#field-ShopPayPaymentRequest.fields.shippingLines)
