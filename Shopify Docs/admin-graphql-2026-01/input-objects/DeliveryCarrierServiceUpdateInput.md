---
title: DeliveryCarrierServiceUpdateInput - GraphQL Admin
description: The input fields used to update a carrier service.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceUpdateInput.md
---

# Delivery​Carrier​Service​Update​Input

input\_object

The input fields used to update a carrier service.

## Fields

* active

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether this carrier service is active. If `true`, then the service will be available to serve rates in checkout.

* callback​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL endpoint that Shopify needs to retrieve shipping rates. This must be a public URL.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The global ID of the carrier service to update.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the shipping service as seen by merchants and their customers.

* supports​Service​Discovery

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether merchants are able to send dummy data to your service through the Shopify admin to see shipping rate examples.

***

## Map

No referencing types
