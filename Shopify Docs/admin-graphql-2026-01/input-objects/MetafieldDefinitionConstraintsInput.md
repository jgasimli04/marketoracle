---
title: MetafieldDefinitionConstraintsInput - GraphQL Admin
description: >-
  The input fields required to create metafield definition
  [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions).

  Each constraint applies a metafield definition to a subtype of a resource.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintsInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintsInput.md
---

# Metafield​Definition​Constraints​Input

input\_object

The input fields required to create metafield definition [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions). Each constraint applies a metafield definition to a subtype of a resource.

## Fields

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The category of resource subtypes that the definition applies to.

* values

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The specific constraint subtype values that the definition applies to.

***

## Input objects using this input

* [Metafield​Definition​Input.constraints](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionInput#fields-constraints)

  INPUT OBJECT

  The input fields required to create a metafield definition.

***

## Map

### Input objects using this input

* [Metafield​Definition​Input.constraints](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionInput#fields-constraints)
