---
title: productPublish - GraphQL Admin
description: >-
  Publishes a
  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
  to specified
  [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
  objects.


  Products sold exclusively on subscription (`requiresSellingPlan: true`) can
  only be published to online stores.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/productPublish'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productPublish.md
---

# product​Publish

mutation

Requires `write_publications` access scope. Also: The user must have a permission to publish a product.

Deprecated. Use [publishablePublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) instead.

Publishes a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) to specified [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) objects.

Products sold exclusively on subscription (`requiresSellingPlan: true`) can only be published to online stores.

## Arguments

* input

  [Product​Publish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductPublishInput)

  required

  Specifies the product to publish and the channels to publish it to.

***

## Product​Publish​Payload returns

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product that has been published.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

* product​Publications

  [\[Product​Publication!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPublication)

  Deprecated

  The channels where the product is published.

***

## Examples

* ### productPublish reference

## Mutation Reference

```graphql
mutation productPublish($input: ProductPublishInput!) {
  productPublish(input: $input) {
    product {
      # Product fields
    }
    shop {
      # Shop fields
    }
    userErrors {
      field
      message
    }
  }
}
```

## Input

##### Variables

```json
{
  "input": {
    "id": "gid://shopify/<objectName>/10079785100",
    "productPublications": [
      {
        "publicationId": "gid://shopify/<objectName>/10079785100",
        "publishDate": "2019-09-07T15:50:00Z"
      }
    ]
  }
}
```

##### Schema

```graphql
input ProductPublishInput {
  id: ID!
  productPublications: [ProductPublicationInput!]!
}

input ProductPublicationInput {
  publicationId: ID
  publishDate: DateTime
}
```
