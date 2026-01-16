---
title: OptionAndValueInput - GraphQL Admin
description: The input fields for the options and values of the combined listing.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionAndValueInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionAndValueInput.md
---

# Option​And​Value​Input

input\_object

The input fields for the options and values of the combined listing.

## Fields

* linked​Metafield

  [Linked​Metafield​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LinkedMetafieldInput)

  The linked metafield for the product's option.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the Product's Option.

* option​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the option to update. If not present, the option will be created.

* values

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The ordered values of the Product's Option.

***

## Map

No referencing types
