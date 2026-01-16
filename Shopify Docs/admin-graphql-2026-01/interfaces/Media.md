---
title: Media - GraphQL Admin
description: Represents a media interface.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media.md'
---

# Media

interface

Requires `read_products` access scope, `read_files` access scope, `read_themes` access scope, `read_orders` access scope, `read_draft_orders` access scope, `read_images` access scope or `read_quick_sale` access scope.

Represents a media interface.

## Fields

* alt

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A word or phrase to share the nature or contents of a media.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* media​Content​Type

  [Media​Content​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaContentType)

  non-null

  The media content type.

* media​Errors

  [\[Media​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaError)

  non-null

  Any errors which have occurred on the media.

* media​Warnings

  [\[Media​Warning!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaWarning)

  non-null

  The warnings attached to the media.

* preview

  [Media​Preview​Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaPreviewImage)

  The preview image for the media.

* status

  [Media​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaStatus)

  non-null

  Current status of the media.

***

## Types implemented in

* [External​Video](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExternalVideo)

  OBJECT

  Represents a video hosted outside of Shopify.

  * alt

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A word or phrase to describe the contents or the function of a file.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.

  * embed​Url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    non-null

    The embed URL of the video for the respective host.

  * file​Errors

    [\[File​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FileError)

    non-null

    Any errors that have occurred on the file.

  * file​Status

    [File​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileStatus)

    non-null

    The status of the file.

  * host

    [Media​Host!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaHost)

    non-null

    The host of the external video.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * media​Content​Type

    [Media​Content​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaContentType)

    non-null

    The media content type.

  * media​Errors

    [\[Media​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaError)

    non-null

    Any errors which have occurred on the media.

  * media​Warnings

    [\[Media​Warning!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaWarning)

    non-null

    The warnings attached to the media.

  * origin​Url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    non-null

    The origin URL of the video on the respective host.

  * preview

    [Media​Preview​Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaPreviewImage)

    The preview image for the media.

  * status

    [Media​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaStatus)

    non-null

    Current status of the media.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated.

  * embedded​Url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    non-nullDeprecated

* [Media​Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage)

  OBJECT

  The `MediaImage` object represents an image hosted on Shopify's [content delivery network (CDN)](https://shopify.dev/docs/storefronts/themes/best-practices/performance/platform#shopify-cdn). Shopify CDN is a content system that serves as the primary way to store, manage, and deliver visual content for products, variants, and other resources across the Shopify platform.

  The `MediaImage` object provides information to:

  * Store and display product and variant images across online stores, admin interfaces, and mobile apps.
  * Retrieve visual branding elements, including logos, banners, favicons, and background images in checkout flows.
  * Retrieve signed URLs for secure, time-limited access to original image files.

  Each `MediaImage` object provides both the processed image data (with automatic optimization and CDN delivery) and access to the original source file. The image processing is handled asynchronously, so images might not be immediately available after upload. The [`status`](https://shopify.dev/docs/api/admin-graphql/latest/objects/mediaimage#field-MediaImage.fields.status) field indicates when processing is complete and the image is ready for use.

  The `MediaImage` object implements the [`Media`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media) interface alongside other media types, like videos and 3D models.

  Learn about managing media for [products](https://shopify.dev/docs/apps/build/online-store/product-media), [product variants](https://shopify.dev/docs/apps/build/online-store/product-variant-media), and [asynchronous media management](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components#asynchronous-media-management).

  * alt

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A word or phrase to share the nature or contents of a media.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.

  * file​Errors

    [\[File​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FileError)

    non-null

    Any errors that have occurred on the file.

  * file​Status

    [File​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileStatus)

    non-null

    The status of the file.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * image

    [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

    The image for the media. Returns `null` until `status` is `READY`.

  * media​Content​Type

    [Media​Content​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaContentType)

    non-null

    The media content type.

  * media​Errors

    [\[Media​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaError)

    non-null

    Any errors which have occurred on the media.

  * media​Warnings

    [\[Media​Warning!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaWarning)

    non-null

    The warnings attached to the media.

  * mime​Type

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The MIME type of the image.

  * original​Source

    [Media​Image​Original​Source](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImageOriginalSource)

    The original source of the image.

  * preview

    [Media​Preview​Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaPreviewImage)

    The preview image for the media.

  * status

    [Media​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaStatus)

    non-null

    Current status of the media.

  * translations

    [\[Translation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

    non-null

    The published translations associated with the resource.

    * locale

      [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      required

      ### Arguments

      Filters translations locale.

    * market​Id

      [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

      Filters translations by market ID. Use this argument to retrieve content specific to a market.

    ***

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated.

  * metafield

    [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

    Deprecated

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      required

      The key for the metafield.

    ***

  * metafields

    [Metafield​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

    non-nullDeprecated

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      The metafield namespace to filter by. If omitted, all metafields are returned.

    * keys

      [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      List of keys of metafields in the format `namespace.key`, will be returned in the same format.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * after

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * last

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * before

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * reverse

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

* [Model3d](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3d)

  OBJECT

  Represents a Shopify hosted 3D model.

  * alt

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A word or phrase to describe the contents or the function of a file.

  * bounding​Box

    [Model3d​Bounding​Box](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3dBoundingBox)

    The 3d model's bounding box information.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.

  * file​Errors

    [\[File​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FileError)

    non-null

    Any errors that have occurred on the file.

  * filename

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The 3d model's filename.

  * file​Status

    [File​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileStatus)

    non-null

    The status of the file.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * media​Content​Type

    [Media​Content​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaContentType)

    non-null

    The media content type.

  * media​Errors

    [\[Media​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaError)

    non-null

    Any errors which have occurred on the media.

  * media​Warnings

    [\[Media​Warning!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaWarning)

    non-null

    The warnings attached to the media.

  * original​Source

    [Model3d​Source](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3dSource)

    The 3d model's original source.

  * preview

    [Media​Preview​Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaPreviewImage)

    The preview image for the media.

  * sources

    [\[Model3d​Source!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3dSource)

    non-null

    The 3d model's sources.

  * status

    [Media​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaStatus)

    non-null

    Current status of the media.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated.

* [Video](https://shopify.dev/docs/api/admin-graphql/latest/objects/Video)

  OBJECT

  Represents a Shopify hosted video.

  * alt

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A word or phrase to share the nature or contents of a media.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.

  * duration

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The video's duration in milliseconds. This value is `null` unless the video's status field is [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready).

  * file​Errors

    [\[File​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FileError)

    non-null

    Any errors that have occurred on the file.

  * filename

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The video's filename.

  * file​Status

    [File​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileStatus)

    non-null

    The status of the file.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * media​Content​Type

    [Media​Content​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaContentType)

    non-null

    The media content type.

  * media​Errors

    [\[Media​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaError)

    non-null

    Any errors which have occurred on the media.

  * media​Warnings

    [\[Media​Warning!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaWarning)

    non-null

    The warnings attached to the media.

  * original​Source

    [Video​Source](https://shopify.dev/docs/api/admin-graphql/latest/objects/VideoSource)

    The video's original source. This value is `null` unless the video's status field is [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready).

  * preview

    [Media​Preview​Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaPreviewImage)

    The preview image for the media.

  * sources

    [\[Video​Source!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/VideoSource)

    non-null

    The video's sources. This value is empty unless the video's status field is [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready).

  * status

    [Media​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaStatus)

    non-null

    Current status of the media.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated.

***

##### Variables

```json
{
	"alt": "",
	"id": "",
	"mediaContentType": "",
	"mediaErrors": "",
	"mediaWarnings": "",
	"preview": "",
	"status": ""
}
```

##### Schema

```graphql
interface Media {
  alt: String
  id: ID!
  mediaContentType: MediaContentType!
  mediaErrors: [MediaError!]!
  mediaWarnings: [MediaWarning!]!
  preview: MediaPreviewImage
  status: MediaStatus!
}
```
