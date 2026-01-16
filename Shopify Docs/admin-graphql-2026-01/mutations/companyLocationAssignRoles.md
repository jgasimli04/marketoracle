---
title: companyLocationAssignRoles - GraphQL Admin
description: Assigns roles on a company location.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignRoles
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignRoles.md
---

# company​Location​Assign​Roles

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Assigns roles on a company location.

## Arguments

* company​Location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The location whose roles are being assigned.

* roles​To​Assign

  [\[Company​Location​Role​Assign!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationRoleAssign)

  required

  The roles to assign.

***

## Company​Location​Assign​Roles​Payload returns

* role​Assignments

  [\[Company​Contact​Role​Assignment!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment)

  A list of newly created assignments of company contacts to a company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyLocationAssignRoles reference

## Mutation Reference

```graphql
mutation companyLocationAssignRoles($companyLocationId: ID!, $rolesToAssign: [CompanyLocationRoleAssign!]!) {
  companyLocationAssignRoles(companyLocationId: $companyLocationId, rolesToAssign: $rolesToAssign) {
    roleAssignments {
      # CompanyContactRoleAssignment fields
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
  "companyLocationId": "gid://shopify/<objectName>/10079785100",
  "rolesToAssign": [
    {
      "companyContactRoleId": "gid://shopify/<objectName>/10079785100",
      "companyContactId": "gid://shopify/<objectName>/10079785100"
    }
  ]
}
```

##### Schema

```graphql
input CompanyLocationRoleAssign {
  companyContactRoleId: ID!
  companyContactId: ID!
}
```
