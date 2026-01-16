---
title: AbandonmentUpdateActivitiesDeliveryStatusesPayload - GraphQL Admin
description: Return type for `abandonmentUpdateActivitiesDeliveryStatuses` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/AbandonmentUpdateActivitiesDeliveryStatusesPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/AbandonmentUpdateActivitiesDeliveryStatusesPayload.md
---

# Abandonment​Update​Activities​Delivery​Statuses​Payload

payload

Return type for `abandonmentUpdateActivitiesDeliveryStatuses` mutation.

## Fields

* abandonment

  [Abandonment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment)

  The updated abandonment.

* user​Errors

  [\[Abandonment​Update​Activities​Delivery​Statuses​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonmentUpdateActivitiesDeliveryStatusesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [abandonment​Update​Activities​Delivery​Statuses](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentUpdateActivitiesDeliveryStatuses)

  mutation

  Updates the marketing activities delivery statuses for an abandonment.

  * abandonment​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the abandonment that needs to be updated.

  * marketing​Activity​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the marketing activity that needs to be updated.

  * delivery​Status

    [Abandonment​Delivery​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentDeliveryState)

    required

    The new delivery status of the marketing activity for this abandonment.

  * delivered​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The delivery timestamp if the activity delivered.

  * delivery​Status​Change​Reason

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The reason why the activity was or was not delivered.

  ***

***

## Map

### Mutations with this payload

* [abandonment​Update​Activities​Delivery​Statuses](https://shopify.dev/docs/api/admin-graphql/latest/types/abandonmentUpdateActivitiesDeliveryStatuses)
