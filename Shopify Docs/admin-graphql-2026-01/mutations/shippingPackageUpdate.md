---
title: shippingPackageUpdate - GraphQL Admin
description: Updates a shipping package.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingPackageUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingPackageUpdate.md
---

# shipping​Package​Update

mutation

Requires Any of `shipping` access scopes or `manage_delivery_settings` user permission.

Updates a shipping package.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the shipping package to update.

* shipping​Package

  [Custom​Shipping​Package​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomShippingPackageInput)

  required

  Specifies the input fields for a shipping package.

***

## Shipping​Package​Update​Payload returns

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### shippingPackageUpdate reference

## Mutation Reference

```graphql
mutation shippingPackageUpdate($id: ID!, $shippingPackage: CustomShippingPackageInput!) {
  shippingPackageUpdate(id: $id, shippingPackage: $shippingPackage) {
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
  "id": "gid://shopify/<objectName>/10079785100",
  "shippingPackage": {
    "weight": {
      "value": 1.1,
      "unit": "KILOGRAMS"
    },
    "dimensions": {
      "length": 1.1,
      "width": 1.1,
      "height": 1.1,
      "unit": "MILLIMETERS"
    },
    "default": true,
    "name": "<your-name>",
    "type": "BOX"
  }
}
```

##### Schema

```graphql
input CustomShippingPackageInput {
  weight: WeightInput
  dimensions: ObjectDimensionsInput
  default: Boolean
  name: String
  type: ShippingPackageType
}

input WeightInput {
  value: Float!
  unit: WeightUnit!
}

input ObjectDimensionsInput {
  length: Float!
  width: Float!
  height: Float!
  unit: LengthUnit!
}
```
