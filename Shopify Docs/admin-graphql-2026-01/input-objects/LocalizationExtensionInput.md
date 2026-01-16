---
title: LocalizationExtensionInput - GraphQL Admin
description: The input fields for a LocalizationExtensionInput.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocalizationExtensionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocalizationExtensionInput.md
---

# Localization​Extension​Input

input\_object

The input fields for a LocalizationExtensionInput.

## Fields

* key

  [Localization​Extension​Key!](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizationExtensionKey)

  non-null

  The key for the localization extension.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The localization extension value.

***

## Input objects using this input

* [Draft​Order​Input.localizationExtensions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-localizationExtensions)

  INPUT OBJECT

  The input fields used to create or update a draft order.

* [Order​Input.localizationExtensions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderInput#fields-localizationExtensions)

  INPUT OBJECT

  The input fields for specifying the information to be updated on an order when using the orderUpdate mutation.

***

## Map

### Input objects using this input

* [Draft​Order​Input.localizationExtensions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-localizationExtensions)
* [Order​Input.localizationExtensions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderInput#fields-localizationExtensions)
