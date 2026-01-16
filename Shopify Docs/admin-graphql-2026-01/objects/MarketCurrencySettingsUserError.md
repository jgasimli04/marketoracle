---
title: MarketCurrencySettingsUserError - GraphQL Admin
description: Error codes for failed market multi-currency operations.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettingsUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettingsUserError.md
---

# Market​Currency​Settings​User​Error

object

Error codes for failed market multi-currency operations.

## Fields

* code

  [Market​Currency​Settings​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketCurrencySettingsUserErrorCode)

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

* [market​Currency​Settings​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketCurrencySettingsUpdate)

  mutation

  Deprecated

  * market​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market definition to target.

  * input

    [Market​Currency​Settings​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCurrencySettingsUpdateInput)

    required

    Properties to update for the market currency settings.

  ***

***

## <\~> MarketCurrencySettingsUserError Mutations

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-MarketCurrencySettingsUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
