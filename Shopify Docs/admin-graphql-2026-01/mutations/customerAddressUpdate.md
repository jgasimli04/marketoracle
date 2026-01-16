---
title: customerAddressUpdate - GraphQL Admin
description: >-
  Updates a
  [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s
  [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress).
  You can modify any field of the address and optionally set it as the
  customer's default address.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressUpdate.md
---

# customer​Address​Update

mutation

Requires `write_customers` access scope.

Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress). You can modify any field of the address and optionally set it as the customer's default address.

## Arguments

* address

  [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

  required

  Specifies the fields to use when updating the address.

* address​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the address to update.

* customer​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the customer whose address is being updated.

* set​As​Default

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether to set the address as the customer's default address.

***

## Customer​Address​Update​Payload returns

* address

  [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  The updated address.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### customerAddressUpdate reference

## Mutation Reference

```graphql
mutation customerAddressUpdate($customerId: ID!, $addressId: ID!, $address: MailingAddressInput!, $setAsDefault: Boolean) {
  customerAddressUpdate(customerId: $customerId, addressId: $addressId, address: $address, setAsDefault: $setAsDefault) {
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
  "addressId": "gid://shopify/<objectName>/10079785100",
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
