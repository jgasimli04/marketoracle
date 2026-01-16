---
title: DiscountApplicationLevel - GraphQL Admin
description: The level at which the discount's value is applied.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationLevel
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationLevel.md
---

# Discount​Application​Level

enum

The level at which the discount's value is applied.

## Valid values

* LINE

  The discount is applied at the line level. Line level discounts are factored into the discountedUnitPriceSet on line items.

* ORDER

  The discount is applied at the order level. Order level discounts are not factored into the discountedUnitPriceSet on line items.

***

## Fields

* [Calculated​Automatic​Discount​Application.appliedTo](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedAutomaticDiscountApplication#field-CalculatedAutomaticDiscountApplication.fields.appliedTo)

  OBJECT

  A discount that is automatically applied to an order that is being edited.

* [Calculated​Discount​Application.appliedTo](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedDiscountApplication#fields-appliedTo)

  INTERFACE

  A [discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/discountapplication) involved in order editing that might be newly added or have new changes applied.

* [Calculated​Discount​Code​Application.appliedTo](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountCodeApplication#field-CalculatedDiscountCodeApplication.fields.appliedTo)

  OBJECT

  A discount code that is applied to an order that is being edited.

* [Calculated​Manual​Discount​Application.appliedTo](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedManualDiscountApplication#field-CalculatedManualDiscountApplication.fields.appliedTo)

  OBJECT

  Represents a discount that was manually created for an order that is being edited.

* [Calculated​Script​Discount​Application.appliedTo](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedScriptDiscountApplication#field-CalculatedScriptDiscountApplication.fields.appliedTo)

  OBJECT

  A discount created by a Shopify script for an order that is being edited.

***

## Map

### Fields with this enum

* <-|[Calculated​Automatic​Discount​Application.appliedTo](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedAutomaticDiscountApplication#field-CalculatedAutomaticDiscountApplication.fields.appliedTo)
* <-|[Calculated​Discount​Code​Application.appliedTo](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountCodeApplication#field-CalculatedDiscountCodeApplication.fields.appliedTo)
* <-|[Calculated​Manual​Discount​Application.appliedTo](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedManualDiscountApplication#field-CalculatedManualDiscountApplication.fields.appliedTo)
* <-|[Calculated​Script​Discount​Application.appliedTo](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedScriptDiscountApplication#field-CalculatedScriptDiscountApplication.fields.appliedTo)
