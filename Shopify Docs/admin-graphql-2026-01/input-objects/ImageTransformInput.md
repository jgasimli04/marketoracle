---
title: ImageTransformInput - GraphQL Admin
description: >-
  The available options for transforming an image.


  All transformation options are considered best effort. Any transformation that
  the original image type doesn't support will be ignored.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ImageTransformInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ImageTransformInput.md
---

# Image​Transform​Input

input\_object

The available options for transforming an image.

All transformation options are considered best effort. Any transformation that the original image type doesn't support will be ignored.

## Fields

* crop

  [Crop​Region](https://shopify.dev/docs/api/admin-graphql/latest/enums/CropRegion)

  The region of the image to remain after cropping. Must be used in conjunction with the `maxWidth` and/or `maxHeight` fields, where the `maxWidth` and `maxHeight` aren't equal. The `crop` argument should coincide with the smaller value. A smaller `maxWidth` indicates a `LEFT` or `RIGHT` crop, while a smaller `maxHeight` indicates a `TOP` or `BOTTOM` crop. For example, `{ maxWidth: 5, maxHeight: 10, crop: LEFT }` will result in an image with a width of 5 and height of 10, where the right side of the image is removed.

* max​Height

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Image height in pixels between 1 and 5760.

* max​Width

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Image width in pixels between 1 and 5760.

* preferred​Content​Type

  [Image​Content​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/ImageContentType)

  Convert the source image into the preferred content type. Supported conversions: `.svg` to `.png`, any file type to `.jpg`, and any file type to `.webp`.

* scale

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Default:1

  Image size multiplier for high-resolution retina displays. Must be within 1..3.

***

## Map

No referencing types
