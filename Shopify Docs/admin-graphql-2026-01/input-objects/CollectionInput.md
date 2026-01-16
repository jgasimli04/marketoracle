---
title: CollectionInput - GraphQL Admin
description: The input fields required to create a collection.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput.md
---

# Collection​Input

input\_object

The input fields required to create a collection.

## Fields

* description​Html

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of the collection, in HTML format.

* handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique human-friendly string for the collection. Automatically generated from the collection's title.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Specifies the collection to update or create a new collection if absent. Required for updating a collection.

* image

  [Image​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ImageInput)

  The image associated with the collection.

* metafields

  [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

  The metafields to associate with the collection.

* products

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Initial list of collection products. Only valid with `collectionCreate` and without rules.

* redirect​New​Handle

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Indicates whether a redirect is required after a new handle has been provided. If true, then the old handle is redirected to the new one automatically.

* rule​Set

  [Collection​Rule​Set​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionRuleSetInput)

  The rules used to assign products to the collection.

* seo

  [SEOInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SEOInput)

  SEO information for the collection.

* sort​Order

  [Collection​Sort​Order](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSortOrder)

  The order in which the collection's products are sorted.

* template​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The theme template used when viewing the collection in a store.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the collection. Required for creating a new collection.

* publications

  [\[Collection​Publication​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionPublicationInput)

  Deprecated

***

## Map

No referencing types
