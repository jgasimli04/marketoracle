---
title: FileUpdateInput - GraphQL Admin
description: The input fields that are required to update a file object.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileUpdateInput.md
---

# File​Update​Input

input\_object

The input fields that are required to update a file object.

## Fields

* alt

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The alt text description of the file for screen readers and accessibility.

* filename

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the file including its extension.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the file to be updated.

* original​Source

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The source from which to update a media image or generic file. An external URL (for images only) or a [staged upload URL](https://shopify.dev/api/admin-graphql/latest/mutations/stageduploadscreate).

* preview​Image​Source

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The source from which to update the media preview image. May be an external URL or a [staged upload URL](https://shopify.dev/api/admin-graphql/latest/mutations/stageduploadscreate).

* references​To​Add

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The IDs of the references to add to the file. Currently only accepts product IDs.

* references​To​Remove

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The IDs of the references to remove from the file. Currently only accepts product IDs.

***

## Map

No referencing types
