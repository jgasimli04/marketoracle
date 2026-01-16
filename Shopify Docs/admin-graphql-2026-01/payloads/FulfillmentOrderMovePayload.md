---
title: FulfillmentOrderMovePayload - GraphQL Admin
description: Return type for `fulfillmentOrderMove` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderMovePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderMovePayload.md
---

# Fulfillment​Order​Move​Payload

payload

Return type for `fulfillmentOrderMove` mutation.

## Fields

* moved​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order which now contains the moved line items and is assigned to the destination location.

  If the original fulfillment order doesn't have any line items which are fully or partially fulfilled, the original fulfillment order will be moved to the new location. However if this isn't the case, the moved fulfillment order will differ from the original one.

* original​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The final state of the original fulfillment order.

  As a result of the move operation, the original fulfillment order might be moved to the new location or remain in the original location. The original fulfillment order might have the same status or be closed.

* remaining​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  This field is deprecated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Order​Move](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMove)

  mutation

  Changes the location which is assigned to fulfill a number of unfulfilled fulfillment order line items.

  Moving a fulfillment order will fail in the following circumstances:

  * The fulfillment order is closed.
  * The fulfillment order has had progress manually reported. To move a fulfillment order that has had progress manually reported, the fulfillment order must first be marked as open resolving the ongoing progress state.
  * The destination location doesn't stock the requested inventory item.
  * The API client doesn't have the correct permissions.

  Line items which have already been fulfilled can't be re-assigned and will always remain assigned to the original location.

  You can't change the assigned location while a fulfillment order has a [request status](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus) of `SUBMITTED`, `ACCEPTED`, `CANCELLATION_REQUESTED`, or `CANCELLATION_REJECTED`. These request statuses mean that a fulfillment order is awaiting action by a fulfillment service and can't be re-assigned without first having the fulfillment service accept a cancellation request. This behavior is intended to prevent items from being fulfilled by multiple locations or fulfillment services.

  ### How re-assigning line items affects fulfillment orders

  **First scenario:** Re-assign all line items belonging to a fulfillment order to a new location.

  In this case, the [assignedLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-fulfillmentorder-assignedlocation) of the original fulfillment order will be updated to the new location.

  **Second scenario:** Re-assign a subset of the line items belonging to a fulfillment order to a new location. You can specify a subset of line items using the `fulfillmentOrderLineItems` parameter (available as of the `2023-04` API version), or specify that the original fulfillment order contains line items which have already been fulfilled.

  If the new location is already assigned to another active fulfillment order, on the same order, then a new fulfillment order is created. The existing fulfillment order is closed and line items are recreated in a new fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to be moved.

  * new​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the location where the fulfillment order will be moved.

  * fulfillment​Order​Line​Items

    [\[Fulfillment​Order​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemInput)

    The fulfillment order line items to be moved. If left blank, all unfulfilled line items belonging to the fulfillment order are moved.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Order​Move](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrderMove)
