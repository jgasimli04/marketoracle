---
title: MetafieldsDeletePayload - GraphQL Admin
description: Return type for `metafieldsDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetafieldsDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetafieldsDeletePayload.md
---

# Metafields​Delete​Payload

payload

Return type for `metafieldsDelete` mutation.

## Fields

* deleted​Metafields

  [\[Metafield​Identifier\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldIdentifier)

  List of metafield identifiers that were deleted, null if the corresponding metafield isn't found.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [metafields​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsDelete)

  mutation

  Deletes [`Metafield`](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/Metafield) objects in bulk by specifying combinations of owner ID, namespace, and key.

  Returns the identifiers of successfully deleted metafields. If a specified metafield doesn't exist, then the mutation still succeeds but returns `null` for that identifier in the response.

  * metafields

    [\[Metafield​Identifier​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldIdentifierInput)

    required

    ### Arguments

    A list of identifiers specifying metafields to delete. At least one identifier must be specified.

  ***

***

## Map

### Mutations with this payload

* [metafields​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/metafieldsDelete)
