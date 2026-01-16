---
title: BalanceTransactionSortKeys - GraphQL Admin
description: The set of valid sort keys for the BalanceTransaction query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BalanceTransactionSortKeys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BalanceTransactionSortKeys.md
---

# Balance​Transaction​Sort​Keys

enum

The set of valid sort keys for the BalanceTransaction query.

## Valid values

* AMOUNT

  Sort by the `amount` value.

* FEE

  Sort by the `fee` value.

* ID

  Sort by the `id` value.

* NET

  Sort by the `net` value.

* ORDER\_​NAME

  Sort by the `order_name` value.

* PAYMENT\_​METHOD\_​NAME

  Sort by the `payment_method_name` value.

* PAYOUT\_​DATE

  Sort by the `payout_date` value.

* PAYOUT\_​STATUS

  Sort by the `payout_status` value.

* PROCESSED\_​AT

  Sort by the `processed_at` value.

* TRANSACTION\_​TYPE

  Sort by the `transaction_type` value.

***

## Fields

* [Shopify​Payments​Account.balanceTransactions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.balanceTransactions.arguments.sortKey)

  ARGUMENT

  Financial account information for merchants using Shopify Payments. Tracks current balances across all supported currencies, payout schedules, and [`ShopifyPaymentsBalanceTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction) records.

  The account includes configuration details such as [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount) objects for receiving [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) transfers, statement descriptors that appear on customer credit card statements, and the [`ShopifyPaymentsPayoutSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSchedule) that determines when funds transfer to your bank. Access balance transactions to review individual charges, refunds, and adjustments that affect your account balance. Query payouts to track money movement between your Shopify Payments balance and bank accounts.

***

## Map

### Arguments with this enum

* <-|[Shopify​Payments​Account.balanceTransactions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.balanceTransactions.arguments.sortKey)
