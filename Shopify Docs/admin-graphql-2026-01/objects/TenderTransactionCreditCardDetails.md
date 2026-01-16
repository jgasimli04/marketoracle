---
title: TenderTransactionCreditCardDetails - GraphQL Admin
description: Information about the credit card used for this transaction.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransactionCreditCardDetails
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransactionCreditCardDetails.md
---

# Tender​Transaction​Credit​Card​Details

object

Requires `read_orders` access scope.

Information about the credit card used for this transaction.

## Fields

* credit​Card​Company

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the company that issued the customer's credit card. Example: `Visa`.

* credit​Card​Number

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The customer's credit card number, with all digits except the last 4 redacted. Example: `•••• •••• •••• 1234`

***

## Map

### Possible type in

* [Tender​Transaction​Details](https://shopify.dev/docs/api/admin-graphql/latest/unions/TenderTransactionDetails)
