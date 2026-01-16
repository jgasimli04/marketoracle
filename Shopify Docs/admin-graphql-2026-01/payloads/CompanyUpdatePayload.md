---
title: CompanyUpdatePayload - GraphQL Admin
description: Return type for `companyUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyUpdatePayload.md
---

# Company​Update​Payload

payload

Return type for `companyUpdate` mutation.

## Fields

* company

  [Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

  The updated company.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyUpdate)

  mutation

  Updates a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) with new information. Companies represent business customers that can have multiple contacts and locations with specific pricing, payment terms, and checkout settings.

  The mutation accepts the company's ID and an input object containing the fields to update. You can modify the company name, add or update internal notes, set an external ID for integration with other systems, or adjust the customer relationship start date.

  Learn more about [building B2B features](https://shopify.dev/docs/apps/build/b2b/start-building).

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to be updated.

  * input

    [Company​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyInput)

    required

    The input fields to update the company.

  ***

***

## Map

### Mutations with this payload

* [company​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/companyUpdate)
