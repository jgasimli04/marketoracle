---
title: UrlRedirectImportPreview - GraphQL Admin
description: A preview of a URL redirect import row.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImportPreview
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImportPreview.md
---

# Url​Redirect​Import​Preview

object

Requires `read_online_store_navigation` access scope.

A preview of a URL redirect import row.

## Fields

* path

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The old path to be redirected from. When the user visits this path, they will be redirected to the target location.

* target

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The target location where the user will be redirected to.

***

## Map

### Fields with this object

* {}[UrlRedirectImport.previewRedirects](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImport#field-UrlRedirectImport.fields.previewRedirects)
