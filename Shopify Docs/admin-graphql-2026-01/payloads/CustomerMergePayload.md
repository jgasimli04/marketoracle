---
title: CustomerMergePayload - GraphQL Admin
description: Return type for `customerMerge` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerMergePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerMergePayload.md
---

# Customer​Merge​Payload

payload

Return type for `customerMerge` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job for merging the customers.

* resulting​Customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the customer resulting from the merge.

* user​Errors

  [\[Customer​Merge​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerMerge)

  mutation

  Merges two customers.

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

## Map

### Mutations with this payload

* [customer​Merge](https://shopify.dev/docs/api/admin-graphql/latest/types/customerMerge)
