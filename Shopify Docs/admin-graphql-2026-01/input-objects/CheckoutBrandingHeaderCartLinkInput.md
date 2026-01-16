---
title: CheckoutBrandingHeaderCartLinkInput - GraphQL Admin
description: The input fields for header cart link customizations.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingHeaderCartLinkInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingHeaderCartLinkInput.md
---

# Checkout​Branding​Header​Cart​Link​Input

input\_object

The input fields for header cart link customizations.

## Fields

* content​Type

  [Checkout​Branding​Cart​Link​Content​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingCartLinkContentType)

  The input for the content type for the header back to cart link in 1-page checkout. Setting this to image will render the custom image provided using the image field on the header cart\_link object. If no image is provided, the default cart icon will be used.

* image

  [Checkout​Branding​Image​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingImageInput)

  The input for the image that's used for the header back to cart link in 1-page checkout when the content type is set to image.

***

## Input objects using this input

* [Checkout​Branding​Header​Input.cartLink](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingHeaderInput#fields-cartLink)

  INPUT OBJECT

  The input fields used to update the header customizations.

***

## Map

### Input objects using this input

* [Checkout​Branding​Header​Input.cartLink](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingHeaderInput#fields-cartLink)
