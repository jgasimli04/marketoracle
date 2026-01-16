---
title: FulfillmentOriginAddressInput - GraphQL Admin
description: >-
  The input fields used to include the address at which the fulfillment
  occurred. This input object is intended for tax purposes, as a full address is
  required for tax providers to accurately calculate taxes. Typically this is
  the address of the warehouse or fulfillment center. To retrieve a fulfillment
  location's address, use the `assignedLocation` field on the
  [`FulfillmentOrder`](/docs/api/admin-graphql/latest/objects/FulfillmentOrder)
  object instead.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOriginAddressInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOriginAddressInput.md
---

# Fulfillment​Origin​Address​Input

input\_object

The input fields used to include the address at which the fulfillment occurred. This input object is intended for tax purposes, as a full address is required for tax providers to accurately calculate taxes. Typically this is the address of the warehouse or fulfillment center. To retrieve a fulfillment location's address, use the `assignedLocation` field on the [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) object instead.

## Fields

* address1

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The street address of the fulfillment location.

* address2

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The second line of the address. Typically the number of the apartment, suite, or unit.

* city

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The city in which the fulfillment location is located.

* country​Code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The country of the fulfillment location.

* province​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The province of the fulfillment location.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The zip code of the fulfillment location.

***

## Input objects using this input

* [Fulfillment​Input.originAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentInput#fields-originAddress)

  INPUT OBJECT

  The input fields used to create a fulfillment from fulfillment orders.

* [Fulfillment​V2Input.originAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentV2Input#fields-originAddress)

  INPUT OBJECT

  The input fields used to create a fulfillment from fulfillment orders.

* [Order​Create​Fulfillment​Input.originAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateFulfillmentInput#fields-originAddress)

  INPUT OBJECT

  The input fields for a fulfillment to create for an order.

***

## Map

### Input objects using this input

* [Fulfillment​Input.originAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentInput#fields-originAddress)
* [Fulfillment​V2Input.originAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentV2Input#fields-originAddress)
* [Order​Create​Fulfillment​Input.originAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateFulfillmentInput#fields-originAddress)
