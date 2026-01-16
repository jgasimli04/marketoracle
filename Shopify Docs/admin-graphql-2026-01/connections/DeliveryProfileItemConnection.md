---
title: DeliveryProfileItemConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple DeliveryProfileItems.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileItemConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileItemConnection.md
---

# Delivery​Profile​Item​Connection

connection

An auto-generated type for paginating through multiple DeliveryProfileItems.

## Fields with this connection

* [Delivery​Profile.profileItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.profileItems)

  OBJECT

  A shipping profile that defines shipping rates for specific [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects. Delivery profiles determine which products can ship from which [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects to which zones, and at what rates.

  Profiles can associate with [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to provide custom shipping rules for subscriptions, such as free shipping or restricted delivery zones. The default profile applies to all products that aren't assigned to other profiles.

  Learn more about [building delivery profiles](https://shopify.dev/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

***

## Possible returns

* edges

  [\[Delivery​Profile​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Delivery​Profile​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileItem)

  non-null

  A list of nodes that are contained in DeliveryProfileItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Delivery​Profile.profileItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.profileItems)

### Possible returns

* <->[Delivery​Profile​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileItemConnection#returns-edges)
* <->[Delivery​Profile​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileItemConnection#returns-nodes)
* <->[Delivery​Profile​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileItemConnection#returns-pageInfo)
