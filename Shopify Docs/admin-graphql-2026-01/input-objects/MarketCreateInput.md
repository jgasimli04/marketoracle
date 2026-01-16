---
title: MarketCreateInput - GraphQL Admin
description: The input fields required to create a market.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCreateInput.md
---

# Market​Create​Input

input\_object

The input fields required to create a market.

## Fields

* catalogs

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Catalog IDs to include in the market.

* conditions

  [Market​Conditions​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketConditionsInput)

  The conditions that apply to the market.

* currency​Settings

  [Market​Currency​Settings​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCurrencySettingsUpdateInput)

  Currency settings for the market.

* handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique identifier for the market. For example `"ca"`. If the handle isn't provided, then the handle is auto-generated based on the country or name.

* make​Duplicate​Unique​Markets​Draft

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether to update duplicate region or wildcard markets' status to draft.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the market. Not shown to customers.

* price​Inclusions

  [Market​Price​Inclusions​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketPriceInclusionsInput)

  The strategy used to determine how prices are displayed to the customer.

* status

  [Market​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketStatus)

  The status of the market.

* web​Presences

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Web presence IDs to include in the market.

### Deprecated fields

* enabled

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Deprecated

* make​Duplicate​Region​Markets​Draft

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Deprecated

* regions

  [\[Market​Region​Create​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketRegionCreateInput)

  Deprecated

***

## Map

No referencing types
