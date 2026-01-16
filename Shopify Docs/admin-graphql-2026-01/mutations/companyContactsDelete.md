---
title: companyContactsDelete - GraphQL Admin
description: Deletes one or more company contacts.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactsDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactsDelete.md
---

# company​Contacts​Delete

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Deletes one or more company contacts.

## Arguments

* company​Contact​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The list of IDs of the company contacts to delete.

***

## Company​Contacts​Delete​Payload returns

* deleted​Company​Contact​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of IDs of the deleted company contacts.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyContactsDelete reference

## Mutation Reference

```graphql
mutation companyContactsDelete($companyContactIds: [ID!]!) {
  companyContactsDelete(companyContactIds: $companyContactIds) {
    deletedCompanyContactIds
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
  "companyContactIds": [
    "gid://shopify/<objectName>/10079785100"
  ]
}
```
