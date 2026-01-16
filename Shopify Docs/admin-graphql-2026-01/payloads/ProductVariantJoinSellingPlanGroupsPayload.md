---
title: ProductVariantJoinSellingPlanGroupsPayload - GraphQL Admin
description: Return type for `productVariantJoinSellingPlanGroups` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductVariantJoinSellingPlanGroupsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductVariantJoinSellingPlanGroupsPayload.md
---

# Product​Variant​Join​Selling​Plan​Groups​Payload

payload

Return type for `productVariantJoinSellingPlanGroups` mutation.

## Fields

* product​Variant

  [Product​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The product variant object.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [product​Variant​Join​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantJoinSellingPlanGroups)

  mutation

  Adds multiple selling plan groups to a product variant.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product variant.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to add.

  ***

***

## Map

### Mutations with this payload

* [product​Variant​Join​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/types/productVariantJoinSellingPlanGroups)
