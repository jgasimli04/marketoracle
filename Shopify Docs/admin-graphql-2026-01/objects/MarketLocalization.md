---
title: MarketLocalization - GraphQL Admin
description: >-
  The market localization of a field within a resource, which is determined by
  the market ID.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalization'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalization.md
---

# Market​Localization

object

The market localization of a field within a resource, which is determined by the market ID.

## Fields

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A reference to the value being localized on the resource that this market localization belongs to.

* market

  [Market!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  non-null

  The market that the localization is specific to.

* outdated

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the original content has changed since this market localization was updated.

* updated​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the market localization was updated.

* value

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The value of the market localization.

***

## Map

### Fields with this object

* {}[MarketLocalizableResource.marketLocalizations](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResource#field-MarketLocalizableResource.fields.marketLocalizations)

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

***

## <\~> MarketLocalization Mutations

### Mutated by

* <\~>[market​Localizations​Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketLocalizationsRegister)
* <\~>[market​Localizations​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketLocalizationsRemove)
