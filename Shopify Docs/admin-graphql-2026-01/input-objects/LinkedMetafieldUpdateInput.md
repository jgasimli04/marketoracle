---
title: LinkedMetafieldUpdateInput - GraphQL Admin
description: >-
  The input fields required to link a product option to a metafield.


  This API is currently in early access. See [Metafield-linked product
  options](https://shopify.dev/docs/api/admin/migrate/new-product-model/metafield-linked)
  for more details.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LinkedMetafieldUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LinkedMetafieldUpdateInput.md
---

# Linked​Metafield​Update​Input

input\_object

The input fields required to link a product option to a metafield.

This API is currently in early access. See [Metafield-linked product options](https://shopify.dev/docs/api/admin/migrate/new-product-model/metafield-linked) for more details.

## Fields

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The key of the metafield this option is linked to.

* namespace

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The namespace of the metafield this option is linked to.

***

## Input objects using this input

* [Option​Update​Input.linkedMetafield](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionUpdateInput#fields-linkedMetafield)

  INPUT OBJECT

  The input fields for updating a product option.

***

## Map

### Input objects using this input

* [Option​Update​Input.linkedMetafield](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionUpdateInput#fields-linkedMetafield)
