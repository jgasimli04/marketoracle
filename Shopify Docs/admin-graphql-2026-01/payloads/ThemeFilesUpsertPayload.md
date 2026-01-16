---
title: ThemeFilesUpsertPayload - GraphQL Admin
description: Return type for `themeFilesUpsert` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ThemeFilesUpsertPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ThemeFilesUpsertPayload.md
---

# Theme​Files​Upsert​Payload

payload

Return type for `themeFilesUpsert` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The theme files write job triggered by the mutation.

* upserted​Theme​Files

  [\[Online​Store​Theme​File​Operation​Result!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileOperationResult)

  The resulting theme files.

* user​Errors

  [\[Online​Store​Theme​Files​User​Errors!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFilesUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [theme​Files​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert)

  mutation

  Creates or updates theme files in an online store theme. This mutation allows batch operations on multiple theme files, either creating new files or overwriting existing ones with the same filename.

  ***

  Note

  You can process a maximum of 50 files in a single request.

  ***

  Each file requires a filename and body content. The body must specify a [`type`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#arguments-files.fields.body.type) with the corresponding [`value`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#arguments-files.fields.body.value). The mutation returns a [`job`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#returns-job) field for tracking asynchronous operations and an [`upsertedThemeFiles`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#returns-upsertedThemeFiles) field with details about the processed files.

  * theme​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The theme to update.

  * files

    [\[Online​Store​Theme​Files​Upsert​File​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OnlineStoreThemeFilesUpsertFileInput)

    required

    The files to update.

  ***

***

## Map

### Mutations with this payload

* [theme​Files​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/types/themeFilesUpsert)
