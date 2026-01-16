---
title: DiscountCodeActivatePayload - GraphQL Admin
description: Return type for `discountCodeActivate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeActivatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeActivatePayload.md
---

# Discount​Code​Activate​Payload

payload

Return type for `discountCodeActivate` mutation.

## Fields

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The activated code discount.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Code​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeActivate)

  mutation

  Activates a previously created code discount, making it available for customers to use during checkout. This mutation transitions inactive discount codes into an active state where they can be applied to orders.

  For example, after creating a "SUMMER20" discount code but leaving it inactive during setup, merchants can activate it when ready to launch their summer promotion campaign.

  Use `DiscountCodeActivate` to:

  * Launch scheduled promotional campaigns
  * Reactivate previously paused discount codes
  * Enable discount codes after configuration changes
  * Control the timing of discount availability

  The mutation returns the updated discount code node with its new active status and handles any validation errors that might prevent activation, such as conflicting discount rules or invalid date ranges.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the code discount to activate.

  ***

***

## Map

### Mutations with this payload

* [discount​Code​Activate](https://shopify.dev/docs/api/admin-graphql/latest/types/discountCodeActivate)
