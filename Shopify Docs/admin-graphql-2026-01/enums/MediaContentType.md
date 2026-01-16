---
title: MediaContentType - GraphQL Admin
description: The possible content types for a media object.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaContentType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaContentType.md'
---

# Media​Content​Type

enum

The possible content types for a media object.

## Valid values

* EXTERNAL\_​VIDEO

  An externally hosted video.

* IMAGE

  A Shopify-hosted image.

* MODEL\_​3D

  A 3d model.

* VIDEO

  A Shopify-hosted video.

***

## Fields

* [Create​Media​Input.mediaContentType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput#fields-mediaContentType)

  INPUT OBJECT

  The input fields required to create a media object.

* [External​Video.mediaContentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExternalVideo#field-ExternalVideo.fields.mediaContentType)

  OBJECT

  Represents a video hosted outside of Shopify.

* [Media.mediaContentType](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media#fields-mediaContentType)

  INTERFACE

  Represents a media interface.

* [Media​Image.mediaContentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage#field-MediaImage.fields.mediaContentType)

  OBJECT

  The `MediaImage` object represents an image hosted on Shopify's [content delivery network (CDN)](https://shopify.dev/docs/storefronts/themes/best-practices/performance/platform#shopify-cdn). Shopify CDN is a content system that serves as the primary way to store, manage, and deliver visual content for products, variants, and other resources across the Shopify platform.

  The `MediaImage` object provides information to:

  * Store and display product and variant images across online stores, admin interfaces, and mobile apps.
  * Retrieve visual branding elements, including logos, banners, favicons, and background images in checkout flows.
  * Retrieve signed URLs for secure, time-limited access to original image files.

  Each `MediaImage` object provides both the processed image data (with automatic optimization and CDN delivery) and access to the original source file. The image processing is handled asynchronously, so images might not be immediately available after upload. The [`status`](https://shopify.dev/docs/api/admin-graphql/latest/objects/mediaimage#field-MediaImage.fields.status) field indicates when processing is complete and the image is ready for use.

  The `MediaImage` object implements the [`Media`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media) interface alongside other media types, like videos and 3D models.

  Learn about managing media for [products](https://shopify.dev/docs/apps/build/online-store/product-media), [product variants](https://shopify.dev/docs/apps/build/online-store/product-variant-media), and [asynchronous media management](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components#asynchronous-media-management).

* [Model3d.mediaContentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3d#field-Model3d.fields.mediaContentType)

  OBJECT

  Represents a Shopify hosted 3D model.

* [Video.mediaContentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/Video#field-Video.fields.mediaContentType)

  OBJECT

  Represents a Shopify hosted video.

***

## Map

### Fields with this enum

* <-|[External​Video.mediaContentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExternalVideo#field-ExternalVideo.fields.mediaContentType)
* <-|[Media​Image.mediaContentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage#field-MediaImage.fields.mediaContentType)
* <-|[Model3d.mediaContentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3d#field-Model3d.fields.mediaContentType)
* <-|[Video.mediaContentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/Video#field-Video.fields.mediaContentType)

### Inputs with this enum

* [Create​Media​Input.mediaContentType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput#fields-mediaContentType)
