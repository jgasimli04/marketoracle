---
title: CarrierServiceCreatePayload - GraphQL Admin
description: Return type for `carrierServiceCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CarrierServiceCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CarrierServiceCreatePayload.md
---

# Carrier​Service​Create​Payload

payload

Return type for `carrierServiceCreate` mutation.

## Fields

* carrier​Service

  [Delivery​Carrier​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

  The created carrier service.

* user​Errors

  [\[Carrier​Service​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [carrier​Service​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceCreate)

  mutation

  Creates a carrier service that provides real-time shipping rates to Shopify. Carrier services provide real-time shipping rates from external providers like FedEx, UPS, or custom shipping solutions. The carrier service connects to your external shipping rate calculation system through a callback URL.

  When customers reach checkout, Shopify sends order details to your callback URL and displays the returned shipping rates. The service must be active to provide rates during checkout.

  * input

    [Delivery​Carrier​Service​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceCreateInput)

    required

    ### Arguments

    The input fields used to create a carrier service.

  ***

***

## Map

### Mutations with this payload

* [carrier​Service​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/carrierServiceCreate)
