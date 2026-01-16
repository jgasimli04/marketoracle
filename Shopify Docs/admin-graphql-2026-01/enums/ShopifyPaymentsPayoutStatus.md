---
title: ShopifyPaymentsPayoutStatus - GraphQL Admin
description: The transfer status of the payout.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutStatus.md
---

# Shopify​Payments​Payout​Status

enum

The transfer status of the payout.

## Valid values

* CANCELED

  The payout has been canceled by Shopify.

* FAILED

  The payout has been declined by the bank.

* PAID

  The payout has been successfully deposited into the bank.

* SCHEDULED

  The payout has been created and had transactions assigned to it, but it has not yet been submitted to the bank.

* IN\_​TRANSIT

  Deprecated

***

## Fields

* [Shopify​Payments​Payout.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.status)

  OBJECT

  A transfer of funds between a merchant's Shopify Payments balance and their [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount). Provides the [net amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.net), [issue date](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.issuedAt), and current [`ShopifyPaymentsPayoutStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutStatus).

  The payout includes a [`ShopifyPaymentsPayoutSummary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSummary) that breaks down fees and gross amounts by transaction type, such as charges, refunds, and adjustments. The [`ShopifyPaymentsPayoutTransactionType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutTransactionType) indicates whether funds move into the bank account (deposit) or back to Shopify Payments (withdrawal).

***

## Map

### Fields with this enum

* <-|[Shopify​Payments​Payout.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.status)
