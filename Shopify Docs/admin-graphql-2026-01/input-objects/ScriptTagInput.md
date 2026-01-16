---
title: ScriptTagInput - GraphQL Admin
description: >-
  The input fields for a script tag. This input object is used when creating or
  updating

  a script tag to specify its URL, where it should be included, and how it will
  be cached.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ScriptTagInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ScriptTagInput.md
---

# Script​Tag​Input

input\_object

The input fields for a script tag. This input object is used when creating or updating a script tag to specify its URL, where it should be included, and how it will be cached.

## Fields

* cache

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the Shopify CDN can cache and serve the script tag. If `true`, then the script will be cached and served by the CDN. The cache expires 15 minutes after the script tag is successfully returned. If `false`, then the script is served as is. The default value is `false`.

* display​Scope

  [Script​Tag​Display​Scope](https://shopify.dev/docs/api/admin-graphql/latest/enums/ScriptTagDisplayScope)

  The page or pages on the online store where the script should be included.

* src

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL of the remote script. For example: `https://example.com/path/to/script.js`.

***

## Map

No referencing types
