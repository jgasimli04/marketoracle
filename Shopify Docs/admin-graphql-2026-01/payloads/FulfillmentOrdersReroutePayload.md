---
title: FulfillmentOrdersReroutePayload - GraphQL Admin
description: Return type for `fulfillmentOrdersReroute` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrdersReroutePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrdersReroutePayload.md
---

# Fulfillment​Orders​Reroute​Payload

payload

Return type for `fulfillmentOrdersReroute` mutation.

## Fields

* moved​Fulfillment​Orders

  [\[Fulfillment​Order!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment orders which contains the moved line items.

* user​Errors

  [\[Fulfillment​Orders​Reroute​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrdersRerouteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Orders​Reroute](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrdersReroute)

  mutation

  Route the fulfillment orders to an alternative location, according to the shop's order routing settings. This involves:

  * Finding an alternate location that can fulfill the fulfillment orders.
  * Assigning the fulfillment orders to the new location.

  - fulfillment​Order​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The list of IDs of the fulfillment orders.

  - included​Location​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The list of IDs of the locations to include for rerouting. By default, all locations are included.

  - excluded​Location​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The list of IDs of the locations to exclude for rerouting. Excluded locations specified here take precedence over included locations provided through included\_location\_ids.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Orders​Reroute](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrdersReroute)
