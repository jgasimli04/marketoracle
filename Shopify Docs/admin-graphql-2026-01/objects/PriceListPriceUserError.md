---
title: PriceListPriceUserError - GraphQL Admin
description: An error for a failed price list price operation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceUserError.md
---

# Price​List​Price​User​Error

object

Requires `read_products` access scope.

An error for a failed price list price operation.

## Fields

* code

  [Price​List​Price​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListPriceUserErrorCode)

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

* [price​List​Fixed​Prices​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesAdd)

  mutation

  Creates or updates fixed prices on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Use this mutation to set specific prices for [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects that override the price list's default percentage-based adjustments.

  When you add fixed prices, the mutation replaces any existing fixed prices for those variants on the price list.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to which the fixed prices will be added or updated.

  * prices

    [\[Price​List​Price​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput)

    required

    The list of fixed prices to add or update in the price list.

  ***

* [price​List​Fixed​Prices​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesDelete)

  mutation

  Deletes specific fixed prices from a price list using a product variant ID. You can use the `priceListFixedPricesDelete` mutation to delete a set of fixed prices from a price list. After deleting the set of fixed prices from the price list, the price of each product variant reverts to the original price that was determined by the price list adjustment.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list from which the fixed prices will be removed.

  * variant​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    A list of product variant IDs whose fixed prices will be removed from the price list.

  ***

* [price​List​Fixed​Prices​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesUpdate)

  mutation

  Updates fixed prices on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). This mutation lets you add new fixed prices for specific [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects and remove existing prices in a single operation.

  Use this mutation to modify variant pricing on a price list by providing prices to add and variant IDs to delete.

  Learn more about [setting fixed prices for product variants](https://shopify.dev/docs/apps/build/markets/build-catalog#step-3-set-fixed-prices-for-specific-product-variants).

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The price list that the prices will be updated against.

  * prices​To​Add

    [\[Price​List​Price​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput)

    required

    The fixed prices to add.

  * variant​Ids​To​Delete

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    A list of product variant IDs to remove from the price list.

  ***

***

## <\~> PriceListPriceUserError Mutations

### Mutated by

* <\~>[price​List​Fixed​Prices​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesAdd)
* <\~>[price​List​Fixed​Prices​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesDelete)
* <\~>[price​List​Fixed​Prices​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-PriceListPriceUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
