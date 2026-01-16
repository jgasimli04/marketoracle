---
title: CompanyLocationTaxSettingsUpdatePayload - GraphQL Admin
description: Return type for `companyLocationTaxSettingsUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationTaxSettingsUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationTaxSettingsUpdatePayload.md
---

# Company​Location​Tax​Settings​Update​Payload

payload

Return type for `companyLocationTaxSettingsUpdate` mutation.

## Fields

* company​Location

  [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  The company location with the updated tax settings.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Location​Tax​Settings​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationTaxSettingsUpdate)

  mutation

  Sets the tax settings for a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location that the tax settings get assigned to.

  * tax​Registration​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The unique tax registration ID for the company location.

  * tax​Exempt

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the location is exempt from taxes.

  * exemptions​To​Assign

    [\[Tax​Exemption!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    The list of tax exemptions to assign to the company location.

  * exemptions​To​Remove

    [\[Tax​Exemption!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    The list of tax exemptions to remove from the company location.

  ***

***

## Map

### Mutations with this payload

* [company​Location​Tax​Settings​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/companyLocationTaxSettingsUpdate)
