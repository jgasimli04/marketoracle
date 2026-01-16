---
title: companyContactRevokeRole - GraphQL Admin
description: Revokes a role on a company contact.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRevokeRole
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRevokeRole.md
---

# company​Contact​Revoke​Role

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Revokes a role on a company contact.

## Arguments

* company​Contact​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the contact to revoke a role from.

* company​Contact​Role​Assignment​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the role assignment to revoke from a contact.

***

## Company​Contact​Revoke​Role​Payload returns

* revoked​Company​Contact​Role​Assignment​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The role assignment that was revoked.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyContactRevokeRole reference

## Mutation Reference

```graphql
mutation companyContactRevokeRole($companyContactId: ID!, $companyContactRoleAssignmentId: ID!) {
  companyContactRevokeRole(companyContactId: $companyContactId, companyContactRoleAssignmentId: $companyContactRoleAssignmentId) {
    revokedCompanyContactRoleAssignmentId
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
  "companyContactRoleAssignmentId": "gid://shopify/<objectName>/10079785100"
}
```
