---
title: CheckoutBrandingFontLoadingStrategy - GraphQL Admin
description: >-
  The font loading strategy determines how a font face is displayed after it is
  loaded or failed to load.

  For more information:
  https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingFontLoadingStrategy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingFontLoadingStrategy.md
---

# Checkout​Branding​Font​Loading​Strategy

enum

The font loading strategy determines how a font face is displayed after it is loaded or failed to load. For more information: <https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display>.

## Valid values

* AUTO

  The font display strategy is defined by the browser user agent.

* BLOCK

  Gives the font face a short block period and an infinite swap period.

* FALLBACK

  Gives the font face an extremely small block period and a short swap period.

* OPTIONAL

  Gives the font face an extremely small block period and no swap period.

* SWAP

  Gives the font face an extremely small block period and an infinite swap period.

***

## Fields

* [Checkout​Branding​Custom​Font​Group​Input.loadingStrategy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomFontGroupInput#fields-loadingStrategy)

  INPUT OBJECT

  The input fields required to update a custom font group.

* [Checkout​Branding​Font​Group.loadingStrategy](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingFontGroup#field-CheckoutBrandingFontGroup.fields.loadingStrategy)

  OBJECT

  A font group. To learn more about updating fonts, refer to the [checkoutBrandingUpsert](https://shopify.dev/api/admin-graphql/unstable/mutations/checkoutBrandingUpsert) mutation and the checkout branding [tutorial](https://shopify.dev/docs/apps/checkout/styling).

* [Checkout​Branding​Shopify​Font​Group​Input.loadingStrategy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingShopifyFontGroupInput#fields-loadingStrategy)

  INPUT OBJECT

  The input fields used to update a Shopify font group.

***

## Map

### Fields with this enum

* <-|[Checkout​Branding​Font​Group.loadingStrategy](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingFontGroup#field-CheckoutBrandingFontGroup.fields.loadingStrategy)

### Inputs with this enum

* [Checkout​Branding​Custom​Font​Group​Input.loadingStrategy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomFontGroupInput#fields-loadingStrategy)
* [Checkout​Branding​Shopify​Font​Group​Input.loadingStrategy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingShopifyFontGroupInput#fields-loadingStrategy)
