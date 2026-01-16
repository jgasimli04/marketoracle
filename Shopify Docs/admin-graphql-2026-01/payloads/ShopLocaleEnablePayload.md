---
title: ShopLocaleEnablePayload - GraphQL Admin
description: Return type for `shopLocaleEnable` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShopLocaleEnablePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShopLocaleEnablePayload.md
---

# Shop​Locale​Enable​Payload

payload

Return type for `shopLocaleEnable` mutation.

## Fields

* shop​Locale

  [Shop​Locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale)

  ISO code of the locale that was enabled.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [shop​Locale​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleEnable)

  mutation

  Adds a locale for a shop. The newly added locale is in the unpublished state.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    ISO code of the locale to enable.

  * market​Web​Presence​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The list of markets web presences to add the locale to.

  ***

***

## Map

### Mutations with this payload

* [shop​Locale​Enable](https://shopify.dev/docs/api/admin-graphql/latest/types/shopLocaleEnable)
