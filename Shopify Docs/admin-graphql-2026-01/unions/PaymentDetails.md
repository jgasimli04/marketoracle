---
title: PaymentDetails - GraphQL Admin
description: Payment details related to a transaction.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/unions/PaymentDetails'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/unions/PaymentDetails.md'
---

# Payment​Details

union

Requires `read_orders` access scope.

Payment details related to a transaction.

## Possible types

* [Card​Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/objects/CardPaymentDetails)

  OBJECT

  Credit card payment information captured during a transaction. Includes cardholder details, card metadata, verification response codes, and the [`DigitalWallet`](https://shopify.dev/docs/api/admin-graphql/latest/enums/DigitalWallet#valid-values) when used.

  * avs​Result​Code

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The response code from the address verification system (AVS). The code is always a single letter.

  * bin

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The issuer identification number (IIN), formerly known as bank identification number (BIN) of the customer's credit card. This is made up of the first few digits of the credit card number.

  * company

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the company that issued the customer's credit card.

  * cvv​Result​Code

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The response code from the credit card company indicating whether the customer entered the card security code, or card verification value, correctly. The code is a single letter or empty string.

  * expiration​Month

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The month in which the used credit card expires.

  * expiration​Year

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The year in which the used credit card expires.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The holder of the credit card.

  * number

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The customer's credit card number, with most of the leading digits redacted.

  * payment​Method​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of payment method used by the buyer.

  * wallet

    [Digital​Wallet](https://shopify.dev/docs/api/admin-graphql/latest/enums/DigitalWallet)

    Digital wallet used for the payment.

* [Local​Payment​Methods​Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalPaymentMethodsPaymentDetails)

  OBJECT

  Local payment methods payment details related to a transaction.

  * payment​Descriptor

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The descriptor by the payment provider. Only available for Amazon Pay and Buy with Prime.

  * payment​Method​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of payment method used by the buyer.

* [Paypal​Wallet​Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaypalWalletPaymentDetails)

  OBJECT

  PayPal Wallet payment details related to a transaction.

  * payment​Method​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of payment method used by the buyer.

* [Shop​Pay​Installments​Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayInstallmentsPaymentDetails)

  OBJECT

  Shop Pay Installments payment details related to a transaction.

  * payment​Method​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of payment method used by the buyer.

***

## Fields with this union

* [Order​Transaction.paymentDetails](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.paymentDetails)

  OBJECT

  The `OrderTransaction` object represents a payment transaction that's associated with an order. An order transaction is a specific action or event that happens within the context of an order, such as a customer paying for a purchase or receiving a refund, or other payment-related activity.

  Use the `OrderTransaction` object to capture the complete lifecycle of a payment, from initial authorization to final settlement, including refunds and currency exchanges. Common use cases for using the `OrderTransaction` object include:

  * Processing new payments for orders
  * Managing payment authorizations and captures
  * Processing refunds for returned items
  * Tracking payment status and errors
  * Managing multi-currency transactions
  * Handling payment gateway integrations

  Each `OrderTransaction` object has a [`kind`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionKind) that defines the type of transaction and a [`status`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionStatus) that indicates the current state of the transaction. The object stores detailed information about payment methods, gateway processing, and settlement details.

  Learn more about [payment processing](https://help.shopify.com/manual/payments) and [payment gateway integrations](https://www.shopify.com/ca/payment-gateways).

* [Suggested​Order​Transaction.paymentDetails](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedOrderTransaction#field-SuggestedOrderTransaction.fields.paymentDetails)

  OBJECT

  A suggested transaction. Suggested transaction are usually used in the context of refunds and exchanges.

***

```graphql
union PaymentDetails = CardPaymentDetails | LocalPaymentMethodsPaymentDetails | PaypalWalletPaymentDetails | ShopPayInstallmentsPaymentDetails
```
