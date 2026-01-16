---
title: TaxAppConfigureUserError - GraphQL Admin
description: An error that occurs during the execution of `TaxAppConfigure`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxAppConfigureUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxAppConfigureUserError.md
---

# Tax​App​Configure​User​Error

object

An error that occurs during the execution of `TaxAppConfigure`.

## Fields

* code

  [Tax​App​Configure​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxAppConfigureUserErrorCode)

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

* [tax​App​Configure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxAppConfigure)

  mutation

  Allows tax app configurations for tax partners.

  * ready

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    ### Arguments

    Configures whether the tax app is correctly configured and ready to be used.

  ***

***

## <\~> TaxAppConfigureUserError Mutations

### Mutated by

* <\~>[tax​App​Configure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxAppConfigure)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-TaxAppConfigureUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
