---
title: ShopifyPaymentsTransactionSet - GraphQL Admin
description: >-
  Presents all Shopify Payments specific information related to an order
  transaction.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsTransactionSet
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsTransactionSet.md
---

# Shopify​Payments​Transaction​Set

object

Requires `read_orders` access scope.

Presents all Shopify Payments specific information related to an order transaction.

## Fields

* extended​Authorization​Set

  [Shopify​Payments​Extended​Authorization](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsExtendedAuthorization)

  Contains all fields related to an extended authorization.

* refund​Set

  [Shopify​Payments​Refund​Set](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsRefundSet)

  Contains all fields related to a refund.

***

## Map

### Fields with this object

* {}[OrderTransaction.shopifyPaymentsSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.shopifyPaymentsSet)
