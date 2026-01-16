---
title: DisputeEvidenceUpdatePayload - GraphQL Admin
description: Return type for `disputeEvidenceUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DisputeEvidenceUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DisputeEvidenceUpdatePayload.md
---

# Dispute​Evidence​Update​Payload

payload

Return type for `disputeEvidenceUpdate` mutation.

## Fields

* dispute​Evidence

  [Shopify​Payments​Dispute​Evidence](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence)

  The updated dispute evidence.

* user​Errors

  [\[Dispute​Evidence​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DisputeEvidenceUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [dispute​Evidence​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/disputeEvidenceUpdate)
