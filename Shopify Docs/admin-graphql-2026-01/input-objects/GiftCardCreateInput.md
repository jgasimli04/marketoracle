---
title: GiftCardCreateInput - GraphQL Admin
description: The input fields to issue a gift card.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput.md
---

# Gift​Card​Create​Input

input\_object

The input fields to issue a gift card.

## Fields

* code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The gift card's code. It must be 8-20 characters long and contain only letters(a-z) and numbers(0-9). It isn't case sensitive. If not provided, then a random code will be generated.

* customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the customer who will receive the gift card. Requires `write_customers` access\_scope.

* expires​On

  [Date](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date)

  The date at which the gift card will expire. If not provided, then the gift card will never expire.

* initial​Value

  [Decimal!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  non-null

  The initial value of the gift card.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The note associated with the gift card, which isn't visible to the customer.

* recipient​Attributes

  [Gift​Card​Recipient​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardRecipientInput)

  The recipient attributes of the gift card.

* template​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The suffix of the Liquid template that's used to render the gift card online. For example, if the value is `birthday`, then the gift card is rendered using the template `gift_card.birthday.liquid`. If not provided, then the default `gift_card.liquid` template is used.

***

## Map

No referencing types
