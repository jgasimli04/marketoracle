---
title: PaymentMandateResourceEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one PaymentMandateResource and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandateResourceEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandateResourceEdge.md
---

# Payment​Mandate​Resource​Edge

object

An auto-generated type which holds one PaymentMandateResource and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Payment​Mandate​Resource!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandateResource)

  non-null

  The item at the end of PaymentMandateResourceEdge.

***

## Map

### Connections with this object

* <->[PaymentMandateResourceConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentMandateResourceConnection#returns-edges)
