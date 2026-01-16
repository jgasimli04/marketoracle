---
title: AbandonmentAbandonmentType - GraphQL Admin
description: Specifies the abandonment type.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentAbandonmentType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentAbandonmentType.md
---

# Abandonment​Abandonment​Type

enum

Specifies the abandonment type.

## Valid values

* BROWSE

  The abandonment event is an abandoned browse.

* CART

  The abandonment event is an abandoned cart.

* CHECKOUT

  The abandonment event is an abandoned checkout.

***

## Fields

* [Abandonment.abandonmentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.abandonmentType)

  OBJECT

  Tracks a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s incomplete shopping journey, whether they abandoned while browsing [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), adding items to cart, or during checkout. Provides data about the customer's behavior and products they interacted with.

  The abandonment includes fields that indicate whether the customer has completed any [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) or [draft orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) after the abandonment occurred. It also tracks when emails were sent and how long since the customer's last activity across different abandonment types.

* [Abandonment.mostRecentStep](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.mostRecentStep)

  OBJECT

  Tracks a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s incomplete shopping journey, whether they abandoned while browsing [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), adding items to cart, or during checkout. Provides data about the customer's behavior and products they interacted with.

  The abandonment includes fields that indicate whether the customer has completed any [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) or [draft orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) after the abandonment occurred. It also tracks when emails were sent and how long since the customer's last activity across different abandonment types.

***

## Map

### Fields with this enum

* <-|[Abandonment.abandonmentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.abandonmentType)
* <-|[Abandonment.mostRecentStep](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.mostRecentStep)
