---
title: StringConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Strings.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection.md
---

# String​Connection

connection

An auto-generated type for paginating through multiple Strings.

## Fields with this connection

* [Shop.customerTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.customerTags)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Shop.draftOrderTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.draftOrderTags)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Shop.orderTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.orderTags)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

### Deprecated fields with this connection

* [Shop.productTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.productTags)

  OBJECT

  Deprecated

* [Shop.productTypes](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.productTypes)

  OBJECT

  Deprecated

* [Shop.productVendors](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.productVendors)

  OBJECT

  Deprecated

***

## Queries with this connection

* [product​Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/productTags)

  query

  Returns tags added to [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects in the shop. Provides a paginated list of tag strings.

  The maximum page size is 5000 tags per request. Tags are returned as simple strings through a [`StringConnection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StringConnection). The maximum page size is 5000.

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

* [product​Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/productTypes)

  query

  Returns a paginated list of product types assigned to [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in the store. The maximum page size is 1000. The maximum page size is 1000.

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

* [product​Vendors](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVendors)

  query

  The list of vendors added to products. The maximum page size is 1000.

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

  [\[String​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StringEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A list of nodes that are contained in StringEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Shop.customerTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.customerTags)
* {}[Shop.draftOrderTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.draftOrderTags)
* {}[Shop.orderTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.orderTags)

### Queries with this connection

* \<?>[product​Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/productTags)
* \<?>[product​Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/productTypes)
* \<?>[product​Vendors](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVendors)

### Possible returns

* <->[String​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection#returns-edges)
* <->[String​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection#returns-nodes)
* <->[String​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection#returns-pageInfo)
