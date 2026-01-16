---
title: TranslationsRemovePayload - GraphQL Admin
description: Return type for `translationsRemove` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/TranslationsRemovePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/TranslationsRemovePayload.md
---

# Translations​Remove​Payload

payload

Return type for `translationsRemove` mutation.

## Fields

* translations

  [\[Translation!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

  The translations that were deleted.

* user​Errors

  [\[Translation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [translations​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRemove)

  mutation

  Deletes translations.

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the translatable resource for which translations are being deleted.

  * translation​Keys

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The list of translation keys.

  * locales

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The list of translation locales. Only locales returned in `shopLocales` are valid.

  * market​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The list of market IDs.

  ***

***

## Map

### Mutations with this payload

* [translations​Remove](https://shopify.dev/docs/api/admin-graphql/latest/types/translationsRemove)
