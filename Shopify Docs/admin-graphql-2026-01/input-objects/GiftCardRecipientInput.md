---
title: GiftCardRecipientInput - GraphQL Admin
description: The input fields to add a recipient to a gift card.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardRecipientInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardRecipientInput.md
---

# Gift​Card​Recipient​Input

input\_object

The input fields to add a recipient to a gift card.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the customer who will be the recipient of the gift card. Requires `write_customers` access\_scope.

* message

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The personalized message intended for the recipient.

* preferred​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The preferred name of the recipient.

* send​Notification​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The scheduled datetime on which the gift card will be sent to the recipient. The gift card will be sent within an hour of the specified datetime.

***

## Input objects using this input

* [Gift​Card​Create​Input.recipientAttributes](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput#fields-recipientAttributes)

  INPUT OBJECT

  The input fields to issue a gift card.

* [Gift​Card​Update​Input.recipientAttributes](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardUpdateInput#fields-recipientAttributes)

  INPUT OBJECT

  The input fields to update a gift card.

***

## Map

### Input objects using this input

* [Gift​Card​Create​Input.recipientAttributes](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput#fields-recipientAttributes)
* [Gift​Card​Update​Input.recipientAttributes](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardUpdateInput#fields-recipientAttributes)
