---
title: productBundleUpdate - GraphQL Admin
description: Updates a product bundle or componentized product.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleUpdate.md
---

# product​Bundle​Update

mutation

Requires `write_products` access scope. Also: The shop must have access to bundles feature.

Updates a product bundle or componentized product.

## Arguments

* input

  [Product​Bundle​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleUpdateInput)

  required

  Input for updating a product bundle or componentized product.

***

## Product​Bundle​Update​Payload returns

* product​Bundle​Operation

  [Product​Bundle​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation)

  The asynchronous ProductBundleOperation updating the product bundle or componentized product.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### productBundleUpdate reference

## Mutation Reference

```graphql
mutation productBundleUpdate($input: ProductBundleUpdateInput!) {
  productBundleUpdate(input: $input) {
    productBundleOperation {
      # ProductBundleOperation fields
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
    "productId": "gid://shopify/<objectName>/10079785100",
    "title": "<your-title>",
    "consolidatedOptions": [
      {
        "optionName": "<your-optionName>",
        "optionSelections": [
          {}
        ]
      }
    ],
    "components": [
      {
        "quantity": 1,
        "productId": "gid://shopify/<objectName>/10079785100",
        "optionSelections": [
          {}
        ],
        "quantityOption": {}
      }
    ]
  }
}
```

##### Schema

```graphql
input ProductBundleUpdateInput {
  productId: ID!
  title: String
  consolidatedOptions: [ProductBundleConsolidatedOptionInput!]
  components: [ProductBundleComponentInput!]
}

input ProductBundleConsolidatedOptionInput {
  optionName: String!
  optionSelections: [ProductBundleConsolidatedOptionSelectionInput!]!
}

input ProductBundleComponentInput {
  quantity: Int
  productId: ID!
  optionSelections: [ProductBundleComponentOptionSelectionInput!]!
  quantityOption: ProductBundleComponentQuantityOptionInput
}
```
