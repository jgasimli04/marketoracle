---
title: OrderTransactionInput - GraphQL Admin
description: The input fields for the information needed to create an order transaction.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderTransactionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderTransactionInput.md
---

# Order​Transaction​Input

input\_object

The input fields for the information needed to create an order transaction.

## Fields

* amount

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-null

  The amount of money for this transaction.

* gateway

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The payment gateway to use for this transaction.

* kind

  [Order​Transaction​Kind!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionKind)

  non-null

  The kind of transaction.

* order​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the order associated with the transaction.

* parent​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the optional parent transaction, for example the authorization of a capture.

***

## Input objects using this input

* [Refund​Input.transactions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundInput#fields-transactions)

  INPUT OBJECT

  The input fields to create a refund.

***

## Map

### Input objects using this input

* [Refund​Input.transactions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundInput#fields-transactions)
