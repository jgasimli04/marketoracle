---
title: TransactionSortKeys - GraphQL Admin
description: The set of valid sort keys for the Transaction query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/TransactionSortKeys'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/TransactionSortKeys.md
---

# Transaction​Sort​Keys

enum

The set of valid sort keys for the Transaction query.

## Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* EXPIRES\_​AT

  Sort by the `expires_at` value.

***

## Fields

* [Store​Credit​Account.transactions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount#field-StoreCreditAccount.fields.transactions.arguments.sortKey)

  ARGUMENT

  A store credit account contains a monetary balance that can be redeemed at checkout for purchases in the shop. The account is held in the specified currency and has an owner that cannot be transferred.

  The account balance is redeemable at checkout only when the owner is authenticated via [new customer accounts authentication](https://shopify.dev/docs/api/customer).

***

## Map

### Arguments with this enum

* <-|[Store​Credit​Account.transactions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount#field-StoreCreditAccount.fields.transactions.arguments.sortKey)
