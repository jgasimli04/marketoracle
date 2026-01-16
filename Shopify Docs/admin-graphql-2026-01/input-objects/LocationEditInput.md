---
title: LocationEditInput - GraphQL Admin
description: The input fields to use to edit a location.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationEditInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationEditInput.md
---

# Location​Edit​Input

input\_object

The input fields to use to edit a location.

## Fields

* address

  [Location​Edit​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationEditAddressInput)

  The address of the location.

* fulfills​Online​Orders

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether inventory at this location is available for sale online.

  **Note:** This can't be disabled for fulfillment service locations.

* metafields

  [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

  Additional customizable information to associate with the location.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the location.

***

## Map

No referencing types
