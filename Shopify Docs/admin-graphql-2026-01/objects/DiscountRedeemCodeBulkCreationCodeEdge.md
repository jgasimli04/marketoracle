---
title: DiscountRedeemCodeBulkCreationCodeEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one DiscountRedeemCodeBulkCreationCode and
  a cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreationCodeEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreationCodeEdge.md
---

# Discount​Redeem​Code​Bulk​Creation​Code​Edge

object

An auto-generated type which holds one DiscountRedeemCodeBulkCreationCode and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Discount​Redeem​Code​Bulk​Creation​Code!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreationCode)

  non-null

  The item at the end of DiscountRedeemCodeBulkCreationCodeEdge.

***

## Map

### Connections with this object

* <->[DiscountRedeemCodeBulkCreationCodeConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeBulkCreationCodeConnection#returns-edges)
