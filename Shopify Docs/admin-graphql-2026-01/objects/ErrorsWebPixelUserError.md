---
title: ErrorsWebPixelUserError - GraphQL Admin
description: An error that occurs during the execution of a web pixel mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsWebPixelUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsWebPixelUserError.md
---

# Errors​Web​Pixel​User​Error

object

Requires `read_pixels` access scope.

An error that occurs during the execution of a web pixel mutation.

## Fields

* code

  [Errors​Web​Pixel​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ErrorsWebPixelUserErrorCode)

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

* [web​Pixel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelCreate)

  mutation

  Activate a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) by creating a web pixel record on the store where you installed your app.

  When you run the `webPixelCreate` mutation, Shopify validates it against the settings definition in `shopify.extension.toml`. If the `settings` input field doesn't match the schema that you defined, then the mutation fails. Learn how to define [web pixel settings](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings).

  * web​Pixel

    [Web​Pixel​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPixelInput)

    required

    ### Arguments

    The web pixel settings in JSON format.

  ***

* [web​Pixel​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelDelete)

  mutation

  Deletes the web pixel shop settings.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web pixel to delete.

  ***

* [web​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelUpdate)

  mutation

  Activate a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) by updating a web pixel record on the store where you installed your app.

  When you run the `webPixelUpdate` mutation, Shopify validates it against the settings definition in `shopify.extension.toml`. If the `settings` input field doesn't match the schema that you defined, then the mutation fails. Learn how to define [web pixel settings](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web pixel to update.

  * web​Pixel

    [Web​Pixel​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPixelInput)

    required

    The web pixel settings in JSON format.

  ***

***

## <\~> ErrorsWebPixelUserError Mutations

### Mutated by

* <\~>[web​Pixel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelCreate)
* <\~>[web​Pixel​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelDelete)
* <\~>[web​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ErrorsWebPixelUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
