---
title: ShopLocaleInput - GraphQL Admin
description: The input fields for a shop locale.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopLocaleInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopLocaleInput.md
---

# Shop​Locale​Input

input\_object

The input fields for a shop locale.

## Fields

* market​Web​Presence​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The market web presences on which the locale should be enabled. Pass in an empty array to remove the locale across all market web presences.

* published

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the locale is published. Only published locales are visible to the buyer.

***

## Map

No referencing types
