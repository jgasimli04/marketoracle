---
title: DeliveryLocationGroupZoneConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  DeliveryLocationGroupZones.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryLocationGroupZoneConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryLocationGroupZoneConnection.md
---

# Delivery​Location​Group​Zone​Connection

connection

An auto-generated type for paginating through multiple DeliveryLocationGroupZones.

## Fields with this connection

* [Delivery​Profile​Location​Group.locationGroupZones](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup#field-DeliveryProfileLocationGroup.fields.locationGroupZones)

  OBJECT

  Links a location group with zones. Both are associated to a delivery profile.

***

## Possible returns

* edges

  [\[Delivery​Location​Group​Zone​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroupZoneEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Delivery​Location​Group​Zone!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroupZone)

  non-null

  A list of nodes that are contained in DeliveryLocationGroupZoneEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Delivery​Profile​Location​Group.locationGroupZones](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup#field-DeliveryProfileLocationGroup.fields.locationGroupZones)

### Possible returns

* <->[Delivery​Location​Group​Zone​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryLocationGroupZoneConnection#returns-edges)
* <->[Delivery​Location​Group​Zone​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryLocationGroupZoneConnection#returns-nodes)
* <->[Delivery​Location​Group​Zone​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryLocationGroupZoneConnection#returns-pageInfo)
