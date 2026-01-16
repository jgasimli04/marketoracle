---
title: companyContactUpdate - GraphQL Admin
description: Updates a company contact.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactUpdate.md
---

# company​Contact​Update

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Updates a company contact.

## Arguments

* company​Contact​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the company contact to be updated.

* input

  [Company​Contact​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactInput)

  required

  The fields to use to update the company contact.

***

## Company​Contact​Update​Payload returns

* company​Contact

  [Company​Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

  The updated company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyContactUpdate reference

## Mutation Reference

```graphql
mutation companyContactUpdate($companyContactId: ID!, $input: CompanyContactInput!) {
  companyContactUpdate(companyContactId: $companyContactId, input: $input) {
    companyContact {
      # CompanyContact fields
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
  "companyContactId": "gid://shopify/<objectName>/10079785100",
  "input": {
    "firstName": "<your-firstName>",
    "lastName": "<your-lastName>",
    "email": "<your-email>",
    "title": "<your-title>",
    "locale": "<your-locale>",
    "phone": "<your-phone>"
  }
}
```

##### Schema

```graphql
input CompanyContactInput {
  firstName: String
  lastName: String
  email: String
  title: String
  locale: String
  phone: String
}
```
