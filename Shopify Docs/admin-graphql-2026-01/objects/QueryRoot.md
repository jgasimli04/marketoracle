---
title: QueryRoot - GraphQL Admin
description: >-
  The schema's entry-point for queries. This acts as the public, top-level API
  from which all queries must start.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot.md'
---

# Query​Root

object

The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

## Fields

* abandoned​Checkouts

  [Abandoned​Checkout​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutConnection)

  non-null

  Returns a list of abandoned checkouts. A checkout is considered abandoned when a customer adds contact information but doesn't complete their purchase. Includes both abandoned and recovered checkouts.

  Each checkout provides [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) details, [`AbandonedCheckoutLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem) objects, pricing information, and a recovery URL for re-engaging customers who didn't complete their purchase.

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

    [Abandoned​Checkout​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonedCheckoutSortKeys)

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

        The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the abandoned cart was created.

    * email\_state

      string

      Filter by `abandoned_email_state` value. Possible values: `sent`, `not_sent`, `scheduled` and `suppressed`.

    * * id

        id

      * recovery\_state

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Possible values: `recovered` and `not_recovered`.

    * status

      string

      Possible values: `open` and `closed`.

    * updated\_at

      time

      The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the abandoned cart was last updated.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

* abandoned​Checkouts​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  Returns the count of abandoned checkouts for the given shop. Limited to a maximum of 10000 by default.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the abandoned cart was created.

    * email\_state

      string

      Filter by `abandoned_email_state` value. Possible values: `sent`, `not_sent`, `scheduled` and `suppressed`.

    * * id

        id

      * recovery\_state

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Possible values: `recovered` and `not_recovered`.

    * status

      string

      Possible values: `open` and `closed`.

    * updated\_at

      time

      The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the abandoned cart was last updated.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* abandonment

  [Abandonment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment)

  Returns a `Abandonment` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Abandonment` to return.

  ***

* abandonment​By​Abandoned​Checkout​Id

  [Abandonment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment)

  Returns an Abandonment by the Abandoned Checkout ID.

  * abandoned​Checkout​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Abandoned Checkout ID to query by.

  ***

* app

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  Retrieves an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) by its ID. If no ID is provided, returns details about the currently authenticated app. The query provides access to app details including title, icon, and pricing information.

  If the app isn't installed on the current shop, then the [`installation`](https://shopify.dev/docs/api/admin-graphql/latest/queries/app#returns-App.fields.installation) field will be `null`.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID to lookup the App by.

  ***

* app​By​Handle

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  Retrieves an app by its unique handle. The handle is a URL-friendly identifier for the app.

  Returns the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) if found, or `null` if no app exists with the specified handle.

  * handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Handle of the App.

  ***

* app​By​Key

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  Retrieves an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) by its client ID (API key). Returns the app's configuration, installation status, [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, and developer information.

  Returns `null` if no app exists with the specified client ID.

  * api​Key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Client ID of the app.

  ***

* app​Discount​Type

  [App​Discount​Type](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType)

  An app discount type.

  * function​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The ID for the function providing the app discount type.

  ***

* app​Discount​Types

  [\[App​Discount​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType)

  non-null

  A list of app discount types installed by apps.

* app​Discount​Types​Nodes

  [App​Discount​Type​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppDiscountTypeConnection)

  non-null

  A list of app discount types installed by apps.

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

* app​Installation

  [App​Installation](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation)

  Retrieves an [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) by ID. If no ID is provided, returns the installation for the currently authenticated [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App). The query provides essential data for validating installation state and managing app functionality within a store.

  Use this query to access installation details including granted [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects, [`AppCredit`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCredit) objects, [`AppPurchaseOneTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime) objects, and app-specific metadata.

  Learn more about [app installation](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation).

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    ID used to lookup AppInstallation.

  ***

* app​Installations

  [App​Installation​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppInstallationConnection)

  non-null

  A paginated list of [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) objects across multiple stores where your app is installed. Use this query to monitor installation status, track billing and subscriptions through [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects, and review granted [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects.

  Filter by [`AppInstallationCategory`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationCategory) to find specific types of installations (such as POS or channel apps) and by [`AppInstallationPrivacy`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationPrivacy) to scope to public or private installations.

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

    [App​Installation​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationSortKeys)

    Default:INSTALLED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * category

    [App​Installation​Category](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationCategory)

    The category of app installations to fetch.

  * privacy

    [App​Installation​Privacy](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationPrivacy)

    Default:PUBLIC

    The privacy level of app installations to fetch.

  ***

* article

  [Article](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article)

  Returns a `Article` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Article` to return.

  ***

* article​Authors

  [Article​Author​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleAuthorConnection)

  non-null

  List of article authors for the shop.

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

* articles

  [Article​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleConnection)

  non-null

  Returns a paginated list of articles from the shop's blogs. [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article) objects are blog posts that contain content like text, images, and tags.

  Supports [cursor-based pagination](https://shopify.dev/docs/api/usage/pagination-graphql) to control the number of articles returned and their order. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#arguments-query) argument to filter results by specific criteria.

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

    [Article​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ArticleSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * author

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=handle:summer-collection-announcement`

        Filter by the author of the article.

    * * blog\_id

        string

      * blog\_title

        string

      - Filter by the ID of the blog the article belongs to.

      - Example:
        * `blog_id:1234`
        * `blog_id:>=1234`
        * `blog_id:<=1234`

    * * created\_at

        time

      * handle

        string

      * id

        id

      * published\_at

        time

      * published\_status

        string

      - Filter by the date and time when the article was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by the article's handle.

      - Example:

        * `handle:summer-collection-announcement`
        * `handle:how-to-guide`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the date and time when the article was published.

      - Example:

        * `published_at:>'2020-10-21T23:39:20Z'`
        * `published_at:<now`
        * `published_at:<=2024`

        Filter by published status

    * * tag

        string

      * tag\_not

        string

      * title

        string

      * updated\_at

        time

      - Filter objects by the `tag` field.

      - Example:

        * `tag:my_tag`

        Filter by objects that don’t have the specified tag.

      - Example:

        * `tag_not:my_tag`

        Filter by the title of the article.

      - Example:

        * `title:summer-collection`
        * `title:green hoodie`

        Filter by the date and time when the article was last updated.

        Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<=2024`

  ***

* article​Tags

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  List of all article tags.

  * sort

    [Article​Tag​Sort](https://shopify.dev/docs/api/admin-graphql/latest/enums/ArticleTagSort)

    Default:ALPHABETICAL

    ### Arguments

    Type of sort order.

  * limit

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The maximum number of tags to return.

  ***

* assigned​Fulfillment​Orders

  [Fulfillment​Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection)

  non-null

  The paginated list of fulfillment orders assigned to the shop locations owned by the app.

  Assigned fulfillment orders are fulfillment orders that are set to be fulfilled from locations managed by [fulfillment services](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService) that are registered by the app. One app (api\_client) can host multiple fulfillment services on a shop. Each fulfillment service manages a dedicated location on a shop. Assigned fulfillment orders can have associated [fulfillment requests](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus), or might currently not be requested to be fulfilled.

  The app must have the `read_assigned_fulfillment_orders` [access scope](https://shopify.dev/docs/api/usage/access-scopes) to be able to retrieve the fulfillment orders assigned to its locations.

  All assigned fulfillment orders (except those with the `CLOSED` status) will be returned by default. Perform filtering with the `assignmentStatus` argument to receive only fulfillment orders that have been requested to be fulfilled.

  * assignment​Status

    [Fulfillment​Order​Assignment​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderAssignmentStatus)

    ### Arguments

    The assigment status of the fulfillment orders that should be returned. If `assignmentStatus` argument is not provided, then the query will return all assigned fulfillment orders, except those that have the `CLOSED` status.

  * location​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Returns fulfillment orders only for certain locations, specified by a list of location IDs.

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

    [Fulfillment​Order​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  Returns a `DiscountAutomaticNode` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `DiscountAutomaticNode` to return.

  ***

* automatic​Discount​Saved​Searches

  [Saved​Search​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SavedSearchConnection)

  non-null

  List of the shop's automatic discount saved searches.

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

* available​Backup​Regions

  [\[Market​Region!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/MarketRegion)

  non-null

  The geographic regions that you can set as the [`Shop`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)'s backup region. The backup region serves as a fallback when the system can't determine a buyer's actual location.

* available​Carrier​Services

  [\[Delivery​Carrier​Service​And​Locations!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierServiceAndLocations)

  non-null

  Returns a list of activated carrier services and associated shop locations that support them.

* available​Locales

  [\[Locale!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Locale)

  non-null

  Returns all locales that Shopify supports. Each [`Locale`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Locale) includes an ISO code and human-readable name. Use this query to discover which locales you can enable on a shop with the [`shopLocaleEnable`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleEnable) mutation.

* backup​Region

  [Market​Region!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/MarketRegion)

  non-null

  The backup region of the shop.

* blog

  [Blog](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog)

  Returns a `Blog` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Blog` to return.

  ***

* blogs

  [Blog​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/BlogConnection)

  non-null

  Returns a paginated list of the shop's [`Blog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog) objects. Blogs serve as containers for [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article) objects and provide content management capabilities for the store's editorial content.

  Supports [cursor-based pagination](https://shopify.dev/docs/api/usage/pagination-graphql) to control the number of blogs returned and their order. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#arguments-query) argument to filter results by specific criteria.

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

    [Blog​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/BlogSortKeys)

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

    * handle

      string

    * * id

        id

      * title

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * updated\_at

      time

  ***

* blogs​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  Count of blogs. Limited to a maximum of 10000 by default.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * handle

      string

    * * id

        id

      * title

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * updated\_at

      time

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* bulk​Operation

  [Bulk​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation)

  Returns a `BulkOperation` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `BulkOperation` to return.

  ***

* bulk​Operations

  [Bulk​Operation​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/BulkOperationConnection)

  non-null

  Returns the app's bulk operations meeting the specified filters. Defaults to sorting by created\_at, with newest operations first.

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

    [Bulk​Operations​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationsSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

      Filter operations created after a specific date.

    * * id

        id

      * operation\_type

        string

      * status

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter operations by type.

      - Valid values:

        * `query`
        * `mutation`

        Filter operations by status.

        Valid values:

        * `canceled`
        * `canceling`
        * `completed`
        * `created`
        * `failed`
        * `running`

  ***

* business​Entities

  [\[Business​Entity!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessEntity)

  non-null

  Returns the list of [business entities](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessEntity) associated with the shop. Use this query to retrieve business entities for assigning to markets, managing payment providers per entity, or viewing entity attribution on orders.

  Each shop can have multiple business entities with one designated as primary. To identify the primary entity in the query results, set the [`primary`](https://shopify.dev/docs/api/admin-graphql/latest/queries/businessEntities#returns-BusinessEntity.fields.primary) field to `true`.

  Learn more about [managing multiple legal entities](https://shopify.dev/docs/apps/build/markets/multiple-entities).

* business​Entity

  [Business​Entity](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessEntity)

  Returns a Business Entity by ID.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the Business Entity to return. Returns the primary Business Entity if not provided.

  ***

* carrier​Service

  [Delivery​Carrier​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

  Returns a `DeliveryCarrierService` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `DeliveryCarrierService` to return.

  ***

* carrier​Services

  [Delivery​Carrier​Service​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCarrierServiceConnection)

  non-null

  A paginated list of carrier services configured for the shop. Carrier services provide real-time shipping rates from external providers like FedEx, UPS, or custom shipping solutions. Use the `query` parameter to filter results by attributes such as active status.

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

    [Carrier​Service​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CarrierServiceSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * active

      boolean

    * id

      id

      Filter by `id` range.

      Example:

      * `id:1234`
      * `id:>=1234`
      * `id:<=1234`

  ***

* cart​Transforms

  [Cart​Transform​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CartTransformConnection)

  non-null

  Retrieves all cart transform functions currently deployed by your app within the merchant's store. This query provides comprehensive access to your active cart modification logic, enabling management and monitoring of bundling and merchandising features.

  The query returns paginated results with full cart transform details, including function IDs, configuration settings, and operational status.

  Cart Transform ownership is scoped to your API client, ensuring you only see and manage functions deployed by your specific app. This isolation prevents conflicts between different apps while maintaining security boundaries for sensitive merchandising logic.

  Learn more about [managing cart transforms](https://shopify.dev/docs/api/functions/latest/cart-transform).

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

* cash​Tracking​Session

  [Cash​Tracking​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession)

  Returns a `CashTrackingSession` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `CashTrackingSession` to return.

  ***

* cash​Tracking​Sessions

  [Cash​Tracking​Session​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingSessionConnection)

  non-null

  Returns a shop's cash tracking sessions for locations with a POS Pro subscription.

  Tip: To query for cash tracking sessions in bulk, you can [perform a bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/queries).

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

    [Cash​Tracking​Sessions​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CashTrackingSessionsSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * closing\_time

      time

    * * id

        id

      * location\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * opening\_time

      time

    * point\_of\_sale\_device\_ids

      string

    * status

      string

  ***

* catalog

  [Catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)

  Retrieves a [catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) by its ID. A catalog represents a list of products with publishing and pricing information, and can be associated with a context, such as a market, company location, or app.

  Use the `catalog` query to retrieve information associated with the following workflows:

  * Managing product publications across different contexts
  * Setting up contextual pricing with price lists
  * Managing market-specific product availability
  * Configuring B2B customer catalogs

  There are several types of catalogs:

  * [`MarketCatalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog)
  * [`AppCatalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog)
  * [`CompanyLocationCatalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationCatalog)

  Learn more about [catalogs for different markets](https://shopify.dev/docs/apps/build/markets/catalogs-different-markets).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Catalog` to return.

  ***

* catalog​Operations

  [\[Resource​Operation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ResourceOperation)

  non-null

  Returns the most recent catalog operations for the shop.

* catalogs

  [Catalog​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CatalogConnection)

  non-null

  Returns a paginated list of catalogs for the shop. Catalogs control which products are published and how they're priced in different contexts, such as international markets (Canada vs. United States), B2B company locations (different branches of the same business), or specific sales channels (such as online store vs. POS).

  Filter catalogs by [`type`](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs#arguments-type) and use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs#arguments-query) argument to search and filter by additional criteria.

  Learn more about [Shopify Catalogs](https://shopify.dev/docs/apps/build/markets/catalogs-different-markets).

  * type

    [Catalog​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType)

    Default:null

    ### Arguments

    The type of the catalogs to be returned.

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

    [Catalog​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * app\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * company\_id

      id

    * company\_location\_id

      id

    * * id

        id

      * managed\_country\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * market\_id

      id

    * status

      string

    * title

      string

  ***

* catalogs​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The count of catalogs belonging to the shop. Limited to a maximum of 10000 by default.

  * type

    [Catalog​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType)

    Default:null

    ### Arguments

    The type of the catalogs to be returned.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * app\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * company\_id

      id

    * company\_location\_id

      id

    * * id

        id

      * managed\_country\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * market\_id

      id

    * status

      string

    * title

      string

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* channel

  [Channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  Returns a `Channel` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Channel` to return.

  ***

* channels

  [Channel​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection)

  non-null

  Returns active [channels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) where merchants sell products and collections. Each channel is an authenticated link to an external platform such as marketplaces, social media platforms, online stores, or point-of-sale systems.

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

* checkout​Branding

  [Checkout​Branding](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBranding)

  Returns the visual customizations for checkout for a given [checkout profile](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile).

  To update checkout branding settings, use the [`checkoutBrandingUpsert`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutBrandingUpsert) mutation. Learn more about [customizing checkout's appearance](https://shopify.dev/docs/apps/build/checkout/styling).

  * checkout​Profile​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier.

  ***

* checkout​Profile

  [Checkout​Profile](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile)

  Returns a [`CheckoutProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile). Checkout profiles define the branding settings and UI extensions for a store's checkout experience. Stores can have one published profile that renders on their live checkout and multiple draft profiles for testing customizations in the checkout editor.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the checkout profile.

  ***

* checkout​Profiles

  [Checkout​Profile​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CheckoutProfileConnection)

  non-null

  List of checkout profiles on a shop.

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

    [Checkout​Profile​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutProfileSortKeys)

    Default:UPDATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * is\_published

        boolean

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  Returns a [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes) resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `DiscountCodeNode` to return.

  ***

* code​Discount​Node​By​Code

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  Retrieves a [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes) by its discount code. The search is case-insensitive, enabling you to find discounts regardless of how customers enter the code.

  Returns a [`DiscountCodeNode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode) that contains the underlying discount details, which could be a basic [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount), a ["Buy X Get Y" (BXGY) discount](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y), a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping), or an [app-provided discount](https://help.shopify.com/manual/discounts/discount-types/discounts-with-apps).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts).

  * code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The case-insensitive code of the `DiscountCodeNode` to return.

  ***

* code​Discount​Saved​Searches

  [Saved​Search​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SavedSearchConnection)

  non-null

  List of the shop's code discount saved searches.

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

* collection

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

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

* collection​By​Identifier

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  Return a collection by an identifier.

  * identifier

    [Collection​Identifier​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionIdentifierInput)

    required

    ### Arguments

    The identifier of the collection.

  ***

* collection​Rules​Conditions

  [\[Collection​Rule​Conditions!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions)

  non-null

  Lists all rules that can be used to create smart collections.

* collections

  [Collection​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection)

  non-null

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

* collection​Saved​Searches

  [Saved​Search​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SavedSearchConnection)

  non-null

  Returns a list of the shop's collection saved searches.

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

* collections​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  Count of collections. Limited to a maximum of 10000 by default.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

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

    The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* comment

  [Comment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment)

  Returns a `Comment` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Comment` to return.

  ***

* comments

  [Comment​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CommentConnection)

  non-null

  List of the shop's comments.

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

    [Comment​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentSortKeys)

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

      * published\_at

        time

      * published\_status

        string

      * status

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the date and time when the comment was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the date and time when the comment was published.

      - Example:

        * `published_at:>'2020-10-21T23:39:20Z'`
        * `published_at:<now`
        * `published_at:<=2024`

        Filter by published status

      - Valid values:
        * `any`
        * `published`
        * `unpublished`
        Example:
        * `published_status:any`
        * `published_status:published`
        * `published_status:unpublished`

    * updated\_at

      time

      Filter by the date and time when the comment was last updated.

      Example:

      * `updated_at:>'2020-10-21T23:39:20Z'`
      * `updated_at:<now`
      * `updated_at:<=2024`

  ***

* companies

  [Company​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyConnection)

  non-null

  A paginated list of companies in the shop. [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) objects are business entities that purchase from the merchant.

  Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#arguments-query) argument to filter companies by attributes like name or externalId. Sort and paginate results to handle large datasets efficiently. Learn more about [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax).

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

    [Company​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanySortKeys)

    Default:ID

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * active\_customers\_count

        integer

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * created\_at

      time

    * external\_id

      id

    * * id

        id

      * metafields.{namespace}.{key}

        mixed

      * name

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

      - Example:
        * `metafields.custom.on_sale:true`
        * `metafields.product.material:"gid://shopify/Metaobject/43458085"`

    * since\_date

      time

    * updated\_at

      time

  ***

* companies​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of companies for a shop. Limited to a maximum of 10000 by default.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    ### Arguments

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* company

  [Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

  Returns a `Company` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Company` to return.

  ***

* company​Contact

  [Company​Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

  Returns a `CompanyContact` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `CompanyContact` to return.

  ***

* company​Contact​Role

  [Company​Contact​Role](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRole)

  Returns a `CompanyContactRole` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `CompanyContactRole` to return.

  ***

* company​Location

  [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  Returns a `CompanyLocation` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `CompanyLocation` to return.

  ***

* company​Locations

  [Company​Location​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationConnection)

  non-null

  A paginated list of [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects for B2B customers. Company locations represent individual branches or offices of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) where B2B orders can be placed.

  Each location can have its own billing and shipping addresses, tax settings, [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) assignments with custom pricing. Use the query parameter to search locations by name or other attributes.

  Learn more about [managing company locations](https://shopify.dev/docs/apps/build/b2b/manage-client-company-locations).

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

* consent​Policy

  [\[Consent​Policy!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicy)

  non-null

  Returns the customer privacy consent policies of a shop.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    Return the policy with the provided ID.

  * country​Code

    [Privacy​Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyCountryCode)

    Return policies with the provided country code.

  * region​Code

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Return policies with the provided region code.

  * consent​Required

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Return policies where consent is required or not.

  * data​Sale​Opt​Out​Required

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Return policies where data sale opt out is required or not.

  ***

* consent​Policy​Regions

  [\[Consent​Policy​Region!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicyRegion)

  non-null

  List of countries and regions for which consent policies can be created or updated.

* current​App​Installation

  [App​Installation!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation)

  non-null

  Returns the [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) for the currently authenticated app. Provides access to granted access scopes, active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects, and billing information for your app.

  Use this query to check which permissions your app has, monitor subscription status, or retrieve [`AppCredit`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCredit) objects. Learn more about [managing access scopes](https://shopify.dev/docs/api/usage/access-scopes#checking-granted-access-scopes), [subscription billing](https://shopify.dev/docs/apps/launch/billing/subscription-billing), and [app credits](https://shopify.dev/docs/apps/launch/billing/award-app-credits).

* current​Staff​Member

  [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  The staff member making the API request.

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  Returns a `Customer` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Customer` to return.

  ***

* customer​Account​Page

  [Customer​Account​Page](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerAccountPage)

  Returns a `CustomerAccountPage` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `CustomerAccountPage` to return.

  ***

* customer​Account​Pages

  [Customer​Account​Page​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerAccountPageConnection)

  List of the shop's customer account pages.

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

* customer​By​Identifier

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  Return a customer by an identifier.

  * identifier

    [Customer​Identifier​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerIdentifierInput)

    required

    ### Arguments

    The identifier of the customer.

  ***

* customer​Merge​Job​Status

  [Customer​Merge​Request](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeRequest)

  Returns the status of a customer merge request job.

  * job​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the job performing the customer merge request.

  ***

* customer​Merge​Preview

  [Customer​Merge​Preview!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreview)

  non-null

  Returns a preview of a customer merge request.

  * customer​One​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the first customer that will be merged.

  * customer​Two​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the second customer that will be merged.

  * override​Fields

    [Customer​Merge​Override​Fields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerMergeOverrideFields)

    The fields to override the default customer merge rules.

  ***

* customer​Payment​Method

  [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  Returns a CustomerPaymentMethod resource by its ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the CustomerPaymentMethod to return.

  * show​Revoked

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to show the customer's revoked payment method.

  ***

* customers

  [Customer​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerConnection)

  non-null

  Returns a list of [customers](https://shopify.dev/api/admin-graphql/latest/objects/Customer) in your Shopify store, including key information such as name, email, location, and purchase history. Use this query to segment your audience, personalize marketing campaigns, or analyze customer behavior by applying filters based on location, order history, marketing preferences and tags. The `customers` query supports [pagination](https://shopify.dev/api/usage/pagination-graphql) and [sorting](https://shopify.dev/api/admin-graphql/latest/enums/CustomerSortKeys).

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

    [Customer​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * accepts\_marketing

        boolean

      * country

        string

      * customer\_date

        time

      * email

        string

      * first\_name

        string

      * id

        id

      * last\_abandoned\_order\_date

        time

      * last\_name

        string

      * order\_date

        time

      * orders\_count

        integer

      * phone

        string

      * state

        string

      * tag

        string

      * tag\_not

        string

      * total\_spent

        float

      * updated\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by whether a customer has consented to receive marketing material.

      - Example:

        * `accepts_marketing:true`

        Filter by the country associated with the customer's address. Use either the country name or the two-letter country code.

      - Example:

        * `country:Canada`
        * `country:JP`

        Filter by the date and time when the customer record was created. This query parameter filters by the [`createdAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-createdAt) field.

      - Example:

        * `customer_date:'2024-03-15T14:30:00Z'`
        * `customer_date: >='2024-01-01'`

        The customer's email address, used to communicate information about orders and for the purposes of email marketing campaigns. You can use a wildcard value to filter the query by customers who have an email address specified. Please note that *email* is a tokenized field: To retrieve exact matches, quote the email address (*phrase query*) as described in [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax).

      - Example:

        * `email:gmail.com`
        * `email:"bo.wang@example.com"`
        * `email:*`

        Filter by the customer's first name.

      - Example:

        * `first_name:Jane`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the date and time of the customer's most recent abandoned checkout. An abandoned checkout occurs when a customer adds items to their cart, begins the checkout process, but leaves the site without completing their purchase.

      - Example:

        * `last_abandoned_order_date:'2024-04-01T10:00:00Z'`
        * `last_abandoned_order_date: >='2024-01-01'`

        Filter by the customer's last name.

      - Example:

        * `last_name:Reeves`

        Filter by the date and time that the order was placed by the customer. Use this query filter to check if a customer has placed at least one order within a specified date range.

      - Example:

        * `order_date:'2024-02-20T00:00:00Z'`
        * `order_date: >='2024-01-01'`
        * `order_date:'2024-01-01..2024-03-31'`

        Filter by the total number of orders a customer has placed.

      - Example:

        * `orders_count:5`

        The phone number of the customer, used to communicate information about orders and for the purposes of SMS marketing campaigns. You can use a wildcard value to filter the query by customers who have a phone number specified.

      - Example:

        * `phone:+18005550100`
        * `phone:*`

        Filter by the [state](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-state) of the customer's account with the shop. This filter is only valid when [Classic Customer Accounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountsV2#field-customerAccountsVersion) is active.

      - Example:

        * `state:ENABLED`
        * `state:INVITED`
        * `state:DISABLED`
        * `state:DECLINED`

        Filter by the tags that are associated with the customer. This query parameter accepts multiple tags separated by commas.

      - Example:

        * `tag:'VIP'`
        * `tag:'Wholesale,Repeat'`

        Filter by the tags that aren't associated with the customer. This query parameter accepts multiple tags separated by commas.

      - Example:

        * `tag_not:'Prospect'`
        * `tag_not:'Test,Internal'`

        Filter by the total amount of money a customer has spent across all orders.

      - Example:

        * `total_spent:100.50`
        * `total_spent:50.00`
        * `total_spent:>100.50`
        * `total_spent:>50.00`

        The date and time, matching a whole day, when the customer's information was last updated.

        Example:

        * `updated_at:2024-01-01T00:00:00Z`
        * `updated_at:<now`
        * `updated_at:<=2024`

  ***

* customer​Saved​Searches

  [Saved​Search​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SavedSearchConnection)

  non-null

  List of the shop's customer saved searches.

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

    [Customer​Saved​Search​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSavedSearchSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * name

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

* customers​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of customers. Limited to a maximum of 10000 by default.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * * id

        id

      * updated\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* customer​Segment​Members

  [Customer​Segment​Member​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerSegmentMemberConnection)

  non-null

  A paginated list of customers that belong to an individual [`Segment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment). Segments group customers based on criteria defined through [ShopifyQL queries](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference). Access segment members with their profile information and purchase summary data. The connection includes statistics for analyzing segment attributes (such as average and sum calculations) and a total count of all members. The maximum page size is 1000.

  * segment​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the segment.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The query that's used to filter the members. The query is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).

  * query​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the segment members query.

  * timezone

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The timezone that's used to interpret relative date arguments. The timezone defaults to UTC if the timezone isn't provided.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the list. The sorting behaviour defaults to ascending order.

  * sort​Key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Sort the list by a given key. Valid values: • `created_at` - Sort by customer creation date • `first_order_date` - Sort by the date of the customer's first order • `last_abandoned_order_date` - Sort by the date of the customer's last abandoned checkout • `last_order_date` - Sort by the date of the customer's most recent order • `number_of_orders` - Sort by the total number of orders placed by the customer • `amount_spent` - Sort by the total amount the customer has spent across all orders

    Use with the `reverse` parameter to control sort direction (ascending by default, descending when reverse=true).

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

  ***

* customer​Segment​Membership

  [Segment​Membership​Response!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMembershipResponse)

  non-null

  Whether a member, which is a customer, belongs to a segment.

  * segment​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The segments to evaluate for the given customer.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer that has the membership.

  ***

* customer​Segment​Members​Query

  [Customer​Segment​Members​Query](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMembersQuery)

  Returns a `CustomerSegmentMembersQuery` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `CustomerSegmentMembersQuery` to return.

  ***

* delivery​Customization

  [Delivery​Customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization)

  The delivery customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the delivery customization.

  ***

* delivery​Customizations

  [Delivery​Customization​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCustomizationConnection)

  non-null

  The delivery customizations.

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

    * enabled

      boolean

    * function\_id

      string

    * id

      id

      Filter by `id` range.

      Example:

      * `id:1234`
      * `id:>=1234`
      * `id:<=1234`

  ***

* delivery​Profile

  [Delivery​Profile](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)

  Retrieves a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) by ID. Delivery profiles group shipping settings for specific [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects that ship from selected [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects to \[delivery zones]\(<https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone> with defined rates.

  Learn more about [delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment#whats-a-delivery-profile).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the DeliveryProfile to return.

  ***

* delivery​Profiles

  [Delivery​Profile​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileConnection)

  non-null

  Returns a paginated list of [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) objects for the shop. Delivery profiles group [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects that share shipping rates and zones.

  Each profile contains [`DeliveryLocationGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroup) objects that organize fulfillment [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects and their associated delivery zones. [`DeliveryZone`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone) objects define geographic regions with specific shipping methods and rates. Use the [`merchantOwnedOnly`](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryProfiles#arguments-merchantOwnedOnly) filter to exclude profiles that third-party apps manage.

  Learn more about [delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment#whats-a-delivery-profile).

  * merchant​Owned​Only

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    ### Arguments

    If `true`, returns only delivery profiles that were created by the merchant.

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

* delivery​Promise​Participants

  [Delivery​Promise​Participant​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryPromiseParticipantConnection)

  Returns delivery promise participants.

  * owner​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The product variant ID to filter by.

  * branded​Promise​Handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The branded promise handle to filter by.

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

* delivery​Promise​Provider

  [Delivery​Promise​Provider](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseProvider)

  Lookup a delivery promise provider.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the location associated with the delivery promise provider.

  ***

* delivery​Promise​Settings

  [Delivery​Promise​Setting!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseSetting)

  non-null

  Represents the delivery promise settings for a shop.

* delivery​Settings

  [Delivery​Setting](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliverySetting)

  Returns the shop-wide shipping settings.

* discount​Codes​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The total number of discount codes for the shop. Limited to a maximum of 10000 by default.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

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

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* discount​Node

  [Discount​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode)

  Returns a `DiscountNode` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `DiscountNode` to return.

  ***

* discount​Nodes

  [Discount​Node​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountNodeConnection)

  non-null

  Returns a list of discounts.

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

    [Discount​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * code

        string

      * combines\_with

        string

      * created\_at

        time

      * discount\_class

        string

      * discount\_type

        string

      * ends\_at

        time

      * id

        id

      * method

        string

      * starts\_at

        time

      * status

        string

      * times\_used

        integer

      * title

        string

      * type

        string

      * updated\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the discount code. Not supported for bulk discounts.

      - Example:

        * `code:WELCOME10`

        Filter by the [Shopify Functions discount classes](https://shopify.dev/docs/apps/build/discounts#discount-classes) that the [discount type](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-discount_type) can combine with.

      - Valid values:

        * `order_discounts`
        * `product_discounts`
        * `shipping_discounts`

        Example:

        * `combines_with:product_discounts`

        Filter by the date and time, in the shop's timezone, when the discount was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<='2024'`

        Filter by the [discount class](https://shopify.dev/docs/apps/build/discounts#discount-classes).

      - Valid values:

        * `order`
        * `product`
        * `shipping`

        Example:

        * `discount_class:product`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `bogo`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `type:fixed_amount`

        Filter by the date and time, in the shop's timezone, when the discount ends.

      - Example:

        * `ends_at:>'2020-10-21T23:39:20Z'`
        * `ends_at:<now`
        * `ends_at:<='2024'`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the [discount method](https://shopify.dev/docs/apps/build/discounts#discount-methods).

      - Valid values:

        * `automatic`
        * `code`

        Example:

        * `method:code`

        Filter by the date and time, in the shop's timezone, when the discount becomes active and is available for customer use.

      - Example:

        * `starts_at:>'2020-10-21T23:39:20Z'`
        * `starts_at:<now`
        * `starts_at:<='2024'`

        Filter by the status of the discount.

      - Valid values:

        * `active`
        * `expired`
        * `scheduled`

        Example:

        * `status:scheduled`

        Filter by the number of times the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times.\
        \
        This value is updated asynchronously. As a result, it might be different than the actual usage count.

      - Example:

        * `times_used:0`
        * `times_used:>150`
        * `times_used:>=200`

        Filter by the discount name that displays to merchants in the Shopify admin and to customers.

      - Example:

        * `title:Black Friday Sale`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `all`
        * `all_with_app`
        * `app`
        * `bxgy`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `type:percentage`

        Filter by the date and time, in the shop's timezone, when the discount was last updated.

        Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<='2024'`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

* discount​Nodes​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The total number of discounts for the shop. Limited to a maximum of 10000 by default.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * code

        string

      * combines\_with

        string

      * created\_at

        time

      * discount\_class

        string

      * discount\_type

        string

      * ends\_at

        time

      * id

        id

      * method

        string

      * starts\_at

        time

      * status

        string

      * times\_used

        integer

      * title

        string

      * type

        string

      * updated\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the discount code. Not supported for bulk discounts.

      - Example:

        * `code:WELCOME10`

        Filter by the [Shopify Functions discount classes](https://shopify.dev/docs/apps/build/discounts#discount-classes) that the [discount type](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-discount_type) can combine with.

      - Valid values:

        * `order_discounts`
        * `product_discounts`
        * `shipping_discounts`

        Example:

        * `combines_with:product_discounts`

        Filter by the date and time, in the shop's timezone, when the discount was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<='2024'`

        Filter by the [discount class](https://shopify.dev/docs/apps/build/discounts#discount-classes).

      - Valid values:

        * `order`
        * `product`
        * `shipping`

        Example:

        * `discount_class:product`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `bogo`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `type:fixed_amount`

        Filter by the date and time, in the shop's timezone, when the discount ends.

      - Example:

        * `ends_at:>'2020-10-21T23:39:20Z'`
        * `ends_at:<now`
        * `ends_at:<='2024'`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the [discount method](https://shopify.dev/docs/apps/build/discounts#discount-methods).

      - Valid values:

        * `automatic`
        * `code`

        Example:

        * `method:code`

        Filter by the date and time, in the shop's timezone, when the discount becomes active and is available for customer use.

      - Example:

        * `starts_at:>'2020-10-21T23:39:20Z'`
        * `starts_at:<now`
        * `starts_at:<='2024'`

        Filter by the status of the discount.

      - Valid values:

        * `active`
        * `expired`
        * `scheduled`

        Example:

        * `status:scheduled`

        Filter by the number of times the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times.\
        \
        This value is updated asynchronously. As a result, it might be different than the actual usage count.

      - Example:

        * `times_used:0`
        * `times_used:>150`
        * `times_used:>=200`

        Filter by the discount name that displays to merchants in the Shopify admin and to customers.

      - Example:

        * `title:Black Friday Sale`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `all`
        * `all_with_app`
        * `app`
        * `bxgy`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `type:percentage`

        Filter by the date and time, in the shop's timezone, when the discount was last updated.

        Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<='2024'`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* discount​Redeem​Code​Bulk​Creation

  [Discount​Redeem​Code​Bulk​Creation](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreation)

  Returns a `DiscountRedeemCodeBulkCreation` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `DiscountRedeemCodeBulkCreation` to return.

  ***

* discount​Redeem​Code​Saved​Searches

  [Saved​Search​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SavedSearchConnection)

  non-null

  List of the shop's redeemed discount code saved searches.

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

  ***

* dispute

  [Shopify​Payments​Dispute](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute)

  Returns a `ShopifyPaymentsDispute` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `ShopifyPaymentsDispute` to return.

  ***

* dispute​Evidence

  [Shopify​Payments​Dispute​Evidence](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence)

  Returns a `ShopifyPaymentsDisputeEvidence` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `ShopifyPaymentsDisputeEvidence` to return.

  ***

* disputes

  [Shopify​Payments​Dispute​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsDisputeConnection)

  non-null

  All disputes related to the Shop.

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

      * initiated\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * status

      string

  ***

* domain

  [Domain](https://shopify.dev/docs/api/admin-graphql/latest/objects/Domain)

  Returns a `Domain` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Domain` to return.

  ***

* draft​Order

  [Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  Retrieves a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) by its ID. A draft order is an order created by a merchant on behalf of their customers. Draft orders contain all necessary order details (products, pricing, customer information) but require payment to be accepted before they can be converted into [completed orders](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete).

  Use the `draftOrder` query to retrieve information associated with the following workflows:

  * Creating orders for phone, in-person, or chat sales
  * Sending invoices to customers with secure checkout links
  * Managing custom items and additional costs
  * Selling products at discount or wholesale rates
  * Processing pre-orders and saving drafts for later completion

  A draft order is associated with a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) and contains multiple [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem). Each draft order has a [status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.status), which indicates its progress through the sales workflow.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `DraftOrder` to return.

  ***

* draft​Order​Available​Delivery​Options

  [Draft​Order​Available​Delivery​Options!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAvailableDeliveryOptions)

  non-null

  Available delivery options for a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) based on the provided input. The query returns shipping rates, local delivery rates, and pickup locations that merchants can choose from when creating draft orders.

  Accepts draft order details including [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects, [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) for shipping, and discounts to determine which delivery methods are available. Pagination parameters control the number of local pickup options returned.

  * input

    [Draft​Order​Available​Delivery​Options​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAvailableDeliveryOptionsInput)

    required

    ### Arguments

    The fields for the draft order.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The search term for the delivery options.

  * local​Pickup​From

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The offset for the local pickup options.

  * local​Pickup​Count

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of local pickup options required.

  * session​Token

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Unique token used to trace execution and help optimize the calculation.

  ***

* draft​Orders

  [Draft​Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection)

  non-null

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

* draft​Order​Saved​Searches

  [Saved​Search​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SavedSearchConnection)

  non-null

  List of the shop's draft order saved searches.

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

* draft​Orders​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  Returns the number of draft orders that match the query. Limited to a maximum of 10000 by default.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

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

      * ids

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * source

      string

    * status

      string

    * tag

      string

    * updated\_at

      time

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* draft​Order​Tag

  [Draft​Order​Tag](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderTag)

  Returns a `DraftOrderTag` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `DraftOrderTag` to return.

  ***

* event

  [Event](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Event)

  Retrieves a single event by ID. Events chronicle activities in your store such as resource creation, updates, or staff comments. The query returns an [`Event`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Event) interface of type [`BasicEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent) or [`CommentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEvent).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the event.

  ***

* events

  [Event​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

  A paginated list of events that chronicle activities in the store. [`Event`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Event) is an interface implemented by types such as [`BasicEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent) and [`CommentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEvent) that track actions such as creating [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article) objects, fulfilling [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects, adding [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects, or staff comments on timelines.

  The query supports filtering and sorting to help you find specific events or audit store activity over time.

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

* events​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  Count of events. Limited to a maximum of 10000.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

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

* files

  [File​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FileConnection)

  non-null

  Retrieves a paginated list of files that have been uploaded to a Shopify store. Files represent digital assets that merchants can upload to their store for various purposes including product images, marketing materials, documents, and brand assets.

  Use the `files` query to retrieve information associated with the following workflows:

  * [Managing product media and images](https://shopify.dev/docs/apps/build/online-store/product-media)
  * [Theme development and asset management](https://shopify.dev/docs/storefronts/themes/store/success/brand-assets)
  * Brand asset management and [checkout branding](https://shopify.dev/docs/apps/build/checkout/styling/add-favicon)

  Files can include multiple [content types](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileContentType), such as images, videos, 3D models, and generic files. Each file has properties like dimensions, file size, alt text for accessibility, and upload status. Files can be filtered by [media type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaContentType) and can be associated with [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [themes](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme), and other store resources.

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

    [File​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileSortKeys)

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

    * filename

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

    * media\_type

      string

    * original\_upload\_size

      float

    * product\_id

      string

    * status

      string

    * updated\_at

      time

    * used\_in

      string

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

* file​Saved​Searches

  [Saved​Search​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SavedSearchConnection)

  non-null

  A list of the shop's file saved searches.

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

* finance​App​Access​Policy

  [Finance​App​Access​Policy!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinanceAppAccessPolicy)

  non-null

  Returns the access policy for a finance app .

* finance​Kyc​Information

  [Finance​Kyc​Information](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinanceKycInformation)

  Returns the KYC information for the shop's Shopify Payments account, used in embedded finance apps.

* fulfillment

  [Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

  Retrieves a [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment) by its ID. A fulfillment is a record that the merchant has completed their work required for one or more line items in an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). It includes tracking information, [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects, and the status of the fulfillment.

  Use this query to track the progress of shipped items, view tracking details, or check [fulfillment events](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) for example when a package is out for delivery or delivered.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Fulfillment to return.

  ***

* fulfillment​Constraint​Rules

  [\[Fulfillment​Constraint​Rule!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule)

  non-null

  The fulfillment constraint rules that belong to a shop.

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  Returns a `FulfillmentOrder` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `FulfillmentOrder` to return.

  ***

* fulfillment​Orders

  [Fulfillment​Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection)

  non-null

  The paginated list of all fulfillment orders. The returned fulfillment orders are filtered according to the [fulfillment order access scopes](https://shopify.dev/api/admin-graphql/latest/objects/fulfillmentorder#api-access-scopes) granted to the app.

  Use this query to retrieve fulfillment orders assigned to merchant-managed locations, third-party fulfillment service locations, or all kinds of locations together.

  For fetching only the fulfillment orders assigned to the app's locations, use the [assignedFulfillmentOrders](https://shopify.dev/api/admin-graphql/2024-07/objects/queryroot#connection-assignedfulfillmentorders) connection.

  * include​Closed

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether to include closed fulfillment orders.

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

    [Fulfillment​Order​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

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

* fulfillment​Service

  [Fulfillment​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

  Returns a [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) by its ID. The service can manage inventory, process fulfillment requests, and provide tracking details through callback endpoints or directly calling Shopify's APIs.

  When you register a fulfillment service, Shopify automatically creates an associated [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) where fulfillment order's can be assigned to be processed.

  Learn more about [building fulfillment service apps](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the FulfillmentService to return.

  ***

* gift​Card

  [Gift​Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  Retrieves a [`GiftCard`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) by its ID. Returns the gift card's balance, transaction history, [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) information, and whether it's enabled.

  Additional fields include the initial value, expiration date, deactivation timestamp (if applicable), and the associated [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) if the gift card was purchased by a customer through checkout. Gift cards that merchants create manually won't have an associated order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the GiftCard to return.

  ***

* gift​Card​Configuration

  [Gift​Card​Configuration!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardConfiguration)

  non-null

  The configuration for the shop's gift cards.

* gift​Cards

  [Gift​Card​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardConnection)

  non-null

  Returns a paginated list of [`GiftCard`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) objects issued for the shop.

  You can filter gift cards by attributes such as status, last characters of the code, balance status, and other values using the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCards#arguments-query) parameter. You can also apply [`SavedSearch`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch) objects to filter results.

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

    [Gift​Card​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * balance\_status

        string

      * created\_at

        time

      * expires\_on

        date

      * id

        id

      * initial\_value

        string

      * source

        string

      * status

        string

      - Filter by a case-insensitive search of multiple fields in a document, including gift card codes.

      - Example:
        * `query=a5bh6h64b329j4k7`
        * `query=Bob Norman`

      - Valid values:
        * `full`
        * `partial`
        * `empty`
        * `full_or_partial`
        Example:
        * `balance_status:full`

      - Example:
        * `created_at:>=2020-01-01T12:00:00Z`

      - Example:

        * `expires_on:>=2020-01-01`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

      - Example:
        * `initial_value:>=100`

      - Valid values:
        * `manual`
        * `purchased`
        * `api_client`
        Example:
        * `source:manual`
        Valid values:
        * `disabled`
        * `enabled`
        * `expired`
        * `expiring`
        Example:
        * `status:disabled OR status:expired`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

* gift​Cards​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The total number of gift cards issued for the shop. Limited to a maximum of 10000 by default.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * balance\_status

        string

      * created\_at

        time

      * expires\_on

        date

      * id

        id

      * initial\_value

        string

      * source

        string

      * status

        string

      - Filter by a case-insensitive search of multiple fields in a document, including gift card codes.

      - Example:
        * `query=a5bh6h64b329j4k7`
        * `query=Bob Norman`

      - Valid values:
        * `full`
        * `partial`
        * `empty`
        * `full_or_partial`
        Example:
        * `balance_status:full`

      - Example:
        * `created_at:>=2020-01-01T12:00:00Z`

      - Example:

        * `expires_on:>=2020-01-01`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

      - Example:
        * `initial_value:>=100`

      - Valid values:
        * `manual`
        * `purchased`
        * `api_client`
        Example:
        * `source:manual`
        Valid values:
        * `disabled`
        * `enabled`
        * `expired`
        * `expiring`
        Example:
        * `status:disabled OR status:expired`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* inventory​Item

  [Inventory​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

  Returns an [InventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) object by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `InventoryItem` to return.

  ***

* inventory​Items

  [Inventory​Item​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryItemConnection)

  non-null

  Returns a list of inventory items.

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

    * created\_at

      time

    * * id

        id

      * sku

        string

      * updated\_at

        time

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the inventory item [`sku`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

      - Example:
        * `sku:XYZ-12345`

  ***

* inventory​Level

  [Inventory​Level](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

  Returns an [InventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) object by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `InventoryLevel` to return.

  ***

* inventory​Properties

  [Inventory​Properties!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryProperties)

  non-null

  Returns the shop's inventory configuration, including all inventory quantity names. Quantity names represent different [inventory states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps#inventory-states) that merchants use to track inventory.

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  Retrieves an [`InventoryShipment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment) by ID. Returns tracking details, [`InventoryShipmentLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem) objects with quantities, and the shipment's current [`InventoryShipmentStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentStatus).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment.

  ***

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  Returns an [`InventoryTransfer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer) by ID. Inventory transfers track the movement of inventory between locations, including origin and destination details, [`InventoryTransferLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem) objects, quantities, and [`InventoryTransferStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus) values.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer.

  ***

* inventory​Transfers

  [Inventory​Transfer​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferConnection)

  non-null

  Returns a paginated list of [`InventoryTransfer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer) objects between locations. Transfers track the movement of [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) objects between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects.

  Supports filtering transfers using query parameters and sorting by various criteria. Use the connection's edges to access transfer details including [`InventoryTransferLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem) objects, quantities, and shipment status.

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

    [Transfer​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/TransferSortKeys)

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

    * destination\_id

      id

    * * id

        id

      * origin\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * product\_id

      id

    * product\_variant\_id

      id

    * source\_id

      id

    * status

      string

    * * tag

        string

      * tag\_not

        string

      - Filter objects by the `tag` field.

      - Example:

        * `tag:my_tag`

        Filter by objects that don’t have the specified tag.

        Example:

        * `tag_not:my_tag`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  Returns a Job resource by ID. Used to check the status of internal jobs and any applicable changes.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the job to query.

  ***

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  Retrieves a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) by its ID. Locations are physical places where merchants store inventory, such as warehouses, retail stores, or fulfillment centers.

  Each location tracks inventory levels, fulfillment capabilities, and address information. Active locations can stock products and fulfill orders based on their configuration settings.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the location to return. If no ID is provided, the primary location of the Shop is returned.

  ***

* location​By​Identifier

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  Return a location by an identifier.

  * identifier

    [Location​Identifier​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationIdentifierInput)

    required

    ### Arguments

    The identifier of the location.

  ***

* locations

  [Location​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection)

  non-null

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

* locations​Available​For​Delivery​Profiles​Connection

  [Location​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection)

  non-null

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

* locations​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  Returns the count of locations for the given shop. Limited to a maximum of 10000 by default.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

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

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* manual​Holds​Fulfillment​Orders

  [Fulfillment​Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection)

  non-null

  Returns a list of fulfillment orders that are on hold.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The query conditions used to filter fulfillment orders. Only fulfillment orders corresponding to orders matching the query will be counted. Supported filter parameters:

    * `order_financial_status`
    * `order_risk_level`
    * `shipping_address_coordinates_validated`

    See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.

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

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  Returns a `Market` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Market` to return.

  ***

* marketing​Activities

  [Marketing​Activity​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketingActivityConnection)

  non-null

  A list of marketing activities associated with the marketing app.

  * marketing​Activity​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Default:\[]

    ### Arguments

    The list of marketing activity IDs to filter by.

  * remote​Ids

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Default:\[]

    The list of remote IDs associated with marketing activities to filter by.

  * utm

    [UTMInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UTMInput)

    The UTM parameters associated with marketing activities to filter by.

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

    [Marketing​Activity​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivitySortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * app\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * app\_name

      string

      A comma-separated list of app names.

    * created\_at

      time

    * * id

        id

      * marketing\_campaign\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * scheduled\_to\_end\_at

      time

    * scheduled\_to\_start\_at

      time

    * tactic

      string

    * title

      string

    * updated\_at

      time

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  Returns a `MarketingActivity` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `MarketingActivity` to return.

  ***

* marketing​Event

  [Marketing​Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent)

  Returns a `MarketingEvent` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `MarketingEvent` to return.

  ***

* marketing​Events

  [Marketing​Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketingEventConnection)

  non-null

  A list of marketing events associated with the marketing app.

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

    [Marketing​Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingEventSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * app\_id

      id

    * description

      string

    * * id

        id

      * started\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * type

      string

  ***

* market​Localizable​Resource

  [Market​Localizable​Resource](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResource)

  A resource that can have localized values for different markets.

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Find a market localizable resource by ID.

  ***

* market​Localizable​Resources

  [Market​Localizable​Resource​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketLocalizableResourceConnection)

  non-null

  Resources that can have localized values for different markets.

  * resource​Type

    [Market​Localizable​Resource​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketLocalizableResourceType)

    required

    ### Arguments

    Return only resources of a type.

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

* market​Localizable​Resources​By​Ids

  [Market​Localizable​Resource​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketLocalizableResourceConnection)

  non-null

  Resources that can have localized values for different markets.

  * resource​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Return only resources for given IDs.

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

* markets

  [Market​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection)

  non-null

  Returns a paginated list of [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) objects configured for the shop. Markets match buyers based on defined conditions to deliver customized shopping experiences.

  Filter markets by [`MarketType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType) and [`MarketStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketStatus), search by name, and control sort order. Retrieve market configurations including [`MarketCurrencySettings`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettings), [`MarketWebPresence`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence) objects, and [`MarketConditions`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketConditions).

  Learn more about [Shopify Markets](https://shopify.dev/docs/apps/build/markets).

  * type

    [Market​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType)

    Default:null

    ### Arguments

    Filters markets by type.

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

    [Markets​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketsSortKeys)

    Default:NAME

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * market\_condition\_types

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        A comma-separated list of condition types.

    * market\_type

      string

    * name

      string

    * * status

        string

      * wildcard\_company\_location\_with\_country\_code

        string

      -
      - Valid values:
        * `ACTIVE`
        * `DRAFT`

  ***

* markets​Resolved​Values

  [Markets​Resolved​Values!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsResolvedValues)

  non-null

  The resolved values for a buyer signal.

  * buyer​Signal

    [Buyer​Signal​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BuyerSignalInput)

    required

    ### Arguments

    The buyer signal.

  ***

* menu

  [Menu](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu)

  Returns a `Menu` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Menu` to return.

  ***

* menus

  [Menu​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MenuConnection)

  non-null

  Retrieves navigation menus. Menus organize content into hierarchical navigation structures that merchants can display in the online store (for example, in headers, footers, and sidebars) and customer accounts.

  Each [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) contains a handle for identification, a title for display, and a collection of [`MenuItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem) objects that can be nested up to 3 levels deep. Default menus have protected handles that can't be modified.

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

    [Menu​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MenuSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * title

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

* metafield​Definition

  [Metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  Retrieves a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/MetafieldDefinition) by its identifier. You can identify a definition using either its owner type, namespace, and key, or its global ID.

  Use this query to inspect a definition's configuration, including its data type, validations, access settings, and the count of [metafields](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/Metafield) using it.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Deprecated

    ### Arguments

  * identifier

    [Metafield​Definition​Identifier​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

    The identifier of the MetafieldDefinition to return.

  ***

* metafield​Definitions

  [Metafield​Definition​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

  non-null

  Returns a list of metafield definitions.

  * key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    Filter metafield definition by key.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Filter metafield definition by namespace.

  * owner​Type

    [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

    required

    Filter the metafield definition by the specific owner type.

  * pinned​Status

    [Metafield​Definition​Pinned​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinnedStatus)

    Default:ANY

    Filter the metafield definition by the pinned status.

  * constraint​Subtype

    [Metafield​Definition​Constraint​Subtype​Identifier](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintSubtypeIdentifier)

    Filter metafield definitions based on whether they apply to a given resource subtype.

  * constraint​Status

    [Metafield​Definition​Constraint​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionConstraintStatus)

    Filter metafield definitions based on whether they are constrained.

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

* metafield​Definition​Types

  [\[Metafield​Definition​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionType)

  non-null

  The available metafield types that you can use when creating [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/MetafieldDefinition) objects. Each type specifies what kind of data it stores (such as boolean, color, date, or references), its category, and which validations it supports.

  For a list of supported types and their capabilities, refer to the [metafield types documentation](https://shopify.dev/docs/apps/metafields/types).

* metaobject

  [Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  Retrieves a single [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) by its global ID. [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects) store custom structured data based on defined schemas. The returned metaobject includes its fields with values, display name, handle, and associated metadata like update timestamps and capabilities.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobject to return.

  ***

* metaobject​By​Handle

  [Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  Retrieves a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) by its handle and type. Handles are unique identifiers within a metaobject type.

  * handle

    [Metaobject​Handle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectHandleInput)

    required

    ### Arguments

    The identifier of the metaobject to return.

  ***

* metaobject​Definition

  [Metaobject​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

  Retrieves a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition) by its global ID. Metaobject definitions provide the structure and fields for metaobjects.

  The definition includes field configurations, access settings, display preferences, and capabilities that determine how [metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) of this type behave across the Shopify platform.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobject to return.

  ***

* metaobject​Definition​By​Type

  [Metaobject​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

  Retrieves a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition) by its type. The type serves as a unique identifier that distinguishes one metaobject definition from another.

  * type

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The type of the metaobject definition to return.

  ***

* metaobject​Definitions

  [Metaobject​Definition​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectDefinitionConnection)

  non-null

  Returns a paginated list of all [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition) objects configured for the store. Metaobject definitions provide the schema for creating custom data structures composed of individual fields. Each definition specifies the field types, access permissions, and capabilities for [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries of that type. Use this query to discover available metaobject types before creating or querying metaobject entries.

  Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

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

* metaobjects

  [Metaobject​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectConnection)

  non-null

  Returns a paginated list of [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries for a specific type. Metaobjects are custom data structures that extend Shopify's data model with merchant or app-specific data types.

  Filter results using the query parameter with a search syntax for metaobject fields. Use `fields.{key}:{value}` to filter by field values, supporting any field previously marked as filterable. The `sortKey` parameter accepts `id`, `type`, `updated_at`, or `display_name` to control result ordering.

  Learn more about [querying metaobjects by field value](https://shopify.dev/docs/apps/build/custom-data/metafields/query-by-metafield-value).

  * type

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The type of the metaobjects to query.

  * sort​Key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The key of a field to sort with. Supports "id", "type", "updated\_at", and "display\_name".

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

    * display\_name

      string

    * * fields.{key}

        mixed

      * handle

        string

      - Filters metaobject entries by field value. Format: `fields.{key}:{value}`. Only fields marked as filterable in the metaobject definition can be used. Learn more about [querying metaobjects by field value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

      - Example:
        * `fields.color:blue`
        * `fields.on_sale:true`

    * * id

        id

      * updated\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

* mobile​Platform​Application

  [Mobile​Platform​Application](https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication)

  Return a mobile platform application by its ID.

* mobile​Platform​Applications

  [Mobile​Platform​Application​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MobilePlatformApplicationConnection)

  non-null

  List the mobile platform applications.

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

* node

  [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  Returns a specific node (any object that implements the [Node](https://shopify.dev/api/admin-graphql/latest/interfaces/Node) interface) by ID, in accordance with the [Relay specification](https://relay.dev/docs/guides/graphql-server-specification/#object-identification). This field is commonly used for refetching an object.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Node` to return.

  ***

* nodes

  [\[Node\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  non-null

  Returns the list of nodes (any objects that implement the [Node](https://shopify.dev/api/admin-graphql/latest/interfaces/Node) interface) with the given IDs, in accordance with the [Relay specification](https://relay.dev/docs/guides/graphql-server-specification/#object-identification).

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The IDs of the Nodes to return.

  ***

* online​Store

  [Online​Store!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStore)

  non-null

  The shop's online store channel.

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The `order` query retrieves an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/order) by its ID. This query provides access to comprehensive order information such as customer details, line items, financial data, and fulfillment status.

  Use the `order` query to retrieve information associated with the following processes:

  * [Order management and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps)
  * [Financial reporting](https://help.shopify.com/manual/finance)
  * [Customer purchase history](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/customers-reports) and [transaction analysis](https://shopify.dev/docs/apps/launch/billing/view-charges-earnings#transaction-data-through-the-graphql-admin-api)
  * [Shipping](https://shopify.dev/docs/apps/build/checkout/delivery-shipping) and [inventory management](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps)

  You can only retrieve the last 60 days worth of orders from a store by default. If you want to access older orders, then you need to [request access to all orders](https://shopify.dev/docs/api/usage/access-scopes#orders-permissions).

  For large order datasets, consider using [bulk operations](https://shopify.dev/docs/api/usage/bulk-operations/queries). Bulk operations handle pagination automatically and allow you to retrieve data asynchronously without being constrained by API rate limits. Learn more about [creating orders](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreate) and [building order management apps](https://shopify.dev/docs/apps/build/orders-fulfillment).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Order` to return.

  ***

* order​By​Identifier

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  Return an order by an identifier.

  * identifier

    [Order​Identifier​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderIdentifierInput)

    required

    ### Arguments

    The identifier of the order.

  ***

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  Returns a `OrderEditSession` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `OrderEditSession` to return.

  ***

* order​Payment​Status

  [Order​Payment​Status](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderPaymentStatus)

  Retrieves the status of a deferred payment by its payment reference ID. Use this query to monitor the processing status of payments that are initiated through payment mutations. Deferred payments are called [payment terms](https://shopify.dev/docs/apps/build/checkout/payments/payment-terms) in the API.

  The query returns an [`OrderPaymentStatus`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderPaymentStatus) object that includes the current payment status, any error messages, and associated transactions. Poll this query to track [asynchronous payment processing](https://shopify.dev/docs/apps/build/payments/processing) after initiating a deferred payment.

  * payment​Reference​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Unique identifier returned by orderCreatePayment.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ID of the order for which the payment was initiated.

  ***

* orders

  [Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

  non-null

  Returns a list of [orders](https://shopify.dev/api/admin-graphql/latest/objects/Order) placed in the store, including data such as order status, customer, and line item details. Use the `orders` query to build reports, analyze sales performance, or automate fulfillment workflows. The `orders` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql), [sorting](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#arguments-sortKey), and [filtering](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#arguments-query).

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

    Default:PROCESSED\_AT

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

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

* order​Saved​Searches

  [Saved​Search​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SavedSearchConnection)

  non-null

  Returns [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch) for orders in the shop. Saved searches store search queries with their filters and search terms.

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

* orders​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  Returns the number of [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) in the shop. You can filter orders using [search syntax](https://shopify.dev/docs/api/usage/search-syntax) or a [`SavedSearch`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch), and set a maximum count limit to control query performance.

  Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/ordersCount#arguments-query) argument to filter the count by criteria like order status, financial state, or fulfillment status. The response includes both the count value and its precision, indicating whether the count is exact or an estimate.

  ***

  Note

  The count is limited to 10,000 orders by default. Use the [`limit`](https://shopify.dev/docs/api/admin-graphql/latest/queries/ordersCount#arguments-limit) argument to adjust this value, or pass `null` for no limit. Limited to a maximum of 10000 by default.

  ***

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

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

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* page

  [Page](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page)

  Returns a `Page` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Page` to return.

  ***

* pages

  [Page​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/PageConnection)

  non-null

  A paginated list of pages from the online store. [`Page`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page) objects are content pages that merchants create to provide information to customers, such as "About Us", "Contact", or policy pages.

  The query supports filtering with a [search query](https://shopify.dev/docs/api/usage/search-syntax) and sorting by various criteria. Advanced filtering is available through saved searches using the [`savedSearchId`](https://shopify.dev/docs/api/admin-graphql/latest/queries/pages#arguments-savedSearchId) argument.

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

    [Page​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/PageSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      * handle

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the date and time when the page was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by the handle of the page.

    * * id

        id

      * published\_at

        time

      * published\_status

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the date and time when the page was published.

      - Example:

        * `published_at:>'2020-10-21T23:39:20Z'`
        * `published_at:<now`
        * `published_at:<=2024`

        Filter by published status

    * title

      string

      Filter by the title of the page.

    * updated\_at

      time

      Filter by the date and time when the page was last updated.

      Example:

      * `updated_at:>'2020-10-21T23:39:20Z'`
      * `updated_at:<now`
      * `updated_at:<=2024`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

* pages​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  Count of pages. Limited to a maximum of 10000 by default.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    ### Arguments

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* payment​Customization

  [Payment​Customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization)

  The payment customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the payment customization.

  ***

* payment​Customizations

  [Payment​Customization​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentCustomizationConnection)

  non-null

  The payment customizations.

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

    * enabled

      boolean

    * function\_id

      string

    * id

      id

      Filter by `id` range.

      Example:

      * `id:1234`
      * `id:>=1234`
      * `id:<=1234`

  ***

* payment​Terms​Templates

  [\[Payment​Terms​Template!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsTemplate)

  non-null

  The list of payment terms templates eligible for all shops and users.

  * payment​Terms​Type

    [Payment​Terms​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentTermsType)

    ### Arguments

    The payment terms type to filter the payment terms templates list.

  ***

* pending​Orders​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of pendings orders. Limited to a maximum of 10000.

* point​Of​Sale​Device

  [Point​Of​Sale​Device](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevice)

  Returns a `PointOfSaleDevice` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `PointOfSaleDevice` to return.

  ***

* price​List

  [Price​List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  Returns a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) by ID. You can use price lists to specify either fixed prices or adjusted relative prices that override initial [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) prices.

  Price lists enable contextual pricing for the [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) they are associated to. Each price list can define fixed prices for specific [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects or percentage-based adjustments relative to other prices.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `PriceList` to return.

  ***

* price​Lists

  [Price​List​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListConnection)

  non-null

  All price lists for a shop.

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

    [Price​List​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* privacy​Settings

  [Privacy​Settings!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PrivacySettings)

  non-null

  Privacy related settings for a shop.

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  Retrieves a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) by its ID. A product is an item that a merchant can sell in their store.

  Use the `product` query when you need to:

  * Access essential product data (for example, title, description, price, images, SEO metadata, and metafields).
  * Build product detail pages and manage inventory.
  * Handle international sales with localized pricing and content.
  * Manage product variants and product options.

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Product` to return.

  ***

* product​By​Identifier

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  Return a product by an identifier.

  * identifier

    [Product​Identifier​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductIdentifierInput)

    required

    ### Arguments

    The identifier of the product.

  ***

* product​Duplicate​Job

  [Product​Duplicate​Job!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDuplicateJob)

  non-null

  Returns the product duplicate job.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    An ID of a product duplicate job to fetch.

  ***

* product​Feed

  [Product​Feed](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeed)

  Returns a ProductFeed resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the ProductFeed to return.

  ***

* product​Feeds

  [Product​Feed​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductFeedConnection)

  non-null

  The product feeds for the shop.

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

* product​Operation

  [Product​Operation](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ProductOperation)

  Returns a ProductOperation resource by ID.

  This can be used to query the [ProductSetOperation](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/ProductSetOperation), using the ID that was returned [when the product was created or updated](https://shopify.dev/api/admin/migrate/new-product-model/sync-data#create-a-product-with-variants-and-options-asynchronously) by the [ProductSet](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/productSet) mutation.

  The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

  The `product` field provides the details of the created or updated product.

  For the [ProductSetOperation](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/ProductSetOperation), the `userErrors` field provides mutation errors that occurred during the operation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `ProductOperation` to return.

  ***

* product​Resource​Feedback

  [Product​Resource​Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductResourceFeedback)

  Retrieves product resource feedback for the currently authenticated app, providing insights into product data quality, completeness, and optimization opportunities. This feedback helps apps guide merchants toward better product listings and improved store performance.

  For example, an SEO app might receive feedback indicating that certain products lack meta descriptions or have suboptimal titles, enabling the app to provide specific recommendations for improving search visibility and conversion rates.

  Use `ProductResourceFeedback` to:

  * Display product optimization recommendations to merchants
  * Identify data quality issues across product catalogs
  * Build product improvement workflows and guided experiences
  * Track progress on product listing completeness and quality
  * Implement automated product auditing and scoring systems
  * Generate reports on catalog health and optimization opportunities
  * Provide contextual suggestions within product editing interfaces

  The feedback system evaluates products against various criteria including SEO best practices, required fields, media quality, and sales channel requirements. Each feedback item includes specific details about the issue, suggested improvements, and priority levels.

  Feedback is app-specific and reflects the particular focus of your application - marketing apps receive different insights than inventory management apps. The system continuously updates as merchants make changes, providing real-time guidance for product optimization.

  This resource is particularly valuable for apps that help merchants improve their product listings, optimize for search engines, or enhance their overall catalog quality. The feedback enables proactive suggestions rather than reactive problem-solving.

  Learn more about [product optimization](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The product associated with the resource feedback.

  ***

* products

  [Product​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection)

  non-null

  Retrieves a list of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in a store. Products are the items that merchants can sell in their store.

  Use the `products` query when you need to:

  * Build a browsing interface for a product catalog.
  * Create product [searching](https://shopify.dev/docs/api/usage/search-syntax), [sorting](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-sortKey), and [filtering](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-query) experiences.
  * Implement product recommendations.
  * Sync product data with external systems.

  The `products` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) to handle large product catalogs and [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-savedSearchId) for frequently used product queries.

  The `products` query returns products with their associated metadata, including:

  * Basic product information (for example, title, description, vendor, and type)
  * Product options and product variants, with their prices and inventory
  * Media attachments (for example, images and videos)
  * SEO metadata
  * Product categories and tags
  * Product availability and publishing statuses

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

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

    [Product​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * barcode

        string

      * bundles

        boolean

      * category\_id

        string

      * collection\_id

        id

      * combined\_listing\_role

        string

      * created\_at

        time

      * delivery\_profile\_id

        id

      * error\_feedback

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the product variant [`barcode`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-barcode) field.

      - Example:

        * `barcode:ABC-abc-1234`

        Filter by a [product bundle](https://shopify.dev/docs/apps/build/product-merchandising/bundles). A product bundle is a set of two or more related products, which are commonly offered at a discount.

      - Example:

        * `bundles:true`

        Filter by the product [category ID](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-category) (`product.category.id`). A product category is the category of a product from [Shopify's Standard Product Taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17).

      - Example:

        * `category_id:sg-4-17-2-17`

        Filter by the collection [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-id) field.

      - Example:

        * `collection_id:108179161409`

        Filter by the role of the product in a [combined listing](https://shopify.dev/apps/build/product-merchandising/combined-listings).

      - Valid values:

        * `parent`
        * `child`
        * `no_role`

        Example:

        * `combined_listing_role:parent`

        Filter by the date and time when the product was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<='2024'`

        Filter by the delivery profile [`id`](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryProfile#field-id) field.

      - Example:

        * `delivery_profile_id:108179161409`

        Filter by products with publishing errors.

    * * gift\_card

        boolean

      * handle

        string

      * has\_only\_composites

        boolean

      * has\_only\_default\_variant

        boolean

      * has\_variant\_with\_components

        boolean

      * id

        id

      * inventory\_total

        integer

      * is\_price\_reduced

        boolean

      * metafields.{namespace}.{key}

        mixed

      * out\_of\_stock\_somewhere

        boolean

      * price

        bigdecimal

      * product\_configuration\_owner

        string

      * product\_publication\_status

        string

      * product\_type

        string

      * publication\_ids

        string

      * publishable\_status

        string

      * published\_at

        time

      * published\_status

        string

      * sku

        string

      * status

        string

      * tag

        string

      * tag\_not

        string

      * title

        string

      * updated\_at

        time

      * variant\_id

        id

      * variant\_title

        string

      * vendor

        string

      - Filter by the product [`isGiftCard`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-isgiftcard) field.

      - Example:

        * `gift_card:true`

        Filter by a comma-separated list of product [handles](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-handle).

      - Example:

        * `handle:the-minimal-snowboard`

        Filter by products that have only composite variants.

      - Example:

        * `has_only_composites:true`

        Filter by products that have only a default variant. A default variant is the only variant if no other variants are specified.

      - Example:

        * `has_only_default_variant:true`

        Filter by products that have variants with associated components.

      - Example:

        * `has_variant_with_components:true`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by inventory count.

      - Example:

        * `inventory_total:0`
        * `inventory_total:>150`
        * `inventory_total:>=200`

        Filter by products that have a reduced price. For more information, refer to the [`CollectionRule`](https://shopify.dev/api/admin-graphql/latest/objects/CollectionRule) object.

      - Example:

        * `is_price_reduced:true`

        Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

      - Example:

        * `metafields.custom.on_sale:true`
        * `metafields.product.material:"gid://shopify/Metaobject/43458085"`

        Filter by products that are out of stock in at least one location.

      - Example:

        * `out_of_stock_somewhere:true`

        Filter by the product variant [`price`](https://shopify.dev/api/admin-graphql/latest/objects/Productvariant#field-price) field.

      - Example:

        * `price:100.57`

        Filter by the app [`id`](https://shopify.dev/api/admin-graphql/latest/objects/App#field-id) field.

      - Example:

        * `product_configuration_owner:10001`

        Filter by channel approval process status of the resource on a channel, such as the online store. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.app) (`Channel.app.id`) and one of the valid values. For simple visibility checks, use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) instead.

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

        Filter by a comma-separated list of [product types](https://help.shopify.com/manual/products/details/product-type).

      - Example:

        * `product_type:snowboard`

        Filter by a comma-separated list of publication IDs that are associated with the product.

      - Example:

        * `publication_ids:184111530305,184111694145`

        **Deprecated:** This parameter is deprecated as of 2025-12 and will be removed in a future API version. Use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) for visibility checks. Filter by the publishable status of the resource on a channel. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) and one of the valid status values.

      - Valid values:

        * `* {channel_app_id}-unset`
        * `* {channel_app_id}-pending`
        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-not_approved`

        Example:

        * `publishable_status:580111-unset`
        * `publishable_status:580111-pending`

        Filter by the date and time when the product was published to the online store and other sales channels.

      - Example:

        * `published_at:>2020-10-21T23:39:20Z`
        * `published_at:<now`
        * `published_at:<=2024`

        Filter resources by their visibility and publication state on a channel. Online store channel filtering: - `online_store_channel`: Returns all resources in the online store channel, regardless of publication status. - `published`/`visible`: Returns resources that are published to the online store. - `unpublished`: Returns resources that are not published to the online store. Channel-specific filtering using the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) with suffixes: - `{channel_app_id}-published`: Returns resources published to the specified channel. - `{channel_app_id}-visible`: Same as `{channel_app_id}-published` (kept for backwards compatibility). - `{channel_app_id}-intended`: Returns resources added to the channel but not yet published. - `{channel_app_id}-hidden`: Returns resources not added to the channel or not published. Other: - `unavailable`: Returns resources not published to any channel.

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

        Filter by the product variant [`sku`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

      - Example:

        * `sku:XYZ-12345`

        Filter by a comma-separated list of statuses. You can use statuses to manage inventory. Shopify only displays products with an `ACTIVE` status in online stores, sales channels, and apps.

      - Valid values:

        * `active` Default
        * `archived`
        * `draft`

        Example:

        * `status:active,draft`

        Filter objects by the `tag` field.

      - Example:

        * `tag:my_tag`

        Filter by objects that don’t have the specified tag.

      - Example:

        * `tag_not:my_tag`

        Filter by the product [`title`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-title) field.

      - Example:

        * `title:The Minimal Snowboard`

        Filter by the date and time when the product was last updated.

      - Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<='2024'`

        Filter by the product variant [`id`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-id) field.

      - Example:

        * `variant_id:45779434701121`

        Filter by the product variant [`title`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-title) field.

      - Example:

        * `variant_title:'Special ski wax'`

        Filter by the origin or source of the product. Learn more about [vendors and managing vendor information](https://help.shopify.com/manual/products/managing-vendor-info).

        Example:

        * `vendor:Snowdevil`
        * `vendor:Snowdevil OR vendor:Icedevil`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

* product​Saved​Searches

  [Saved​Search​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SavedSearchConnection)

  non-null

  Returns a list of the shop's product saved searches.

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

* products​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  Count of products. Limited to a maximum of 10000 by default.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * barcode

        string

      * bundles

        boolean

      * category\_id

        string

      * collection\_id

        id

      * combined\_listing\_role

        string

      * created\_at

        time

      * delivery\_profile\_id

        id

      * error\_feedback

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the product variant [`barcode`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-barcode) field.

      - Example:

        * `barcode:ABC-abc-1234`

        Filter by a [product bundle](https://shopify.dev/docs/apps/build/product-merchandising/bundles). A product bundle is a set of two or more related products, which are commonly offered at a discount.

      - Example:

        * `bundles:true`

        Filter by the product [category ID](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-category) (`product.category.id`). A product category is the category of a product from [Shopify's Standard Product Taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17).

      - Example:

        * `category_id:sg-4-17-2-17`

        Filter by the collection [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-id) field.

      - Example:

        * `collection_id:108179161409`

        Filter by the role of the product in a [combined listing](https://shopify.dev/apps/build/product-merchandising/combined-listings).

      - Valid values:

        * `parent`
        * `child`
        * `no_role`

        Example:

        * `combined_listing_role:parent`

        Filter by the date and time when the product was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<='2024'`

        Filter by the delivery profile [`id`](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryProfile#field-id) field.

      - Example:

        * `delivery_profile_id:108179161409`

        Filter by products with publishing errors.

    * * gift\_card

        boolean

      * handle

        string

      * has\_only\_composites

        boolean

      * has\_only\_default\_variant

        boolean

      * has\_variant\_with\_components

        boolean

      * id

        id

      * inventory\_total

        integer

      * is\_price\_reduced

        boolean

      * metafields.{namespace}.{key}

        mixed

      * out\_of\_stock\_somewhere

        boolean

      * price

        bigdecimal

      * product\_configuration\_owner

        string

      * product\_publication\_status

        string

      * product\_type

        string

      * publication\_ids

        string

      * publishable\_status

        string

      * published\_at

        time

      * published\_status

        string

      * sku

        string

      * status

        string

      * tag

        string

      * tag\_not

        string

      * title

        string

      * updated\_at

        time

      * variant\_id

        id

      * variant\_title

        string

      * vendor

        string

      - Filter by the product [`isGiftCard`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-isgiftcard) field.

      - Example:

        * `gift_card:true`

        Filter by a comma-separated list of product [handles](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-handle).

      - Example:

        * `handle:the-minimal-snowboard`

        Filter by products that have only composite variants.

      - Example:

        * `has_only_composites:true`

        Filter by products that have only a default variant. A default variant is the only variant if no other variants are specified.

      - Example:

        * `has_only_default_variant:true`

        Filter by products that have variants with associated components.

      - Example:

        * `has_variant_with_components:true`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by inventory count.

      - Example:

        * `inventory_total:0`
        * `inventory_total:>150`
        * `inventory_total:>=200`

        Filter by products that have a reduced price. For more information, refer to the [`CollectionRule`](https://shopify.dev/api/admin-graphql/latest/objects/CollectionRule) object.

      - Example:

        * `is_price_reduced:true`

        Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

      - Example:

        * `metafields.custom.on_sale:true`
        * `metafields.product.material:"gid://shopify/Metaobject/43458085"`

        Filter by products that are out of stock in at least one location.

      - Example:

        * `out_of_stock_somewhere:true`

        Filter by the product variant [`price`](https://shopify.dev/api/admin-graphql/latest/objects/Productvariant#field-price) field.

      - Example:

        * `price:100.57`

        Filter by the app [`id`](https://shopify.dev/api/admin-graphql/latest/objects/App#field-id) field.

      - Example:

        * `product_configuration_owner:10001`

        Filter by channel approval process status of the resource on a channel, such as the online store. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.app) (`Channel.app.id`) and one of the valid values. For simple visibility checks, use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) instead.

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

        Filter by a comma-separated list of [product types](https://help.shopify.com/manual/products/details/product-type).

      - Example:

        * `product_type:snowboard`

        Filter by a comma-separated list of publication IDs that are associated with the product.

      - Example:

        * `publication_ids:184111530305,184111694145`

        **Deprecated:** This parameter is deprecated as of 2025-12 and will be removed in a future API version. Use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) for visibility checks. Filter by the publishable status of the resource on a channel. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) and one of the valid status values.

      - Valid values:

        * `* {channel_app_id}-unset`
        * `* {channel_app_id}-pending`
        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-not_approved`

        Example:

        * `publishable_status:580111-unset`
        * `publishable_status:580111-pending`

        Filter by the date and time when the product was published to the online store and other sales channels.

      - Example:

        * `published_at:>2020-10-21T23:39:20Z`
        * `published_at:<now`
        * `published_at:<=2024`

        Filter resources by their visibility and publication state on a channel. Online store channel filtering: - `online_store_channel`: Returns all resources in the online store channel, regardless of publication status. - `published`/`visible`: Returns resources that are published to the online store. - `unpublished`: Returns resources that are not published to the online store. Channel-specific filtering using the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) with suffixes: - `{channel_app_id}-published`: Returns resources published to the specified channel. - `{channel_app_id}-visible`: Same as `{channel_app_id}-published` (kept for backwards compatibility). - `{channel_app_id}-intended`: Returns resources added to the channel but not yet published. - `{channel_app_id}-hidden`: Returns resources not added to the channel or not published. Other: - `unavailable`: Returns resources not published to any channel.

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

        Filter by the product variant [`sku`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

      - Example:

        * `sku:XYZ-12345`

        Filter by a comma-separated list of statuses. You can use statuses to manage inventory. Shopify only displays products with an `ACTIVE` status in online stores, sales channels, and apps.

      - Valid values:

        * `active` Default
        * `archived`
        * `draft`

        Example:

        * `status:active,draft`

        Filter objects by the `tag` field.

      - Example:

        * `tag:my_tag`

        Filter by objects that don’t have the specified tag.

      - Example:

        * `tag_not:my_tag`

        Filter by the product [`title`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-title) field.

      - Example:

        * `title:The Minimal Snowboard`

        Filter by the date and time when the product was last updated.

      - Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<='2024'`

        Filter by the product variant [`id`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-id) field.

      - Example:

        * `variant_id:45779434701121`

        Filter by the product variant [`title`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-title) field.

      - Example:

        * `variant_title:'Special ski wax'`

        Filter by the origin or source of the product. Learn more about [vendors and managing vendor information](https://help.shopify.com/manual/products/managing-vendor-info).

        Example:

        * `vendor:Snowdevil`
        * `vendor:Snowdevil OR vendor:Icedevil`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* product​Tags

  [String​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection)

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

* product​Types

  [String​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection)

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

* product​Variant

  [Product​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  Retrieves a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) by its ID.

  A product variant is a specific version of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

  Use the `productVariant` query when you need to:

  * Access essential product variant data (for example, title, price, image, and metafields).
  * Build product detail pages and manage inventory.
  * Handle international sales with localized pricing and content.
  * Manage product variants that are part of a bundle or selling plan.

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `ProductVariant` to return.

  ***

* product​Variant​By​Identifier

  [Product​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  Return a product variant by an identifier.

  * identifier

    [Product​Variant​Identifier​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantIdentifierInput)

    required

    ### Arguments

    The identifier of the product variant.

  ***

* product​Variants

  [Product​Variant​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection)

  non-null

  Retrieves a list of [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) associated with a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product).

  A product variant is a specific version of a product that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

  Use the `productVariants` query when you need to:

  * Search for product variants by attributes such as SKU, barcode, or inventory quantity.
  * Filter product variants by attributes, such as whether they're gift cards or have custom metafields.
  * Fetch product variants for bulk operations, such as updating prices or inventory.
  * Preload data for product variants, such as inventory items, selected options, or associated products.

  The `productVariants` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) to handle large product catalogs and [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVariants#arguments-savedSearchId) for frequently used product variant queries.

  The `productVariants` query returns product variants with their associated metadata, including:

  * Basic product variant information (for example, title, SKU, barcode, price, and inventory)
  * Media attachments (for example, images and videos)
  * Associated products, selling plans, bundles, and metafields

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

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

    [Product​Variant​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * barcode

        string

      * collection

        string

      * delivery\_profile\_id

        id

      * exclude\_composite

        boolean

      * exclude\_variants\_with\_components

        boolean

      * gift\_card

        boolean

      * id

        id

      * inventory\_quantity

        integer

      * location\_id

        id

      * managed

        boolean

      * managed\_by

        string

      * option1

        string

      * option2

        string

      * option3

        string

      * product\_id

        id

      * product\_ids

        string

      * product\_publication\_status

        string

      * product\_status

        string

      * product\_type

        string

      * publishable\_status

        string

      * published\_status

        string

      * requires\_components

        boolean

      * sku

        string

      * tag

        string

      * tag\_not

        string

      * taxable

        boolean

      * title

        string

      * updated\_at

        time

      * vendor

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the product variant [`barcode`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-barcode) field.

      - Example:

        * `barcode:ABC-abc-123`

        Filter by the [ID of the collection](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-id) that the product variant belongs to.

      - Example:

        * `collection:465903092033`

        Filter by the product variant [delivery profile ID](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-deliveryprofile) (`ProductVariant.deliveryProfile.id`).

      - Example:

        * `delivery_profile_id:108179161409`

        Filter by product variants that aren't composites.

      - Example:

        * `exclude_composite:true`

        Filter by whether there are [components](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle) that are associated with the product variants in a bundle.

      - Example:

        * `exclude_variants_with_components:true`

        Filter by the product [`isGiftCard`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-isgiftcard) field.

      - Example:

        * `gift_card:true`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by an aggregate of inventory across all locations where the product variant is stocked.

      - Example:

        * `inventory_quantity:10`

        Filter by the [location ID](https://shopify.dev/api/admin-graphql/latest/objects/Location#field-id) for the product variant.

      - Example:

        * `location_id:88511152449`

        Filter by whether there is fulfillment service tracking associated with the product variants.

      - Example:

        * `managed:true`

        Filter by the fulfillment service that tracks the number of items in stock for the product variant.

      - Example:

        * `managed_by:shopify`

        Filter by a custom property that a shop owner uses to define product variants.

      - Example:

        * `option1:small`

        Filter by a custom property that a shop owner uses to define product variants.

      - Example:

        * `option2:medium`

        Filter by a custom property that a shop owner uses to define product variants.

      - Example:

        * `option3:large`

        Filter by the product [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-id) field.

      - Example:

        * `product_id:8474977763649`

        Filter by a comma-separated list of product [IDs](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-id).

      - Example:

        * `product_ids:8474977763649,8474977796417`

        Filter by channel approval process status of the resource on a channel, such as the online store. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.app) (`Channel.app.id`) and one of the valid values. For simple visibility checks, use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) instead.

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

        Filter by a comma-separated list of product [statuses](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-status).

      - Example:

        * `product_status:ACTIVE,DRAFT`

        Filter by the product type that's associated with the product variants.

      - Example:

        * `product_type:snowboard`

        **Deprecated:** This parameter is deprecated as of 2025-12 and will be removed in a future API version. Use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) for visibility checks. Filter by the publishable status of the resource on a channel. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) and one of the valid status values.

      - Valid values:

        * `* {channel_app_id}-unset`
        * `* {channel_app_id}-pending`
        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-not_approved`

        Example:

        * `publishable_status:580111-unset`
        * `publishable_status:580111-pending`

        Filter resources by their visibility and publication state on a channel. Online store channel filtering: - `online_store_channel`: Returns all resources in the online store channel, regardless of publication status. - `published`/`visible`: Returns resources that are published to the online store. - `unpublished`: Returns resources that are not published to the online store. Channel-specific filtering using the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) with suffixes: - `{channel_app_id}-published`: Returns resources published to the specified channel. - `{channel_app_id}-visible`: Same as `{channel_app_id}-published` (kept for backwards compatibility). - `{channel_app_id}-intended`: Returns resources added to the channel but not yet published. - `{channel_app_id}-hidden`: Returns resources not added to the channel or not published. Other: - `unavailable`: Returns resources not published to any channel.

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

        Filter by whether the product variant can only be purchased with components. [Learn more](https://shopify.dev/apps/build/product-merchandising/bundles#store-eligibility).

      - Example:

        * `requires_components:true`

        Filter by the product variant [`sku`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

      - Example:

        * `sku:XYZ-12345`

        Filter objects by the `tag` field.

      - Example:

        * `tag:my_tag`

        Filter by objects that don’t have the specified tag.

      - Example:

        * `tag_not:my_tag`

        Filter by the product variant [`taxable`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-taxable) field.

      - Example:

        * `taxable:false`

        Filter by the product variant [`title`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-title) field.

      - Example:

        * `title:ice`

        Filter by date and time when the product variant was updated.

      - Example:

        * `updated_at:>2020-10-21T23:39:20Z`
        * `updated_at:<now`
        * `updated_at:<=2024`

        Filter by the origin or source of the product variant. Learn more about [vendors and managing vendor information](https://help.shopify.com/manual/products/managing-vendor-info).

        Example:

        * `vendor:Snowdevil`
        * `vendor:Snowdevil OR vendor:Icedevil`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

* product​Variants​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  Count of product variants. Limited to a maximum of 10000 by default.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    No supported search fields.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* product​Vendors

  [String​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection)

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

* public​Api​Versions

  [\[Api​Version!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ApiVersion)

  non-null

  The list of publicly-accessible Admin API versions, including supported versions, the release candidate, and unstable versions.

* publication

  [Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  Retrieves a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) by [`ID`](https://shopify.dev/docs/api/usage/gids).

  Returns `null` if the publication doesn't exist.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Publication to return.

  ***

* publications

  [Publication​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/PublicationConnection)

  non-null

  Returns a paginated list of [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

  Filter publications by [`CatalogType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType).

  * catalog​Type

    [Catalog​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType)

    ### Arguments

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

* publications​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  Count of publications. Limited to a maximum of 10000 by default.

  * catalog​Type

    [Catalog​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType)

    ### Arguments

    Filter publications by catalog type.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* published​Products​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  Returns a count of published products by publication ID. Limited to a maximum of 10000 by default.

  * publication​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the publication that the products are published to.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The maximum number of products to count.

  ***

* refund

  [Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund)

  Retrieves a [refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund) by its ID. A refund represents a financial record of money returned to a customer from an order. It provides a comprehensive view of all refunded amounts, transactions, and restocking instructions associated with returning products or correcting order issues.

  Use the `refund` query to retrieve information associated with the following workflows:

  * Displaying refund details in order management interfaces
  * Building customer service tools for reviewing refund history
  * Creating reports on refunded amounts and reasons
  * Auditing refund transactions and payment gateway records
  * Tracking inventory impacts from refunded items

  A refund is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and includes [refund line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem) that specify which items were refunded. Each refund processes through [order transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction) that handle the actual money transfer back to the customer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Refund to return.

  ***

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  Retrieves a return by its ID. A return represents the intent of a buyer to ship one or more items from an order back to a merchant or a third-party fulfillment location.

  Use the `return` query to retrieve information associated with the following workflows:

  * [Managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management)
  * [Processing exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges)
  * [Tracking reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders)

  A return is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem). Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses), which indicates the state of the return.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The [globally-unique ID](https://shopify.dev/docs/api/usage/gids) of the return to retrieve.

  ***

* returnable​Fulfillment

  [Returnable​Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillment)

  Returns a `ReturnableFulfillment` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `ReturnableFulfillment` to return.

  ***

* returnable​Fulfillments

  [Returnable​Fulfillment​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentConnection)

  non-null

  List of returnable fulfillments.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Order ID that will scope all returnable fulfillments.

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

* return​Calculate

  [Calculated​Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedReturn)

  Calculates the financial outcome of a [`Return`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) without creating it. Use this query to preview return costs before initiating the actual return process.

  The calculation provides detailed breakdowns of refund amounts, taxes, [`RestockingFee`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RestockingFee) charges, return shipping fees, and order-level discount adjustments based on the [`FulfillmentLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem) objects that customers select for return.

  Learn more about building for [return management](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

  * input

    [Calculate​Return​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateReturnInput)

    required

    ### Arguments

    The input fields for calculating a return.

  ***

* return​Reason​Definitions

  [Return​Reason​Definition​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnReasonDefinitionConnection)

  non-null

  Returns the full library of available return reason definitions.

  Use this query to retrieve the standardized return reasons available for creating returns. Filter by IDs or handles to get specific definitions.

  Only non-deleted reasons should be shown to customers when creating new returns. Deleted reasons have been replaced with better alternatives and are no longer recommended. However, they remain valid options and may still appear on existing returns.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    A list of return reason definition IDs to filter by.

  * handles

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A list of return reason definition handles to filter by.

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

    [Return​Reason​Definition​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnReasonDefinitionSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * deleted

        boolean

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by whether the return reason has been removed from taxonomy.

    * * id

        id

      * name

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by name.

  ***

* reverse​Delivery

  [Reverse​Delivery](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery)

  Lookup a reverse delivery by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the ReverseDelivery to return.

  ***

* reverse​Fulfillment​Order

  [Reverse​Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder)

  Lookup a reverse fulfillment order by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the reverse fulfillment order to return.

  ***

* script​Tag

  [Script​Tag](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTag)

  Theme app extensions

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  Script tag deprecation

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  Returns a `ScriptTag` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `ScriptTag` to return.

  ***

* script​Tags

  [Script​Tag​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ScriptTagConnection)

  non-null

  Theme app extensions

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  Script tag deprecation

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  A list of script tags.

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

    * created\_at

      time

    * * id

        id

      * src

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * updated\_at

      time

  * src

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    The source URL of the script tag to filter by.

  ***

* segment

  [Segment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment)

  Retrieves a customer [`Segment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment) by ID. Segments are dynamic groups of customers that meet specific criteria defined through [ShopifyQL queries](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference).

  Use segments for targeted marketing campaigns, analyzing customer behavior, or creating personalized experiences. Each segment includes its name, creation date, and the query that defines which [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) objects belong to it.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Find a segment by ID.

  ***

* segment​Filters

  [Segment​Filter​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentFilterConnection)

  non-null

  A list of filters.

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

  ***

* segment​Filter​Suggestions

  [Segment​Filter​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentFilterConnection)

  non-null

  A list of filter suggestions associated with a segment. A segment is a group of members (commonly customers) that meet specific criteria.

  * search

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Returns the elements of a list by keyword or term.

  * first

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  ***

* segment​Migrations

  [Segment​Migration​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentMigrationConnection)

  non-null

  A list of a shop's segment migrations.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    Search a segment migration by its saved search ID.

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

  ***

* segments

  [Segment​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentConnection)

  non-null

  Returns a paginated list of [`Segment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment) objects for the shop. Segments are dynamic groups of customers that meet specific criteria defined through [ShopifyQL queries](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference). You can filter segments by search query and sort them by creation date or other criteria.

  The query supports standard [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) arguments and returns a [`SegmentConnection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentConnection) containing segment details including names, creation dates, and the query definitions that determine segment membership.

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

    [Segment​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SegmentSortKeys)

    Default:CREATION\_DATE

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * name

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

* segments​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of segments for a shop. Limited to a maximum of 10000 by default.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    ### Arguments

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* segment​Value​Suggestions

  [Segment​Value​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentValueConnection)

  non-null

  The list of suggested values corresponding to a particular filter for a segment. A segment is a group of members, such as customers, that meet specific criteria.

  * search

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Returns the elements of a list by keyword or term.

  * filter​Query​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Returns the elements of a list by filter handle.

  * function​Parameter​Query​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Returns the elements of a list by filter parameter name.

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

  ***

* selling​Plan​Group

  [Selling​Plan​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)

  Returns a `SellingPlanGroup` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `SellingPlanGroup` to return.

  ***

* selling​Plan​Groups

  [Selling​Plan​Group​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanGroupConnection)

  non-null

  Retrieves a paginated list of [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects that belong to the app making the API call. Selling plan groups are selling methods like subscriptions, preorders, or other purchase options that merchants offer to customers.

  Each group has one or more [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan) objects that define specific billing and delivery schedules, pricing adjustments, and policies. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingPlanGroups#arguments-query) argument to search by name or filter results by other criteria.

  Learn more about [building selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans).

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

    [Selling​Plan​Group​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanGroupSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * app\_id

        id

      * category

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

      - Valid values:

        * `CURRENT` Default
        * `ALL`
        * `* (numeric app ID)`

        A comma-separated list of categories.

      - Valid values:
        * `SUBSCRIPTION`
        * `PRE_ORDER`
        * `TRY_BEFORE_YOU_BUY`
        * `OTHER`

    * delivery\_frequency

      string

    * * id

        id

      * name

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * percentage\_off

      float

  ***

* server​Pixel

  [Server​Pixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/ServerPixel)

  The server pixel configured by the app.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  Returns the Shop resource corresponding to the access token used in the request. The Shop resource contains business and store management settings for the shop.

* shop​Billing​Preferences

  [Shop​Billing​Preferences!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopBillingPreferences)

  non-null

  The shop's billing preferences, including the currency for paying for apps and services. Use this to create [app charges in the merchant's local billing currency](https://shopify.dev/docs/apps/launch/billing#supported-currencies), helping them budget their app spend without exposure to exchange rate fluctuations.

* shopify​Function

  [Shopify​Function](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyFunction)

  Returns a Shopify Function by its ID. [Functions](https://shopify.dev/apps/build/functions) enable you to customize Shopify's backend logic at defined parts of the commerce loop.

  * id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The ID of the Shopify Function.

  ***

* shopify​Functions

  [Shopify​Function​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyFunctionConnection)

  non-null

  Returns Shopify Functions owned by the querying API client installed on the shop. [Functions](https://shopify.dev/docs/apps/build/functions) enable you to customize Shopify's backend logic at specific points in the commerce loop, such as discounts, checkout validation, and fulfillment.

  You can filter the results by API type to find specific function implementations, or by whether they provide a merchant configuration interface in the Shopify Admin.

  The response includes details about each function's configuration, including its title, description, API version, and the input query used to provide data to the function logic.

  Learn more about [building functions](https://shopify.dev/docs/api/functions).

  * api​Type

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    Filter the functions by the API type.

  * use​Creation​Ui

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Filter the functions by whether or not the function uses the creation UI in the Admin.

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

* shopify​Payments​Account

  [Shopify​Payments​Account](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount)

  Returns the Shopify Payments account information for the shop. Includes current balances across all currencies, payout schedules, and bank account configurations.

  The account includes [`ShopifyPaymentsBalanceTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction) records showing charges, refunds, and adjustments that affect your balance. Also includes [`ShopifyPaymentsDispute`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute) records and [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) history between the account and connected [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount) configurations.

* shopifyql​Query

  [Shopifyql​Query​Response](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlQueryResponse)

  Executes a [ShopifyQL query](https://shopify.dev/docs/apps/build/shopifyql) to analyze store data and returns results in a tabular format.

  The response includes column metadata with names, data types, and display names, along with the actual data rows. If the query contains syntax errors, then the response provides parse error messages instead of table data.

  Read the [ShopifyQL reference documentation](https://shopify.dev/docs/api/shopifyql) for more information on how to write ShopifyQL queries.

  * query

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    A ShopifyQL query string following the [ShopifyQL syntax](https://shopify.dev/docs/api/shopifyql). Queries must include `FROM` to specify the data source (such as `sales`, `orders`, or `customers`) and `SHOW` to select metrics and dimensions. Example: `FROM sales SHOW total_sales TIMESERIES month SINCE -12m`.

  ***

* shop​Locales

  [\[Shop​Locale!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale)

  non-null

  Returns the locales enabled on a shop. Each locale represents a language for translations and determines how content displays to customers in different markets.

  Use the optional `published` argument to filter for only the locales that are visible to customers. The response includes the ISO locale code, whether it's the shop's primary locale, and which [`MarketWebPresence`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence) objects use each locale.

  * published

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Return only published locales.

  ***

* shop​Pay​Payment​Request​Receipt

  [Shop​Pay​Payment​Request​Receipt](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceipt)

  Returns a Shop Pay payment request receipt.

  * token

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Unique identifier of the payment request receipt.

  ***

* shop​Pay​Payment​Request​Receipts

  [Shop​Pay​Payment​Request​Receipt​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopPayPaymentRequestReceiptConnection)

  Returns a list of Shop Pay payment request receipts.

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

    [Shop​Pay​Payment​Request​Receipts​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopPayPaymentRequestReceiptsSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * created\_at

        time

      * id

        id

      * source\_identifier

        string

      * state

        string

      - Filter by the creation date of the payment request receipt.

      - Example:

        * `created_at:2021-01-01`
        * `created_at:2021-01-01..2021-01-02`
        * `created_at:<now`
        * `created_at:<2024-01-01`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the source identifier of the payment request receipt.

      - Example:

        * `source_identifier:1282823`

        Filter by the state of the payment request receipt. Options include: - COMPLETED - FAILED - PENDING - PROCESSING

        Example:

        * `state:COMPLETED`

  ***

* staff​Member

  [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  Retrieves a [staff member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) by ID. If no ID is provided, the query returns the staff member that's making the request. A staff member is a user who can access the Shopify admin to manage store operations.

  Provides staff member details such as email, name, and shop owner status. When querying the current user (with or without an ID), additional [private data](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffMember#returns-StaffMember.fields.privateData) becomes available.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the staff member to return. If no ID is provided, then the staff member making the query (if any) is returned.

  ***

* staff​Members

  [Staff​Member​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/StaffMemberConnection)

  Returns a paginated list of [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) objects for the shop. Staff members are users who can access the Shopify admin to manage store operations.

  Supports filtering by account type, email, and name, with an option to sort results. The query returns a [`StaffMemberConnection`](https://shopify.dev/docs/api/admin-graphql/latest/connections/StaffMemberConnection) for [cursor-based pagination](https://shopify.dev/docs/api/usage/pagination-graphql).

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

    [Staff​Members​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/StaffMembersSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * account\_type

        string

      * email

        string

      - Filter by account type.

      - Valid values:

        * `collaborator`
        * `collaborator_team_member`
        * `invited`
        * `regular`
        * `requested`
        * `restricted`
        * `saml`

        Filter by email.

    * first\_name

      string

      Filter by first name.

    * * id

        id

      * last\_name

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by last name.

  ***

* standard​Metafield​Definition​Templates

  [Standard​Metafield​Definition​Template​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/StandardMetafieldDefinitionTemplateConnection)

  non-null

  Retrieves preset metafield definition templates for common use cases. Each template provides a reserved namespace and key combination for specific purposes like product subtitles, care guides, or ISBN numbers. Use these templates to create standardized metafields across your store. Filter templates by constraint status or exclude those you've already activated.

  See the [list of standard metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-standard-definitions) for available templates.

  * constraint​Subtype

    [Metafield​Definition​Constraint​Subtype​Identifier](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintSubtypeIdentifier)

    ### Arguments

    Filter standard metafield definitions based on whether they apply to a given resource subtype.

  * constraint​Status

    [Metafield​Definition​Constraint​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionConstraintStatus)

    Filter standard metafield definitions based on whether they are constrained.

  * exclude​Activated

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Filter standard metafield definitions that have already been activated.

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

* store​Credit​Account

  [Store​Credit​Account](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount)

  Retrieves a [`StoreCreditAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount) by ID. Store credit accounts hold monetary balances that account owners can use at checkout. The owner is either a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) or a [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the store credit account to return.

  ***

* subscription​Billing​Attempt

  [Subscription​Billing​Attempt](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt)

  Returns a `SubscriptionBillingAttempt` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `SubscriptionBillingAttempt` to return.

  ***

* subscription​Billing​Attempts

  [Subscription​Billing​Attempt​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingAttemptConnection)

  non-null

  Returns subscription billing attempts on a store.

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

    [Subscription​Billing​Attempts​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptsSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * error\_code

      string

    * error\_message

      string

    * id

      id

      Filter by `id` range.

      Example:

      * `id:1234`
      * `id:>=1234`
      * `id:<=1234`

  ***

* subscription​Billing​Cycle

  [Subscription​Billing​Cycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  Returns a subscription billing cycle found either by cycle index or date.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object used to select and use billing cycles.

  ***

* subscription​Billing​Cycle​Bulk​Results

  [Subscription​Billing​Cycle​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection)

  non-null

  Retrieves the results of the asynchronous job for the subscription billing cycle bulk action based on the specified job ID. This query can be used to obtain the billing cycles that match the criteria defined in the subscriptionBillingCycleBulkSearch and subscriptionBillingCycleBulkCharge mutations.

  * job​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the billing cycle bulk operation job.

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

* subscription​Billing​Cycles

  [Subscription​Billing​Cycle​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection)

  non-null

  Returns subscription billing cycles for a contract ID.

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract to retrieve billing cycles for.

  * billing​Cycles​Date​Range​Selector

    [Subscription​Billing​Cycles​Date​Range​Selector](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCyclesDateRangeSelector)

    Select subscription billing cycles within a date range.

  * billing​Cycles​Index​Range​Selector

    [Subscription​Billing​Cycles​Index​Range​Selector](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCyclesIndexRangeSelector)

    Select subscription billing cycles within an index range.

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

    [Subscription​Billing​Cycles​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCyclesSortKeys)

    Default:CYCLE\_INDEX

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* subscription​Contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  Retrieves a [`SubscriptionContract`](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract) by ID.

  The contract tracks the subscription's lifecycle through various [statuses](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionContract#returns-SubscriptionContract.fields.status), and links to related billing attempts, generated [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects, and the customer's [`CustomerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract to return.

  ***

* subscription​Contracts

  [Subscription​Contract​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionContractConnection)

  non-null

  Returns a [`SubscriptionContractConnection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractConnection) containing [subscription contracts](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract). Subscription contracts are agreements between [customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) and merchants for recurring purchases with defined billing and delivery schedules.

  Filter results with the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionContracts#arguments-query) argument. You can paginate results using standard [cursor-based pagination](https://shopify.dev/docs/api/usage/pagination-graphql).

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

    [Subscription​Contracts​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractsSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * * id

        id

      * last\_billing\_attempt\_error\_type

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * status

      string

    * updated\_at

      time

  ***

* subscription​Draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  Returns a Subscription Draft resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Draft to return.

  ***

* taxonomy

  [Taxonomy](https://shopify.dev/docs/api/admin-graphql/latest/objects/Taxonomy)

  Access to Shopify's [standardized product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17) for categorizing products. The [`Taxonomy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Taxonomy) organizes products into a hierarchical tree structure with categories, attributes, and values.

  Query categories using search terms, or navigate the hierarchy by requesting children, siblings, or descendants of specific categories. Each [`TaxonomyCategory`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory) includes its position in the tree, parent-child relationships, and associated attributes for that product category.

* tender​Transactions

  [Tender​Transaction​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/TenderTransactionConnection)

  non-null

  Transactions representing a movement of money between customers and the shop. Each transaction records the amount, payment method, processing details, and the associated [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

  Positive amounts indicate customer payments to the merchant. Negative amounts represent refunds from the merchant to the customer. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/tenderTransactions#arguments-query) parameter to filter transactions by attributes such as transaction ID, processing date, and point-of-sale device ID.

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

      * point\_of\_sale\_device\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * processed\_at

      time

    * test

      boolean

  ***

* theme

  [Online​Store​Theme](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

  Returns an [`OnlineStoreTheme`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme) by its ID. Use this query to retrieve theme metadata and access the theme's [`files`](https://shopify.dev/docs/api/admin-graphql/latest/queries/theme#returns-OnlineStoreTheme.fields.files), which include templates, assets, [translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-published_translations), and configuration files.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the theme.

  ***

* themes

  [Online​Store​Theme​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeConnection)

  Returns a paginated list of [`OnlineStoreTheme`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme) objects for the online store. Themes control the appearance and layout of the storefront.

  You can filter themes by [`role`](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#arguments-roles) to find specific theme types, such as `MAIN` for the published theme and `UNPUBLISHED` for draft themes.

  * roles

    [\[Theme​Role!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeRole)

    ### Arguments

    The theme roles to filter by.

  * names

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The theme names to filter by. Use '\*' to match zero or more characters.

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

* translatable​Resource

  [Translatable​Resource](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource)

  Retrieves a resource that has translatable fields. Returns the resource's [`Translation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation) objects for different locales and markets, along with the original [`TranslatableContent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent) and digest values needed to register new translations. Provides access to existing translations, translatable content with digest hashes for translation registration, and nested translatable resources like [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects or [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

  Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Find a translatable resource by ID.

  ***

* translatable​Resources

  [Translatable​Resource​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/TranslatableResourceConnection)

  non-null

  Returns a paginated list of [`TranslatableResource`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource) objects for a specific resource type. Each resource provides translatable content and digest values needed for the [`translationsRegister`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister) mutation.

  Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

  Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

  * resource​Type

    [Translatable​Resource​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TranslatableResourceType)

    required

    ### Arguments

    Return only resources of a type.

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

* translatable​Resources​By​Ids

  [Translatable​Resource​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/TranslatableResourceConnection)

  non-null

  Returns a paginated list of [`TranslatableResource`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource) objects for the specified resource IDs. Each resource provides translatable content and digest values needed for the [`translationsRegister`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister) mutation.

  Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

  * resource​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Return only resources for given IDs.

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

* url​Redirect

  [Url​Redirect](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirect)

  Returns a `UrlRedirect` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `UrlRedirect` to return.

  ***

* url​Redirect​Import

  [Url​Redirect​Import](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImport)

  Returns a `UrlRedirectImport` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `UrlRedirectImport` to return.

  ***

* url​Redirects

  [Url​Redirect​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/UrlRedirectConnection)

  non-null

  A list of redirects for a shop.

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

    [Url​Redirect​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectSortKeys)

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

    * * id

        id

      * path

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * target

      string

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

* url​Redirect​Saved​Searches

  [Saved​Search​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SavedSearchConnection)

  non-null

  A list of the shop's URL redirect saved searches.

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

* url​Redirects​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  Count of redirects. Limited to a maximum of 10000 by default.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * * id

        id

      * path

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * target

      string

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* validation

  [Validation](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation)

  Validation available on the shop.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the validation.

  ***

* validations

  [Validation​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ValidationConnection)

  non-null

  Validations available on the shop.

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

    [Validation​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ValidationSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* webhook​Subscription

  [Webhook​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

  Returns a webhook subscription by ID.

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `WebhookSubscription` to return.

  ***

* webhook​Subscriptions

  [Webhook​Subscription​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/WebhookSubscriptionConnection)

  non-null

  Retrieves a paginated list of webhook subscriptions created using the API for the current app and shop.

  ***

  Note

  Returns only shop-scoped subscriptions, not app-scoped subscriptions configured in TOML files.

  ***

  Subscription details include event topics, endpoint URIs, filtering rules, field inclusion settings, and metafield namespace permissions. Results support cursor-based pagination that you can filter by topic, format, or custom search criteria.

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

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

    [Webhook​Subscription​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * * id

        id

      * updated\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  * callback​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    Deprecated

  * uri

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    URI to filter by. Supports an HTTPS URL, a Google Pub/Sub URI (pubsub://{project-id}:{topic-id}) or an Amazon EventBridge event source ARN.

  * format

    [Webhook​Subscription​Format](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionFormat)

    Response format to filter by.

  * topics

    [\[Webhook​Subscription​Topic!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

    List of webhook subscription topics to filter by.

  ***

* webhook​Subscriptions​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The count of webhook subscriptions.

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe). Limited to a maximum of 10000 by default.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * endpoint

      string

    * * id

        id

      * topic

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * updated\_at

      time

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* web​Pixel

  [Web​Pixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebPixel)

  Returns a [web pixel](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) by ID.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the `WebPixel` object to return.

  ***

* web​Presences

  [Market​Web​Presence​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketWebPresenceConnection)

  The web presences for the shop.

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

### Deprecated fields

* automatic​Discount

  [Discount​Automatic](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountAutomatic)

  Deprecated

* automatic​Discount​Nodes

  [Discount​Automatic​Node​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAutomaticNodeConnection)

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

  * sort​Key

    [Automatic​Discount​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AutomaticDiscountSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * status

        string

      * type

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the discount status.

      - Valid values:

        * `active`
        * `expired`
        * `scheduled`

        Example:

        * `status:scheduled`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

        Valid values:

        * `all`
        * `all_with_app`
        * `app`
        * `bxgy`
        * `fixed_amount`
        * `percentage`

        Example:

        * `type:bxgy`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

* automatic​Discounts

  [Discount​Automatic​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAutomaticConnection)

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

  * sort​Key

    [Automatic​Discount​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AutomaticDiscountSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * status

        string

      * type

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the discount status.

      - Valid values:

        * `active`
        * `expired`
        * `scheduled`

        Example:

        * `status:scheduled`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

        Valid values:

        * `all`
        * `all_with_app`
        * `app`
        * `bxgy`
        * `fixed_amount`
        * `percentage`

        Example:

        * `type:bxgy`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

* code​Discount​Nodes

  [Discount​Code​Node​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountCodeNodeConnection)

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

  * sort​Key

    [Code​Discount​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CodeDiscountSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * combines\_with

        string

      * created\_at

        time

      * discount\_type

        string

      * ends\_at

        time

      * id

        id

      * starts\_at

        time

      * status

        string

      * times\_used

        integer

      * title

        string

      * type

        string

      * updated\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `order_discounts`
        * `product_discounts`
        * `shipping_discounts`

        Example:

        * `combines_with:product_discounts`

        Filter by the date and time when the discount was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<='2024'`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `bogo`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `discount_type:fixed_amount`

        Filter by the date and time when the discount expires and is no longer available for customer use.

      - Example:

        * `ends_at:>'2020-10-21T23:39:20Z'`
        * `ends_at:<now`
        * `ends_at:<='2024'`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the date and time, in the shop's timezone, when the discount becomes active and is available for customer use.

      - Example:

        * `starts_at:>'2020-10-21T23:39:20Z'`
        * `starts_at:<now`
        * `starts_at:<='2024'`

        Filter by the status of the discount.

      - Valid values:

        * `active`
        * `expired`
        * `scheduled`

        Example:

        * `status:scheduled`

        Filter by the number of times the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times.\
        \
        This value is updated asynchronously. As a result, it might be different than the actual usage count.

      - Example:

        * `times_used:0`
        * `times_used:>150`
        * `times_used:>=200`

        Filter by the discount name that displays to customers.

      - Example:

        * `title:Black Friday Sale`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `all`
        * `all_with_app`
        * `app`
        * `bxgy`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `type:percentage`

        Filter by the date and time when the discount was last updated.

        Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<='2024'`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

* collection​By​Handle

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  Deprecated

  * handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The handle of the collection.

  ***

* current​Bulk​Operation

  [Bulk​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation)

  Deprecated

  * type

    [Bulk​Operation​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationType)

    Default:QUERY

    ### Arguments

    The current bulk operation's type.

  ***

* deletion​Events

  [Deletion​Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeletionEventConnection)

  non-nullDeprecated

  * subject​Types

    [\[Deletion​Event​Subject​Type!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeletionEventSubjectType)

    ### Arguments

    List of subject types to filter by.

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

    [Deletion​Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeletionEventSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * occurred\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

* locations​Available​For​Delivery​Profiles

  [\[Location!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  Deprecated

* market​By​Geography

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  Deprecated

  * country​Code

    [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

    required

    ### Arguments

    The code for the country where the customer is.

  ***

* primary​Market

  [Market!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  non-nullDeprecated

* product​By​Handle

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  Deprecated

  * handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    A unique string that identifies the product. Handles are automatically generated based on the product's title, and are always lowercase. Whitespace and special characters are replaced with a hyphen: `-`. If there are multiple consecutive whitespace or special characters, then they're replaced with a single hyphen. Whitespace or special characters at the beginning are removed. If a duplicate product title is used, then the handle is auto-incremented by one. For example, if you had two products called `Potion`, then their handles would be `potion` and `potion-1`. After a product has been created, changing the product title doesn't update the handle.

  ***

***

## Map

### Fields with this object

* {}[Job.query](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job#field-Job.fields.query)
