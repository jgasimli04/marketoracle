---
title: QuantityPricingByVariantUserError - GraphQL Admin
description: Error codes for failed volume pricing operations.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPricingByVariantUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPricingByVariantUserError.md
---

# Quantity​Pricing​By​Variant​User​Error

object

Requires `read_products` access scope. Also: The user must have permission to create and edit catalogs, and the shop requires B2B features enabled.

Error codes for failed volume pricing operations.

## Fields

* code

  [Quantity​Pricing​By​Variant​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/QuantityPricingByVariantUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

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

## <\~> QuantityPricingByVariantUserError Mutations

### Mutated by

* <\~>[quantity​Pricing​By​Variant​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityPricingByVariantUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-QuantityPricingByVariantUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
