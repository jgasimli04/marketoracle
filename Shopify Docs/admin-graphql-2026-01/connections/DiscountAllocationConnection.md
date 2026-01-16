---
title: DiscountAllocationConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple DiscountAllocations.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAllocationConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAllocationConnection.md
---

# Discount​Allocation​Connection

connection

An auto-generated type for paginating through multiple DiscountAllocations.

## Fields with this connection

* [Abandoned​Checkout​Line​Item.discountAllocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.discountAllocations)

  OBJECT

  A single line item in an abandoned checkout.

***

## Possible returns

* edges

  [\[Discount​Allocation​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Discount​Allocation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation)

  non-null

  A list of nodes that are contained in DiscountAllocationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Abandoned​Checkout​Line​Item.discountAllocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.discountAllocations)

### Possible returns

* <->[Discount​Allocation​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAllocationConnection#returns-edges)
* <->[Discount​Allocation​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAllocationConnection#returns-nodes)
* <->[Discount​Allocation​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAllocationConnection#returns-pageInfo)
