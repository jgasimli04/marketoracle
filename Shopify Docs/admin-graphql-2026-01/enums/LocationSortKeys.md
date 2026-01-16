---
title: LocationSortKeys - GraphQL Admin
description: The set of valid sort keys for the Location query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationSortKeys'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationSortKeys.md'
---

# Location​Sort​Keys

enum

The set of valid sort keys for the Location query.

## Valid values

* ID

  Sort by the `id` value.

* NAME

  Sort by the `name` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

***

## Fields

* [Delivery​Location​Group.locations(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroup#field-DeliveryLocationGroup.fields.locations.arguments.sortKey)

  ARGUMENT

  A location group is a collection of locations. They share zones and delivery methods across delivery profiles.

* [Shop.locations(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.locations.arguments.sortKey)

  ARGUMENT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Query​Root.locations(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.locations.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [locations.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Delivery​Location​Group.locations(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroup#field-DeliveryLocationGroup.fields.locations.arguments.sortKey)
* <-|[Shop.locations(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.locations.arguments.sortKey)
* <-|[Query​Root.locations(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.locations.arguments.sortKey)
* <-|[locations.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-sortKey)
