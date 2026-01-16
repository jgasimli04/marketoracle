---
title: MarketUserError - GraphQL Admin
description: Defines errors encountered while managing a Market.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError.md'
---

# Market​User​Error

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

Defines errors encountered while managing a Market.

## Fields

* code

  [Market​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketUserErrorCode)

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

* [backup​Region​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/backupRegionUpdate)

  mutation

  Update the backup region that is used when we have no better signal of what region a buyer is in.

  * region

    [Backup​Region​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BackupRegionUpdateInput)

    ### Arguments

    Optional input representing the region to be updated. If not provided, the existing regions remain unchanged.

  ***

* [market​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketCreate)

  mutation

  Creates a [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) to deliver customized shopping experiences. Markets define various aspects of the buyer experience including pricing, product availability, custom content, inventory and fulfillment priorities, and payment methods.

  Define conditions to match buyers by region, company location, retail location, or other criteria. Configure [`MarketCurrencySettings`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettings) to control currency behavior. Set [`MarketPriceInclusions`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketPriceInclusions) to determine tax and duty display. Assign [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects and [`MarketWebPresence`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence) configurations to control product availability and SEO strategy.

  Learn more about [Shopify Markets](https://shopify.dev/docs/apps/build/markets).

  * input

    [Market​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCreateInput)

    required

    ### Arguments

    The properties of the new market.

  ***

* [market​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketDelete)

  mutation

  Deletes a market definition.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market to delete.

  ***

* [market​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketUpdate)

  mutation

  Updates the properties of a market.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market to update.

  * input

    [Market​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketUpdateInput)

    required

    The properties to update.

  ***

* [web​Presence​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceCreate)

  mutation

  Creates a web presence.

  * input

    [Web​Presence​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceCreateInput)

    required

    ### Arguments

    The details of the web presence to be created.

  ***

* [web​Presence​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceDelete)

  mutation

  Deletes a web presence.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to delete.

  ***

* [web​Presence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceUpdate)

  mutation

  Updates a web presence.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to update.

  * input

    [Web​Presence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceUpdateInput)

    required

    The web presence properties to update.

  ***

### Deprecated mutations

* [market​Region​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketRegionDelete)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market region to delete.

  ***

* [market​Regions​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketRegionsCreate)

  mutation

  Deprecated

  * market​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market to add the regions to.

  * regions

    [\[Market​Region​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketRegionCreateInput)

    required

    The regions to be created.

  ***

* [market​Regions​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketRegionsDelete)

  mutation

  Deprecated

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of IDs of the market regions to delete.

  ***

* [market​Web​Presence​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceCreate)

  mutation

  Deprecated

  * market​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market for which to create a web presence.

  * web​Presence

    [Market​Web​Presence​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketWebPresenceCreateInput)

    required

    The details of the web presence to be created.

  ***

* [market​Web​Presence​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceDelete)

  mutation

  Deprecated

  * web​Presence​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to delete.

  ***

* [market​Web​Presence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceUpdate)

  mutation

  Deprecated

  * web​Presence​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to update.

  * web​Presence

    [Market​Web​Presence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketWebPresenceUpdateInput)

    required

    The web\_presence fields used to update the market's web presence.

  ***

***

## <\~> MarketUserError Mutations

### Mutated by

* <\~>[backup​Region​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/backupRegionUpdate)
* <\~>[market​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketCreate)
* <\~>[market​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketDelete)
* <\~>[market​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketUpdate)
* <\~>[web​Presence​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceCreate)
* <\~>[web​Presence​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceDelete)
* <\~>[web​Presence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-MarketUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
