---
title: DeliveryProfileRemovePayload - GraphQL Admin
description: Return type for `deliveryProfileRemove` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryProfileRemovePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryProfileRemovePayload.md
---

# Delivery​Profile​Remove​Payload

payload

Return type for `deliveryProfileRemove` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The delivery profile deletion job triggered by the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [delivery​Profile​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileRemove)

  mutation

  Enqueue the removal of a delivery profile.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the delivery profile to remove.

  ***

***

## Map

### Mutations with this payload

* [delivery​Profile​Remove](https://shopify.dev/docs/api/admin-graphql/latest/types/deliveryProfileRemove)
