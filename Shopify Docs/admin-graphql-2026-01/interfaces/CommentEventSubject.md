---
title: CommentEventSubject - GraphQL Admin
description: The subject line of a comment event.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject.md
---

# Comment​Event​Subject

interface

The subject line of a comment event.

## Fields

* has​Timeline​Comment

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the timeline subject has a timeline comment. If true, then a timeline comment exists.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

***

## Types implemented in

* [Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

  OBJECT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

  * contact​Roles

    [Company​Contact​Role​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleConnection)

    non-null

    The list of roles for the company contacts.

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

      [Company​Contact​Role​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyContactRoleSortKeys)

      Default:ID

      Sort the underlying list by the given key.

    ***

  * contacts

    [Company​Contact​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactConnection)

    non-null

    The list of contacts in the company.

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

      [Company​Contact​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyContactSortKeys)

      Default:ID

      Sort the underlying list by the given key.

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * company\_id

          id

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:
          * `query=Bob Norman`
          * `query=title:green hoodie`

      * company\_location\_id

        id

      * created\_at

        time

      * email

        string

      * * id

          id

        * location\_name

          string

        - Filter by `id` range.

        - Example:
          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

      * name

        string

      * role\_name

        string

      * status

        string

      * updated\_at

        time

    ***

  * contacts​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The number of contacts that belong to the company.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was created in Shopify.

  * customer​Since

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company became the customer.

  * default​Cursor

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

  * default​Role

    [Company​Contact​Role](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRole)

    The role proposed by default for a contact at the company.

  * draft​Orders

    [Draft​Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection)

    non-null

    The list of the company's draft orders.

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

    ***

  * events

    [Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

    non-null

    The paginated list of events associated with the host subject.

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

      [Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * action

          string

        * comments

          boolean

        * created\_at

          time

        * id

          id

        * subject\_type

          string

        - The action that occured.

        - Example:

          * `action:create`

          Whether or not to include [comment-events](https://shopify.dev/api/admin-graphql/latest/objects/CommentEvent) in your search, passing `false` will exclude comment-events, any other value will include comment-events.

        - Example:

          * `false`
          * `true`

          Filter by the date and time when the event happened.

        - Example:

          * `created_at:>2020-10-21`
          * `created_at:<now`

          Filter by `id` range.

        - Example:

          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

          The resource type affected by this event. See [EventSubjectType](https://shopify.dev/api/admin-graphql/latest/enums/EventSubjectType) for possible values.

          Example:

          * `PRODUCT_VARIANT`
          * `PRODUCT`
          * `COLLECTION`

    ***

  * external​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A unique externally-supplied ID for the company.

  * has​Timeline​Comment

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the merchant added a timeline comment to the company.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * lifetime​Duration

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The lifetime duration of the company, since it became a customer of the shop. Examples: `2 days`, `3 months`, `1 year`.

  * locations

    [Company​Location​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationConnection)

    non-null

    The list of locations in the company.

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

      [Company​Location​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyLocationSortKeys)

      Default:ID

      Sort the underlying list by the given key.

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * company\_id

          id

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:
          * `query=Bob Norman`
          * `query=title:green hoodie`

      * created\_at

        time

      * external\_id

        string

      * * id

          id

        * ids

          string

        - Filter by `id` range.

        - Example:
          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

      * * metafields.{namespace}.{key}

          mixed

        * name

          string

        - Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

        - Example:
          * `metafields.custom.on_sale:true`
          * `metafields.product.material:"gid://shopify/Metaobject/43458085"`

      * updated\_at

        time

    ***

  * locations​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The number of locations that belong to the company.

  * main​Contact

    [Company​Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

    The main contact for the company.

  * metafield

    [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      required

      The key for the metafield.

    ***

  * metafields

    [Metafield​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

    non-null

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      The metafield namespace to filter by. If omitted, all metafields are returned.

    * keys

      [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      List of keys of metafields in the format `namespace.key`, will be returned in the same format.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The name of the company.

  * note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A note about the company.

  * orders

    [Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

    non-null

    The list of the company's orders.

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

      [Order​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    ***

  * orders​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The total number of orders placed for this company, across all its locations.

  * total​Spent

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The total amount spent by this company, across all its locations.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was last modified.

  * contact​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-nullDeprecated

  * metafield​Definitions

    [Metafield​Definition​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

    non-nullDeprecated

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      Filter metafield definitions by namespace.

    * pinned​Status

      [Metafield​Definition​Pinned​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinnedStatus)

      Default:ANY

      Filter by the definition's pinned status.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

      [Metafield​Definition​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * created\_at

          time

        * id

          id

        * key

          string

        * namespace

          string

        * owner\_type

          string

        * type

          string

        * updated\_at

          time

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:

          * `query=Bob Norman`
          * `query=title:green hoodie`

          Filter by the date and time when the metafield definition was created.

        - Example:

          * `created_at:>2020-10-21T23:39:20Z`
          * `created_at:<now`
          * `created_at:<=2024`

          Filter by `id` range.

        - Example:

          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

          Filter by the metafield definition [`key`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-key) field.

        - Example:

          * `key:some-key`

          Filter by the metafield definition [`namespace`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-namespace) field.

        - Example:

          * `namespace:some-namespace`

          Filter by the metafield definition [`ownerType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-ownertype) field.

        - Example:

          * `owner_type:PRODUCT`

          Filter by the metafield definition [`type`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-type) field.

        - Example:

          * `type:single_line_text_field`

          Filter by the date and time when the metafield definition was last updated.

          Example:

          * `updated_at:>2020-10-21T23:39:20Z`
          * `updated_at:<now`
          * `updated_at:<=2024`

    ***

* [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  OBJECT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

  * billing​Address

    [Company​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyAddress)

    The address used as billing address for the location.

  * buyer​Experience​Configuration

    [Buyer​Experience​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration)

    The configuration for the buyer's B2B checkout.

  * catalogs

    [Catalog​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CatalogConnection)

    non-null

    The list of catalogs associated with the company location.

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

  * catalogs​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The number of catalogs associated with the company location. Limited to a maximum of 10000 by default.

    * limit

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      Default:10000

      ### Arguments

      The upper bound on count value before returning a result. Use `null` to have no limit.

    ***

  * company

    [Company!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

    non-null

    The company that the company location belongs to.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was created in Shopify.

  * currency

    [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

    non-null

    The location's currency based on the shipping address. If the shipping address is empty, then the value is the shop's primary market.

  * default​Cursor

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

  * draft​Orders

    [Draft​Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection)

    non-null

    The list of draft orders for the company location.

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

    ***

  * events

    [Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

    non-null

    The paginated list of events associated with the host subject.

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

      [Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * action

          string

        * comments

          boolean

        * created\_at

          time

        * id

          id

        * subject\_type

          string

        - The action that occured.

        - Example:

          * `action:create`

          Whether or not to include [comment-events](https://shopify.dev/api/admin-graphql/latest/objects/CommentEvent) in your search, passing `false` will exclude comment-events, any other value will include comment-events.

        - Example:

          * `false`
          * `true`

          Filter by the date and time when the event happened.

        - Example:

          * `created_at:>2020-10-21`
          * `created_at:<now`

          Filter by `id` range.

        - Example:

          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

          The resource type affected by this event. See [EventSubjectType](https://shopify.dev/api/admin-graphql/latest/enums/EventSubjectType) for possible values.

          Example:

          * `PRODUCT_VARIANT`
          * `PRODUCT`
          * `COLLECTION`

    ***

  * external​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A unique externally-supplied ID for the company location.

  * has​Timeline​Comment

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the merchant added a timeline comment to the company location.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * in​Catalog

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the company location is assigned a specific catalog.

    * catalog​Id

      [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

      required

      ### Arguments

      The ID of the catalog.

    ***

  * locale

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The preferred locale of the company location.

  * metafield

    [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      required

      The key for the metafield.

    ***

  * metafields

    [Metafield​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

    non-null

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      The metafield namespace to filter by. If omitted, all metafields are returned.

    * keys

      [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      List of keys of metafields in the format `namespace.key`, will be returned in the same format.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The name of the company location.

  * note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A note about the company location.

  * orders

    [Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

    non-null

    The list of orders for the company location.

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

      [Order​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    ***

  * orders​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The total number of orders placed for the location.

  * phone

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The phone number of the company location.

  * role​Assignments

    [Company​Contact​Role​Assignment​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleAssignmentConnection)

    non-null

    The list of roles assigned to the company location.

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

      [Company​Contact​Role​Assignment​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyContactRoleAssignmentSortKeys)

      Default:ID

      Sort the underlying list by the given key.

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * company\_contact\_id

          id

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:
          * `query=Bob Norman`
          * `query=title:green hoodie`

      * company\_contact\_role\_id

        id

      * company\_id

        id

      * company\_location\_id

        id

      * created\_at

        time

      * * id

          id

        * location\_name

          string

        - Filter by `id` range.

        - Example:
          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

      * role\_name

        string

      * updated\_at

        time

    ***

  * shipping​Address

    [Company​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyAddress)

    The address used as shipping address for the location.

  * staff​Member​Assignments

    [Company​Location​Staff​Member​Assignment​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationStaffMemberAssignmentConnection)

    non-null

    The list of staff members assigned to the company location.

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

      [Company​Location​Staff​Member​Assignment​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyLocationStaffMemberAssignmentSortKeys)

      Default:ID

      Sort the underlying list by the given key.

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * company\_location\_id

        id

      * created\_at

        time

      * * id

          id

        * staff\_member\_id

          id

        - Filter by `id` range.

        - Example:
          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

      * updated\_at

        time

    ***

  * store​Credit​Accounts

    [Store​Credit​Account​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountConnection)

    non-null

    Returns a list of store credit accounts that belong to the owner resource. A store credit account owner can hold multiple accounts each with a different currency.

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

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * currency\_code

        string

      * id

        id

        Filter by `id` range.

        Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    ***

  * tax​Settings

    [Company​Location​Tax​Settings!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationTaxSettings)

    non-null

    The tax settings for the company location.

  * total​Spent

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The total amount spent by the location.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was last modified.

  * market

    [Market!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

    non-nullDeprecated

  * metafield​Definitions

    [Metafield​Definition​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

    non-nullDeprecated

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      Filter metafield definitions by namespace.

    * pinned​Status

      [Metafield​Definition​Pinned​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinnedStatus)

      Default:ANY

      Filter by the definition's pinned status.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

      [Metafield​Definition​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * created\_at

          time

        * id

          id

        * key

          string

        * namespace

          string

        * owner\_type

          string

        * type

          string

        * updated\_at

          time

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:

          * `query=Bob Norman`
          * `query=title:green hoodie`

          Filter by the date and time when the metafield definition was created.

        - Example:

          * `created_at:>2020-10-21T23:39:20Z`
          * `created_at:<now`
          * `created_at:<=2024`

          Filter by `id` range.

        - Example:

          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

          Filter by the metafield definition [`key`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-key) field.

        - Example:

          * `key:some-key`

          Filter by the metafield definition [`namespace`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-namespace) field.

        - Example:

          * `namespace:some-namespace`

          Filter by the metafield definition [`ownerType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-ownertype) field.

        - Example:

          * `owner_type:PRODUCT`

          Filter by the metafield definition [`type`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-type) field.

        - Example:

          * `type:single_line_text_field`

          Filter by the date and time when the metafield definition was last updated.

          Example:

          * `updated_at:>2020-10-21T23:39:20Z`
          * `updated_at:<now`
          * `updated_at:<=2024`

    ***

  * order​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-nullDeprecated

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    non-nullDeprecated

  * tax​Registration​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

* [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  OBJECT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  Caution

  Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

  ***

  * addresses​V2

    [Mailing​Address​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MailingAddressConnection)

    non-null

    The addresses associated with the customer.

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

  * amount​Spent

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The total amount that the customer has spent on orders in their lifetime.

  * can​Delete

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the merchant can delete the customer from their store.

    A customer can be deleted from a store only if they haven't yet made an order. After a customer makes an order, they can't be deleted from a store.

  * company​Contact​Profiles

    [\[Company​Contact!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

    non-null

    A list of the customer's company contact profiles.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the customer was added to the store.

  * data​Sale​Opt​Out

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the customer has opted out of having their data sold.

  * default​Address

    [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

    The default address associated with the customer.

  * default​Email​Address

    [Customer​Email​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress)

    The customer's default email address.

  * default​Phone​Number

    [Customer​Phone​Number](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber)

    The customer's default phone number.

  * display​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The full name of the customer, based on the values for first\_name and last\_name. If the first\_name and last\_name are not available, then this falls back to the customer's email address, and if that is not available, the customer's phone number.

  * events

    [Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

    non-null

    A list of events associated with the customer.

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

      [Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * action

          string

        * comments

          boolean

        * created\_at

          time

        * id

          id

        * subject\_type

          string

        - The action that occured.

        - Example:

          * `action:create`

          Whether or not to include [comment-events](https://shopify.dev/api/admin-graphql/latest/objects/CommentEvent) in your search, passing `false` will exclude comment-events, any other value will include comment-events.

        - Example:

          * `false`
          * `true`

          Filter by the date and time when the event happened.

        - Example:

          * `created_at:>2020-10-21`
          * `created_at:<now`

          Filter by `id` range.

        - Example:

          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

          The resource type affected by this event. See [EventSubjectType](https://shopify.dev/api/admin-graphql/latest/enums/EventSubjectType) for possible values.

          Example:

          * `PRODUCT_VARIANT`
          * `PRODUCT`
          * `COLLECTION`

    ***

  * first​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The customer's first name.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * image

    [Image!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

    non-null

    The image associated with the customer.

    * size

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      Deprecated

      ### Arguments

    ***

  * last​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The customer's last name.

  * last​Order

    [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

    The customer's last order.

  * legacy​Resource​Id

    [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

    non-null

    The ID of the corresponding resource in the REST Admin API.

  * lifetime​Duration

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The amount of time since the customer was first added to the store.

    Example: 'about 12 years'.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The customer's locale.

  * mergeable

    [Customer​Mergeable!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeable)

    non-null

    Whether the customer can be merged with another customer.

  * metafield

    [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      required

      The key for the metafield.

    ***

  * metafields

    [Metafield​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

    non-null

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      The metafield namespace to filter by. If omitted, all metafields are returned.

    * keys

      [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      List of keys of metafields in the format `namespace.key`, will be returned in the same format.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

  * multipass​Identifier

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A unique identifier for the customer that's used with Multipass login.

  * note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A note about the customer.

  * number​Of​Orders

    [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

    non-null

    The number of orders that the customer has made at the store in their lifetime.

  * orders

    [Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

    non-null

    A list of the customer's orders.

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

      [Order​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * cart\_token

          string

        * channel

          string

        * channel\_id

          id

        * chargeback\_status

          string

        * checkout\_token

          string

        * confirmation\_number

          string

        * created\_at

          time

        * credit\_card\_last4

          string

        * current\_total\_price

          float

        * customer\_id

          id

        * delivery\_method

          string

        * discount\_code

          string

        * email

          string

        * financial\_status

          string

        * fraud\_protection\_level

          string

        * fulfillment\_location\_id

          id

        * fulfillment\_status

          string

        * gateway

          string

        * id

          id

        * location\_id

          id

        * metafields.{namespace}.{key}

          mixed

        * name

          string

        * payment\_id

          string

        * payment\_provider\_id

          id

        * po\_number

          string

        * processed\_at

          time

        * reference\_location\_id

          id

        * return\_status

          string

        * risk\_level

          string

        * sales\_channel

          string

        * sku

          string

        * source\_identifier

          string

        * source\_name

          string

        * status

          string

        * subtotal\_line\_items\_quantity

          string

        * tag

          string

        * tag\_not

          string

        * test

          boolean

        * total\_weight

          string

        * updated\_at

          time

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:

          * `query=Bob Norman`
          * `query=title:green hoodie`

          Filter by the cart token's unique value to track abandoned cart conversions or troubleshoot checkout issues. The token references the cart that's associated with an order.

        - Example:

          * `cart_token:abc123`

          Filter by the channel information [`handle`](https://shopify.dev/api/admin-graphql/latest/objects/ChannelInformation#field-ChannelInformation.fields.channelDefinition.handle) (`ChannelInformation.channelDefinition.handle`) field.

        - Example:

          * `channel:web`
          * `channel:web,pos`

          Filter by the channel [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.id) field.

        - Example:

          * `channel_id:123`

          Filter by the order's chargeback status. A chargeback occurs when a customer questions the legitimacy of a charge with their financial institution.

        - Valid values:

          * `accepted`
          * `charge_refunded`
          * `lost`
          * `needs_response`
          * `under_review`
          * `won`

          Example:

          * `chargeback_status:accepted`

          Filter by the checkout token's unique value to analyze conversion funnels or resolve payment issues. The checkout token's value references the checkout that's associated with an order.

        - Example:

          * `checkout_token:abc123`

          Filter by the randomly generated alpha-numeric identifier for an order that can be displayed to the customer instead of the sequential order name. This value isn't guaranteed to be unique.

        - Example:

          * `confirmation_number:ABC123`

          Filter by the date and time when the order was created in Shopify's system.

        - Example:

          * `created_at:2020-10-21T23:39:20Z`
          * `created_at:<now`
          * `created_at:<=2024`

          Filter by the last four digits of the payment card that was used to pay for the order. This filter matches only the last four digits of the card for heightened security.

        - Example:

          * `credit_card_last4:1234`

          Filter by the current total price of the order in the shop currency, including any returns/refunds/removals. This filter supports both exact values and ranges.

        - Example:

          * `current_total_price:10`
          * `current_total_price:>=5.00 current_total_price:<=20.99`

          Filter orders by the customer [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Customer#field-Customer.fields.id) field.

        - Example:

          * `customer_id:123`

          Filter by the delivery [`methodType`](https://shopify.dev/api/admin-graphql/2024-07/objects/DeliveryMethod#field-DeliveryMethod.fields.methodType) field.

        - Valid values:

          * `shipping`
          * `pick-up`
          * `retail`
          * `local`
          * `pickup-point`
          * `none`

          Example:

          * `delivery_method:shipping`

          Filter by the case-insensitive discount code that was applied to the order at checkout. Limited to the first discount code used on an order. Maximum characters: 255.

        - Example:

          * `discount_code:ABC123`

          Filter by the email address that's associated with the order to provide customer support or analyze purchasing patterns.

        - Example:

          * `email:example@shopify.com`

          Filter by the order [`displayFinancialStatus`](https://shopify.dev/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFinancialStatus) field.

        - Valid values:

          * `paid`
          * `pending`
          * `authorized`
          * `partially_paid`
          * `partially_refunded`
          * `refunded`
          * `voided`
          * `expired`

          Example:

          * `financial_status:authorized`

          Filter by the level of fraud protection that's applied to the order. Use this filter to manage risk or handle disputes.

        - Valid values:

          * `fully_protected`
          * `partially_protected`
          * `not_protected`
          * `pending`
          * `not_eligible`
          * `not_available`

          Example:

          * `fraud_protection_level:fully_protected`

          Filter by the fulfillment location [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.location.id) (`Fulfillment.location.id`) field.

        - Example:

          * `fulfillment_location_id:123`

          Filter by the [`displayFulfillmentStatus`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFulfillmentStatus) field to prioritize shipments or monitor order processing.

        - Valid values:

          * `unshipped`
          * `shipped`
          * `fulfilled`
          * `partial`
          * `scheduled`
          * `on_hold`
          * `unfulfilled`
          * `request_declined`

          Example:

          * `fulfillment_status:fulfilled`

          Filter by the [`paymentGatewayNames`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.paymentGatewayNames) field. Use this filter to find orders that were processed through specific payment providers like Shopify Payments, PayPal, or other custom payment gateways.

        - Example:

          * `gateway:shopify_payments`

          Filter by `id` range.

        - Example:

          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

          Filter by the location [`id`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.id) that's associated with the order to view and manage orders for specific locations. For POS orders, locations must be defined in the Shopify admin under **Settings** > **Locations**. If no ID is provided, then the primary location of the shop is returned.

        - Example:

          * `location_id:123`

          Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

        - Example:

          * `metafields.custom.on_sale:true`
          * `metafields.product.material:"gid://shopify/Metaobject/43458085"`

          Filter by the order [`name`](https://shopify.dev/api/admin-graphql/latest/objects/Order#field-name) field.

        - Example:

          * `name:1001-A`

          Filter by the payment ID that's associated with the order to reconcile financial records or troubleshoot payment issues.

        - Example:

          * `payment_id:abc123`

          Filter by the ID of the payment provider that's associated with the order to manage payment methods or troubleshoot transactions.

        - Example:

          * `payment_provider_id:123`

          Filter by the order [`poNumber`](https://shopify.dev/api/admin-graphql/latest/objects/order#field-Order.fields.poNumber) field.

        - Example:

          * `po_number:P01001`

          Filter by the order [`processedAt`](https://shopify.dev/api/admin-graphql/latest/objects/order#field-Order.fields.processedAt) field.

        - Example:

          * `processed_at:2021-01-01T00:00:00Z`

          Filter by the ID of a location that's associated with the order, such as locations from fulfillments, refunds, or the shop's primary location.

        - Example:

          * `reference_location_id:123`

          Filter by the order's [`returnStatus`](https://shopify.dev/api/admin-graphql/latest/objects/Order#field-Order.fields.returnStatus) to monitor returns processing and track which orders have active returns.

        - Valid values:

          * `return_requested`
          * `in_progress`
          * `inspection_complete`
          * `returned`
          * `return_failed`
          * `no_return`

          Example:

          * `return_status:in_progress`

          Filter by the order risk assessment [`riskLevel`](https://shopify.dev/api/admin-graphql/latest/objects/OrderRiskAssessment#field-OrderRiskAssessment.fields.riskLevel) field.

        - Valid values:

          * `high`
          * `medium`
          * `low`
          * `none`
          * `pending`

          Example:

          * `risk_level:high`

          Filter by the [sales channel](https://shopify.dev/docs/apps/build/sales-channels) where the order was made to analyze performance or manage fulfillment processes.

        - Example:

          * `sales_channel: some_sales_channel`

          Filter by the product variant [`sku`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

        - Example:

          * `sku:ABC123`

          Filter by the ID of the order placed on the originating platform, such as a unique POS or third-party identifier. This value doesn't correspond to the Shopify ID that's generated from a completed draft order.

        - Example:

          * `source_identifier:1234-12-1000`

          Filter by the platform where the order was placed to distinguish between web orders, POS sales, draft orders, or third-party channels. Use this filter to analyze sales performance across different ordering methods.

        - Example:

          * `source_name:web`
          * `source_name:shopify_draft_order`

          Filter by the order's status to manage workflows or analyze the order lifecycle.

        - Valid values:

          * `open`
          * `closed`
          * `cancelled`
          * `not_closed`

          Example:

          * `status:open`

          Filter by the total number of items across all line items in an order. This filter supports both exact values and ranges, and is useful for identifying bulk orders or analyzing purchase volume patterns.

        - Example:

          * `subtotal_line_items_quantity:10`
          * `subtotal_line_items_quantity:5..20`

          Filter objects by the `tag` field.

        - Example:

          * `tag:my_tag`

          Filter by objects that don’t have the specified tag.

        - Example:

          * `tag_not:my_tag`

          Filter by test orders. Test orders are made using the [Shopify Bogus Gateway](https://help.shopify.com/manual/checkout-settings/test-orders/payments-test-mode#bogus-gateway) or a payment provider with test mode enabled.

        - Example:

          * `test:true`

          Filter by the order weight. This filter supports both exact values and ranges, and is to be used to filter orders by the total weight of all items (excluding packaging). It takes a unit of measurement as a suffix. It accepts the following units: g, kg, lb, oz.

        - Example:

          * `total_weight:10.5kg`
          * `total_weight:>=5g total_weight:<=20g`
          * `total_weight:.5 lb`

          Filter by the date and time when the order was last updated in Shopify's system.

          Example:

          * `updated_at:2020-10-21T23:39:20Z`
          * `updated_at:<now`
          * `updated_at:<=2024`

    ***

  * payment​Methods

    [Customer​Payment​Method​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerPaymentMethodConnection)

    non-null

    A list of the customer's payment methods.

    * show​Revoked

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      ### Arguments

      Whether to show the customer's revoked payment method.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

  * product​Subscriber​Status

    [Customer​Product​Subscriber​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerProductSubscriberStatus)

    non-null

    Possible subscriber states of a customer defined by their subscription contracts.

  * state

    [Customer​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerState)

    non-null

    The state of the customer's account with the shop.

    Please note that this only meaningful when Classic Customer Accounts is active.

  * statistics

    [Customer​Statistics!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerStatistics)

    non-null

    The statistics for a given customer.

  * store​Credit​Accounts

    [Store​Credit​Account​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountConnection)

    non-null

    Returns a list of store credit accounts that belong to the owner resource. A store credit account owner can hold multiple accounts each with a different currency.

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

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * currency\_code

        string

      * id

        id

        Filter by `id` range.

        Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    ***

  * subscription​Contracts

    [Subscription​Contract​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionContractConnection)

    non-null

    A list of the customer's subscription contracts.

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

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A comma separated list of tags that have been added to the customer.

  * tax​Exempt

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the customer is exempt from being charged taxes on their orders.

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    non-null

    The list of tax exemptions applied to the customer.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the customer was last updated.

  * verified​Email

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the customer has verified their email address. Defaults to `true` if the customer is created through the Shopify admin or API.

  * addresses

    [\[Mailing​Address!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

    non-nullDeprecated

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      Truncate the array result to this size.

    ***

  * email

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

  * email​Marketing​Consent

    [Customer​Email​Marketing​Consent​State](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailMarketingConsentState)

    Deprecated

  * has​Timeline​Comment

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-nullDeprecated

  * market

    [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

    Deprecated

  * metafield​Definitions

    [Metafield​Definition​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

    non-nullDeprecated

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      Filter metafield definitions by namespace.

    * pinned​Status

      [Metafield​Definition​Pinned​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinnedStatus)

      Default:ANY

      Filter by the definition's pinned status.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

      [Metafield​Definition​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * created\_at

          time

        * id

          id

        * key

          string

        * namespace

          string

        * owner\_type

          string

        * type

          string

        * updated\_at

          time

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:

          * `query=Bob Norman`
          * `query=title:green hoodie`

          Filter by the date and time when the metafield definition was created.

        - Example:

          * `created_at:>2020-10-21T23:39:20Z`
          * `created_at:<now`
          * `created_at:<=2024`

          Filter by `id` range.

        - Example:

          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

          Filter by the metafield definition [`key`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-key) field.

        - Example:

          * `key:some-key`

          Filter by the metafield definition [`namespace`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-namespace) field.

        - Example:

          * `namespace:some-namespace`

          Filter by the metafield definition [`ownerType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-ownertype) field.

        - Example:

          * `owner_type:PRODUCT`

          Filter by the metafield definition [`type`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-type) field.

        - Example:

          * `type:single_line_text_field`

          Filter by the date and time when the metafield definition was last updated.

          Example:

          * `updated_at:>2020-10-21T23:39:20Z`
          * `updated_at:<now`
          * `updated_at:<=2024`

    ***

  * phone

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

  * sms​Marketing​Consent

    [Customer​Sms​Marketing​Consent​State](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentState)

    Deprecated

  * unsubscribe​Url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    non-nullDeprecated

  * valid​Email​Address

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-nullDeprecated

* [Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  OBJECT

  An order that a merchant creates on behalf of a customer. Draft orders are useful for merchants that need to do the following tasks:

  * Create new orders for sales made by phone, in person, by chat, or elsewhere. When a merchant accepts payment for a draft order, an order is created.
  * Send invoices to customers to pay with a secure checkout link.
  * Use custom items to represent additional costs or products that aren't displayed in a shop's inventory.
  * Re-create orders manually from active sales channels.
  * Sell products at discount or wholesale rates.
  * Take pre-orders.

  For draft orders in multiple currencies `presentment_money` is the source of truth for what a customer is going to be charged and `shop_money` is an estimate of what the merchant might receive in their shop currency.

  **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

  Draft orders created on or after April 1, 2025 will be automatically purged after one year of inactivity.

  * accept​Automatic​Discounts

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether or not to accept automatic discounts on the draft order during calculation. If false, only discount codes and custom draft order discounts (see `appliedDiscount`) will be applied. If true, eligible automatic discounts will be applied in addition to discount codes and custom draft order discounts.

  * allow​Discount​Codes​In​Checkout

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether discount codes are allowed during checkout of this draft order.

  * all​Variant​Prices​Overridden

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether all variant prices have been overridden.

  * any​Variant​Prices​Overridden

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether any variant prices have been overridden.

  * applied​Discount

    [Draft​Order​Applied​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAppliedDiscount)

    The custom order-level discount applied.

  * billing​Address

    [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

    The billing address of the customer.

  * billing​Address​Matches​Shipping​Address

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the billing address matches the shipping address.

  * completed​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time when the draft order was converted to a new order, and had it's status changed to **Completed**.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the draft order was created in Shopify.

  * currency​Code

    [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

    non-null

    The shop currency used for calculation.

  * custom​Attributes

    [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

    non-null

    The custom information added to the draft order on behalf of the customer.

  * customer

    [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

    The customer who will be sent an invoice.

  * default​Cursor

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

  * discount​Codes

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    All discount codes applied.

  * email

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The email address of the customer, which is used to send notifications.

  * events

    [Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

    non-null

    The list of events associated with the draft order.

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

      [Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * action

          string

        * comments

          boolean

        * created\_at

          time

        * id

          id

        * subject\_type

          string

        - The action that occured.

        - Example:

          * `action:create`

          Whether or not to include [comment-events](https://shopify.dev/api/admin-graphql/latest/objects/CommentEvent) in your search, passing `false` will exclude comment-events, any other value will include comment-events.

        - Example:

          * `false`
          * `true`

          Filter by the date and time when the event happened.

        - Example:

          * `created_at:>2020-10-21`
          * `created_at:<now`

          Filter by `id` range.

        - Example:

          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

          The resource type affected by this event. See [EventSubjectType](https://shopify.dev/api/admin-graphql/latest/enums/EventSubjectType) for possible values.

          Example:

          * `PRODUCT_VARIANT`
          * `PRODUCT`
          * `COLLECTION`

    ***

  * has​Timeline​Comment

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the merchant has added timeline comments to the draft order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * invoice​Email​Template​Subject

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The subject defined for the draft invoice email template.

  * invoice​Sent​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time when the invoice was last emailed to the customer.

  * invoice​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    The link to the checkout, which is sent to the customer in the invoice email.

  * legacy​Resource​Id

    [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

    non-null

    The ID of the corresponding resource in the REST Admin API.

  * line​Items

    [Draft​Order​Line​Item​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderLineItemConnection)

    non-null

    The list of the line items in the draft order.

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

  * line​Items​Subtotal​Price

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    A subtotal of the line items and corresponding discounts, excluding shipping charges, shipping discounts, taxes, or order discounts.

  * localized​Fields

    [Localized​Field​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizedFieldConnection)

    non-null

    List of localized fields for the resource.

    * country​Codes

      [\[Country​Code!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

      ### Arguments

      The country codes of the extensions.

    * purposes

      [\[Localized​Field​Purpose!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizedFieldPurpose)

      The purpose of the extensions.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

  * metafield

    [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      required

      The key for the metafield.

    ***

  * metafields

    [Metafield​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

    non-null

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      The metafield namespace to filter by. If omitted, all metafields are returned.

    * keys

      [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      List of keys of metafields in the format `namespace.key`, will be returned in the same format.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The identifier for the draft order, which is unique within the store. For example, *#D1223*.

  * note2

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The text from an optional note attached to the draft order.

  * order

    [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

    The order that was created from the draft order.

  * payment​Terms

    [Payment​Terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms)

    The associated payment terms for this draft order.

  * phone

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The assigned phone number.

  * platform​Discounts

    [\[Draft​Order​Platform​Discount!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscount)

    non-null

    The list of platform discounts applied.

  * po​Number

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The purchase order number.

  * presentment​Currency​Code

    [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

    non-null

    The payment currency used for calculation.

  * purchasing​Entity

    [Purchasing​Entity](https://shopify.dev/docs/api/admin-graphql/latest/unions/PurchasingEntity)

    The purchasing entity.

  * ready

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the draft order is ready and can be completed. Draft orders might have asynchronous operations that can take time to finish.

  * reserve​Inventory​Until

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The time after which inventory will automatically be restocked.

  * shipping​Address

    [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

    The shipping address of the customer.

  * shipping​Line

    [Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine)

    The line item containing the shipping information and costs.

  * status

    [Draft​Order​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DraftOrderStatus)

    non-null

    The status of the draft order.

  * subtotal​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The subtotal, of the line items and their discounts, excluding shipping charges, shipping discounts, and taxes.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The comma separated list of tags associated with the draft order. Updating `tags` overwrites any existing tags that were previously added to the draft order. To add new tags without overwriting existing tags, use the [tagsAdd](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd) mutation.

  * taxes​Included

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the line item prices include taxes.

  * tax​Exempt

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the draft order is tax exempt.

  * tax​Lines

    [\[Tax​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

    non-null

    The list of of taxes lines charged for each line item and shipping line.

  * total​Discounts​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    Total discounts.

  * total​Line​Items​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    Total price of line items, excluding discounts.

  * total​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total price, includes taxes, shipping charges, and discounts.

  * total​Quantity​Of​Line​Items

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The sum of individual line item quantities. If the draft order has bundle items, this is the sum containing the quantities of individual items in the bundle.

  * total​Shipping​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total shipping price.

  * total​Tax​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total tax.

  * total​Weight

    [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

    non-null

    The total weight in grams of the draft order.

  * transformer​Fingerprint

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Fingerprint of the current cart. In order to have bundles work, the fingerprint must be passed to each request as it was previously returned, unmodified.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the draft order was last changed. The format is YYYY-MM-DD HH:mm:ss. For example, 2016-02-05 17:04:01.

  * visible​To​Customer

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the draft order will be visible to the customer on the self-serve portal.

  * warnings

    [\[Draft​Order​Warning!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DraftOrderWarning)

    non-null

    The list of warnings raised while calculating.

  * localization​Extensions

    [Localization​Extension​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizationExtensionConnection)

    non-nullDeprecated

    * country​Codes

      [\[Country​Code!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

      ### Arguments

      The country codes of the extensions.

    * purposes

      [\[Localization​Extension​Purpose!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizationExtensionPurpose)

      The purpose of the extensions.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

  * market​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-nullDeprecated

  * market​Region​Country​Code

    [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

    non-nullDeprecated

  * subtotal​Price

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

  * total​Price

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

  * total​Shipping​Price

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

  * total​Tax

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

* [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  OBJECT

  Tracks the movement of [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) objects between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects. A transfer includes origin and destination information, [`InventoryTransferLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem) objects with quantities, and shipment details.

  Transfers progress through multiple [`statuses`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus). The transfer maintains [`LocationSnapshot`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot) objects of location details to preserve historical data even if locations change or are deleted later.

  * date​Created

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time the inventory transfer was created in UTC format.

  * destination

    [Location​Snapshot](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot)

    Snapshot of the destination location (name, address, when snapped) with an optional link to the live Location object. If the original location is deleted, the snapshot data will still be available but the location link will be nil.

  * events

    [Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

    non-null

    The list of events associated with the inventory transfer.

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

      [Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * action

          string

        * comments

          boolean

        * created\_at

          time

        * id

          id

        * subject\_type

          string

        - The action that occured.

        - Example:

          * `action:create`

          Whether or not to include [comment-events](https://shopify.dev/api/admin-graphql/latest/objects/CommentEvent) in your search, passing `false` will exclude comment-events, any other value will include comment-events.

        - Example:

          * `false`
          * `true`

          Filter by the date and time when the event happened.

        - Example:

          * `created_at:>2020-10-21`
          * `created_at:<now`

          Filter by `id` range.

        - Example:

          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

          The resource type affected by this event. See [EventSubjectType](https://shopify.dev/api/admin-graphql/latest/enums/EventSubjectType) for possible values.

          Example:

          * `PRODUCT_VARIANT`
          * `PRODUCT`
          * `COLLECTION`

    ***

  * has​Timeline​Comment

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the merchant has added timeline comments to the inventory transfer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * line​Items

    [Inventory​Transfer​Line​Item​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferLineItemConnection)

    non-null

    The line items associated with the inventory transfer.

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

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * id

          id

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:

          * `query=Bob Norman`
          * `query=title:green hoodie`

          Filter by `id` range.

          Example:

          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

    ***

  * line​Items​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The number of line items associated with the inventory transfer. Limited to a maximum of 10000 by default.

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * id

          id

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:

          * `query=Bob Norman`
          * `query=title:green hoodie`

          Filter by `id` range.

          Example:

          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

    * limit

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      Default:10000

      The upper bound on count value before returning a result. Use `null` to have no limit.

    ***

  * metafield

    [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      required

      The key for the metafield.

    ***

  * metafields

    [Metafield​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

    non-null

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      The metafield namespace to filter by. If omitted, all metafields are returned.

    * keys

      [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      List of keys of metafields in the format `namespace.key`, will be returned in the same format.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The name of the inventory transfer.

  * note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Additional note attached to the inventory transfer.

  * origin

    [Location​Snapshot](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot)

    Snapshot of the origin location (name, address, when snapped) with an optional link to the live Location object. If the original location is deleted, the snapshot data will still be available but the location link will be nil.

  * received​Quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The total quantity of items received in the transfer.

  * reference​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The reference name of the inventory transfer.

  * shipments

    [Inventory​Shipment​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentConnection)

    non-null

    The shipments associated with the inventory transfer.

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

  * status

    [Inventory​Transfer​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus)

    non-null

    The current status of the transfer.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A list of tags that have been added to the inventory transfer.

  * total​Quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The total quantity of items being transferred.

  * metafield​Definitions

    [Metafield​Definition​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

    non-nullDeprecated

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      Filter metafield definitions by namespace.

    * pinned​Status

      [Metafield​Definition​Pinned​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinnedStatus)

      Default:ANY

      Filter by the definition's pinned status.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

      [Metafield​Definition​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * created\_at

          time

        * id

          id

        * key

          string

        * namespace

          string

        * owner\_type

          string

        * type

          string

        * updated\_at

          time

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:

          * `query=Bob Norman`
          * `query=title:green hoodie`

          Filter by the date and time when the metafield definition was created.

        - Example:

          * `created_at:>2020-10-21T23:39:20Z`
          * `created_at:<now`
          * `created_at:<=2024`

          Filter by `id` range.

        - Example:

          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

          Filter by the metafield definition [`key`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-key) field.

        - Example:

          * `key:some-key`

          Filter by the metafield definition [`namespace`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-namespace) field.

        - Example:

          * `namespace:some-namespace`

          Filter by the metafield definition [`ownerType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-ownertype) field.

        - Example:

          * `owner_type:PRODUCT`

          Filter by the metafield definition [`type`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-type) field.

        - Example:

          * `type:single_line_text_field`

          Filter by the date and time when the metafield definition was last updated.

          Example:

          * `updated_at:>2020-10-21T23:39:20Z`
          * `updated_at:<now`
          * `updated_at:<=2024`

    ***

* [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  OBJECT

  The `Order` object represents a customer's request to purchase one or more products from a store. Use the `Order` object to handle the complete purchase lifecycle from checkout to fulfillment.

  Use the `Order` object when you need to:

  * Display order details on customer account pages or admin dashboards.
  * Create orders for phone sales, wholesale customers, or subscription services.
  * Update order information like shipping addresses, notes, or fulfillment status.
  * Process returns, exchanges, and partial refunds.
  * Generate invoices, receipts, and shipping labels.

  The `Order` object serves as the central hub connecting customer information, product details, payment processing, and fulfillment data within the GraphQL Admin API schema.

  ***

  Note

  Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older records, then you need to [request access to all orders](https://shopify.dev/docs/api/usage/access-scopes#orders-permissions). If your app is granted access, then you can add the `read_all_orders`, `read_orders`, and `write_orders` scopes.

  ***

  ***

  Caution

  Only use orders data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/docs/api/usage/access-scopes#requesting-specific-permissions) for apps that don't have a legitimate use for the associated data.

  ***

  Learn more about [building apps for orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).

  * additional​Fees

    [\[Additional​Fee!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFee)

    non-null

    A list of additional fees applied to an order, such as duties, import fees, or [tax lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.additionalFees.taxLines).

  * agreements

    [Sales​Agreement​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SalesAgreementConnection)

    non-null

    A list of sales agreements associated with the order, such as contracts defining payment terms, or delivery schedules between merchants and customers.

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

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * happened\_at

        time

      * id

        id

        Filter by `id` range.

        Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    ***

  * alerts

    [\[Resource​Alert!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceAlert)

    non-null

    A list of messages that appear on the **Orders** page in the Shopify admin. These alerts provide merchants with important information about an order's status or required actions.

  * app

    [Order​App](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderApp)

    The application that created the order. For example, "Online Store", "Point of Sale", or a custom app name. Use this to identify the order source for attribution and fulfillment workflows. Learn more about [building apps for orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).

  * billing​Address

    [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

    The billing address associated with the payment method selected by the customer for an order. Returns `null` if no billing address was provided during checkout.

  * billing​Address​Matches​Shipping​Address

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the billing address matches the [shipping address](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.shippingAddress). Returns `true` if both addresses are the same, and `false` if they're different or if an address is missing.

  * cancellation

    [Order​Cancellation](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCancellation)

    Details of an order's cancellation, if it has been canceled. This includes the reason, date, and any [staff notes](https://shopify.dev/api/admin-graphql/latest/objects/OrderCancellation#field-OrderCancellation.fields.staffNote).

  * cancelled​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when an order was canceled. Returns `null` if the order hasn't been canceled.

  * cancel​Reason

    [Order​Cancel​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCancelReason)

    The reason provided for an order cancellation. For example, a merchant might cancel an order if there's insufficient inventory. Returns `null` if the order hasn't been canceled.

  * can​Mark​As​Paid

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether an order can be manually marked as paid. Returns `false` if the order is already paid, is canceled, has pending [Shopify Payments](https://help.shopify.com/en/manual/payments/shopify-payments/payouts) transactions, or has a negative payment amount.

  * can​Notify​Customer

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether order notifications can be sent to the customer. Returns `true` if the customer has a valid [email address](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.email).

  * capturable

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether an authorized payment for an order can be captured. Returns `true` if an authorized payment exists that hasn't been fully captured yet. Learn more about [capturing payments](https://help.shopify.com/en/manual/fulfillment/managing-orders/payments/capturing-payments).

  * cart​Discount​Amount​Set

    [Money​Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    The total discount amount applied at the time the order was created, displayed in both shop and presentment currencies, before returns, refunds, order edits, and cancellations. This field only includes discounts applied to the entire order.

  * channel​Information

    [Channel​Information](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelInformation)

    Details about the sales channel that created the order, such as the [channel app type](https://shopify.dev/docs/api/admin-graphql/latest/objects/channel#field-Channel.fields.channelType) and [channel name](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelDefinition#field-ChannelDefinition.fields.channelName), which helps to track order sources.

  * client​Ip

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The IP address of the customer who placed the order. Useful for fraud detection and geographic analysis.

  * closed

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether an order is closed. An order is considered closed if all its line items have been fulfilled or canceled, and all financial transactions are complete.

  * closed​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when an order was closed. Shopify automatically records this timestamp when all items have been fulfilled or canceled, and all financial transactions are complete. Returns `null` if the order isn't closed.

  * confirmation​Number

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A customer-facing order identifier, often shown instead of the sequential order name. It uses a random alphanumeric format (for example, `XPAV284CT`) and isn't guaranteed to be unique across orders.

  * confirmed

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether inventory has been reserved for an order. Returns `true` if inventory quantities for an order's [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) have been reserved. Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when an order was created. This timestamp is set when the customer completes checkout and remains unchanged throughout an order's lifecycle.

  * currency​Code

    [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

    non-null

    The shop currency when the order was placed. For example, "USD" or "CAD".

  * current​Cart​Discount​Amount​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The current total of all discounts applied to the entire order, after returns, refunds, order edits, and cancellations. This includes discount codes, automatic discounts, and other promotions that affect the whole order rather than individual line items. To get the original discount amount at the time of order creation, use the [`cartDiscountAmountSet`](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.cartDiscountAmountSet) field.

  * current​Shipping​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The current shipping price after applying refunds and discounts. If the parent `order.taxesIncluded` field is true, then this price includes taxes. Otherwise, this field is the pre-tax price.

  * current​Subtotal​Line​Items​Quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The current sum of the quantities for all line items that contribute to the order's subtotal price, after returns, refunds, order edits, and cancellations.

  * current​Subtotal​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total price of the order, after returns and refunds, in shop and presentment currencies. This includes taxes and discounts.

  * current​Tax​Lines

    [\[Tax​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

    non-null

    A list of all tax lines applied to line items on the order, after returns. Tax line prices represent the total price for all tax lines with the same `rate` and `title`.

  * current​Total​Additional​Fees​Set

    [Money​Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    The current total of all additional fees for an order, after any returns or modifications. Modifications include returns, refunds, order edits, and cancellations. Additional fees can include charges such as duties, import fees, and special handling.

  * current​Total​Discounts​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total amount discounted on the order after returns and refunds, in shop and presentment currencies. This includes both order and line level discounts.

  * current​Total​Duties​Set

    [Money​Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    The current total duties amount for an order, after any returns or modifications. Modifications include returns, refunds, order edits, and cancellations.

  * current​Total​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total price of the order, after returns, in shop and presentment currencies. This includes taxes and discounts.

  * current​Total​Tax​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The sum of the prices of all tax lines applied to line items on the order, after returns and refunds, in shop and presentment currencies.

  * current​Total​Weight

    [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

    non-null

    The total weight of the order after returns and refunds, in grams.

  * custom​Attributes

    [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

    non-null

    A list of additional information that has been attached to the order. For example, gift message, delivery instructions, or internal notes.

  * customer

    [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

    The customer who placed an order. Returns `null` if an order was created through a checkout without customer authentication, such as a guest checkout. Learn more about [customer accounts](https://help.shopify.com/manual/customers/customer-accounts).

  * customer​Accepts​Marketing

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the customer agreed to receive marketing emails at the time of purchase. Use this to ensure compliance with marketing consent laws and to segment customers for email campaigns. Learn more about [building customer segments](https://shopify.dev/docs/apps/build/marketing-analytics/customer-segments).

  * customer​Journey​Summary

    [Customer​Journey​Summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary)

    The customer's visits and interactions with the online store before placing the order. Use this to understand customer behavior, attribution sources, and marketing effectiveness to optimize your sales funnel.

  * customer​Locale

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The customer's language and region preference at the time of purchase. For example, "en" for English, "fr-CA" for French (Canada), or "es-MX" for Spanish (Mexico). Use this to provide localized customer service and targeted marketing in the customer's preferred language.

  * discount​Applications

    [Discount​Application​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountApplicationConnection)

    non-null

    A list of discounts that are applied to the order, excluding order edits and refunds. Includes discount codes, automatic discounts, and other promotions that reduce the order total.

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

  * discount​Code

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The discount code used for an order. Returns `null` if no discount code was applied.

  * discount​Codes

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The discount codes used for the order. Multiple codes can be applied to a single order.

  * display​Address

    [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

    The primary address of the customer, prioritizing shipping address over billing address when both are available. Returns `null` if neither shipping address nor billing address was provided.

  * display​Financial​Status

    [Order​Display​Financial​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderDisplayFinancialStatus)

    An order's financial status for display in the Shopify admin.

  * display​Fulfillment​Status

    [Order​Display​Fulfillment​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderDisplayFulfillmentStatus)

    non-null

    The order's fulfillment status that displays in the Shopify admin to merchants. For example, an order might be unfulfilled or scheduled. For detailed processing, use the [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) object.

  * disputes

    [\[Order​Dispute​Summary!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderDisputeSummary)

    non-null

    A list of payment disputes associated with the order, such as chargebacks or payment inquiries. Disputes occur when customers challenge transactions with their bank or payment provider.

  * duties​Included

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether duties are included in the subtotal price of the order. Duties are import taxes charged by customs authorities when goods cross international borders.

  * edited

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the order has had any edits applied. For example, adding or removing line items, updating quantities, or changing prices.

  * email

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The email address associated with the customer for this order. Used for sending order confirmations, shipping notifications, and other order-related communications. Returns `null` if no email address was provided during checkout.

  * estimated​Taxes

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether taxes on the order are estimated. This field returns `false` when taxes on the order are finalized and aren't subject to any changes.

  * events

    [Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

    non-null

    A list of events associated with the order. Events track significant changes and activities related to the order, such as creation, payment, fulfillment, and cancellation.

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

      [Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * action

          string

        * comments

          boolean

        * created\_at

          time

        * id

          id

        * subject\_type

          string

        - The action that occured.

        - Example:

          * `action:create`

          Whether or not to include [comment-events](https://shopify.dev/api/admin-graphql/latest/objects/CommentEvent) in your search, passing `false` will exclude comment-events, any other value will include comment-events.

        - Example:

          * `false`
          * `true`

          Filter by the date and time when the event happened.

        - Example:

          * `created_at:>2020-10-21`
          * `created_at:<now`

          Filter by `id` range.

        - Example:

          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

          The resource type affected by this event. See [EventSubjectType](https://shopify.dev/api/admin-graphql/latest/enums/EventSubjectType) for possible values.

          Example:

          * `PRODUCT_VARIANT`
          * `PRODUCT`
          * `COLLECTION`

    ***

  * fulfillable

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether there are line items that can be fulfilled. This field returns `false` when the order has no fulfillable line items. For a more granular view of the fulfillment status, refer to the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object.

  * fulfillment​Orders

    [Fulfillment​Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection)

    non-null

    A list of [fulfillment orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) for an order. Each fulfillment order groups [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.lineItems) that are fulfilled together, allowing an order to be processed in parts if needed.

    * displayable

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      ### Arguments

      If false, all fulfillment orders will be returned. If true, fulfillment orders that are normally hidden from the merchant will be excluded. For example, fulfillment orders that were closed after being combined or moved are hidden.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * assigned\_location\_id

          id

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:
          * `query=Bob Norman`
          * `query=title:green hoodie`

      * * id

          id

        * status

          string

        - Filter by `id` range.

        - Example:
          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

      * updated\_at

        time

    ***

  * fulfillments

    [\[Fulfillment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

    non-null

    A list of shipments for the order. Fulfillments represent the physical shipment of products to customers.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      Truncate the array result to this size.

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      Optional query string to filter fulfillments by timestamps. Examples: `created_at:>='2024-05-07T08:37:00Z' updated_at:<'2025-05-07T08:37:00Z'`, `created_at:'2024-05-07T08:37:00Z'`

    ***

  * fulfillments​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The total number of fulfillments for the order, including canceled ones.

  * fully​Paid

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the order has been paid in full. This field returns `true` when the total amount received equals or exceeds the order total.

  * has​Timeline​Comment

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the merchant has added a timeline comment to the order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * legacy​Resource​Id

    [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

    non-null

    The ID of the corresponding resource in the REST Admin API.

  * line​Items

    [Line​Item​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LineItemConnection)

    non-null

    A list of the order's line items. Line items represent the individual products and quantities that make up the order.

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

  * localized​Fields

    [Localized​Field​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizedFieldConnection)

    non-null

    List of localized fields for the resource.

    * country​Codes

      [\[Country​Code!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

      ### Arguments

      The country codes of the extensions.

    * purposes

      [\[Localized​Field​Purpose!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizedFieldPurpose)

      The purpose of the extensions.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

  * merchant​Business​Entity

    [Business​Entity!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessEntity)

    non-null

    The legal business structure that the merchant operates under for this order, such as an LLC, corporation, or partnership. Used for tax reporting, legal compliance, and determining which business entity is responsible for the order.

  * merchant​Editable

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the order can be edited by the merchant. Returns `false` for orders that can't be modified, such as canceled orders or orders with specific payment statuses.

  * merchant​Editable​Errors

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A list of reasons why the order can't be edited. For example, canceled orders can't be edited.

  * merchant​Of​Record​App

    [Order​App](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderApp)

    The application acting as the Merchant of Record for the order. The Merchant of Record is responsible for tax collection and remittance.

  * metafield

    [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      required

      The key for the metafield.

    ***

  * metafields

    [Metafield​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

    non-null

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      The metafield namespace to filter by. If omitted, all metafields are returned.

    * keys

      [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      List of keys of metafields in the format `namespace.key`, will be returned in the same format.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The unique identifier for the order that appears on the order page in the Shopify admin and the **Order status** page. For example, "#1001", "EN1001", or "1001-A". This value isn't unique across multiple stores. Use this field to identify orders in the Shopify admin and for order tracking.

  * net​Payment​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The net payment for the order, based on the total amount received minus the total amount refunded, in shop and presentment currencies.

  * non​Fulfillable​Line​Items

    [Line​Item​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LineItemConnection)

    non-null

    A list of line items that can't be fulfilled. For example, tips and fully refunded line items can't be fulfilled. For a more granular view of the fulfillment status, refer to the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object.

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

  * note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The note associated with the order. Contains additional information or instructions added by merchants or customers during the order process. Commonly used for special delivery instructions, gift messages, or internal processing notes.

  * number

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The order number used to generate the name using the store's configured order number prefix/suffix. This number isn't guaranteed to follow a consecutive integer sequence (e.g. 1, 2, 3..), nor is it guaranteed to be unique across multiple stores, or even for a single store.

  * original​Total​Additional​Fees​Set

    [Money​Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    The total amount of all additional fees, such as import fees or taxes, that were applied when an order was created. Returns `null` if additional fees aren't applicable.

  * original​Total​Duties​Set

    [Money​Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    The total amount of duties calculated when an order was created, before any modifications. Modifications include returns, refunds, order edits, and cancellations. Use [`currentTotalDutiesSet`](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currentTotalDutiesSet) to retrieve the current duties amount after adjustments.

  * original​Total​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total price of the order at the time of order creation, in shop and presentment currencies. Use this to compare the original order value against the current total after edits, returns, or refunds.

  * payment​Collection​Details

    [Order​Payment​Collection​Details!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderPaymentCollectionDetails)

    non-null

    The payment collection details for the order, including payment status, outstanding amounts, and collection information. Use this to understand when and how payments should be collected, especially for orders with deferred or installment payment terms.

  * payment​Gateway​Names

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A list of the names of all payment gateways used for the order. For example, "Shopify Payments" and "Cash on Delivery (COD)".

  * payment​Terms

    [Payment​Terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms)

    The payment terms associated with the order, such as net payment due dates or early payment discounts. Payment terms define when and how an order should be paid. Returns `null` if no specific payment terms were set for the order.

  * phone

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The phone number associated with the customer for this order. Useful for contacting customers about shipping updates, delivery notifications, or order issues. Returns `null` if no phone number was provided during checkout.

  * po​Number

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The purchase order (PO) number that's associated with an order. This is typically provided by business customers who require a PO number for their procurement.

  * presentment​Currency​Code

    [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

    non-null

    The currency used by the customer when placing the order. For example, "USD", "EUR", or "CAD". This may differ from the shop's base currency when serving international customers or using multi-currency pricing.

  * processed​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when the order was processed. This date and time might not match the date and time when the order was created.

  * product​Network

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the customer also purchased items from other stores in the network.

  * publication

    [Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

    The sales channel that the order was created from, such as the [Online Store](https://shopify.dev/docs/apps/build/app-surfaces#online-store) or [Shopify POS](https://shopify.dev/docs/apps/build/app-surfaces#point-of-sale).

  * purchasing​Entity

    [Purchasing​Entity](https://shopify.dev/docs/api/admin-graphql/latest/unions/PurchasingEntity)

    The business entity that placed the order, including company details and purchasing relationships. Used for B2B transactions to track which company or organization is responsible for the purchase and payment terms.

  * refundable

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the order can be refunded based on its payment transactions. Returns `false` for orders with no eligible payment transactions, such as fully refunded orders or orders with non-refundable payment methods.

  * refund​Discrepancy​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The difference between the suggested and actual refund amount of all refunds that have been applied to the order. A positive value indicates a difference in the merchant's favor, and a negative value indicates a difference in the customer's favor.

  * refunds

    [\[Refund!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund)

    non-null

    A list of refunds that have been applied to the order. Refunds represent money returned to customers for returned items, cancellations, or adjustments.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      Truncate the array result to this size.

    ***

  * registered​Source​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    The URL of the source that the order originated from, if found in the domain registry. Returns `null` if the source URL isn't in the domain registry.

  * requires​Shipping

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the order requires physical shipping to the customer. Returns `false` for digital-only orders (such as gift cards or downloadable products) and `true` for orders with physical products that need delivery. Use this to determine shipping workflows and logistics requirements.

  * restockable

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether any line items on the order can be restocked into inventory. Returns `false` for digital products, custom items, or items that can't be resold.

  * retail​Location

    [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

    The physical location where a retail order is created or completed, except for draft POS orders completed using the "mark as paid" flow in the Shopify admin, which return `null`. Transactions associated with the order might have been processed at a different location.

  * returns

    [Return​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnConnection)

    non-null

    The returns associated with the order. Contains information about items that customers have requested to return, including return reasons, status, and refund details. Use this to track and manage the return process for order items.

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

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * id

          id

        * status

          string

        - Filter by `id` range.

        - Example:
          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

    ***

  * return​Status

    [Order​Return​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderReturnStatus)

    non-null

    The order's aggregated return status for display purposes. Indicates the overall state of returns for the order, helping merchants track and manage the return process.

  * risk

    [Order​Risk​Summary!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskSummary)

    non-null

    The risk assessment summary for the order. Provides fraud analysis and risk scoring to help you identify potentially fraudulent orders. Use this to make informed decisions about order fulfillment and payment processing.

  * shipping​Address

    [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

    The shipping address where the order will be delivered. Contains the customer's delivery location for fulfillment and shipping label generation. Returns `null` for digital orders or orders that don't require shipping.

  * shipping​Line

    [Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine)

    A summary of all shipping costs on the order. Aggregates shipping charges, discounts, and taxes to provide a single view of delivery costs.

  * shipping​Lines

    [Shipping​Line​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShippingLineConnection)

    non-null

    The shipping methods applied to the order. Each shipping line represents a shipping option chosen during checkout, including the carrier, service level, and cost. Use this to understand shipping charges and delivery options for the order.

    * include​Removals

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      ### Arguments

      Whether results should contain removed shipping lines.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

  * shopify​Protect

    [Shopify​Protect​Order​Summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyProtectOrderSummary)

    The Shopify Protect details for the order, including fraud protection status and coverage information. Shopify Protect helps protect eligible orders against fraudulent chargebacks. Returns `null` if Shopify Protect is disabled for the shop or the order isn't eligible for protection. Learn more about [Shopify Protect](https://www.shopify.com/protect).

  * source​Identifier

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A unique POS or third party order identifier. For example, "1234-12-1000" or "111-98567-54". The [`receiptNumber`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-receiptNumber) field is derived from this value for POS orders.

  * source​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the source associated with the order, such as "web", "mobile\_app", or "pos". Use this field to identify the platform where the order was placed.

  * staff​Member

    [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

    The staff member who created or is responsible for the order. Useful for tracking which team member handled phone orders, manual orders, or order modifications. Returns `null` for orders created directly by customers through the online store.

  * status​Page​Url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    non-null

    The URL where customers can check their order's current status, including tracking information and delivery updates. Provides order tracking links in emails, apps, or customer communications.

    * audience

      [Audience](https://shopify.dev/docs/api/admin-graphql/latest/enums/Audience)

      ### Arguments

      Specifies the intended audience for the status page URL.

    * notification​Usage

      [Notification​Usage](https://shopify.dev/docs/api/admin-graphql/latest/enums/NotificationUsage)

      Specifies the intended notification usage for the status page URL.

    ***

  * subtotal​Line​Items​Quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The sum of quantities for all line items that contribute to the order's subtotal price. This excludes quantities for items like tips, shipping costs, or gift cards that don't affect the subtotal. Use this to quickly understand the total item count for pricing calculations.

  * subtotal​Price​Set

    [Money​Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    The sum of the prices for all line items after discounts and before returns, in shop and presentment currencies. If `taxesIncluded` is `true`, then the subtotal also includes tax.

  * suggested​Refund

    [Suggested​Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedRefund)

    A calculated refund suggestion for the order based on specified line items, shipping, and duties. Use this to preview refund amounts, taxes, and processing fees before creating an actual refund.

    * shipping​Amount

      [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

      ### Arguments

      The amount to refund for shipping. Overrides the `refundShipping` argument.

    * refund​Shipping

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Whether to refund the full shipping amount.

    * refund​Line​Items

      [\[Refund​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundLineItemInput)

      The line items from the order to include in the refund.

    * refund​Duties

      [\[Refund​Duty​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundDutyInput)

      The duties from the order to include in the refund.

    * suggest​Full​Refund

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      Whether the suggested refund should be created from all refundable line items on the order. If `true`, the `refundLineItems` argument will be ignored.

    * refund​Method​Allocation

      [Refund​Method​Allocation](https://shopify.dev/docs/api/admin-graphql/latest/enums/RefundMethodAllocation)

      Default:ORIGINAL\_PAYMENT\_METHODS

      Specifies which refund methods to allocate the suggested refund amount to.

    ***

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A comma separated list of tags associated with the order. Updating `tags` overwrites any existing tags that were previously added to the order. To add new tags without overwriting existing tags, use the [tagsAdd](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd) mutation.

  * taxes​Included

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether taxes are included in the subtotal price of the order. When `true`, the subtotal and line item prices include tax amounts. When `false`, taxes are calculated and displayed separately.

  * tax​Exempt

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether taxes are exempt on the order. Returns `true` for orders where the customer or business has a valid tax exemption, such as non-profit organizations or tax-free purchases. Use this to understand if tax calculations were skipped during checkout.

  * tax​Lines

    [\[Tax​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

    non-null

    A list of all tax lines applied to line items on the order, before returns. Tax line prices represent the total price for all tax lines with the same `rate` and `title`.

  * test

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the order is a test. Test orders are made using the Shopify Bogus Gateway or a payment provider with test mode enabled. A test order can't be converted into a real order and vice versa.

  * total​Capturable​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The authorized amount that's uncaptured or undercaptured, in shop and presentment currencies. This amount isn't adjusted for returns.

  * total​Cash​Rounding​Adjustment

    [Cash​Rounding​Adjustment!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashRoundingAdjustment)

    non-null

    The total rounding adjustment applied to payments or refunds for an order involving cash payments. Applies to some countries where cash transactions are rounded to the nearest currency denomination.

  * total​Discounts​Set

    [Money​Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    The total amount discounted on the order before returns, in shop and presentment currencies. This includes both order and line level discounts.

  * total​Outstanding​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total amount not yet transacted for the order, in shop and presentment currencies. A positive value indicates a difference in the merchant's favor (payment from customer to merchant) and a negative value indicates a difference in the customer's favor (refund from merchant to customer).

  * total​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total price of the order, before returns, in shop and presentment currencies. This includes taxes and discounts.

  * total​Received​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total amount received from the customer before returns, in shop and presentment currencies.

  * total​Refunded​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total amount that was refunded, in shop and presentment currencies.

  * total​Refunded​Shipping​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total amount of shipping that was refunded, in shop and presentment currencies.

  * total​Shipping​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total shipping costs returned to the customer, in shop and presentment currencies. This includes fees and any related discounts that were refunded.

  * total​Tax​Set

    [Money​Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    The total tax amount before returns, in shop and presentment currencies.

  * total​Tip​Received​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The sum of all tip amounts for the order, in shop and presentment currencies.

  * total​Weight

    [Unsigned​Int64](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

    The total weight of the order before returns, in grams.

  * transactions

    [\[Order​Transaction!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

    non-null

    A list of transactions associated with the order.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      Truncate the array result to this size.

    * capturable

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Filter transactions by whether they are capturable.

    * manually​Resolvable

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Filter transactions by whether they can be resolved manually. For example, fully captured or voided transactions aren't manually resolvable.

    ***

  * transactions​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The number of transactions associated with the order.

  * unpaid

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether no payments have been made for the order.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when the order was last modified.

  * cart​Discount​Amount

    [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    Deprecated

  * channel

    [Channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

    Deprecated

  * customer​Journey

    [Customer​Journey](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourney)

    Deprecated

  * landing​Page​Display​Text

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

  * landing​Page​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    Deprecated

  * localization​Extensions

    [Localization​Extension​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizationExtensionConnection)

    non-nullDeprecated

    * country​Codes

      [\[Country​Code!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

      ### Arguments

      The country codes of the extensions.

    * purposes

      [\[Localization​Extension​Purpose!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizationExtensionPurpose)

      The purpose of the extensions.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

  * metafield​Definitions

    [Metafield​Definition​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

    non-nullDeprecated

    * namespace

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      ### Arguments

      Filter metafield definitions by namespace.

    * pinned​Status

      [Metafield​Definition​Pinned​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinnedStatus)

      Default:ANY

      Filter by the definition's pinned status.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

      [Metafield​Definition​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * created\_at

          time

        * id

          id

        * key

          string

        * namespace

          string

        * owner\_type

          string

        * type

          string

        * updated\_at

          time

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:

          * `query=Bob Norman`
          * `query=title:green hoodie`

          Filter by the date and time when the metafield definition was created.

        - Example:

          * `created_at:>2020-10-21T23:39:20Z`
          * `created_at:<now`
          * `created_at:<=2024`

          Filter by `id` range.

        - Example:

          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

          Filter by the metafield definition [`key`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-key) field.

        - Example:

          * `key:some-key`

          Filter by the metafield definition [`namespace`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-namespace) field.

        - Example:

          * `namespace:some-namespace`

          Filter by the metafield definition [`ownerType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-ownertype) field.

        - Example:

          * `owner_type:PRODUCT`

          Filter by the metafield definition [`type`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-type) field.

        - Example:

          * `type:single_line_text_field`

          Filter by the date and time when the metafield definition was last updated.

          Example:

          * `updated_at:>2020-10-21T23:39:20Z`
          * `updated_at:<now`
          * `updated_at:<=2024`

    ***

  * net​Payment

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

  * physical​Location

    [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

    Deprecated

  * referral​Code

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

  * referrer​Display​Text

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

  * referrer​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    Deprecated

  * risk​Level

    [Order​Risk​Level!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderRiskLevel)

    non-nullDeprecated

  * risks

    [\[Order​Risk!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRisk)

    non-nullDeprecated

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      Truncate the array result to this size.

    ***

  * subtotal​Price

    [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    Deprecated

  * total​Capturable

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

  * total​Discounts

    [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    Deprecated

  * total​Price

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

  * total​Received

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

  * total​Refunded

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

  * total​Shipping​Price

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

  * total​Tax

    [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    Deprecated

  * total​Tip​Received

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-nullDeprecated

* [Price​Rule](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule)

  OBJECT

  A set of conditions, including entitlements and prerequisites, that must be met for a discount code to apply.

  ***

  Note

  Use the types and queries included our [discount tutorials](https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started) instead. These will replace the GraphQL Admin API's [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule) object and [`DiscountCode`](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode) union, and the REST Admin API's deprecated[`PriceRule`](https://shopify.dev/docs/api/admin-rest/unstable/resources/pricerule) resource.

  ***

  * allocation​Limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The maximum number of times that the price rule can be allocated onto an order.

  * allocation​Method

    [Price​Rule​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleAllocationMethod)

    non-null

    The method by which the price rule's value is allocated to its entitled items.

  * app

    [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

    The application that created the price rule.

  * combines​With

    [Discount​Combines​With!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith)

    non-null

    The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the price rule was created.

  * customer​Selection

    [Price​Rule​Customer​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleCustomerSelection)

    non-null

    The customers that can use this price rule.

  * discount​Classes

    [\[Discount​Class!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

    non-null

    The classes of the discount.

  * discount​Codes

    [Price​Rule​Discount​Code​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceRuleDiscountCodeConnection)

    non-null

    List of the price rule's discount codes.

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

      [Discount​Code​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountCodeSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * id

          id

        * times\_used

          integer

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:

          * `query=Bob Norman`
          * `query=title:green hoodie`

          Filter by `id` range.

        - Example:
          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

    * saved​Search​Id

      [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

      The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

    ***

  * discount​Codes​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    How many discount codes associated with the price rule.

  * ends​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time when the price rule ends. For open-ended price rules, use `null`.

  * events

    [Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

    non-null

    The paginated list of events associated with the price rule.

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

      [Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * action

          string

        * comments

          boolean

        * created\_at

          time

        * id

          id

        * subject\_type

          string

        - The action that occured.

        - Example:

          * `action:create`

          Whether or not to include [comment-events](https://shopify.dev/api/admin-graphql/latest/objects/CommentEvent) in your search, passing `false` will exclude comment-events, any other value will include comment-events.

        - Example:

          * `false`
          * `true`

          Filter by the date and time when the event happened.

        - Example:

          * `created_at:>2020-10-21`
          * `created_at:<now`

          Filter by `id` range.

        - Example:

          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

          The resource type affected by this event. See [EventSubjectType](https://shopify.dev/api/admin-graphql/latest/enums/EventSubjectType) for possible values.

          Example:

          * `PRODUCT_VARIANT`
          * `PRODUCT`
          * `COLLECTION`

    ***

  * features

    [\[Price​Rule​Feature!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleFeature)

    non-null

    A list of the price rule's features.

  * has​Timeline​Comment

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Indicates whether there are any timeline comments on the price rule.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * item​Entitlements

    [Price​Rule​Item​Entitlements!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements)

    non-null

    The items to which the price rule applies.

  * item​Prerequisites

    [Price​Rule​Line​Item​Prerequisites!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites)

    non-null

    The items required for the price rule to be applicable.

  * legacy​Resource​Id

    [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

    non-null

    The ID of the corresponding resource in the REST Admin API.

  * once​Per​Customer

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the price rule can be applied only once per customer.

  * prerequisite​Quantity​Range

    [Price​Rule​Quantity​Range](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleQuantityRange)

    The number of the entitled items must fall within this range for the price rule to be applicable.

  * prerequisite​Shipping​Price​Range

    [Price​Rule​Money​Range](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleMoneyRange)

    The shipping cost must fall within this range for the price rule to be applicable.

  * prerequisite​Subtotal​Range

    [Price​Rule​Money​Range](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleMoneyRange)

    The sum of the entitled items subtotal prices must fall within this range for the price rule to be applicable.

  * prerequisite​To​Entitlement​Quantity​Ratio

    [Price​Rule​Prerequisite​To​Entitlement​Quantity​Ratio](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRulePrerequisiteToEntitlementQuantityRatio)

    Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items.

  * shareable​Urls

    [\[Price​Rule​Shareable​Url!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleShareableUrl)

    non-null

    URLs that can be used to share the discount.

  * shipping​Entitlements

    [Price​Rule​Shipping​Line​Entitlements!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleShippingLineEntitlements)

    non-null

    The shipping lines to which the price rule applies.

  * starts​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the price rule starts.

  * status

    [Price​Rule​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleStatus)

    non-null

    The status of the price rule.

  * summary

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A detailed summary of the price rule.

  * target

    [Price​Rule​Target!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleTarget)

    non-null

    The type of lines (line\_item or shipping\_line) to which the price rule applies.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The title of the price rule.

  * total​Sales

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The total sales from orders where the price rule was used.

  * usage​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of times that the price rule has been used. This value is updated asynchronously and can be different than the actual usage count.

  * usage​Limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The maximum number of times that the price rule can be used in total.

  * validity​Period

    [Price​Rule​Validity​Period!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleValidityPeriod)

    non-null

    A time period during which a price rule is applicable.

  * value​V2

    [Pricing​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue)

    non-null

    The value of the price rule.

  * discount​Class

    [Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

    non-nullDeprecated

  * entitlement​To​Prerequisite​Quantity​Ratio

    [Price​Rule​Entitlement​To​Prerequisite​Quantity​Ratio](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleEntitlementToPrerequisiteQuantityRatio)

    Deprecated

  * traits

    [\[Price​Rule​Trait!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleTrait)

    non-nullDeprecated

  * value

    [Price​Rule​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PriceRuleValue)

    non-nullDeprecated

***

##### Variables

```json
{
	"hasTimelineComment": "",
	"id": ""
}
```

##### Schema

```graphql
interface CommentEventSubject {
  hasTimelineComment: Boolean!
  id: ID!
}
```
