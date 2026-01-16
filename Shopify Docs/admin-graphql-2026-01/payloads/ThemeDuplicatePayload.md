---
title: ThemeDuplicatePayload - GraphQL Admin
description: Return type for `themeDuplicate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ThemeDuplicatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ThemeDuplicatePayload.md
---

# Theme​Duplicate​Payload

payload

Return type for `themeDuplicate` mutation.

## Fields

* new​Theme

  [Online​Store​Theme](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

  The newly duplicated theme.

* user​Errors

  [\[Theme​Duplicate​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeDuplicateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [theme​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeDuplicate)

  mutation

  Duplicates a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the theme to be duplicated.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Name of the new theme.

  ***

***

## Map

### Mutations with this payload

* [theme​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/types/themeDuplicate)
