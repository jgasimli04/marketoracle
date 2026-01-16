---
title: CheckoutBrandingShopifyFontGroupInput - GraphQL Admin
description: The input fields used to update a Shopify font group.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingShopifyFontGroupInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingShopifyFontGroupInput.md
---

# Checkout​Branding​Shopify​Font​Group​Input

input\_object

The input fields used to update a Shopify font group.

## Fields

* base​Weight

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The base font weight.

* bold​Weight

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The bold font weight.

* loading​Strategy

  [Checkout​Branding​Font​Loading​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingFontLoadingStrategy)

  The font loading strategy.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The Shopify font name from [the list of available fonts](https://shopify.dev/themes/architecture/settings/fonts#available-fonts), such as `Alegreya Sans` or `Anonymous Pro`.

***

## Input objects using this input

* [Checkout​Branding​Font​Group​Input.shopifyFontGroup](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingFontGroupInput#fields-shopifyFontGroup)

  INPUT OBJECT

  The input fields used to update a font group. To learn more about updating fonts, refer to the [checkoutBrandingUpsert](https://shopify.dev/api/admin-graphql/unstable/mutations/checkoutBrandingUpsert) mutation and the checkout branding [tutorial](https://shopify.dev/docs/apps/checkout/styling).

***

## Map

### Input objects using this input

* [Checkout​Branding​Font​Group​Input.shopifyFontGroup](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingFontGroupInput#fields-shopifyFontGroup)
