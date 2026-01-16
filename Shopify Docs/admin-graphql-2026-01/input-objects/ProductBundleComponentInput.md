---
title: ProductBundleComponentInput - GraphQL Admin
description: The input fields for a single component related to a componentized product.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentInput.md
---

# Product​Bundle​Component​Input

input\_object

The input fields for a single component related to a componentized product.

## Fields

* option​Selections

  [\[Product​Bundle​Component​Option​Selection​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentOptionSelectionInput)

  required

  The options to use in the component product, and the values for the option.

* product​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the component product to add to the bundle product.

* quantity

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The quantity of the component product to add to the bundle product. This field can't exceed 2000.

* quantity​Option

  [Product​Bundle​Component​Quantity​Option​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentQuantityOptionInput)

  New option to be created on the bundle parent that enables the buyer to select different quantities for this component (e.g. two-pack, three-pack). Can only be used if quantity isn't set.

***

## Input objects using this input

* [Product​Bundle​Create​Input.components](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleCreateInput#fields-components)

  INPUT OBJECT

  The input fields for creating a componentized product.

* [Product​Bundle​Update​Input.components](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleUpdateInput#fields-components)

  INPUT OBJECT

  The input fields for updating a componentized product.

***

## Map

### Input objects using this input

* [Product​Bundle​Create​Input.components](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleCreateInput#fields-components)
* [Product​Bundle​Update​Input.components](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleUpdateInput#fields-components)
