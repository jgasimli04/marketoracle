---
title: ShopLocaleUpdatePayload - GraphQL Admin
description: Return type for `shopLocaleUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShopLocaleUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShopLocaleUpdatePayload.md
---

# Shop​Locale​Update​Payload

payload

Return type for `shopLocaleUpdate` mutation.

## Fields

* shop​Locale

  [Shop​Locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale)

  The locale that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [shop​Locale​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleUpdate)

  mutation

  Updates a locale for a shop.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    ISO code of the locale to update.

  * shop​Locale

    [Shop​Locale​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopLocaleInput)

    required

    Specifies the input fields for a shop locale.

  ***

***

## Map

### Mutations with this payload

* [shop​Locale​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/shopLocaleUpdate)
