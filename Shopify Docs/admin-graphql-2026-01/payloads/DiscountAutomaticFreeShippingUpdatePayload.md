---
title: DiscountAutomaticFreeShippingUpdatePayload - GraphQL Admin
description: Return type for `discountAutomaticFreeShippingUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticFreeShippingUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticFreeShippingUpdatePayload.md
---

# Discount​Automatic​Free​Shipping​Update​Payload

payload

Return type for `discountAutomaticFreeShippingUpdate` mutation.

## Fields

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The automatic discount that was updated.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Automatic​Free​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate)

  mutation

  Updates existing automatic free shipping discounts, allowing merchants to modify promotion criteria, shipping destinations, and eligibility requirements without recreating the entire discount structure.

  For example, extending a holiday free shipping promotion to include additional countries, adjusting the minimum order value threshold, or expanding customer eligibility to include new segments.

  Use `DiscountAutomaticFreeShippingUpdate` to:

  * Modify shipping discount thresholds and criteria
  * Expand or restrict geographic availability
  * Update customer targeting and eligibility rules
  * Adjust promotion timing and activation periods

  Changes take effect immediately for new orders, while the mutation validates all modifications and reports any configuration conflicts through user errors.

  Learn more about [managing automatic discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic free shipping discount to update.

  * free​Shipping​Automatic​Discount

    [Discount​Automatic​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput)

    required

    The input data used to update the automatic free shipping discount.

  ***

***

## Map

### Mutations with this payload

* [discount​Automatic​Free​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/discountAutomaticFreeShippingUpdate)
