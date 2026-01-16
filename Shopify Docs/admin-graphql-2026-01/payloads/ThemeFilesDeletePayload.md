---
title: ThemeFilesDeletePayload - GraphQL Admin
description: Return type for `themeFilesDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ThemeFilesDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ThemeFilesDeletePayload.md
---

# Theme​Files​Delete​Payload

payload

Return type for `themeFilesDelete` mutation.

## Fields

* deleted​Theme​Files

  [\[Online​Store​Theme​File​Operation​Result!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileOperationResult)

  The resulting theme files.

* user​Errors

  [\[Online​Store​Theme​Files​User​Errors!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFilesUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

***

## Map

### Mutations with this payload

* [theme​Files​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/themeFilesDelete)
