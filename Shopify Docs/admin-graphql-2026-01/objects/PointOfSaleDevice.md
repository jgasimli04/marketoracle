---
title: PointOfSaleDevice - GraphQL Admin
description: Represents a mobile device that Shopify Point of Sale has been installed on.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevice'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevice.md
---

# Point​Of​Sale​Device

object

Requires `read_orders` access scope, `read_marketplace_orders` access scope or `read_point_of_sale_devices` access scope.

Represents a mobile device that Shopify Point of Sale has been installed on.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

***

## Map

### Fields with this object

* {}[OrderTransaction.device](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.device)

***

## Queries

* [point​Of​Sale​Device](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointOfSaleDevice)

  query

  Returns a `PointOfSaleDevice` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `PointOfSaleDevice` to return.

  ***

***

## \<?>PointOfSaleDevice Queries

### Queried by

* \<?>[point​Of​Sale​Device](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointOfSaleDevice)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ||-PointOfSaleDevice Implements

### Implements

* ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
