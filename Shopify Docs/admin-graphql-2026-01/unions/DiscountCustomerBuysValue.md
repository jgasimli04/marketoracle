---
title: DiscountCustomerBuysValue - GraphQL Admin
description: >-
  The prerequisite for the discount to be applicable. For example, the discount
  might require a customer to buy a minimum quantity of select items.
  Alternatively, the discount might require a customer to spend a minimum amount
  on select items.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerBuysValue
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerBuysValue.md
---

# Discount​Customer​Buys​Value

union

Requires Apps must have `read_discounts` access scope.

The prerequisite for the discount to be applicable. For example, the discount might require a customer to buy a minimum quantity of select items. Alternatively, the discount might require a customer to spend a minimum amount on select items.

## Possible types

* [Discount​Purchase​Amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountPurchaseAmount)

  OBJECT

  A purchase amount in the context of a discount. This object can be used to define the minimum purchase amount required for a discount to be applicable.

  * amount

    [Decimal!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

    non-null

    The purchase amount in decimal format.

* [Discount​Quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountQuantity)

  OBJECT

  Defines a quantity threshold for discount eligibility or application. This simple object specifies the number of items required to trigger or calculate discount benefits.

  For example, a "Buy 3, Get 1 Free" promotion would use DiscountQuantity to define the minimum purchase quantity of 3 items, or a bulk discount might specify quantity tiers like 10+ items for wholesale pricing.

  The quantity value determines how discounts interact with cart contents, whether setting minimum purchase requirements or defining quantity-based discount calculations.

  * quantity

    [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

    non-null

    The quantity of items.

***

## Fields with this union

* [Discount​Customer​Buys.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerBuys#field-DiscountCustomerBuys.fields.value)

  OBJECT

  The prerequisite items and prerequisite value that a customer must have on the order for the discount to be applicable.

***

```graphql
union DiscountCustomerBuysValue = DiscountPurchaseAmount | DiscountQuantity
```
