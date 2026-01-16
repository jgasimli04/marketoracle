---
title: MetaobjectAccess - GraphQL Admin
description: Access permissions for the definition's metaobjects.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectAccess'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectAccess.md
---

# Metaobject​Access

object

Access permissions for the definition's metaobjects.

## Fields

* admin

  [Metaobject​Admin​Access!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetaobjectAdminAccess)

  non-null

  The access permitted on the Admin API.

* customer​Account

  [Metaobject​Customer​Account​Access!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetaobjectCustomerAccountAccess)

  non-null

  The access permitted on the Customer Account API.

* storefront

  [Metaobject​Storefront​Access!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetaobjectStorefrontAccess)

  non-null

  The access permitted on the Storefront API.

***

## Map

### Fields with this object

* {}[MetaobjectDefinition.access](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition#field-MetaobjectDefinition.fields.access)
