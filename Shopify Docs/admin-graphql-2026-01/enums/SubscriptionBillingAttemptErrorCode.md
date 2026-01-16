---
title: SubscriptionBillingAttemptErrorCode - GraphQL Admin
description: >-
  The possible error codes associated with making billing attempts. The error
  codes supplement the

  `error_message` to provide consistent results and help with dunning
  management.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptErrorCode.md
---

# Subscription​Billing​Attempt​Error​Code

enum

The possible error codes associated with making billing attempts. The error codes supplement the `error_message` to provide consistent results and help with dunning management.

## Valid values

* AMOUNT\_​TOO\_​SMALL

  The amount is too small.

* AUTHENTICATION\_​ERROR

  There was an error during the authentication.

* BUYER\_​CANCELED\_​PAYMENT\_​METHOD

  Payment method was canceled by buyer.

* CARD\_​NUMBER\_​INCORRECT

  Card number was incorrect.

* CUSTOMER\_​INVALID

  Customer is invalid.

* CUSTOMER\_​NOT\_​FOUND

  Customer was not found.

* EXPIRED\_​PAYMENT\_​METHOD

  Payment method is expired.

* FRAUD\_​SUSPECTED

  Fraud was suspected.

* FREE\_​GIFT\_​CARD\_​NOT\_​ALLOWED

  Gift cards must have a price greater than zero.

* INSUFFICIENT\_​FUNDS

  Insufficient funds.

* INSUFFICIENT\_​INVENTORY

  Not enough inventory found.

* INVALID\_​BILLING\_​ADDRESS

  The billing address is invalid.

* INVALID\_​CUSTOMER\_​BILLING\_​AGREEMENT

  The billing agreement ID or the transaction ID for the customer's payment method is invalid.

* INVALID\_​PAYMENT\_​METHOD

  Payment method is invalid. Please update or create a new payment method.

* INVALID\_​SHIPPING\_​ADDRESS

  The shipping address is either missing or invalid.

* INVENTORY\_​ALLOCATIONS\_​NOT\_​FOUND

  No inventory location found or enabled.

* INVOICE\_​ALREADY\_​PAID

  A payment has already been made for this invoice.

* NON\_​TEST\_​ORDER\_​LIMIT\_​REACHED

  Non-test order limit reached. Use a test payment gateway to place another order.

* PAYMENT\_​METHOD\_​DECLINED

  Payment method was declined by processor.

* PAYMENT\_​METHOD\_​INCOMPATIBLE\_​WITH\_​GATEWAY\_​CONFIG

  Payment method cannot be used with the current payment gateway test mode configuration.

* PAYMENT\_​METHOD\_​NOT\_​FOUND

  Payment method was not found.

* PAYMENT\_​PROVIDER\_​IS\_​NOT\_​ENABLED

  Payment provider is not enabled.

* PAYPAL\_​ERROR\_​GENERAL

  Paypal Error General.

* PURCHASE\_​TYPE\_​NOT\_​SUPPORTED

  Purchase Type is not supported.

* TEST\_​MODE

  Gateway is in test mode and attempted to bill a live payment method.

* TRANSIENT\_​ERROR

  Transient error, try again later.

* UNEXPECTED\_​ERROR

  There was an unexpected error during the billing attempt.

***

## Fields

* [Subscription​Billing​Attempt​Generic​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptGenericError#field-SubscriptionBillingAttemptGenericError.fields.code)

  OBJECT

  A base error type that applies to all uncategorized error classes.

* [Subscription​Billing​Attempt​Insufficient​Stock​Product​Variants​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptInsufficientStockProductVariantsError#field-SubscriptionBillingAttemptInsufficientStockProductVariantsError.fields.code)

  OBJECT

  An inventory error caused by an issue with one or more of the contract merchandise lines.

* [Subscription​Billing​Attempt​Out​Of​Stock​Product​Variants​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptOutOfStockProductVariantsError#field-SubscriptionBillingAttemptOutOfStockProductVariantsError.fields.code)

  OBJECT

  An inventory error caused by an issue with one or more of the contract merchandise lines.

* [Subscription​Billing​Attempt​Processing​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionBillingAttemptProcessingError#fields-code)

  INTERFACE

  An error that prevented a billing attempt.

* [Subscription​Billing​Attempt.errorCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-SubscriptionBillingAttempt.fields.errorCode)

  OBJECT

  Deprecated

***

## Map

### Fields with this enum

* <-|[Subscription​Billing​Attempt​Generic​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptGenericError#field-SubscriptionBillingAttemptGenericError.fields.code)
* <-|[Subscription​Billing​Attempt​Insufficient​Stock​Product​Variants​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptInsufficientStockProductVariantsError#field-SubscriptionBillingAttemptInsufficientStockProductVariantsError.fields.code)
* <-|[Subscription​Billing​Attempt​Out​Of​Stock​Product​Variants​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptOutOfStockProductVariantsError#field-SubscriptionBillingAttemptOutOfStockProductVariantsError.fields.code)
