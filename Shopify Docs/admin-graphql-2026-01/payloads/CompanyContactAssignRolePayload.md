---
title: CompanyContactAssignRolePayload - GraphQL Admin
description: Return type for `companyContactAssignRole` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactAssignRolePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactAssignRolePayload.md
---

# Company​Contact​Assign​Role​Payload

payload

Return type for `companyContactAssignRole` mutation.

## Fields

* company​Contact​Role​Assignment

  [Company​Contact​Role​Assignment](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment)

  The company contact role assignment.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Contact​Assign​Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRole)

  mutation

  Assigns a role to a contact for a location.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the contact to assign a role to.

  * company​Contact​Role​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the role to assign to a contact.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the location to assign a role to a contact.

  ***

***

## Map

### Mutations with this payload

* [company​Contact​Assign​Role](https://shopify.dev/docs/api/admin-graphql/latest/types/companyContactAssignRole)
