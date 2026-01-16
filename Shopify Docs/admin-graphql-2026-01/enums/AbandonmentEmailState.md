---
title: AbandonmentEmailState - GraphQL Admin
description: Specifies the email state.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentEmailState
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentEmailState.md
---

# Abandonment​Email​State

enum

Specifies the email state.

## Valid values

* NOT\_​SENT

  The email has not yet been sent.

* SCHEDULED

  The email has been scheduled for later delivery.

* SENT

  The email has been sent.

***

## Fields

* [Abandonment.emailState](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.emailState)

  OBJECT

  Tracks a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s incomplete shopping journey, whether they abandoned while browsing [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), adding items to cart, or during checkout. Provides data about the customer's behavior and products they interacted with.

  The abandonment includes fields that indicate whether the customer has completed any [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) or [draft orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) after the abandonment occurred. It also tracks when emails were sent and how long since the customer's last activity across different abandonment types.

* [abandonment​Email​State​Update.emailState](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentEmailStateUpdate#arguments-emailState)

  ARGUMENT

***

## Map

### Fields with this enum

* <-|[Abandonment.emailState](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.emailState)

### Arguments with this enum

* <-|[abandonment​Email​State​Update.emailState](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentEmailStateUpdate#arguments-emailState)
