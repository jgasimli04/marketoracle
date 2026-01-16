---
title: MarketUpdateInput - GraphQL Admin
description: The input fields used to update a market.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketUpdateInput.md
---

# Market​Update​Input

input\_object

The input fields used to update a market.

## Fields

* catalogs​To​Add

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Catalog IDs to include in the market.

* catalogs​To​Delete

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Catalog IDs to remove from the market.

* conditions

  [Market​Conditions​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketConditionsUpdateInput)

  The conditions to update.

* currency​Settings

  [Market​Currency​Settings​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCurrencySettingsUpdateInput)

  Currency settings for the market.

* handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique identifier for the market. For example `"ca"`.

* make​Duplicate​Unique​Markets​Draft

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether to update duplicate region or wildcard markets' status to draft.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the market. Not shown to customers.

* price​Inclusions

  [Market​Price​Inclusions​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketPriceInclusionsInput)

  The strategy used to determine how prices are displayed to the customer.

* remove​Currency​Settings

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Remove any currency settings that are defined for the market.

* remove​Price​Inclusions

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  The price inclusions to remove from the market.

* status

  [Market​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketStatus)

  The status of the market.

* web​Presences​To​Add

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The web presences to add to the market.

* web​Presences​To​Delete

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The web presences to remove from the market.

### Deprecated fields

* enabled

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Deprecated

* make​Duplicate​Region​Markets​Draft

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Deprecated

***

## Map

No referencing types
