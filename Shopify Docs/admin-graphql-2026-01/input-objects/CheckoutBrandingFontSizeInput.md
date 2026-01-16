---
title: CheckoutBrandingFontSizeInput - GraphQL Admin
description: The input fields used to update the font size.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingFontSizeInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingFontSizeInput.md
---

# Checkout​Branding​Font​Size​Input

input\_object

The input fields used to update the font size.

## Fields

* base

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The base font size. Its value should be between 12.0 and 18.0.

* ratio

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The scale ratio used to derive all font sizes such as small and large. Its value should be between 1.0 and 1.4.

***

## Input objects using this input

* [Checkout​Branding​Typography​Input.size](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingTypographyInput#fields-size)

  INPUT OBJECT

  The input fields used to update the typography. Refer to the [typography tutorial](https://shopify.dev/docs/apps/checkout/styling/customize-typography) for more information on how to set these fields.

***

## Map

### Input objects using this input

* [Checkout​Branding​Typography​Input.size](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingTypographyInput#fields-size)
