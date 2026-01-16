---
title: reverseFulfillmentOrderDispose - GraphQL Admin
description: Disposes reverse fulfillment order line items.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseFulfillmentOrderDispose
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseFulfillmentOrderDispose.md
---

# reverse​Fulfillment​Order​Dispose

mutation

Requires `write_returns` access scope or `write_marketplace_returns` access scope.

Disposes reverse fulfillment order line items.

## Arguments

* disposition​Inputs

  [\[Reverse​Fulfillment​Order​Dispose​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseFulfillmentOrderDisposeInput)

  required

  The input parameters required to dispose reverse fulfillment order line items.

***

## Reverse​Fulfillment​Order​Dispose​Payload returns

* reverse​Fulfillment​Order​Line​Items

  [\[Reverse​Fulfillment​Order​Line​Item!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItem)

  The disposed reverse fulfillment order line items.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### reverseFulfillmentOrderDispose reference

## Mutation Reference

```graphql
mutation reverseFulfillmentOrderDispose($dispositionInputs: [ReverseFulfillmentOrderDisposeInput!]!) {
  reverseFulfillmentOrderDispose(dispositionInputs: $dispositionInputs) {
    reverseFulfillmentOrderLineItems {
      # ReverseFulfillmentOrderLineItem fields
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
  "dispositionInputs": [
    {
      "reverseFulfillmentOrderLineItemId": "gid://shopify/<objectName>/10079785100",
      "quantity": 1,
      "locationId": "gid://shopify/<objectName>/10079785100",
      "dispositionType": "RESTOCKED"
    }
  ]
}
```

##### Schema

```graphql
input ReverseFulfillmentOrderDisposeInput {
  reverseFulfillmentOrderLineItemId: ID!
  quantity: Int!
  locationId: ID
  dispositionType: ReverseFulfillmentOrderDispositionType!
}
```
