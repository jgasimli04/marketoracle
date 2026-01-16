---
title: CompanyContactRemoveFromCompanyPayload - GraphQL Admin
description: Return type for `companyContactRemoveFromCompany` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactRemoveFromCompanyPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactRemoveFromCompanyPayload.md
---

# Company​Contact​Remove​From​Company​Payload

payload

Return type for `companyContactRemoveFromCompany` mutation.

## Fields

* removed​Company​Contact​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the removed company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Contact​Remove​From​Company](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRemoveFromCompany)

  mutation

  Removes a company contact from a Company.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company contact to remove from the Company.

  ***

***

## Map

### Mutations with this payload

* [company​Contact​Remove​From​Company](https://shopify.dev/docs/api/admin-graphql/latest/types/companyContactRemoveFromCompany)
