---
title: DiscountAutomaticDeactivatePayload - GraphQL Admin
description: Return type for `discountAutomaticDeactivate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticDeactivatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticDeactivatePayload.md
---

# Discount​Automatic​Deactivate​Payload

payload

Return type for `discountAutomaticDeactivate` mutation.

## Fields

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The deactivated automatic discount.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Automatic​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticDeactivate)

  mutation

  Deactivates an automatic discount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic discount to deactivate.

  ***

***

## Map

### Mutations with this payload

* [discount​Automatic​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/types/discountAutomaticDeactivate)
