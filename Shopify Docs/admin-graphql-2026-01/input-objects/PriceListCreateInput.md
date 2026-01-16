---
title: PriceListCreateInput - GraphQL Admin
description: The input fields to create a price list.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListCreateInput.md
---

# Price​List​Create​Input

input\_object

The input fields to create a price list.

## Fields

* catalog​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the catalog to associate with this price list.If the catalog was already associated with another price list then it will be unlinked.

* currency

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  Three letter currency code for fixed prices associated with this price list.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The unique name of the price list, used as a human-readable identifier.

* parent

  [Price​List​Parent​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListParentCreateInput)

  required

  Relative adjustments to other prices.

***

## Map

No referencing types
