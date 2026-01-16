---
title: DeliveryCarrierServiceCreateInput - GraphQL Admin
description: The input fields required to create a carrier service.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceCreateInput.md
---

# Delivery​Carrier​Service​Create​Input

input\_object

The input fields required to create a carrier service.

## Fields

* active

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this carrier service is active. If `true`, then the service will be available to serve rates in checkout.

* callback​Url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL endpoint that Shopify needs to retrieve shipping rates. This must be a public URL.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the shipping service as seen by merchants and their customers.

* supports​Service​Discovery

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether merchants are able to send dummy data to your service through the Shopify admin to see shipping rate examples.

***

## Map

No referencing types
