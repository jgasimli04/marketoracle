---
title: CompanyAssignCustomerAsContactPayload - GraphQL Admin
description: Return type for `companyAssignCustomerAsContact` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyAssignCustomerAsContactPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyAssignCustomerAsContactPayload.md
---

# Company​Assign​Customer​As​Contact​Payload

payload

Return type for `companyAssignCustomerAsContact` mutation.

## Fields

* company​Contact

  [Company​Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

  The created company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Assign​Customer​As​Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAssignCustomerAsContact)

  mutation

  Adds an existing [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) as a contact to a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company). Companies are business entities that make purchases from the merchant's store. Use this mutation when you have a customer who needs to be associated with a B2B company to make purchases on behalf of that company.

  The mutation returns the newly created [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) that links the customer to the company. After assignment, the customer becomes a company contact who can place orders on behalf of the company with access to any catalogs, pricing, and payment terms configured for the company's locations.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to assign the contact to.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer to assign as the contact.

  ***

***

## Map

### Mutations with this payload

* [company​Assign​Customer​As​Contact](https://shopify.dev/docs/api/admin-graphql/latest/types/companyAssignCustomerAsContact)
