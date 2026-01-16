---
title: CompanyContactDeletePayload - GraphQL Admin
description: Return type for `companyContactDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactDeletePayload.md
---

# Company​Contact​Delete​Payload

payload

Return type for `companyContactDelete` mutation.

## Fields

* deleted​Company​Contact​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Contact​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactDelete)

  mutation

  Deletes a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company contact to delete.

  ***

***

## Map

### Mutations with this payload

* [company​Contact​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/companyContactDelete)
