---
title: DraftOrderConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple DraftOrders.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection.md
---

# Draft​Order​Connection

connection

An auto-generated type for paginating through multiple DraftOrders.

## Fields with this connection

* [Company.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.draftOrders)

  OBJECT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

* [Company​Contact.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders)

  OBJECT

  A person who acts on behalf of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) to make B2B purchases. Company contacts are associated with [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) accounts and can place orders on behalf of their company.

  Each contact can be assigned to one or more [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects with specific roles that determine their permissions and access to catalogs, pricing, and payment terms configured for those locations.

* [Company​Location.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.draftOrders)

  OBJECT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

* [Customer​Merge​Preview​Default​Fields.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.draftOrders)

  OBJECT

  The fields that will be kept as part of a customer merge preview.

***

## Queries with this connection

* [draft​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrders)

  query

  List of saved draft orders.

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

    [Draft​Order​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DraftOrderSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * customer\_id

      id

    * * id

        id

      * source

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * status

      string

    * tag

      string

    * updated\_at

      time

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

## Possible returns

* edges

  [\[Draft​Order​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Draft​Order!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  non-null

  A list of nodes that are contained in DraftOrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Company.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.draftOrders)
* {}[Company​Contact.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders)
* {}[Company​Location.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.draftOrders)
* {}[Customer​Merge​Preview​Default​Fields.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.draftOrders)

### Queries with this connection

* \<?>[draft​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrders)

### Possible returns

* <->[Draft​Order​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection#returns-edges)
* <->[Draft​Order​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection#returns-nodes)
* <->[Draft​Order​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection#returns-pageInfo)
