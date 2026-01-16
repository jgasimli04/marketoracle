---
title: MediaErrorCode - GraphQL Admin
description: Error types for media.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaErrorCode'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaErrorCode.md'
---

# Media​Error​Code

enum

Error types for media.

## Valid values

* DUPLICATE\_​FILENAME\_​ERROR

  Media could not be created because a file with the same name already exists.

* EXTERNAL\_​VIDEO\_​EMBED\_​DISABLED

  Media could not be created because embed permissions are disabled for this video.

* EXTERNAL\_​VIDEO\_​EMBED\_​NOT\_​FOUND\_​OR\_​TRANSCODING

  Media could not be created because video is either not found or still transcoding.

* EXTERNAL\_​VIDEO\_​INVALID\_​ASPECT\_​RATIO

  Media could not be created because the external video has an invalid aspect ratio.

* EXTERNAL\_​VIDEO\_​NOT\_​FOUND

  Media could not be created because the external video could not be found.

* EXTERNAL\_​VIDEO\_​UNLISTED

  Media could not be created because the external video is not listed or is private.

* FILE\_​STORAGE\_​LIMIT\_​EXCEEDED

  Media could not be created because the cumulative file storage limit would be exceeded.

* GENERIC\_​FILE\_​DOWNLOAD\_​FAILURE

  File could not be processed because the source could not be downloaded.

* GENERIC\_​FILE\_​INVALID\_​SIZE

  File could not be created because the size is too large.

* IMAGE\_​DOWNLOAD\_​FAILURE

  Media could not be processed because the image could not be downloaded.

* IMAGE\_​PROCESSING\_​FAILURE

  Media could not be processed because the image could not be processed.

* INVALID\_​IMAGE\_​ASPECT\_​RATIO

  Media could not be created because the image has an invalid aspect ratio.

* INVALID\_​IMAGE\_​FILE\_​SIZE

  Media could not be created because the image size is too large.

* INVALID\_​IMAGE\_​RESOLUTION

  Media could not be created because the image's resolution exceeds the max limit.

* INVALID\_​SIGNED\_​URL

  Media could not be processed because the signed URL was invalid.

* MEDIA\_​TIMEOUT\_​ERROR

  Media timed out because it is currently being modified by another operation.

* MODEL3D\_​GLB\_​OUTPUT\_​CREATION\_​ERROR

  Media could not be created because the model file failed processing.

* MODEL3D\_​GLB\_​TO\_​USDZ\_​CONVERSION\_​ERROR

  Media could not be created because the model can't be converted to USDZ format.

* MODEL3D\_​PROCESSING\_​FAILURE

  Media could not be created because the model file failed processing.

* MODEL3D\_​THUMBNAIL\_​GENERATION\_​ERROR

  Media could not be created because the model's thumbnail generation failed.

* MODEL3D\_​THUMBNAIL\_​REGENERATION\_​ERROR

  There was an issue while trying to generate a new thumbnail.

* MODEL3D\_​VALIDATION\_​ERROR

  Model failed validation.

* UNKNOWN

  Media error has occured for unknown reason.

* UNSUPPORTED\_​IMAGE\_​FILE\_​TYPE

  Media could not be created because the image is an unsupported file type.

* VIDEO\_​INVALID\_​FILETYPE\_​ERROR

  Media could not be created because it has an invalid file type.

* VIDEO\_​MAX\_​DURATION\_​ERROR

  Media could not be created because it does not meet the maximum duration requirement.

* VIDEO\_​MAX\_​HEIGHT\_​ERROR

  Media could not be created because it does not meet the maximum height requirement.

* VIDEO\_​MAX\_​WIDTH\_​ERROR

  Media could not be created because it does not meet the maximum width requirement.

* VIDEO\_​METADATA\_​READ\_​ERROR

  Media could not be created because the metadata could not be read.

* VIDEO\_​MIN\_​DURATION\_​ERROR

  Media could not be created because it does not meet the minimum duration requirement.

* VIDEO\_​MIN\_​HEIGHT\_​ERROR

  Media could not be created because it does not meet the minimum height requirement.

* VIDEO\_​MIN\_​WIDTH\_​ERROR

  Media could not be created because it does not meet the minimum width requirement.

* VIDEO\_​VALIDATION\_​ERROR

  Video failed validation.

***

## Fields

* [Media​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaError#field-MediaError.fields.code)

  OBJECT

  Represents a media error. This typically occurs when there is an issue with the media itself causing it to fail validation. Check the media before attempting to upload again.

***

## Map

### Fields with this enum

* <-|[Media​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaError#field-MediaError.fields.code)
