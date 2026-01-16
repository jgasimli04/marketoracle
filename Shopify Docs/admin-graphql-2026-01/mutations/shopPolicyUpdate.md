---
title: shopPolicyUpdate - GraphQL Admin
description: Updates a shop policy.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopPolicyUpdate'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopPolicyUpdate.md
---

# shop​Policy​Update

mutation

Requires `write_legal_policies` access scope.

Updates a shop policy.

## Arguments

* shop​Policy

  [Shop​Policy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopPolicyInput)

  required

  The properties to use when updating the shop policy.

***

## Shop​Policy​Update​Payload returns

* shop​Policy

  [Shop​Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicy)

  The shop policy that has been updated.

* user​Errors

  [\[Shop​Policy​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicyUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### shopPolicyUpdate reference

## Mutation Reference

```graphql
mutation shopPolicyUpdate($shopPolicy: ShopPolicyInput!) {
  shopPolicyUpdate(shopPolicy: $shopPolicy) {
    shopPolicy {
      # ShopPolicy fields
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
  "shopPolicy": {
    "type": "REFUND_POLICY",
    "body": "<your-body>"
  }
}
```

##### Schema

```graphql
input ShopPolicyInput {
  type: ShopPolicyType!
  body: String!
}
```
