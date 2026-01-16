---
title: ShopifyPaymentsBankAccountStatus - GraphQL Admin
description: The bank account status.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsBankAccountStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsBankAccountStatus.md
---

# Shopify​Payments​Bank​Account​Status

enum

The bank account status.

## Valid values

* ERRORED

  A payout to the bank account failed.

* NEW

  A bank account that hasn't had any activity and that's not validated.

* VALIDATED

  It was determined that the bank account exists.

* VERIFIED

  Bank account validation was successful.

***

## Fields

* [Shopify​Payments​Bank​Account.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount#field-ShopifyPaymentsBankAccount.fields.status)

  OBJECT

  A bank account that can receive payouts.

***

## Map

### Fields with this enum

* <-|[Shopify​Payments​Bank​Account.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount#field-ShopifyPaymentsBankAccount.fields.status)
