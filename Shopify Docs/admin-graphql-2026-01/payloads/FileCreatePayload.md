---
title: FileCreatePayload - GraphQL Admin
description: Return type for `fileCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/payloads/FileCreatePayload'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FileCreatePayload.md
---

# File​Create​Payload

payload

Return type for `fileCreate` mutation.

## Fields

* files

  [\[File!\]](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)

  The newly created files.

* user​Errors

  [\[Files​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FilesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [file​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate)

  mutation

  Creates file assets for a store from external URLs or files that were previously uploaded using the [`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate) mutation.

  Use the `fileCreate` mutation to add various types of media and documents to your store. These files are added to the [**Files** page](https://shopify.com/admin/settings/files) in the Shopify admin and can be referenced by other resources in your store.

  The `fileCreate` mutation supports multiple file types:

  * **Images**: Product photos, variant images, and general store imagery
  * **Videos**: Shopify-hosted videos for product demonstrations and marketing
  * **External videos**: YouTube and Vimeo videos for enhanced product experiences
  * **3D models**: Interactive 3D representations of products
  * **Generic files**: PDFs, documents, and other file types for store resources

  The mutation handles duplicate filenames using configurable resolution modes that automatically append UUIDs, replace existing files, or raise errors when conflicts occur.

  ***

  Note

  Files are processed asynchronously. Check the [`fileStatus`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File#fields-fileStatus) field to monitor processing completion. The maximum number of files that can be created in a single batch is 250.

  ***

  After creating files, you can make subsequent updates using the following mutations:

  * [`fileUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileUpdate): Update file properties such as alt text or replace file contents while preserving the same URL.
  * [`fileDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileDelete): Remove files from your store when they are no longer needed.

  To list all files in your store, use the [`files`](https://shopify.dev/docs/api/admin-graphql/latest/queries/files) query.

  Learn how to manage [product media and file assets](https://shopify.dev/docs/apps/build/online-store/product-media) in your app.

  * files

    [\[File​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileCreateInput)

    required

    ### Arguments

    List of new files to be created.

  ***

***

## Map

### Mutations with this payload

* [file​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/fileCreate)
