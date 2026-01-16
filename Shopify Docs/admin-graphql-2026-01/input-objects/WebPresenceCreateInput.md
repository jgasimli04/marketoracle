---
title: WebPresenceCreateInput - GraphQL Admin
description: The input fields used to create a web presence.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceCreateInput.md
---

# Web​Presence​Create​Input

input\_object

The input fields used to create a web presence.

## Fields

* alternate​Locales

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The alternate locales for the web presence.

* default​Locale

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The default locale for the web presence.

* domain​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The web presence's domain ID. This field must be `null` if the `subfolderSuffix` isn't `null`.

* subfolder​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The market-specific suffix of the subfolders defined by the web presence. For example: in `/en-us`, the subfolder suffix is `us`. Only ASCII characters are allowed. This field must be `null` if the `domainId` isn't `null`.

***

## Map

No referencing types
