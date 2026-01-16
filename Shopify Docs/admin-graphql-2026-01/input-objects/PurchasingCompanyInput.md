---
title: PurchasingCompanyInput - GraphQL Admin
description: >-
  The input fields for a purchasing company, which is a combination of company,
  company contact, and company location.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PurchasingCompanyInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PurchasingCompanyInput.md
---

# Purchasing​Company​Input

input\_object

The input fields for a purchasing company, which is a combination of company, company contact, and company location.

## Fields

* company​Contact​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  ID of the company contact.

* company​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  ID of the company.

* company​Location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  ID of the company location.

***

## Input objects using this input

* [Purchasing​Entity​Input.purchasingCompany](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PurchasingEntityInput#fields-purchasingCompany)

  INPUT OBJECT

  The input fields for a purchasing entity. Can either be a customer or a purchasing company.

***

## Map

### Input objects using this input

* [Purchasing​Entity​Input.purchasingCompany](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PurchasingEntityInput#fields-purchasingCompany)
