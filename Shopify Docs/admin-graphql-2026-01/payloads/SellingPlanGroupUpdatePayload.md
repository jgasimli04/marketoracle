---
title: SellingPlanGroupUpdatePayload - GraphQL Admin
description: Return type for `sellingPlanGroupUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SellingPlanGroupUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SellingPlanGroupUpdatePayload.md
---

# Selling​Plan​Group​Update​Payload

payload

Return type for `sellingPlanGroupUpdate` mutation.

## Fields

* deleted​Selling​Plan​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The IDs of the deleted Subscription Plans.

* selling​Plan​Group

  [Selling​Plan​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)

  The updated Selling Plan Group.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [selling​Plan​Group​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupUpdate)

  mutation

  Update a Selling Plan Group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The Selling Plan Group to update.

  * input

    [Selling​Plan​Group​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput)

    required

    The properties of the Selling Plan Group to update.

  ***

***

## Map

### Mutations with this payload

* [selling​Plan​Group​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/sellingPlanGroupUpdate)
