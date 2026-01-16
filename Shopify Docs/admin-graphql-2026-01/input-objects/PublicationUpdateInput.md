---
title: PublicationUpdateInput - GraphQL Admin
description: The input fields for updating a publication.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationUpdateInput.md
---

# Publication​Update​Input

input\_object

The input fields for updating a publication.

## Fields

* auto​Publish

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether new products should be automatically published to the publication.

* publishables​To​Add

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Default:\[]

  A list of publishable IDs to add. The maximum number of publishables to update simultaneously is 50.

* publishables​To​Remove

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Default:\[]

  A list of publishable IDs to remove. The maximum number of publishables to update simultaneously is 50.

***

## Map

No referencing types
