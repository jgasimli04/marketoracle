---
title: GiftCardUserError - GraphQL Admin
description: Represents an error that happens during the execution of a gift card mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardUserError'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardUserError.md
---

# Gift​Card​User​Error

object

Requires `read_gift_cards` access scope.

Represents an error that happens during the execution of a gift card mutation.

## Fields

* code

  [Gift​Card​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardErrorCode)

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

## <\~> GiftCardUserError Mutations

### Mutated by

* <\~>[gift​Card​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-GiftCardUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
