---
title: StagedUploadTargetGenerateInput - GraphQL Admin
description: >-
  The required fields and parameters to generate the URL upload an"

  asset to Shopify.


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
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadTargetGenerateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadTargetGenerateInput.md
---

# Staged​Upload​Target​Generate​Input

input\_object

The required fields and parameters to generate the URL upload an" asset to Shopify.

Deprecated in favor of [StagedUploadInput](https://shopify.dev/api/admin-graphql/latest/objects/StagedUploadInput), which is used by the [stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).

## Fields

* filename

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The filename of the asset being uploaded.

* file​Size

  [Unsigned​Int64](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  The size of the file to upload, in bytes.

* http​Method

  [Staged​Upload​Http​Method​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadHttpMethodType)

  Default:PUT

  The HTTP method to be used by the staged upload.

* mime​Type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The MIME type of the asset being uploaded.

* resource

  [Staged​Upload​Target​Generate​Upload​Resource!](https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource)

  non-null

  The resource type being uploaded.

***

## Map

No referencing types
