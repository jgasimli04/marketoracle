---
title: OnlineStoreThemeFilesUserErrors - GraphQL Admin
description: User errors for theme file operations.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFilesUserErrors
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFilesUserErrors.md
---

# Online​Store​Theme​Files​User​Errors

object

Requires The user needs write\_themes and an exemption from Shopify to modify theme files.

User errors for theme file operations.

## Fields

* code

  [Online​Store​Theme​Files​User​Errors​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OnlineStoreThemeFilesUserErrorsCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* filename

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The filename of the theme file.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

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

## <\~> OnlineStoreThemeFilesUserErrors Mutations

### Mutated by

* <\~>[theme​Files​Copy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesCopy)
* <\~>[theme​Files​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesDelete)
* <\~>[theme​Files​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-OnlineStoreThemeFilesUserErrors Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
