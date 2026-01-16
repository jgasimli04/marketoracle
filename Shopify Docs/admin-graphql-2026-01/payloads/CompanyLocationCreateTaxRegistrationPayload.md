---
title: CompanyLocationCreateTaxRegistrationPayload - GraphQL Admin
description: Return type for `companyLocationCreateTaxRegistration` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationCreateTaxRegistrationPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationCreateTaxRegistrationPayload.md
---

# Company​Location​Create​Tax​Registration​Payload

payload

Return type for `companyLocationCreateTaxRegistration` mutation.

## Fields

* company​Location

  [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  The company location with the created tax registration.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Location​Create​Tax​Registration](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationCreateTaxRegistration)

  mutation

  Deprecated

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location that the tax registration gets assigned to.

  * tax​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The unique tax id for the tax registration.

  ***

***

## Map
