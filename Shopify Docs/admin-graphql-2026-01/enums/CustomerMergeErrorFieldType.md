---
title: CustomerMergeErrorFieldType - GraphQL Admin
description: >-
  The types of the hard blockers preventing a customer from being merged to
  another customer.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMergeErrorFieldType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMergeErrorFieldType.md
---

# Customer​Merge​Error​Field​Type

enum

The types of the hard blockers preventing a customer from being merged to another customer.

## Valid values

* COMPANY\_​CONTACT

  The customer is a company contact.

* CUSTOMER\_​PAYMENT\_​METHODS

  The customer has payment methods.

* DELETED\_​AT

  The customer does not exist.

* GIFT\_​CARDS

  The customer has gift cards.

* MERGE\_​IN\_​PROGRESS

  The customer has a merge in progress.

* MULTIPASS\_​IDENTIFIER

  The customer has a multipass identifier.

* OVERRIDE\_​FIELDS

  The override fields are invalid.

* PENDING\_​DATA\_​REQUEST

  The customer has a pending data request.

* REDACTED\_​AT

  The customer has a pending or completed redaction.

* STORE\_​CREDIT

  The customer has store credit.

* SUBSCRIPTIONS

  The customer has a subscription history.

***

## Fields

* [Customer​Merge​Error.errorFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeError#field-CustomerMergeError.fields.errorFields)

  OBJECT

  The error blocking a customer merge.

* [Customer​Mergeable.errorFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeable#field-CustomerMergeable.fields.errorFields)

  OBJECT

  An object that represents whether a customer can be merged with another customer.

***

## Map

### Fields with this enum

* <-|[Customer​Merge​Error.errorFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeError#field-CustomerMergeError.fields.errorFields)
* <-|[Customer​Mergeable.errorFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeable#field-CustomerMergeable.fields.errorFields)
