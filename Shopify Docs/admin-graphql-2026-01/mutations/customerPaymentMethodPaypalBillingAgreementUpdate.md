---
title: customerPaymentMethodPaypalBillingAgreementUpdate - GraphQL Admin
description: Updates a PayPal billing agreement for a customer.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodPaypalBillingAgreementUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodPaypalBillingAgreementUpdate.md
---

# customer​Payment​Method​Paypal​Billing​Agreement​Update

mutation

Requires `write_customers` access scope. Also: Requires `write_customer_payment_methods` scope.

Updates a PayPal billing agreement for a customer.

## Arguments

* billing​Address

  [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

  required

  The billing address.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the customer payment method.

***

## Customer​Payment​Method​Paypal​Billing​Agreement​Update​Payload returns

* customer​Payment​Method

  [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  The customer payment method.

* user​Errors

  [\[Customer​Payment​Method​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### customerPaymentMethodPaypalBillingAgreementUpdate reference

## Mutation Reference

```graphql
mutation customerPaymentMethodPaypalBillingAgreementUpdate($id: ID!, $billingAddress: MailingAddressInput!) {
  customerPaymentMethodPaypalBillingAgreementUpdate(id: $id, billingAddress: $billingAddress) {
    customerPaymentMethod {
      # CustomerPaymentMethod fields
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
  "id": "gid://shopify/<objectName>/10079785100",
  "billingAddress": {
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
  }
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
