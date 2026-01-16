---
title: UnitPriceMeasurementInput - GraphQL Admin
description: >-
  The input fields for the measurement used to calculate a unit price for a
  product variant (e.g. $9.99 / 100ml).
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UnitPriceMeasurementInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UnitPriceMeasurementInput.md
---

# Unit​Price​Measurement​Input

input\_object

The input fields for the measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).

## Fields

* quantity​Unit

  [Unit​Price​Measurement​Measured​Unit](https://shopify.dev/docs/api/admin-graphql/latest/enums/UnitPriceMeasurementMeasuredUnit)

  The quantity unit for the unit price measurement.

* quantity​Value

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The quantity value for the unit price measurement.

* reference​Unit

  [Unit​Price​Measurement​Measured​Unit](https://shopify.dev/docs/api/admin-graphql/latest/enums/UnitPriceMeasurementMeasuredUnit)

  The reference unit for the unit price measurement.

* reference​Value

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The reference value for the unit price measurement.

***

## Input objects using this input

* [Product​Variant​Set​Input.unitPriceMeasurement](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput#fields-unitPriceMeasurement)

  INPUT OBJECT

  The input fields for specifying a product variant to create or update.

* [Product​Variants​Bulk​Input.unitPriceMeasurement](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-unitPriceMeasurement)

  INPUT OBJECT

  The input fields for specifying a product variant to create as part of a variant bulk mutation.

***

## Map

### Input objects using this input

* [Product​Variant​Set​Input.unitPriceMeasurement](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput#fields-unitPriceMeasurement)
* [Product​Variants​Bulk​Input.unitPriceMeasurement](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-unitPriceMeasurement)
