---
title: ShopifyPaymentsSourceType - GraphQL Admin
description: The possible source types for a balance transaction.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsSourceType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsSourceType.md
---

# Shopify​Payments​Source​Type

enum

The possible source types for a balance transaction.

## Valid values

* ADJUSTMENT

  The adjustment source type.

* ADJUSTMENT\_​REVERSAL

  The adjustment\_reversal source type.

* CHARGE

  The charge source type.

* DISPUTE

  The dispute source type.

* REFUND

  The refund source type.

* SYSTEM\_​ADJUSTMENT

  The system\_adjustment source type.

* TRANSFER

  The transfer source type.

***

## Fields

* [Shopify​Payments​Balance​Transaction.sourceType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction#field-ShopifyPaymentsBalanceTransaction.fields.sourceType)

  OBJECT

  A transaction that contributes to a Shopify Payments account balance. Records money movement from charges, refunds, payouts, adjustments, or other payment activities. Includes the gross amount, processing fees, and resulting net amount that affects the account balance. Links to the source of the transaction and associated [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) details, with optional references to [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects or adjustment reasons when applicable.

***

## Map

### Fields with this enum

* <-|[Shopify​Payments​Balance​Transaction.sourceType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction#field-ShopifyPaymentsBalanceTransaction.fields.sourceType)
