---
title: StagedUploadsCreatePayload - GraphQL Admin
description: Return type for `stagedUploadsCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/StagedUploadsCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/StagedUploadsCreatePayload.md
---

# Staged​Uploads​Create​Payload

payload

Return type for `stagedUploadsCreate` mutation.

## Fields

* staged​Targets

  [\[Staged​Media​Upload​Target!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget)

  The staged upload targets that were generated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [staged​Uploads​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadsCreate)

  mutation

  Creates staged upload targets for file uploads such as images, videos, and 3D models.

  Use the `stagedUploadsCreate` mutation instead of direct file creation mutations when:

  * **Uploading large files**: Files over a few MB benefit from staged uploads for better reliability
  * **Uploading media files**: Videos, 3D models, and high-resolution images
  * **Bulk importing**: CSV files, product catalogs, or other bulk data
  * **Using external file sources**: When files are stored remotely and need to be transferred to Shopify

  The `stagedUploadsCreate` mutation is the first step in Shopify's secure two-step upload process:

  **Step 1: Create staged upload targets** (this mutation)

  * Generate secure, temporary upload URLs for your files.
  * Receive authentication parameters for the upload.

  **Step 2: Upload files and create assets**

  * Upload your files directly to the provided URLs using the authentication parameters.
  * Use the returned `resourceUrl` as the `originalSource` in subsequent mutations like `fileCreate`.

  This approach provides better performance for large files, handles network interruptions gracefully, and ensures secure file transfers to Shopify's storage infrastructure.

  ***

  Note

  File size is required when uploading [`VIDEO`](https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource#enums-VIDEO) or [`MODEL_3D`](https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource#enums-MODEL_3D) resources.

  ***

  After creating staged upload targets, complete the process by:

  1. **Uploading files**: Send your files to the returned [`url`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.url) using the provided [`parameters`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.parameters) for authentication
  2. **Creating file assets**: Use the [`resourceUrl`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.resourceUrl) as the `originalSource` in mutations such as:

  * [`fileCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate): Creates file assets from staged uploads
  * [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Updates products with new media from staged uploads

  Learn more about [uploading media to Shopify](https://shopify.dev/apps/online-store/media/products).

  * input

    [\[Staged​Upload​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadInput)

    required

    ### Arguments

    The information required to generate staged upload targets.

  ***

***

## Map

### Mutations with this payload

* [staged​Uploads​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/stagedUploadsCreate)
