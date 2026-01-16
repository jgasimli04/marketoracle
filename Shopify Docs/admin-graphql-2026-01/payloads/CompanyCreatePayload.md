---
title: CompanyCreatePayload - GraphQL Admin
description: Return type for `companyCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyCreatePayload.md
---

# Company​Create​Payload

payload

Return type for `companyCreate` mutation.

## Fields

* company

  [Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

  The created company.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyCreate)

  mutation

  Creates a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) for B2B commerce. This mutation creates the company and can optionally create an initial [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) and [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) in a single operation. Company contacts are people who place orders on behalf of the company. Company locations are branches or offices with their own billing and shipping addresses.

  ***

  Note

  Creating a company without a `name` [returns an error](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate?example=creating-a-company-without-a-name-returns-an-error).

  ***

  Learn more about [creating companies for B2B](https://shopify.dev/docs/apps/build/b2b/start-building#step-1-create-a-company).

  * input

    [Company​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyCreateInput)

    required

    ### Arguments

    The fields to use when creating the company.

  ***

***

## Map

### Mutations with this payload

* [company​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/companyCreate)
