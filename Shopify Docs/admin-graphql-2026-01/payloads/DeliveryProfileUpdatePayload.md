---
title: DeliveryProfileUpdatePayload - GraphQL Admin
description: Return type for `deliveryProfileUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryProfileUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryProfileUpdatePayload.md
---

# Delivery​Profile​Update​Payload

payload

Return type for `deliveryProfileUpdate` mutation.

## Fields

* profile

  [Delivery​Profile](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)

  The delivery profile that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [delivery​Profile​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileUpdate)

  mutation

  Updates a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)'s configuration, including its shipping zones, rates, and associated products.

  Modify location groups to control which fulfillment [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects serve specific geographic areas. Add or remove shipping zones with custom countries and provinces. Create or update shipping methods with rate definitions and delivery conditions. Associate or dissociate [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects and [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to determine which products use this profile's shipping rules.

  The mutation supports partial updates through dedicated input fields for creating, updating, and deleting specific components without affecting the entire profile structure.

  Learn more about [building delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the delivery profile to update.

  * profile

    [Delivery​Profile​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput)

    required

    Specifies the input fields for a delivery profile.

  * leave​Legacy​Mode​Profiles

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Deprecated

  ***

***

## Map

### Mutations with this payload

* [delivery​Profile​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/deliveryProfileUpdate)
