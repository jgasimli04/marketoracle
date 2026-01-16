---
title: CheckoutBrandingLogoInput - GraphQL Admin
description: The input fields used to update the logo customizations.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingLogoInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingLogoInput.md
---

# Checkout​Branding​Logo​Input

input\_object

The input fields used to update the logo customizations.

## Fields

* image

  [Checkout​Branding​Image​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingImageInput)

  The logo image (must not be of SVG format).

* max​Width

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The maximum width of the logo.

* visibility

  [Checkout​Branding​Visibility](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingVisibility)

  The visibility of the logo.

***

## Input objects using this input

* [Checkout​Branding​Header​Input.logo](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingHeaderInput#fields-logo)

  INPUT OBJECT

  The input fields used to update the header customizations.

***

## Map

### Input objects using this input

* [Checkout​Branding​Header​Input.logo](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingHeaderInput#fields-logo)
