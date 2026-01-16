---
title: CustomerSortKeys - GraphQL Admin
description: The set of valid sort keys for the Customer query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSortKeys'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSortKeys.md'
---

# Customer​Sort​Keys

enum

The set of valid sort keys for the Customer query.

## Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* LOCATION

  Sort by the `location` value.

* NAME

  Sort by the `name` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

## Fields

* [Price​Rule​Customer​Selection.customers(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleCustomerSelection#field-PriceRuleCustomerSelection.fields.customers.arguments.sortKey)

  ARGUMENT

  A selection of customers for whom the price rule applies.

* [Shop.customers(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.customers.arguments.sortKey)

  ARGUMENT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Query​Root.customers(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.customers.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [customers.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/customers#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Price​Rule​Customer​Selection.customers(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleCustomerSelection#field-PriceRuleCustomerSelection.fields.customers.arguments.sortKey)
* <-|[Shop.customers(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.customers.arguments.sortKey)
* <-|[Query​Root.customers(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.customers.arguments.sortKey)
* <-|[customers.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/customers#arguments-sortKey)
