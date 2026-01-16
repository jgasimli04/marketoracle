---
title: MenuDeletePayload - GraphQL Admin
description: Return type for `menuDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/payloads/MenuDeletePayload'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MenuDeletePayload.md
---

# Menu​Delete​Payload

payload

Return type for `menuDelete` mutation.

## Fields

* deleted​Menu​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted menu.

* user​Errors

  [\[Menu​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [menu​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuDelete)

  mutation

  Deletes a menu.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the menu to be deleted.

  ***

***

## Map

### Mutations with this payload

* [menu​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/menuDelete)
