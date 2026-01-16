---
title: GiftCardUpdateInput - GraphQL Admin
description: The input fields to update a gift card.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardUpdateInput.md
---

# Gift​Card​Update​Input

input\_object

The input fields to update a gift card.

## Fields

* customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the customer who will receive the gift card. The ID can't be changed if the gift card already has an assigned customer ID.

* expires​On

  [Date](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date)

  The date at which the gift card will expire. If set to `null`, then the gift card will never expire.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The note associated with the gift card, which isn't visible to the customer.

* recipient​Attributes

  [Gift​Card​Recipient​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardRecipientInput)

  The recipient attributes of the gift card.

* template​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The suffix of the Liquid template that's used to render the gift card online. For example, if the value is `birthday`, then the gift card is rendered using the template `gift_card.birthday.liquid`.

***

## Map

No referencing types
