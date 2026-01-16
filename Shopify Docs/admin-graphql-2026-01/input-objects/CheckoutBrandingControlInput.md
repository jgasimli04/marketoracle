---
title: CheckoutBrandingControlInput - GraphQL Admin
description: The input fields used to update the form controls customizations.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingControlInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingControlInput.md
---

# Checkout​Branding​Control​Input

input\_object

The input fields used to update the form controls customizations.

## Fields

* border

  [Checkout​Branding​Simple​Border](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingSimpleBorder)

  The border used for form controls.

* color

  [Checkout​Branding​Color​Selection](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingColorSelection)

  Set to TRANSPARENT to define transparent form controls. If null, form controls inherit colors from their scheme settings (for example, the main section inherits from `design_system.colors.schemes.scheme1.control` by default). Note that usage of the `customizations.control.color` setting to customize the form control color is deprecated.

* corner​Radius

  [Checkout​Branding​Corner​Radius](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingCornerRadius)

  The corner radius used for form controls.

* label​Position

  [Checkout​Branding​Label​Position](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingLabelPosition)

  The label position used for form controls.

***

## Input objects using this input

* [Checkout​Branding​Customizations​Input.control](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomizationsInput#fields-control)

  INPUT OBJECT

  The input fields used to update the components customizations.

***

## Map

### Input objects using this input

* [Checkout​Branding​Customizations​Input.control](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomizationsInput#fields-control)
