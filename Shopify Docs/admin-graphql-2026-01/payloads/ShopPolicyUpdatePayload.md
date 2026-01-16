---
title: ShopPolicyUpdatePayload - GraphQL Admin
description: Return type for `shopPolicyUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShopPolicyUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShopPolicyUpdatePayload.md
---

# Shop​Policy​Update​Payload

payload

Return type for `shopPolicyUpdate` mutation.

## Fields

* shop​Policy

  [Shop​Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicy)

  The shop policy that has been updated.

* user​Errors

  [\[Shop​Policy​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicyUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [shop​Policy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopPolicyUpdate)

  mutation

  Updates a shop policy.

  * shop​Policy

    [Shop​Policy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopPolicyInput)

    required

    ### Arguments

    The properties to use when updating the shop policy.

  ***

***

## Map

### Mutations with this payload

* [shop​Policy​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/shopPolicyUpdate)
