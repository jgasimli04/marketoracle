---
title: BasePaymentDetails - GraphQL Admin
description: Generic payment details that are related to a transaction.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/BasePaymentDetails
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/BasePaymentDetails.md
---

# Base​Payment​Details

interface

Requires `read_orders` access scope.

Generic payment details that are related to a transaction.

## Fields

* payment​Method​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of payment method used by the buyer.

***

## Types implemented in

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

##### Variables

```json
{
	"paymentMethodName": ""
}
```

##### Schema

```graphql
interface BasePaymentDetails {
  paymentMethodName: String
}
```
