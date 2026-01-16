---
title: customerAddressCreate - GraphQL Admin
description: >-
  Creates a new
  [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)
  for a
  [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer).
  You can optionally set the address as the customer's default address.


  You can only add addresses to existing customers. Each customer can have
  multiple addresses.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressCreate.md
---

# customer​Address​Create

mutation

Requires `write_customers` access scope.

Creates a new [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) for a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer). You can optionally set the address as the customer's default address.

You can only add addresses to existing customers. Each customer can have multiple addresses.

## Arguments

* address

  [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

  required

  Specifies the fields to use when creating the address.

* customer​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the customer.

* set​As​Default

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether to set the address as the customer's default address.

***

## Customer​Address​Create​Payload returns

* address

  [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  The created address.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### customerAddressCreate reference

## Mutation Reference

```graphql
mutation customerAddressCreate($customerId: ID!, $address: MailingAddressInput!, $setAsDefault: Boolean) {
  customerAddressCreate(customerId: $customerId, address: $address, setAsDefault: $setAsDefault) {
    address {
      # MailingAddress fields
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
  "customerId": "gid://shopify/<objectName>/10079785100",
  "address": {
    "address1": "<your-address1>",
    "address2": "<your-address2>",
    "city": "<your-city>",
    "company": "<your-company>",
    "countryCode": "AF",
    "firstName": "<your-firstName>",
    "lastName": "<your-lastName>",
    "phone": "<your-phone>",
    "provinceCode": "<your-provinceCode>",
    "zip": "<your-zip>"
  },
  "setAsDefault": true
}
```

##### Schema

```graphql
input MailingAddressInput {
  address1: String
  address2: String
  city: String
  company: String
  countryCode: CountryCode
  firstName: String
  lastName: String
  phone: String
  provinceCode: String
  zip: String
}
```
