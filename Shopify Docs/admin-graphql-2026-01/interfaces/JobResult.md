---
title: JobResult - GraphQL Admin
description: >-
  A job corresponds to some long running task that the client should poll for
  status.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/JobResult'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/JobResult.md'
---

# Job​Result

interface

A job corresponds to some long running task that the client should poll for status.

## Fields

* done

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  This indicates if the job is still queued or has been run.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID that's returned when running an asynchronous mutation.

***

## Types implemented in

* [Customer​Segment​Members​Query](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMembersQuery)

  OBJECT

  A job to determine a list of members, such as customers, that are associated with an individual segment.

  * current​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The current total number of members in a given segment.

  * done

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    This indicates if the job is still queued or has been run.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID that's returned when running an asynchronous mutation.

***

##### Variables

```json
{
	"done": "",
	"id": ""
}
```

##### Schema

```graphql
interface JobResult {
  done: Boolean!
  id: ID!
}
```
