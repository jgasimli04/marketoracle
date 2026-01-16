---
title: FlowTriggerReceivePayload - GraphQL Admin
description: Return type for `flowTriggerReceive` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FlowTriggerReceivePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FlowTriggerReceivePayload.md
---

# Flow​Trigger​Receive​Payload

payload

Return type for `flowTriggerReceive` mutation.

## Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [flow​Trigger​Receive](https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowTriggerReceive)

  mutation

  Triggers any workflows that begin with the trigger specified in the request body. To learn more, refer to [*Create Shopify Flow triggers*](https://shopify.dev/apps/flow/triggers).

  * body

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

    ### Arguments

  * handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The handle of the trigger.

  * payload

    [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

    The payload needed to run the Trigger.

  ***

***

## Map

### Mutations with this payload

* [flow​Trigger​Receive](https://shopify.dev/docs/api/admin-graphql/latest/types/flowTriggerReceive)
