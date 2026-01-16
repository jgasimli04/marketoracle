---
title: ReturnOutcomeFinancialTransfer - GraphQL Admin
description: The financial transfer details for the return outcome.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/ReturnOutcomeFinancialTransfer
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/ReturnOutcomeFinancialTransfer.md
---

# Return​Outcome​Financial​Transfer

union

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

The financial transfer details for the return outcome.

## Possible types

* [Invoice​Return​Outcome](https://shopify.dev/docs/api/admin-graphql/latest/objects/InvoiceReturnOutcome)

  OBJECT

  The financial transfer details for a return outcome that results in an invoice.

  * amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total monetary value to be invoiced in shop and presentment currencies.

* [Refund​Return​Outcome](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundReturnOutcome)

  OBJECT

  The financial transfer details for a return outcome that results in a refund.

  * amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total monetary value to be refunded in shop and presentment currencies.

  * suggested​Refund​Methods

    [\[Suggested​Refund​Method!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SuggestedRefundMethod)

    non-null

    A list of suggested refund methods.

  * suggested​Transactions

    [\[Suggested​Order​Transaction!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedOrderTransaction)

    non-null

    A list of suggested order transactions.

***

## Fields with this union

* [Suggested​Return​Financial​Outcome.financialTransfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedReturnFinancialOutcome#field-SuggestedReturnFinancialOutcome.fields.financialTransfer)

  OBJECT

  Represents a return financial outcome suggested by Shopify based on the items being reimbursed. You can then use the suggested outcome object to generate an actual refund or invoice for the return.

***

```graphql
union ReturnOutcomeFinancialTransfer = InvoiceReturnOutcome | RefundReturnOutcome
```
