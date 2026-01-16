---
title: FulfillmentConstraintRuleCreatePayload - GraphQL Admin
description: Return type for `fulfillmentConstraintRuleCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentConstraintRuleCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentConstraintRuleCreatePayload.md
---

# Fulfillment​Constraint​Rule​Create​Payload

payload

Return type for `fulfillmentConstraintRuleCreate` mutation.

## Fields

* fulfillment​Constraint​Rule

  [Fulfillment​Constraint​Rule](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule)

  The newly created fulfillment constraint rule.

* user​Errors

  [\[Fulfillment​Constraint​Rule​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Constraint​Rule​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleCreate)

  mutation

  Creates a fulfillment constraint rule and its metafield.

  * function​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

    ### Arguments

  * function​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The handle of the function providing the constraint rule.

  * delivery​Method​Types

    [\[Delivery​Method​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryMethodType)

    required

    Associate the function with one or multiple delivery method types.

  * metafields

    [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

    Default:\[]

    Metafields to associate to the fulfillment constraint rule.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Constraint​Rule​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentConstraintRuleCreate)
