---
title: GiftCardConfiguration - GraphQL Admin
description: Represents information about the configuration of gift cards on the shop.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardConfiguration
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardConfiguration.md
---

# Gift​Card​Configuration

object

Requires `read_gift_cards` access scope.

Represents information about the configuration of gift cards on the shop.

## Fields

* issue​Limit

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The issue limit for gift cards in the default shop currency.

* purchase​Limit

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The purchase limit for gift cards in the default shop currency.

***

## Map

No referencing types

***

## Queries

* [gift​Card​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCardConfiguration)

  query

  The configuration for the shop's gift cards.

***

## \<?>GiftCardConfiguration Queries

### Queried by

* \<?>[gift​Card​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCardConfiguration)
