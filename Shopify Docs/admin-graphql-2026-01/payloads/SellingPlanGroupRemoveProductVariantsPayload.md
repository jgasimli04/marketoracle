---
title: SellingPlanGroupRemoveProductVariantsPayload - GraphQL Admin
description: Return type for `sellingPlanGroupRemoveProductVariants` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SellingPlanGroupRemoveProductVariantsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SellingPlanGroupRemoveProductVariantsPayload.md
---

# Selling​Plan​Group​Remove​Product​Variants​Payload

payload

Return type for `sellingPlanGroupRemoveProductVariants` mutation.

## Fields

* removed​Product​Variant​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The removed product variant ids.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [selling​Plan​Group​Remove​Product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupRemoveProductVariants)

  mutation

  Removes multiple product variants from a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Variant​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the product variants to remove.

  ***

***

## Map

### Mutations with this payload

* [selling​Plan​Group​Remove​Product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/types/sellingPlanGroupRemoveProductVariants)
