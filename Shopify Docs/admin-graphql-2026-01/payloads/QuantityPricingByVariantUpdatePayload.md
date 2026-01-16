---
title: QuantityPricingByVariantUpdatePayload - GraphQL Admin
description: Return type for `quantityPricingByVariantUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/QuantityPricingByVariantUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/QuantityPricingByVariantUpdatePayload.md
---

# Quantity​Pricing​By​Variant​Update​Payload

payload

Return type for `quantityPricingByVariantUpdate` mutation.

## Fields

* product​Variants

  [\[Product​Variant!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The variants for which quantity pricing was created successfully in the price list.

* user​Errors

  [\[Quantity​Pricing​By​Variant​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPricingByVariantUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [quantity​Pricing​By​Variant​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityPricingByVariantUpdate)

  mutation

  Updates quantity pricing on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for specific [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects. You can set fixed prices (see [`PriceListPrice`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice)), quantity rules, and quantity price breaks in a single operation.

  [`QuantityRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule) objects define minimum, maximum, and increment constraints for ordering. [`QuantityPriceBreak`](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreak) objects offer tiered pricing based on purchase volume.

  The mutation executes delete operations before create operations and doesn't allow partial updates.

  ***

  Note

  If any requested change fails, then the mutation doesn't apply any of the changes.

  ***

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list for which quantity pricing will be updated.

  * input

    [Quantity​Pricing​By​Variant​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPricingByVariantUpdateInput)

    required

    The input data used to update the quantity pricing in the price list.

  ***

***

## Map

### Mutations with this payload

* [quantity​Pricing​By​Variant​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/quantityPricingByVariantUpdate)
