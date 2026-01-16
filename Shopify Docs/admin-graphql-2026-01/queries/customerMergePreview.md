---
title: customerMergePreview - GraphQL Admin
description: Returns a preview of a customer merge request.
api_version: 2026-01
api_name: admin
type: query
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/customerMergePreview
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/customerMergePreview.md
---

# customer​Merge​Preview

query

Requires `read_customer_merge` access scope.

Returns a preview of a customer merge request.

## Arguments

* customer​One​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the first customer that will be merged.

* customer​Two​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the second customer that will be merged.

* override​Fields

  [Customer​Merge​Override​Fields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerMergeOverrideFields)

  The fields to override the default customer merge rules.

***

## Possible returns

* Customer​Merge​Preview

  [Customer​Merge​Preview!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreview)

  A preview of the results of a customer merge request.

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

## Examples

* ### customerMergePreview reference

## Query Reference

```graphql
{
  customerMergePreview(customerOneId, customerTwoId) {
    # customerMergePreview fields
  }
}
```
