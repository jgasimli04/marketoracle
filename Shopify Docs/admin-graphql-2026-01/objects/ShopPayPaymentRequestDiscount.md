---
title: ShopPayPaymentRequestDiscount - GraphQL Admin
description: Represents a discount for a Shop Pay payment request.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestDiscount
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestDiscount.md
---

# Shop​Pay​Payment​Request​Discount

object

Represents a discount for a Shop Pay payment request.

## Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount of the discount.

* label

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The label of the discount.

***

## Map

### Fields with this object

* {}[ShopPayPaymentRequest.discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequest#field-ShopPayPaymentRequest.fields.discounts)
* {}[ShopPayPaymentRequestLineItem.itemDiscounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestLineItem#field-ShopPayPaymentRequestLineItem.fields.itemDiscounts)
* {}[ShopPayPaymentRequestLineItem.lineDiscounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestLineItem#field-ShopPayPaymentRequestLineItem.fields.lineDiscounts)
* {}[ShopPayPaymentRequestTotalShippingPrice.discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestTotalShippingPrice#field-ShopPayPaymentRequestTotalShippingPrice.fields.discounts)
