---
title: OrderConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Orders.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection.md
---

# Order​Connection

connection

An auto-generated type for paginating through multiple Orders.

## Fields with this connection

* [Company.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.orders)

  OBJECT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

* [Company​Contact.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.orders)

  OBJECT

  A person who acts on behalf of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) to make B2B purchases. Company contacts are associated with [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) accounts and can place orders on behalf of their company.

  Each contact can be assigned to one or more [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects with specific roles that determine their permissions and access to catalogs, pricing, and payment terms configured for those locations.

* [Company​Location.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.orders)

  OBJECT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

* [Customer.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.orders)

  OBJECT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  Caution

  Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

  ***

* [Customer​Merge​Preview​Default​Fields.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.orders)

  OBJECT

  The fields that will be kept as part of a customer merge preview.

* [Subscription​Billing​Cycle​Edited​Contract.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.orders)

  OBJECT

  Represents a subscription contract with billing cycles.

* [Subscription​Contract.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.orders)

  OBJECT

  A subscription contract that defines recurring purchases for a customer. Each contract specifies what products to deliver, when to bill and ship them, and at what price.

  The contract includes [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy) that control the frequency of charges and fulfillments. [`SubscriptionLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine) items define the products, quantities, and pricing for each recurring [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The contract tracks [`SubscriptionBillingAttempt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt) records, payment status, and generated orders throughout its lifecycle. [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) instances manage contracts through various status transitions including active, paused, failed, cancelled, or expired states.

  Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract) and [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract).

* [Subscription​Contract​Base.orders](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-orders)

  INTERFACE

  Represents subscription contract common fields.

* [Shop.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.orders)

  OBJECT

  Deprecated

***

## Queries with this connection

* [orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders)

  query

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

***

## Possible returns

* edges

  [\[Order​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Order!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  non-null

  A list of nodes that are contained in OrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Company.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.orders)
* {}[Company​Contact.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.orders)
* {}[Company​Location.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.orders)
* {}[Customer.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.orders)
* {}[Customer​Merge​Preview​Default​Fields.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.orders)
* {}[Subscription​Billing​Cycle​Edited​Contract.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.orders)
* {}[Subscription​Contract.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.orders)
* ||-[Subscription​Contract​Base.orders](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-orders)

### Queries with this connection

* \<?>[orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders)

### Possible returns

* <->[Order​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection#returns-edges)
* <->[Order​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection#returns-nodes)
* <->[Order​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection#returns-pageInfo)
