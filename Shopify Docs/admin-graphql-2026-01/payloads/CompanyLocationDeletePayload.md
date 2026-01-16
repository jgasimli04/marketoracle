---
title: CompanyLocationDeletePayload - GraphQL Admin
description: Return type for `companyLocationDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationDeletePayload.md
---

# Company​Location​Delete​Payload

payload

Return type for `companyLocationDelete` mutation.

## Fields

* deleted​Company​Location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Location​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationDelete)

  mutation

  Deletes a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to delete.

  ***

***

## Map

### Mutations with this payload

* [company​Location​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/companyLocationDelete)
