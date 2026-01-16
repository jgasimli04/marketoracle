---
title: customerPaymentMethodCreditCardUpdate - GraphQL Admin
description: Updates the credit card payment method for a customer.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodCreditCardUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodCreditCardUpdate.md
---

# customer​Payment​Method​Credit​Card​Update

mutation

Requires `write_customers` access scope. Also: Requires `write_customer_payment_methods` scope.

Updates the credit card payment method for a customer.

## Arguments

* billing​Address

  [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

  required

  The billing address.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the customer payment method.

* session​Id

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  The Cardserver session ID.

***

## Customer​Payment​Method​Credit​Card​Update​Payload returns

* customer​Payment​Method

  [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  The customer payment method.

* processing

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  If the card verification result is processing. When this is true, customer\_payment\_method will be null.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### customerPaymentMethodCreditCardUpdate reference

## Mutation Reference

```graphql
mutation customerPaymentMethodCreditCardUpdate($id: ID!, $billingAddress: MailingAddressInput!, $sessionId: String!) {
  customerPaymentMethodCreditCardUpdate(id: $id, billingAddress: $billingAddress, sessionId: $sessionId) {
    customerPaymentMethod {
      # CustomerPaymentMethod fields
    }
    processing
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
  },
  "sessionId": "<your-sessionId>"
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
