---
title: ShopifyPaymentsPayoutAlternateCurrencyCreateUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `ShopifyPaymentsPayoutAlternateCurrencyCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutAlternateCurrencyCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutAlternateCurrencyCreateUserError.md
---

# Shopify​Payments​Payout​Alternate​Currency​Create​User​Error

object

An error that occurs during the execution of `ShopifyPaymentsPayoutAlternateCurrencyCreate`.

## Fields

* code

  [Shopify​Payments​Payout​Alternate​Currency​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutAlternateCurrencyCreateUserErrorCode)

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

* [shopify​Payments​Payout​Alternate​Currency​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifyPaymentsPayoutAlternateCurrencyCreate)

  mutation

  Creates an alternate currency payout for a Shopify Payments account.

  * account​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the Shopify Payments account on which the mutation is being performed.

  * currency

    [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

    required

    The currency of the balance to payout.

  ***

***

## <\~> ShopifyPaymentsPayoutAlternateCurrencyCreateUserError Mutations

### Mutated by

* <\~>[shopify​Payments​Payout​Alternate​Currency​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifyPaymentsPayoutAlternateCurrencyCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ShopifyPaymentsPayoutAlternateCurrencyCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
