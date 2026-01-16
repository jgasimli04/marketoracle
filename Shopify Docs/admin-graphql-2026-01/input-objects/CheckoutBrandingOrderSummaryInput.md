---
title: CheckoutBrandingOrderSummaryInput - GraphQL Admin
description: The input fields used to update the order summary container customizations.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingOrderSummaryInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingOrderSummaryInput.md
---

# Checkout​Branding​Order​Summary​Input

input\_object

The input fields used to update the order summary container customizations.

## Fields

* background​Image

  [Checkout​Branding​Image​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingImageInput)

  The background image of the order summary container (must not be of SVG format).

* color​Scheme

  [Checkout​Branding​Color​Scheme​Selection](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingColorSchemeSelection)

  The selected color scheme for the order summary container of the checkout.

* divider

  [Checkout​Branding​Container​Divider​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingContainerDividerInput)

  Divider style and visibility on the order summary container.

* section

  [Checkout​Branding​Order​Summary​Section​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingOrderSummarySectionInput)

  The settings for the order summary sections.

***

## Input objects using this input

* [Checkout​Branding​Customizations​Input.orderSummary](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomizationsInput#fields-orderSummary)

  INPUT OBJECT

  The input fields used to update the components customizations.

***

## Map

### Input objects using this input

* [Checkout​Branding​Customizations​Input.orderSummary](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomizationsInput#fields-orderSummary)
