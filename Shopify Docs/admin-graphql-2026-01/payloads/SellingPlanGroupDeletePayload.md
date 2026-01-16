---
title: SellingPlanGroupDeletePayload - GraphQL Admin
description: Return type for `sellingPlanGroupDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SellingPlanGroupDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SellingPlanGroupDeletePayload.md
---

# Selling​Plan​Group​Delete​Payload

payload

Return type for `sellingPlanGroupDelete` mutation.

## Fields

* deleted​Selling​Plan​Group​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted selling plan group object.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [selling​Plan​Group​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupDelete)

  mutation

  Delete a Selling Plan Group. This does not affect subscription contracts.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The id of the selling plan group to delete.

  ***

***

## Map

### Mutations with this payload

* [selling​Plan​Group​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/sellingPlanGroupDelete)
