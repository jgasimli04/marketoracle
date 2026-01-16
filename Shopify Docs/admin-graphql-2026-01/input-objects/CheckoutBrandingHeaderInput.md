---
title: CheckoutBrandingHeaderInput - GraphQL Admin
description: The input fields used to update the header customizations.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingHeaderInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingHeaderInput.md
---

# Checkout​Branding​Header​Input

input\_object

The input fields used to update the header customizations.

## Fields

* alignment

  [Checkout​Branding​Header​Alignment](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingHeaderAlignment)

  The header alignment.

* banner

  [Checkout​Branding​Image​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingImageInput)

  The background image of the header (must not be of SVG format).

* cart​Link

  [Checkout​Branding​Header​Cart​Link​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingHeaderCartLinkInput)

  The input for cart link customizations for 1-page checkout. This field allows to customize the cart icon that renders by default on 1-page checkout.

* color​Scheme

  [Checkout​Branding​Color​Scheme​Selection](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingColorSchemeSelection)

  The selected color scheme of the header container.

* divided

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  The divided setting.

* logo

  [Checkout​Branding​Logo​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingLogoInput)

  The store logo.

* padding

  [Checkout​Branding​Spacing​Keyword](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingSpacingKeyword)

  The padding of the header container.

* position

  [Checkout​Branding​Header​Position](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingHeaderPosition)

  The header position.

***

## Input objects using this input

* [Checkout​Branding​Customizations​Input.header](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomizationsInput#fields-header)

  INPUT OBJECT

  The input fields used to update the components customizations.

***

## Map

### Input objects using this input

* [Checkout​Branding​Customizations​Input.header](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomizationsInput#fields-header)
