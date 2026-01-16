---
title: ProductPublicationInput - GraphQL Admin
description: >-
  The input fields for specifying a publication to which a product will be
  published.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductPublicationInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductPublicationInput.md
---

# Product​Publication​Input

input\_object

The input fields for specifying a publication to which a product will be published.

## Fields

* publication​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  ID of the publication.

* publish​Date

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time that the product was (or will be) published.

### Deprecated fields

* channel​Handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

* channel​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Deprecated

***

## Input objects using this input

* [Product​Input.productPublications](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput#fields-productPublications)

  INPUT OBJECT

  The input fields for creating or updating a product.

* [Product​Input.publications](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput#fields-publications)

  INPUT OBJECT

  The input fields for creating or updating a product.

* [Product​Publish​Input.productPublications](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductPublishInput#fields-productPublications)

  INPUT OBJECT

  The input fields for specifying a product to publish and the channels to publish it to.

* [Product​Unpublish​Input.productPublications](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUnpublishInput#fields-productPublications)

  INPUT OBJECT

  The input fields for specifying a product to unpublish from a channel and the sales channels to unpublish it from.

***

## Map

### Input objects using this input

* [Product​Input.productPublications](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput#fields-productPublications)
* [Product​Input.publications](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput#fields-publications)
* [Product​Publish​Input.productPublications](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductPublishInput#fields-productPublications)
* [Product​Unpublish​Input.productPublications](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUnpublishInput#fields-productPublications)
