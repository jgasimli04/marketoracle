---
title: CheckoutBrandingCustomFontInput - GraphQL Admin
description: The input fields required to update a font.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomFontInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomFontInput.md
---

# Checkout​Branding​Custom​Font​Input

input\_object

The input fields required to update a font.

## Fields

* generic​File​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID for a font file uploaded via the Files api. Allowed font types are .woff and .woff2.

* weight

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The font weight. Its value should be between 100 and 900.

***

## Input objects using this input

* [Checkout​Branding​Custom​Font​Group​Input.base](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomFontGroupInput#fields-base)

  INPUT OBJECT

  The input fields required to update a custom font group.

* [Checkout​Branding​Custom​Font​Group​Input.bold](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomFontGroupInput#fields-bold)

  INPUT OBJECT

  The input fields required to update a custom font group.

***

## Map

### Input objects using this input

* [Checkout​Branding​Custom​Font​Group​Input.base](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomFontGroupInput#fields-base)
* [Checkout​Branding​Custom​Font​Group​Input.bold](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomFontGroupInput#fields-bold)
