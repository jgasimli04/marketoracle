---
title: CompanyAddressDeletePayload - GraphQL Admin
description: Return type for `companyAddressDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyAddressDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyAddressDeletePayload.md
---

# Company​Address​Delete​Payload

payload

Return type for `companyAddressDelete` mutation.

## Fields

* deleted​Address​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted address.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Address​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAddressDelete)

  mutation

  Deletes a company address.

  * address​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the address to delete.

  ***

***

## Map

### Mutations with this payload

* [company​Address​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/companyAddressDelete)
