---
title: CatalogContextUpdatePayload - GraphQL Admin
description: Return type for `catalogContextUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CatalogContextUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CatalogContextUpdatePayload.md
---

# Catalog​Context​Update​Payload

payload

Return type for `catalogContextUpdate` mutation.

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

* [catalog​Context​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogContextUpdate)

  mutation

  Modifies which contexts, like [markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) or B2B [company locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation), can access a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog). You can add or remove contexts to control where the catalog's products and prices are available.

  Learn more about [managing catalog contexts](https://shopify.dev/docs/apps/build/markets/new-markets/catalogs) and [managing B2B catalogs](https://shopify.dev/docs/apps/build/b2b/manage-catalogs).

  * catalog​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the catalog for which to update the context.

  * contexts​To​Add

    [Catalog​Context​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogContextInput)

    The contexts to add to the catalog.

  * contexts​To​Remove

    [Catalog​Context​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogContextInput)

    The contexts to remove from the catalog.

  ***

***

## Map

### Mutations with this payload

* [catalog​Context​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/catalogContextUpdate)
