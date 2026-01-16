---
title: SellingPlanGroupRemoveProductsPayload - GraphQL Admin
description: Return type for `sellingPlanGroupRemoveProducts` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SellingPlanGroupRemoveProductsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SellingPlanGroupRemoveProductsPayload.md
---

# Selling​Plan​Group​Remove​Products​Payload

payload

Return type for `sellingPlanGroupRemoveProducts` mutation.

## Fields

* removed​Product​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The removed product ids.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [selling​Plan​Group​Remove​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupRemoveProducts)

  mutation

  Removes multiple products from a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the products to remove.

  ***

***

## Map

### Mutations with this payload

* [selling​Plan​Group​Remove​Products](https://shopify.dev/docs/api/admin-graphql/latest/types/sellingPlanGroupRemoveProducts)
