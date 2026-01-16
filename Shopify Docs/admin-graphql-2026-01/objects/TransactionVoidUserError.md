---
title: TransactionVoidUserError - GraphQL Admin
description: An error that occurs during the execution of `TransactionVoid`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TransactionVoidUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TransactionVoidUserError.md
---

# Transaction​Void​User​Error

object

An error that occurs during the execution of `TransactionVoid`.

## Fields

* code

  [Transaction​Void​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/TransactionVoidUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

* [transaction​Void](https://shopify.dev/docs/api/admin-graphql/latest/mutations/transactionVoid)

  mutation

  Trigger the voiding of an uncaptured authorization transaction.

  * parent​Transaction​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    An uncaptured authorization transaction.

  ***

***

## <\~> TransactionVoidUserError Mutations

### Mutated by

* <\~>[transaction​Void](https://shopify.dev/docs/api/admin-graphql/latest/mutations/transactionVoid)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-TransactionVoidUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
