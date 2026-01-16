---
title: CompanyLocationAssignStaffMembersPayload - GraphQL Admin
description: Return type for `companyLocationAssignStaffMembers` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationAssignStaffMembersPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationAssignStaffMembersPayload.md
---

# Company​Location​Assign​Staff​Members​Payload

payload

Return type for `companyLocationAssignStaffMembers` mutation.

## Fields

* company​Location​Staff​Member​Assignments

  [\[Company​Location​Staff​Member​Assignment!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignment)

  The list of created staff member assignments.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Location​Assign​Staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignStaffMembers)

  mutation

  Creates one or more mappings between a staff member at a shop and a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to assign the staff member to.

  * staff​Member​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The list of IDs of the staff members to assign.

  ***

***

## Map

### Mutations with this payload

* [company​Location​Assign​Staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/types/companyLocationAssignStaffMembers)
