---
title: CropRegion - GraphQL Admin
description: The part of the image that should remain after cropping.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CropRegion'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CropRegion.md'
---

# Crop​Region

enum

The part of the image that should remain after cropping.

## Valid values

* BOTTOM

  Keep the bottom of the image.

* CENTER

  Keep the center of the image.

* LEFT

  Keep the left of the image.

* RIGHT

  Keep the right of the image.

* TOP

  Keep the top of the image.

***

## Fields

* [Image.transformedSrc(crop)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image#field-Image.fields.transformedSrc.arguments.crop)

  ARGUMENT

  Represents an image resource.

* [Image​Transform​Input.crop](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ImageTransformInput#fields-crop)

  INPUT OBJECT

  The available options for transforming an image.

  All transformation options are considered best effort. Any transformation that the original image type doesn't support will be ignored.

### Deprecated fields

* [Collection.image(crop)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.image.arguments.crop)

  ARGUMENT

  Deprecated

* [Comment​Event​Attachment.image(crop)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEventAttachment#field-CommentEventAttachment.fields.image.arguments.crop)

  ARGUMENT

  Deprecated

* [Draft​Order​Line​Item.image(crop)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.image.arguments.crop)

  ARGUMENT

  Deprecated

* [Line​Item.image(crop)](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.image.arguments.crop)

  ARGUMENT

  Deprecated

* [Order​Transaction.paymentIcon(crop)](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.paymentIcon.arguments.crop)

  ARGUMENT

  Deprecated

* [Product.images(crop)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.images.arguments.crop)

  ARGUMENT

  Deprecated

* [Product​Variant.image(crop)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.image.arguments.crop)

  ARGUMENT

  Deprecated

* [Shop.productImages(crop)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.productImages.arguments.crop)

  ARGUMENT

  Deprecated

***

## Map

### Inputs with this enum

* [Image​Transform​Input.crop](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ImageTransformInput#fields-crop)

### Arguments with this enum

* <-|[Image.transformedSrc(crop)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image#field-Image.fields.transformedSrc.arguments.crop)
