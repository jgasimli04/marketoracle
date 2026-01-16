---
title: CatalogUpdatePayload - GraphQL Admin
description: Return type for `catalogUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CatalogUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CatalogUpdatePayload.md
---

# Catalog​Update​Payload

payload

Return type for `catalogUpdate` mutation.

## Fields

* catalog

  [Catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)

  The updated catalog.

* user​Errors

  [\[Catalog​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [catalog​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogUpdate)

  mutation

  Updates an existing [catalog's](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) configuration. Catalogs control product publishing and pricing for specific contexts like [markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) or B2B [company locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation).

  You can modify the catalog's title, status, and associated context. You can also update the [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) that determines pricing adjustments or the [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that controls which products customers see.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the catalog to update.

  * input

    [Catalog​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogUpdateInput)

    required

    The properties of the updated catalog.

  ***

***

## Map

### Mutations with this payload

* [catalog​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/catalogUpdate)
