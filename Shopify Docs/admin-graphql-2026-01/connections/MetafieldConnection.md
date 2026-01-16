---
title: MetafieldConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Metafields.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection.md
---

# Metafield​Connection

connection

An auto-generated type for paginating through multiple Metafields.

## Fields with this connection

* [App​Installation.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.metafields)

  OBJECT

  An app installed on a shop. Each installation tracks the permissions granted to the app through [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, along with billing subscriptions and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

  The installation provides metafields that only the owning [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) can access. These metafields store app-specific configuration that merchants and other apps can't modify. The installation also provides URLs for launching and uninstalling the app, along with any active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects or [`AppPurchaseOneTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime) purchases.

* [Article.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.metafields)

  OBJECT

  An article that contains content, author information, and metadata. Articles belong to a [`Blog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog) and can include HTML-formatted body text, summary text, and an associated image. Merchants publish articles to share content, drive traffic, and engage customers.

  Articles can be organized with tags and published immediately or scheduled for future publication using the [`publishedAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.publishedAt) timestamp. The API manages comments on articles when the blog's comment policy enables them.

* [Blog.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.metafields)

  OBJECT

  A blog for publishing articles in the online store. Stores can have multiple blogs to organize content by topic or purpose.

  Each blog contains articles with their associated comments, tags, and metadata. The comment policy controls whether readers can post comments and whether moderation is required. Blogs use customizable URL handles and can apply alternate templates for specialized layouts.

* [Cart​Transform.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform#field-CartTransform.fields.metafields)

  OBJECT

  A deployed cart transformation function that actively modifies how products appear and behave in customer carts. Cart transforms enable sophisticated merchandising strategies by programmatically merging, expanding, or updating cart line items based on custom business logic.

  Use the `CartTransform` object to:

  * Monitor active bundling and cart modification logic
  * Track transform function deployment status and configuration
  * Manage error handling behavior for cart processing failures
  * Coordinate multiple transforms when running complex merchandising strategies
  * Analyze transform performance and customer interaction patterns

  Each cart transform links to a specific [Shopify Function](https://shopify.dev/docs/apps/build/functions) that contains the actual cart modification logic. The `blockOnFailure` setting determines whether cart processing should halt when the transform encounters errors, or whether it should allow customers to proceed with unmodified carts. This flexibility ensures merchants can balance feature richness with checkout reliability.

  Transform functions operate during cart updates, product additions, and checkout initiation, providing multiple touchpoints to enhance the shopping experience. They integrate seamlessly with existing cart APIs while extending functionality beyond standard product catalog capabilities.

  The function ID connects to your deployed function code, while the configuration settings control how the transform behaves in different scenarios. Multiple transforms can work together, processing cart modifications in sequence to support complex merchandising workflows.

  Learn more about [customized bundles](https://shopify.dev/docs/apps/selling-strategies/bundles/add-a-customized-bundle), and about the [Cart Transform Function API](https://shopify.dev/docs/api/functions/latest/cart-transform).

* [Collection.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.metafields)

  OBJECT

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

* [Company.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.metafields)

  OBJECT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

* [Company​Location.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.metafields)

  OBJECT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

* [Customer.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.metafields)

  OBJECT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  Caution

  Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

  ***

* [Customer​Segment​Member.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember#field-CustomerSegmentMember.fields.metafields)

  OBJECT

  The member of a segment.

* [Delivery​Customization.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization#field-DeliveryCustomization.fields.metafields)

  OBJECT

  A delivery customization.

* [Discount​Automatic​Node.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-DiscountAutomaticNode.fields.metafields)

  OBJECT

  The `DiscountAutomaticNode` object enables you to manage [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts) that are applied when an order meets specific criteria. You can create amount off, free shipping, or buy X get Y automatic discounts. For example, you can offer customers a free shipping discount that applies when conditions are met. Or you can offer customers a buy X get Y discount that's automatically applied when customers spend a specified amount of money, or a specified quantity of products.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

* [Discount​Code​Node.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-DiscountCodeNode.fields.metafields)

  OBJECT

  The `DiscountCodeNode` object enables you to manage [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) that are applied when customers enter a code at checkout. For example, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store. Or, you can offer discounts where customers have to enter a code to get free shipping. Merchants can create and share discount codes individually with customers.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

* [Discount​Node.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-DiscountNode.fields.metafields)

  OBJECT

  The `DiscountNode` object enables you to manage [discounts](https://help.shopify.com/manual/discounts), which are applied at checkout or on a cart.

  Discounts are a way for merchants to promote sales and special offers, or as customer loyalty rewards. Discounts can apply to [orders, products, or shipping](https://shopify.dev/docs/apps/build/discounts#discount-classes), and can be either automatic or code-based. For example, you can offer customers a buy X get Y discount that's automatically applied when purchases meet specific criteria. Or, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related mutations, limitations, and considerations.

* [Draft​Order.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.metafields)

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

* [Fulfillment​Constraint​Rule.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule#field-FulfillmentConstraintRule.fields.metafields)

  OBJECT

  A fulfillment constraint rule.

* [Gift​Card​Credit​Transaction.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCreditTransaction#field-GiftCardCreditTransaction.fields.metafields)

  OBJECT

  A credit transaction which increases the gift card balance.

* [Gift​Card​Debit​Transaction.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDebitTransaction#field-GiftCardDebitTransaction.fields.metafields)

  OBJECT

  A debit transaction which decreases the gift card balance.

* [Gift​Card​Transaction.metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/GiftCardTransaction#fields-metafields)

  INTERFACE

  Interface for a gift card transaction.

* [Has​Metafields.metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields#fields-metafields)

  INTERFACE

  Represents information about the metafields associated to the specified resource.

* [Image.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image#field-Image.fields.metafields)

  OBJECT

  Represents an image resource.

* [Inventory​Transfer.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.metafields)

  OBJECT

  Tracks the movement of [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) objects between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects. A transfer includes origin and destination information, [`InventoryTransferLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem) objects with quantities, and shipment details.

  Transfers progress through multiple [`statuses`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus). The transfer maintains [`LocationSnapshot`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot) objects of location details to preserve historical data even if locations change or are deleted later.

* [Location.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.metafields)

  OBJECT

  A physical location where merchants store and fulfill inventory. Locations include retail stores, warehouses, popups, dropshippers, or other places where inventory is managed or stocked.

  Active locations can fulfill online orders when configured with shipping rates, local pickup, or local delivery options. Locations track inventory quantities for [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and process [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) fulfillment. Third-party apps using [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) can create and manage their own locations.

* [Market.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.metafields)

  OBJECT

  A market is a group of one or more regions that you want to target for international sales. By creating a market, you can configure a distinct, localized shopping experience for customers from a specific area of the world. For example, you can [change currency](https://shopify.dev/api/admin-graphql/current/mutations/marketCurrencySettingsUpdate), [configure international pricing](https://shopify.dev/apps/internationalization/product-price-lists), or [add market-specific domains or subfolders](https://shopify.dev/api/admin-graphql/current/objects/MarketWebPresence).

* [Metafield​Definition.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.metafields)

  OBJECT

  Defines the structure, validation rules, and permissions for [`Metafield`](https://shopify.dev/docs/api/admin-graphql/current/objects/Metafield) objects attached to a specific owner type. Each definition establishes a schema that metafields must follow, including the data type and validation constraints.

  The definition controls access permissions across different APIs, determines whether the metafield can be used for filtering or as a collection condition, and can be constrained to specific resource subtypes.

* [Order.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.metafields)

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

* [Page.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.metafields)

  OBJECT

  A standalone content page in the online store. Pages display HTML-formatted content for informational pages like "About Us", contact information, or shipping policies.

  Each page has a unique handle for URL routing and supports custom template suffixes for specialized layouts. Pages can be published or hidden, and include creation and update timestamps.

* [Payment​Customization.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization#field-PaymentCustomization.fields.metafields)

  OBJECT

  A payment customization.

* [Product.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.metafields)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Product​Variant.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.metafields)

  OBJECT

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

* [Selling​Plan.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.metafields)

  OBJECT

  How a product can be sold and purchased through recurring billing or deferred purchase options. Defines the specific terms for subscriptions, pre-orders, or try-before-you-buy offers, including when to bill customers, when to fulfill orders, and what pricing adjustments to apply.

  Each selling plan has billing, delivery, and pricing policies that control the purchase experience. The plan's [`options`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.options) and [`category`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.category) help merchants organize and report on different selling strategies. Plans are grouped within a [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) that associates them with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

  ***

  Caution

  Selling plans and associated records are automatically deleted 48 hours after a merchant uninstalls the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that created them. Back up these records if you need to restore them later.

  ***

  Learn more about [selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan).

* [Shop.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.metafields)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Validation.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation#field-Validation.fields.metafields)

  OBJECT

  A server-side validation that enforces business rules before customers complete their purchases. Each validation links to a [`ShopifyFunction`](https://shopify.dev/docs/api/functions/latest/cart-and-checkout-validation) that implements the validation logic.

  Validations run on Shopify's servers and are enforced throughout the checkout process. Validation errors always block checkout progress. The `blockOnFailure` setting determines whether runtime exceptions, like timeouts, also block checkout. Tracks runtime exception history for the validation function and supports custom data through [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

* [Media​Image.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage#field-MediaImage.fields.metafields)

  OBJECT

  Deprecated

***

## Possible returns

* edges

  [\[Metafield​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Metafield!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

  non-null

  A list of nodes that are contained in MetafieldEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[App​Installation.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.metafields)
* {}[Article.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.metafields)
* {}[Blog.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.metafields)
* {}[Cart​Transform.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform#field-CartTransform.fields.metafields)
* {}[Collection.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.metafields)
* {}[Company.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.metafields)
* {}[Company​Location.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.metafields)
* {}[Customer.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.metafields)
* {}[Customer​Segment​Member.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember#field-CustomerSegmentMember.fields.metafields)
* {}[Delivery​Customization.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization#field-DeliveryCustomization.fields.metafields)
* {}[Discount​Automatic​Node.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-DiscountAutomaticNode.fields.metafields)
* {}[Discount​Code​Node.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-DiscountCodeNode.fields.metafields)
* {}[Discount​Node.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-DiscountNode.fields.metafields)
* {}[Draft​Order.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.metafields)
* {}[Fulfillment​Constraint​Rule.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule#field-FulfillmentConstraintRule.fields.metafields)
* {}[Gift​Card​Credit​Transaction.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCreditTransaction#field-GiftCardCreditTransaction.fields.metafields)
* {}[Gift​Card​Debit​Transaction.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDebitTransaction#field-GiftCardDebitTransaction.fields.metafields)
* ||-[Gift​Card​Transaction.metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/GiftCardTransaction#fields-metafields)
* ||-[Has​Metafields.metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields#fields-metafields)
* {}[Image.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image#field-Image.fields.metafields)
* {}[Inventory​Transfer.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.metafields)
* {}[Location.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.metafields)
* {}[Market.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.metafields)
* {}[Metafield​Definition.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.metafields)
* {}[Order.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.metafields)
* {}[Page.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.metafields)
* {}[Payment​Customization.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization#field-PaymentCustomization.fields.metafields)
* {}[Product.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.metafields)
* {}[Product​Variant.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.metafields)
* {}[Selling​Plan.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.metafields)

### Possible returns

* <->[Metafield​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection#returns-edges)
* <->[Metafield​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection#returns-nodes)
* <->[Metafield​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection#returns-pageInfo)
