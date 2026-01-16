---
title: DisputeEvidenceUpdateUserError - GraphQL Admin
description: An error that occurs during the execution of `DisputeEvidenceUpdate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DisputeEvidenceUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DisputeEvidenceUpdateUserError.md
---

# Dispute​Evidence​Update​User​Error

object

An error that occurs during the execution of `DisputeEvidenceUpdate`.

## Fields

* code

  [Dispute​Evidence​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/DisputeEvidenceUpdateUserErrorCode)

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

* [dispute​Evidence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeEvidenceUpdate)

  mutation

  Updates a dispute evidence.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the dispute evidence to be updated.

  * input

    [Shopify​Payments​Dispute​Evidence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopifyPaymentsDisputeEvidenceUpdateInput)

    required

    The updated properties for a dispute evidence.

  ***

***

## <\~> DisputeEvidenceUpdateUserError Mutations

### Mutated by

* <\~>[dispute​Evidence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeEvidenceUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-DisputeEvidenceUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
