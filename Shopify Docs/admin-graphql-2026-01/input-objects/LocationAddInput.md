---
title: LocationAddInput - GraphQL Admin
description: The input fields to use to add a location.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationAddInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationAddInput.md
---

# Location​Add​Input

input\_object

The input fields to use to add a location.

## Fields

* address

  [Location​Add​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationAddAddressInput)

  required

  The address of the location.

* fulfills​Online​Orders

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:true

  Whether inventory at this location is available for sale online.

* metafields

  [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

  Additional customizable information to associate with the location.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the location.

***

## Map

No referencing types
