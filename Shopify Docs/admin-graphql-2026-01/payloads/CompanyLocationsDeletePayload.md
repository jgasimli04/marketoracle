---
title: CompanyLocationsDeletePayload - GraphQL Admin
description: Return type for `companyLocationsDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationsDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationsDeletePayload.md
---

# Company​Locations​Delete​Payload

payload

Return type for `companyLocationsDelete` mutation.

## Fields

* deleted​Company​Location​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of IDs of the deleted company locations.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Locations​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationsDelete)

  mutation

  Deletes a list of company locations.

  * company​Location​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of IDs of company locations to delete.

  ***

***

## Map

### Mutations with this payload

* [company​Locations​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/companyLocationsDelete)
