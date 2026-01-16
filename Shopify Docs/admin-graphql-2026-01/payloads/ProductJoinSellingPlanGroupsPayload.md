---
title: ProductJoinSellingPlanGroupsPayload - GraphQL Admin
description: Return type for `productJoinSellingPlanGroups` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductJoinSellingPlanGroupsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductJoinSellingPlanGroupsPayload.md
---

# Product​Join​Selling​Plan​Groups​Payload

payload

Return type for `productJoinSellingPlanGroups` mutation.

## Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product object.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [product​Join​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productJoinSellingPlanGroups)

  mutation

  Adds multiple selling plan groups to a product.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to add.

  ***

***

## Map

### Mutations with this payload

* [product​Join​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/types/productJoinSellingPlanGroups)
