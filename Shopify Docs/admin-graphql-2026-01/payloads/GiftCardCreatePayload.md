---
title: GiftCardCreatePayload - GraphQL Admin
description: Return type for `giftCardCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/GiftCardCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/GiftCardCreatePayload.md
---

# Gift​Card​Create​Payload

payload

Return type for `giftCardCreate` mutation.

## Fields

* gift​Card

  [Gift​Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  The created gift card.

* gift​Card​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The created gift card's code.

* user​Errors

  [\[Gift​Card​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [gift​Card​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCreate)

  mutation

  Creates a new [`GiftCard`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) with a specified initial value. You can assign the gift card to a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) or create it without assignment for manual distribution.

  You can customize the gift card with an optional code, expiration date, and internal note. If you don't provide a code, the system generates a random 16 character alphanumeric code. The mutation also supports scheduling gift card notifications to recipients, with a personalized message, through the [`recipientAttributes`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput#fields-recipientAttributes) field on the `GiftCardCreateInput` input object.

  * input

    [Gift​Card​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput)

    required

    ### Arguments

    The input fields to create a gift card.

  ***

***

## Map

### Mutations with this payload

* [gift​Card​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/giftCardCreate)
