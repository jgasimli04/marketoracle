---
title: SearchResultType - GraphQL Admin
description: Specifies the type of resources to be returned from a search.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/SearchResultType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/SearchResultType.md'
---

# Search​Result​Type

enum

Specifies the type of resources to be returned from a search.

## Valid values

* ARTICLE

  An article.

* BALANCE\_​TRANSACTION

  A balance transaction.

* BLOG

  A blog.

* COLLECTION

* CUSTOMER

* DISCOUNT\_​REDEEM\_​CODE

  A code discount redeem code.

* DRAFT\_​ORDER

* FILE

  A file.

* ORDER

* PAGE

  A page.

* PRICE\_​RULE

* PRODUCT

* URL\_​REDIRECT

  A URL redirect.

***

## Fields

* [Saved​Search.resourceType](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch#field-SavedSearch.fields.resourceType)

  OBJECT

  A representation of a search query in the Shopify admin used on resource index views. Preserves complex queries with search terms and filters, enabling merchants to quickly access frequently used data views. For example, a saved search can be applied to the product index table to filter products. The query string combines free-text search terms with structured filters to narrow results based on resource attributes.

  The search applies to a specific resource type such as [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer), [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), or [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) objects.

* [Saved​Search​Create​Input.resourceType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchCreateInput#fields-resourceType)

  INPUT OBJECT

  The input fields to create a saved search.

* [Shop.search(types)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.search.arguments.types)

  ARGUMENT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

***

## Map

### Fields with this enum

* <-|[Saved​Search.resourceType](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch#field-SavedSearch.fields.resourceType)

### Inputs with this enum

* [Saved​Search​Create​Input.resourceType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchCreateInput#fields-resourceType)

### Arguments with this enum

* <-|[Shop.search(types)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.search.arguments.types)
