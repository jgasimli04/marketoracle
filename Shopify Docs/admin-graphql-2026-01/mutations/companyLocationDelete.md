---
title: companyLocationDelete - GraphQL Admin
description: Deletes a company location.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationDelete.md
---

# company​Location​Delete

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Deletes a company location.

## Arguments

* company​Location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the company location to delete.

***

## Company​Location​Delete​Payload returns

* deleted​Company​Location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyLocationDelete reference

## Mutation Reference

```graphql
mutation companyLocationDelete($companyLocationId: ID!) {
  companyLocationDelete(companyLocationId: $companyLocationId) {
    deletedCompanyLocationId
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
  "companyLocationId": "gid://shopify/<objectName>/10079785100"
}
```
