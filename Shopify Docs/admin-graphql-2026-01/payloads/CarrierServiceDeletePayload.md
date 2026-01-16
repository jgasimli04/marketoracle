---
title: CarrierServiceDeletePayload - GraphQL Admin
description: Return type for `carrierServiceDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CarrierServiceDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CarrierServiceDeletePayload.md
---

# Carrier​Service​Delete​Payload

payload

Return type for `carrierServiceDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted carrier service.

* user​Errors

  [\[Carrier​Service​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [carrier​Service​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceDelete)

  mutation

  Removes an existing carrier service.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the carrier service to delete.

  ***

***

## Map

### Mutations with this payload

* [carrier​Service​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/carrierServiceDelete)
