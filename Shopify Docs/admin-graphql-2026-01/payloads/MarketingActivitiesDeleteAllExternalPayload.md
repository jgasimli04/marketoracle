---
title: MarketingActivitiesDeleteAllExternalPayload - GraphQL Admin
description: Return type for `marketingActivitiesDeleteAllExternal` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingActivitiesDeleteAllExternalPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingActivitiesDeleteAllExternalPayload.md
---

# Marketing​Activities​Delete​All​External​Payload

payload

Return type for `marketingActivitiesDeleteAllExternal` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that performs the deletion. The status of the job may be used to determine when it's safe again to create new activities.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [marketing​Activities​Delete​All​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivitiesDeleteAllExternal)

  mutation

  Deletes all external marketing activities. Deletion is performed by a background job, as it may take a bit of time to complete if a large number of activities are to be deleted. Attempting to create or modify external activities before the job has completed will result in the create/update/upsert mutation returning an error.

***

## Map

### Mutations with this payload

* [marketing​Activities​Delete​All​External](https://shopify.dev/docs/api/admin-graphql/latest/types/marketingActivitiesDeleteAllExternal)
