---
title: CheckoutBrandingFont - GraphQL Admin
description: A font.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CheckoutBrandingFont
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CheckoutBrandingFont.md
---

# Checkout​Branding​Font

interface

A font.

## Fields

* sources

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The font sources.

* weight

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The font weight.

***

## Types implemented in

* [Checkout​Branding​Custom​Font](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomFont)

  OBJECT

  A custom font.

  * generic​File​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Globally unique ID reference to the custom font file.

  * sources

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The font sources.

  * weight

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The font weight.

* [Checkout​Branding​Shopify​Font](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingShopifyFont)

  OBJECT

  A Shopify font.

  * sources

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The font sources.

  * weight

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The font weight.

***

##### Variables

```json
{
	"sources": "",
	"weight": ""
}
```

##### Schema

```graphql
interface CheckoutBrandingFont {
  sources: String
  weight: Int
}
```
