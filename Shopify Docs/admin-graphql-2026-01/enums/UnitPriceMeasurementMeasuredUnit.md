---
title: UnitPriceMeasurementMeasuredUnit - GraphQL Admin
description: The valid units of measurement for a unit price measurement.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/UnitPriceMeasurementMeasuredUnit
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/UnitPriceMeasurementMeasuredUnit.md
---

# Unit​Price​Measurement​Measured​Unit

enum

The valid units of measurement for a unit price measurement.

## Valid values

* CL

  100 centiliters equals 1 liter.

* CM

  100 centimeters equals 1 meter.

* FLOZ

  Imperial system unit of volume (U.S. customary unit).

* FT

  1 foot equals 12 inches.

* FT2

  Imperial system unit of area.

* G

  Metric system unit of weight.

* GAL

  1 gallon equals 128 fluid ounces (U.S. customary unit).

* IN

  Imperial system unit of length.

* ITEM

  1 item, a unit of count.

* KG

  1 kilogram equals 1000 grams.

* L

  Metric system unit of volume.

* LB

  Imperial system unit of weight.

* M

  Metric system unit of length.

* M2

  Metric system unit of area.

* M3

  1 cubic meter equals 1000 liters.

* MG

  1000 milligrams equals 1 gram.

* ML

  1000 milliliters equals 1 liter.

* MM

  1000 millimeters equals 1 meter.

* OZ

  16 ounces equals 1 pound.

* PT

  1 pint equals 16 fluid ounces (U.S. customary unit).

* QT

  1 quart equals 32 fluid ounces (U.S. customary unit).

* UNKNOWN

  The unit of measurement is unknown. Upgrade to the latest version of the API to resolve this unit.

* YD

  1 yard equals 36 inches.

***

## Fields

* [Unit​Price​Measurement.quantityUnit](https://shopify.dev/docs/api/admin-graphql/latest/objects/UnitPriceMeasurement#field-UnitPriceMeasurement.fields.quantityUnit)

  OBJECT

  The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).

* [Unit​Price​Measurement.referenceUnit](https://shopify.dev/docs/api/admin-graphql/latest/objects/UnitPriceMeasurement#field-UnitPriceMeasurement.fields.referenceUnit)

  OBJECT

  The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).

* [Unit​Price​Measurement​Input.quantityUnit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UnitPriceMeasurementInput#fields-quantityUnit)

  INPUT OBJECT

  The input fields for the measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).

* [Unit​Price​Measurement​Input.referenceUnit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UnitPriceMeasurementInput#fields-referenceUnit)

  INPUT OBJECT

  The input fields for the measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).

***

## Map

### Fields with this enum

* <-|[Unit​Price​Measurement.quantityUnit](https://shopify.dev/docs/api/admin-graphql/latest/objects/UnitPriceMeasurement#field-UnitPriceMeasurement.fields.quantityUnit)
* <-|[Unit​Price​Measurement.referenceUnit](https://shopify.dev/docs/api/admin-graphql/latest/objects/UnitPriceMeasurement#field-UnitPriceMeasurement.fields.referenceUnit)

### Inputs with this enum

* [Unit​Price​Measurement​Input.quantityUnit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UnitPriceMeasurementInput#fields-quantityUnit)
* [Unit​Price​Measurement​Input.referenceUnit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UnitPriceMeasurementInput#fields-referenceUnit)
