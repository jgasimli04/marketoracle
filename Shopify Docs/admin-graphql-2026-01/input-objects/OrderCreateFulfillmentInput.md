---
title: OrderCreateFulfillmentInput - GraphQL Admin
description: The input fields for a fulfillment to create for an order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateFulfillmentInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateFulfillmentInput.md
---

# Order​Create​Fulfillment​Input

input\_object

The input fields for a fulfillment to create for an order.

## Fields

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the location to fulfill the order from.

* notify​Customer

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the customer should be notified of changes with the fulfillment.

* origin​Address

  [Fulfillment​Origin​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOriginAddressInput)

  The address at which the fulfillment occurred.

* shipment​Status

  [Fulfillment​Event​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentEventStatus)

  The status of the shipment.

* tracking​Company

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the tracking company.

  If you specify a tracking company name from [the list](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies), Shopify will automatically build tracking URLs for all provided tracking numbers, which will make the tracking numbers clickable in the interface. The same tracking company will be applied to all tracking numbers specified.

  Additionally, for the tracking companies listed on the [Shipping Carriers help page](https://help.shopify.com/manual/shipping/understanding-shipping/shipping-carriers#integrated-shipping-carriers) Shopify will automatically update the fulfillment's `shipment_status` field during the fulfillment process.

  ***

  Note

  Send the tracking company name exactly as written in [the list](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies) (capitalization matters).

  ***

* tracking​Number

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The tracking number of the fulfillment.

  The tracking number will be clickable in the interface if one of the following applies (the highest in the list has the highest priority):

  * [Shopify-known tracking company name](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies) specified in the `company` field. Shopify will build the tracking URL automatically based on the tracking number specified.
  * The tracking number has a Shopify-known format. Shopify will guess the tracking provider and build the tracking url based on the tracking number format. Not all tracking carriers are supported, and multiple tracking carriers may use similarly formatted tracking numbers. This can result in an invalid tracking URL.

***

## Input objects using this input

* [Order​Create​Order​Input.fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-fulfillment)

  INPUT OBJECT

  The input fields for creating an order.

***

## Map

### Input objects using this input

* [Order​Create​Order​Input.fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-fulfillment)
