---
title: PayoutSortKeys - GraphQL Admin
description: The set of valid sort keys for the Payout query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/PayoutSortKeys'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/PayoutSortKeys.md'
---

# Payout​Sort​Keys

enum

The set of valid sort keys for the Payout query.

## Valid values

* ADJUSTMENT\_​GROSS

  Sort by the `adjustment_gross` value.

* ADVANCE\_​GROSS

  Sort by the `advance_gross` value.

* AMOUNT

  Sort by the `amount` value.

* CHARGE\_​GROSS

  Sort by the `charge_gross` value.

* DUTIES\_​GROSS

  Sort by the `duties_gross` value.

* FEE\_​AMOUNT

  Sort by the `fee_amount` value.

* ID

  Sort by the `id` value.

* ISSUED\_​AT

  Sort by the `issued_at` value.

* REFUND\_​GROSS

  Sort by the `refund_gross` value.

* SHIPPING\_​LABEL\_​GROSS

  Sort by the `shipping_label_gross` value.

* STATUS

  Sort by the `status` value.

***

## Fields

* [Shopify​Payments​Account.payouts(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.payouts.arguments.sortKey)

  ARGUMENT

  Financial account information for merchants using Shopify Payments. Tracks current balances across all supported currencies, payout schedules, and [`ShopifyPaymentsBalanceTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction) records.

  The account includes configuration details such as [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount) objects for receiving [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) transfers, statement descriptors that appear on customer credit card statements, and the [`ShopifyPaymentsPayoutSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSchedule) that determines when funds transfer to your bank. Access balance transactions to review individual charges, refunds, and adjustments that affect your account balance. Query payouts to track money movement between your Shopify Payments balance and bank accounts.

* [Shopify​Payments​Bank​Account.payouts(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount#field-ShopifyPaymentsBankAccount.fields.payouts.arguments.sortKey)

  ARGUMENT

  A bank account that can receive payouts.

***

## Map

### Arguments with this enum

* <-|[Shopify​Payments​Account.payouts(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.payouts.arguments.sortKey)
* <-|[Shopify​Payments​Bank​Account.payouts(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount#field-ShopifyPaymentsBankAccount.fields.payouts.arguments.sortKey)
