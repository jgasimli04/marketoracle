---
title: ThemeUpdatePayload - GraphQL Admin
description: Return type for `themeUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ThemeUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ThemeUpdatePayload.md
---

# Theme​Update​Payload

payload

Return type for `themeUpdate` mutation.

## Fields

* theme

  [Online​Store​Theme](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

  The theme that was updated.

* user​Errors

  [\[Theme​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [theme​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeUpdate)

  mutation

  Updates a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the theme to be updated.

  * input

    [Online​Store​Theme​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OnlineStoreThemeInput)

    required

    The attributes of the theme to be updated.

  ***

***

## Map

### Mutations with this payload

* [theme​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/themeUpdate)
