---
title: CustomerGenerateAccountActivationUrlPayload - GraphQL Admin
description: Return type for `customerGenerateAccountActivationUrl` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerGenerateAccountActivationUrlPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerGenerateAccountActivationUrlPayload.md
---

# Customer​Generate​Account​Activation​Url​Payload

payload

Return type for `customerGenerateAccountActivationUrl` mutation.

## Fields

* account​Activation​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The generated account activation URL.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Generate​Account​Activation​Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerGenerateAccountActivationUrl)

  mutation

  Generates a one-time activation URL for a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) whose legacy customer account isn't yet enabled. Use this after importing customers or creating accounts that need activation.

  The generated URL expires after 30 days and becomes invalid if you generate a new one.

  ***

  Note

  The generated URL only works when legacy customer accounts are enabled on the shop. It only works for customers with disabled or invited [`account states`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.state). Attempting to generate a URL for an already-enabled customer returns an error.

  ***

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer that the URL is generated for.

  ***

***

## Map

### Mutations with this payload

* [customer​Generate​Account​Activation​Url](https://shopify.dev/docs/api/admin-graphql/latest/types/customerGenerateAccountActivationUrl)
