---
title: SegmentMembershipResponse - GraphQL Admin
description: >-
  A list of maps that contain `segmentId` IDs and `isMember` Booleans. The maps
  represent segment memberships.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMembershipResponse
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMembershipResponse.md
---

# Segment​Membership​Response

object

Requires `read_customers` access scope.

A list of maps that contain `segmentId` IDs and `isMember` Booleans. The maps represent segment memberships.

## Fields

* memberships

  [\[Segment​Membership!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMembership)

  non-null

  The membership status for the given list of segments.

***

## Map

No referencing types

***

## Queries

* [customer​Segment​Membership](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerSegmentMembership)

  query

  Whether a member, which is a customer, belongs to a segment.

  * segment​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The segments to evaluate for the given customer.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer that has the membership.

  ***

***

## \<?>SegmentMembershipResponse Queries

### Queried by

* \<?>[customer​Segment​Membership](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerSegmentMembership)
