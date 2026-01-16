---
title: SubscriptionBillingCycleBulkUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `SubscriptionBillingCycleBulkUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleBulkUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleBulkUserErrorCode.md
---

# Subscription​Billing​Cycle​Bulk​User​Error​Code

enum

Possible error codes that can be returned by `SubscriptionBillingCycleBulkUserError`.

## Valid values

* BLANK

  The input value is blank.

* END\_​DATE\_​IN\_​THE\_​FUTURE

  End date can't be more than 24 hours in the future.

* INVALID

  The input value is invalid.

* INVALID\_​DATE\_​RANGE

  The range between start date and end date shouldn't be more than 1 week.

* START\_​DATE\_​BEFORE\_​END\_​DATE

  Start date should be before end date.

***

## Fields

* [Subscription​Billing​Cycle​Bulk​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleBulkUserError#field-SubscriptionBillingCycleBulkUserError.fields.code)

  OBJECT

  Represents an error that happens during the execution of subscriptionBillingCycles mutations.

***

## Map

### Fields with this enum

* <-|[Subscription​Billing​Cycle​Bulk​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleBulkUserError#field-SubscriptionBillingCycleBulkUserError.fields.code)
