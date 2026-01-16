---
title: ShopLocaleDisablePayload - GraphQL Admin
description: Return type for `shopLocaleDisable` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShopLocaleDisablePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShopLocaleDisablePayload.md
---

# Shop​Locale​Disable​Payload

payload

Return type for `shopLocaleDisable` mutation.

## Fields

* locale

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  ISO code of the locale that was deleted.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [shop​Locale​Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleDisable)

  mutation

  Deletes a locale for a shop. This also deletes all translations of this locale.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    ISO code of the locale to delete.

  ***

***

## Map

### Mutations with this payload

* [shop​Locale​Disable](https://shopify.dev/docs/api/admin-graphql/latest/types/shopLocaleDisable)
