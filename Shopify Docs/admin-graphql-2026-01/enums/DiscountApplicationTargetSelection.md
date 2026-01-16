---
title: DiscountApplicationTargetSelection - GraphQL Admin
description: >-
  The lines on the order to which the discount is applied, of the type defined
  by

  the discount application's `targetType`. For example, the value `ENTITLED`,
  combined with a `targetType` of

  `LINE_ITEM`, applies the discount on all line items that are entitled to the
  discount.

  The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the
  discount on all shipping lines.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetSelection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetSelection.md
---

# Discount​Application​Target​Selection

enum

The lines on the order to which the discount is applied, of the type defined by the discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of `LINE_ITEM`, applies the discount on all line items that are entitled to the discount. The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.

## Valid values

* ALL

  The discount is allocated onto all the lines.

* ENTITLED

  The discount is allocated onto only the lines that it's entitled for.

* EXPLICIT

  The discount is allocated onto explicitly chosen lines.

***

## Fields

* [Automatic​Discount​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.targetSelection)

  OBJECT

  Automatic discount applications capture the intentions of a discount that was automatically applied.

* [Calculated​Automatic​Discount​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedAutomaticDiscountApplication#field-CalculatedAutomaticDiscountApplication.fields.targetSelection)

  OBJECT

  A discount that is automatically applied to an order that is being edited.

* [Calculated​Discount​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedDiscountApplication#fields-targetSelection)

  INTERFACE

  A [discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/discountapplication) involved in order editing that might be newly added or have new changes applied.

* [Calculated​Discount​Code​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountCodeApplication#field-CalculatedDiscountCodeApplication.fields.targetSelection)

  OBJECT

  A discount code that is applied to an order that is being edited.

* [Calculated​Manual​Discount​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedManualDiscountApplication#field-CalculatedManualDiscountApplication.fields.targetSelection)

  OBJECT

  Represents a discount that was manually created for an order that is being edited.

* [Calculated​Script​Discount​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedScriptDiscountApplication#field-CalculatedScriptDiscountApplication.fields.targetSelection)

  OBJECT

  A discount created by a Shopify script for an order that is being edited.

* [Discount​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication#fields-targetSelection)

  INTERFACE

  Discount applications capture the intentions of a discount source at the time of application on an order's line items or shipping lines.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

* [Discount​Code​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.targetSelection)

  OBJECT

  Discount code applications capture the intentions of a discount code at the time that it is applied onto an order.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

* [Financial​Summary​Discount​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialSummaryDiscountApplication#field-FinancialSummaryDiscountApplication.fields.targetSelection)

  OBJECT

  Discount applications capture the intentions of a discount source at the time of application on an order's line items or shipping lines.

* [Manual​Discount​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.targetSelection)

  OBJECT

  Manual discount applications capture the intentions of a discount that was manually created for an order.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

* [Script​Discount​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.targetSelection)

  OBJECT

  Script discount applications capture the intentions of a discount that was created by a Shopify Script for an order's line item or shipping line.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

***

## Map

### Fields with this enum

* <-|[Automatic​Discount​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.targetSelection)
* <-|[Calculated​Automatic​Discount​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedAutomaticDiscountApplication#field-CalculatedAutomaticDiscountApplication.fields.targetSelection)
* <-|[Calculated​Discount​Code​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountCodeApplication#field-CalculatedDiscountCodeApplication.fields.targetSelection)
* <-|[Calculated​Manual​Discount​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedManualDiscountApplication#field-CalculatedManualDiscountApplication.fields.targetSelection)
* <-|[Calculated​Script​Discount​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedScriptDiscountApplication#field-CalculatedScriptDiscountApplication.fields.targetSelection)
* <-|[Discount​Code​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.targetSelection)
* <-|[Financial​Summary​Discount​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialSummaryDiscountApplication#field-FinancialSummaryDiscountApplication.fields.targetSelection)
* <-|[Manual​Discount​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.targetSelection)
* <-|[Script​Discount​Application.targetSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.targetSelection)
