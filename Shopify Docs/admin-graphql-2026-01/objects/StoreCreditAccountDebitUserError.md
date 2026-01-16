---
title: StoreCreditAccountDebitUserError - GraphQL Admin
description: An error that occurs during the execution of `StoreCreditAccountDebit`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitUserError.md
---

# Store​Credit​Account​Debit​User​Error

object

An error that occurs during the execution of `StoreCreditAccountDebit`.

## Fields

* code

  [Store​Credit​Account​Debit​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditAccountDebitUserErrorCode)

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

* [store​Credit​Account​Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storeCreditAccountDebit)

  mutation

  Creates a debit transaction that decreases the store credit account balance by the given amount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the store credit account or the ID of the account owner.

  * debit​Input

    [Store​Credit​Account​Debit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditAccountDebitInput)

    required

    The input fields for a store credit account debit transaction.

  ***

***

## <\~> StoreCreditAccountDebitUserError Mutations

### Mutated by

* <\~>[store​Credit​Account​Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storeCreditAccountDebit)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-StoreCreditAccountDebitUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
