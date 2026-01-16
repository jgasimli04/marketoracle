---
title: SellingPlanCategory - GraphQL Admin
description: |-
  The category of the selling plan. For the `OTHER` category,
           you must fill out our [request form](https://docs.google.com/forms/d/e/1FAIpQLSeU18Xmw0Q61V8wdH-dfGafFqIBfRchQKUO8WAF3yJTvgyyZQ/viewform),
           where we'll review your request for a new purchase option.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanCategory'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanCategory.md
---

# Selling​Plan​Category

enum

The category of the selling plan. For the `OTHER` category, you must fill out our [request form](https://docs.google.com/forms/d/e/1FAIpQLSeU18Xmw0Q61V8wdH-dfGafFqIBfRchQKUO8WAF3yJTvgyyZQ/viewform), where we'll review your request for a new purchase option.

## Valid values

* OTHER

  The selling plan is for anything not in one of the other categories.

* PRE\_​ORDER

  The selling plan is for pre-orders.

* SUBSCRIPTION

  The selling plan is for subscriptions.

* TRY\_​BEFORE\_​YOU\_​BUY

  The selling plan is for try before you buy purchases.

***

## Fields

* [Selling​Plan.category](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.category)

  OBJECT

  How a product can be sold and purchased through recurring billing or deferred purchase options. Defines the specific terms for subscriptions, pre-orders, or try-before-you-buy offers, including when to bill customers, when to fulfill orders, and what pricing adjustments to apply.

  Each selling plan has billing, delivery, and pricing policies that control the purchase experience. The plan's [`options`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.options) and [`category`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.category) help merchants organize and report on different selling strategies. Plans are grouped within a [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) that associates them with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

  ***

  Caution

  Selling plans and associated records are automatically deleted 48 hours after a merchant uninstalls the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that created them. Back up these records if you need to restore them later.

  ***

  Learn more about [selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan).

* [Selling​Plan​Input.category](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanInput#fields-category)

  INPUT OBJECT

  The input fields to create or update a selling plan.

***

## Map

### Fields with this enum

* <-|[Selling​Plan.category](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.category)

### Inputs with this enum

* [Selling​Plan​Input.category](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanInput#fields-category)
