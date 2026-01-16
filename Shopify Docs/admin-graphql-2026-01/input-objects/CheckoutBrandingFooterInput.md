---
title: CheckoutBrandingFooterInput - GraphQL Admin
description: The input fields when mutating the checkout footer settings.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingFooterInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingFooterInput.md
---

# Checkout​Branding​Footer​Input

input\_object

The input fields when mutating the checkout footer settings.

## Fields

* alignment

  [Checkout​Branding​Footer​Alignment](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingFooterAlignment)

  The footer alignment settings. You can set the footer native content alignment to the left, center, or right.

* color​Scheme

  [Checkout​Branding​Color​Scheme​Selection](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingColorSchemeSelection)

  The selected color scheme of the footer container.

* content

  [Checkout​Branding​Footer​Content​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingFooterContentInput)

  The input field for setting the footer content customizations.

* divided

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  The divided setting.

* padding

  [Checkout​Branding​Spacing​Keyword](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingSpacingKeyword)

  The padding of the footer container.

* position

  [Checkout​Branding​Footer​Position](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingFooterPosition)

  The input field for setting the footer position customizations.

***

## Input objects using this input

* [Checkout​Branding​Customizations​Input.footer](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomizationsInput#fields-footer)

  INPUT OBJECT

  The input fields used to update the components customizations.

***

## Map

### Input objects using this input

* [Checkout​Branding​Customizations​Input.footer](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomizationsInput#fields-footer)
