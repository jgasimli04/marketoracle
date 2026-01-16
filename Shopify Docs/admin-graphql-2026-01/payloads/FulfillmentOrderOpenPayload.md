---
title: FulfillmentOrderOpenPayload - GraphQL Admin
description: Return type for `fulfillmentOrderOpen` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderOpenPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderOpenPayload.md
---

# Fulfillment​Order​Open​Payload

payload

Return type for `fulfillmentOrderOpen` mutation.

## Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order that was transitioned to open and is fulfillable.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Order​Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderOpen)

  mutation

  Marks a scheduled fulfillment order as open.

  From API version 2026-01, this will also mark a fulfillment order as open when it is assigned to a merchant managed location and has had progress reported.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to mark as open.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Order​Open](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrderOpen)
