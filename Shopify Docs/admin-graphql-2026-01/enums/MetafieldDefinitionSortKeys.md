---
title: MetafieldDefinitionSortKeys - GraphQL Admin
description: The set of valid sort keys for the MetafieldDefinition query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionSortKeys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionSortKeys.md
---

# Metafield​Definition​Sort​Keys

enum

The set of valid sort keys for the MetafieldDefinition query.

## Valid values

* ID

  Sort by the `id` value.

* NAME

  Sort by the `name` value.

* PINNED\_​POSITION

  Sort by the `pinned_position` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

***

## Fields

* [Article.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  An article that contains content, author information, and metadata. Articles belong to a [`Blog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog) and can include HTML-formatted body text, summary text, and an associated image. Merchants publish articles to share content, drive traffic, and engage customers.

  Articles can be organized with tags and published immediately or scheduled for future publication using the [`publishedAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.publishedAt) timestamp. The API manages comments on articles when the blog's comment policy enables them.

* [Blog.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  A blog for publishing articles in the online store. Stores can have multiple blogs to organize content by topic or purpose.

  Each blog contains articles with their associated comments, tags, and metadata. The comment policy controls whether readers can post comments and whether moderation is required. Blogs use customizable URL handles and can apply alternate templates for specialized layouts.

* [Collection.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.metafieldDefinitions.arguments.sortKey)

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

* [Company.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

* [Company​Location.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

* [Customer.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  Caution

  Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

  ***

* [Delivery​Customization.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization#field-DeliveryCustomization.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  A delivery customization.

* [Discount​Automatic​Node.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-DiscountAutomaticNode.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  The `DiscountAutomaticNode` object enables you to manage [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts) that are applied when an order meets specific criteria. You can create amount off, free shipping, or buy X get Y automatic discounts. For example, you can offer customers a free shipping discount that applies when conditions are met. Or you can offer customers a buy X get Y discount that's automatically applied when customers spend a specified amount of money, or a specified quantity of products.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

* [Discount​Code​Node.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-DiscountCodeNode.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  The `DiscountCodeNode` object enables you to manage [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) that are applied when customers enter a code at checkout. For example, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store. Or, you can offer discounts where customers have to enter a code to get free shipping. Merchants can create and share discount codes individually with customers.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

* [Discount​Node.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-DiscountNode.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  The `DiscountNode` object enables you to manage [discounts](https://help.shopify.com/manual/discounts), which are applied at checkout or on a cart.

  Discounts are a way for merchants to promote sales and special offers, or as customer loyalty rewards. Discounts can apply to [orders, products, or shipping](https://shopify.dev/docs/apps/build/discounts#discount-classes), and can be either automatic or code-based. For example, you can offer customers a buy X get Y discount that's automatically applied when purchases meet specific criteria. Or, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related mutations, limitations, and considerations.

* [Has​Metafield​Definitions.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/HasMetafieldDefinitions#field-HasMetafieldDefinitions.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  Resources that metafield definitions can be applied to.

* [Inventory​Transfer.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  Tracks the movement of [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) objects between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects. A transfer includes origin and destination information, [`InventoryTransferLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem) objects with quantities, and shipment details.

  Transfers progress through multiple [`statuses`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus). The transfer maintains [`LocationSnapshot`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot) objects of location details to preserve historical data even if locations change or are deleted later.

* [Location.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  A physical location where merchants store and fulfill inventory. Locations include retail stores, warehouses, popups, dropshippers, or other places where inventory is managed or stocked.

  Active locations can fulfill online orders when configured with shipping rates, local pickup, or local delivery options. Locations track inventory quantities for [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and process [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) fulfillment. Third-party apps using [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) can create and manage their own locations.

* [Market.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  A market is a group of one or more regions that you want to target for international sales. By creating a market, you can configure a distinct, localized shopping experience for customers from a specific area of the world. For example, you can [change currency](https://shopify.dev/api/admin-graphql/current/mutations/marketCurrencySettingsUpdate), [configure international pricing](https://shopify.dev/apps/internationalization/product-price-lists), or [add market-specific domains or subfolders](https://shopify.dev/api/admin-graphql/current/objects/MarketWebPresence).

* [Order.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.metafieldDefinitions.arguments.sortKey)

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

* [Page.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  A standalone content page in the online store. Pages display HTML-formatted content for informational pages like "About Us", contact information, or shipping policies.

  Each page has a unique handle for URL routing and supports custom template suffixes for specialized layouts. Pages can be published or hidden, and include creation and update timestamps.

* [Payment​Customization.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization#field-PaymentCustomization.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  A payment customization.

* [Product.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Product​Variant.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.metafieldDefinitions.arguments.sortKey)

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

* [Selling​Plan.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  How a product can be sold and purchased through recurring billing or deferred purchase options. Defines the specific terms for subscriptions, pre-orders, or try-before-you-buy offers, including when to bill customers, when to fulfill orders, and what pricing adjustments to apply.

  Each selling plan has billing, delivery, and pricing policies that control the purchase experience. The plan's [`options`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.options) and [`category`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.category) help merchants organize and report on different selling strategies. Plans are grouped within a [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) that associates them with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

  ***

  Caution

  Selling plans and associated records are automatically deleted 48 hours after a merchant uninstalls the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that created them. Back up these records if you need to restore them later.

  ***

  Learn more about [selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan).

* [Shop.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Validation.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation#field-Validation.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  A server-side validation that enforces business rules before customers complete their purchases. Each validation links to a [`ShopifyFunction`](https://shopify.dev/docs/api/functions/latest/cart-and-checkout-validation) that implements the validation logic.

  Validations run on Shopify's servers and are enforced throughout the checkout process. Validation errors always block checkout progress. The `blockOnFailure` setting determines whether runtime exceptions, like timeouts, also block checkout. Tracks runtime exception history for the validation function and supports custom data through [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

* [Query​Root.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.metafieldDefinitions.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [metafield​Definitions.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinitions#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Article.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Blog.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Collection.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Company.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Company​Location.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Customer.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Delivery​Customization.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization#field-DeliveryCustomization.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Discount​Automatic​Node.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-DiscountAutomaticNode.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Discount​Code​Node.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-DiscountCodeNode.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Discount​Node.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-DiscountNode.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Has​Metafield​Definitions.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/HasMetafieldDefinitions#field-HasMetafieldDefinitions.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Inventory​Transfer.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Location.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Market.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Order.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Page.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Payment​Customization.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization#field-PaymentCustomization.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Product.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Product​Variant.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Selling​Plan.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Shop.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Validation.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation#field-Validation.fields.metafieldDefinitions.arguments.sortKey)
* <-|[Query​Root.metafieldDefinitions(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.metafieldDefinitions.arguments.sortKey)
* <-|[metafield​Definitions.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinitions#arguments-sortKey)
