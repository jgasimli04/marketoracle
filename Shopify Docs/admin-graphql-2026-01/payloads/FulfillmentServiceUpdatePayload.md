---
title: FulfillmentServiceUpdatePayload - GraphQL Admin
description: Return type for `fulfillmentServiceUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentServiceUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentServiceUpdatePayload.md
---

# Fulfillment​Service​Update​Payload

payload

Return type for `fulfillmentServiceUpdate` mutation.

## Fields

* fulfillment​Service

  [Fulfillment​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

  The updated fulfillment service.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Service​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceUpdate)

  mutation

  Updates the [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) configuration, including its name, callback URL, and operational settings.

  The mutation modifies how the fulfillment service handles inventory tracking, shipping requirements, and package tracking support.

  ***

  Note

  To update the physical address or other location details of the fulfillment service, use the [`locationEdit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit) mutation instead.

  ***

  Learn more about [editing fulfillment service locations](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-2-edit-locations).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The id of the fulfillment service.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the fulfillment service.

  * callback​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    The URL to send requests for the fulfillment service.

    If `callbackUrl` is provided:

    * Shopify queries the `callback_url/fetch_tracking_numbers` endpoint to retrieve tracking numbers for orders, if `trackingSupport` is set to `true`.
    * Shopify queries the `callback_url/fetch_stock` endpoint to retrieve inventory levels, if `inventoryManagement` is set to `true`.
    * Shopify uses the `callback_url/fulfillment_order_notification` endpoint to send [fulfillment and cancellation requests](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations).

    Otherwise, if no `callbackUrl` is provided you need to submit this information via the api:

    * For submitting tracking info and handling fulfillment requests, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).
    * For managing inventory quantities, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * tracking​Support

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the fulfillment service provides tracking numbers for packages.

    If `callbackUrl` is provided, Shopify will periodically fetch tracking numbers via the callback endpoint.

    If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).

  * fulfillment​Orders​Opt​In

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Deprecated

  * permits​Sku​Sharing

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Deprecated (removal date set)

  * inventory​Management

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the fulfillment service manages product inventory and provides updates to Shopify.

    If `callbackUrl` is provided, Shopify will periodically fetch inventory levels via the callback endpoint.

    If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * requires​Shipping​Method

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the fulfillment service requires products to be physically shipped.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Service​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentServiceUpdate)
