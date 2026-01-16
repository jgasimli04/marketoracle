---
title: InventoryItemInput - GraphQL Admin
description: The input fields for an inventory item.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemInput.md
---

# Inventory​Item​Input

input\_object

The input fields for an inventory item.

## Fields

* cost

  [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  Unit cost associated with the inventory item, the currency is the shop's default currency.

* country​Code​Of​Origin

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The country where the item was manufactured or produced, specified using the standard two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.

* country​Harmonized​System​Codes

  [\[Country​Harmonized​System​Code​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CountryHarmonizedSystemCodeInput)

  List of country-specific harmonized system codes.

* harmonized​System​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The harmonized system code of the inventory item. This must be a number between 6 and 13 digits.

* measurement

  [Inventory​Item​Measurement​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemMeasurementInput)

  The measurements of an inventory item.

* province​Code​Of​Origin

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The province where the item was manufactured or produced, specified using the standard two-letter [ISO 3166-2 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-2) province code.

* requires​Shipping

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the inventory item needs to be physically shipped to the customer. Items that require shipping are physical products, while digital goods and services typically don't require shipping and can be fulfilled electronically.

* sku

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The SKU (stock keeping unit) of the inventory item.

* tracked

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the inventory item is tracked.

***

## Input objects using this input

* [Product​Variant​Set​Input.inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput#fields-inventoryItem)

  INPUT OBJECT

  The input fields for specifying a product variant to create or update.

* [Product​Variants​Bulk​Input.inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-inventoryItem)

  INPUT OBJECT

  The input fields for specifying a product variant to create as part of a variant bulk mutation.

***

## Map

### Input objects using this input

* [Product​Variant​Set​Input.inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput#fields-inventoryItem)
* [Product​Variants​Bulk​Input.inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-inventoryItem)
