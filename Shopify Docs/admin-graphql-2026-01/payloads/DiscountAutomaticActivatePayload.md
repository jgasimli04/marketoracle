---
title: DiscountAutomaticActivatePayload - GraphQL Admin
description: Return type for `discountAutomaticActivate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticActivatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticActivatePayload.md
---

# Discount​Automatic​Activate​Payload

payload

Return type for `discountAutomaticActivate` mutation.

## Fields

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The activated automatic discount.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Automatic​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticActivate)

  mutation

  Activates an automatic discount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic discount to activate.

  ***

***

## Map

### Mutations with this payload

* [discount​Automatic​Activate](https://shopify.dev/docs/api/admin-graphql/latest/types/discountAutomaticActivate)
