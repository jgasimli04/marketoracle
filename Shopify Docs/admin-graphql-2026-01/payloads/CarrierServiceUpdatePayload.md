---
title: CarrierServiceUpdatePayload - GraphQL Admin
description: Return type for `carrierServiceUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CarrierServiceUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CarrierServiceUpdatePayload.md
---

# Carrier​Service​Update​Payload

payload

Return type for `carrierServiceUpdate` mutation.

## Fields

* carrier​Service

  [Delivery​Carrier​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

  The updated carrier service.

* user​Errors

  [\[Carrier​Service​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [carrier​Service​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceUpdate)

  mutation

  Updates a carrier service. Only the app that creates a carrier service can update it.

  * input

    [Delivery​Carrier​Service​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceUpdateInput)

    required

    ### Arguments

    The input fields used to update a carrier service.

  ***

***

## Map

### Mutations with this payload

* [carrier​Service​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/carrierServiceUpdate)
