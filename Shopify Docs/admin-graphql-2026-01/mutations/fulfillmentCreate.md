---
title: fulfillmentCreate - GraphQL Admin
description: >-
  Creates a fulfillment for one or more
  [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)
  objects. The fulfillment orders are associated with the same
  [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and
  are assigned to the same
  [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location).


  Use this mutation to mark items as fulfilled when they're ready to ship. You
  can specify tracking information, customer notification preferences, and which
  [`FulfillmentOrderLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem)
  objects to fulfill from each fulfillment order. If you don't specify line
  items, then the mutation fulfills all items in the fulfillment order.


  Learn more about [building fulfillment
  solutions](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/build-fulfillment-solutions#create-a-fulfillment).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreate.md
---

# fulfillment​Create

mutation

Requires `write_assigned_fulfillment_orders` access scope, `write_merchant_managed_fulfillment_orders` access scope or `write_third_party_fulfillment_orders` access scope. Also: The user must have fulfill\_and\_ship\_orders permission.

Creates a fulfillment for one or more [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. The fulfillment orders are associated with the same [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and are assigned to the same [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location).

Use this mutation to mark items as fulfilled when they're ready to ship. You can specify tracking information, customer notification preferences, and which [`FulfillmentOrderLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem) objects to fulfill from each fulfillment order. If you don't specify line items, then the mutation fulfills all items in the fulfillment order.

Learn more about [building fulfillment solutions](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/build-fulfillment-solutions#create-a-fulfillment).

## Arguments

* fulfillment

  [Fulfillment​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentInput)

  required

  The input fields used to create a fulfillment from fulfillment orders.

* message

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  An optional message for the fulfillment request.

***

## Fulfillment​Create​Payload returns

* fulfillment

  [Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

  The created fulfillment.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### fulfillmentCreate reference

## Mutation Reference

```graphql
mutation fulfillmentCreate($fulfillment: FulfillmentInput!, $message: String) {
  fulfillmentCreate(fulfillment: $fulfillment, message: $message) {
    fulfillment {
      # Fulfillment fields
    }
    userErrors {
      field
      message
    }
  }
}
```

## Input

##### Variables

```json
{
  "fulfillment": {
    "trackingInfo": {
      "number": "<your-number>",
      "url": "https://example.myshopify.com",
      "company": "<your-company>",
      "numbers": [
        "<your-numbers>"
      ],
      "urls": [
        "https://example.myshopify.com"
      ]
    },
    "notifyCustomer": true,
    "lineItemsByFulfillmentOrder": [
      {
        "fulfillmentOrderId": "gid://shopify/<objectName>/10079785100",
        "fulfillmentOrderLineItems": [
          {}
        ]
      }
    ],
    "originAddress": {
      "address1": "<your-address1>",
      "address2": "<your-address2>",
      "city": "<your-city>",
      "zip": "<your-zip>",
      "provinceCode": "<your-provinceCode>",
      "countryCode": "<your-countryCode>"
    }
  },
  "message": "<your-message>"
}
```

##### Schema

```graphql
input FulfillmentInput {
  trackingInfo: FulfillmentTrackingInput
  notifyCustomer: Boolean
  lineItemsByFulfillmentOrder: [FulfillmentOrderLineItemsInput!]!
  originAddress: FulfillmentOriginAddressInput
}

input FulfillmentTrackingInput {
  number: String
  url: URL
  company: String
  numbers: [String!]
  urls: [URL!]
}

input FulfillmentOrderLineItemsInput {
  fulfillmentOrderId: ID!
  fulfillmentOrderLineItems: [FulfillmentOrderLineItemInput!]
}

input FulfillmentOriginAddressInput {
  address1: String
  address2: String
  city: String
  zip: String
  provinceCode: String
  countryCode: String!
}
```
