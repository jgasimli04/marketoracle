---
title: FulfillmentOrderSortKeys - GraphQL Admin
description: The set of valid sort keys for the FulfillmentOrder query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderSortKeys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderSortKeys.md
---

# Fulfillment​Order​Sort​Keys

enum

The set of valid sort keys for the FulfillmentOrder query.

## Valid values

* ID

  Sort by the `id` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

## Fields

* [Shop.assignedFulfillmentOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.assignedFulfillmentOrders.arguments.sortKey)

  ARGUMENT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Shop.fulfillmentOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.fulfillmentOrders.arguments.sortKey)

  ARGUMENT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Query​Root.assignedFulfillmentOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.assignedFulfillmentOrders.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [Query​Root.fulfillmentOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.fulfillmentOrders.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [assigned​Fulfillment​Orders.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedFulfillmentOrders#arguments-sortKey)

  ARGUMENT

* [fulfillment​Orders.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentOrders#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Shop.assignedFulfillmentOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.assignedFulfillmentOrders.arguments.sortKey)
* <-|[Shop.fulfillmentOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.fulfillmentOrders.arguments.sortKey)
* <-|[Query​Root.assignedFulfillmentOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.assignedFulfillmentOrders.arguments.sortKey)
* <-|[Query​Root.fulfillmentOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.fulfillmentOrders.arguments.sortKey)
* <-|[assigned​Fulfillment​Orders.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedFulfillmentOrders#arguments-sortKey)
* <-|[fulfillment​Orders.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentOrders#arguments-sortKey)
