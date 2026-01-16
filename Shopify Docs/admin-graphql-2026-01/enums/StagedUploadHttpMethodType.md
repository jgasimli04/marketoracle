---
title: StagedUploadHttpMethodType - GraphQL Admin
description: >-
  The possible HTTP methods that can be used when sending a request to upload a
  file using information from a

  [StagedMediaUploadTarget](https://shopify.dev/api/admin-graphql/latest/objects/StagedMediaUploadTarget).
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadHttpMethodType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadHttpMethodType.md
---

# Staged​Upload​Http​Method​Type

enum

The possible HTTP methods that can be used when sending a request to upload a file using information from a [StagedMediaUploadTarget](https://shopify.dev/api/admin-graphql/latest/objects/StagedMediaUploadTarget).

## Valid values

* POST

  The POST HTTP method.

* PUT

  The PUT HTTP method.

***

## Fields

* [Stage​Image​Input.httpMethod](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StageImageInput#fields-httpMethod)

  INPUT OBJECT

  An image to be uploaded.

  Deprecated in favor of [StagedUploadInput](https://shopify.dev/api/admin-graphql/latest/objects/StagedUploadInput), which is used by the [stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).

* [Staged​Upload​Input.httpMethod](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadInput#fields-httpMethod)

  INPUT OBJECT

  The input fields for generating staged upload targets.

* [Staged​Upload​Target​Generate​Input.httpMethod](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadTargetGenerateInput#fields-httpMethod)

  INPUT OBJECT

  The required fields and parameters to generate the URL upload an" asset to Shopify.

  Deprecated in favor of [StagedUploadInput](https://shopify.dev/api/admin-graphql/latest/objects/StagedUploadInput), which is used by the [stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).

***

## Map

### Inputs with this enum

* [Stage​Image​Input.httpMethod](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StageImageInput#fields-httpMethod)
* [Staged​Upload​Input.httpMethod](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadInput#fields-httpMethod)
* [Staged​Upload​Target​Generate​Input.httpMethod](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadTargetGenerateInput#fields-httpMethod)
