---
title: PublicationCreateInput - GraphQL Admin
description: The input fields for creating a publication.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationCreateInput.md
---

# Publication​Create​Input

input\_object

The input fields for creating a publication.

## Fields

* auto​Publish

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether to automatically add newly created products to this publication.

* catalog​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the catalog.

* default​State

  [Publication​Create​Input​Publication​Default​State](https://shopify.dev/docs/api/admin-graphql/latest/enums/PublicationCreateInputPublicationDefaultState)

  Default:EMPTY

  Whether to create an empty publication or prepopulate it with all products.

***

## Map

No referencing types
