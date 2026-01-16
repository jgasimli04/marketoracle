---
title: WeightUnit - GraphQL Admin
description: Units of measurement for weight.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/WeightUnit'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/WeightUnit.md'
---

# Weight​Unit

enum

Units of measurement for weight.

## Valid values

* GRAMS

  Metric system unit of mass.

* KILOGRAMS

  1 kilogram equals 1000 grams.

* OUNCES

  Imperial system unit of mass.

* POUNDS

  1 pound equals 16 ounces.

***

## Fields

* [Shop.weightUnit](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.weightUnit)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Weight.unit](https://shopify.dev/docs/api/admin-graphql/latest/objects/Weight#field-Weight.fields.unit)

  OBJECT

  A weight measurement with its numeric value and unit. Used throughout the API, for example in shipping calculations, delivery conditions, order line items, and inventory measurements.

  The weight combines a decimal value with a standard unit of measurement to ensure consistent weight handling across different regional systems.

* [Weight​Input.unit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WeightInput#fields-unit)

  INPUT OBJECT

  The input fields for the weight unit and value inputs.

***

## Map

### Fields with this enum

* <-|[Shop.weightUnit](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.weightUnit)
* <-|[Weight.unit](https://shopify.dev/docs/api/admin-graphql/latest/objects/Weight#field-Weight.fields.unit)

### Inputs with this enum

* [Weight​Input.unit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WeightInput#fields-unit)
