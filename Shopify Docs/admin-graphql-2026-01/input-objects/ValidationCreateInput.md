---
title: ValidationCreateInput - GraphQL Admin
description: The input fields required to install a validation.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ValidationCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ValidationCreateInput.md
---

# Validation​Create​Input

input\_object

The input fields required to install a validation.

## Fields

* block​On​Failure

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the validation should block on failures other than expected violations.

* enable

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the validation should be live on the merchant checkout.

* function​Handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The function handle representing the extension to install.

* metafields

  [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

  Default:\[]

  Additional metafields to associate to the validation.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the validation.

* function​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

***

## Map

No referencing types
