---
title: MetafieldsSetPayload - GraphQL Admin
description: Return type for `metafieldsSet` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetafieldsSetPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetafieldsSetPayload.md
---

# Metafields​Set​Payload

payload

Return type for `metafieldsSet` mutation.

## Fields

* metafields

  [\[Metafield!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

  The list of metafields that were set.

* user​Errors

  [\[Metafields​Set​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldsSetUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [metafields​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsSet)

  mutation

  Sets metafield values. Metafield values will be set regardless if they were previously created or not.

  Allows a maximum of 25 metafields to be set at a time, with a maximum total request payload size of 10MB.

  This operation is atomic, meaning no changes are persisted if an error is encountered.

  As of `2024-07`, this operation supports compare-and-set functionality to better handle concurrent requests. If `compareDigest` is set for any metafield, the mutation will only set that metafield if the persisted metafield value matches the digest used on `compareDigest`. If the metafield doesn't exist yet, but you want to guarantee that the operation will run in a safe manner, set `compareDigest` to `null`. The `compareDigest` value can be acquired by querying the metafield object and selecting `compareDigest` as a field. If the `compareDigest` value does not match the digest for the persisted value, the mutation will return an error. You can opt out of write guarantees by not sending `compareDigest` in the request.

  * metafields

    [\[Metafields​Set​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldsSetInput)

    required

    ### Arguments

    The list of metafield values to set. Maximum of 25.

  ***

***

## Map

### Mutations with this payload

* [metafields​Set](https://shopify.dev/docs/api/admin-graphql/latest/types/metafieldsSet)
