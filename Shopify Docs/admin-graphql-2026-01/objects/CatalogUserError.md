---
title: CatalogUserError - GraphQL Admin
description: Defines errors encountered while managing a catalog.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogUserError'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogUserError.md
---

# Catalog​User​Error

object

Defines errors encountered while managing a catalog.

## Fields

* code

  [Catalog​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

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

* [catalog​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogDelete)

  mutation

  Delete a catalog.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the catalog to delete.

  * delete​Dependent​Resources

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to also delete the price list and the publication owned by the catalog.

  ***

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

## <\~> CatalogUserError Mutations

### Mutated by

* <\~>[catalog​Context​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogContextUpdate)
* <\~>[catalog​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogCreate)
* <\~>[catalog​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogDelete)
* <\~>[catalog​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CatalogUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
