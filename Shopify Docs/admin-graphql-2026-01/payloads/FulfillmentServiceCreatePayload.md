---
title: FulfillmentServiceCreatePayload - GraphQL Admin
description: Return type for `fulfillmentServiceCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentServiceCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentServiceCreatePayload.md
---

# Fulfillment​Service​Create​Payload

payload

Return type for `fulfillmentServiceCreate` mutation.

## Fields

* fulfillment​Service

  [Fulfillment​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

  The created fulfillment service.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Service​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceCreate)

  mutation

  Creates a fulfillment service.

  ## Fulfillment service location

  When creating a fulfillment service, a new location will be automatically created on the shop and will be associated with this fulfillment service. This location will be named after the fulfillment service and inherit the shop's address.

  If you are using API version `2023-10` or later, and you need to specify custom attributes for the fulfillment service location (for example, to change its address to a country different from the shop's country), use the [LocationEdit](https://shopify.dev/api/admin-graphql/latest/mutations/locationEdit) mutation after creating the fulfillment service.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

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

    Default:false

    Whether the fulfillment service provides tracking numbers for packages.

    If `callbackUrl` is provided ([optional as of API version "2026-01"](https://shopify.dev/changelog/fulfillment-service-callback-url-is-now-optional)), Shopify will periodically fetch tracking numbers via the callback endpoint.

    If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).

  * fulfillment​Orders​Opt​In

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:true

  * permits​Sku​Sharing

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Deprecated (removal date set)Default:true

  * inventory​Management

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the fulfillment service manages product inventory and provides updates to Shopify.

    If `callbackUrl` is provided ([optional as of API version "2026-01"](https://shopify.dev/changelog/fulfillment-service-callback-url-is-now-optional)), Shopify will periodically fetch inventory levels via the callback endpoint.

    If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * requires​Shipping​Method

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the fulfillment service requires products to be physically shipped.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Service​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentServiceCreate)
