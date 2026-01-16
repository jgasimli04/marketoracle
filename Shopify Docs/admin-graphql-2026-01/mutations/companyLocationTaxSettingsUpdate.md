---
title: companyLocationTaxSettingsUpdate - GraphQL Admin
description: Sets the tax settings for a company location.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationTaxSettingsUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationTaxSettingsUpdate.md
---

# company​Location​Tax​Settings​Update

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Sets the tax settings for a company location.

## Arguments

* company​Location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the company location that the tax settings get assigned to.

* exemptions​To​Assign

  [\[Tax​Exemption!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

  The list of tax exemptions to assign to the company location.

* exemptions​To​Remove

  [\[Tax​Exemption!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

  The list of tax exemptions to remove from the company location.

* tax​Exempt

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the location is exempt from taxes.

* tax​Registration​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The unique tax registration ID for the company location.

***

## Company​Location​Tax​Settings​Update​Payload returns

* company​Location

  [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  The company location with the updated tax settings.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyLocationTaxSettingsUpdate reference

## Mutation Reference

```graphql
mutation companyLocationTaxSettingsUpdate($companyLocationId: ID!, $taxRegistrationId: String, $taxExempt: Boolean, $exemptionsToAssign: [TaxExemption!], $exemptionsToRemove: [TaxExemption!]) {
  companyLocationTaxSettingsUpdate(companyLocationId: $companyLocationId, taxRegistrationId: $taxRegistrationId, taxExempt: $taxExempt, exemptionsToAssign: $exemptionsToAssign, exemptionsToRemove: $exemptionsToRemove) {
    companyLocation {
      # CompanyLocation fields
    }
    userErrors {
      field
      message
    }
  }
}
```

## Input

##### Variables

```json
{
  "companyLocationId": "gid://shopify/<objectName>/10079785100",
  "taxRegistrationId": "<your-taxRegistrationId>",
  "taxExempt": true,
  "exemptionsToAssign": [
    "CA_STATUS_CARD_EXEMPTION"
  ],
  "exemptionsToRemove": [
    "CA_STATUS_CARD_EXEMPTION"
  ]
}
```
