---
title: BillingAttemptUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `BillingAttemptUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BillingAttemptUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BillingAttemptUserErrorCode.md
---

# Billing​Attempt​User​Error​Code

enum

Possible error codes that can be returned by `BillingAttemptUserError`.

## Valid values

* BILLING\_​CYCLE\_​CHARGE\_​BEFORE\_​EXPECTED\_​DATE

  Billing cycle charge attempt made more than 24 hours before the billing cycle `billingAttemptExpectedDate`.

* BILLING\_​CYCLE\_​SKIPPED

  Billing cycle must not be skipped.

* BLANK

  The input value is blank.

* CONTRACT\_​NOT\_​FOUND

  Subscription contract does not exist.

* CONTRACT\_​PAUSED

  Subscription contract cannot be billed if paused.

* CONTRACT\_​TERMINATED

  Subscription contract cannot be billed once terminated.

* CONTRACT\_​UNDER\_​REVIEW

  Subscription contract is under review.

* CYCLE\_​INDEX\_​OUT\_​OF\_​RANGE

  Billing cycle selector cannot select billing cycle outside of index range.

* CYCLE\_​START\_​DATE\_​OUT\_​OF\_​RANGE

  Billing cycle selector cannot select billing cycle outside of start date range.

* INVALID

  The input value is invalid.

* ORIGIN\_​TIME\_​BEFORE\_​CONTRACT\_​CREATION

  Origin time cannot be before the contract creation time.

* ORIGIN\_​TIME\_​OUT\_​OF\_​RANGE

  Origin time needs to be within the selected billing cycle's start and end at date.

* THROTTLED

  Billing attempt rate limit exceeded - try later.

* UPCOMING\_​CYCLE\_​LIMIT\_​EXCEEDED

  Billing cycle selector cannot select upcoming billing cycle past limit.

***

## Fields

* [Billing​Attempt​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/BillingAttemptUserError#field-BillingAttemptUserError.fields.code)

  OBJECT

  Represents an error that happens during the execution of a billing attempt mutation.

***

## Map

### Fields with this enum

* <-|[Billing​Attempt​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/BillingAttemptUserError#field-BillingAttemptUserError.fields.code)
