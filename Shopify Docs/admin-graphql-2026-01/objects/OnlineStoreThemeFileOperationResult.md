---
title: OnlineStoreThemeFileOperationResult - GraphQL Admin
description: >-
  Represents the result of a copy, delete, or write operation performed on a
  theme file.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileOperationResult
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileOperationResult.md
---

# Online​Store​Theme​File​Operation​Result

object

Requires `read_themes` access scope.

Represents the result of a copy, delete, or write operation performed on a theme file.

## Fields

* checksum​Md5

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The md5 digest of the theme file for data integrity.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the theme file was created.

* filename

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Unique identifier of the theme file.

* size

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The size of the theme file in bytes.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the theme file was last updated.

***

## Map

No referencing types

***

## Mutations

* [theme​Files​Copy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesCopy)

  mutation

  Copy theme files. Copying to existing theme files will overwrite them.

  * theme​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The theme to update.

  * files

    [\[Theme​Files​Copy​File​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ThemeFilesCopyFileInput)

    required

    The files to update.

  ***

* [theme​Files​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesDelete)

  mutation

  Deletes a theme's files.

  * theme​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the theme to deleted.

  * files

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The files to delete.

  ***

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

## <\~> OnlineStoreThemeFileOperationResult Mutations

### Mutated by

* <\~>[theme​Files​Copy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesCopy)
* <\~>[theme​Files​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesDelete)
* <\~>[theme​Files​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert)
