---
title: DeliveryCustomizationDeletePayload - GraphQL Admin
description: Return type for `deliveryCustomizationDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryCustomizationDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryCustomizationDeletePayload.md
---

# Delivery​Customization​Delete​Payload

payload

Return type for `deliveryCustomizationDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Returns the deleted delivery customization ID.

* user​Errors

  [\[Delivery​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [delivery​Customization​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationDelete)

  mutation

  Creates a delivery customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the delivery customization.

  ***

***

## Map

### Mutations with this payload

* [delivery​Customization​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/deliveryCustomizationDelete)
