---
title: ThemeDeletePayload - GraphQL Admin
description: Return type for `themeDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ThemeDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ThemeDeletePayload.md
---

# Theme​Delete​Payload

payload

Return type for `themeDelete` mutation.

## Fields

* deleted​Theme​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted theme.

* user​Errors

  [\[Theme​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [theme​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeDelete)

  mutation

  Deletes a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the theme to be deleted.

  ***

***

## Map

### Mutations with this payload

* [theme​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/themeDelete)
