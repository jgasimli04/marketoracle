---
title: BulkProductResourceFeedbackCreatePayload - GraphQL Admin
description: Return type for `bulkProductResourceFeedbackCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/BulkProductResourceFeedbackCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/BulkProductResourceFeedbackCreatePayload.md
---

# Bulk​Product​Resource​Feedback​Create​Payload

payload

Return type for `bulkProductResourceFeedbackCreate` mutation.

## Fields

* feedback

  [\[Product​Resource​Feedback!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductResourceFeedback)

  The feedback that's created.

* user​Errors

  [\[Bulk​Product​Resource​Feedback​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkProductResourceFeedbackCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [bulk​Product​Resource​Feedback​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkProductResourceFeedbackCreate)

  mutation

  Creates product feedback for multiple products.

  * feedback​Input

    [\[Product​Resource​Feedback​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductResourceFeedbackInput)

    required

    ### Arguments

    An array of inputs to create the feedback. Limited to 50.

  ***

***

## Map

### Mutations with this payload

* [bulk​Product​Resource​Feedback​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/bulkProductResourceFeedbackCreate)
