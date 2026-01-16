---
title: EventSortKeys - GraphQL Admin
description: The set of valid sort keys for the Event query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSortKeys'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSortKeys.md'
---

# Event​Sort​Keys

enum

The set of valid sort keys for the Event query.

## Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

***

## Fields

* [Article.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.events.arguments.sortKey)

  ARGUMENT

  An article that contains content, author information, and metadata. Articles belong to a [`Blog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog) and can include HTML-formatted body text, summary text, and an associated image. Merchants publish articles to share content, drive traffic, and engage customers.

  Articles can be organized with tags and published immediately or scheduled for future publication using the [`publishedAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.publishedAt) timestamp. The API manages comments on articles when the blog's comment policy enables them.

* [Blog.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.events.arguments.sortKey)

  ARGUMENT

  A blog for publishing articles in the online store. Stores can have multiple blogs to organize content by topic or purpose.

  Each blog contains articles with their associated comments, tags, and metadata. The comment policy controls whether readers can post comments and whether moderation is required. Blogs use customizable URL handles and can apply alternate templates for specialized layouts.

* [Collection.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.events.arguments.sortKey)

  ARGUMENT

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

* [Comment.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment#field-Comment.fields.events.arguments.sortKey)

  ARGUMENT

  A comment on an article.

* [Company.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.events.arguments.sortKey)

  ARGUMENT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

* [Company​Location.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.events.arguments.sortKey)

  ARGUMENT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

* [Customer.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.events.arguments.sortKey)

  ARGUMENT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  Caution

  Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

  ***

* [Discount​Automatic​Bxgy.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy#field-DiscountAutomaticBxgy.fields.events.arguments.sortKey)

  ARGUMENT

  The `DiscountAutomaticBxgy` object lets you manage [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that are automatically applied on a cart and at checkout. BXGY discounts incentivize customers by offering them additional items at a discounted price or for free when they purchase a specified quantity of items.

  The `DiscountAutomaticBxgy` object stores information about automatic BXGY discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountCodeBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy) object has similar functionality to the `DiscountAutomaticBxgy` object, but customers need to enter a code to receive a discount.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

* [Discount​Automatic​Node.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-DiscountAutomaticNode.fields.events.arguments.sortKey)

  ARGUMENT

  The `DiscountAutomaticNode` object enables you to manage [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts) that are applied when an order meets specific criteria. You can create amount off, free shipping, or buy X get Y automatic discounts. For example, you can offer customers a free shipping discount that applies when conditions are met. Or you can offer customers a buy X get Y discount that's automatically applied when customers spend a specified amount of money, or a specified quantity of products.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

* [Discount​Code​Node.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-DiscountCodeNode.fields.events.arguments.sortKey)

  ARGUMENT

  The `DiscountCodeNode` object enables you to manage [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) that are applied when customers enter a code at checkout. For example, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store. Or, you can offer discounts where customers have to enter a code to get free shipping. Merchants can create and share discount codes individually with customers.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

* [Discount​Node.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-DiscountNode.fields.events.arguments.sortKey)

  ARGUMENT

  The `DiscountNode` object enables you to manage [discounts](https://help.shopify.com/manual/discounts), which are applied at checkout or on a cart.

  Discounts are a way for merchants to promote sales and special offers, or as customer loyalty rewards. Discounts can apply to [orders, products, or shipping](https://shopify.dev/docs/apps/build/discounts#discount-classes), and can be either automatic or code-based. For example, you can offer customers a buy X get Y discount that's automatically applied when purchases meet specific criteria. Or, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related mutations, limitations, and considerations.

* [Draft​Order.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.events.arguments.sortKey)

  ARGUMENT

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

* [Has​Events.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/HasEvents#field-HasEvents.fields.events.arguments.sortKey)

  ARGUMENT

  Represents an object that has a list of events.

* [Inventory​Transfer.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.events.arguments.sortKey)

  ARGUMENT

  Tracks the movement of [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) objects between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects. A transfer includes origin and destination information, [`InventoryTransferLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem) objects with quantities, and shipment details.

  Transfers progress through multiple [`statuses`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus). The transfer maintains [`LocationSnapshot`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot) objects of location details to preserve historical data even if locations change or are deleted later.

* [Order.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.events.arguments.sortKey)

  ARGUMENT

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

* [Page.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.events.arguments.sortKey)

  ARGUMENT

  A standalone content page in the online store. Pages display HTML-formatted content for informational pages like "About Us", contact information, or shipping policies.

  Each page has a unique handle for URL routing and supports custom template suffixes for specialized layouts. Pages can be published or hidden, and include creation and update timestamps.

* [Price​Rule.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.events.arguments.sortKey)

  ARGUMENT

  A set of conditions, including entitlements and prerequisites, that must be met for a discount code to apply.

  ***

  Note

  Use the types and queries included our [discount tutorials](https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started) instead. These will replace the GraphQL Admin API's [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule) object and [`DiscountCode`](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode) union, and the REST Admin API's deprecated[`PriceRule`](https://shopify.dev/docs/api/admin-rest/unstable/resources/pricerule) resource.

  ***

* [Product.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.events.arguments.sortKey)

  ARGUMENT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Product​Variant.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.events.arguments.sortKey)

  ARGUMENT

  The `ProductVariant` object represents a version of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

  Use the `ProductVariant` object to manage the full lifecycle and configuration of a product's variants. Common use cases for using the `ProductVariant` object include:

  * Tracking inventory for each variant
  * Setting unique prices for each variant
  * Assigning barcodes and SKUs to connect variants to fulfillment services
  * Attaching variant-specific images and media
  * Setting delivery and tax requirements
  * Supporting product bundles, subscriptions, and selling plans

  A `ProductVariant` is associated with a parent [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) object. `ProductVariant` serves as the central link between a product's merchandising configuration, inventory, pricing, fulfillment, and sales channels within the GraphQL Admin API schema. Each variant can reference other GraphQL types such as:

  * [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem): Used for inventory tracking
  * [`Image`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image): Used for variant-specific images
  * [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup): Used for subscriptions and selling plans

  Learn more about [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

* [Query​Root.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.events.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [events.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Article.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.events.arguments.sortKey)
* <-|[Blog.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.events.arguments.sortKey)
* <-|[Collection.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.events.arguments.sortKey)
* <-|[Comment.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment#field-Comment.fields.events.arguments.sortKey)
* <-|[Company.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.events.arguments.sortKey)
* <-|[Company​Location.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.events.arguments.sortKey)
* <-|[Customer.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.events.arguments.sortKey)
* <-|[Discount​Automatic​Bxgy.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy#field-DiscountAutomaticBxgy.fields.events.arguments.sortKey)
* <-|[Discount​Automatic​Node.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-DiscountAutomaticNode.fields.events.arguments.sortKey)
* <-|[Discount​Code​Node.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-DiscountCodeNode.fields.events.arguments.sortKey)
* <-|[Discount​Node.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-DiscountNode.fields.events.arguments.sortKey)
* <-|[Draft​Order.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.events.arguments.sortKey)
* <-|[Has​Events.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/HasEvents#field-HasEvents.fields.events.arguments.sortKey)
* <-|[Inventory​Transfer.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.events.arguments.sortKey)
* <-|[Order.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.events.arguments.sortKey)
* <-|[Page.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.events.arguments.sortKey)
* <-|[Price​Rule.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.events.arguments.sortKey)
* <-|[Product.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.events.arguments.sortKey)
* <-|[Product​Variant.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.events.arguments.sortKey)
* <-|[Query​Root.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.events.arguments.sortKey)
* <-|[events.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#arguments-sortKey)
