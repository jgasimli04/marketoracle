---
title: WebPixelCreatePayload - GraphQL Admin
description: Return type for `webPixelCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/WebPixelCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/WebPixelCreatePayload.md
---

# Web​Pixel​Create​Payload

payload

Return type for `webPixelCreate` mutation.

## Fields

* user​Errors

  [\[Errors​Web​Pixel​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsWebPixelUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* web​Pixel

  [Web​Pixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebPixel)

  The created web pixel settings.

***

## Mutations with this payload

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

***

## Map

### Mutations with this payload

* [web​Pixel​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/webPixelCreate)
