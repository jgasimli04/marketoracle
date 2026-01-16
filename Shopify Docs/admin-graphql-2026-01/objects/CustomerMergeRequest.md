---
title: CustomerMergeRequest - GraphQL Admin
description: A merge request for merging two customers.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeRequest
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeRequest.md
---

# Customer​Merge​Request

object

Requires The user must have `read_customer_merge` permissions.

A merge request for merging two customers.

## Fields

* customer​Merge​Errors

  [\[Customer​Merge​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeError)

  non-null

  The merge errors that occurred during the customer merge request.

* job​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The UUID of the merge job.

* resulting​Customer​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the customer resulting from the merge.

* status

  [Customer​Merge​Request​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMergeRequestStatus)

  non-null

  The status of the customer merge request.

***

## Map

### Fields with this object

* {}[CustomerMergeable.mergeInProgress](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeable#field-CustomerMergeable.fields.mergeInProgress)

***

## Queries

* [customer​Merge​Job​Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerMergeJobStatus)

  query

  Returns the status of a customer merge request job.

  * job​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the job performing the customer merge request.

  ***

***

## \<?>CustomerMergeRequest Queries

### Queried by

* \<?>[customer​Merge​Job​Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerMergeJobStatus)
