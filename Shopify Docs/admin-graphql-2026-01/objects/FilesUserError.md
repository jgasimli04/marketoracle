---
title: FilesUserError - GraphQL Admin
description: An error that happens during the execution of a Files API query or mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/FilesUserError'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/FilesUserError.md'
---

# Files​User​Error

object

Requires `read_files` access scope, `read_themes` access scope or `read_images` access scope.

An error that happens during the execution of a Files API query or mutation.

## Fields

* code

  [Files​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FilesErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

* [file​Acknowledge​Update​Failed](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileAcknowledgeUpdateFailed)

  mutation

  Acknowledges file update failure by resetting FAILED status to READY and clearing any media errors.

  * file​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the file(s) to acknowledge the failed updates of.

  ***

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

* [file​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileDelete)

  mutation

  Deletes file assets that were previously uploaded to your store.

  Use the `fileDelete` mutation to permanently remove media and file assets from your store when they are no longer needed. This mutation handles the complete removal of files from both your store's file library and any associated references to products or other resources.

  The `fileDelete` mutation supports removal of multiple file types:

  * **Images**: Product photos, variant images, and general store imagery
  * **Videos**: Shopify-hosted videos for product demonstrations and marketing content
  * **External Videos**: YouTube and Vimeo videos linked to your products
  * **3D models**: Interactive 3D representations of products
  * **Generic files**: PDFs, documents, and other file types stored in your [**Files** page](https://shopify.com/admin/settings/files)

  When you delete files that are referenced by products, the mutation automatically removes those references and reorders any remaining media to maintain proper positioning. Product file references are database relationships managed through a media reference system, not just links in product descriptions. The Shopify admin provides a UI to manage these relationships, and when files are deleted, the system automatically cleans up all references. Files that are currently being processed by other operations are rejected to prevent conflicts.

  ***

  Caution

  File deletion is permanent and can't be undone. When you delete a file that's being used in your store, it will immediately stop appearing wherever it was displayed. For example, if you delete a product image, that product will show a broken image or placeholder on your storefront and in the admin. The same applies to any other files linked from themes, blog posts, or pages. Before deleting files, you can use the [`files` query](https://shopify.dev/api/admin-graphql/latest/queries/files) to list and review your store's file assets.

  ***

  Learn how to manage [product media and file assets](https://shopify.dev/docs/apps/build/online-store/product-media) in your app.

  * file​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The IDs of the files to be deleted.

  ***

* [file​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileUpdate)

  mutation

  Updates properties, content, and metadata associated with an existing file asset that has already been uploaded to Shopify.

  Use the `fileUpdate` mutation to modify various aspects of files already stored in your store. Files can be updated individually or in batches.

  The `fileUpdate` mutation supports updating multiple file properties:

  * **Alt text**: Update accessibility descriptions for images and other media.
  * **File content**: Replace image or generic file content while maintaining the same URL.
  * **Filename**: Modify file names (extension must match the original).
  * **Product references**: Add or remove associations between files and products. Removing file-product associations deletes the file from the product's media gallery and clears the image from any product variants that were using it.

  The mutation handles different file types with specific capabilities:

  * **Images**: Update preview images, original source, filename, and alt text.
  * **Generic files**: Update original source, filename, and alt text.
  * **Videos and 3D models**: Update alt text and product references.

  ***

  Note

  Files must be in `ready` state before they can be updated. The mutation includes file locking to prevent conflicts during updates. You can't simultaneously update both `originalSource` and `previewImageSource`.

  ***

  After updating files, you can use related mutations for additional file management:

  * [`fileCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate): Create new file assets from external URLs or staged uploads.
  * [`fileDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileDelete): Remove files from your store when they are no longer needed.

  Learn how to manage [product media and file assets](https://shopify.dev/docs/apps/build/online-store/product-media) in your app.

  * files

    [\[File​Update​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileUpdateInput)

    required

    ### Arguments

    List of files to be updated.

  ***

***

## <\~> FilesUserError Mutations

### Mutated by

* <\~>[file​Acknowledge​Update​Failed](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileAcknowledgeUpdateFailed)
* <\~>[file​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate)
* <\~>[file​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileDelete)
* <\~>[file​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-FilesUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
