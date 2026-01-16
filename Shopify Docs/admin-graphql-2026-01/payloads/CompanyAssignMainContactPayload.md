---
title: CompanyAssignMainContactPayload - GraphQL Admin
description: Return type for `companyAssignMainContact` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyAssignMainContactPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyAssignMainContactPayload.md
---

# Company​Assign​Main​Contact​Payload

payload

Return type for `companyAssignMainContact` mutation.

## Fields

* company

  [Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

  The company for which the main contact is assigned.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Assign​Main​Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAssignMainContact)

  mutation

  Assigns the main contact for the company.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to assign the main contact to.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the company contact to be assigned as the main contact.

  ***

***

## Map

### Mutations with this payload

* [company​Assign​Main​Contact](https://shopify.dev/docs/api/admin-graphql/latest/types/companyAssignMainContact)
