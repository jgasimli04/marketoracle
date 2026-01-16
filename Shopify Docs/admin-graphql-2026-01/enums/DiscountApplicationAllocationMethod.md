---
title: DiscountApplicationAllocationMethod - GraphQL Admin
description: The method by which the discount's value is allocated onto its entitled lines.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod.md
---

# Discount​Application​Allocation​Method

enum

The method by which the discount's value is allocated onto its entitled lines.

## Valid values

* ACROSS

  The value is spread across all entitled lines.

* EACH

  The value is applied onto every entitled line.

* ONE

  Deprecated

***

## Fields

* [Automatic​Discount​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.allocationMethod)

  OBJECT

  Automatic discount applications capture the intentions of a discount that was automatically applied.

* [Calculated​Automatic​Discount​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedAutomaticDiscountApplication#field-CalculatedAutomaticDiscountApplication.fields.allocationMethod)

  OBJECT

  A discount that is automatically applied to an order that is being edited.

* [Calculated​Discount​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedDiscountApplication#fields-allocationMethod)

  INTERFACE

  A [discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/discountapplication) involved in order editing that might be newly added or have new changes applied.

* [Calculated​Discount​Code​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountCodeApplication#field-CalculatedDiscountCodeApplication.fields.allocationMethod)

  OBJECT

  A discount code that is applied to an order that is being edited.

* [Calculated​Manual​Discount​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedManualDiscountApplication#field-CalculatedManualDiscountApplication.fields.allocationMethod)

  OBJECT

  Represents a discount that was manually created for an order that is being edited.

* [Calculated​Script​Discount​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedScriptDiscountApplication#field-CalculatedScriptDiscountApplication.fields.allocationMethod)

  OBJECT

  A discount created by a Shopify script for an order that is being edited.

* [Discount​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication#fields-allocationMethod)

  INTERFACE

  Discount applications capture the intentions of a discount source at the time of application on an order's line items or shipping lines.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

* [Discount​Code​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.allocationMethod)

  OBJECT

  Discount code applications capture the intentions of a discount code at the time that it is applied onto an order.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

* [Financial​Summary​Discount​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialSummaryDiscountApplication#field-FinancialSummaryDiscountApplication.fields.allocationMethod)

  OBJECT

  Discount applications capture the intentions of a discount source at the time of application on an order's line items or shipping lines.

* [Manual​Discount​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.allocationMethod)

  OBJECT

  Manual discount applications capture the intentions of a discount that was manually created for an order.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

* [Script​Discount​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.allocationMethod)

  OBJECT

  Script discount applications capture the intentions of a discount that was created by a Shopify Script for an order's line item or shipping line.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

***

## Map

### Fields with this enum

* <-|[Automatic​Discount​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.allocationMethod)
* <-|[Calculated​Automatic​Discount​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedAutomaticDiscountApplication#field-CalculatedAutomaticDiscountApplication.fields.allocationMethod)
* <-|[Calculated​Discount​Code​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountCodeApplication#field-CalculatedDiscountCodeApplication.fields.allocationMethod)
* <-|[Calculated​Manual​Discount​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedManualDiscountApplication#field-CalculatedManualDiscountApplication.fields.allocationMethod)
* <-|[Calculated​Script​Discount​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedScriptDiscountApplication#field-CalculatedScriptDiscountApplication.fields.allocationMethod)
* <-|[Discount​Code​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.allocationMethod)
* <-|[Financial​Summary​Discount​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialSummaryDiscountApplication#field-FinancialSummaryDiscountApplication.fields.allocationMethod)
* <-|[Manual​Discount​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.allocationMethod)
* <-|[Script​Discount​Application.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.allocationMethod)
