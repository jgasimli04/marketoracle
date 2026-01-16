---
title: Collection - GraphQL Admin
description: >-
  The `Collection` object represents a group of
  [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  that merchants can organize to make their stores easier to browse and help
  customers find related products.

  Collections serve as the primary way to categorize and display products across

  [online stores](https://shopify.dev/docs/apps/build/online-store),

  [sales channels](https://shopify.dev/docs/apps/build/sales-channels), and
  marketing campaigns.


  There are two types of collections:


  - **[Custom (manual)
  collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**:
  You specify the products to include in a collection.

  - **[Smart (automated)
  collections](https://help.shopify.com/manual/products/collections/automated-collections)**:
  You define rules, and products matching those rules are automatically included
  in the collection.


  The `Collection` object provides information to:


  - Organize products by category, season, or promotion.

  - Automate product grouping using rules (for example, by tag, type, or price).

  - Configure product sorting and display order (for example, alphabetical,
  best-selling, price, or manual).

  - Manage collection visibility and publication across sales channels.

  - Add rich descriptions, images, and metadata to enhance discovery.


  > Note:

  > Collections are unpublished by default. To make them available to customers,

  use the
  [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish)

  mutation after creation.


  Collections can be displayed in a store with Shopify's theme system through
  [Liquid
  templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection)

  and can be customized with [template
  suffixes](https://shopify.dev/docs/storefronts/themes/architecture/templates/alternate-templates)

  for unique layouts. They also support advanced features like translated
  content, resource feedback,

  and contextual publication for location-based catalogs.


  Learn about [using metafields with smart
  collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection.md'
---

# Collection

object

Requires `read_products` access scope.

The `Collection` object represents a group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can organize to make their stores easier to browse and help customers find related products. Collections serve as the primary way to categorize and display products across [online stores](https://shopify.dev/docs/apps/build/online-store), [sales channels](https://shopify.dev/docs/apps/build/sales-channels), and marketing campaigns.

There are two types of collections:

* **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
* **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

The `Collection` object provides information to:

* Organize products by category, season, or promotion.
* Automate product grouping using rules (for example, by tag, type, or price).
* Configure product sorting and display order (for example, alphabetical, best-selling, price, or manual).
* Manage collection visibility and publication across sales channels.
* Add rich descriptions, images, and metadata to enhance discovery.

***

Note

Collections are unpublished by default. To make them available to customers, use the [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) mutation after creation.

***

Collections can be displayed in a store with Shopify's theme system through [Liquid templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) and can be customized with [template suffixes](https://shopify.dev/docs/storefronts/themes/architecture/templates/alternate-templates) for unique layouts. They also support advanced features like translated content, resource feedback, and contextual publication for location-based catalogs.

Learn about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

## Fields

* active​Operations

  [Collection​Operations!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionOperations)

  non-null

  Collection duplicate operations involving this collection, either as a source (copying products from this collection to another) or a target (copying products to this collection from another).

* available​Publications​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that a resource is published to, without [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).

* description

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A single-line, text-only description of the collection, stripped of any HTML tags and formatting that were included in the description.

  * truncate​At

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    Truncates a string after the given length.

  ***

* description​Html

  [HTML!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

  non-null

  The description of the collection, including any HTML tags and formatting. This content is typically displayed to customers, such as on an online store, depending on the theme.

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

* feedback

  [Resource​Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback)

  Information about the collection that's provided through resource feedback.

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A unique string that identifies the collection. If a handle isn't specified when a collection is created, it's automatically generated from the collection's original title, and typically includes words from the title separated by hyphens. For example, a collection that was created with the title `Summer Catalog 2022` might have the handle `summer-catalog-2022`.

  If the title is changed, the handle doesn't automatically change.

  The handle can be used in themes by the Liquid templating language to refer to the collection, but using the ID is preferred because it never changes.

* has​Product

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the collection includes the specified product.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product to check.

  ***

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  The image associated with the collection.

  * max​Width

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Deprecated

    ### Arguments

  * max​Height

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Deprecated

  * crop

    [Crop​Region](https://shopify.dev/docs/api/admin-graphql/latest/enums/CropRegion)

    Deprecated

  * scale

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    DeprecatedDefault:1

  ***

* legacy​Resource​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The ID of the corresponding resource in the REST Admin API.

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

* products

  [Product​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection)

  non-null

  The products that are included in the collection.

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

    [Product​Collection​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductCollectionSortKeys)

    Default:COLLECTION\_DEFAULT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* products​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of products in the collection.

* published​On​Current​Publication

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the resource is published to the app's [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication). For example, the resource might be published to the app's online store channel.

* published​On​Publication

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the resource is published to a specified [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

  * publication​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the publication to check. For example, `id: "gid://shopify/Publication/123"`.

  ***

* resource​Publications

  [Resource​Publication​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection)

  non-null

  The list of resources that are published to a [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

  * only​Published

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    ### Arguments

    Whether to return only the resources that are currently published. If false, then also returns the resources that are scheduled to be published.

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

* resource​Publications​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that a resource is published to, without [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).

  * only​Published

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    ### Arguments

    Include only the resource's publications that are published. If false, then return all the resource's publications including future publications.

  ***

* resource​Publications​V2

  [Resource​Publication​V2Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationV2Connection)

  non-null

  The list of resources that are either published or staged to be published to a [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

  * only​Published

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    ### Arguments

    Whether to return only the resources that are currently published. If false, then also returns the resources that are scheduled or staged to be published.

  * catalog​Type

    [Catalog​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType)

    Filter publications by catalog type.

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

* rule​Set

  [Collection​Rule​Set](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleSet)

  For a smart (automated) collection, specifies the rules that determine whether a product is included.

* seo

  [SEO!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SEO)

  non-null

  If the default SEO fields for page title and description have been modified, contains the modified information.

* sort​Order

  [Collection​Sort​Order!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSortOrder)

  non-null

  The order in which the products in the collection are displayed by default in the Shopify admin and in sales channels, such as an online store.

* template​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The suffix of the Liquid template being used to show the collection in an online store. For example, if the value is `custom`, then the collection is using the `collection.custom.liquid` template. If the value is `null`, then the collection is using the default `collection.liquid` template.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the collection. It's displayed in the Shopify admin and is typically displayed in sales channels, such as an online store.

* translations

  [\[Translation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

  non-null

  The published translations associated with the resource.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Filters translations locale.

  * market​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Filters translations by market ID. Use this argument to retrieve content specific to a market.

  ***

* unpublished​Publications

  [Publication​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/PublicationConnection)

  non-null

  The list of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that the resource isn't published to.

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

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the collection was last modified.

### Deprecated fields

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

* publication​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-nullDeprecated

  * only​Published

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    ### Arguments

    Include only the resource's publications that are published. If false, then return all the resource's publications including future publications.

  ***

* publications

  [Collection​Publication​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionPublicationConnection)

  non-nullDeprecated

  * only​Published

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    ### Arguments

    Whether or not to return only the collection publications that are published.

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

* published​On​Channel

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

  * channel​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the channel to check.

  ***

* published​On​Current​Channel

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

* storefront​Id

  [Storefront​ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/StorefrontID)

  non-nullDeprecated

* unpublished​Channels

  [Channel​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection)

  non-nullDeprecated

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

## Map

### Fields and connections with this object

* {}[Channel.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.collections)
* <->[CollectionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection#returns-nodes)
* {}[CollectionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionEdge#field-CollectionEdge.fields.node)
* {}[CollectionPublication.collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionPublication#field-CollectionPublication.fields.collection)
* {}[DiscountCollections.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections#field-DiscountCollections.fields.collections)
* {}[PriceRuleItemEntitlements.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements#field-PriceRuleItemEntitlements.fields.collections)
* {}[PriceRuleLineItemPrerequisites.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites#field-PriceRuleLineItemPrerequisites.fields.collections)
* {}[Product.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.collections)
* {}[Publication.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.collections)

### Possible type in

* [Metafield​Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)
* [Metafield​Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

***

## Queries

* [collection](https://shopify.dev/docs/api/admin-graphql/latest/queries/collection)

  query

  Retrieves a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) by its ID. A collection represents a grouping of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can display and sell as a group in their [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).

  Use the `collection` query when you need to:

  * Manage collection publishing across sales channels
  * Access collection metadata and SEO information
  * Work with collection rules and product relationships

  A collection can be either a custom ([manual](https://help.shopify.com/manual/products/collections/manual-shopify-collection)) collection where products are manually added, or a smart ([automated](https://help.shopify.com/manual/products/collections/automated-collections)) collection where products are automatically included based on defined rules. Each collection has associated metadata including title, description, handle, image, and [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Collection` to return.

  ***

* [collection​By​Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionByIdentifier)

  query

  Return a collection by an identifier.

  * identifier

    [Collection​Identifier​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionIdentifierInput)

    required

    ### Arguments

    The identifier of the collection.

  ***

* [collections](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections)

  query

  Retrieves a list of [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) in a store. Collections are groups of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can organize for display in their [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels). For example, an athletics store might create different collections for running attire, shoes, and accessories.

  Use the `collections` query when you need to:

  * Build a browsing interface for a store's product groupings.
  * Create collection searching, sorting, and filtering experiences (for example, by title, type, or published status).
  * Sync collection data with external systems.
  * Manage both custom ([manual](https://help.shopify.com/manual/products/collections/manual-shopify-collection)) and smart ([automated](https://help.shopify.com/manual/products/collections/automated-collections)) collections.

  The `collections` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) for large catalogs and [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#arguments-savedSearchId) for frequently used collection queries.

  The `collections` query returns collections with their associated metadata, including:

  * Basic collection information (title, description, handle, and type)
  * Collection image and SEO metadata
  * Product count and product relationships
  * Collection rules (for smart collections)
  * Publishing status and publication details
  * Metafields and custom attributes

  Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

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

    [Collection​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * collection\_type

        string

      * handle

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

      - Valid values:
        * `custom`
        * `smart`

    * * id

        id

      * product\_id

        id

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by collections containing a product by its ID.

    * * product\_publication\_status

        string

      * publishable\_status

        string

      * published\_at

        time

      - Filter by channel approval process status of the resource on a channel, such as the online store. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.app) (`Channel.app.id`) and one of the valid values. For simple visibility checks, use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) instead.

      - Valid values:

        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-rejected`
        * `* {channel_app_id}-needs_action`
        * `* {channel_app_id}-awaiting_review`
        * `* {channel_app_id}-published`
        * `* {channel_app_id}-demoted`
        * `* {channel_app_id}-scheduled`
        * `* {channel_app_id}-provisionally_published`

        Example:

        * `product_publication_status:189769876-approved`

        **Deprecated:** This parameter is deprecated as of 2025-12 and will be removed in a future API version. Use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) for visibility checks. Filter by the publishable status of the resource on a channel. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) and one of the valid status values.

      - Valid values:

        * `* {channel_app_id}-unset`
        * `* {channel_app_id}-pending`
        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-not_approved`

        Example:

        * `publishable_status:580111-unset`
        * `publishable_status:580111-pending`

        Filter by the date and time when the collection was published to the Online Store.

    * * published\_status

        string

      * title

        string

      - Filter resources by their visibility and publication state on a channel. Online store channel filtering: - `online_store_channel`: Returns all resources in the online store channel, regardless of publication status. - `published`/`visible`: Returns resources that are published to the online store. - `unpublished`: Returns resources that are not published to the online store. Channel-specific filtering using the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) with suffixes: - `{channel_app_id}-published`: Returns resources published to the specified channel. - `{channel_app_id}-visible`: Same as `{channel_app_id}-published` (kept for backwards compatibility). - `{channel_app_id}-intended`: Returns resources added to the channel but not yet published. - `{channel_app_id}-hidden`: Returns resources not added to the channel or not published. Other: - `unavailable`: Returns resources not published to any channel.

      - Valid values:
        * `online_store_channel`
        * `published`
        * `visible`
        * `unpublished`
        * `* {channel_app_id}-published`
        * `* {channel_app_id}-visible`
        * `* {channel_app_id}-intended`
        * `* {channel_app_id}-hidden`
        * `unavailable`
        Example:
        * `published_status:online_store_channel`
        * `published_status:published`
        * `published_status:580111-published`
        * `published_status:580111-hidden`
        * `published_status:unavailable`

    * updated\_at

      time

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

* [collection​By​Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionByHandle)

  query

  Deprecated

  * handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The handle of the collection.

  ***

***

## \<?>Collection Queries

### Queried by

* \<?>[collection](https://shopify.dev/docs/api/admin-graphql/latest/queries/collection)
* \<?>[collection​By​Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionByIdentifier)
* \<?>[collections](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections)

***

## Mutations

* [collection​Add​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProducts)

  mutation

  Adds multiple products to an existing collection in a single operation. This mutation provides an efficient way to bulk-manage collection membership without individual product updates.

  For example, when merchants create seasonal collections, they can add dozens of related products at once rather than updating each product individually. A clothing store might add all winter jackets to a "Winter Collection" in one operation.

  Use `CollectionAddProducts` to:

  * Bulk-add products to collections for efficient catalog management
  * Implement collection building tools in admin interfaces
  * Organize collection membership during bulk product operations
  * Reduce API calls when managing large product sets

  The mutation processes multiple product additions and returns success status along with any errors encountered during the operation. Products are added to the collection while preserving existing collection settings.

  This operation only works with manual collections where merchants explicitly choose which products to include. It will return an error if used with smart collections that automatically include products based on conditions.

  Learn more about [collection management](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the collection that's being updated. This can't be a smart collection.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the products that are being added to the collection. If any of the products is already present in the input collection, then an error is raised and no products are added.

  ***

* [collection​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionCreate)

  mutation

  Creates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) to group [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) together in the [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels). For example, an athletics store might create different collections for running attire, shoes, and accessories.

  There are two types of collections:

  * **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
  * **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

  Use the `collectionCreate` mutation when you need to:

  * Create a new collection for a product launch or campaign
  * Organize products by category, season, or promotion
  * Automate product grouping using rules (for example, by tag, type, or price)

  ***

  Note

  The created collection is unpublished by default. To make it available to customers, use the [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) mutation after creation.

  ***

  Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

  * input

    [Collection​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput)

    required

    ### Arguments

    The properties to use when creating the collection.

  ***

* [collection​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionDuplicate)

  mutation

  Duplicates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

  An existing collection ID and new title are required.

  ## Publication Duplication

  Publications may be excluded by passing `copyPublications: false` in the input.

  ## Metafields

  Metafield values are not duplicated if the unique values capability is enabled.

  * input

    [Collection​Duplicate​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionDuplicateInput)

    required

    ### Arguments

    The input for duplicating a collection.

  ***

* [collection​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUpdate)

  mutation

  Updates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), modifying its properties, products, or publication settings. Collections help organize [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) together in the [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).

  Use the `collectionUpdate` mutation to programmatically modify collections in scenarios such as:

  * Updating collection details, like title, description, or image
  * Modifying SEO metadata for better search visibility
  * Changing which products are included (using rule updates for smart collections)
  * Publishing or unpublishing collections across different sales channels
  * Updating custom data using [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields)

  There are two types of collections with different update capabilities:

  * **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You can update collection properties, but rule sets can't be modified since products are manually selected.
  * **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You can update both collection properties and the rules that automatically determine which products are included. When updating [rule sets](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions) for smart collections, the operation might be processed asynchronously. In these cases, the mutation returns a [`job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) object that you can use to track the progress of the update.

  To publish or unpublish collections to specific sales channels, use the dedicated [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) and [`publishableUnpublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish) mutations.

  Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

  * input

    [Collection​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput)

    required

    ### Arguments

    The updated properties for the collection.

  ***

### Deprecated mutations

* [collection​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionPublish)

  mutation

  Deprecated

  * input

    [Collection​Publish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionPublishInput)

    required

    ### Arguments

    Specify a collection to publish and the sales channels to publish it to.

  ***

* [collection​Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUnpublish)

  mutation

  Deprecated

  * input

    [Collection​Unpublish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionUnpublishInput)

    required

    ### Arguments

    Specify a collection to unpublish and the sales channels to remove it from.

  ***

***

## <\~> Collection Mutations

### Mutated by

* <\~>[collection​Add​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProducts)
* <\~>[collection​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionCreate)
* <\~>[collection​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionDuplicate)
* <\~>[collection​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUpdate)

***

## Interfaces

* * [Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

    interface

  * [Has​Metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

    interface

  * [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

    interface

  * [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

  * [Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

    interface

***

## ||-Collection Implements

### Implements

* ||-[Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
* ||-[Has​Metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
* ||-[Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
* ||-[Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
* ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
* ||-[Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)
