---
title: NavigationItem - GraphQL Admin
description: 'A navigation item, holding basic link attributes.'
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/NavigationItem'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/NavigationItem.md'
---

# Navigation​Item

object

A navigation item, holding basic link attributes.

## Fields

* id

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The unique identifier of the navigation item.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the navigation item.

* url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL of the page that the navigation item links to.

***

## Map

### Fields with this object

* {}[FailedRequirement.action](https://shopify.dev/docs/api/admin-graphql/latest/objects/FailedRequirement#field-FailedRequirement.fields.action)
* {}[Shop.navigationSettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.navigationSettings)
