---
title: CompanyLocationRevokeTaxRegistrationPayload - GraphQL Admin
description: Return type for `companyLocationRevokeTaxRegistration` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationRevokeTaxRegistrationPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationRevokeTaxRegistrationPayload.md
---

# Company​Location​Revoke​Tax​Registration​Payload

payload

Return type for `companyLocationRevokeTaxRegistration` mutation.

## Fields

* company​Location

  [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  The updated company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Location​Revoke​Tax​Registration](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRevokeTaxRegistration)

  mutation

  Deprecated

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location whose tax registration is being revoked.

  ***

***

## Map
