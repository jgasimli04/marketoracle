---
title: PriceListDeletePayload - GraphQL Admin
description: Return type for `priceListDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PriceListDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PriceListDeletePayload.md
---

# Price​List​Delete​Payload

payload

Return type for `priceListDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted price list.

* user​Errors

  [\[Price​List​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [price​List​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListDelete)

  mutation

  Deletes a price list. For example, you can delete a price list so that it no longer applies for products in the associated market.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to be deleted.

  ***

***

## Map

### Mutations with this payload

* [price​List​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/priceListDelete)
