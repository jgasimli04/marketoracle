---
title: FileStatus - GraphQL Admin
description: The possible statuses for a file object.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/FileStatus'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/FileStatus.md'
---

# File​Status

enum

The possible statuses for a file object.

## Valid values

* FAILED

  File processing has failed.

* PROCESSING

  File is being processed.

* READY

  File is ready to be displayed.

* UPLOADED

  File has been uploaded but hasn't been processed.

***

## Fields

* [External​Video.fileStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExternalVideo#field-ExternalVideo.fields.fileStatus)

  OBJECT

  Represents a video hosted outside of Shopify.

* [File.fileStatus](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File#fields-fileStatus)

  INTERFACE

  A file interface.

* [Generic​File.fileStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/GenericFile#field-GenericFile.fields.fileStatus)

  OBJECT

  Represents any file other than HTML.

* [Media​Image.fileStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage#field-MediaImage.fields.fileStatus)

  OBJECT

  The `MediaImage` object represents an image hosted on Shopify's [content delivery network (CDN)](https://shopify.dev/docs/storefronts/themes/best-practices/performance/platform#shopify-cdn). Shopify CDN is a content system that serves as the primary way to store, manage, and deliver visual content for products, variants, and other resources across the Shopify platform.

  The `MediaImage` object provides information to:

  * Store and display product and variant images across online stores, admin interfaces, and mobile apps.
  * Retrieve visual branding elements, including logos, banners, favicons, and background images in checkout flows.
  * Retrieve signed URLs for secure, time-limited access to original image files.

  Each `MediaImage` object provides both the processed image data (with automatic optimization and CDN delivery) and access to the original source file. The image processing is handled asynchronously, so images might not be immediately available after upload. The [`status`](https://shopify.dev/docs/api/admin-graphql/latest/objects/mediaimage#field-MediaImage.fields.status) field indicates when processing is complete and the image is ready for use.

  The `MediaImage` object implements the [`Media`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media) interface alongside other media types, like videos and 3D models.

  Learn about managing media for [products](https://shopify.dev/docs/apps/build/online-store/product-media), [product variants](https://shopify.dev/docs/apps/build/online-store/product-variant-media), and [asynchronous media management](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components#asynchronous-media-management).

* [Model3d.fileStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3d#field-Model3d.fields.fileStatus)

  OBJECT

  Represents a Shopify hosted 3D model.

* [Video.fileStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/Video#field-Video.fields.fileStatus)

  OBJECT

  Represents a Shopify hosted video.

***

## Map

### Fields with this enum

* <-|[External​Video.fileStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExternalVideo#field-ExternalVideo.fields.fileStatus)
* <-|[Generic​File.fileStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/GenericFile#field-GenericFile.fields.fileStatus)
* <-|[Media​Image.fileStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage#field-MediaImage.fields.fileStatus)
* <-|[Model3d.fileStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3d#field-Model3d.fields.fileStatus)
* <-|[Video.fileStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/Video#field-Video.fields.fileStatus)
