---
title: CustomerPaymentInstrument - GraphQL Admin
description: All possible instruments for CustomerPaymentMethods.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/CustomerPaymentInstrument
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/CustomerPaymentInstrument.md
---

# Customer​Payment​Instrument

union

Requires `read_customers` access scope. Also: Requires `read_customer_payment_methods` scope.

All possible instruments for CustomerPaymentMethods.

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

* [Customer​Credit​Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCreditCard)

  OBJECT

  Represents a card instrument for customer payment method.

  * billing​Address

    [Customer​Credit​Card​Billing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCreditCardBillingAddress)

    The billing address of the card.

  * brand

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The brand of the card.

  * expires​Soon

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the card is about to expire.

  * expiry​Month

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The expiry month of the card.

  * expiry​Year

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The expiry year of the card.

  * first​Digits

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The card's BIN number.

  * is​Revocable

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    The payment method can be revoked if there are no active subscription contracts.

  * last​Digits

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The last 4 digits of the card.

  * masked​Number

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The masked card number with only the last 4 digits displayed.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The name of the card holder.

  * source

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The source of the card if coming from a wallet such as Apple Pay.

  * virtual​Last​Digits

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The last 4 digits of the Device Account Number.

* [Customer​Paypal​Billing​Agreement](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaypalBillingAgreement)

  OBJECT

  Represents a PayPal instrument for customer payment method.

  * billing​Address

    [Customer​Payment​Instrument​Billing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentInstrumentBillingAddress)

    The billing address of this payment method.

  * inactive

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the PayPal billing agreement is inactive.

  * is​Revocable

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the payment method can be revoked.The payment method can be revoked if there are no active subscription contracts.

  * paypal​Account​Email

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The customers's PayPal account email address.

* [Customer​Shop​Pay​Agreement](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerShopPayAgreement)

  OBJECT

  Represents a Shop Pay card instrument for customer payment method.

  * billing​Address

    [Customer​Credit​Card​Billing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCreditCardBillingAddress)

    The billing address of the card.

  * expires​Soon

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the card is about to expire.

  * expiry​Month

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The expiry month of the card.

  * expiry​Year

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The expiry year of the card.

  * inactive

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the Shop Pay billing agreement is inactive.

  * is​Revocable

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    The payment method can be revoked if there are no active subscription contracts.

  * last​Digits

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The last 4 digits of the card.

  * masked​Number

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The masked card number with only the last 4 digits displayed.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The name of the card holder.

***

## Fields with this union

* [Customer​Payment​Method.instrument](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod#field-CustomerPaymentMethod.fields.instrument)

  OBJECT

  A customer's saved payment method. Stores the payment instrument details and billing information for recurring charges.

  The payment method supports types included in the [`CustomerPaymentInstrument`](https://shopify.dev/docs/api/admin-graphql/latest/unions/CustomerPaymentInstrument) union.

***

```graphql
union CustomerPaymentInstrument = BankAccount | CustomerCreditCard | CustomerPaypalBillingAgreement | CustomerShopPayAgreement
```
