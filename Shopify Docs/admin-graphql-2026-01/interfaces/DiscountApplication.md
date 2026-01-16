---
title: DiscountApplication - GraphQL Admin
description: >-
  Discount applications capture the intentions of a discount source at

  the time of application on an order's line items or shipping lines.


  Discount applications don't represent the actual final amount discounted on a
  line (line item or shipping line). The actual amount discounted on a line is
  represented by the
  [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation)
  object.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication.md
---

# Discount​Application

interface

Discount applications capture the intentions of a discount source at the time of application on an order's line items or shipping lines.

Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

## Fields

* allocation​Method

  [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

  non-null

  The method by which the discount's value is applied to its entitled items.

* index

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  An ordered index that can be used to identify the discount application and indicate the precedence of the discount application for calculations.

* target​Selection

  [Discount​Application​Target​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetSelection)

  non-null

  How the discount amount is distributed on the discounted lines.

* target​Type

  [Discount​Application​Target​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetType)

  non-null

  Whether the discount is applied on line items or shipping lines.

* value

  [Pricing​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue)

  non-null

  The value of the discount application.

***

## Types implemented in

* [Automatic​Discount​Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/AutomaticDiscountApplication)

  OBJECT

  Automatic discount applications capture the intentions of a discount that was automatically applied.

  * allocation​Method

    [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

    non-null

    The method by which the discount's value is applied to its entitled items.

  * index

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    An ordered index that can be used to identify the discount application and indicate the precedence of the discount application for calculations.

  * target​Selection

    [Discount​Application​Target​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetSelection)

    non-null

    How the discount amount is distributed on the discounted lines.

  * target​Type

    [Discount​Application​Target​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetType)

    non-null

    Whether the discount is applied on line items or shipping lines.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The title of the discount application.

  * value

    [Pricing​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue)

    non-null

    The value of the discount application.

* [Discount​Code​Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApplication)

  OBJECT

  Discount code applications capture the intentions of a discount code at the time that it is applied onto an order.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

  * allocation​Method

    [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

    non-null

    The method by which the discount's value is applied to its entitled items.

  * code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The string identifying the discount code that was used at the time of application.

  * index

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    An ordered index that can be used to identify the discount application and indicate the precedence of the discount application for calculations.

  * target​Selection

    [Discount​Application​Target​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetSelection)

    non-null

    How the discount amount is distributed on the discounted lines.

  * target​Type

    [Discount​Application​Target​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetType)

    non-null

    Whether the discount is applied on line items or shipping lines.

  * value

    [Pricing​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue)

    non-null

    The value of the discount application.

* [Manual​Discount​Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/ManualDiscountApplication)

  OBJECT

  Manual discount applications capture the intentions of a discount that was manually created for an order.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

  * allocation​Method

    [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

    non-null

    The method by which the discount's value is applied to its entitled items.

  * description

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The description of the discount application.

  * index

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    An ordered index that can be used to identify the discount application and indicate the precedence of the discount application for calculations.

  * target​Selection

    [Discount​Application​Target​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetSelection)

    non-null

    How the discount amount is distributed on the discounted lines.

  * target​Type

    [Discount​Application​Target​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetType)

    non-null

    Whether the discount is applied on line items or shipping lines.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The title of the discount application.

  * value

    [Pricing​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue)

    non-null

    The value of the discount application.

* [Script​Discount​Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptDiscountApplication)

  OBJECT

  Script discount applications capture the intentions of a discount that was created by a Shopify Script for an order's line item or shipping line.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

  * allocation​Method

    [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

    non-null

    The method by which the discount's value is applied to its entitled items.

  * index

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    An ordered index that can be used to identify the discount application and indicate the precedence of the discount application for calculations.

  * target​Selection

    [Discount​Application​Target​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetSelection)

    non-null

    How the discount amount is distributed on the discounted lines.

  * target​Type

    [Discount​Application​Target​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetType)

    non-null

    Whether the discount is applied on line items or shipping lines.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The title of the application as defined by the Script.

  * value

    [Pricing​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue)

    non-null

    The value of the discount application.

  * description

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-nullDeprecated

***

##### Variables

```json
{
	"allocationMethod": "",
	"index": "",
	"targetSelection": "",
	"targetType": "",
	"value": ""
}
```

##### Schema

```graphql
interface DiscountApplication {
  allocationMethod: DiscountApplicationAllocationMethod!
  index: Int!
  targetSelection: DiscountApplicationTargetSelection!
  targetType: DiscountApplicationTargetType!
  value: PricingValue!
}
```
