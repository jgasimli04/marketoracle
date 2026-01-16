---
title: PriceRuleDiscountCodeConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple PriceRuleDiscountCodes.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceRuleDiscountCodeConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceRuleDiscountCodeConnection.md
---

# Price​Rule​Discount​Code​Connection

connection

An auto-generated type for paginating through multiple PriceRuleDiscountCodes.

## Fields with this connection

* [Price​Rule.discountCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.discountCodes)

  OBJECT

  A set of conditions, including entitlements and prerequisites, that must be met for a discount code to apply.

  ***

  Note

  Use the types and queries included our [discount tutorials](https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started) instead. These will replace the GraphQL Admin API's [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule) object and [`DiscountCode`](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode) union, and the REST Admin API's deprecated[`PriceRule`](https://shopify.dev/docs/api/admin-rest/unstable/resources/pricerule) resource.

  ***

***

## Possible returns

* edges

  [\[Price​Rule​Discount​Code​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleDiscountCodeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Price​Rule​Discount​Code!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleDiscountCode)

  non-null

  A list of nodes that are contained in PriceRuleDiscountCodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Price​Rule.discountCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.discountCodes)

### Possible returns

* <->[Price​Rule​Discount​Code​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceRuleDiscountCodeConnection#returns-edges)
* <->[Price​Rule​Discount​Code​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceRuleDiscountCodeConnection#returns-nodes)
* <->[Price​Rule​Discount​Code​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceRuleDiscountCodeConnection#returns-pageInfo)
