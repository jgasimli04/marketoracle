---
title: SellingPlanGroupAddProductsPayload - GraphQL Admin
description: Return type for `sellingPlanGroupAddProducts` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SellingPlanGroupAddProductsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SellingPlanGroupAddProductsPayload.md
---

# Selling​Plan​Group​Add​Products​Payload

payload

Return type for `sellingPlanGroupAddProducts` mutation.

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

* [selling​Plan​Group​Add​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProducts)

  mutation

  Adds multiple products to a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the products to add.

  ***

***

## Map

### Mutations with this payload

* [selling​Plan​Group​Add​Products](https://shopify.dev/docs/api/admin-graphql/latest/types/sellingPlanGroupAddProducts)
