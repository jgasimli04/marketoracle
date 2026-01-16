---
title: MetaobjectBulkDeletePayload - GraphQL Admin
description: Return type for `metaobjectBulkDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetaobjectBulkDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetaobjectBulkDeletePayload.md
---

# Metaobject​Bulk​Delete​Payload

payload

Return type for `metaobjectBulkDelete` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that deletes the metaobjects.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [metaobject​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectBulkDelete)

  mutation

  Asynchronously delete metaobjects and their associated metafields in bulk.

  * where

    [Metaobject​Bulk​Delete​Where​Condition!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectBulkDeleteWhereCondition)

    required

    ### Arguments

    Specifies the condition by which metaobjects are deleted. Exactly one field of input is required.

  ***

***

## Map

### Mutations with this payload

* [metaobject​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/metaobjectBulkDelete)
