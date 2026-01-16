---
title: MarketCurrencySettingsUpdatePayload - GraphQL Admin
description: Return type for `marketCurrencySettingsUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketCurrencySettingsUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketCurrencySettingsUpdatePayload.md
---

# Market​Currency​Settings​Update​Payload

payload

Return type for `marketCurrencySettingsUpdate` mutation.

## Fields

* user​Errors

  [\[Market​Currency​Settings​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettingsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  Deprecated

***

## Mutations with this payload

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

## Map
