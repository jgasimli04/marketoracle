---
title: UnitPriceMeasurementMeasuredType - GraphQL Admin
description: The accepted types of unit of measurement.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/UnitPriceMeasurementMeasuredType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/UnitPriceMeasurementMeasuredType.md
---

# Unit​Price​Measurement​Measured​Type

enum

The accepted types of unit of measurement.

## Valid values

* AREA

  Unit of measurements representing areas.

* COUNT

  Unit of measurements representing counts.

* LENGTH

  Unit of measurements representing lengths.

* UNKNOWN

  The type of measurement is unknown. Upgrade to the latest version of the API to resolve this type.

* VOLUME

  Unit of measurements representing volumes.

* WEIGHT

  Unit of measurements representing weights.

***

## Fields

* [Unit​Price​Measurement.measuredType](https://shopify.dev/docs/api/admin-graphql/latest/objects/UnitPriceMeasurement#field-UnitPriceMeasurement.fields.measuredType)

  OBJECT

  The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).

***

## Map

### Fields with this enum

* <-|[Unit​Price​Measurement.measuredType](https://shopify.dev/docs/api/admin-graphql/latest/objects/UnitPriceMeasurement#field-UnitPriceMeasurement.fields.measuredType)
