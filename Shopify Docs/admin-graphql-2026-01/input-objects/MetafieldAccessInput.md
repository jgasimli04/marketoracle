---
title: MetafieldAccessInput - GraphQL Admin
description: The input fields that set access permissions for the definition's metafields.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldAccessInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldAccessInput.md
---

# Metafield​Access​Input

input\_object

The input fields that set access permissions for the definition's metafields.

## Fields

* admin

  [Metafield​Admin​Access​Input](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldAdminAccessInput)

  The access permitted on the Admin API.

* customer​Account

  [Metafield​Customer​Account​Access​Input](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldCustomerAccountAccessInput)

  The access permitted on the Customer Account API.

* storefront

  [Metafield​Storefront​Access​Input](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldStorefrontAccessInput)

  The access permitted on the Storefront API.

***

## Input objects using this input

* [Metafield​Definition​Input.access](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionInput#fields-access)

  INPUT OBJECT

  The input fields required to create a metafield definition.

***

## Map

### Input objects using this input

* [Metafield​Definition​Input.access](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionInput#fields-access)
