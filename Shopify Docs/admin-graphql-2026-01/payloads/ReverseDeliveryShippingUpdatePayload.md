---
title: ReverseDeliveryShippingUpdatePayload - GraphQL Admin
description: Return type for `reverseDeliveryShippingUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReverseDeliveryShippingUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReverseDeliveryShippingUpdatePayload.md
---

# Reverse​Delivery​Shipping​Update​Payload

payload

Return type for `reverseDeliveryShippingUpdate` mutation.

## Fields

* reverse​Delivery

  [Reverse​Delivery](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery)

  The updated reverse delivery.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [reverse​Delivery​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseDeliveryShippingUpdate)

  mutation

  Updates a reverse delivery with associated external shipping information.

  * reverse​Delivery​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the reverse delivery to update.

  * tracking​Input

    [Reverse​Delivery​Tracking​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryTrackingInput)

    Default:null

    The tracking information for the reverse delivery.

  * label​Input

    [Reverse​Delivery​Label​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryLabelInput)

    Default:null

    The return label file information for the reverse delivery.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    If `true` and an email address exists on the `ReverseFulfillmentOrder.order`, then the customer is notified with the updated delivery instructions.

  ***

***

## Map

### Mutations with this payload

* [reverse​Delivery​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/reverseDeliveryShippingUpdate)
