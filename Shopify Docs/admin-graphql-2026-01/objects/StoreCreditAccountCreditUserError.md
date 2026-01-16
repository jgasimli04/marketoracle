---
title: StoreCreditAccountCreditUserError - GraphQL Admin
description: An error that occurs during the execution of `StoreCreditAccountCredit`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditUserError.md
---

# Store​Credit​Account​Credit​User​Error

object

An error that occurs during the execution of `StoreCreditAccountCredit`.

## Fields

* code

  [Store​Credit​Account​Credit​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditAccountCreditUserErrorCode)

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

* [store​Credit​Account​Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storeCreditAccountCredit)

  mutation

  Adds funds to a [`StoreCreditAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount) by creating a [`StoreCreditAccountCreditTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction). The mutation accepts either a store credit account ID, a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) ID, or a [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) ID. When you provide a customer or company location ID, it automatically creates an account if one doesn't exist for the specified currency.

  Store credit accounts are currency-specific. A single owner can have multiple accounts, each holding a different currency. Use the most appropriate currency for the given store credit account owner.

  Credits can optionally include an expiration date.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the store credit account or the ID of the account owner.

  * credit​Input

    [Store​Credit​Account​Credit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditAccountCreditInput)

    required

    The input fields for a store credit account credit transaction.

  ***

***

## <\~> StoreCreditAccountCreditUserError Mutations

### Mutated by

* <\~>[store​Credit​Account​Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storeCreditAccountCredit)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-StoreCreditAccountCreditUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
