---
title: SellingPlanGroupCreatePayload - GraphQL Admin
description: Return type for `sellingPlanGroupCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SellingPlanGroupCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SellingPlanGroupCreatePayload.md
---

# Selling​Plan​Group​Create​Payload

payload

Return type for `sellingPlanGroupCreate` mutation.

## Fields

* selling​Plan​Group

  [Selling​Plan​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)

  The created selling plan group object.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [selling​Plan​Group​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate)

  mutation

  Creates a selling plan group that defines how products can be sold and purchased. A selling plan group represents a selling method such as "Subscribe and save", "Pre-order", or "Try before you buy" and contains one or more selling plans with specific billing, delivery, and pricing policies.

  Use the [`resources`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate#arguments-resources) argument to associate products or product variants with the group during creation. You can also add products later using [`sellingPlanGroupAddProducts`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProducts) or [`sellingPlanGroupAddProductVariants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProductVariants).

  Learn more about [building selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan#step-1-create-a-selling-plan-group) or explore [examples of creating TBYB and other selling plan groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate?example=create-a-tbyb-selling-plan-group).

  * input

    [Selling​Plan​Group​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput)

    required

    ### Arguments

    The properties of the new Selling Plan Group.

  * resources

    [Selling​Plan​Group​Resource​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupResourceInput)

    The resources this Selling Plan Group should be applied to.

  ***

***

## Map

### Mutations with this payload

* [selling​Plan​Group​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/sellingPlanGroupCreate)
