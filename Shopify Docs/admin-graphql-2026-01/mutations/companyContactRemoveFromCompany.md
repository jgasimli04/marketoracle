---
title: companyContactRemoveFromCompany - GraphQL Admin
description: Removes a company contact from a Company.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRemoveFromCompany
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRemoveFromCompany.md
---

# company​Contact​Remove​From​Company

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Removes a company contact from a Company.

## Arguments

* company​Contact​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the company contact to remove from the Company.

***

## Company​Contact​Remove​From​Company​Payload returns

* removed​Company​Contact​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the removed company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyContactRemoveFromCompany reference

## Mutation Reference

```graphql
mutation companyContactRemoveFromCompany($companyContactId: ID!) {
  companyContactRemoveFromCompany(companyContactId: $companyContactId) {
    removedCompanyContactId
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
  "companyContactId": "gid://shopify/<objectName>/10079785100"
}
```
