---
title: ProductBundleComponentOptionSelectionStatus - GraphQL Admin
description: The status of a component option value related to a bundle.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductBundleComponentOptionSelectionStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductBundleComponentOptionSelectionStatus.md
---

# Product​Bundle​Component​Option​Selection​Status

enum

The status of a component option value related to a bundle.

## Valid values

* DESELECTED

  The component option value is not selected as sellable in the bundle.

* NEW

  The component option value was not initially selected, but is now available for the bundle.

* SELECTED

  The component option value is selected as sellable in the bundle.

* UNAVAILABLE

  The component option value was selected, is no longer available for the bundle.

***

## Fields

* [Product​Bundle​Component​Option​Selection​Value.selectionStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentOptionSelectionValue#field-ProductBundleComponentOptionSelectionValue.fields.selectionStatus)

  OBJECT

  A component option value related to a bundle line.

***

## Map

### Fields with this enum

* <-|[Product​Bundle​Component​Option​Selection​Value.selectionStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentOptionSelectionValue#field-ProductBundleComponentOptionSelectionValue.fields.selectionStatus)
