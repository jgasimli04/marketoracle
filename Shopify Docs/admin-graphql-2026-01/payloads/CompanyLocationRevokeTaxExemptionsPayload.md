---
title: CompanyLocationRevokeTaxExemptionsPayload - GraphQL Admin
description: Return type for `companyLocationRevokeTaxExemptions` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationRevokeTaxExemptionsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationRevokeTaxExemptionsPayload.md
---

# Company​Location​Revoke​Tax​Exemptions​Payload

payload

Return type for `companyLocationRevokeTaxExemptions` mutation.

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

* [company​Location​Revoke​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRevokeTaxExemptions)

  mutation

  Deprecated

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location from which the tax exemptions will be revoked.

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    required

    The tax exemptions that are being revoked from the location.

  ***

***

## Map
