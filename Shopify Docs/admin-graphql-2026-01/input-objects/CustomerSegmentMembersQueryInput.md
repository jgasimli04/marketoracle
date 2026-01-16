---
title: CustomerSegmentMembersQueryInput - GraphQL Admin
description: The input fields and values for creating a customer segment members query.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSegmentMembersQueryInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSegmentMembersQueryInput.md
---

# Customer​Segment​Members​Query​Input

input\_object

The input fields and values for creating a customer segment members query.

## Fields

* query

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The query that's used to filter the members. The query is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).

* reverse

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Reverse the order of the list. The sorting behaviour defaults to ascending order.

* segment​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the segment.

* sort​Key

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Sort the list by a given key.

***

## Map

No referencing types
