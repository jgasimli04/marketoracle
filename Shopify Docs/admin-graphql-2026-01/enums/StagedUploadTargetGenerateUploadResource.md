---
title: StagedUploadTargetGenerateUploadResource - GraphQL Admin
description: The resource type to receive.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource.md
---

# Staged​Upload​Target​Generate​Upload​Resource

enum

The resource type to receive.

## Valid values

* BULK\_​MUTATION\_​VARIABLES

  Represents bulk mutation variables.

  For example, bulk mutation variables can be used for bulk operations using the [bulkOperationRunMutation mutation](https://shopify.dev/api/admin-graphql/latest/mutations/bulkOperationRunMutation).

* COLLECTION\_​IMAGE

  An image associated with a collection.

  For example, after uploading an image, you can use the [collectionUpdate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/collectionUpdate) to add the image to a collection.

* DISPUTE\_​FILE\_​UPLOAD

  Represents a file associated with a dispute.

  For example, after uploading the file, you can add the file to a dispute using the [disputeEvidenceUpdate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/disputeEvidenceUpdate).

* FILE

  Represents any file other than HTML.

  For example, after uploading the file, you can add the file to the [Files page](https://shopify.com/admin/settings/files) in Shopify admin using the [fileCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/fileCreate).

* IMAGE

  An image.

  For example, after uploading an image, you can add the image to a product using the [productCreateMedia mutation](https://shopify.dev/api/admin-graphql/latest/mutations/productCreateMedia) or to the [Files page](https://shopify.com/admin/settings/files) in Shopify admin using the [fileCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/fileCreate).

* MODEL\_​3D

  A Shopify hosted 3d model.

  For example, after uploading the 3d model, you can add the 3d model to a product using the [productCreateMedia mutation](https://shopify.dev/api/admin-graphql/latest/mutations/productCreateMedia).

* RETURN\_​LABEL

  Represents a label associated with a return.

  For example, once uploaded, this resource can be used to [create a ReverseDelivery](https://shopify.dev/api/admin-graphql/unstable/mutations/reverseDeliveryCreateWithShipping).

* SHOP\_​IMAGE

  An image.

  For example, after uploading the image, you can add the image to the [Files page](https://shopify.com/admin/settings/files) in Shopify admin using the [fileCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/fileCreate).

* URL\_​REDIRECT\_​IMPORT

  Represents a redirect CSV file.

  Example usage: This resource can be used for creating a [UrlRedirectImport](https://shopify.dev/api/admin-graphql/2022-04/objects/UrlRedirectImport) object for use in the [urlRedirectImportCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/urlRedirectImportCreate).

* VIDEO

  A Shopify-hosted video.

  For example, after uploading the video, you can add the video to a product using the [productCreateMedia mutation](https://shopify.dev/api/admin-graphql/latest/mutations/productCreateMedia) or to the [Files page](https://shopify.com/admin/settings/files) in Shopify admin using the [fileCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/fileCreate).

* PRODUCT\_​IMAGE

  Deprecated

***

## Fields

* [Stage​Image​Input.resource](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StageImageInput#fields-resource)

  INPUT OBJECT

  An image to be uploaded.

  Deprecated in favor of [StagedUploadInput](https://shopify.dev/api/admin-graphql/latest/objects/StagedUploadInput), which is used by the [stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).

* [Staged​Upload​Input.resource](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadInput#fields-resource)

  INPUT OBJECT

  The input fields for generating staged upload targets.

* [Staged​Upload​Target​Generate​Input.resource](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadTargetGenerateInput#fields-resource)

  INPUT OBJECT

  The required fields and parameters to generate the URL upload an" asset to Shopify.

  Deprecated in favor of [StagedUploadInput](https://shopify.dev/api/admin-graphql/latest/objects/StagedUploadInput), which is used by the [stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).

***

## Map

### Inputs with this enum

* [Stage​Image​Input.resource](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StageImageInput#fields-resource)
* [Staged​Upload​Input.resource](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadInput#fields-resource)
* [Staged​Upload​Target​Generate​Input.resource](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadTargetGenerateInput#fields-resource)
