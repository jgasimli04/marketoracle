---
title: StageImageInput - GraphQL Admin
description: >-
  An image to be uploaded.


  Deprecated in favor of

  [StagedUploadInput](https://shopify.dev/api/admin-graphql/latest/objects/StagedUploadInput),

  which is used by the

  [stagedUploadsCreate
  mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StageImageInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StageImageInput.md
---

# Stage​Image​Input

input\_object

An image to be uploaded.

Deprecated in favor of [StagedUploadInput](https://shopify.dev/api/admin-graphql/latest/objects/StagedUploadInput), which is used by the [stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).

## Fields

* filename

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The image filename.

* http​Method

  [Staged​Upload​Http​Method​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadHttpMethodType)

  Default:PUT

  HTTP method to be used by the staged upload.

* mime​Type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The image MIME type.

* resource

  [Staged​Upload​Target​Generate​Upload​Resource!](https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource)

  non-null

  The image resource.

***

## Map

No referencing types
