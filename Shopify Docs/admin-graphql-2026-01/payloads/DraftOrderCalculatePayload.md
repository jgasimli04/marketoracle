---
title: DraftOrderCalculatePayload - GraphQL Admin
description: Return type for `draftOrderCalculate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderCalculatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderCalculatePayload.md
---

# Draft​Order​Calculate​Payload

payload

Return type for `draftOrderCalculate` mutation.

## Fields

* calculated​Draft​Order

  [Calculated​Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder)

  The calculated properties for a draft order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [draft​Order​Calculate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCalculate)

  mutation

  Calculates the properties of a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) without creating it. Returns pricing information including [`CalculatedDraftOrderLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem) totals, shipping charges, applicable discounts, and tax calculations based on the provided [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) and [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) information.

  Use this mutation to preview total taxes and prices before creating a draft order. It's particularly useful when working with B2B [`PurchasingEntity`](https://shopify.dev/docs/api/admin-graphql/latest/unions/PurchasingEntity) or when you need to determine costs without committing to a draft order. Learn more about [calculating draft orders for B2B purchasing entities](https://shopify.dev/docs/apps/build/b2b/draft-orders#step-1-calculate-a-draft-order-for-a-purchasing-entity).

  * input

    [Draft​Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput)

    required

    ### Arguments

    The fields for the draft order.

  ***

***

## Map

### Mutations with this payload

* [draft​Order​Calculate](https://shopify.dev/docs/api/admin-graphql/latest/types/draftOrderCalculate)
