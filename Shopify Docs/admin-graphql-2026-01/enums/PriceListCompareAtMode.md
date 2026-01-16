---
title: PriceListCompareAtMode - GraphQL Admin
description: Represents how the compare at price will be determined for a price list.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListCompareAtMode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListCompareAtMode.md
---

# Price​List​Compare​At​Mode

enum

Represents how the compare at price will be determined for a price list.

## Valid values

* ADJUSTED

  The compare at price is adjusted based on percentage specified in price list.

* NULLIFY

  The compare at prices are set to `null` unless explicitly defined by a fixed price value.

***

## Fields

* [Price​List​Adjustment​Settings.compareAtMode](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListAdjustmentSettings#field-PriceListAdjustmentSettings.fields.compareAtMode)

  OBJECT

  Represents the settings of price list adjustments.

* [Price​List​Adjustment​Settings​Input.compareAtMode](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListAdjustmentSettingsInput#fields-compareAtMode)

  INPUT OBJECT

  The input fields to set a price list's adjustment settings.

***

## Map

### Fields with this enum

* <-|[Price​List​Adjustment​Settings.compareAtMode](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListAdjustmentSettings#field-PriceListAdjustmentSettings.fields.compareAtMode)

### Inputs with this enum

* [Price​List​Adjustment​Settings​Input.compareAtMode](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListAdjustmentSettingsInput#fields-compareAtMode)
