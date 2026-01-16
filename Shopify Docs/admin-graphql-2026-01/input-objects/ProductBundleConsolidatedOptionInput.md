---
title: ProductBundleConsolidatedOptionInput - GraphQL Admin
description: The input fields for a consolidated option on a componentized product.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleConsolidatedOptionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleConsolidatedOptionInput.md
---

# Product​Bundle​Consolidated​Option​Input

input\_object

The input fields for a consolidated option on a componentized product.

## Fields

* option​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the consolidated option (e.g., 'Size', 'Color').

* option​Selections

  [\[Product​Bundle​Consolidated​Option​Selection​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleConsolidatedOptionSelectionInput)

  required

  The option selections that define how this consolidated option maps to component options.

***

## Input objects using this input

* [Product​Bundle​Create​Input.consolidatedOptions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleCreateInput#fields-consolidatedOptions)

  INPUT OBJECT

  The input fields for creating a componentized product.

* [Product​Bundle​Update​Input.consolidatedOptions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleUpdateInput#fields-consolidatedOptions)

  INPUT OBJECT

  The input fields for updating a componentized product.

***

## Map

### Input objects using this input

* [Product​Bundle​Create​Input.consolidatedOptions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleCreateInput#fields-consolidatedOptions)
* [Product​Bundle​Update​Input.consolidatedOptions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleUpdateInput#fields-consolidatedOptions)
