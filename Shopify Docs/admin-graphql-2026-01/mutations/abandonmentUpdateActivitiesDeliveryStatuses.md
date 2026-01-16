---
title: abandonmentUpdateActivitiesDeliveryStatuses - GraphQL Admin
description: Updates the marketing activities delivery statuses for an abandonment.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentUpdateActivitiesDeliveryStatuses
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentUpdateActivitiesDeliveryStatuses.md
---

# abandonment​Update​Activities​Delivery​Statuses

mutation

Requires `write_marketing_events` access scope.

Updates the marketing activities delivery statuses for an abandonment.

## Arguments

* abandonment​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the abandonment that needs to be updated.

* delivered​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The delivery timestamp if the activity delivered.

* delivery​Status

  [Abandonment​Delivery​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentDeliveryState)

  required

  The new delivery status of the marketing activity for this abandonment.

* delivery​Status​Change​Reason

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The reason why the activity was or was not delivered.

* marketing​Activity​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the marketing activity that needs to be updated.

***

## Abandonment​Update​Activities​Delivery​Statuses​Payload returns

* abandonment

  [Abandonment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment)

  The updated abandonment.

* user​Errors

  [\[Abandonment​Update​Activities​Delivery​Statuses​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonmentUpdateActivitiesDeliveryStatusesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### abandonmentUpdateActivitiesDeliveryStatuses reference

## Mutation Reference

```graphql
mutation abandonmentUpdateActivitiesDeliveryStatuses($abandonmentId: ID!, $marketingActivityId: ID!, $deliveryStatus: AbandonmentDeliveryState!, $deliveredAt: DateTime, $deliveryStatusChangeReason: String) {
  abandonmentUpdateActivitiesDeliveryStatuses(abandonmentId: $abandonmentId, marketingActivityId: $marketingActivityId, deliveryStatus: $deliveryStatus, deliveredAt: $deliveredAt, deliveryStatusChangeReason: $deliveryStatusChangeReason) {
    abandonment {
      # Abandonment fields
    }
    userErrors {
      field
      message
    }
  }
}
```

## Input

##### Variables

```json
{
  "abandonmentId": "gid://shopify/<objectName>/10079785100",
  "marketingActivityId": "gid://shopify/<objectName>/10079785100",
  "deliveryStatus": "NOT_SENT",
  "deliveredAt": "2019-09-07T15:50:00Z",
  "deliveryStatusChangeReason": "<your-deliveryStatusChangeReason>"
}
```
