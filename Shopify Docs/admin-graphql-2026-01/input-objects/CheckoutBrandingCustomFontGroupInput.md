---
title: CheckoutBrandingCustomFontGroupInput - GraphQL Admin
description: The input fields required to update a custom font group.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomFontGroupInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomFontGroupInput.md
---

# Checkout​Branding​Custom​Font​Group​Input

input\_object

The input fields required to update a custom font group.

## Fields

* base

  [Checkout​Branding​Custom​Font​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomFontInput)

  required

  The base font.

* bold

  [Checkout​Branding​Custom​Font​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomFontInput)

  required

  The bold font.

* loading​Strategy

  [Checkout​Branding​Font​Loading​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingFontLoadingStrategy)

  The font loading strategy.

***

## Input objects using this input

* [Checkout​Branding​Font​Group​Input.customFontGroup](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingFontGroupInput#fields-customFontGroup)

  INPUT OBJECT

  The input fields used to update a font group. To learn more about updating fonts, refer to the [checkoutBrandingUpsert](https://shopify.dev/api/admin-graphql/unstable/mutations/checkoutBrandingUpsert) mutation and the checkout branding [tutorial](https://shopify.dev/docs/apps/checkout/styling).

***

## Map

### Input objects using this input

* [Checkout​Branding​Font​Group​Input.customFontGroup](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingFontGroupInput#fields-customFontGroup)
