---
title: ShopifyPaymentsPayoutInterval - GraphQL Admin
description: The interval at which payouts are sent to the connected bank account.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutInterval
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutInterval.md
---

# Shopify​Payments​Payout​Interval

enum

The interval at which payouts are sent to the connected bank account.

## Valid values

* DAILY

  Each business day.

* MANUAL

  Payouts will not be automatically made.

* MONTHLY

  Each month, on the day of month specified by monthlyAnchor.

* WEEKLY

  Each week, on the day of week specified by weeklyAnchor.

***

## Fields

* [Shopify​Payments​Payout​Schedule.interval](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSchedule#field-ShopifyPaymentsPayoutSchedule.fields.interval)

  OBJECT

  The payment schedule for a payments account.

***

## Map

### Fields with this enum

* <-|[Shopify​Payments​Payout​Schedule.interval](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSchedule#field-ShopifyPaymentsPayoutSchedule.fields.interval)
