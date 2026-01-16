---
title: DeliveryPromiseParticipantsUpdatePayload - GraphQL Admin
description: Return type for `deliveryPromiseParticipantsUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryPromiseParticipantsUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryPromiseParticipantsUpdatePayload.md
---

# Delivery​Promise​Participants​Update​Payload

payload

Return type for `deliveryPromiseParticipantsUpdate` mutation.

## Fields

* promise​Participants

  [\[Delivery​Promise​Participant!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseParticipant)

  The promise participants that were added.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [delivery​Promise​Participants​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryPromiseParticipantsUpdate)

  mutation

  Updates the delivery promise participants by adding or removing owners based on a branded promise handle.

  * branded​Promise​Handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The branded promise handle to update the delivery promise participants for.

  * owners​To​Add

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Default:\[]

    The owners to add to the delivery promise participants.

  * owners​To​Remove

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Default:\[]

    The owners to remove from the delivery promise participants.

  ***

***

## Map

### Mutations with this payload

* [delivery​Promise​Participants​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/deliveryPromiseParticipantsUpdate)
