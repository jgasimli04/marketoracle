---
title: SegmentCreatePayload - GraphQL Admin
description: Return type for `segmentCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SegmentCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SegmentCreatePayload.md
---

# Segment​Create​Payload

payload

Return type for `segmentCreate` mutation.

## Fields

* segment

  [Segment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment)

  The newly created segment.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [segment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentCreate)

  mutation

  Creates a segment.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The name of the segment to be created. Segment names must be unique.

  * query

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).

  ***

***

## Map

### Mutations with this payload

* [segment​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/segmentCreate)
