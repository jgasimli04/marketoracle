---
title: PublicationInput - GraphQL Admin
description: The input fields required to publish a resource.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationInput.md
---

# Publication​Input

input\_object

The input fields required to publish a resource.

## Fields

* publication​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  ID of the publication.

* publish​Date

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time that the resource was published. Setting this to a date in the future will schedule the resource to be published. Only online store channels support future publishing. This field has no effect if you include it in the `publishableUnpublish` mutation.

* channel​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Deprecated

***

## Map

No referencing types
