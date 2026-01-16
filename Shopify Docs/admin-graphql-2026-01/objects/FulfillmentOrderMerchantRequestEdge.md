---
title: FulfillmentOrderMerchantRequestEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one FulfillmentOrderMerchantRequest and a
  cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequestEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequestEdge.md
---

# Fulfillment​Order​Merchant​Request​Edge

object

An auto-generated type which holds one FulfillmentOrderMerchantRequest and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Fulfillment​Order​Merchant​Request!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest)

  non-null

  The item at the end of FulfillmentOrderMerchantRequestEdge.

***

## Map

### Connections with this object

* <->[FulfillmentOrderMerchantRequestConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderMerchantRequestConnection#returns-edges)
