---
title: SellingPlanGroupInput - GraphQL Admin
description: The input fields required to create or update a selling plan group.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput.md
---

# Selling​Plan​Group​Input

input\_object

The input fields required to create or update a selling plan group.

## Fields

* app​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  ID for app, exposed in Liquid and product JSON.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Merchant facing description of the selling plan group.

* merchant​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Merchant facing label of the selling plan group.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Buyer facing label of the selling plan group.

* options

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The values of all options available on the selling plan group. Selling plans are grouped together in Liquid when they're created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values.

* position

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Relative value for display purposes of the selling plan group. A lower position will be displayed before a higher one.

* selling​Plans​To​Create

  [\[Selling​Plan​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanInput)

  List of selling plans to create.

* selling​Plans​To​Delete

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  List of selling plans ids to delete.

* selling​Plans​To​Update

  [\[Selling​Plan​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanInput)

  List of selling plans to update.

***

## Map

No referencing types
