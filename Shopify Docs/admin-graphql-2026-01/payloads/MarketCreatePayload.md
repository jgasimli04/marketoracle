---
title: MarketCreatePayload - GraphQL Admin
description: Return type for `marketCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketCreatePayload.md
---

# Market​Create​Payload

payload

Return type for `marketCreate` mutation.

## Fields

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  The market object.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [market​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketCreate)

  mutation

  Creates a [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) to deliver customized shopping experiences. Markets define various aspects of the buyer experience including pricing, product availability, custom content, inventory and fulfillment priorities, and payment methods.

  Define conditions to match buyers by region, company location, retail location, or other criteria. Configure [`MarketCurrencySettings`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettings) to control currency behavior. Set [`MarketPriceInclusions`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketPriceInclusions) to determine tax and duty display. Assign [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects and [`MarketWebPresence`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence) configurations to control product availability and SEO strategy.

  Learn more about [Shopify Markets](https://shopify.dev/docs/apps/build/markets).

  * input

    [Market​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCreateInput)

    required

    ### Arguments

    The properties of the new market.

  ***

***

## Map

### Mutations with this payload

* [market​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/marketCreate)
