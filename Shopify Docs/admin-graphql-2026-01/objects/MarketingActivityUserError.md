---
title: MarketingActivityUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of marketing activity and engagement
  mutations.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError.md
---

# Marketing​Activity​User​Error

object

An error that occurs during the execution of marketing activity and engagement mutations.

## Fields

* code

  [Marketing​Activity​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityUserErrorCode)

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

* [marketing​Activities​Delete​All​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivitiesDeleteAllExternal)

  mutation

  Deletes all external marketing activities. Deletion is performed by a background job, as it may take a bit of time to complete if a large number of activities are to be deleted. Attempting to create or modify external activities before the job has completed will result in the create/update/upsert mutation returning an error.

* [marketing​Activity​Create​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreateExternal)

  mutation

  Creates a new external marketing activity.

  * input

    [Marketing​Activity​Create​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput)

    required

    ### Arguments

    The input field for creating an external marketing activity.

  ***

* [marketing​Activity​Delete​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityDeleteExternal)

  mutation

  Deletes an external marketing activity.

  * marketing​Activity​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the marketing activity. A marketing activity ID or remote ID must be provided.

  * remote​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. A marketing activity ID or remote ID must be provided.

  ***

* [marketing​Activity​Update​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdateExternal)

  mutation

  Update an external marketing activity.

  * input

    [Marketing​Activity​Update​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput)

    required

    ### Arguments

    The input field for updating an external marketing activity.

  * marketing​Activity​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the marketing activity. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

  * remote​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

  * utm

    [UTMInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UTMInput)

    Specifies the [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters) that are associated with a related marketing campaign. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

  ***

* [marketing​Activity​Upsert​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpsertExternal)

  mutation

  Creates a new external marketing activity or updates an existing one. When optional fields are absent or null, associated information will be removed from an existing marketing activity.

  * input

    [Marketing​Activity​Upsert​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput)

    required

    ### Arguments

    The input field for creating or updating an external marketing activity.

  ***

* [marketing​Engagement​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingEngagementCreate)

  mutation

  Creates a new marketing engagement for a marketing activity or a marketing channel.

  * marketing​Activity​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The identifier of the marketing activity for which the engagement metrics are being provided. This or the remoteId should be set when and only when providing activity-level engagements. This should be nil when providing channel-level engagements.

  * remote​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. This or the marketingActivityId should be set when and only when providing activity-level engagements. This should be nil when providing channel-level engagements.

  * channel​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The unique string identifier of the channel to which the engagement metrics are being provided. This should be set when and only when providing channel-level engagements. This should be nil when providing activity-level engagements. For the correct handle for your channel, contact your partner manager.

  * marketing​Engagement

    [Marketing​Engagement​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput)

    required

    The marketing engagement's attributes.

  ***

* [marketing​Engagements​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingEngagementsDelete)

  mutation

  Marks channel-level engagement data such that it no longer appears in reports. Activity-level data cannot be deleted directly, instead the MarketingActivity itself should be deleted to hide it from reports.

  * channel​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The handle of the channel for which engagement data should be deleted.

  * delete​Engagements​For​All​Channels

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    When true, engagements for all channels that belong to the api client will be deleted.

  ***

***

## <\~> MarketingActivityUserError Mutations

### Mutated by

* <\~>[marketing​Activities​Delete​All​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivitiesDeleteAllExternal)
* <\~>[marketing​Activity​Create​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreateExternal)
* <\~>[marketing​Activity​Delete​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityDeleteExternal)
* <\~>[marketing​Activity​Update​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdateExternal)
* <\~>[marketing​Activity​Upsert​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpsertExternal)
* <\~>[marketing​Engagement​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingEngagementCreate)
* <\~>[marketing​Engagements​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingEngagementsDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-MarketingActivityUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
