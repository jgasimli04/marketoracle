---
title: DeliveryCustomizationActivationPayload - GraphQL Admin
description: Return type for `deliveryCustomizationActivation` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryCustomizationActivationPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryCustomizationActivationPayload.md
---

# Delivery​Customization​Activation​Payload

payload

Return type for `deliveryCustomizationActivation` mutation.

## Fields

* ids

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The IDs of the updated delivery customizations.

* user​Errors

  [\[Delivery​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [delivery​Customization​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationActivation)

  mutation

  Activates and deactivates delivery customizations.

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global IDs of the delivery customizations.

  * enabled

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    The enabled status of the delivery customizations.

  ***

***

## Map

### Mutations with this payload

* [delivery​Customization​Activation](https://shopify.dev/docs/api/admin-graphql/latest/types/deliveryCustomizationActivation)
