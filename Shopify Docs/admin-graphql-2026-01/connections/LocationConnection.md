---
title: LocationConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Locations.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection.md
---

# Location​Connection

connection

An auto-generated type for paginating through multiple Locations.

## Fields with this connection

* [Delivery​Location​Group.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroup#field-DeliveryLocationGroup.fields.locations)

  OBJECT

  A location group is a collection of locations. They share zones and delivery methods across delivery profiles.

* [Delivery​Profile.unassignedLocationsPaginated](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.unassignedLocationsPaginated)

  OBJECT

  A shipping profile that defines shipping rates for specific [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects. Delivery profiles determine which products can ship from which [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects to which zones, and at what rates.

  Profiles can associate with [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to provide custom shipping rules for subscriptions, such as free shipping or restricted delivery zones. The default profile applies to all products that aren't assigned to other profiles.

  Learn more about [building delivery profiles](https://shopify.dev/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

* [Locations​Condition.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationsCondition#field-LocationsCondition.fields.locations)

  OBJECT

  A condition checking the location that the visitor is shopping from.

* [Shop.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.locations)

  OBJECT

  Deprecated

***

## Queries with this connection

* [locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations)

  query

  A paginated list of inventory locations where merchants can stock [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) items and fulfill [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) items.

  Returns only active locations by default. Use the [`includeInactive`](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-includeInactive) argument to retrieve deactivated locations that can no longer stock inventory or fulfill orders. Use the [`includeLegacy`](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-includeLegacy) argument to include locations that [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) apps manage. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-query) argument to filter by location attributes like name, address, and whether local pickup is enabled.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Location​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationSortKeys)

    Default:NAME

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * active

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * address1

      string

    * address2

      string

    * city

      string

    * country

      string

    * created\_at

      time

    * geolocated

      boolean

    * * id

        id

      * legacy

        boolean

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * location\_id

      id

    * name

      string

    * * pickup\_in\_store

        string

      * province

        string

      -
      - Valid values:
        * `enabled`
        * `disabled`

    * zip

      string

  * include​Legacy

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to include the legacy locations of fulfillment services.

  * include​Inactive

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to include the locations that are deactivated.

  ***

* [locations​Available​For​Delivery​Profiles​Connection](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsAvailableForDeliveryProfilesConnection)

  query

  Returns a list of all origin locations available for a delivery profile.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## Possible returns

* edges

  [\[Location​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Location!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  non-null

  A list of nodes that are contained in LocationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Delivery​Location​Group.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroup#field-DeliveryLocationGroup.fields.locations)
* {}[Delivery​Profile.unassignedLocationsPaginated](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.unassignedLocationsPaginated)
* {}[Locations​Condition.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationsCondition#field-LocationsCondition.fields.locations)

### Queries with this connection

* \<?>[locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations)
* \<?>[locations​Available​For​Delivery​Profiles​Connection](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsAvailableForDeliveryProfilesConnection)

### Possible returns

* <->[Location​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection#returns-edges)
* <->[Location​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection#returns-nodes)
* <->[Location​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection#returns-pageInfo)
