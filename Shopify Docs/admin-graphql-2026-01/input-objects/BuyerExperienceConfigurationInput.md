---
title: BuyerExperienceConfigurationInput - GraphQL Admin
description: The input fields specifying the behavior of checkout for a B2B buyer.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BuyerExperienceConfigurationInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BuyerExperienceConfigurationInput.md
---

# Buyer​Experience​Configuration​Input

input\_object

The input fields specifying the behavior of checkout for a B2B buyer.

## Fields

* checkout​To​Draft

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether to checkout to draft order for merchant review.

* deposit

  [Deposit​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DepositInput)

  The input fields configuring the deposit a B2B buyer.

* editable​Shipping​Address

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether to allow customers to edit their shipping address at checkout.

* payment​Terms​Template​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Represents the merchant configured payment terms.

***

## Input objects using this input

* [Company​Location​Input.buyerExperienceConfiguration](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationInput#fields-buyerExperienceConfiguration)

  INPUT OBJECT

  The input fields for company location when creating or updating a company location.

* [Company​Location​Update​Input.buyerExperienceConfiguration](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationUpdateInput#fields-buyerExperienceConfiguration)

  INPUT OBJECT

  The input fields for company location when creating or updating a company location.

***

## Map

### Input objects using this input

* [Company​Location​Input.buyerExperienceConfiguration](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationInput#fields-buyerExperienceConfiguration)
* [Company​Location​Update​Input.buyerExperienceConfiguration](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationUpdateInput#fields-buyerExperienceConfiguration)
