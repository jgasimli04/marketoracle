---
title: MarketLocalizationRegisterInput - GraphQL Admin
description: The input fields and values for creating or updating a market localization.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketLocalizationRegisterInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketLocalizationRegisterInput.md
---

# Market​Localization​Register​Input

input\_object

The input fields and values for creating or updating a market localization.

## Fields

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A reference to the value being localized on the resource that this market localization belongs to.

* market​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the market that the localization is specific to.

* market​Localizable​Content​Digest

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A hash digest representation of the content being localized.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The value of the market localization.

***

## Map

No referencing types
