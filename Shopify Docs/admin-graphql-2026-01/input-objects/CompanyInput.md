---
title: CompanyInput - GraphQL Admin
description: The input fields for company attributes when creating or updating a company.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyInput'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyInput.md
---

# Company​Input

input\_object

The input fields for company attributes when creating or updating a company.

## Fields

* customer​Since

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company became the customer.

* external​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique externally-supplied ID for the company.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the company.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A note about the company.

***

## Input objects using this input

* [Company​Create​Input.company](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyCreateInput#fields-company)

  INPUT OBJECT

  The input fields and values for creating a company and its associated resources.

***

## Map

### Input objects using this input

* [Company​Create​Input.company](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyCreateInput#fields-company)
