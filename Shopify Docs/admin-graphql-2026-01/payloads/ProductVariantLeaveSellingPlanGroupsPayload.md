---
title: ProductVariantLeaveSellingPlanGroupsPayload - GraphQL Admin
description: Return type for `productVariantLeaveSellingPlanGroups` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductVariantLeaveSellingPlanGroupsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductVariantLeaveSellingPlanGroupsPayload.md
---

# Product​Variant​Leave​Selling​Plan​Groups​Payload

payload

Return type for `productVariantLeaveSellingPlanGroups` mutation.

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

* [product​Variant​Leave​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantLeaveSellingPlanGroups)

  mutation

  Remove multiple groups from a product variant.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product variant.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to leave.

  ***

***

## Map

### Mutations with this payload

* [product​Variant​Leave​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/types/productVariantLeaveSellingPlanGroups)
