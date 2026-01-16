---
title: OrderCreateFinancialStatus - GraphQL Admin
description: >-
  The status of payments associated with the order. Can only be set when the
  order is created.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateFinancialStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateFinancialStatus.md
---

# Order​Create​Financial​Status

enum

The status of payments associated with the order. Can only be set when the order is created.

## Valid values

* AUTHORIZED

  The payments have been authorized.

* EXPIRED

  The payments have been expired.

* PAID

  The payments have been paid.

* PARTIALLY\_​PAID

  The order has been partially paid.

* PARTIALLY\_​REFUNDED

  The payments have been partially refunded.

* PENDING

  The payments are pending. Payment might fail in this state. Check again to confirm whether the payments have been paid successfully.

* REFUNDED

  The payments have been refunded.

* VOIDED

  The payments have been voided.

***

## Fields

* [Order​Create​Order​Input.financialStatus](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-financialStatus)

  INPUT OBJECT

  The input fields for creating an order.

***

## Map

### Inputs with this enum

* [Order​Create​Order​Input.financialStatus](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-financialStatus)
