---
title: TranslationInput - GraphQL Admin
description: The input fields and values for creating or updating a translation.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/TranslationInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/TranslationInput.md
---

# Translation​Input

input\_object

The input fields and values for creating or updating a translation.

## Fields

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  On the resource that this translation belongs to, the reference to the value being translated.

* locale

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  ISO code of the locale being translated into. Only locales returned in `shopLocales` are valid.

* market​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the market that the translation is specific to. Not specifying this field means that the translation will be available in all markets.

* translatable​Content​Digest

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Hash digest representation of the content being translated.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The value of the translation.

***

## Map

No referencing types
