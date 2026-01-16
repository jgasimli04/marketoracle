---
title: MandateResourceType - GraphQL Admin
description: The type of resource a payment mandate can be used for.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MandateResourceType'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MandateResourceType.md
---

# Mandate​Resource​Type

enum

The type of resource a payment mandate can be used for.

## Valid values

* CHECKOUT

  A credential stored on file for checkout.

* CREDENTIAL\_​ON\_​FILE

  A credential stored on file for merchant and customer initiated transactions.

* DRAFT\_​ORDER

  A credential stored on file for a Draft Order.

* ORDER

  A credential stored on file for an Order.

* SUBSCRIPTIONS

  A credential stored for subscription billing attempts.

***

## Fields

* [Payment​Mandate​Resource.resourceType](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandateResource#field-PaymentMandateResource.fields.resourceType)

  OBJECT

  A payment mandate with resource information, representing the permission the owner of the payment instrument gives to the merchant to debit it for specific resources (e.g., Order, Subscriptions).

***

## Map

### Fields with this enum

* <-|[Payment​Mandate​Resource.resourceType](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandateResource#field-PaymentMandateResource.fields.resourceType)
