---
title: WebPresenceUpdateInput - GraphQL Admin
description: The input fields used to update a web presence.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceUpdateInput.md
---

# Web​Presence​Update​Input

input\_object

The input fields used to update a web presence.

## Fields

* alternate​Locales

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The alternate locales for the web presence.

* default​Locale

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The default locale for the web presence.

* subfolder​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The market-specific suffix of the subfolders defined by the web presence. Example: in `/en-us` the subfolder suffix is `us`. Only ASCII characters are allowed. This field must be null if subfolder suffix is not already defined for the web presence.

***

## Map

No referencing types
