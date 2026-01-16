---
title: CatalogCreatePayload - GraphQL Admin
description: Return type for `catalogCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CatalogCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CatalogCreatePayload.md
---

# Catalog​Create​Payload

payload

Return type for `catalogCreate` mutation.

## Fields

* catalog

  [Catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)

  The newly created catalog.

* user​Errors

  [\[Catalog​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [catalog​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogCreate)

  mutation

  Creates a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) that controls product availability and pricing for specific contexts like [markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) or B2B [company locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation). Catalogs use [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) objects to determine which products are available and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) objects to set custom pricing.

  You can optionally associate a publication and price list when creating the catalog, or add them later using separate mutations.

  Learn more about [managing catalog contexts](https://shopify.dev/docs/apps/build/markets/new-markets/catalogs) and [using catalogs for different markets](https://shopify.dev/docs/apps/build/markets/catalogs-different-markets).

  * input

    [Catalog​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogCreateInput)

    required

    ### Arguments

    The properties of the new catalog.

  ***

***

## Map

### Mutations with this payload

* [catalog​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/catalogCreate)
