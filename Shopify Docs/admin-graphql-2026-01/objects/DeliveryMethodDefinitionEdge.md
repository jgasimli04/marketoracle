---
title: DeliveryMethodDefinitionEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one DeliveryMethodDefinition and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinitionEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinitionEdge.md
---

# Delivery​Method​Definition​Edge

object

An auto-generated type which holds one DeliveryMethodDefinition and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Delivery​Method​Definition!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinition)

  non-null

  The item at the end of DeliveryMethodDefinitionEdge.

***

## Map

### Connections with this object

* <->[DeliveryMethodDefinitionConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryMethodDefinitionConnection#returns-edges)
