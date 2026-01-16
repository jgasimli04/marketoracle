---
title: LinkedMetafieldInput - GraphQL Admin
description: The input fields for linking a combined listing option to a metafield.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LinkedMetafieldInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LinkedMetafieldInput.md
---

# Linked​Metafield​Input

input\_object

The input fields for linking a combined listing option to a metafield.

## Fields

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The key of the linked metafield.

* namespace

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The namespace of the linked metafield.

* values

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The values of the linked metafield.

***

## Input objects using this input

* [Option​And​Value​Input.linkedMetafield](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionAndValueInput#fields-linkedMetafield)

  INPUT OBJECT

  The input fields for the options and values of the combined listing.

***

## Map

### Input objects using this input

* [Option​And​Value​Input.linkedMetafield](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionAndValueInput#fields-linkedMetafield)
