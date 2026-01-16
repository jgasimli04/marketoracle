---
title: MarketWebPresenceCreateInput - GraphQL Admin
description: The input fields used to create a web presence for a market.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketWebPresenceCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketWebPresenceCreateInput.md
---

# Market​Web​Presence​Create​Input

input\_object

The input fields used to create a web presence for a market.

## Fields

* alternate​Locales

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The alternate locales for the market’s web presence.

* default​Locale

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The default locale for the market’s web presence.

* domain​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The web presence's domain ID. This field must be `null` if the `subfolderSuffix` isn't `null`.

* subfolder​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The market-specific suffix of the subfolders defined by the web presence. For example: in `/en-us`, the subfolder suffix is `us`. Only ASCII characters are allowed. This field must be `null` if the `domainId` isn't `null`.

***

## Map

No referencing types
