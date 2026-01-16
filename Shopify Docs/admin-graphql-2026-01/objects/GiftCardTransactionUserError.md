---
title: GiftCardTransactionUserError - GraphQL Admin
description: >-
  Represents an error that happens during the execution of a gift card
  transaction mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardTransactionUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardTransactionUserError.md
---

# Gift​Card​Transaction​User​Error

object

Requires `read_gift_card_transactions` access scope.

Represents an error that happens during the execution of a gift card transaction mutation.

## Fields

* code

  [Gift​Card​Transaction​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardTransactionUserErrorCode)

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

* [gift​Card​Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCredit)

  mutation

  Credit a gift card.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to be credited.

  * credit​Input

    [Gift​Card​Credit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreditInput)

    required

    The input fields to credit a gift card.

  ***

* [gift​Card​Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDebit)

  mutation

  Debit a gift card.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to be debited.

  * debit​Input

    [Gift​Card​Debit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardDebitInput)

    required

    The input fields to debit a gift card.

  ***

***

## <\~> GiftCardTransactionUserError Mutations

### Mutated by

* <\~>[gift​Card​Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCredit)
* <\~>[gift​Card​Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDebit)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-GiftCardTransactionUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
