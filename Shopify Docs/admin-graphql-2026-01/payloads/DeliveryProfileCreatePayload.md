---
title: DeliveryProfileCreatePayload - GraphQL Admin
description: Return type for `deliveryProfileCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryProfileCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryProfileCreatePayload.md
---

# Delivery​Profile​Create​Payload

payload

Return type for `deliveryProfileCreate` mutation.

## Fields

* profile

  [Delivery​Profile](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)

  The delivery profile that was created.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [delivery​Profile​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileCreate)

  mutation

  Creates a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) that defines shipping rates for specific products and locations.

  A delivery profile groups products with their shipping zones and rates. You can associate profiles with [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to customize shipping for subscriptions and pre-orders. Each profile contains [`DeliveryProfileLocationGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup) objects that specify which [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects ship to which [`DeliveryZone`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone) objects with specific [`DeliveryMethodDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinition) objects and rates.

  Learn more about [building delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

  * profile

    [Delivery​Profile​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput)

    required

    ### Arguments

    Specifies the input fields for a delivery profile.

  ***

***

## Map

### Mutations with this payload

* [delivery​Profile​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/deliveryProfileCreate)
