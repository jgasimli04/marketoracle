---
title: MetaobjectCapabilityDefinitionDataOnlineStoreInput - GraphQL Admin
description: The input fields of the Online Store capability.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectCapabilityDefinitionDataOnlineStoreInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectCapabilityDefinitionDataOnlineStoreInput.md
---

# Metaobject​Capability​Definition​Data​Online​Store​Input

input\_object

The input fields of the Online Store capability.

## Fields

* create​Redirects

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether to redirect published metaobjects automatically when the URL handle changes.

* url​Handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The URL handle for accessing pages of this metaobject type in the Online Store.

***

## Input objects using this input

* [Metaobject​Capability​Online​Store​Input.data](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectCapabilityOnlineStoreInput#fields-data)

  INPUT OBJECT

  The input fields for enabling and disabling the Online Store capability.

***

## Map

### Input objects using this input

* [Metaobject​Capability​Online​Store​Input.data](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectCapabilityOnlineStoreInput#fields-data)
