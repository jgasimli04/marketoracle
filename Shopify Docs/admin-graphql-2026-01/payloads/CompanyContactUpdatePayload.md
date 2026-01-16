---
title: CompanyContactUpdatePayload - GraphQL Admin
description: Return type for `companyContactUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactUpdatePayload.md
---

# Company​Contact​Update​Payload

payload

Return type for `companyContactUpdate` mutation.

## Fields

* company​Contact

  [Company​Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

  The updated company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Contact​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactUpdate)

  mutation

  Updates a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company contact to be updated.

  * input

    [Company​Contact​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactInput)

    required

    The fields to use to update the company contact.

  ***

***

## Map

### Mutations with this payload

* [company​Contact​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/companyContactUpdate)
