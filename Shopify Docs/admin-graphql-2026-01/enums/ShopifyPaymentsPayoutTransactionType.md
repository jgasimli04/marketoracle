---
title: ShopifyPaymentsPayoutTransactionType - GraphQL Admin
description: The possible transaction types for a payout.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutTransactionType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutTransactionType.md
---

# Shopify​Payments​Payout​Transaction​Type

enum

The possible transaction types for a payout.

## Valid values

* DEPOSIT

  The payout is a deposit.

* WITHDRAWAL

  The payout is a withdrawal.

***

## Fields

* [Shopify​Payments​Account.payouts(transactionType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.payouts.arguments.transactionType)

  ARGUMENT

  Financial account information for merchants using Shopify Payments. Tracks current balances across all supported currencies, payout schedules, and [`ShopifyPaymentsBalanceTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction) records.

  The account includes configuration details such as [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount) objects for receiving [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) transfers, statement descriptors that appear on customer credit card statements, and the [`ShopifyPaymentsPayoutSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSchedule) that determines when funds transfer to your bank. Access balance transactions to review individual charges, refunds, and adjustments that affect your account balance. Query payouts to track money movement between your Shopify Payments balance and bank accounts.

* [Shopify​Payments​Bank​Account.payouts(transactionType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount#field-ShopifyPaymentsBankAccount.fields.payouts.arguments.transactionType)

  ARGUMENT

  A bank account that can receive payouts.

* [Shopify​Payments​Payout.transactionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.transactionType)

  OBJECT

  A transfer of funds between a merchant's Shopify Payments balance and their [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount). Provides the [net amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.net), [issue date](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.issuedAt), and current [`ShopifyPaymentsPayoutStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutStatus).

  The payout includes a [`ShopifyPaymentsPayoutSummary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSummary) that breaks down fees and gross amounts by transaction type, such as charges, refunds, and adjustments. The [`ShopifyPaymentsPayoutTransactionType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutTransactionType) indicates whether funds move into the bank account (deposit) or back to Shopify Payments (withdrawal).

***

## Map

### Fields with this enum

* <-|[Shopify​Payments​Payout.transactionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.transactionType)

### Arguments with this enum

* <-|[Shopify​Payments​Account.payouts(transactionType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.payouts.arguments.transactionType)
* <-|[Shopify​Payments​Bank​Account.payouts(transactionType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount#field-ShopifyPaymentsBankAccount.fields.payouts.arguments.transactionType)
