---
title: CombinedListingChildConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  CombinedListingChildren.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CombinedListingChildConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CombinedListingChildConnection.md
---

# Combined​Listing​Child​Connection

connection

An auto-generated type for paginating through multiple CombinedListingChildren.

## Fields with this connection

* [Combined​Listing.combinedListingChildren](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListing#field-CombinedListing.fields.combinedListingChildren)

  OBJECT

  A combined listing of products.

***

## Possible returns

* edges

  [\[Combined​Listing​Child​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingChildEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Combined​Listing​Child!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingChild)

  non-null

  A list of nodes that are contained in CombinedListingChildEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Combined​Listing.combinedListingChildren](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListing#field-CombinedListing.fields.combinedListingChildren)

### Possible returns

* <->[Combined​Listing​Child​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CombinedListingChildConnection#returns-edges)
* <->[Combined​Listing​Child​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CombinedListingChildConnection#returns-nodes)
* <->[Combined​Listing​Child​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CombinedListingChildConnection#returns-pageInfo)
