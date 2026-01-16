---
title: CountryHarmonizedSystemCodeConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  CountryHarmonizedSystemCodes.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CountryHarmonizedSystemCodeConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CountryHarmonizedSystemCodeConnection.md
---

# Country​Harmonized​System​Code​Connection

connection

An auto-generated type for paginating through multiple CountryHarmonizedSystemCodes.

## Fields with this connection

* [Inventory​Item.countryHarmonizedSystemCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.countryHarmonizedSystemCodes)

  OBJECT

  A [product variant's](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) inventory information across all locations. The inventory item connects the product variant to its [inventory levels](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) at different locations, tracking stock keeping unit (SKU), whether quantities are tracked, shipping requirements, and customs information for the product.

  Learn more about [inventory object relationships](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

***

## Possible returns

* edges

  [\[Country​Harmonized​System​Code​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CountryHarmonizedSystemCodeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Country​Harmonized​System​Code!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CountryHarmonizedSystemCode)

  non-null

  A list of nodes that are contained in CountryHarmonizedSystemCodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Inventory​Item.countryHarmonizedSystemCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.countryHarmonizedSystemCodes)

### Possible returns

* <->[Country​Harmonized​System​Code​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CountryHarmonizedSystemCodeConnection#returns-edges)
* <->[Country​Harmonized​System​Code​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CountryHarmonizedSystemCodeConnection#returns-nodes)
* <->[Country​Harmonized​System​Code​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CountryHarmonizedSystemCodeConnection#returns-pageInfo)
