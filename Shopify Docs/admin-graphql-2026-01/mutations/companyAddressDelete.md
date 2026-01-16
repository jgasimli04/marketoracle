---
title: companyAddressDelete - GraphQL Admin
description: Deletes a company address.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAddressDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAddressDelete.md
---

# company​Address​Delete

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Deletes a company address.

## Arguments

* address​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the address to delete.

***

## Company​Address​Delete​Payload returns

* deleted​Address​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted address.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyAddressDelete reference

## Mutation Reference

```graphql
mutation companyAddressDelete($addressId: ID!) {
  companyAddressDelete(addressId: $addressId) {
    deletedAddressId
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
  "addressId": "gid://shopify/<objectName>/10079785100"
}
```
