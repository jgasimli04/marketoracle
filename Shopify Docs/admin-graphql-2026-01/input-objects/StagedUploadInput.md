---
title: StagedUploadInput - GraphQL Admin
description: The input fields for generating staged upload targets.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadInput.md
---

# Staged​Upload​Input

input\_object

The input fields for generating staged upload targets.

## Fields

* filename

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The file's name and extension.

* file​Size

  [Unsigned​Int64](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  The size of the file to upload, in bytes. This is required when the request's resource property is set to [VIDEO](https://shopify.dev/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource#value-video) or [MODEL\_3D](https://shopify.dev/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource#value-model3d).

* http​Method

  [Staged​Upload​Http​Method​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadHttpMethodType)

  Default:PUT

  The HTTP method to be used when sending a request to upload the file using the returned staged upload target.

* mime​Type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The file's MIME type.

* resource

  [Staged​Upload​Target​Generate​Upload​Resource!](https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource)

  non-null

  The file's intended Shopify resource type.

***

## Map

No referencing types
