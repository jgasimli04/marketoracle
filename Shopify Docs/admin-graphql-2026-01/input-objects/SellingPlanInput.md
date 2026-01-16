---
title: SellingPlanInput - GraphQL Admin
description: The input fields to create or update a selling plan.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanInput.md
---

# Selling​Plan​Input

input\_object

The input fields to create or update a selling plan.

## Fields

* billing​Policy

  [Selling​Plan​Billing​Policy​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanBillingPolicyInput)

  Selling plan policy which describes the billing details.

* category

  [Selling​Plan​Category](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanCategory)

  The category used to classify this selling plan for reporting purposes.

* delivery​Policy

  [Selling​Plan​Delivery​Policy​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanDeliveryPolicyInput)

  A selling plan policy which describes the delivery details.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Buyer facing string which describes the selling plan commitment.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  ID of the selling plan.

* inventory​Policy

  [Selling​Plan​Inventory​Policy​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanInventoryPolicyInput)

  A selling plan policy which describes the inventory details.

* metafields

  [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

  Additional customizable information to associate with the SellingPlan.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Buyer facing string which describes the selling plan content.

* options

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The values of all options available on the selling plan. Selling plans are grouped together in Liquid when they're created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values.

* position

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Relative value for display purposes of this plan. A lower position will be displayed before a higher one.

* pricing​Policies

  [\[Selling​Plan​Pricing​Policy​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanPricingPolicyInput)

  The pricing policies which describe the pricing details. Each selling plan can only contain a maximum of 2 pricing policies.

***

## Input objects using this input

* [Selling​Plan​Group​Input.sellingPlansToCreate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput#fields-sellingPlansToCreate)

  INPUT OBJECT

  The input fields required to create or update a selling plan group.

* [Selling​Plan​Group​Input.sellingPlansToUpdate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput#fields-sellingPlansToUpdate)

  INPUT OBJECT

  The input fields required to create or update a selling plan group.

***

## Map

### Input objects using this input

* [Selling​Plan​Group​Input.sellingPlansToCreate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput#fields-sellingPlansToCreate)
* [Selling​Plan​Group​Input.sellingPlansToUpdate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput#fields-sellingPlansToUpdate)
