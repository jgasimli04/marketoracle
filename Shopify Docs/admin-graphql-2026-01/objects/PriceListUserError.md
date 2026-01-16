---
title: PriceListUserError - GraphQL Admin
description: Error codes for failed contextual pricing operations.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListUserError'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListUserError.md
---

# Price​List​User​Error

object

Requires `read_products` access scope. Also: The user must have permission to view catalogs.

Error codes for failed contextual pricing operations.

## Fields

* code

  [Price​List​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListUserErrorCode)

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

* [price​List​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListCreate)

  mutation

  Creates a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Price lists enable contextual pricing by defining fixed prices or percentage-based adjustments.

  The price list requires a unique name, currency for fixed prices, and parent adjustment settings that determine how the system calculates prices relative to base prices. To apply contextual pricing, link the price list to a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog). When that catalog's context is matched, customers receive the price list's prices.

  Learn more about [building catalogs with price lists](https://shopify.dev/docs/apps/build/markets/build-catalog#step-2-associate-a-price-list-with-the-catalog).

  * input

    [Price​List​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListCreateInput)

    required

    ### Arguments

    The properties of the new price list.

  ***

* [price​List​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListDelete)

  mutation

  Deletes a price list. For example, you can delete a price list so that it no longer applies for products in the associated market.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to be deleted.

  ***

* [price​List​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListUpdate)

  mutation

  Updates a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)'s configuration, including its name, currency, [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) association, and pricing adjustments.

  Changing the currency removes all fixed prices from the price list. The affected [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects revert to prices calculated from the price list's adjustment settings.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to update.

  * input

    [Price​List​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListUpdateInput)

    required

    The input data used to update the price list.

  ***

***

## <\~> PriceListUserError Mutations

### Mutated by

* <\~>[price​List​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListCreate)
* <\~>[price​List​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListDelete)
* <\~>[price​List​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-PriceListUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
