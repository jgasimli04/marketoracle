---
title: ProductBundleConsolidatedOptionSelectionInput - GraphQL Admin
description: >-
  The input fields for a consolidated option selection that maps to component
  options.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleConsolidatedOptionSelectionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleConsolidatedOptionSelectionInput.md
---

# Product​Bundle​Consolidated​Option​Selection​Input

input\_object

The input fields for a consolidated option selection that maps to component options.

## Fields

* components

  [\[Product​Bundle​Consolidated​Option​Component​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleConsolidatedOptionComponentInput)

  required

  The component mappings that define how this option value maps to specific component options.

* option​Value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The value for this consolidated option selection (e.g., 'Small', 'Medium', 'Large').

***

## Input objects using this input

* [Product​Bundle​Consolidated​Option​Input.optionSelections](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleConsolidatedOptionInput#fields-optionSelections)

  INPUT OBJECT

  The input fields for a consolidated option on a componentized product.

***

## Map

### Input objects using this input

* [Product​Bundle​Consolidated​Option​Input.optionSelections](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleConsolidatedOptionInput#fields-optionSelections)
