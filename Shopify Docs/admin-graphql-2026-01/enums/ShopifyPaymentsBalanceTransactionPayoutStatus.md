---
title: ShopifyPaymentsBalanceTransactionPayoutStatus - GraphQL Admin
description: The payout status of the balance transaction.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsBalanceTransactionPayoutStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsBalanceTransactionPayoutStatus.md
---

# Shopify​Payments​Balance​Transaction​Payout​Status

enum

The payout status of the balance transaction.

## Valid values

* ACTION\_​REQUIRED

  The transaction requires action before it can be paid out.

* CANCELED

  The payout has been canceled by Shopify.

* FAILED

  The payout has been declined by the bank.

* PAID

  The payout has been successfully deposited into the bank.

* PENDING

  The transaction has not been assigned a payout yet.

* SCHEDULED

  The payout has been created and had transactions assigned to it, but it has not yet been submitted to the bank.

* IN\_​TRANSIT

  Deprecated

***

## Fields

* [Shopify​Payments​Balance​Transaction​Associated​Payout.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransactionAssociatedPayout#field-ShopifyPaymentsBalanceTransactionAssociatedPayout.fields.status)

  OBJECT

  The payout associated with a balance transaction.

***

## Map

### Fields with this enum

* <-|[Shopify​Payments​Balance​Transaction​Associated​Payout.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransactionAssociatedPayout#field-ShopifyPaymentsBalanceTransactionAssociatedPayout.fields.status)
