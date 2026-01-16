---
title: FulfillmentOrderLineItemsPreparedForPickupPayload - GraphQL Admin
description: Return type for `fulfillmentOrderLineItemsPreparedForPickup` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderLineItemsPreparedForPickupPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderLineItemsPreparedForPickupPayload.md
---

# Fulfillment​Order​Line​Items​Prepared​For​Pickup​Payload

payload

Return type for `fulfillmentOrderLineItemsPreparedForPickup` mutation.

## Fields

* user​Errors

  [\[Fulfillment​Order​Line​Items​Prepared​For​Pickup​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemsPreparedForPickupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Order​Line​Items​Prepared​For​Pickup](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderLineItemsPreparedForPickup)

  mutation

  Marks [fulfillment order line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem) as ready for customer pickup. When executed, this mutation automatically sends a "Ready For Pickup" notification to the customer.

  Use this mutation for local pickup orders after the items have been prepared and are available for the customer to collect. You can specify one or more [fulfillment order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects by providing the fulfillment order IDs in the [`lineItemsByFulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PreparedFulfillmentOrderLineItemsInput) field. This allows you to mark fulfillment order line items from different fulfillment orders as ready for pickup.

  * input

    [Fulfillment​Order​Line​Items​Prepared​For​Pickup​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemsPreparedForPickupInput)

    required

    ### Arguments

    The input for marking fulfillment order line items as ready for pickup.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Order​Line​Items​Prepared​For​Pickup](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrderLineItemsPreparedForPickup)
