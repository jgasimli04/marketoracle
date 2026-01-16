---
title: PriceListUpdateInput - GraphQL Admin
description: The input fields used to update a price list.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListUpdateInput.md
---

# Price​List​Update​Input

input\_object

The input fields used to update a price list.

## Fields

* catalog​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the catalog to associate with this price list.

* currency

  [Currency​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  The three-letter currency code for fixed prices associated with this price list.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The unique name of the price list, used as a human-readable identifier.

* parent

  [Price​List​Parent​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListParentUpdateInput)

  Relative adjustments to other prices.

***

## Map

No referencing types
