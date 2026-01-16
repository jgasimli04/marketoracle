---
title: PrivacyFeaturesDisableUserError - GraphQL Admin
description: An error that occurs during the execution of `PrivacyFeaturesDisable`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PrivacyFeaturesDisableUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PrivacyFeaturesDisableUserError.md
---

# Privacy​Features​Disable​User​Error

object

An error that occurs during the execution of `PrivacyFeaturesDisable`.

## Fields

* code

  [Privacy​Features​Disable​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyFeaturesDisableUserErrorCode)

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

* [privacy​Features​Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyFeaturesDisable)

  mutation

  Disable a shop's privacy features.

  * features​To​Disable

    [\[Privacy​Features​Enum!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyFeaturesEnum)

    required

    ### Arguments

    The list of privacy features to disable.

  ***

***

## <\~> PrivacyFeaturesDisableUserError Mutations

### Mutated by

* <\~>[privacy​Features​Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyFeaturesDisable)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-PrivacyFeaturesDisableUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
