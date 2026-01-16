---
title: LocalizedFieldInput - GraphQL Admin
description: The input fields for a LocalizedFieldInput.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocalizedFieldInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocalizedFieldInput.md
---

# Localized​Field​Input

input\_object

The input fields for a LocalizedFieldInput.

## Fields

* key

  [Localized​Field​Key!](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizedFieldKey)

  non-null

  The key for the localized field.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The localized field value.

***

## Input objects using this input

* [Draft​Order​Input.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-localizedFields)

  INPUT OBJECT

  The input fields used to create or update a draft order.

* [Order​Input.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderInput#fields-localizedFields)

  INPUT OBJECT

  The input fields for specifying the information to be updated on an order when using the orderUpdate mutation.

***

## Map

### Input objects using this input

* [Draft​Order​Input.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-localizedFields)
* [Order​Input.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderInput#fields-localizedFields)
