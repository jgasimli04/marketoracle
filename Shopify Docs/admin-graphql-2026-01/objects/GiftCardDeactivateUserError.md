---
title: GiftCardDeactivateUserError - GraphQL Admin
description: An error that occurs during the execution of `GiftCardDeactivate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDeactivateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDeactivateUserError.md
---

# Gift​Card​Deactivate​User​Error

object

An error that occurs during the execution of `GiftCardDeactivate`.

## Fields

* code

  [Gift​Card​Deactivate​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardDeactivateUserErrorCode)

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

## <\~> GiftCardDeactivateUserError Mutations

### Mutated by

* <\~>[gift​Card​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDeactivate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-GiftCardDeactivateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
