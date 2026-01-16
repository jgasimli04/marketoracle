---
title: ProductBundleComponentOptionSelection - GraphQL Admin
description: A relationship between a component option and a parent option.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentOptionSelection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentOptionSelection.md
---

# Product​Bundle​Component​Option​Selection

object

Requires `read_products` access scope.

A relationship between a component option and a parent option.

## Fields

* component​Option

  [Product​Option!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption)

  non-null

  The option that existed on the component product prior to the fixed bundle creation.

* parent​Option

  [Product​Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption)

  The option that was created on the parent product.

* values

  [\[Product​Bundle​Component​Option​Selection​Value!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentOptionSelectionValue)

  non-null

  The component option values that are actively selected for this relationship.

***

## Map

### Fields with this object

* {}[ProductBundleComponent.optionSelections](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponent#field-ProductBundleComponent.fields.optionSelections)
