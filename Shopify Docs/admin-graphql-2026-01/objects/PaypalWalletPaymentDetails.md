---
title: PaypalWalletPaymentDetails - GraphQL Admin
description: PayPal Wallet payment details related to a transaction.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaypalWalletPaymentDetails
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaypalWalletPaymentDetails.md
---

# Paypal​Wallet​Payment​Details

object

Requires `read_orders` access scope.

PayPal Wallet payment details related to a transaction.

## Fields

* payment​Method​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of payment method used by the buyer.

***

## Map

### Possible type in

* [Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/unions/PaymentDetails)

***

## Interfaces

* [Base​Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/BasePaymentDetails)

  interface

***

## ||-PaypalWalletPaymentDetails Implements

### Implements

* ||-[Base​Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/BasePaymentDetails)
