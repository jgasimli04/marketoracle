---
title: PaymentCustomizationEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one PaymentCustomization and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationEdge.md
---

# Payment​Customization​Edge

object

An auto-generated type which holds one PaymentCustomization and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Payment​Customization!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization)

  non-null

  The item at the end of PaymentCustomizationEdge.

***

## Map

### Connections with this object

* <->[PaymentCustomizationConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentCustomizationConnection#returns-edges)
