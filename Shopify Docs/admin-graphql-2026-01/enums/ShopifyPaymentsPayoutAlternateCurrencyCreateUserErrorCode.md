---
title: ShopifyPaymentsPayoutAlternateCurrencyCreateUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `ShopifyPaymentsPayoutAlternateCurrencyCreateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutAlternateCurrencyCreateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutAlternateCurrencyCreateUserErrorCode.md
---

# Shopify​Payments​Payout​Alternate​Currency​Create​User​Error​Code

enum

Possible error codes that can be returned by `ShopifyPaymentsPayoutAlternateCurrencyCreateUserError`.

## Valid values

* ALTERNATE\_​CURRENCY\_​PAYOUT\_​FAILED\_​NO\_​ELIGIBLE\_​BALANCE

  Failed to create payout, there is no eligible balance in this currency.

* ALTERNATE\_​CURRENCY\_​PAYOUT\_​FAILED\_​STRIPE\_​ERROR

  Failed to create payout due to an error from Stripe.

* MISSING\_​PROVIDER\_​ACCOUNT

  No Stripe provider account was found.

* UNKNOWN\_​CORE\_​ERROR

  Failed to create payout due to an error from Shopify Core.

***

## Fields

* [Shopify​Payments​Payout​Alternate​Currency​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutAlternateCurrencyCreateUserError#field-ShopifyPaymentsPayoutAlternateCurrencyCreateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `ShopifyPaymentsPayoutAlternateCurrencyCreate`.

***

## Map

### Fields with this enum

* <-|[Shopify​Payments​Payout​Alternate​Currency​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutAlternateCurrencyCreateUserError#field-ShopifyPaymentsPayoutAlternateCurrencyCreateUserError.fields.code)
