---
title: ShopifyPaymentsTaxIdentification - GraphQL Admin
description: A typed identifier that represents an individual within a tax jurisdiction.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsTaxIdentification
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsTaxIdentification.md
---

# Shopify​Payments​Tax​Identification

object

Requires `read_capital` access scope, `read_financial_kyc_information` access scope or `read_shopify_payments_legal_entities` access scope. Also: The app must have the Capital or Financial KYC Information or Shopify Payments Legal Entities permission.

A typed identifier that represents an individual within a tax jurisdiction.

## Fields

* tax​Identification​Type

  [Shopify​Payments​Tax​Identification​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsTaxIdentificationType)

  non-null

  The type of the identification.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The value of the identification.

***

## Map

### Fields with this object

* {}[FinanceKycInformation.taxIdentification](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinanceKycInformation#field-FinanceKycInformation.fields.taxIdentification)
