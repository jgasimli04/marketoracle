---
title: DigitalWallet - GraphQL Admin
description: >-
  Digital wallet, such as Apple Pay, which can be used for accelerated
  checkouts.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DigitalWallet'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DigitalWallet.md'
---

# Digital​Wallet

enum

Digital wallet, such as Apple Pay, which can be used for accelerated checkouts.

## Valid values

* AMAZON\_​PAY

  Amazon Pay.

* ANDROID\_​PAY

  Android Pay.

* APPLE\_​PAY

  Apple Pay.

* FACEBOOK\_​PAY

  Facebook Pay.

* GOOGLE\_​PAY

  Google Pay.

* SHOPIFY\_​PAY

  Shopify Pay.

***

## Fields

* [Card​Payment​Details.wallet](https://shopify.dev/docs/api/admin-graphql/latest/objects/CardPaymentDetails#field-CardPaymentDetails.fields.wallet)

  OBJECT

  Credit card payment information captured during a transaction. Includes cardholder details, card metadata, verification response codes, and the [`DigitalWallet`](https://shopify.dev/docs/api/admin-graphql/latest/enums/DigitalWallet#valid-values) when used.

* [Payment​Settings.supportedDigitalWallets](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSettings#field-PaymentSettings.fields.supportedDigitalWallets)

  OBJECT

  Settings related to payments.

***

## Map

### Fields with this enum

* <-|[Card​Payment​Details.wallet](https://shopify.dev/docs/api/admin-graphql/latest/objects/CardPaymentDetails#field-CardPaymentDetails.fields.wallet)
* <-|[Payment​Settings.supportedDigitalWallets](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSettings#field-PaymentSettings.fields.supportedDigitalWallets)
