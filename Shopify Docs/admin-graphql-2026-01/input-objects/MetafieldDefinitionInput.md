---
title: MetafieldDefinitionInput - GraphQL Admin
description: The input fields required to create a metafield definition.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionInput.md
---

# Metafield​Definition​Input

input\_object

The input fields required to create a metafield definition.

## Fields

* access

  [Metafield​Access​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldAccessInput)

  The access settings that apply to each of the metafields that belong to the metafield definition.

* capabilities

  [Metafield​Capability​Create​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldCapabilityCreateInput)

  The capabilities of the metafield definition.

* constraints

  [Metafield​Definition​Constraints​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintsInput)

  The [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions) that determine what resources a metafield definition applies to.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description for the metafield definition.

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The unique identifier for the metafield definition within its namespace.

  Must be 2-64 characters long and only contain alphanumeric, hyphen, and underscore characters.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The human-readable name for the metafield definition.

* namespace

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The container for a group of metafields that the metafield definition will be associated with. If omitted, the app-reserved namespace will be used.

  Must be 3-255 characters long and only contain alphanumeric, hyphen, and underscore characters.

* owner​Type

  [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

  non-null

  The resource type that the metafield definition is attached to.

* pin

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether to [pin](https://help.shopify.com/manual/custom-data/metafields/pinning-metafield-definitions) the metafield definition.

* type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The type of data that each of the metafields that belong to the metafield definition will store. Refer to the list of [supported types](https://shopify.dev/apps/metafields/types).

* validations

  [\[Metafield​Definition​Validation​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionValidationInput)

  A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for the metafields that belong to the metafield definition. For example, for a metafield definition with the type `date`, you can set a minimum date validation so that each of the metafields that belong to it can only store dates after the specified minimum.

* use​As​Collection​Condition

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  DeprecatedDefault:false

***

## Map

No referencing types
