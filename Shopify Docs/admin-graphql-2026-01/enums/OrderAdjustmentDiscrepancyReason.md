---
title: OrderAdjustmentDiscrepancyReason - GraphQL Admin
description: Discrepancy reasons for order adjustments.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderAdjustmentDiscrepancyReason
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderAdjustmentDiscrepancyReason.md
---

# Order​Adjustment​Discrepancy​Reason

enum

Discrepancy reasons for order adjustments.

## Valid values

* CUSTOMER

  The discrepancy reason is customer.

* DAMAGE

  The discrepancy reason is damage.

* FULL\_​RETURN\_​BALANCING\_​ADJUSTMENT

  The discrepancy reason is balance adjustment.

* PENDING\_​REFUND\_​DISCREPANCY

  The discrepancy reason is pending refund.

* REFUND\_​DISCREPANCY

  The discrepancy reason is not one of the predefined reasons.

* RESTOCK

  The discrepancy reason is restocking.

***

## Fields

* [Order​Adjustment.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAdjustment#field-OrderAdjustment.fields.reason)

  OBJECT

  An order adjustment accounts for the difference between a calculated and actual refund amount.

***

## Map

### Fields with this enum

* <-|[Order​Adjustment.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAdjustment#field-OrderAdjustment.fields.reason)
