---
title: MetaobjectAdminAccessInput - GraphQL Admin
description: >-
  Metaobject access permissions for the Admin API. When the metaobject is
  app-owned, the owning app always has

  full access.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetaobjectAdminAccessInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetaobjectAdminAccessInput.md
---

# Metaobject​Admin​Access​Input

enum

Metaobject access permissions for the Admin API. When the metaobject is app-owned, the owning app always has full access.

## Valid values

* MERCHANT\_​READ

  The merchant has read-only access. No other apps have access.

* MERCHANT\_​READ\_​WRITE

  The merchant has read and write access. No other apps have access.

***

## Fields

* [Metaobject​Access​Input.admin](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectAccessInput#fields-admin)

  INPUT OBJECT

  The input fields that set access permissions for the definition's metaobjects.

***

## Map

### Inputs with this enum

* [Metaobject​Access​Input.admin](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectAccessInput#fields-admin)
