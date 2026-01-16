---
title: OrderCreateOrderTransactionInput - GraphQL Admin
description: The input fields for a transaction to create for an order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderTransactionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderTransactionInput.md
---

# Order​Create​Order​Transaction​Input

input\_object

The input fields for a transaction to create for an order.

## Fields

* amount​Set

  [Money​Bag​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyBagInput)

  required

  The amount of the transaction.

* authorization​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The authorization code associated with the transaction.

* device​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the device used to process the transaction.

* gateway

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the gateway the transaction was issued through.

* gift​Card​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the gift card used for this transaction.

* kind

  [Order​Transaction​Kind](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionKind)

  Default:SALE

  The kind of transaction.

* location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the location where the transaction was processed.

* processed​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the transaction was processed.

* receipt​Json

  [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

  The transaction receipt that the payment gateway attaches to the transaction. The value of this field depends on which payment gateway processed the transaction.

* status

  [Order​Transaction​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionStatus)

  Default:SUCCESS

  The status of the transaction.

* test

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the transaction is a test transaction.

* user​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the user who processed the transaction.

***

## Input objects using this input

* [Order​Create​Order​Input.transactions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-transactions)

  INPUT OBJECT

  The input fields for creating an order.

***

## Map

### Input objects using this input

* [Order​Create​Order​Input.transactions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-transactions)
