---
title: GiftCardUpdatePayload - GraphQL Admin
description: Return type for `giftCardUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/GiftCardUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/GiftCardUpdatePayload.md
---

# Gift​Card​Update​Payload

payload

Return type for `giftCardUpdate` mutation.

## Fields

* gift​Card

  [Gift​Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  The updated gift card.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [gift​Card​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardUpdate)

  mutation

  Update a gift card.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to be updated.

  * input

    [Gift​Card​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardUpdateInput)

    required

    The input fields to update the gift card.

  ***

***

## Map

### Mutations with this payload

* [gift​Card​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/giftCardUpdate)
