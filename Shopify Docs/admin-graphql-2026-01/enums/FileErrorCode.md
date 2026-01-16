---
title: FileErrorCode - GraphQL Admin
description: The error types for a file.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/FileErrorCode'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/FileErrorCode.md'
---

# File​Error​Code

enum

The error types for a file.

## Valid values

* DUPLICATE\_​FILENAME\_​ERROR

  File could not be created because a file with the same name already exists.

* EXTERNAL\_​VIDEO\_​EMBED\_​DISABLED

  File could not be created because embed permissions are disabled for this video.

* EXTERNAL\_​VIDEO\_​EMBED\_​NOT\_​FOUND\_​OR\_​TRANSCODING

  File could not be created because video is either not found or still transcoding.

* EXTERNAL\_​VIDEO\_​INVALID\_​ASPECT\_​RATIO

  File could not be created because the external video has an invalid aspect ratio.

* EXTERNAL\_​VIDEO\_​NOT\_​FOUND

  File could not be created because the external video could not be found.

* EXTERNAL\_​VIDEO\_​UNLISTED

  File could not be created because the external video is not listed or is private.

* FILE\_​STORAGE\_​LIMIT\_​EXCEEDED

  File could not be created because the cumulative file storage limit would be exceeded.

* GENERIC\_​FILE\_​DOWNLOAD\_​FAILURE

  File could not be processed because the source could not be downloaded.

* GENERIC\_​FILE\_​INVALID\_​SIZE

  File could not be created because the size is too large.

* IMAGE\_​DOWNLOAD\_​FAILURE

  File could not be processed because the image could not be downloaded.

* IMAGE\_​PROCESSING\_​FAILURE

  File could not be processed because the image could not be processed.

* INVALID\_​IMAGE\_​ASPECT\_​RATIO

  File could not be created because the image has an invalid aspect ratio.

* INVALID\_​IMAGE\_​FILE\_​SIZE

  File could not be created because the image size is too large.

* INVALID\_​IMAGE\_​RESOLUTION

  File could not be created because the image's resolution exceeds the max limit.

* INVALID\_​SIGNED\_​URL

  File could not be processed because the signed URL was invalid.

* MEDIA\_​TIMEOUT\_​ERROR

  File timed out because it is currently being modified by another operation.

* MODEL3D\_​GLB\_​OUTPUT\_​CREATION\_​ERROR

  File could not be created because the model file failed processing.

* MODEL3D\_​GLB\_​TO\_​USDZ\_​CONVERSION\_​ERROR

  File could not be created because the model can't be converted to USDZ format.

* MODEL3D\_​PROCESSING\_​FAILURE

  File could not be created because the model file failed processing.

* MODEL3D\_​THUMBNAIL\_​GENERATION\_​ERROR

  File could not be created because the model's thumbnail generation failed.

* MODEL3D\_​THUMBNAIL\_​REGENERATION\_​ERROR

  There was an issue while trying to generate a new thumbnail.

* MODEL3D\_​VALIDATION\_​ERROR

  Model failed validation.

* UNKNOWN

  File error has occurred for an unknown reason.

* UNSUPPORTED\_​IMAGE\_​FILE\_​TYPE

  File could not be created because the image is an unsupported file type.

* VIDEO\_​INVALID\_​FILETYPE\_​ERROR

  File could not be created because it has an invalid file type.

* VIDEO\_​MAX\_​DURATION\_​ERROR

  File could not be created because it does not meet the maximum duration requirement.

* VIDEO\_​MAX\_​HEIGHT\_​ERROR

  File could not be created because it does not meet the maximum height requirement.

* VIDEO\_​MAX\_​WIDTH\_​ERROR

  File could not be created because it does not meet the maximum width requirement.

* VIDEO\_​METADATA\_​READ\_​ERROR

  File could not be created because the metadata could not be read.

* VIDEO\_​MIN\_​DURATION\_​ERROR

  File could not be created because it does not meet the minimum duration requirement.

* VIDEO\_​MIN\_​HEIGHT\_​ERROR

  File could not be created because it does not meet the minimum height requirement.

* VIDEO\_​MIN\_​WIDTH\_​ERROR

  File could not be created because it does not meet the minimum width requirement.

* VIDEO\_​VALIDATION\_​ERROR

  Video failed validation.

***

## Fields

* [File​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/FileError#field-FileError.fields.code)

  OBJECT

  A file error. This typically occurs when there is an issue with the file itself causing it to fail validation. Check the file before attempting to upload again.

***

## Map

### Fields with this enum

* <-|[File​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/FileError#field-FileError.fields.code)
