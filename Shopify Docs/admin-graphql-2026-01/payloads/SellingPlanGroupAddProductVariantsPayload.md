---
title: SellingPlanGroupAddProductVariantsPayload - GraphQL Admin
description: Return type for `sellingPlanGroupAddProductVariants` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SellingPlanGroupAddProductVariantsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SellingPlanGroupAddProductVariantsPayload.md
---

# Selling​Plan​Group​Add​Product​Variants​Payload

payload

Return type for `sellingPlanGroupAddProductVariants` mutation.

## Fields

* selling​Plan​Group

  [Selling​Plan​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)

  The updated selling plan group.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [selling​Plan​Group​Add​Product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProductVariants)

  mutation

  Adds multiple product variants to a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Variant​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the product variants to add.

  ***

***

## Map

### Mutations with this payload

* [selling​Plan​Group​Add​Product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/types/sellingPlanGroupAddProductVariants)
