---
title: CollectionPublicationInput - GraphQL Admin
description: The input fields for publications to which a collection will be published.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionPublicationInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionPublicationInput.md
---

# Collection​Publication​Input

input\_object

The input fields for publications to which a collection will be published.

## Fields

* publication​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the publication.

### Deprecated fields

* channel​Handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

* channel​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Deprecated

***

## Input objects using this input

* [Collection​Input.publications](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput#fields-publications)

  INPUT OBJECT

  The input fields required to create a collection.

* [Collection​Publish​Input.collectionPublications](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionPublishInput#fields-collectionPublications)

  INPUT OBJECT

  The input fields for specifying a collection to publish and the sales channels to publish it to.

* [Collection​Unpublish​Input.collectionPublications](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionUnpublishInput#fields-collectionPublications)

  INPUT OBJECT

  The input fields for specifying the collection to unpublish and the sales channels to remove it from.

***

## Map

### Input objects using this input

* [Collection​Input.publications](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput#fields-publications)
* [Collection​Publish​Input.collectionPublications](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionPublishInput#fields-collectionPublications)
* [Collection​Unpublish​Input.collectionPublications](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionUnpublishInput#fields-collectionPublications)
