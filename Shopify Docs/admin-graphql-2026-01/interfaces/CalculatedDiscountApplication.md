---
title: CalculatedDiscountApplication - GraphQL Admin
description: >-
  A [discount
  application](https://shopify.dev/api/admin-graphql/latest/interfaces/discountapplication)
  involved in order editing that might be newly added or have new changes
  applied.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedDiscountApplication
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedDiscountApplication.md
---

# Calculated​Discount​Application

interface

Requires `read_order_edits` access scope or `read_returns` access scope.

A [discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/discountapplication) involved in order editing that might be newly added or have new changes applied.

## Fields

* allocation​Method

  [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

  non-null

  The method by which the discount's value is allocated to its entitled items.

* applied​To

  [Discount​Application​Level!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationLevel)

  non-null

  The level at which the discount was applied.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of discount application. Indicates the reason why the discount was applied.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

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

* [Calculated​Automatic​Discount​Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedAutomaticDiscountApplication)

  OBJECT

  A discount that is automatically applied to an order that is being edited.

  * allocation​Method

    [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

    non-null

    The method by which the discount's value is allocated to its entitled items.

  * applied​To

    [Discount​Application​Level!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationLevel)

    non-null

    The level at which the discount was applied.

  * description

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The description of discount application. Indicates the reason why the discount was applied.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

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

* [Calculated​Discount​Code​Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountCodeApplication)

  OBJECT

  A discount code that is applied to an order that is being edited.

  * allocation​Method

    [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

    non-null

    The method by which the discount's value is allocated to its entitled items.

  * applied​To

    [Discount​Application​Level!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationLevel)

    non-null

    The level at which the discount was applied.

  * code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The string identifying the discount code that was used at the time of application.

  * description

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The description of discount application. Indicates the reason why the discount was applied.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

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

* [Calculated​Manual​Discount​Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedManualDiscountApplication)

  OBJECT

  Represents a discount that was manually created for an order that is being edited.

  * allocation​Method

    [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

    non-null

    The method by which the discount's value is allocated to its entitled items.

  * applied​To

    [Discount​Application​Level!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationLevel)

    non-null

    The level at which the discount was applied.

  * description

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The description of discount application. Indicates the reason why the discount was applied.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

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

* [Calculated​Script​Discount​Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedScriptDiscountApplication)

  OBJECT

  A discount created by a Shopify script for an order that is being edited.

  * allocation​Method

    [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

    non-null

    The method by which the discount's value is allocated to its entitled items.

  * applied​To

    [Discount​Application​Level!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationLevel)

    non-null

    The level at which the discount was applied.

  * description

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The description of discount application. Indicates the reason why the discount was applied.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

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

##### Variables

```json
{
	"allocationMethod": "",
	"appliedTo": "",
	"description": "",
	"id": "",
	"targetSelection": "",
	"targetType": "",
	"value": ""
}
```

##### Schema

```graphql
interface CalculatedDiscountApplication {
  allocationMethod: DiscountApplicationAllocationMethod!
  appliedTo: DiscountApplicationLevel!
  description: String
  id: ID!
  targetSelection: DiscountApplicationTargetSelection!
  targetType: DiscountApplicationTargetType!
  value: PricingValue!
}
```
