---
title: DiscountRedeemCodeBulkCreationCodeConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  DiscountRedeemCodeBulkCreationCodes.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeBulkCreationCodeConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeBulkCreationCodeConnection.md
---

# Discount​Redeem​Code​Bulk​Creation​Code​Connection

connection

An auto-generated type for paginating through multiple DiscountRedeemCodeBulkCreationCodes.

## Fields with this connection

* [Discount​Redeem​Code​Bulk​Creation.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreation#field-DiscountRedeemCodeBulkCreation.fields.codes)

  OBJECT

  The properties and status of a bulk discount redeem code creation operation.

***

## Possible returns

* edges

  [\[Discount​Redeem​Code​Bulk​Creation​Code​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreationCodeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Discount​Redeem​Code​Bulk​Creation​Code!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreationCode)

  non-null

  A list of nodes that are contained in DiscountRedeemCodeBulkCreationCodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Discount​Redeem​Code​Bulk​Creation.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreation#field-DiscountRedeemCodeBulkCreation.fields.codes)

### Possible returns

* <->[Discount​Redeem​Code​Bulk​Creation​Code​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeBulkCreationCodeConnection#returns-edges)
* <->[Discount​Redeem​Code​Bulk​Creation​Code​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeBulkCreationCodeConnection#returns-nodes)
* <->[Discount​Redeem​Code​Bulk​Creation​Code​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeBulkCreationCodeConnection#returns-pageInfo)
