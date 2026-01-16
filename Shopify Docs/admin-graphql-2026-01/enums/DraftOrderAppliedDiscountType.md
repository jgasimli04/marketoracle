---
title: DraftOrderAppliedDiscountType - GraphQL Admin
description: The valid discount types that can be applied to a draft order.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DraftOrderAppliedDiscountType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DraftOrderAppliedDiscountType.md
---

# Draft​Order​Applied​Discount​Type

enum

The valid discount types that can be applied to a draft order.

## Valid values

* FIXED\_​AMOUNT

  A fixed amount in the store's currency.

* PERCENTAGE

  A percentage of the order subtotal.

***

## Fields

* [Draft​Order​Applied​Discount.valueType](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAppliedDiscount#field-DraftOrderAppliedDiscount.fields.valueType)

  OBJECT

  The order-level discount applied to a draft order.

* [Draft​Order​Applied​Discount​Input.valueType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAppliedDiscountInput#fields-valueType)

  INPUT OBJECT

  The input fields for applying an order-level discount to a draft order.

***

## Map

### Fields with this enum

* <-|[Draft​Order​Applied​Discount.valueType](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAppliedDiscount#field-DraftOrderAppliedDiscount.fields.valueType)

### Inputs with this enum

* [Draft​Order​Applied​Discount​Input.valueType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAppliedDiscountInput#fields-valueType)
