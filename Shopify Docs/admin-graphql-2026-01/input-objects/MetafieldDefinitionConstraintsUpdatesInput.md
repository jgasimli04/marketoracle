---
title: MetafieldDefinitionConstraintsUpdatesInput - GraphQL Admin
description: >-
  The input fields required to update metafield definition
  [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions).

  Each constraint applies a metafield definition to a subtype of a resource.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintsUpdatesInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintsUpdatesInput.md
---

# Metafield​Definition​Constraints​Updates​Input

input\_object

The input fields required to update metafield definition [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions). Each constraint applies a metafield definition to a subtype of a resource.

## Fields

* key

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The category of resource subtypes that the definition applies to. If omitted and the definition is already constrained, the existing constraint key will be used. If set to `null`, all constraints will be removed.

* values

  [\[Metafield​Definition​Constraint​Value​Update​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintValueUpdateInput)

  The specific constraint subtype values to create or delete.

***

## Input objects using this input

* [Metafield​Definition​Update​Input.constraintsUpdates](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionUpdateInput#fields-constraintsUpdates)

  INPUT OBJECT

  The input fields required to update a metafield definition.

***

## Map

### Input objects using this input

* [Metafield​Definition​Update​Input.constraintsUpdates](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionUpdateInput#fields-constraintsUpdates)
