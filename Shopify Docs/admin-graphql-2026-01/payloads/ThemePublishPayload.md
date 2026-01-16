---
title: ThemePublishPayload - GraphQL Admin
description: Return type for `themePublish` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ThemePublishPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ThemePublishPayload.md
---

# Theme​Publish​Payload

payload

Return type for `themePublish` mutation.

## Fields

* theme

  [Online​Store​Theme](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

  The theme that was published.

* user​Errors

  [\[Theme​Publish​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemePublishUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [theme​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themePublish)

  mutation

  Publishes a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the theme to be published.

  ***

***

## Map

### Mutations with this payload

* [theme​Publish](https://shopify.dev/docs/api/admin-graphql/latest/types/themePublish)
