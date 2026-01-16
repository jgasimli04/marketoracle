---
title: MetafieldAdminAccess - GraphQL Admin
description: Metafield access permissions for the Admin API.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldAdminAccess'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldAdminAccess.md
---

# Metafield​Admin​Access

enum

Metafield access permissions for the Admin API.

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

* [Metafield​Access.admin](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldAccess#field-MetafieldAccess.fields.admin)

  OBJECT

  Access permissions for the definition's metafields.

***

## Map

### Fields with this enum

* <-|[Metafield​Access.admin](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldAccess#field-MetafieldAccess.fields.admin)
