---
title: CompanyLocationInput - GraphQL Admin
description: >-
  The input fields for company location when creating or updating a company
  location.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationInput.md
---

# Company​Location​Input

input\_object

The input fields for company location when creating or updating a company location.

## Fields

* billing​Address

  [Company​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyAddressInput)

  The input fields to create or update the billing address for a company location.

* billing​Same​As​Shipping

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the billing address is the same as the shipping address. If the value is true, then the input for `billingAddress` is ignored.

* buyer​Experience​Configuration

  [Buyer​Experience​Configuration​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BuyerExperienceConfigurationInput)

  The configuration for the buyer's checkout at the company location.

* external​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique externally-supplied ID for the company location.

* locale

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The preferred locale of the company location.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the company location.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A note about the company location.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The phone number of the company location.

* shipping​Address

  [Company​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyAddressInput)

  The input fields to create or update the shipping address for a company location.

* tax​Exempt

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the location is exempt from taxes.

* tax​Exemptions

  [\[Tax​Exemption!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

  The list of tax exemptions to apply to the company location.

* tax​Registration​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The tax registration ID of the company location.

***

## Input objects using this input

* [Company​Create​Input.companyLocation](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyCreateInput#fields-companyLocation)

  INPUT OBJECT

  The input fields and values for creating a company and its associated resources.

***

## Map

### Input objects using this input

* [Company​Create​Input.companyLocation](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyCreateInput#fields-companyLocation)
