---
title: MarketLocalizationsRemovePayload - GraphQL Admin
description: Return type for `marketLocalizationsRemove` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketLocalizationsRemovePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketLocalizationsRemovePayload.md
---

# Market​Localizations​Remove​Payload

payload

Return type for `marketLocalizationsRemove` mutation.

## Fields

* market​Localizations

  [\[Market​Localization!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalization)

  The market localizations that were deleted.

* user​Errors

  [\[Translation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [market​Localizations​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketLocalizationsRemove)

  mutation

  Deletes market localizations.

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the resource for which market localizations are being deleted.

  * market​Localization​Keys

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The list of market localization keys.

  * market​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The list of market IDs.

  ***

***

## Map

### Mutations with this payload

* [market​Localizations​Remove](https://shopify.dev/docs/api/admin-graphql/latest/types/marketLocalizationsRemove)
