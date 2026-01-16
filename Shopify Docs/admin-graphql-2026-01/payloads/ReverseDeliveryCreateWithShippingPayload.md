---
title: ReverseDeliveryCreateWithShippingPayload - GraphQL Admin
description: Return type for `reverseDeliveryCreateWithShipping` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReverseDeliveryCreateWithShippingPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReverseDeliveryCreateWithShippingPayload.md
---

# Reverse​Delivery​Create​With​Shipping​Payload

payload

Return type for `reverseDeliveryCreateWithShipping` mutation.

## Fields

* reverse​Delivery

  [Reverse​Delivery](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery)

  The created reverse delivery.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [reverse​Delivery​Create​With​Shipping](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseDeliveryCreateWithShipping)

  mutation

  Creates a new reverse delivery with associated external shipping information.

  * reverse​Fulfillment​Order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the reverse fulfillment order that's associated to the reverse delivery.

  * reverse​Delivery​Line​Items

    [\[Reverse​Delivery​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryLineItemInput)

    required

    The reverse delivery line items to be created. If an empty array is provided, then this mutation will create a reverse delivery line item for each reverse fulfillment order line item, with its quantity equal to the reverse fulfillment order line item total quantity.

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

    When `true` the customer is notified with delivery instructions if the `ReverseFulfillmentOrder.order.email` is present.

  ***

***

## Map

### Mutations with this payload

* [reverse​Delivery​Create​With​Shipping](https://shopify.dev/docs/api/admin-graphql/latest/types/reverseDeliveryCreateWithShipping)
