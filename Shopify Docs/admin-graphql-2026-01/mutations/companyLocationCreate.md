---
title: companyLocationCreate - GraphQL Admin
description: >-
  Creates a new location for a
  [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company).
  Company locations are branches or offices where B2B customers can place orders
  with specific pricing, catalogs, and payment terms.


  Creates a company location. Each location can have its own billing and
  shipping addresses, tax settings, and [`buyer experience
  configuration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration).
  You can assign [staff
  members](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)
  and
  [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)
  objects to manage the location.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationCreate.md
---

# company​Location​Create

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Creates a new location for a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company). Company locations are branches or offices where B2B customers can place orders with specific pricing, catalogs, and payment terms.

Creates a company location. Each location can have its own billing and shipping addresses, tax settings, and [`buyer experience configuration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration). You can assign [staff members](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) and [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) objects to manage the location.

## Arguments

* company​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the company that the company location belongs to.

* input

  [Company​Location​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationInput)

  required

  The fields to use to create the company location.

***

## Company​Location​Create​Payload returns

* company​Location

  [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  The created company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyLocationCreate reference

## Mutation Reference

```graphql
mutation companyLocationCreate($companyId: ID!, $input: CompanyLocationInput!) {
  companyLocationCreate(companyId: $companyId, input: $input) {
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
  "companyId": "gid://shopify/<objectName>/10079785100",
  "input": {
    "name": "<your-name>",
    "phone": "<your-phone>",
    "locale": "<your-locale>",
    "externalId": "<your-externalId>",
    "note": "<your-note>",
    "buyerExperienceConfiguration": {
      "checkoutToDraft": true,
      "paymentTermsTemplateId": "gid://shopify/<objectName>/10079785100",
      "editableShippingAddress": true,
      "deposit": {}
    },
    "billingAddress": {
      "address1": "<your-address1>",
      "address2": "<your-address2>",
      "city": "<your-city>",
      "zip": "<your-zip>",
      "recipient": "<your-recipient>",
      "firstName": "<your-firstName>",
      "lastName": "<your-lastName>",
      "phone": "<your-phone>",
      "zoneCode": "<your-zoneCode>",
      "countryCode": "AF"
    },
    "shippingAddress": {
      "address1": "<your-address1>",
      "address2": "<your-address2>",
      "city": "<your-city>",
      "zip": "<your-zip>",
      "recipient": "<your-recipient>",
      "firstName": "<your-firstName>",
      "lastName": "<your-lastName>",
      "phone": "<your-phone>",
      "zoneCode": "<your-zoneCode>",
      "countryCode": "AF"
    },
    "billingSameAsShipping": true,
    "taxRegistrationId": "<your-taxRegistrationId>",
    "taxExemptions": [
      "CA_STATUS_CARD_EXEMPTION"
    ],
    "taxExempt": true
  }
}
```

##### Schema

```graphql
input CompanyLocationInput {
  name: String
  phone: String
  locale: String
  externalId: String
  note: String
  buyerExperienceConfiguration: BuyerExperienceConfigurationInput
  billingAddress: CompanyAddressInput
  shippingAddress: CompanyAddressInput
  billingSameAsShipping: Boolean
  taxRegistrationId: String
  taxExemptions: [TaxExemption!]
  taxExempt: Boolean
}

input BuyerExperienceConfigurationInput {
  checkoutToDraft: Boolean
  paymentTermsTemplateId: ID
  editableShippingAddress: Boolean
  deposit: DepositInput
}

input CompanyAddressInput {
  address1: String
  address2: String
  city: String
  zip: String
  recipient: String
  firstName: String
  lastName: String
  phone: String
  zoneCode: String
  countryCode: CountryCode
}
```
