---
title: FulfillmentEventInput - GraphQL Admin
description: The input fields used to create a fulfillment event.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentEventInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentEventInput.md
---

# Fulfillment​Event​Input

input\_object

The input fields used to create a fulfillment event.

## Fields

* address1

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The street address where this fulfillment event occurred.

* city

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The city where this fulfillment event occurred.

* country

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The country where this fulfillment event occurred.

* estimated​Delivery​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The estimated delivery date and time of the fulfillment.

* fulfillment​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID for the fulfillment that's associated with this fulfillment event.

* happened​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The time at which this fulfillment event happened.

* latitude

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The latitude where this fulfillment event occurred.

* longitude

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The longitude where this fulfillment event occurred.

* message

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A message associated with this fulfillment event.

* province

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The province where this fulfillment event occurred.

* status

  [Fulfillment​Event​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentEventStatus)

  non-null

  The status of this fulfillment event.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The zip code of the location where this fulfillment event occurred.

***

## Map

No referencing types
