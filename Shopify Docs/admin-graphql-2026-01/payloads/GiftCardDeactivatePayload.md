---
title: GiftCardDeactivatePayload - GraphQL Admin
description: Return type for `giftCardDeactivate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/GiftCardDeactivatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/GiftCardDeactivatePayload.md
---

# Gift​Card​Deactivate​Payload

payload

Return type for `giftCardDeactivate` mutation.

## Fields

* gift​Card

  [Gift​Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  The deactivated gift card.

* user​Errors

  [\[Gift​Card​Deactivate​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDeactivateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [gift​Card​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDeactivate)

  mutation

  Deactivate a gift card. A deactivated gift card cannot be used by a customer. A deactivated gift card cannot be re-enabled.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to deactivate.

  ***

***

## Map

### Mutations with this payload

* [gift​Card​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/types/giftCardDeactivate)
