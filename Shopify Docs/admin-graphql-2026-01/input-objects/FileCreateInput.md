---
title: FileCreateInput - GraphQL Admin
description: The input fields that are required to create a file object.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileCreateInput.md
---

# File​Create​Input

input\_object

The input fields that are required to create a file object.

## Fields

* alt

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The alt text description of the file for screen readers and accessibility.

* content​Type

  [File​Content​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileContentType)

  The file content type. If omitted, then Shopify will attempt to determine the content type during file processing.

* duplicate​Resolution​Mode

  [File​Create​Input​Duplicate​Resolution​Mode](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileCreateInputDuplicateResolutionMode)

  Default:APPEND\_UUID

  How to handle if filename is already in use.

* filename

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the file. If provided, then the file is created with the specified filename. If not provided, then the filename from the `originalSource` is used.

* original​Source

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  An external URL (for images only) or a [staged upload URL](https://shopify.dev/api/admin-graphql/latest/mutations/stageduploadscreate).

***

## Map

No referencing types
