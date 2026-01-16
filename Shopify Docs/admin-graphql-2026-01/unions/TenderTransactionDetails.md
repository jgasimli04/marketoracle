---
title: TenderTransactionDetails - GraphQL Admin
description: Information about the payment instrument used for this transaction.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/TenderTransactionDetails
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/TenderTransactionDetails.md
---

# Tender​Transaction​Details

union

Requires `read_orders` access scope.

Information about the payment instrument used for this transaction.

## Possible types

* [Tender​Transaction​Credit​Card​Details](https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransactionCreditCardDetails)

  OBJECT

  Information about the credit card used for this transaction.

  * credit​Card​Company

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the company that issued the customer's credit card. Example: `Visa`.

  * credit​Card​Number

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The customer's credit card number, with all digits except the last 4 redacted. Example: `•••• •••• •••• 1234`

***

## Fields with this union

* [Tender​Transaction.transactionDetails](https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransaction#field-TenderTransaction.fields.transactionDetails)

  OBJECT

  A TenderTransaction represents a transaction with financial impact on a shop's balance sheet. A tender transaction always represents actual money movement between a buyer and a shop. TenderTransactions can be used instead of OrderTransactions for reconciling a shop's cash flow. A TenderTransaction is immutable once created.

***

```graphql
union TenderTransactionDetails = TenderTransactionCreditCardDetails
```
