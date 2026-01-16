---
title: CompanyAddressInput - GraphQL Admin
description: The input fields to create or update the address of a company location.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyAddressInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyAddressInput.md
---

# Company​Address​Input

input\_object

The input fields to create or update the address of a company location.

## Fields

* address1

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first line of the address. Typically the street address or PO Box number.

* address2

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The second line of the address. Typically the number of the apartment, suite, or unit.

* city

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the city, district, village, or town.

* country​Code

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The two-letter code (\[ISO 3166-1 alpha-2]]\(<https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2>) format) for the country of the address. For example, \`US\`\` for the United States.

* first​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first name of the recipient.

* last​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The last name of the recipient.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A phone number for the recipient. Formatted using E.164 standard. For example, *+16135551111*.

* recipient

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The identity of the recipient e.g. 'Receiving Department'.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The zip or postal code of the address.

* zone​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The alphanumeric code for the region of the address, such as the province, state, or district. For example, `ON` for Ontario, Canada.

***

## Input objects using this input

* [Company​Location​Input.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationInput#fields-billingAddress)

  INPUT OBJECT

  The input fields for company location when creating or updating a company location.

* [Company​Location​Input.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationInput#fields-shippingAddress)

  INPUT OBJECT

  The input fields for company location when creating or updating a company location.

***

## Map

### Input objects using this input

* [Company​Location​Input.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationInput#fields-billingAddress)
* [Company​Location​Input.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationInput#fields-shippingAddress)
