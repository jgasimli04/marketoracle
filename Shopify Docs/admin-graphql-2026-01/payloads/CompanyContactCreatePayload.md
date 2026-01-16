---
title: CompanyContactCreatePayload - GraphQL Admin
description: Return type for `companyContactCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactCreatePayload.md
---

# Company​Contact​Create​Payload

payload

Return type for `companyContactCreate` mutation.

## Fields

* company​Contact

  [Company​Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

  The created company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Contact​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactCreate)

  mutation

  Creates a company contact and the associated customer.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company that the company contact belongs to.

  * input

    [Company​Contact​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactInput)

    required

    The fields to use to create the company contact.

  ***

***

## Map

### Mutations with this payload

* [company​Contact​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/companyContactCreate)
