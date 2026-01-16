---
title: FulfillmentServiceDeletePayload - GraphQL Admin
description: Return type for `fulfillmentServiceDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentServiceDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentServiceDeletePayload.md
---

# Fulfillment​Service​Delete​Payload

payload

Return type for `fulfillmentServiceDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted fulfillment service.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Service​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceDelete)

  mutation

  Deletes a fulfillment service.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment service to delete.

  * destination​Location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an active merchant managed location where inventory and commitments will be relocated after the fulfillment service is deleted.

    Inventory will only be transferred if the [`TRANSFER`](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentServiceDeleteInventoryAction#value-transfer) inventory action has been chosen.

  * inventory​Action

    [Fulfillment​Service​Delete​Inventory​Action](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentServiceDeleteInventoryAction)

    Default:TRANSFER

    The action to take with the location after the fulfillment service is deleted.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Service​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentServiceDelete)
