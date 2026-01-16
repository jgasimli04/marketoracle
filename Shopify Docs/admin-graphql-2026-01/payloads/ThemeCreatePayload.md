---
title: ThemeCreatePayload - GraphQL Admin
description: Return type for `themeCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ThemeCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ThemeCreatePayload.md
---

# Theme​Create​Payload

payload

Return type for `themeCreate` mutation.

## Fields

* theme

  [Online​Store​Theme](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

  The theme that was created.

* user​Errors

  [\[Theme​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [theme​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate)

  mutation

  Creates a theme from an external URL or staged upload. The theme source can either be a ZIP file hosted at a public URL or files previously uploaded using the [`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate) mutation. The theme displays in the [Themes page](https://admin.shopify.com/themes) in the Shopify admin.

  New themes have an [`UNPUBLISHED`](https://shopify.dev//docs/api/admin-graphql/latest/mutations/themeCreate#arguments-role.enums.UNPUBLISHED) role by default. You can optionally specify a [`DEVELOPMENT`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate#arguments-role.enums.DEVELOPMENT) role for temporary themes used during development.

  * source

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    ### Arguments

    An external URL or a [staged upload URL](https://shopify.dev/api/admin-graphql/latest/mutations/stageduploadscreate) of the theme to import.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the theme to be created.

  * role

    [Theme​Role](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeRole)

    Default:UNPUBLISHED

    The role of the theme to be created. Only UNPUBLISHED and DEVELOPMENT roles are permitted.

  ***

***

## Map

### Mutations with this payload

* [theme​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/themeCreate)
