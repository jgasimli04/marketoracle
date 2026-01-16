---
title: CompanyLocationCreatePayload - GraphQL Admin
description: Return type for `companyLocationCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationCreatePayload.md
---

# Company​Location​Create​Payload

payload

Return type for `companyLocationCreate` mutation.

## Fields

* company​Location

  [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  The created company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Location​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationCreate)

  mutation

  Creates a new location for a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company). Company locations are branches or offices where B2B customers can place orders with specific pricing, catalogs, and payment terms.

  Creates a company location. Each location can have its own billing and shipping addresses, tax settings, and [`buyer experience configuration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration). You can assign [staff members](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) and [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) objects to manage the location.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company that the company location belongs to.

  * input

    [Company​Location​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationInput)

    required

    The fields to use to create the company location.

  ***

***

## Map

### Mutations with this payload

* [company​Location​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/companyLocationCreate)
