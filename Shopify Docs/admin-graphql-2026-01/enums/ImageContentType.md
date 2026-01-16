---
title: ImageContentType - GraphQL Admin
description: List of supported image content types.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ImageContentType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ImageContentType.md'
---

# Image​Content​Type

enum

List of supported image content types.

## Valid values

* JPG

  A JPG image.

* PNG

  A PNG image.

* WEBP

  A WEBP image.

***

## Fields

* [Image.transformedSrc(preferredContentType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image#field-Image.fields.transformedSrc.arguments.preferredContentType)

  ARGUMENT

  Represents an image resource.

* [Image​Transform​Input.preferredContentType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ImageTransformInput#fields-preferredContentType)

  INPUT OBJECT

  The available options for transforming an image.

  All transformation options are considered best effort. Any transformation that the original image type doesn't support will be ignored.

***

## Map

### Inputs with this enum

* [Image​Transform​Input.preferredContentType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ImageTransformInput#fields-preferredContentType)

### Arguments with this enum

* <-|[Image.transformedSrc(preferredContentType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image#field-Image.fields.transformedSrc.arguments.preferredContentType)
