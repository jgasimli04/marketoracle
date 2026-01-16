---
title: MetaobjectAdminAccess - GraphQL Admin
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
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetaobjectAdminAccess
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetaobjectAdminAccess.md
---

# Metaobject​Admin​Access

enum

Metaobject access permissions for the Admin API. When the metaobject is app-owned, the owning app always has full access.

## Valid values

* MERCHANT\_​READ

  The merchant has read-only access. No other apps have access.

* MERCHANT\_​READ\_​WRITE

  The merchant has read and write access. No other apps have access.

* PRIVATE

  The merchant and other apps have no access.

* PUBLIC\_​READ

  The merchant and other apps have read-only access.

* PUBLIC\_​READ\_​WRITE

  The merchant and other apps have read and write access.

***

## Fields

* [Metaobject​Access.admin](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectAccess#field-MetaobjectAccess.fields.admin)

  OBJECT

  Access permissions for the definition's metaobjects.

***

## Map

### Fields with this enum

* <-|[Metaobject​Access.admin](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectAccess#field-MetaobjectAccess.fields.admin)
