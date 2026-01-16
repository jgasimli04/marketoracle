---
title: ThemeFilesCopyPayload - GraphQL Admin
description: Return type for `themeFilesCopy` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ThemeFilesCopyPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ThemeFilesCopyPayload.md
---

# Theme​Files​Copy​Payload

payload

Return type for `themeFilesCopy` mutation.

## Fields

* copied​Theme​Files

  [\[Online​Store​Theme​File​Operation​Result!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileOperationResult)

  The resulting theme files.

* user​Errors

  [\[Online​Store​Theme​Files​User​Errors!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFilesUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

***

## Map

### Mutations with this payload

* [theme​Files​Copy](https://shopify.dev/docs/api/admin-graphql/latest/types/themeFilesCopy)
