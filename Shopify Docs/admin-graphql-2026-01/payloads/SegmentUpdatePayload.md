---
title: SegmentUpdatePayload - GraphQL Admin
description: Return type for `segmentUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SegmentUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SegmentUpdatePayload.md
---

# Segment​Update​Payload

payload

Return type for `segmentUpdate` mutation.

## Fields

* segment

  [Segment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment)

  The updated segment.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [segment​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentUpdate)

  mutation

  Updates a segment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the segment to be updated.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The new name for the segment.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).

  ***

***

## Map

### Mutations with this payload

* [segment​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/segmentUpdate)
