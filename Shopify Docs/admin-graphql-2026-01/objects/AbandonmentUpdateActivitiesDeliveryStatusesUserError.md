---
title: AbandonmentUpdateActivitiesDeliveryStatusesUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `AbandonmentUpdateActivitiesDeliveryStatuses`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonmentUpdateActivitiesDeliveryStatusesUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonmentUpdateActivitiesDeliveryStatusesUserError.md
---

# Abandonment​Update​Activities​Delivery​Statuses​User​Error

object

An error that occurs during the execution of `AbandonmentUpdateActivitiesDeliveryStatuses`.

## Fields

* code

  [Abandonment​Update​Activities​Delivery​Statuses​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentUpdateActivitiesDeliveryStatusesUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

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

## <\~> AbandonmentUpdateActivitiesDeliveryStatusesUserError Mutations

### Mutated by

* <\~>[abandonment​Update​Activities​Delivery​Statuses](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentUpdateActivitiesDeliveryStatuses)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-AbandonmentUpdateActivitiesDeliveryStatusesUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
