---
title: ComponentizedProductsBundleConsolidatedOption - GraphQL Admin
description: >-
  An option on the bundle parent product that is consolidated from multiple
  different components.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ComponentizedProductsBundleConsolidatedOption
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ComponentizedProductsBundleConsolidatedOption.md
---

# Componentized​Products​Bundle​Consolidated​Option

object

Requires `read_products` access scope.

An option on the bundle parent product that is consolidated from multiple different components.

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the consolidated option.

* selections

  [\[Componentized​Products​Bundle​Consolidated​Option​Selection!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ComponentizedProductsBundleConsolidatedOptionSelection)

  non-null

  The selections of the consolidated option.

***

## Map

### Fields with this object

* {}[Product.bundleConsolidatedOptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.bundleConsolidatedOptions)
