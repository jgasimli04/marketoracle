---
title: TranslationUserError - GraphQL Admin
description: >-
  Represents an error that happens during the execution of a translation
  mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError.md
---

# Translation​User​Error

object

Requires `read_translations` access scope.

Represents an error that happens during the execution of a translation mutation.

## Fields

* code

  [Translation​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/TranslationErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

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

* [translations​Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister)

  mutation

  Creates or updates translations for a resource's [translatable content](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent).

  Each translation requires a digest value from the resource's translatable content. Use the [`translatableResource`](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResource) query to get a resource's translatable content and digest values before creating translations. You can optionally scope translations to specific markets using the `marketId` field in each translation input.

  Learn more about [managing translations](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the resource that is being translated.

  * translations

    [\[Translation​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/TranslationInput)

    required

    Specifies the input fields for a translation.

  ***

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

## <\~> TranslationUserError Mutations

### Mutated by

* <\~>[market​Localizations​Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketLocalizationsRegister)
* <\~>[market​Localizations​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketLocalizationsRemove)
* <\~>[translations​Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister)
* <\~>[translations​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRemove)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-TranslationUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
