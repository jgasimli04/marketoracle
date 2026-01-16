---
title: CompanyContactConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple CompanyContacts.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactConnection.md
---

# Company​Contact​Connection

connection

An auto-generated type for paginating through multiple CompanyContacts.

## Fields with this connection

* [Company.contacts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.contacts)

  OBJECT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

***

## Possible returns

* edges

  [\[Company​Contact​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Company​Contact!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

  non-null

  A list of nodes that are contained in CompanyContactEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Company.contacts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.contacts)

### Possible returns

* <->[Company​Contact​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactConnection#returns-edges)
* <->[Company​Contact​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactConnection#returns-nodes)
* <->[Company​Contact​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactConnection#returns-pageInfo)
