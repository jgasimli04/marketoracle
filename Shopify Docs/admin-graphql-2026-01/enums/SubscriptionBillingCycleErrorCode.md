---
title: SubscriptionBillingCycleErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `SubscriptionBillingCycleUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleErrorCode.md
---

# Subscription​Billing​Cycle​Error​Code

enum

Possible error codes that can be returned by `SubscriptionBillingCycleUserError`.

## Valid values

* BILLING\_​DATE\_​SET\_​ON\_​SKIPPED

  Billing date cannot be set on skipped billing cycle.

* CYCLE\_​INDEX\_​OUT\_​OF\_​RANGE

  Billing cycle selector cannot select billing cycle outside of index range.

* CYCLE\_​NOT\_​FOUND

  Can't find the billing cycle.

* CYCLE\_​START\_​DATE\_​OUT\_​OF\_​RANGE

  Billing cycle selector cannot select billing cycle outside of start date range.

* EMPTY\_​BILLING\_​CYCLE\_​EDIT\_​SCHEDULE\_​INPUT

  Billing cycle schedule edit input provided is empty. Must take in parameters to modify schedule.

* INCOMPLETE\_​BILLING\_​ATTEMPTS

  Billing cycle has incomplete billing attempts in progress.

* INVALID

  The input value is invalid.

* INVALID\_​CYCLE\_​INDEX

  The index selector is invalid.

* INVALID\_​DATE

  The date selector is invalid.

* NO\_​CYCLE\_​EDITS

  There's no contract or schedule edit associated with the targeted billing cycle(s).

* OUT\_​OF\_​BOUNDS

  Billing date of a cycle cannot be set to a value outside of its billing date range.

* UPCOMING\_​CYCLE\_​LIMIT\_​EXCEEDED

  Billing cycle selector cannot select upcoming billing cycle past limit.

***

## Fields

* [Subscription​Billing​Cycle​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUserError#field-SubscriptionBillingCycleUserError.fields.code)

  OBJECT

  The possible errors for a subscription billing cycle.

***

## Map

### Fields with this enum

* <-|[Subscription​Billing​Cycle​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUserError#field-SubscriptionBillingCycleUserError.fields.code)
