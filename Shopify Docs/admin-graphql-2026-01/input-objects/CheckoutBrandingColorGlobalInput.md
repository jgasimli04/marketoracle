---
title: CheckoutBrandingColorGlobalInput - GraphQL Admin
description: The input fields to customize the overall look and feel of the checkout.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingColorGlobalInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingColorGlobalInput.md
---

# Checkout​Branding​Color​Global​Input

input\_object

The input fields to customize the overall look and feel of the checkout.

## Fields

* accent

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A color used for interaction, like links and focus states.

* brand

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A color that's strongly associated with the merchant. Currently used for primary buttons, such as **Pay now**, and secondary buttons, such as **Buy again**.

* critical

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A semantic color used for components that communicate critical content. For example, a blocking error such as the requirement to enter a valid credit card number.

* decorative

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A color used to highlight certain areas of the user interface. For example, the [`Text`](https://shopify.dev/docs/api/checkout-ui-extensions/latest/components/titles-and-text/text#textprops-propertydetail-appearance) component.

* info

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A semantic color used for components that communicate general, informative content.

* success

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A semantic color used for components that communicate successful actions or a positive state.

* warning

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A semantic color used for components that display content that requires attention. For example, something that might be wrong, but not blocking.

***

## Input objects using this input

* [Checkout​Branding​Colors​Input.global](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingColorsInput#fields-global)

  INPUT OBJECT

  The input fields used to update the color settings for global colors and color schemes.

***

## Map

### Input objects using this input

* [Checkout​Branding​Colors​Input.global](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingColorsInput#fields-global)
