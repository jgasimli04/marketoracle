---
title: SegmentDeletePayload - GraphQL Admin
description: Return type for `segmentDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SegmentDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SegmentDeletePayload.md
---

# Segment​Delete​Payload

payload

Return type for `segmentDelete` mutation.

## Fields

* deleted​Segment​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  ID of the deleted segment.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [segment​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentDelete)

  mutation

  Deletes a segment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the segment to delete.

  ***

***

## Map

### Mutations with this payload

* [segment​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/segmentDelete)
