---
title: LinkedMetafieldCreateInput - GraphQL Admin
description: The input fields required to link a product option to a metafield.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LinkedMetafieldCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LinkedMetafieldCreateInput.md
---

# Linked​Metafield​Create​Input

input\_object

The input fields required to link a product option to a metafield.

## Fields

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The key of the metafield this option is linked to.

* namespace

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The namespace of the metafield this option is linked to.

* values

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Values associated with the option.

***

## Input objects using this input

* [Option​Create​Input.linkedMetafield](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionCreateInput#fields-linkedMetafield)

  INPUT OBJECT

  The input fields for creating a product option.

* [Option​Set​Input.linkedMetafield](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionSetInput#fields-linkedMetafield)

  INPUT OBJECT

  The input fields for creating or updating a product option.

***

## Map

### Input objects using this input

* [Option​Create​Input.linkedMetafield](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionCreateInput#fields-linkedMetafield)
* [Option​Set​Input.linkedMetafield](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionSetInput#fields-linkedMetafield)
