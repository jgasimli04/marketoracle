---
title: CheckoutBrandingObjectFit - GraphQL Admin
description: Possible values for object fit.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingObjectFit
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingObjectFit.md
---

# Checkout​Branding​Object​Fit

enum

Possible values for object fit.

## Valid values

* CONTAIN

  The Contain value for fit. The image is scaled to maintain its aspect ratio while fitting within the containing box. The entire image is made to fill the box, while preserving its aspect ratio, so the image will be "letterboxed" if its aspect ratio does not match the aspect ratio of the box. This is the default value.

* COVER

  The Cover value for fit. The image is sized to maintain its aspect ratio while filling the entire containing box. If the image’s aspect ratio does not match the aspect ratio of the containing box, then the object will be clipped to fit.

***

## Fields

* [Checkout​Branding​Merchandise​Thumbnail.fit](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingMerchandiseThumbnail#field-CheckoutBrandingMerchandiseThumbnail.fields.fit)

  OBJECT

  The merchandise thumbnails customizations.

* [Checkout​Branding​Merchandise​Thumbnail​Input.fit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingMerchandiseThumbnailInput#fields-fit)

  INPUT OBJECT

  The input fields used to update the merchandise thumbnails customizations.

***

## Map

### Fields with this enum

* <-|[Checkout​Branding​Merchandise​Thumbnail.fit](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingMerchandiseThumbnail#field-CheckoutBrandingMerchandiseThumbnail.fields.fit)

### Inputs with this enum

* [Checkout​Branding​Merchandise​Thumbnail​Input.fit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingMerchandiseThumbnailInput#fields-fit)
