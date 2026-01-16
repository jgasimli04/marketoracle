---
title: ProductBundleComponentOptionSelectionInput - GraphQL Admin
description: The input fields for a single option related to a component product.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentOptionSelectionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentOptionSelectionInput.md
---

# Product​Bundle​Component​Option​Selection​Input

input\_object

The input fields for a single option related to a component product.

## Fields

* component​Option​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the option present on the component product.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name to create for this option on the parent product.

* values

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Array of selected option values.

***

## Input objects using this input

* [Product​Bundle​Component​Input.optionSelections](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentInput#fields-optionSelections)

  INPUT OBJECT

  The input fields for a single component related to a componentized product.

***

## Map

### Input objects using this input

* [Product​Bundle​Component​Input.optionSelections](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentInput#fields-optionSelections)
