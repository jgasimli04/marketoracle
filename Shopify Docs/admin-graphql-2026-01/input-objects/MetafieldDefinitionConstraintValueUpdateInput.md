---
title: MetafieldDefinitionConstraintValueUpdateInput - GraphQL Admin
description: >-
  The inputs fields for modifying a metafield definition's constraint subtype
  values.

  Exactly one option is required.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintValueUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintValueUpdateInput.md
---

# Metafield​Definition​Constraint​Value​Update​Input

input\_object

The inputs fields for modifying a metafield definition's constraint subtype values. Exactly one option is required.

## Fields

* create

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The constraint subtype value to create.

* delete

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The constraint subtype value to delete.

***

## Input objects using this input

* [Metafield​Definition​Constraints​Updates​Input.values](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintsUpdatesInput#fields-values)

  INPUT OBJECT

  The input fields required to update metafield definition [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions). Each constraint applies a metafield definition to a subtype of a resource.

***

## Map

### Input objects using this input

* [Metafield​Definition​Constraints​Updates​Input.values](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintsUpdatesInput#fields-values)
