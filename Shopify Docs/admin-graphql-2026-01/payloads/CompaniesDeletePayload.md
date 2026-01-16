---
title: CompaniesDeletePayload - GraphQL Admin
description: Return type for `companiesDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompaniesDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompaniesDeletePayload.md
---

# Companies​Delete​Payload

payload

Return type for `companiesDelete` mutation.

## Fields

* deleted​Company​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of IDs of the deleted companies.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [companies​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companiesDelete)

  mutation

  Deletes a list of companies.

  * company​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of IDs of companies to delete.

  ***

***

## Map

### Mutations with this payload

* [companies​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/companiesDelete)
