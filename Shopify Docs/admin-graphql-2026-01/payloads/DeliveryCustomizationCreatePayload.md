---
title: DeliveryCustomizationCreatePayload - GraphQL Admin
description: Return type for `deliveryCustomizationCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryCustomizationCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryCustomizationCreatePayload.md
---

# Delivery​Customization​Create​Payload

payload

Return type for `deliveryCustomizationCreate` mutation.

## Fields

* delivery​Customization

  [Delivery​Customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization)

  Returns the created delivery customization.

* user​Errors

  [\[Delivery​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [delivery​Customization​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationCreate)

  mutation

  Creates a delivery customization.

  * delivery​Customization

    [Delivery​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCustomizationInput)

    required

    ### Arguments

    The input data used to create the delivery customization.

  ***

***

## Map

### Mutations with this payload

* [delivery​Customization​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/deliveryCustomizationCreate)
