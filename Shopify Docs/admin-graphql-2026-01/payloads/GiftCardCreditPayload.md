---
title: GiftCardCreditPayload - GraphQL Admin
description: Return type for `giftCardCredit` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/GiftCardCreditPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/GiftCardCreditPayload.md
---

# Gift​Card​Credit​Payload

payload

Return type for `giftCardCredit` mutation.

## Fields

* gift​Card​Credit​Transaction

  [Gift​Card​Credit​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCreditTransaction)

  The gift card credit transaction that was created.

* user​Errors

  [\[Gift​Card​Transaction​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardTransactionUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

***

## Map

### Mutations with this payload

* [gift​Card​Credit](https://shopify.dev/docs/api/admin-graphql/latest/types/giftCardCredit)
