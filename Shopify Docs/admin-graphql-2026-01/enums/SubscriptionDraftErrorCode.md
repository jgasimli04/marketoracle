---
title: SubscriptionDraftErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `SubscriptionDraftUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionDraftErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionDraftErrorCode.md
---

# Subscription​Draft​Error​Code

enum

Possible error codes that can be returned by `SubscriptionDraftUserError`.

## Valid values

* ALREADY\_​REMOVED

  This line has already been removed.

* BILLING\_​CYCLE\_​ABSENT

  Cannot commit a contract draft with this mutation. Please use SubscriptionDraftCommit.

* BILLING\_​CYCLE\_​CONTRACT\_​DRAFT\_​BILLING\_​POLICY\_​INVALID

  Billing policy cannot be updated for billing cycle contract drafts.

* BILLING\_​CYCLE\_​CONTRACT\_​DRAFT\_​DELIVERY\_​POLICY\_​INVALID

  Delivery policy cannot be updated for billing cycle contract drafts.

* BILLING\_​CYCLE\_​PRESENT

  Cannot commit a billing cycle contract draft with this mutation. Please use SubscriptionBillingCycleContractDraftCommit.

* BLANK

  The input value is blank.

* COMMITTED

  Subscription draft has been already committed.

* CONCATENATION\_​BILLING\_​CYCLE\_​CONTRACT\_​DRAFT\_​REQUIRED

  Contract draft must be a billing cycle contract draft for contract concatenation.

* CONCATENATION\_​UNCOMMITTED\_​CONTRACT\_​DRAFT

  Cannot concatenate a contract draft from subscriptionContractCreate mutation.

* CURRENCY\_​NOT\_​ENABLED

  Currency is not enabled.

* CUSTOMER\_​DOES\_​NOT\_​EXIST

  The customer doesn't exist.

* CUSTOMER\_​MISMATCH

  The payment method customer must be the same as the contract customer.

* CUSTOMER\_​REDACTED

  Customer is scheduled for redaction or has been redacted.

* CYCLE\_​DISCOUNTS\_​UNIQUE\_​AFTER\_​CYCLE

  The after cycle attribute must be unique between cycle discounts.

* CYCLE\_​INDEX\_​OUT\_​OF\_​RANGE

  Billing cycle selector cannot select billing cycle outside of index range.

* CYCLE\_​SELECTOR\_​VALIDATE\_​ONE\_​OF

  Billing cycle selector requires exactly one of index or date to be provided.

* CYCLE\_​START\_​DATE\_​OUT\_​OF\_​RANGE

  Billing cycle selector cannot select billing cycle outside of start date range.

* DELIVERY\_​METHOD\_​REQUIRED

  The delivery method can't be blank if any lines require shipping.

* DELIVERY\_​MUST\_​BE\_​MULTIPLE\_​OF\_​BILLING

  The delivery policy interval must be a multiple of the billing policy interval.

* DUPLICATE\_​CONCATENATED\_​CONTRACTS

  Concatenated contracts cannot contain duplicate subscription contracts.

* EXCEEDED\_​MAX\_​CONCATENATED\_​CONTRACTS

  Maximum number of concatenated contracts on a billing cycle contract draft exceeded.

* GREATER\_​THAN

  The input value should be greater than the minimum allowed value.

* GREATER\_​THAN\_​OR\_​EQUAL\_​TO

  The input value should be greater than or equal to the minimum value allowed.

* HAS\_​FUTURE\_​EDITS

  Cannot update a subscription contract with a current or upcoming billing cycle contract edit.

* INVALID

  The input value is invalid.

* INVALID\_​ADJUSTMENT\_​TYPE

  The adjustment value must the same type as the adjustment type.

* INVALID\_​ADJUSTMENT\_​VALUE

  The adjustment value must be either fixed\_value or percentage.

* INVALID\_​BILLING\_​DATE

  Next billing date is invalid.

* INVALID\_​LINES

  Must have at least one line.

* INVALID\_​NOTE\_​LENGTH

  Note length is too long.

* LESS\_​THAN

  The input value should be less than the maximum value allowed.

* LESS\_​THAN\_​OR\_​EQUAL\_​TO

  The input value should be less than or equal to the maximum value allowed.

* MISSING\_​CUSTOMER\_​PAYMENT\_​METHOD

  Customer payment method is required.

* MISSING\_​LOCAL\_​DELIVERY\_​OPTIONS

  The local delivery options must be set for local delivery.

* NO\_​ENTITLED\_​LINES

  Discount must have at least one entitled line.

* NOT\_​AN\_​INTEGER

  The value is not an integer.

* NOT\_​IN\_​RANGE

  Value is not in range.

* PRESENCE

  Input value is not present.

* SELLING\_​PLAN\_​MAX\_​CYCLES\_​MUST\_​BE\_​GREATER\_​THAN\_​MIN\_​CYCLES

  The maximum number of cycles must be greater than the minimum.

* STALE\_​CONTRACT

  Another operation updated the contract concurrently as the commit was in progress.

* TOO\_​LONG

  The input value is too long.

* TOO\_​SHORT

  The input value is too short.

* UPCOMING\_​CYCLE\_​LIMIT\_​EXCEEDED

  Billing cycle selector cannot select upcoming billing cycle past limit.

***

## Fields

* [Subscription​Draft​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError#field-SubscriptionDraftUserError.fields.code)

  OBJECT

  Represents a Subscription Draft error.

***

## Map

### Fields with this enum

* <-|[Subscription​Draft​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError#field-SubscriptionDraftUserError.fields.code)
