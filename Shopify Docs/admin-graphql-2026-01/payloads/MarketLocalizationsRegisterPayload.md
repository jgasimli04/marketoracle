---
title: MarketLocalizationsRegisterPayload - GraphQL Admin
description: Return type for `marketLocalizationsRegister` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketLocalizationsRegisterPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketLocalizationsRegisterPayload.md
---

# Market​Localizations​Register​Payload

payload

Return type for `marketLocalizationsRegister` mutation.

## Fields

* market​Localizations

  [\[Market​Localization!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalization)

  The market localizations that were created or updated.

* user​Errors

  [\[Translation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [market​Localizations​Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketLocalizationsRegister)

  mutation

  Creates or updates market localizations.

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the resource that is being localized within the context of a market.

  * market​Localizations

    [\[Market​Localization​Register​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketLocalizationRegisterInput)

    required

    The input fields for a market localization.

  ***

***

## Map

### Mutations with this payload

* [market​Localizations​Register](https://shopify.dev/docs/api/admin-graphql/latest/types/marketLocalizationsRegister)
