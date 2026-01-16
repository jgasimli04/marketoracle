---
title: DiscountApplicationTargetType - GraphQL Admin
description: >-
  The type of line (i.e. line item or shipping line) on an order that the
  discount is applicable towards.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetType.md
---

# Discount​Application​Target​Type

enum

The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.

## Valid values

* LINE\_​ITEM

  The discount applies onto line items.

* SHIPPING\_​LINE

  The discount applies onto shipping lines.

***

## Fields

* [Automatic​Discount​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.targetType)

  OBJECT

  Automatic discount applications capture the intentions of a discount that was automatically applied.

* [Calculated​Automatic​Discount​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedAutomaticDiscountApplication#field-CalculatedAutomaticDiscountApplication.fields.targetType)

  OBJECT

  A discount that is automatically applied to an order that is being edited.

* [Calculated​Discount​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedDiscountApplication#fields-targetType)

  INTERFACE

  A [discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/discountapplication) involved in order editing that might be newly added or have new changes applied.

* [Calculated​Discount​Code​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountCodeApplication#field-CalculatedDiscountCodeApplication.fields.targetType)

  OBJECT

  A discount code that is applied to an order that is being edited.

* [Calculated​Manual​Discount​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedManualDiscountApplication#field-CalculatedManualDiscountApplication.fields.targetType)

  OBJECT

  Represents a discount that was manually created for an order that is being edited.

* [Calculated​Script​Discount​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedScriptDiscountApplication#field-CalculatedScriptDiscountApplication.fields.targetType)

  OBJECT

  A discount created by a Shopify script for an order that is being edited.

* [Discount​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication#fields-targetType)

  INTERFACE

  Discount applications capture the intentions of a discount source at the time of application on an order's line items or shipping lines.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

* [Discount​Code​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.targetType)

  OBJECT

  Discount code applications capture the intentions of a discount code at the time that it is applied onto an order.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

* [Financial​Summary​Discount​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialSummaryDiscountApplication#field-FinancialSummaryDiscountApplication.fields.targetType)

  OBJECT

  Discount applications capture the intentions of a discount source at the time of application on an order's line items or shipping lines.

* [Manual​Discount​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.targetType)

  OBJECT

  Manual discount applications capture the intentions of a discount that was manually created for an order.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

* [Script​Discount​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.targetType)

  OBJECT

  Script discount applications capture the intentions of a discount that was created by a Shopify Script for an order's line item or shipping line.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

* [App​Discount​Type.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType#field-AppDiscountType.fields.targetType)

  OBJECT

  Deprecated

***

## Map

### Fields with this enum

* <-|[Automatic​Discount​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.targetType)
* <-|[Calculated​Automatic​Discount​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedAutomaticDiscountApplication#field-CalculatedAutomaticDiscountApplication.fields.targetType)
* <-|[Calculated​Discount​Code​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountCodeApplication#field-CalculatedDiscountCodeApplication.fields.targetType)
* <-|[Calculated​Manual​Discount​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedManualDiscountApplication#field-CalculatedManualDiscountApplication.fields.targetType)
* <-|[Calculated​Script​Discount​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedScriptDiscountApplication#field-CalculatedScriptDiscountApplication.fields.targetType)
* <-|[Discount​Code​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.targetType)
* <-|[Financial​Summary​Discount​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialSummaryDiscountApplication#field-FinancialSummaryDiscountApplication.fields.targetType)
* <-|[Manual​Discount​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.targetType)
* <-|[Script​Discount​Application.targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.targetType)
