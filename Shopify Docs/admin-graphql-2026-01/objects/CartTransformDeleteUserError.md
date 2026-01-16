---
title: CartTransformDeleteUserError - GraphQL Admin
description: An error that occurs during the execution of `CartTransformDelete`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformDeleteUserError.md
---

# Cart​Transform​Delete​User​Error

object

An error that occurs during the execution of `CartTransformDelete`.

## Fields

* code

  [Cart​Transform​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CartTransformDeleteUserErrorCode)

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

* [cart​Transform​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cartTransformDelete)

  mutation

  Removes an existing cart transform function from the merchant's store, disabling any customized bundle or cart modification logic it provided. This mutation persistently deletes the transform configuration and stops all associated cart processing.

  For example, when discontinuing a bundle app or removing specific merchandising features, you would delete the corresponding cart transform to ensure customers no longer see the bundled products or modified cart behavior.

  Use `CartTransformDelete` to:

  * Deactivate customized bundle logic when removing app features
  * Clean up unused transform functions
  * Disable cart modifications during app uninstallation
  * Remove outdated merchandising strategies
  * Restore default cart behavior for merchants

  The deletion processes immediately and returns the ID of the removed cart transform for confirmation. Once deleted, the transform function stops processing new cart operations, though existing cart sessions may retain their current state until refresh. This ensures a clean transition without disrupting active customer sessions.

  Consider the timing of deletions carefully, as removing transforms during peak shopping periods could affect customer experience if they have active carts with transformed items.

  Learn more about [managing cart transforms](https://shopify.dev/docs/apps/selling-strategies/bundles).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier for the cart transform.

  ***

***

## <\~> CartTransformDeleteUserError Mutations

### Mutated by

* <\~>[cart​Transform​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cartTransformDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CartTransformDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
