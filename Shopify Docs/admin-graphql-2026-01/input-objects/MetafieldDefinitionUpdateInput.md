---
title: MetafieldDefinitionUpdateInput - GraphQL Admin
description: The input fields required to update a metafield definition.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionUpdateInput.md
---

# Metafield​Definition​Update​Input

input\_object

The input fields required to update a metafield definition.

## Fields

* access

  [Metafield​Access​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldAccessUpdateInput)

  The access settings that apply to each of the metafields that belong to the metafield definition.

* capabilities

  [Metafield​Capability​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldCapabilityUpdateInput)

  The capabilities of the metafield definition.

* constraints​Updates

  [Metafield​Definition​Constraints​Updates​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintsUpdatesInput)

  The [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions) that determine what resources a metafield definition applies to.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description for the metafield definition.

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The unique identifier for the metafield definition within its namespace. Used to help identify the metafield definition, but can't be updated itself.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The human-readable name for the metafield definition.

* namespace

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The container for a group of metafields that the metafield definition is associated with. Used to help identify the metafield definition, but cannot be updated itself. If omitted, the app-reserved namespace will be used.

* owner​Type

  [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

  non-null

  The resource type that the metafield definition is attached to. Used to help identify the metafield definition, but can't be updated itself.

* pin

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether to pin the metafield definition.

* validations

  [\[Metafield​Definition​Validation​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionValidationInput)

  A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for the metafields that belong to the metafield definition. For example, for a metafield definition with the type `date`, you can set a minimum date validation so that each of the metafields that belong to it can only store dates after the specified minimum.

* use​As​Collection​Condition

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  DeprecatedDefault:false

***

## Map

No referencing types
