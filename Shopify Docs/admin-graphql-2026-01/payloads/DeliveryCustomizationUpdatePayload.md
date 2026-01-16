---
title: DeliveryCustomizationUpdatePayload - GraphQL Admin
description: Return type for `deliveryCustomizationUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryCustomizationUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryCustomizationUpdatePayload.md
---

# Delivery​Customization​Update​Payload

payload

Return type for `deliveryCustomizationUpdate` mutation.

## Fields

* delivery​Customization

  [Delivery​Customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization)

  Returns the updated delivery customization.

* user​Errors

  [\[Delivery​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [delivery​Customization​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationUpdate)

  mutation

  Updates a delivery customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the delivery customization.

  * delivery​Customization

    [Delivery​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCustomizationInput)

    required

    The input data used to update the delivery customization.

  ***

***

## Map

### Mutations with this payload

* [delivery​Customization​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/deliveryCustomizationUpdate)
