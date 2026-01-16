---
title: GiftCardDebitPayload - GraphQL Admin
description: Return type for `giftCardDebit` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/GiftCardDebitPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/GiftCardDebitPayload.md
---

# Gift​Card​Debit​Payload

payload

Return type for `giftCardDebit` mutation.

## Fields

* gift​Card​Debit​Transaction

  [Gift​Card​Debit​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDebitTransaction)

  The gift card debit transaction that was created.

* user​Errors

  [\[Gift​Card​Transaction​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardTransactionUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [gift​Card​Debit](https://shopify.dev/docs/api/admin-graphql/latest/types/giftCardDebit)
