---
title: CompanyDeletePayload - GraphQL Admin
description: Return type for `companyDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyDeletePayload.md
---

# Company​Delete​Payload

payload

Return type for `companyDelete` mutation.

## Fields

* deleted​Company​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted company.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyDelete)

  mutation

  Deletes a company.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to delete.

  ***

***

## Map

### Mutations with this payload

* [company​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/companyDelete)
