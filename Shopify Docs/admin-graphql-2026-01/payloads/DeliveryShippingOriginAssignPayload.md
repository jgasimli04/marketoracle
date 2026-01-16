---
title: DeliveryShippingOriginAssignPayload - GraphQL Admin
description: Return type for `deliveryShippingOriginAssign` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryShippingOriginAssignPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryShippingOriginAssignPayload.md
---

# Delivery​Shipping​Origin​Assign​Payload

payload

Return type for `deliveryShippingOriginAssign` mutation.

## Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [delivery​Shipping​Origin​Assign](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryShippingOriginAssign)

  mutation

  Assigns a location as the shipping origin while using legacy compatibility mode for multi-location delivery profiles.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the location to assign as the shipping origin.

  ***

***

## Map

### Mutations with this payload

* [delivery​Shipping​Origin​Assign](https://shopify.dev/docs/api/admin-graphql/latest/types/deliveryShippingOriginAssign)
