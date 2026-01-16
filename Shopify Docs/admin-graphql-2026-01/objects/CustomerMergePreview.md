---
title: CustomerMergePreview - GraphQL Admin
description: A preview of the results of a customer merge request.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreview
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreview.md
---

# Customer​Merge​Preview

object

Requires `read_customer_merge` access scope.

A preview of the results of a customer merge request.

## Fields

* alternate​Fields

  [Customer​Merge​Preview​Alternate​Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewAlternateFields)

  The fields that can be used to override the default fields.

* blocking​Fields

  [Customer​Merge​Preview​Blocking​Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewBlockingFields)

  The fields that will block the merge if the two customers are merged.

* customer​Merge​Errors

  [\[Customer​Merge​Error!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeError)

  The errors blocking the customer merge.

* default​Fields

  [Customer​Merge​Preview​Default​Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields)

  The fields that will be kept if the two customers are merged.

* resulting​Customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The resulting customer ID if the two customers are merged.

***

## Map

No referencing types

***

## Queries

* [customer​Merge​Preview](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerMergePreview)

  query

  Returns a preview of a customer merge request.

  * customer​One​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the first customer that will be merged.

  * customer​Two​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the second customer that will be merged.

  * override​Fields

    [Customer​Merge​Override​Fields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerMergeOverrideFields)

    The fields to override the default customer merge rules.

  ***

***

## \<?>CustomerMergePreview Queries

### Queried by

* \<?>[customer​Merge​Preview](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerMergePreview)
