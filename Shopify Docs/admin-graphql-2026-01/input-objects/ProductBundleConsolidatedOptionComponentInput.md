---
title: ProductBundleConsolidatedOptionComponentInput - GraphQL Admin
description: >-
  The input fields for mapping a consolidated option to a specific component
  option.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleConsolidatedOptionComponentInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleConsolidatedOptionComponentInput.md
---

# Product​Bundle​Consolidated​Option​Component​Input

input\_object

The input fields for mapping a consolidated option to a specific component option.

## Fields

* component​Option​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the component option that this consolidated option maps to. If null, this selection targets the component's quantity option with the given name.

* component​Option​Value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The value to use for the component option (e.g., 'Small', 'Red').

***

## Input objects using this input

* [Product​Bundle​Consolidated​Option​Selection​Input.components](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleConsolidatedOptionSelectionInput#fields-components)

  INPUT OBJECT

  The input fields for a consolidated option selection that maps to component options.

***

## Map

### Input objects using this input

* [Product​Bundle​Consolidated​Option​Selection​Input.components](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleConsolidatedOptionSelectionInput#fields-components)
