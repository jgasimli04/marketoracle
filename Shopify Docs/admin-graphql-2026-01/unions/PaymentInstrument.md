---
title: PaymentInstrument - GraphQL Admin
description: All possible instrument outputs for Payment Mandates.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/unions/PaymentInstrument'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/PaymentInstrument.md
---

# Payment​Instrument

union

Requires `read_payment_mandate` access scope.

All possible instrument outputs for Payment Mandates.

## Possible types

* [Bank​Account](https://shopify.dev/docs/api/admin-graphql/latest/objects/BankAccount)

  OBJECT

  Represents a bank account payment instrument.

  * account​Holder​Type

    [Bank​Account​Holder​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/BankAccountHolderType)

    non-null

    The type of account holder.

  * account​Type

    [Bank​Account​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/BankAccountType)

    non-null

    The type of bank account.

  * bank​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The name of the bank.

  * billing​Address

    [Customer​Payment​Instrument​Billing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentInstrumentBillingAddress)

    The billing address associated with the bank account.

  * last​Digits

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The last four digits of the account number.

* [Vault​Credit​Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/VaultCreditCard)

  OBJECT

  Represents a credit card payment instrument.

  * billing​Address

    [Customer​Credit​Card​Billing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCreditCardBillingAddress)

    The billing address of the card.

  * brand

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The brand for the card.

  * expired

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the card has been expired.

  * expiry​Month

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The expiry month of the card.

  * expiry​Year

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The expiry year of the card.

  * last​Digits

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The last four digits for the card.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The name of the card holder.

* [Vault​Paypal​Billing​Agreement](https://shopify.dev/docs/api/admin-graphql/latest/objects/VaultPaypalBillingAgreement)

  OBJECT

  Represents a paypal billing agreement payment instrument.

  * inactive

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the paypal billing agreement is inactive.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The paypal account name.

  * paypal​Account​Email

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The paypal account email address.

***

## Fields with this union

* [Payment​Mandate.paymentInstrument](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandate#field-PaymentMandate.fields.paymentInstrument)

  OBJECT

  A payment instrument and the permission the owner of the instrument gives to the merchant to debit it.

***

```graphql
union PaymentInstrument = BankAccount | VaultCreditCard | VaultPaypalBillingAgreement
```
