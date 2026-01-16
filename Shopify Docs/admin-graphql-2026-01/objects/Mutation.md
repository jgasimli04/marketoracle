---
title: Mutation - GraphQL Admin
description: The schema's entry point for all mutation operations.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Mutation'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Mutation.md'
---

# Mutation

object

The schema's entry point for all mutation operations.

## Fields

* abandonment​Update​Activities​Delivery​Statuses

  [Abandonment​Update​Activities​Delivery​Statuses​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/AbandonmentUpdateActivitiesDeliveryStatusesPayload)

  Updates the marketing activities delivery statuses for an abandonment.

  * abandonment​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the abandonment that needs to be updated.

  * marketing​Activity​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the marketing activity that needs to be updated.

  * delivery​Status

    [Abandonment​Delivery​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentDeliveryState)

    required

    The new delivery status of the marketing activity for this abandonment.

  * delivered​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The delivery timestamp if the activity delivered.

  * delivery​Status​Change​Reason

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The reason why the activity was or was not delivered.

  ***

* app​Purchase​One​Time​Create

  [App​Purchase​One​Time​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/AppPurchaseOneTimeCreatePayload)

  Creates a one-time charge for app features or services that don't require recurring billing. This mutation is ideal for apps that sell individual features, premium content, or services on a per-use basis rather than subscription models.

  For example, a design app might charge merchants once for premium templates, or a marketing app could bill for individual campaign setups without ongoing monthly fees.

  Use the `AppPurchaseOneTimeCreate` mutation to:

  * Charge for premium features or content purchases
  * Bill for professional services or setup fees
  * Generate revenue from one-time digital product sales

  The mutation returns a confirmation URL that merchants must visit to approve the charge. Test and development stores are not charged, allowing safe testing of billing flows.

  Explore one-time billing options on the [app purchases page](https://shopify.dev/docs/apps/launch/billing/support-one-time-purchases).

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The name of the one-time purchase from the app.

  * price

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    The amount to be charged to the store for the app one-time purchase.

  * return​Url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    The URL where the merchant is redirected after approving the app one-time purchase.

  * test

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the app one-time purchase is a test transaction.

  ***

* app​Revoke​Access​Scopes

  [App​Revoke​Access​Scopes​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/AppRevokeAccessScopesPayload)

  Revokes previously granted access scopes from an app installation, allowing merchants to reduce an app's permissions without completely uninstalling it. This provides granular control over what data and functionality apps can access.

  For example, if a merchant no longer wants an app to access customer information but still wants to use its inventory features, they can revoke the customer-related scopes while keeping inventory permissions active.

  Use the `appRevokeAccessScopes` mutation to:

  * Remove specific permissions from installed apps
  * Maintain app functionality while minimizing data exposure

  The mutation returns details about which scopes were successfully revoked and any errors that prevented certain permissions from being removed.

  Learn more about [managing app permissions](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes#revoke-granted-scopes-dynamically).

  * scopes

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The list of scope handles to revoke.

  ***

* app​Subscription​Cancel

  [App​Subscription​Cancel​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/AppSubscriptionCancelPayload)

  Cancels an active app subscription, stopping future billing cycles. The cancellation behavior depends on the `replacementBehavior` setting - it can either disable auto-renewal (allowing the subscription to continue until the end of the current billing period) or immediately cancel with prorated refunds.

  When a merchant decides to discontinue using subscription features, this mutation provides a clean cancellation workflow that respects billing periods and merchant expectations.

  Use the `AppSubscriptionCancel` mutation to:

  * Process merchant-initiated subscription cancellations
  * Terminate subscriptions due to policy violations or account issues
  * Handle subscription cancellations during app uninstallation workflows

  The cancellation timing and merchant access depends on the `replacementBehavior` setting and the app's specific implementation of subscription management.

  For subscription lifecycle management and cancellation best practices, consult the [subscription management guide](https://shopify.dev/docs/apps/launch/billing/subscription-billing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the app subscription to be cancelled.

  * prorate

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to issue prorated credits for the unused portion of the app subscription. There will be a corresponding deduction (based on revenue share) to your Partner account. For example, if a $10.00 app subscription (with 0% revenue share) is cancelled and prorated half way through the billing cycle, then the merchant will be credited $5.00 and that amount will be deducted from your Partner account.

  ***

* app​Subscription​Create

  [App​Subscription​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/AppSubscriptionCreatePayload)

  Creates a recurring or usage-based [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) that charges merchants for app features and services. The subscription includes one or more [`AppSubscriptionLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem) objects that define the pricing structure, billing intervals, and optional [`AppSubscriptionDiscount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscount) values.

  Returns a [confirmation URL](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#returns-confirmationUrl) where the merchant approves or declines the charges. After approval, the subscription becomes active and billing begins after any trial period expires. You can specify [`AppSubscriptionReplacementBehavior`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionReplacementBehavior) to control how this subscription interacts with existing active subscriptions.

  Learn more about [creating app subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/create-time-based-subscriptions).

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    A descriptive name for the app subscription.

  * line​Items

    [\[App​Subscription​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppSubscriptionLineItemInput)

    required

    Attaches one or more pricing plans to an app subscription. Only one pricing plan can be defined for each available type.

  * test

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the app subscription is a test transaction.

  * trial​Days

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of days of the free trial period, beginning on the day that the merchant approves the app charges.

  * return​Url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    The URL pointing to the page where the merchant is redirected after approving the app subscription.

  * replacement​Behavior

    [App​Subscription​Replacement​Behavior](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionReplacementBehavior)

    Default:STANDARD

    The replacement behavior when creating an app subscription for a merchant with an already existing app subscription.

  ***

* app​Subscription​Line​Item​Update

  [App​Subscription​Line​Item​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/AppSubscriptionLineItemUpdatePayload)

  Updates the capped amount on usage-based billing for an [`AppSubscriptionLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem). Enables you to modify the maximum charge limit that prevents merchants from exceeding a specified threshold during their billing period.

  The mutation returns a [confirmation URL](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#returns-confirmationUrl) where the merchant must approve the new pricing limit before it takes effect. Use this when adjusting usage limits based on merchant needs or changing pricing models.

  Learn more about [updating the maximum charge for a subscription](https://shopify.dev/docs/apps/launch/billing/subscription-billing/update-max-charge).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the app subscription line item to be updated.

  * capped​Amount

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    The new maximum amount of usage charges that can be incurred within a subscription billing interval.

  ***

* app​Subscription​Trial​Extend

  [App​Subscription​Trial​Extend​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/AppSubscriptionTrialExtendPayload)

  Extends the trial period for an existing app subscription. Trial extensions give merchants additional time to use the app before committing to paid billing.

  Requires the subscription ID and the number of days to extend (between one and 1000). The extension modifies the existing trial end date, allowing continued access to subscription features without immediate billing. Returns the updated [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription).

  Learn more about [offering free trials](https://shopify.dev/docs/apps/launch/billing/offer-free-trials).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the app subscription to extend the trial for.

  * days

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The number of days to extend the trial. The value must be greater than 0 and less than or equal to 1000.

  ***

* app​Uninstall

  [App​Uninstall​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/AppUninstallPayload)

  Uninstalls an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) from a shop. Apps use this mutation to uninstall themselves programmatically, removing their [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) from the merchant's store.

  When an app uninstalls, Shopify automatically performs cleanup tasks, such as deleting [`WebhookSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription) objects and [admin links](https://shopify.dev/docs/apps/build/admin/admin-links) associated with the app.

  Learn more about [app lifecycle management](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/uninstall-app-api-request).

  ***

  Caution

  This action is irreversible. You can't restore an uninstalled app's configuration or data. Before you uninstall an app, make sure that you no longer need to make API calls for the store in which the app has been installed.

  ***

* app​Usage​Record​Create

  [App​Usage​Record​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/AppUsageRecordCreatePayload)

  Creates a usage charge for an app subscription with usage-based pricing. The charge counts toward the capped amount limit set when creating the subscription.

  Usage records track consumption of app features or services on a per-use basis. You provide the charge amount, a description of what you consumed, and the subscription line item ID. The optional [`idempotencyKey`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsageRecord#field-idempotencyKey) parameter prevents duplicate charges if you send the same request multiple times.

  If the new charge would cause total usage charges in the current billing interval to exceed the capped amount, then the mutation returns an error.

  Learn more about [creating usage-based subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/create-usage-based-subscriptions).

  * subscription​Line​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the app subscription line item to create the usage record under. This app subscription line item must have a usage pricing plan.

  * price

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    The price of the app usage record.

  * description

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The description of the app usage record.

  * idempotency​Key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A unique key generated by the client to avoid duplicate charges. Maximum length of 255 characters.

  ***

* article​Create

  [Article​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ArticleCreatePayload)

  Creates an [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article). Articles are content pieces that include a title, body text, and author information.

  You can publish the article immediately or schedule it with a specific publish date. You can customize the article's URL handle, apply custom templates for rendering, and add optional fields like [tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate#arguments-article.fields.tags), an [image](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate#arguments-article.fields.image), and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

  The mutation validates article content and ensures proper blog association. Error handling provides specific feedback for content requirements.

  * article

    [Article​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput)

    required

    ### Arguments

    The properties of the new article.

  * blog

    [Article​Blog​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleBlogInput)

    The properties of the new blog.

  ***

* article​Delete

  [Article​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ArticleDeletePayload)

  Permanently deletes a blog article from a shop's blog. This mutation removes the article and all associated metadata.

  For example, when outdated product information or seasonal content needs removal, merchants can use this mutation to clean up their blog.

  Use the `articleDelete` mutation to:

  * Remove outdated or incorrect blog content
  * Clean up seasonal or time-sensitive articles
  * Maintain blog organization

  The deletion is permanent and returns the deleted article's ID for confirmation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the article to be deleted.

  ***

* article​Update

  [Article​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ArticleUpdatePayload)

  Updates an existing [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article). You can modify the article's content, metadata, publication status, and associated properties like author information and tags.

  If you update the [`handle`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleUpdate#arguments-article.fields.handle), then you can optionally create a redirect from the old URL to the new one by setting [`redirectNewHandle`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleUpdate#arguments-article.fields.redirectNewHandle) to `true`.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the article to be updated.

  * article

    [Article​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput)

    required

    The properties of the article to be updated.

  * blog

    [Article​Blog​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleBlogInput)

    The properties of the blog to be created.

  ***

* backup​Region​Update

  [Backup​Region​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/BackupRegionUpdatePayload)

  Update the backup region that is used when we have no better signal of what region a buyer is in.

  * region

    [Backup​Region​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BackupRegionUpdateInput)

    ### Arguments

    Optional input representing the region to be updated. If not provided, the existing regions remain unchanged.

  ***

* blog​Create

  [Blog​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/BlogCreatePayload)

  Creates a new blog within a shop, establishing a container for organizing articles.

  For example, a fitness equipment retailer launching a wellness blog would use this mutation to create the blog, enabling them to publish workout guides and nutrition tips.

  Use the `blogCreate` mutation to:

  * Launch new content marketing initiatives
  * Create separate blogs for different content themes
  * Establish spaces for article organization

  The mutation validates blog settings and establishes the structure for article publishing.

  * blog

    [Blog​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogCreateInput)

    required

    ### Arguments

    The properties of the new blog.

  ***

* blog​Delete

  [Blog​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/BlogDeletePayload)

  Permanently deletes a blog from a shop. This mutation removes the blog container and its organizational structure.

  For example, when consolidating multiple seasonal blogs into a single year-round content strategy, merchants can use this mutation to remove unused blogs.

  Use the `blogDelete` mutation to:

  * Remove unused or outdated blogs
  * Consolidate content organization
  * Clean up blog structure

  The deletion is permanent and returns the deleted blog's ID for confirmation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the blog to be deleted.

  ***

* blog​Update

  [Blog​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/BlogUpdatePayload)

  Updates an existing blog's configuration and settings. This mutation allows merchants to modify blog properties to keep their content strategy current.

  For example, a merchant might update their blog's title from "Company News" to "Sustainability Stories" when shifting their content focus, or modify the handle to improve URL structure.

  Use the `blogUpdate` mutation to:

  * Change blog titles for rebranding
  * Modify blog handles for better URLs
  * Adjust comment settings and moderation preferences

  The mutation returns the updated blog with any validation errors.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the blog to be updated.

  * blog

    [Blog​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogUpdateInput)

    required

    The properties of the blog to be updated.

  ***

* bulk​Operation​Cancel

  [Bulk​Operation​Cancel​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/BulkOperationCancelPayload)

  Starts the cancelation process of a running bulk operation.

  There may be a short delay from when a cancelation starts until the operation is actually canceled.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the bulk operation to cancel.

  ***

* bulk​Operation​Run​Mutation

  [Bulk​Operation​Run​Mutation​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/BulkOperationRunMutationPayload)

  Creates and runs a [bulk operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation) to import data asynchronously. This mutation executes a specified GraphQL mutation multiple times using input data from a [JSONL](http://jsonlines.org/) file that you've uploaded to Shopify.

  The operation processes each line in your JSONL file as a separate mutation execution. The operation delivers results in a JSONL file when it completes. You can run one bulk mutation operation at a time per shop, though a [`bulkOperationRunQuery`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery) operation can run simultaneously.

  Learn more about [bulk importing data](https://shopify.dev/docs/api/usage/bulk-operations/imports).

  * mutation

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The mutation to be executed in bulk.

  * staged​Upload​Path

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The staged upload path of the file containing mutation variables.

  * group​Objects

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:true

  * client​Identifier

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional identifier which may be used for querying.

  ***

* bulk​Operation​Run​Query

  [Bulk​Operation​Run​Query​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/BulkOperationRunQueryPayload)

  Creates and runs a [bulk operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation) to fetch data asynchronously. The operation processes your GraphQL query in the background and returns results in a [JSONL](http://jsonlines.org/) file when complete.

  Apps can run one bulk query operation and one bulk mutation operation at a time per shop. The query must include at least one connection field and supports up to five connections with a maximum nesting depth of two levels.

  ***

  Note

  Results remain available for seven days after completion.

  ***

  For more information, see the [bulk operations guide](https://shopify.dev/docs/api/usage/bulk-operations/queries).

  * query

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The query to be executed in bulk.

  * group​Objects

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    requiredDefault:false

    Enables grouping objects directly under their corresponding parent objects in the JSONL output. Enabling grouping slows down bulk operations and increases the likelihood of timeouts. Only enable grouping if you depend on the grouped format.

  ***

* bulk​Product​Resource​Feedback​Create

  [Bulk​Product​Resource​Feedback​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/BulkProductResourceFeedbackCreatePayload)

  Creates product feedback for multiple products.

  * feedback​Input

    [\[Product​Resource​Feedback​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductResourceFeedbackInput)

    required

    ### Arguments

    An array of inputs to create the feedback. Limited to 50.

  ***

* carrier​Service​Create

  [Carrier​Service​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CarrierServiceCreatePayload)

  Creates a carrier service that provides real-time shipping rates to Shopify. Carrier services provide real-time shipping rates from external providers like FedEx, UPS, or custom shipping solutions. The carrier service connects to your external shipping rate calculation system through a callback URL.

  When customers reach checkout, Shopify sends order details to your callback URL and displays the returned shipping rates. The service must be active to provide rates during checkout.

  * input

    [Delivery​Carrier​Service​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceCreateInput)

    required

    ### Arguments

    The input fields used to create a carrier service.

  ***

* carrier​Service​Delete

  [Carrier​Service​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CarrierServiceDeletePayload)

  Removes an existing carrier service.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the carrier service to delete.

  ***

* carrier​Service​Update

  [Carrier​Service​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CarrierServiceUpdatePayload)

  Updates a carrier service. Only the app that creates a carrier service can update it.

  * input

    [Delivery​Carrier​Service​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceUpdateInput)

    required

    ### Arguments

    The input fields used to update a carrier service.

  ***

* cart​Transform​Create

  [Cart​Transform​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CartTransformCreatePayload)

  Creates a cart transform function that lets merchants customize how products are bundled and presented during checkout. This gives merchants powerful control over their merchandising strategy by allowing apps to modify cart line items programmatically, supporting advanced approaches like dynamic bundles or personalized product recommendations.

  For example, a bundle app might create a cart transform that automatically groups related products (like a camera, lens, and case) into a single bundle line item when customers add them to their cart, complete with bundle pricing and unified presentation.

  Use `CartTransformCreate` to:

  * Deploy custom bundling logic to merchant stores
  * Enable dynamic product grouping during checkout
  * Implement personalized product recommendations
  * Create conditional offers based on cart contents
  * Support complex pricing strategies for product combinations

  The mutation processes synchronously and returns the created cart transform along with any validation errors. Once created, the cart transform function becomes active for the shop and will process cart modifications according to your defined logic. Cart transforms integrate with [Shopify Functions](https://shopify.dev/docs/api/functions) to provide powerful customization capabilities while maintaining checkout performance.

  Cart Transform functions can be configured to block checkout on failure or allow graceful degradation, giving you control over how errors are handled in the customer experience.

  Learn more about [customized bundles](https://shopify.dev/docs/apps/selling-strategies/bundles/add-a-customized-bundle).

  * function​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

    ### Arguments

  * function​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The handle of the Function providing the cart transform.

  * block​On​Failure

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether a run failure should block cart and checkout operations.

  * metafields

    [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

    Default:\[]

    Additional metafields to associate to the cart transform.

  ***

* cart​Transform​Delete

  [Cart​Transform​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CartTransformDeletePayload)

  Removes an existing cart transform function from the merchant's store, disabling any customized bundle or cart modification logic it provided. This mutation persistently deletes the transform configuration and stops all associated cart processing.

  For example, when discontinuing a bundle app or removing specific merchandising features, you would delete the corresponding cart transform to ensure customers no longer see the bundled products or modified cart behavior.

  Use `CartTransformDelete` to:

  * Deactivate customized bundle logic when removing app features
  * Clean up unused transform functions
  * Disable cart modifications during app uninstallation
  * Remove outdated merchandising strategies
  * Restore default cart behavior for merchants

  The deletion processes immediately and returns the ID of the removed cart transform for confirmation. Once deleted, the transform function stops processing new cart operations, though existing cart sessions may retain their current state until refresh. This ensures a clean transition without disrupting active customer sessions.

  Consider the timing of deletions carefully, as removing transforms during peak shopping periods could affect customer experience if they have active carts with transformed items.

  Learn more about [managing cart transforms](https://shopify.dev/docs/apps/selling-strategies/bundles).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier for the cart transform.

  ***

* catalog​Context​Update

  [Catalog​Context​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CatalogContextUpdatePayload)

  Modifies which contexts, like [markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) or B2B [company locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation), can access a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog). You can add or remove contexts to control where the catalog's products and prices are available.

  Learn more about [managing catalog contexts](https://shopify.dev/docs/apps/build/markets/new-markets/catalogs) and [managing B2B catalogs](https://shopify.dev/docs/apps/build/b2b/manage-catalogs).

  * catalog​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the catalog for which to update the context.

  * contexts​To​Add

    [Catalog​Context​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogContextInput)

    The contexts to add to the catalog.

  * contexts​To​Remove

    [Catalog​Context​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogContextInput)

    The contexts to remove from the catalog.

  ***

* catalog​Create

  [Catalog​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CatalogCreatePayload)

  Creates a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) that controls product availability and pricing for specific contexts like [markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) or B2B [company locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation). Catalogs use [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) objects to determine which products are available and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) objects to set custom pricing.

  You can optionally associate a publication and price list when creating the catalog, or add them later using separate mutations.

  Learn more about [managing catalog contexts](https://shopify.dev/docs/apps/build/markets/new-markets/catalogs) and [using catalogs for different markets](https://shopify.dev/docs/apps/build/markets/catalogs-different-markets).

  * input

    [Catalog​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogCreateInput)

    required

    ### Arguments

    The properties of the new catalog.

  ***

* catalog​Delete

  [Catalog​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CatalogDeletePayload)

  Delete a catalog.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the catalog to delete.

  * delete​Dependent​Resources

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to also delete the price list and the publication owned by the catalog.

  ***

* catalog​Update

  [Catalog​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CatalogUpdatePayload)

  Updates an existing [catalog's](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) configuration. Catalogs control product publishing and pricing for specific contexts like [markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) or B2B [company locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation).

  You can modify the catalog's title, status, and associated context. You can also update the [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) that determines pricing adjustments or the [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that controls which products customers see.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the catalog to update.

  * input

    [Catalog​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogUpdateInput)

    required

    The properties of the updated catalog.

  ***

* checkout​Branding​Upsert

  [Checkout​Branding​Upsert​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CheckoutBrandingUpsertPayload)

  Updates the visual branding for a [`CheckoutProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile), customizing how checkout displays to customers. Creates new branding settings if none exist, or modifies existing settings.

  The mutation accepts two levels of customization through the [`CheckoutBrandingInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingInput) input object. [`designSystem`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutBrandingUpsert#arguments-checkoutBrandingInput.fields.designSystem) defines foundational brand attributes like colors, typography, and corner radius that apply consistently throughout checkout. [`customizations`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutBrandingUpsert#arguments-checkoutBrandingInput.fields.customizations) defines styles for specific parts of the UI, individual components, or groups of components like the header, buttons, form fields, and sections.

  Changes to a published checkout profile display immediately in the store's checkout. You can preview draft profiles in the Shopify admin's checkout editor before publishing.

  Learn more about [checkout styling](https://shopify.dev/docs/apps/checkout/styling).

  * checkout​Profile​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier.

  * checkout​Branding​Input

    [Checkout​Branding​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingInput)

    The input fields to use to upsert the checkout branding settings (pass null to reset them to default).

  ***

* collection​Add​Products

  [Collection​Add​Products​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CollectionAddProductsPayload)

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

* collection​Add​Products​V2

  [Collection​Add​Products​V2Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CollectionAddProductsV2Payload)

  Adds products to a [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) asynchronously and returns a [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) to track the operation's progress. This mutation handles large product sets efficiently by processing them in the background.

  You can poll the returned job using the [`job`](https://shopify.dev/docs/api/admin-graphql/latest/queries/job) query to monitor completion status.

  ***

  Note

  This mutation adds products in the order specified in the [`productIds`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProducts#arguments-productIds) argument.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the collection that's being updated.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the products that are being added to the collection. If the collection's sort order is manual, the products will be added in the order in which they are provided.

  ***

* collection​Create

  [Collection​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CollectionCreatePayload)

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

* collection​Delete

  [Collection​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CollectionDeletePayload)

  Deletes a collection and removes it permanently from the store. This operation cannot be undone and will remove the collection from all sales channels where it was published.

  For example, when merchants discontinue seasonal promotions or reorganize their catalog structure, they can delete outdated collections like "Back to School 2023" to keep their store organized.

  Use `CollectionDelete` to:

  * Remove outdated or unused collections from stores
  * Clean up collection structures during catalog reorganization
  * Implement collection management tools with deletion capabilities

  Products within the deleted collection remain in the store but are no longer grouped under that collection.

  Learn more about [collection management](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

  * input

    [Collection​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionDeleteInput)

    required

    ### Arguments

    The collection to delete.

  ***

* collection​Duplicate

  [Collection​Duplicate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CollectionDuplicatePayload)

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

* collection​Remove​Products

  [Collection​Remove​Products​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CollectionRemoveProductsPayload)

  Removes multiple products from a collection in a single operation. This mutation can process large product sets (up to 250 products) and may take significant time to complete for collections with many products.

  For example, when ending a seasonal promotion, merchants can remove all sale items from a "Summer Clearance" collection at once rather than editing each product individually.

  Use `CollectionRemoveProducts` to:

  * Bulk-remove products from collections efficiently
  * Clean up collection membership during catalog updates
  * Implement automated collection management workflows

  The operation processes asynchronously to avoid timeouts and performance issues, especially for large product sets.

  Learn more about [collection management](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the collection to remove products from. The ID must reference an existing manual collection.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of products to remove from the collection. The mutation doesn't validate that the products belong to the collection or whether the products exist.

  ***

* collection​Reorder​Products

  [Collection​Reorder​Products​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CollectionReorderProductsPayload)

  Asynchronously reorders products within a specified collection. Instead of returning an updated collection, this mutation returns a job, which should be [polled](https://shopify.dev/api/admin-graphql/latest/queries/job). The [`Collection.sortOrder`](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-collection-sortorder) must be `MANUAL`.

  How to use this mutation:

  * Provide only the products that actually moved in the `moves` list; do not send the entire product list. For example: to move the product at index 1 to index N, send a single move for that product with `newPosition: N`.
  * Each move is applied sequentially in the order provided.
  * `newPosition` is a zero-based index within the collection at the moment the move is applied (after any prior moves in the list).
  * Products not included in `moves` keep their relative order, aside from any displacement caused by the moves.
  * If `newPosition` is greater than or equal to the number of products, the product is placed at the end.

  Example:

  * Initial order: \[A, B, C, D, E] (indices 0..4)
  * Moves (applied in order):
  * E -> newPosition: 1
  * C -> newPosition: 4
  * Result: \[A, E, B, D, C]

  Displaced products will have their position altered in a consistent manner with no gaps.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the collection on which to reorder products.

  * moves

    [\[Move​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoveInput)

    required

    A list of moves to perform, evaluated in order. Provide only products whose positions changed; do not send the full list. `newPosition` is a zero-based index evaluated at the time each move is applied (after any prior moves). `newPosition` values do not need to be unique, and if a value is greater than or equal to the number of products, the product is moved to the end. Up to 250 moves are supported.

  ***

* collection​Update

  [Collection​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CollectionUpdatePayload)

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

* combined​Listing​Update

  [Combined​Listing​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CombinedListingUpdatePayload)

  Add, remove and update `CombinedListing`s of a given Product.

  `CombinedListing`s are comprised of multiple products to create a single listing. There are two kinds of products used in a `CombinedListing`:

  1. Parent products
  2. Child products

  The parent product is created with a `productCreate` with a `CombinedListingRole` of `PARENT`. Once created, you can associate child products with the parent product using this mutation. Parent products represent the idea of a product (e.g. Shoe).

  Child products represent a particular option value (or combination of option values) of a parent product. For instance, with your Shoe parent product, you may have several child products representing specific colors of the shoe (e.g. Shoe - Blue). You could also have child products representing more than a single option (e.g. Shoe - Blue/Canvas, Shoe - Blue/Leather, etc...).

  The combined listing is the association of parent product to one or more child products.

  Learn more about [Combined Listings](https://shopify.dev/apps/selling-strategies/combined-listings).

  * parent​Product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the parent product.

  * title

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The updated title for the combined listing.

  * products​Added

    [\[Child​Product​Relation​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChildProductRelationInput)

    The child products to add and their assigned options and option values.

  * products​Edited

    [\[Child​Product​Relation​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChildProductRelationInput)

    The child products to edit and their assigned options and option values.

  * products​Removed​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of products to be removed from the combined listing.

  * options​And​Values

    [\[Option​And​Value​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionAndValueInput)

    The ordered options and values to be used by the combined listing. Options and values will be reordered to match the order specified here.

  ***

* comment​Approve

  [Comment​Approve​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CommentApprovePayload)

  Approves a pending comment, making it visible to store visitors on the associated blog article.

  For example, when a customer submits a question about a product in a blog post, merchants can approve the comment to make it publicly visible.

  Use the `commentApprove` mutation to:

  * Publish pending comments after review
  * Enable customer discussions on blog articles
  * Maintain quality control over comments

  Once approved, the comment becomes visible to all store visitors.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the comment to be approved.

  ***

* comment​Delete

  [Comment​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CommentDeletePayload)

  Permanently removes a comment from a blog article.

  For example, when a comment contains spam links or inappropriate language that violates store policies, merchants can delete it entirely.

  Use the `commentDelete` mutation to:

  * Remove spam or inappropriate comments permanently
  * Clean up irrelevant discussions
  * Maintain content standards on blog articles

  Deletion is permanent and can't be undone.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the comment to be deleted.

  ***

* comment​Not​Spam

  [Comment​Not​Spam​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CommentNotSpamPayload)

  Reverses a spam classification on a comment, restoring it to normal moderation status. This mutation allows merchants to change their decision when a comment has been manually marked as spam.

  For example, when a merchant reviews comments marked as spam and finds a legitimate customer question, they can use this mutation to restore the comment's normal status and make it eligible for approval.

  Use the `commentNotSpam` mutation to:

  * Unmark comments that were marked as spam
  * Restore comments to normal moderation status
  * Move comments back to the approval queue

  This action changes the comment's status from spam back to pending, where it can then be approved or managed according to standard moderation practices.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the comment to be marked as not spam.

  ***

* comment​Spam

  [Comment​Spam​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CommentSpamPayload)

  Marks a comment as spam, removing it from public view. This mutation enables merchants to quickly handle unwanted promotional content, malicious links, or other spam that appears in blog discussions.

  For example, when a comment contains suspicious links to unrelated products or services, merchants can mark it as spam to immediately hide it from customers.

  Use the `commentSpam` mutation to:

  * Hide promotional or malicious comments from public view
  * Protect customers from potentially harmful links
  * Maintain professional discussion quality on blog articles

  Spam-marked comments can be reviewed later and potentially restored using the `commentNotSpam` mutation if they were incorrectly classified.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the comment to be marked as spam.

  ***

* companies​Delete

  [Companies​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompaniesDeletePayload)

  Deletes a list of companies.

  * company​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of IDs of companies to delete.

  ***

* company​Address​Delete

  [Company​Address​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyAddressDeletePayload)

  Deletes a company address.

  * address​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the address to delete.

  ***

* company​Assign​Customer​As​Contact

  [Company​Assign​Customer​As​Contact​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyAssignCustomerAsContactPayload)

  Adds an existing [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) as a contact to a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company). Companies are business entities that make purchases from the merchant's store. Use this mutation when you have a customer who needs to be associated with a B2B company to make purchases on behalf of that company.

  The mutation returns the newly created [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) that links the customer to the company. After assignment, the customer becomes a company contact who can place orders on behalf of the company with access to any catalogs, pricing, and payment terms configured for the company's locations.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to assign the contact to.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer to assign as the contact.

  ***

* company​Assign​Main​Contact

  [Company​Assign​Main​Contact​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyAssignMainContactPayload)

  Assigns the main contact for the company.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to assign the main contact to.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the company contact to be assigned as the main contact.

  ***

* company​Contact​Assign​Role

  [Company​Contact​Assign​Role​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyContactAssignRolePayload)

  Assigns a role to a contact for a location.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the contact to assign a role to.

  * company​Contact​Role​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the role to assign to a contact.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the location to assign a role to a contact.

  ***

* company​Contact​Assign​Roles

  [Company​Contact​Assign​Roles​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyContactAssignRolesPayload)

  Assigns roles on a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The contact whose roles are being assigned.

  * roles​To​Assign

    [\[Company​Contact​Role​Assign!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactRoleAssign)

    required

    The new roles to assign.

  ***

* company​Contact​Create

  [Company​Contact​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyContactCreatePayload)

  Creates a company contact and the associated customer.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company that the company contact belongs to.

  * input

    [Company​Contact​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactInput)

    required

    The fields to use to create the company contact.

  ***

* company​Contact​Delete

  [Company​Contact​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyContactDeletePayload)

  Deletes a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company contact to delete.

  ***

* company​Contact​Remove​From​Company

  [Company​Contact​Remove​From​Company​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyContactRemoveFromCompanyPayload)

  Removes a company contact from a Company.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company contact to remove from the Company.

  ***

* company​Contact​Revoke​Role

  [Company​Contact​Revoke​Role​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyContactRevokeRolePayload)

  Revokes a role on a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the contact to revoke a role from.

  * company​Contact​Role​Assignment​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the role assignment to revoke from a contact.

  ***

* company​Contact​Revoke​Roles

  [Company​Contact​Revoke​Roles​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyContactRevokeRolesPayload)

  Revokes roles on a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The contact whose roles are being revoked.

  * role​Assignment​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The current role assignment IDs to revoke.

  * revoke​All

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Flag to revoke all roles on the contact.

  ***

* company​Contacts​Delete

  [Company​Contacts​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyContactsDeletePayload)

  Deletes one or more company contacts.

  * company​Contact​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The list of IDs of the company contacts to delete.

  ***

* company​Contact​Update

  [Company​Contact​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyContactUpdatePayload)

  Updates a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company contact to be updated.

  * input

    [Company​Contact​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactInput)

    required

    The fields to use to update the company contact.

  ***

* company​Create

  [Company​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyCreatePayload)

  Creates a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) for B2B commerce. This mutation creates the company and can optionally create an initial [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) and [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) in a single operation. Company contacts are people who place orders on behalf of the company. Company locations are branches or offices with their own billing and shipping addresses.

  ***

  Note

  Creating a company without a `name` [returns an error](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate?example=creating-a-company-without-a-name-returns-an-error).

  ***

  Learn more about [creating companies for B2B](https://shopify.dev/docs/apps/build/b2b/start-building#step-1-create-a-company).

  * input

    [Company​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyCreateInput)

    required

    ### Arguments

    The fields to use when creating the company.

  ***

* company​Delete

  [Company​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyDeletePayload)

  Deletes a company.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to delete.

  ***

* company​Location​Assign​Address

  [Company​Location​Assign​Address​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyLocationAssignAddressPayload)

  Updates an address on a company location.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to update addresses on.

  * address

    [Company​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyAddressInput)

    required

    The input fields to use to update the address.

  * address​Types

    [\[Company​Address​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyAddressType)

    required

    The list of address types on the location to update.

  ***

* company​Location​Assign​Roles

  [Company​Location​Assign​Roles​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyLocationAssignRolesPayload)

  Assigns roles on a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location whose roles are being assigned.

  * roles​To​Assign

    [\[Company​Location​Role​Assign!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationRoleAssign)

    required

    The roles to assign.

  ***

* company​Location​Assign​Staff​Members

  [Company​Location​Assign​Staff​Members​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyLocationAssignStaffMembersPayload)

  Creates one or more mappings between a staff member at a shop and a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to assign the staff member to.

  * staff​Member​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The list of IDs of the staff members to assign.

  ***

* company​Location​Create

  [Company​Location​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyLocationCreatePayload)

  Creates a new location for a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company). Company locations are branches or offices where B2B customers can place orders with specific pricing, catalogs, and payment terms.

  Creates a company location. Each location can have its own billing and shipping addresses, tax settings, and [`buyer experience configuration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration). You can assign [staff members](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) and [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) objects to manage the location.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company that the company location belongs to.

  * input

    [Company​Location​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationInput)

    required

    The fields to use to create the company location.

  ***

* company​Location​Delete

  [Company​Location​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyLocationDeletePayload)

  Deletes a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to delete.

  ***

* company​Location​Remove​Staff​Members

  [Company​Location​Remove​Staff​Members​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyLocationRemoveStaffMembersPayload)

  Deletes one or more existing mappings between a staff member at a shop and a company location.

  * company​Location​Staff​Member​Assignment​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The list of IDs of the company location staff member assignment to delete.

  ***

* company​Location​Revoke​Roles

  [Company​Location​Revoke​Roles​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyLocationRevokeRolesPayload)

  Revokes roles on a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location whose roles are being revoked.

  * roles​To​Revoke

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The current roles to revoke.

  ***

* company​Locations​Delete

  [Company​Locations​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyLocationsDeletePayload)

  Deletes a list of company locations.

  * company​Location​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of IDs of company locations to delete.

  ***

* company​Location​Tax​Settings​Update

  [Company​Location​Tax​Settings​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyLocationTaxSettingsUpdatePayload)

  Sets the tax settings for a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location that the tax settings get assigned to.

  * tax​Registration​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The unique tax registration ID for the company location.

  * tax​Exempt

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the location is exempt from taxes.

  * exemptions​To​Assign

    [\[Tax​Exemption!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    The list of tax exemptions to assign to the company location.

  * exemptions​To​Remove

    [\[Tax​Exemption!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    The list of tax exemptions to remove from the company location.

  ***

* company​Location​Update

  [Company​Location​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyLocationUpdatePayload)

  Updates a company location's information and B2B checkout settings. Company locations are branches or offices where [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) members place orders on behalf of the company. Contacts must be assigned to a location through `roleAssignments` to place orders.

  The mutation modifies details such as the location's name, contact information, preferred locale, and internal notes. You can also configure the B2B checkout experience through [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) settings that control whether orders require merchant review, [`PaymentTermsTemplate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsTemplate) settings, shipping address editing permissions, and [`DepositConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/unions/DepositConfiguration) requirements.

  Learn more about [managing company locations](https://shopify.dev/docs/apps/build/b2b/manage-client-company-locations).

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to update.

  * input

    [Company​Location​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationUpdateInput)

    required

    The input fields to update in the company location.

  ***

* company​Revoke​Main​Contact

  [Company​Revoke​Main​Contact​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyRevokeMainContactPayload)

  Revokes the main contact from the company.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to revoke the main contact from.

  ***

* company​Update

  [Company​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyUpdatePayload)

  Updates a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) with new information. Companies represent business customers that can have multiple contacts and locations with specific pricing, payment terms, and checkout settings.

  The mutation accepts the company's ID and an input object containing the fields to update. You can modify the company name, add or update internal notes, set an external ID for integration with other systems, or adjust the customer relationship start date.

  Learn more about [building B2B features](https://shopify.dev/docs/apps/build/b2b/start-building).

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to be updated.

  * input

    [Company​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyInput)

    required

    The input fields to update the company.

  ***

* consent​Policy​Update

  [Consent​Policy​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ConsentPolicyUpdatePayload)

  Update or create consent policies in bulk.

  * consent​Policies

    [\[Consent​Policy​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ConsentPolicyInput)

    required

    ### Arguments

    The consent policies to update or create. If the country and region matches an existing consent policy, then the consent policy is updated. Otherwise, a new consent policy is created.

  ***

* customer​Address​Create

  [Customer​Address​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerAddressCreatePayload)

  Creates a new [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) for a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer). You can optionally set the address as the customer's default address.

  You can only add addresses to existing customers. Each customer can have multiple addresses.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer.

  * address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    Specifies the fields to use when creating the address.

  * set​As​Default

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether to set the address as the customer's default address.

  ***

* customer​Address​Delete

  [Customer​Address​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerAddressDeletePayload)

  Deletes a customer's address.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer whose address is being deleted.

  * address​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the address to be deleted from the customer.

  ***

* customer​Address​Update

  [Customer​Address​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerAddressUpdatePayload)

  Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress). You can modify any field of the address and optionally set it as the customer's default address.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer whose address is being updated.

  * address​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the address to update.

  * address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    Specifies the fields to use when updating the address.

  * set​As​Default

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether to set the address as the customer's default address.

  ***

* customer​Add​Tax​Exemptions

  [Customer​Add​Tax​Exemptions​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerAddTaxExemptionsPayload)

  Add tax exemptions for the customer.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer to update.

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    required

    The list of tax exemptions to add for the customer, in the format of an array or a comma-separated list. Example values: `["CA_BC_RESELLER_EXEMPTION", "CA_STATUS_CARD_EXEMPTION"]`, `"CA_BC_RESELLER_EXEMPTION, CA_STATUS_CARD_EXEMPTION"`.

  ***

* customer​Cancel​Data​Erasure

  [Customer​Cancel​Data​Erasure​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerCancelDataErasurePayload)

  Cancels a pending erasure of a customer's data. Read more [here](https://help.shopify.com/manual/privacy-and-security/privacy/processing-customer-data-requests#cancel-customer-data-erasure).

  To request an erasure of a customer's data use the [customerRequestDataErasure mutation](https://shopify.dev/api/admin-graphql/unstable/mutations/customerRequestDataErasure).

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer for whom to cancel a pending data erasure.

  ***

* customer​Create

  [Customer​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerCreatePayload)

  Creates a new [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) in the store.

  Accepts customer details including contact information, marketing consent preferences, and tax exemptions through the [`CustomerInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput) input object. You can also associate [`metafields`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput) and tags to organize and extend customer data.

  Apps using protected customer data must meet Shopify's [protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements).

  * input

    [Customer​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput)

    required

    ### Arguments

    The input fields to create a customer.

  ***

* customer​Delete

  [Customer​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerDeletePayload)

  Deletes a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) from the store. You can only delete customers who haven't placed any [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

  Apps using protected customer data must meet Shopify's [protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements).

  * input

    [Customer​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerDeleteInput)

    required

    ### Arguments

    Specifies the customer to delete.

  ***

* customer​Email​Marketing​Consent​Update

  [Customer​Email​Marketing​Consent​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerEmailMarketingConsentUpdatePayload)

  Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s email marketing consent information. The customer must have an email address to update their consent. Records the [marketing state](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-marketingState) (such as subscribed, pending, unsubscribed), [opt-in level](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-marketingOptInLevel), and when and where the customer gave or withdrew consent.

  * input

    [Customer​Email​Marketing​Consent​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentUpdateInput)

    required

    ### Arguments

    Specifies the input fields to update a customer's email marketing consent information.

  ***

* customer​Generate​Account​Activation​Url

  [Customer​Generate​Account​Activation​Url​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerGenerateAccountActivationUrlPayload)

  Generates a one-time activation URL for a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) whose legacy customer account isn't yet enabled. Use this after importing customers or creating accounts that need activation.

  The generated URL expires after 30 days and becomes invalid if you generate a new one.

  ***

  Note

  The generated URL only works when legacy customer accounts are enabled on the shop. It only works for customers with disabled or invited [`account states`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.state). Attempting to generate a URL for an already-enabled customer returns an error.

  ***

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer that the URL is generated for.

  ***

* customer​Merge

  [Customer​Merge​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerMergePayload)

  Merges two customers.

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

* customer​Payment​Method​Credit​Card​Create

  [Customer​Payment​Method​Credit​Card​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerPaymentMethodCreditCardCreatePayload)

  Creates a credit card payment method for a customer using a session id. These values are only obtained through card imports happening from a PCI compliant environment. Please use customerPaymentMethodRemoteCreate if you are not managing credit cards directly.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer.

  * billing​Address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    The billing address.

  * session​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The Cardserver session ID. Obtained by storing card data with Shopify's Cardsink. Exchanging raw card data for a session ID must be done in a PCI complaint environment.

  ***

* customer​Payment​Method​Credit​Card​Update

  [Customer​Payment​Method​Credit​Card​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerPaymentMethodCreditCardUpdatePayload)

  Updates the credit card payment method for a customer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer payment method.

  * billing​Address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    The billing address.

  * session​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The Cardserver session ID.

  ***

* customer​Payment​Method​Get​Update​Url

  [Customer​Payment​Method​Get​Update​Url​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerPaymentMethodGetUpdateUrlPayload)

  Returns a URL that allows the customer to update a specific payment method.

  Currently, `customerPaymentMethodGetUpdateUrl` only supports Shop Pay.

  * customer​Payment​Method​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The payment method to be updated.

  ***

* customer​Payment​Method​Paypal​Billing​Agreement​Create

  [Customer​Payment​Method​Paypal​Billing​Agreement​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerPaymentMethodPaypalBillingAgreementCreatePayload)

  Creates a PayPal billing agreement for a customer.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer.

  * billing​Address

    [Mailing​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    The billing address.

  * billing​Agreement​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The billing agreement ID from PayPal that starts with 'B-' (for example, `B-1234XXXXX`).

  * inactive

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the PayPal billing agreement is inactive.

  ***

* customer​Payment​Method​Paypal​Billing​Agreement​Update

  [Customer​Payment​Method​Paypal​Billing​Agreement​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerPaymentMethodPaypalBillingAgreementUpdatePayload)

  Updates a PayPal billing agreement for a customer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer payment method.

  * billing​Address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    The billing address.

  ***

* customer​Payment​Method​Remote​Create

  [Customer​Payment​Method​Remote​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerPaymentMethodRemoteCreatePayload)

  Creates a customer payment method using identifiers from remote payment gateways like Stripe, Authorize.Net, or Braintree. Imports existing payment methods from external gateways and associates them with [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) objects in Shopify.

  The operation processes payment methods asynchronously. The returned [`CustomerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod) initially has incomplete details while Shopify validates and processes the remote gateway information. Use the [`customerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerPaymentMethod) query to retrieve the payment method status until all details are available or the payment method is revoked.

  Learn more about [migrating customer payment methods from remote gateways](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/migrate-to-subscriptions-api/migrate-customer-information#step-2-import-payment-methods-for-customers).

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer.

  * remote​Reference

    [Customer​Payment​Method​Remote​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerPaymentMethodRemoteInput)

    required

    Remote gateway payment method details.

  ***

* customer​Payment​Method​Revoke

  [Customer​Payment​Method​Revoke​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerPaymentMethodRevokePayload)

  Revokes a customer's payment method.

  * customer​Payment​Method​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer payment method to be revoked.

  ***

* customer​Payment​Method​Send​Update​Email

  [Customer​Payment​Method​Send​Update​Email​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerPaymentMethodSendUpdateEmailPayload)

  Sends a link to the customer so they can update a specific payment method.

  * customer​Payment​Method​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The payment method to be updated.

  * email

    [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

    Specifies the payment method update email fields. Only the 'from' and 'bcc' fields are accepted for input.

  ***

* customer​Remove​Tax​Exemptions

  [Customer​Remove​Tax​Exemptions​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerRemoveTaxExemptionsPayload)

  Remove tax exemptions from a customer.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer to update.

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    required

    The list of tax exemptions to remove for the customer, in the format of an array or a comma-separated list. Example values: `["CA_BC_RESELLER_EXEMPTION", "A_STATUS_CARD_EXEMPTION"]`, `"CA_BC_RESELLER_EXEMPTION, CA_STATUS_CARD_EXEMPTION"`.

  ***

* customer​Replace​Tax​Exemptions

  [Customer​Replace​Tax​Exemptions​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerReplaceTaxExemptionsPayload)

  Replace tax exemptions for a customer.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer to update.

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    required

    The list of tax exemptions that will replace the current exemptions for a customer. Can be an array or a comma-separated list. Example values: `["CA_BC_RESELLER_EXEMPTION", "A_STATUS_CARD_EXEMPTION"]`, `"CA_BC_RESELLER_EXEMPTION, CA_STATUS_CARD_EXEMPTION"`.

  ***

* customer​Request​Data​Erasure

  [Customer​Request​Data​Erasure​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerRequestDataErasurePayload)

  Enqueues a request to erase customer's data. Read more [here](https://help.shopify.com/manual/privacy-and-security/privacy/processing-customer-data-requests#erase-customer-personal-data).

  To cancel the data erasure request use the [customerCancelDataErasure mutation](https://shopify.dev/api/admin-graphql/unstable/mutations/customerCancelDataErasure).

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer to erase.

  ***

* customer​Segment​Members​Query​Create

  [Customer​Segment​Members​Query​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerSegmentMembersQueryCreatePayload)

  Creates a customer segment members query.

  * input

    [Customer​Segment​Members​Query​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSegmentMembersQueryInput)

    required

    ### Arguments

    The input fields to create a customer segment members query.

  ***

* customer​Send​Account​Invite​Email

  [Customer​Send​Account​Invite​Email​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerSendAccountInviteEmailPayload)

  Sends an email invitation for a customer to create a legacy customer account. The invitation lets customers set up their password and activate their account in the online store.

  You can optionally customize the email content including the subject, sender, recipients, and message body. If you don't provide email customization, the store uses its default account invitation template.

  ***

  Note

  The invite only works when legacy customer accounts are enabled on the shop.

  ***

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer to whom an account invite email is to be sent.

  * email

    [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

    Specifies the account invite email fields.

  ***

* customer​Set

  [Customer​Set​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerSetPayload)

  Creates or updates a customer in a single mutation.

  Use this mutation when syncing information from an external data source into Shopify.

  This mutation can be used to create a new customer, update an existing customer by id, or upsert a customer by a unique key (email or phone).

  To create a new customer omit the `identifier` argument. To update an existing customer, include the `identifier` with the id of the customer to update.

  To perform an 'upsert' by unique key (email or phone) use the `identifier` argument to upsert a customer by a unique key (email or phone). If a customer with the specified unique key exists, it will be updated. If not, a new customer will be created with that unique key.

  As of API version 2022-10, apps using protected customer data must meet the protected customer data [requirements](https://shopify.dev/apps/store/data-protection/protected-customer-data)

  Any list field (e.g. [addresses](https://shopify.dev/api/admin-graphql/unstable/input-objects/MailingAddressInput), will be updated so that all included entries are either created or updated, and all existing entries not included will be deleted.

  All other fields will be updated to the value passed. Omitted fields will not be updated.

  * input

    [Customer​Set​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSetInput)

    required

    ### Arguments

    The properties of the customer.

  * identifier

    [Customer​Set​Identifiers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSetIdentifiers)

    Specifies the identifier that will be used to lookup the resource.

  ***

* customer​Sms​Marketing​Consent​Update

  [Customer​Sms​Marketing​Consent​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerSmsMarketingConsentUpdatePayload)

  Updates a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s SMS marketing consent information. The customer must have a phone number on their account to receive SMS marketing.

  You can set whether the customer subscribes or unsubscribes to SMS marketing and specify the [opt-in level](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate#arguments-input.fields.smsMarketingConsent.marketingOptInLevel). Optionally include when the consent was collected and which [location](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate#arguments-input.fields.smsMarketingConsent.sourceLocationId) collected it.

  * input

    [Customer​Sms​Marketing​Consent​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentUpdateInput)

    required

    ### Arguments

    Specifies the input fields to update a customer's SMS marketing consent information.

  ***

* customer​Update

  [Customer​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerUpdatePayload)

  Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s attributes including personal information and [`tax exemptions`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption).

  Apps using protected customer data must meet Shopify's [protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements).

  * input

    [Customer​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput)

    required

    ### Arguments

    Provides updated fields for the customer. To set marketing consent, use the `customerEmailMarketingConsentUpdate` or `customerSmsMarketingConsentUpdate` mutations instead.

  ***

* customer​Update​Default​Address

  [Customer​Update​Default​Address​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CustomerUpdateDefaultAddressPayload)

  Updates a customer's default address.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer whose default address is being updated.

  * address​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer's new default address.

  ***

* data​Sale​Opt​Out

  [Data​Sale​Opt​Out​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DataSaleOptOutPayload)

  Opt out a customer from data sale.

  * email

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The email address of the customer to opt out of data sale.

  ***

* delegate​Access​Token​Create

  [Delegate​Access​Token​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DelegateAccessTokenCreatePayload)

  Creates a [`DelegateAccessToken`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessToken) with a subset of the parent token's permissions.

  Delegate access tokens enable secure permission delegation to subsystems or services that need limited access to shop resources. Each token inherits only the scopes you specify, ensuring subsystems operate with minimal required permissions rather than full app access.

  Learn more about [delegating access tokens to subsystems](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/use-delegate-tokens).

  * input

    [Delegate​Access​Token​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DelegateAccessTokenInput)

    required

    ### Arguments

    The input fields for creating a delegate access token.

  ***

* delegate​Access​Token​Destroy

  [Delegate​Access​Token​Destroy​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DelegateAccessTokenDestroyPayload)

  Destroys a delegate access token.

  * access​Token

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Provides the delegate access token to destroy.

  ***

* delivery​Customization​Activation

  [Delivery​Customization​Activation​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DeliveryCustomizationActivationPayload)

  Activates and deactivates delivery customizations.

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global IDs of the delivery customizations.

  * enabled

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    The enabled status of the delivery customizations.

  ***

* delivery​Customization​Create

  [Delivery​Customization​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DeliveryCustomizationCreatePayload)

  Creates a delivery customization.

  * delivery​Customization

    [Delivery​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCustomizationInput)

    required

    ### Arguments

    The input data used to create the delivery customization.

  ***

* delivery​Customization​Delete

  [Delivery​Customization​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DeliveryCustomizationDeletePayload)

  Creates a delivery customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the delivery customization.

  ***

* delivery​Customization​Update

  [Delivery​Customization​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DeliveryCustomizationUpdatePayload)

  Updates a delivery customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the delivery customization.

  * delivery​Customization

    [Delivery​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCustomizationInput)

    required

    The input data used to update the delivery customization.

  ***

* delivery​Profile​Create

  [Delivery​Profile​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DeliveryProfileCreatePayload)

  Creates a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) that defines shipping rates for specific products and locations.

  A delivery profile groups products with their shipping zones and rates. You can associate profiles with [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to customize shipping for subscriptions and pre-orders. Each profile contains [`DeliveryProfileLocationGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup) objects that specify which [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects ship to which [`DeliveryZone`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone) objects with specific [`DeliveryMethodDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinition) objects and rates.

  Learn more about [building delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

  * profile

    [Delivery​Profile​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput)

    required

    ### Arguments

    Specifies the input fields for a delivery profile.

  ***

* delivery​Profile​Remove

  [Delivery​Profile​Remove​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DeliveryProfileRemovePayload)

  Enqueue the removal of a delivery profile.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the delivery profile to remove.

  ***

* delivery​Profile​Update

  [Delivery​Profile​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DeliveryProfileUpdatePayload)

  Updates a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)'s configuration, including its shipping zones, rates, and associated products.

  Modify location groups to control which fulfillment [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects serve specific geographic areas. Add or remove shipping zones with custom countries and provinces. Create or update shipping methods with rate definitions and delivery conditions. Associate or dissociate [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects and [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to determine which products use this profile's shipping rules.

  The mutation supports partial updates through dedicated input fields for creating, updating, and deleting specific components without affecting the entire profile structure.

  Learn more about [building delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the delivery profile to update.

  * profile

    [Delivery​Profile​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput)

    required

    Specifies the input fields for a delivery profile.

  * leave​Legacy​Mode​Profiles

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Deprecated

  ***

* delivery​Promise​Participants​Update

  [Delivery​Promise​Participants​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DeliveryPromiseParticipantsUpdatePayload)

  Updates the delivery promise participants by adding or removing owners based on a branded promise handle.

  * branded​Promise​Handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The branded promise handle to update the delivery promise participants for.

  * owners​To​Add

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Default:\[]

    The owners to add to the delivery promise participants.

  * owners​To​Remove

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Default:\[]

    The owners to remove from the delivery promise participants.

  ***

* delivery​Promise​Provider​Upsert

  [Delivery​Promise​Provider​Upsert​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DeliveryPromiseProviderUpsertPayload)

  Creates or updates a delivery promise provider. Currently restricted to select approved delivery promise partners.

  * active

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    ### Arguments

    Whether the delivery promise provider is active. Defaults to `true` when creating a provider.

  * fulfillment​Delay

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of seconds to add to the current time as a buffer when looking up delivery promises. Represents how long the shop requires before releasing an order to the fulfillment provider.

  * time​Zone

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The time zone to be used for interpreting day of week and cutoff times in delivery schedules when looking up delivery promises. Defaults to `UTC` when creating a provider.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the location that will be associated with the delivery promise provider.

  ***

* delivery​Setting​Update

  [Delivery​Setting​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DeliverySettingUpdatePayload)

  Set the delivery settings for a shop.

  * setting

    [Delivery​Setting​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliverySettingInput)

    required

    ### Arguments

    Specifies the input fields for the delivery shop level settings.

  ***

* delivery​Shipping​Origin​Assign

  [Delivery​Shipping​Origin​Assign​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DeliveryShippingOriginAssignPayload)

  Assigns a location as the shipping origin while using legacy compatibility mode for multi-location delivery profiles.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the location to assign as the shipping origin.

  ***

* discount​Automatic​Activate

  [Discount​Automatic​Activate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountAutomaticActivatePayload)

  Activates an automatic discount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic discount to activate.

  ***

* discount​Automatic​App​Create

  [Discount​Automatic​App​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountAutomaticAppCreatePayload)

  Creates an automatic discount that's managed by an app. Use this mutation with [Shopify Functions](https://shopify.dev/docs/apps/build/functions) when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  For example, use this mutation to create an automatic discount using an app's "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  Note

  To create code discounts with custom logic, use the [`discountCodeAppCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate) mutation.

  ***

  * automatic​App​Discount

    [Discount​Automatic​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput)

    required

    ### Arguments

    The input data used to create the automatic discount.

  ***

* discount​Automatic​App​Update

  [Discount​Automatic​App​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountAutomaticAppUpdatePayload)

  Updates an existing automatic discount that's managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use this mutation when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  For example, use this mutation to update a new "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  Note

  To update code discounts with custom logic, use the [`discountCodeAppUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppUpdate) mutation instead.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic discount to update.

  * automatic​App​Discount

    [Discount​Automatic​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput)

    required

    The input fields required to update the automatic discount.

  ***

* discount​Automatic​Basic​Create

  [Discount​Automatic​Basic​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountAutomaticBasicCreatePayload)

  Creates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's automatically applied on a cart and at checkout.

  ***

  Note

  To create code discounts, use the [`discountCodeBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate) mutation.

  ***

  * automatic​Basic​Discount

    [Discount​Automatic​Basic​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput)

    required

    ### Arguments

    The input data used to create the automatic amount off discount.

  ***

* discount​Automatic​Basic​Update

  [Discount​Automatic​Basic​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountAutomaticBasicUpdatePayload)

  Updates an existing [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's automatically applied on a cart and at checkout.

  ***

  Note

  To update code discounts, use the [`discountCodeBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate) mutation instead.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic amount off discount to update.

  * automatic​Basic​Discount

    [Discount​Automatic​Basic​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput)

    required

    The input data used to update the automatic amount off discount.

  ***

* discount​Automatic​Bulk​Delete

  [Discount​Automatic​Bulk​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountAutomaticBulkDeletePayload)

  Deletes multiple automatic discounts in a single operation, providing efficient bulk management for stores with extensive discount catalogs. This mutation processes deletions asynchronously to handle large volumes without blocking other operations.

  For example, when cleaning up expired seasonal promotions or removing outdated automatic discounts across product categories, merchants can delete dozens of discounts simultaneously rather than processing each individually.

  Use `DiscountAutomaticBulkDelete` to:

  * Remove multiple automatic discounts efficiently
  * Clean up expired or obsolete promotions
  * Streamline discount management workflows
  * Process large-scale discount removals asynchronously

  The operation returns a job object for tracking deletion progress and any validation errors encountered during processing.

  Learn more about [discount management](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomatic).

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The search query for filtering automatic discounts to delete.

    For more information on the list of supported fields and search syntax, refer to the [AutomaticDiscountNodes query section](https://shopify.dev/api/admin-graphql/latest/queries/automaticDiscountNodes#argument-automaticdiscountnodes-query).

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search to use for filtering automatic discounts to delete.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the automatic discounts to delete.

  ***

* discount​Automatic​Bxgy​Create

  [Discount​Automatic​Bxgy​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountAutomaticBxgyCreatePayload)

  Creates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

  ***

  Note

  To create code discounts, use the [`discountCodeBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate) mutation.

  ***

  * automatic​Bxgy​Discount

    [Discount​Automatic​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput)

    required

    ### Arguments

    The input data used to create the automatic BXGY discount.

  ***

* discount​Automatic​Bxgy​Update

  [Discount​Automatic​Bxgy​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountAutomaticBxgyUpdatePayload)

  Updates an existing [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

  ***

  Note

  To update code discounts, use the [`discountCodeBxgyUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate) mutation instead.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic BXGY discount to update.

  * automatic​Bxgy​Discount

    [Discount​Automatic​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput)

    required

    The input data used to update the automatic BXGY discount.

  ***

* discount​Automatic​Deactivate

  [Discount​Automatic​Deactivate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountAutomaticDeactivatePayload)

  Deactivates an automatic discount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic discount to deactivate.

  ***

* discount​Automatic​Delete

  [Discount​Automatic​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountAutomaticDeletePayload)

  Deletes an existing automatic discount from the store, permanently removing it from all future order calculations. This mutation provides a clean way to remove promotional campaigns that are no longer needed.

  For example, when a seasonal promotion ends or a flash sale concludes, merchants can use this mutation to ensure the discount no longer applies to new orders while preserving historical order data.

  Use `DiscountAutomaticDelete` to:

  * Remove expired promotional campaigns
  * Clean up test discounts during development
  * Delete automatic discounts that conflict with new promotions
  * Maintain a clean discount configuration

  The mutation returns the ID of the deleted discount for confirmation and any validation errors if the deletion cannot be completed. Once deleted, the automatic discount will no longer appear in discount lists or apply to new customer orders.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic discount to delete.

  ***

* discount​Automatic​Free​Shipping​Create

  [Discount​Automatic​Free​Shipping​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountAutomaticFreeShippingCreatePayload)

  Creates automatic free shipping discounts that apply to qualifying orders without requiring discount codes. These promotions automatically activate when customers meet specified criteria, streamlining the checkout experience.

  For example, a store might create an automatic free shipping discount for orders over variable pricing to encourage larger purchases, or offer free shipping to specific customer segments during promotional periods.

  Use `DiscountAutomaticFreeShippingCreate` to:

  * Set up code-free shipping promotions
  * Create order value-based shipping incentives
  * Target specific customer groups with shipping benefits
  * Establish location-based shipping discounts

  The mutation validates discount configuration and returns the created automatic discount node along with any configuration errors that need resolution.

  Learn more about [automatic discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode).

  * free​Shipping​Automatic​Discount

    [Discount​Automatic​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput)

    required

    ### Arguments

    The input data used to create the automatic free shipping discount.

  ***

* discount​Automatic​Free​Shipping​Update

  [Discount​Automatic​Free​Shipping​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountAutomaticFreeShippingUpdatePayload)

  Updates existing automatic free shipping discounts, allowing merchants to modify promotion criteria, shipping destinations, and eligibility requirements without recreating the entire discount structure.

  For example, extending a holiday free shipping promotion to include additional countries, adjusting the minimum order value threshold, or expanding customer eligibility to include new segments.

  Use `DiscountAutomaticFreeShippingUpdate` to:

  * Modify shipping discount thresholds and criteria
  * Expand or restrict geographic availability
  * Update customer targeting and eligibility rules
  * Adjust promotion timing and activation periods

  Changes take effect immediately for new orders, while the mutation validates all modifications and reports any configuration conflicts through user errors.

  Learn more about [managing automatic discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic free shipping discount to update.

  * free​Shipping​Automatic​Discount

    [Discount​Automatic​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput)

    required

    The input data used to update the automatic free shipping discount.

  ***

* discount​Code​Activate

  [Discount​Code​Activate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountCodeActivatePayload)

  Activates a previously created code discount, making it available for customers to use during checkout. This mutation transitions inactive discount codes into an active state where they can be applied to orders.

  For example, after creating a "SUMMER20" discount code but leaving it inactive during setup, merchants can activate it when ready to launch their summer promotion campaign.

  Use `DiscountCodeActivate` to:

  * Launch scheduled promotional campaigns
  * Reactivate previously paused discount codes
  * Enable discount codes after configuration changes
  * Control the timing of discount availability

  The mutation returns the updated discount code node with its new active status and handles any validation errors that might prevent activation, such as conflicting discount rules or invalid date ranges.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the code discount to activate.

  ***

* discount​Code​App​Create

  [Discount​Code​App​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountCodeAppCreatePayload)

  Creates a code discount. The discount type must be provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Functions can implement [order](https://shopify.dev/docs/api/functions/reference/order-discounts), [product](https://shopify.dev/docs/api/functions/reference/product-discounts), or [shipping](https://shopify.dev/docs/api/functions/reference/shipping-discounts) discount functions. Use this mutation with Shopify Functions when you need custom logic beyond [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  For example, use this mutation to create a code discount using an app's "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  Note

  To create automatic discounts with custom logic, use [`discountAutomaticAppCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate).

  ***

  * code​App​Discount

    [Discount​Code​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput)

    required

    ### Arguments

    The input data used to create the discount.

  ***

* discount​Code​App​Update

  [Discount​Code​App​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountCodeAppUpdatePayload)

  Updates a code discount, where the discount type is provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use this mutation when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  ***

  Note

  To update automatic discounts, use [`discountAutomaticAppUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppUpdate).

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the discount to update.

  * code​App​Discount

    [Discount​Code​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput)

    required

    The input fields required to update the discount.

  ***

* discount​Code​Basic​Create

  [Discount​Code​Basic​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountCodeBasicCreatePayload)

  Creates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

  ***

  Note

  To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate) mutation.

  ***

  * basic​Code​Discount

    [Discount​Code​Basic​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput)

    required

    ### Arguments

    The input data used to create the discount code.

  ***

* discount​Code​Basic​Update

  [Discount​Code​Basic​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountCodeBasicUpdatePayload)

  Updates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

  ***

  Note

  To update discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate) mutation.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the discount code to update.

  * basic​Code​Discount

    [Discount​Code​Basic​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput)

    required

    The input data used to update the discount code.

  ***

* discount​Code​Bulk​Activate

  [Discount​Code​Bulk​Activate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountCodeBulkActivatePayload)

  Activates multiple [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following:

  * A search query
  * A saved search ID
  * A list of discount code IDs

  For example, you can activate discounts for all codes that match a search criteria, or activate a predefined set of discount codes.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The search query for filtering discounts.\
    \
    For more information on the list of supported fields and search syntax, refer to the [`codeDiscountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#query-arguments) query.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search for filtering discounts to activate. Saved searches represent [customer segments](https://help.shopify.com/manual/customers/customer-segments) that merchants have built in the Shopify admin.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the discounts to activate.

  ***

* discount​Code​Bulk​Deactivate

  [Discount​Code​Bulk​Deactivate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountCodeBulkDeactivatePayload)

  Deactivates multiple [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following:

  * A search query
  * A saved search ID
  * A list of discount code IDs

  For example, you can deactivate discounts for all codes that match a search criteria, or deactivate a predefined set of discount codes.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The search query for filtering discounts.\
    \
    For more information on the list of supported fields and search syntax, refer to the [`codeDiscountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#query-arguments) query.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search for filtering discounts to deactivate. Saved searches represent [customer segments](https://help.shopify.com/manual/customers/customer-segments) that merchants have built in the Shopify admin.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the discounts to deactivate.

  ***

* discount​Code​Bulk​Delete

  [Discount​Code​Bulk​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountCodeBulkDeletePayload)

  Deletes multiple [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following:

  * A search query
  * A saved search ID
  * A list of discount code IDs

  For example, you can delete discounts for all codes that match a search criteria, or delete a predefined set of discount codes.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The search query for filtering discounts.\
    \
    For more information on the list of supported fields and search syntax, refer to the [`codeDiscountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#query-arguments) query.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search for filtering discounts to delete. Saved searches represent [customer segments](https://help.shopify.com/manual/customers/customer-segments) that merchants have built in the Shopify admin.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the discounts to delete.

  ***

* discount​Code​Bxgy​Create

  [Discount​Code​Bxgy​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountCodeBxgyCreatePayload)

  Creates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

  ***

  Note

  To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate) mutation.

  ***

  * bxgy​Code​Discount

    [Discount​Code​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput)

    required

    ### Arguments

    The input data used to create the BXGY code discount.

  ***

* discount​Code​Bxgy​Update

  [Discount​Code​Bxgy​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountCodeBxgyUpdatePayload)

  Updates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

  ***

  Note

  To update discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBxgyUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate) mutation.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the BXGY code discount to update.

  * bxgy​Code​Discount

    [Discount​Code​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput)

    required

    The input data used to update the BXGY code discount.

  ***

* discount​Code​Deactivate

  [Discount​Code​Deactivate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountCodeDeactivatePayload)

  Temporarily suspends a code discount without permanently removing it from the store. Deactivation allows merchants to pause promotional campaigns while preserving the discount configuration for potential future use.

  For example, when a flash sale needs to end immediately or a discount code requires temporary suspension due to inventory issues, merchants can deactivate it to stop new redemptions while keeping the discount structure intact.

  Use `DiscountCodeDeactivate` to:

  * Pause active promotional campaigns timely
  * Temporarily suspend problematic discount codes
  * Control discount availability during inventory shortages
  * Maintain discount history while stopping usage

  Deactivated discounts remain in the system and can be reactivated later, unlike deletion which persistently removes the code. Customers attempting to use deactivated codes will receive appropriate error messages.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the code discount to deactivate.

  ***

* discount​Code​Delete

  [Discount​Code​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountCodeDeletePayload)

  Removes a code discount from the store, making it permanently unavailable for customer use. This mutation provides a clean way to eliminate discount codes that are no longer needed or have been replaced.

  For example, when a seasonal promotion ends or a discount code has been compromised, merchants can delete it entirely rather than just deactivating it, ensuring customers cannot attempt to use expired promotional codes.

  Use `DiscountCodeDelete` to:

  * persistently remove outdated promotional codes
  * Clean up discount code lists after campaigns end
  * Eliminate compromised or leaked discount codes
  * Maintain organized discount management

  Once deleted, the discount code cannot be recovered and any customer attempts to use it will fail. This differs from deactivation, which preserves the code for potential future reactivation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the code discount to delete.

  ***

* discount​Code​Free​Shipping​Create

  [Discount​Code​Free​Shipping​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountCodeFreeShippingCreatePayload)

  Creates an [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

  ***

  Note

  To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticFreeShippingCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate) mutation.

  ***

  * free​Shipping​Code​Discount

    [Discount​Code​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput)

    required

    ### Arguments

    The input data used to create the discount code.

  ***

* discount​Code​Free​Shipping​Update

  [Discount​Code​Free​Shipping​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountCodeFreeShippingUpdatePayload)

  Updates a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

  ***

  Note

  To update a free shipping discount that's automatically applied on a cart and at checkout, use the [`discountAutomaticFreeShippingUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate) mutation.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the discount code to update.

  * free​Shipping​Code​Discount

    [Discount​Code​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput)

    required

    The input data used to update the discount code.

  ***

* discount​Code​Redeem​Code​Bulk​Delete

  [Discount​Code​Redeem​Code​Bulk​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountCodeRedeemCodeBulkDeletePayload)

  Asynchronously delete [discount codes](https://help.shopify.com/manual/discounts/discount-types#discount-codes) in bulk that customers can use to redeem a discount.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [`DiscountCodeNode`](https://help.shopify.com/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-id) object that the codes will be removed from. For example, `gid://shopify/DiscountCodeNode/123`. You can use the [`codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes) to retrieve the ID.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators that you can use to search for code discounts. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax).

    For a list of accepted values for the `search` field, refer to the [`query` argument on the `codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#argument-query).

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/docs/api/admin-graphql/latest/objects/savedsearch#field-id).

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the [`DiscountRedeemCode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcode#field-id) objects to delete. For example, `gid://shopify/DiscountRedeemCode/123`. You can use the [`codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes) to retrieve the ID.

  ***

* discount​Redeem​Code​Bulk​Add

  [Discount​Redeem​Code​Bulk​Add​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DiscountRedeemCodeBulkAddPayload)

  Asynchronously add [discount codes](https://help.shopify.com/manual/discounts/discount-types#discount-codes) in bulk that customers can use to redeem a discount. You can use the `discountRedeemCodeBulkAdd` mutation to automate the distribution of discount codes through emails or other marketing channels.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [`DiscountCodeNode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-id) object that the codes will be added to. For example, `gid://shopify/DiscountCodeNode/123`. You can use the [`codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes) to retrieve the ID.

  * codes

    [\[Discount​Redeem​Code​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountRedeemCodeInput)

    required

    The list of codes to associate with the [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes). Maximum: 250 codes.

  ***

* dispute​Evidence​Update

  [Dispute​Evidence​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DisputeEvidenceUpdatePayload)

  Updates a dispute evidence.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the dispute evidence to be updated.

  * input

    [Shopify​Payments​Dispute​Evidence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopifyPaymentsDisputeEvidenceUpdateInput)

    required

    The updated properties for a dispute evidence.

  ***

* draft​Order​Bulk​Add​Tags

  [Draft​Order​Bulk​Add​Tags​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DraftOrderBulkAddTagsPayload)

  Adds tags to multiple draft orders.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The conditions for filtering draft orders on. See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax).

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order saved search for filtering draft orders on.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the draft orders to add tags to.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    List of tags to be added.

  ***

* draft​Order​Bulk​Delete

  [Draft​Order​Bulk​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DraftOrderBulkDeletePayload)

  Deletes multiple draft orders.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The conditions for filtering draft orders on. See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax).

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order saved search for filtering draft orders on.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the draft orders to delete.

  ***

* draft​Order​Bulk​Remove​Tags

  [Draft​Order​Bulk​Remove​Tags​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DraftOrderBulkRemoveTagsPayload)

  Removes tags from multiple draft orders.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The conditions for filtering draft orders on. See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax).

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order saved search for filtering draft orders on.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the draft orders to remove tags from.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    List of tags to be removed.

  ***

* draft​Order​Calculate

  [Draft​Order​Calculate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DraftOrderCalculatePayload)

  Calculates the properties of a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) without creating it. Returns pricing information including [`CalculatedDraftOrderLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem) totals, shipping charges, applicable discounts, and tax calculations based on the provided [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) and [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) information.

  Use this mutation to preview total taxes and prices before creating a draft order. It's particularly useful when working with B2B [`PurchasingEntity`](https://shopify.dev/docs/api/admin-graphql/latest/unions/PurchasingEntity) or when you need to determine costs without committing to a draft order. Learn more about [calculating draft orders for B2B purchasing entities](https://shopify.dev/docs/apps/build/b2b/draft-orders#step-1-calculate-a-draft-order-for-a-purchasing-entity).

  * input

    [Draft​Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput)

    required

    ### Arguments

    The fields for the draft order.

  ***

* draft​Order​Complete

  [Draft​Order​Complete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DraftOrderCompletePayload)

  Completes a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) and converts it into a [regular order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The order appears in the merchant's orders list, and the customer can be notified about their order.

  Use the `draftOrderComplete` mutation when a merchant is ready to finalize a draft order and create a real order in their store. The `draftOrderComplete` mutation also supports sales channel attribution for tracking order sources using the [`sourceName`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete#arguments-sourceName) argument, [cart validation](https://shopify.dev/docs/apps/build/checkout/cart-checkout-validation) controls for app integrations, and detailed error reporting for failed completions.

  You can complete a draft order with different [payment scenarios](https://help.shopify.com/manual/fulfillment/managing-orders/payments):

  * Mark the order as paid immediately.
  * Set the order as payment pending using [payment terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms).
  * Specify a custom payment amount.
  * Select a specific payment gateway.

  ***

  Note

  When completing a draft order, inventory is [reserved](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps#inventory-states) for the items in the order. This means the items will no longer be available for other customers to purchase. Make sure to verify inventory availability before completing the draft order.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The draft order to complete.

  * payment​Pending

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:false

  * payment​Gateway​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The gateway for the completed draft order.

  * source​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A channel definition handle used for sales channel attribution.

  ***

* draft​Order​Create

  [Draft​Order​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DraftOrderCreatePayload)

  Creates a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) with attributes such as customer information, line items, shipping and billing addresses, and payment terms. Draft orders are useful for merchants that need to:

  * Create new orders for sales made by phone, in person, by chat, or elsewhere. When a merchant accepts payment for a draft order, an order is created.
  * Send invoices to customers with a secure checkout link.
  * Use custom items to represent additional costs or products not in inventory.
  * Re-create orders manually from active sales channels.
  * Sell products at discount or wholesale rates.
  * Take pre-orders.

  After creating a draft order, you can:

  * Send an invoice to the customer using the [`draftOrderInvoiceSend`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend) mutation.
  * Complete the draft order using the [`draftOrderComplete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete) mutation.
  * Update the draft order using the [`draftOrderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderUpdate) mutation.
  * Duplicate a draft order using the [`draftOrderDuplicate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDuplicate) mutation.
  * Delete the draft order using the [`draftOrderDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDelete) mutation.

  ***

  Note

  When you create a draft order, you can't [reserve or hold inventory](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps#inventory-states) for the items in the order by default. However, you can reserve inventory using the [`reserveInventoryUntil`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate#arguments-input.fields.reserveInventoryUntil) input.

  ***

  * input

    [Draft​Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput)

    required

    ### Arguments

    The fields used to create the draft order.

  ***

* draft​Order​Create​From​Order

  [Draft​Order​Create​From​Order​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DraftOrderCreateFromOrderPayload)

  Creates a draft order from order.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the order's id that we create the draft order from.

  ***

* draft​Order​Delete

  [Draft​Order​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DraftOrderDeletePayload)

  Deletes a draft order.

  * input

    [Draft​Order​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderDeleteInput)

    required

    ### Arguments

    Specify the draft order to delete by its ID.

  ***

* draft​Order​Duplicate

  [Draft​Order​Duplicate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DraftOrderDuplicatePayload)

  Duplicates a draft order.

  * draft​Order​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Deprecated

    ### Arguments

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order to duplicate.

  ***

* draft​Order​Invoice​Preview

  [Draft​Order​Invoice​Preview​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DraftOrderInvoicePreviewPayload)

  Previews a draft order invoice email.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the draft order invoice email to preview.

  * email

    [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

    Specifies the draft order invoice email fields.

  ***

* draft​Order​Invoice​Send

  [Draft​Order​Invoice​Send​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DraftOrderInvoiceSendPayload)

  Sends an invoice email for a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder). The invoice includes a secure checkout link for reviewing and paying for the order. Use the [`email`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend#arguments-email) argument to customize the email, such as the subject and message.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the draft order to send the invoice for.

  * email

    [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

    Specifies the draft order invoice email fields.

  ***

* draft​Order​Update

  [Draft​Order​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/DraftOrderUpdatePayload)

  Updates a draft order.

  If a checkout has been started for a draft order, any update to the draft will unlink the checkout. Checkouts are created but not immediately completed when opening the merchant credit card modal in the admin, and when a buyer opens the invoice URL. This is usually fine, but there is an edge case where a checkout is in progress and the draft is updated before the checkout completes. This will not interfere with the checkout and order creation, but if the link from draft to checkout is broken the draft will remain open even after the order is created.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the draft order to update.

  * input

    [Draft​Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput)

    required

    The draft order properties to update.

  ***

* event​Bridge​Server​Pixel​Update

  [Event​Bridge​Server​Pixel​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/EventBridgeServerPixelUpdatePayload)

  Updates the server pixel to connect to an EventBridge endpoint. Running this mutation deletes any previous subscriptions for the server pixel.

  * arn

    [ARN!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ARN)

    required

    ### Arguments

    The ARN for the EventBridge endpoint to which customer events are to be sent.

  ***

* file​Acknowledge​Update​Failed

  [File​Acknowledge​Update​Failed​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FileAcknowledgeUpdateFailedPayload)

  Acknowledges file update failure by resetting FAILED status to READY and clearing any media errors.

  * file​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the file(s) to acknowledge the failed updates of.

  ***

* file​Create

  [File​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FileCreatePayload)

  Creates file assets for a store from external URLs or files that were previously uploaded using the [`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate) mutation.

  Use the `fileCreate` mutation to add various types of media and documents to your store. These files are added to the [**Files** page](https://shopify.com/admin/settings/files) in the Shopify admin and can be referenced by other resources in your store.

  The `fileCreate` mutation supports multiple file types:

  * **Images**: Product photos, variant images, and general store imagery
  * **Videos**: Shopify-hosted videos for product demonstrations and marketing
  * **External videos**: YouTube and Vimeo videos for enhanced product experiences
  * **3D models**: Interactive 3D representations of products
  * **Generic files**: PDFs, documents, and other file types for store resources

  The mutation handles duplicate filenames using configurable resolution modes that automatically append UUIDs, replace existing files, or raise errors when conflicts occur.

  ***

  Note

  Files are processed asynchronously. Check the [`fileStatus`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File#fields-fileStatus) field to monitor processing completion. The maximum number of files that can be created in a single batch is 250.

  ***

  After creating files, you can make subsequent updates using the following mutations:

  * [`fileUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileUpdate): Update file properties such as alt text or replace file contents while preserving the same URL.
  * [`fileDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileDelete): Remove files from your store when they are no longer needed.

  To list all files in your store, use the [`files`](https://shopify.dev/docs/api/admin-graphql/latest/queries/files) query.

  Learn how to manage [product media and file assets](https://shopify.dev/docs/apps/build/online-store/product-media) in your app.

  * files

    [\[File​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileCreateInput)

    required

    ### Arguments

    List of new files to be created.

  ***

* file​Delete

  [File​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FileDeletePayload)

  Deletes file assets that were previously uploaded to your store.

  Use the `fileDelete` mutation to permanently remove media and file assets from your store when they are no longer needed. This mutation handles the complete removal of files from both your store's file library and any associated references to products or other resources.

  The `fileDelete` mutation supports removal of multiple file types:

  * **Images**: Product photos, variant images, and general store imagery
  * **Videos**: Shopify-hosted videos for product demonstrations and marketing content
  * **External Videos**: YouTube and Vimeo videos linked to your products
  * **3D models**: Interactive 3D representations of products
  * **Generic files**: PDFs, documents, and other file types stored in your [**Files** page](https://shopify.com/admin/settings/files)

  When you delete files that are referenced by products, the mutation automatically removes those references and reorders any remaining media to maintain proper positioning. Product file references are database relationships managed through a media reference system, not just links in product descriptions. The Shopify admin provides a UI to manage these relationships, and when files are deleted, the system automatically cleans up all references. Files that are currently being processed by other operations are rejected to prevent conflicts.

  ***

  Caution

  File deletion is permanent and can't be undone. When you delete a file that's being used in your store, it will immediately stop appearing wherever it was displayed. For example, if you delete a product image, that product will show a broken image or placeholder on your storefront and in the admin. The same applies to any other files linked from themes, blog posts, or pages. Before deleting files, you can use the [`files` query](https://shopify.dev/api/admin-graphql/latest/queries/files) to list and review your store's file assets.

  ***

  Learn how to manage [product media and file assets](https://shopify.dev/docs/apps/build/online-store/product-media) in your app.

  * file​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The IDs of the files to be deleted.

  ***

* file​Update

  [File​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FileUpdatePayload)

  Updates properties, content, and metadata associated with an existing file asset that has already been uploaded to Shopify.

  Use the `fileUpdate` mutation to modify various aspects of files already stored in your store. Files can be updated individually or in batches.

  The `fileUpdate` mutation supports updating multiple file properties:

  * **Alt text**: Update accessibility descriptions for images and other media.
  * **File content**: Replace image or generic file content while maintaining the same URL.
  * **Filename**: Modify file names (extension must match the original).
  * **Product references**: Add or remove associations between files and products. Removing file-product associations deletes the file from the product's media gallery and clears the image from any product variants that were using it.

  The mutation handles different file types with specific capabilities:

  * **Images**: Update preview images, original source, filename, and alt text.
  * **Generic files**: Update original source, filename, and alt text.
  * **Videos and 3D models**: Update alt text and product references.

  ***

  Note

  Files must be in `ready` state before they can be updated. The mutation includes file locking to prevent conflicts during updates. You can't simultaneously update both `originalSource` and `previewImageSource`.

  ***

  After updating files, you can use related mutations for additional file management:

  * [`fileCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate): Create new file assets from external URLs or staged uploads.
  * [`fileDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileDelete): Remove files from your store when they are no longer needed.

  Learn how to manage [product media and file assets](https://shopify.dev/docs/apps/build/online-store/product-media) in your app.

  * files

    [\[File​Update​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileUpdateInput)

    required

    ### Arguments

    List of files to be updated.

  ***

* flow​Trigger​Receive

  [Flow​Trigger​Receive​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FlowTriggerReceivePayload)

  Triggers any workflows that begin with the trigger specified in the request body. To learn more, refer to [*Create Shopify Flow triggers*](https://shopify.dev/apps/flow/triggers).

  * body

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

    ### Arguments

  * handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The handle of the trigger.

  * payload

    [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

    The payload needed to run the Trigger.

  ***

* fulfillment​Cancel

  [Fulfillment​Cancel​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentCancelPayload)

  Cancels an existing [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment) and reverses its effects on associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. When you cancel a fulfillment, the system creates new fulfillment orders for the cancelled items so they can be fulfilled again.

  The cancellation affects fulfillment orders differently based on their fulfillment status. If a fulfillment order was entirely fulfilled, then it automatically closes. If a fulfillment order is partially fulfilled, then the remaining quantities adjust to include the cancelled items. The system creates new fulfillment orders at the original [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) when items are still stocked there, or at alternative locations based on the store's fulfillment priority settings.

  Learn more about [canceling fulfillments](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-7-cancel-a-fulfillment).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment to be canceled.

  ***

* fulfillment​Constraint​Rule​Create

  [Fulfillment​Constraint​Rule​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentConstraintRuleCreatePayload)

  Creates a fulfillment constraint rule and its metafield.

  * function​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

    ### Arguments

  * function​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The handle of the function providing the constraint rule.

  * delivery​Method​Types

    [\[Delivery​Method​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryMethodType)

    required

    Associate the function with one or multiple delivery method types.

  * metafields

    [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

    Default:\[]

    Metafields to associate to the fulfillment constraint rule.

  ***

* fulfillment​Constraint​Rule​Delete

  [Fulfillment​Constraint​Rule​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentConstraintRuleDeletePayload)

  Deletes a fulfillment constraint rule and its metafields.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier for the fulfillment constraint rule.

  ***

* fulfillment​Constraint​Rule​Update

  [Fulfillment​Constraint​Rule​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentConstraintRuleUpdatePayload)

  Update a fulfillment constraint rule.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier for the fulfillment constraint rule.

  * delivery​Method​Types

    [\[Delivery​Method​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryMethodType)

    required

    Specifies the delivery method types to be updated. If not provided or providing an empty list will associate the function with all delivery methods.

  ***

* fulfillment​Create

  [Fulfillment​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentCreatePayload)

  Creates a fulfillment for one or more [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. The fulfillment orders are associated with the same [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and are assigned to the same [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location).

  Use this mutation to mark items as fulfilled when they're ready to ship. You can specify tracking information, customer notification preferences, and which [`FulfillmentOrderLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem) objects to fulfill from each fulfillment order. If you don't specify line items, then the mutation fulfills all items in the fulfillment order.

  Learn more about [building fulfillment solutions](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/build-fulfillment-solutions#create-a-fulfillment).

  * fulfillment

    [Fulfillment​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentInput)

    required

    ### Arguments

    The input fields used to create a fulfillment from fulfillment orders.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional message for the fulfillment request.

  ***

* fulfillment​Event​Create

  [Fulfillment​Event​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentEventCreatePayload)

  Creates a [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) to track the shipment status and location of items that have shipped. Events capture status updates like carrier pickup, in transit, out for delivery, or delivered.

  Each event records the timestamp and current status of the [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment). You can include optional details such as the location where the event occurred, estimated arrival time, and messages for tracking purposes.

  * fulfillment​Event

    [Fulfillment​Event​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentEventInput)

    required

    ### Arguments

    The input fields used to create a fulfillment event for a fulfillment.

  ***

* fulfillment​Order​Accept​Cancellation​Request

  [Fulfillment​Order​Accept​Cancellation​Request​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrderAcceptCancellationRequestPayload)

  Accept a cancellation request sent to a fulfillment service for a fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with the cancellation request.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for accepting the cancellation request.

  ***

* fulfillment​Order​Accept​Fulfillment​Request

  [Fulfillment​Order​Accept​Fulfillment​Request​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrderAcceptFulfillmentRequestPayload)

  Accepts a fulfillment request that the fulfillment service has received for a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) which signals that the fulfillment service will process and fulfill the order. The fulfillment service can optionally provide a message to the merchant and an estimated shipped date when accepting the request.

  Learn more about [accepting fulfillment requests](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#accept-a-fulfillment-request).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with the fulfillment request.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for accepting the fulfillment request.

  * estimated​Shipped​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The estimated date and time when the fulfillment order will be shipped.

  ***

* fulfillment​Order​Cancel

  [Fulfillment​Order​Cancel​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrderCancelPayload)

  Cancels a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) and creates a replacement fulfillment order to represent the work left to be done. The original fulfillment order will be marked as closed.

  This mutation works when the fulfillment order has a `SUBMITTED` or `CANCELLATION_REQUESTED` status. For `SUBMITTED` orders, cancellation happens immediately because the fulfillment service hasn't accepted the request.

  ***

  Note

  Orders that have had cancellation requested but the cancellation has yet to be accepted by the fulfillment service might still have work completed despite cancellation.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to mark as canceled.

  ***

* fulfillment​Order​Close

  [Fulfillment​Order​Close​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrderClosePayload)

  Marks an in-progress fulfillment order as incomplete, indicating the fulfillment service is unable to ship any remaining items, and closes the fulfillment request.

  This mutation can only be called for fulfillment orders that meet the following criteria:

  * Assigned to a fulfillment service location,
  * The fulfillment request has been accepted,
  * The fulfillment order status is `IN_PROGRESS`.

  This mutation can only be called by the fulfillment service app that accepted the fulfillment request. Calling this mutation returns the control of the fulfillment order to the merchant, allowing them to move the fulfillment order line items to another location and fulfill from there, remove and refund the line items, or to request fulfillment from the same fulfillment service again.

  Closing a fulfillment order is explained in [the fulfillment service guide](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-7-optional-close-a-fulfillment-order).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to mark as incomplete.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for marking the fulfillment order as incomplete.

  ***

* fulfillment​Order​Hold

  [Fulfillment​Order​Hold​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrderHoldPayload)

  Applies a fulfillment hold on a fulfillment order.

  As of the [2025-01 API version](https://shopify.dev/changelog/apply-multiple-holds-to-a-single-fulfillment-order), the mutation can be successfully executed on fulfillment orders that are already on hold. To place multiple holds on a fulfillment order, apps need to supply the [handle](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentHold#field-handle) field. Each app can place up to 10 active holds per fulfillment order. If an app attempts to place more than this, the mutation will return [a user error indicating that the limit has been reached](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderHoldUserErrorCode#value-fulfillmentorderholdlimitreached). The app would need to release one of its existing holds before being able to apply a new one.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order on which a fulfillment hold is applied.

  * fulfillment​Hold

    [Fulfillment​Order​Hold​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderHoldInput)

    required

    The details of the fulfillment hold applied on the fulfillment order.

  ***

* fulfillment​Order​Line​Items​Prepared​For​Pickup

  [Fulfillment​Order​Line​Items​Prepared​For​Pickup​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrderLineItemsPreparedForPickupPayload)

  Marks [fulfillment order line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem) as ready for customer pickup. When executed, this mutation automatically sends a "Ready For Pickup" notification to the customer.

  Use this mutation for local pickup orders after the items have been prepared and are available for the customer to collect. You can specify one or more [fulfillment order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects by providing the fulfillment order IDs in the [`lineItemsByFulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PreparedFulfillmentOrderLineItemsInput) field. This allows you to mark fulfillment order line items from different fulfillment orders as ready for pickup.

  * input

    [Fulfillment​Order​Line​Items​Prepared​For​Pickup​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemsPreparedForPickupInput)

    required

    ### Arguments

    The input for marking fulfillment order line items as ready for pickup.

  ***

* fulfillment​Order​Merge

  [Fulfillment​Order​Merge​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrderMergePayload)

  Merges a set or multiple sets of fulfillment orders together into one based on line item inputs and quantities.

  * fulfillment​Order​Merge​Inputs

    [\[Fulfillment​Order​Merge​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderMergeInput)

    required

    ### Arguments

    One or more sets of fulfillment orders to be merged.

  ***

* fulfillment​Order​Move

  [Fulfillment​Order​Move​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrderMovePayload)

  Changes the location which is assigned to fulfill a number of unfulfilled fulfillment order line items.

  Moving a fulfillment order will fail in the following circumstances:

  * The fulfillment order is closed.
  * The fulfillment order has had progress manually reported. To move a fulfillment order that has had progress manually reported, the fulfillment order must first be marked as open resolving the ongoing progress state.
  * The destination location doesn't stock the requested inventory item.
  * The API client doesn't have the correct permissions.

  Line items which have already been fulfilled can't be re-assigned and will always remain assigned to the original location.

  You can't change the assigned location while a fulfillment order has a [request status](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus) of `SUBMITTED`, `ACCEPTED`, `CANCELLATION_REQUESTED`, or `CANCELLATION_REJECTED`. These request statuses mean that a fulfillment order is awaiting action by a fulfillment service and can't be re-assigned without first having the fulfillment service accept a cancellation request. This behavior is intended to prevent items from being fulfilled by multiple locations or fulfillment services.

  ### How re-assigning line items affects fulfillment orders

  **First scenario:** Re-assign all line items belonging to a fulfillment order to a new location.

  In this case, the [assignedLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-fulfillmentorder-assignedlocation) of the original fulfillment order will be updated to the new location.

  **Second scenario:** Re-assign a subset of the line items belonging to a fulfillment order to a new location. You can specify a subset of line items using the `fulfillmentOrderLineItems` parameter (available as of the `2023-04` API version), or specify that the original fulfillment order contains line items which have already been fulfilled.

  If the new location is already assigned to another active fulfillment order, on the same order, then a new fulfillment order is created. The existing fulfillment order is closed and line items are recreated in a new fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to be moved.

  * new​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the location where the fulfillment order will be moved.

  * fulfillment​Order​Line​Items

    [\[Fulfillment​Order​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemInput)

    The fulfillment order line items to be moved. If left blank, all unfulfilled line items belonging to the fulfillment order are moved.

  ***

* fulfillment​Order​Open

  [Fulfillment​Order​Open​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrderOpenPayload)

  Marks a scheduled fulfillment order as open.

  From API version 2026-01, this will also mark a fulfillment order as open when it is assigned to a merchant managed location and has had progress reported.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to mark as open.

  ***

* fulfillment​Order​Reject​Cancellation​Request

  [Fulfillment​Order​Reject​Cancellation​Request​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrderRejectCancellationRequestPayload)

  Rejects a cancellation request sent to a fulfillment service for a fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with the cancellation request.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for rejecting the cancellation request.

  ***

* fulfillment​Order​Reject​Fulfillment​Request

  [Fulfillment​Order​Reject​Fulfillment​Request​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrderRejectFulfillmentRequestPayload)

  Rejects a fulfillment request sent to a fulfillment service for a fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with the fulfillment request.

  * reason

    [Fulfillment​Order​Rejection​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderRejectionReason)

    The reason for the fulfillment order rejection.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for rejecting the fulfillment request.

  * line​Items

    [\[Incoming​Request​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/IncomingRequestLineItemInput)

    An optional array of line item rejection details. If none are provided, all line items will be assumed to be unfulfillable.

    **Note**: After the fulfillment request has been rejected, none of the line items will be able to be fulfilled. This field documents which line items specifically were unable to be fulfilled and why.

  ***

* fulfillment​Order​Release​Hold

  [Fulfillment​Order​Release​Hold​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrderReleaseHoldPayload)

  Releases the fulfillment hold on a fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order for which to release the fulfillment hold.

  * hold​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the fulfillment holds to release.\
    \
    Holds will only be released if they belong to the fulfillment order specified by the `id` argument.\
    \
    **NOTE:** If not supplied, all holds for the fulfillment order will be released. It is highly recommended that apps supply the ids of the holds that they intend to release. Releasing all holds on a fulfillment order will result in the fulfillment order being released prematurely and items being incorrectly fulfilled.

  * external​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A configurable ID used to track the automation system releasing this hold.

  ***

* fulfillment​Order​Reschedule

  [Fulfillment​Order​Reschedule​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrderReschedulePayload)

  Reschedules a scheduled fulfillment order.

  Updates the value of the `fulfillAt` field on a scheduled fulfillment order.

  The fulfillment order will be marked as ready for fulfillment at this date and time.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to reschedule.

  * fulfill​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    required

    A future date and time when the fulfillment order will be marked as ready for fulfillment.

  ***

* fulfillment​Order​Split

  [Fulfillment​Order​Split​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrderSplitPayload)

  Splits [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects by moving the specified [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects and quantities into a new fulfillment order.

  If the original fulfillment order can't be split due to its current state, then the mutation creates a replacement fulfillment order instead.

  * fulfillment​Order​Splits

    [\[Fulfillment​Order​Split​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderSplitInput)

    required

    ### Arguments

    The fulfillment orders, line items and quantities to be split into new fulfillment orders.

  ***

* fulfillment​Orders​Reroute

  [Fulfillment​Orders​Reroute​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrdersReroutePayload)

  Route the fulfillment orders to an alternative location, according to the shop's order routing settings. This involves:

  * Finding an alternate location that can fulfill the fulfillment orders.
  * Assigning the fulfillment orders to the new location.

  - fulfillment​Order​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The list of IDs of the fulfillment orders.

  - included​Location​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The list of IDs of the locations to include for rerouting. By default, all locations are included.

  - excluded​Location​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The list of IDs of the locations to exclude for rerouting. Excluded locations specified here take precedence over included locations provided through included\_location\_ids.

  ***

* fulfillment​Orders​Set​Fulfillment​Deadline

  [Fulfillment​Orders​Set​Fulfillment​Deadline​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrdersSetFulfillmentDeadlinePayload)

  Sets the latest date and time by which the fulfillment orders need to be fulfilled.

  * fulfillment​Order​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The IDs of the fulfillment orders for which the deadline is being set.

  * fulfillment​Deadline

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    required

    The new fulfillment deadline of the fulfillment orders.

  ***

* fulfillment​Order​Submit​Cancellation​Request

  [Fulfillment​Order​Submit​Cancellation​Request​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrderSubmitCancellationRequestPayload)

  Sends a cancellation request to the fulfillment service of a fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with the cancellation request.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for the cancellation request.

  ***

* fulfillment​Order​Submit​Fulfillment​Request

  [Fulfillment​Order​Submit​Fulfillment​Request​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentOrderSubmitFulfillmentRequestPayload)

  Sends a fulfillment request to the fulfillment service assigned to a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder). The fulfillment service must then accept or reject the request before processing can begin.

  You can either request fulfillment for all line items or specify individual items with quantities for partial fulfillment. When requesting partial fulfillment, Shopify splits the original fulfillment order into two: one with the submitted items and another with the remaining unsubmitted items. Include an optional message to communicate special instructions to the fulfillment service, such as gift wrapping or handling requirements.

  Learn more about [managing fulfillment requests as a fulfillment service](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-4-act-on-fulfillment-requests).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with fulfillment request.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional message for the fulfillment request.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the customer should be notified when fulfillments are created for this fulfillment order.

  * fulfillment​Order​Line​Items

    [\[Fulfillment​Order​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemInput)

    The fulfillment order line items to be requested for fulfillment. If left blank, all line items of the fulfillment order are requested for fulfillment.

  ***

* fulfillment​Service​Create

  [Fulfillment​Service​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentServiceCreatePayload)

  Creates a fulfillment service.

  ## Fulfillment service location

  When creating a fulfillment service, a new location will be automatically created on the shop and will be associated with this fulfillment service. This location will be named after the fulfillment service and inherit the shop's address.

  If you are using API version `2023-10` or later, and you need to specify custom attributes for the fulfillment service location (for example, to change its address to a country different from the shop's country), use the [LocationEdit](https://shopify.dev/api/admin-graphql/latest/mutations/locationEdit) mutation after creating the fulfillment service.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The name of the fulfillment service.

  * callback​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    The URL to send requests for the fulfillment service.

    If `callbackUrl` is provided:

    * Shopify queries the `callback_url/fetch_tracking_numbers` endpoint to retrieve tracking numbers for orders, if `trackingSupport` is set to `true`.
    * Shopify queries the `callback_url/fetch_stock` endpoint to retrieve inventory levels, if `inventoryManagement` is set to `true`.
    * Shopify uses the `callback_url/fulfillment_order_notification` endpoint to send [fulfillment and cancellation requests](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations).

    Otherwise, if no `callbackUrl` is provided you need to submit this information via the api:

    * For submitting tracking info and handling fulfillment requests, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).
    * For managing inventory quantities, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * tracking​Support

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the fulfillment service provides tracking numbers for packages.

    If `callbackUrl` is provided ([optional as of API version "2026-01"](https://shopify.dev/changelog/fulfillment-service-callback-url-is-now-optional)), Shopify will periodically fetch tracking numbers via the callback endpoint.

    If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).

  * fulfillment​Orders​Opt​In

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:true

  * permits​Sku​Sharing

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Deprecated (removal date set)Default:true

  * inventory​Management

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the fulfillment service manages product inventory and provides updates to Shopify.

    If `callbackUrl` is provided ([optional as of API version "2026-01"](https://shopify.dev/changelog/fulfillment-service-callback-url-is-now-optional)), Shopify will periodically fetch inventory levels via the callback endpoint.

    If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * requires​Shipping​Method

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the fulfillment service requires products to be physically shipped.

  ***

* fulfillment​Service​Delete

  [Fulfillment​Service​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentServiceDeletePayload)

  Deletes a fulfillment service.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment service to delete.

  * destination​Location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an active merchant managed location where inventory and commitments will be relocated after the fulfillment service is deleted.

    Inventory will only be transferred if the [`TRANSFER`](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentServiceDeleteInventoryAction#value-transfer) inventory action has been chosen.

  * inventory​Action

    [Fulfillment​Service​Delete​Inventory​Action](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentServiceDeleteInventoryAction)

    Default:TRANSFER

    The action to take with the location after the fulfillment service is deleted.

  ***

* fulfillment​Service​Update

  [Fulfillment​Service​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentServiceUpdatePayload)

  Updates the [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) configuration, including its name, callback URL, and operational settings.

  The mutation modifies how the fulfillment service handles inventory tracking, shipping requirements, and package tracking support.

  ***

  Note

  To update the physical address or other location details of the fulfillment service, use the [`locationEdit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit) mutation instead.

  ***

  Learn more about [editing fulfillment service locations](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-2-edit-locations).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The id of the fulfillment service.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the fulfillment service.

  * callback​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    The URL to send requests for the fulfillment service.

    If `callbackUrl` is provided:

    * Shopify queries the `callback_url/fetch_tracking_numbers` endpoint to retrieve tracking numbers for orders, if `trackingSupport` is set to `true`.
    * Shopify queries the `callback_url/fetch_stock` endpoint to retrieve inventory levels, if `inventoryManagement` is set to `true`.
    * Shopify uses the `callback_url/fulfillment_order_notification` endpoint to send [fulfillment and cancellation requests](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations).

    Otherwise, if no `callbackUrl` is provided you need to submit this information via the api:

    * For submitting tracking info and handling fulfillment requests, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).
    * For managing inventory quantities, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * tracking​Support

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the fulfillment service provides tracking numbers for packages.

    If `callbackUrl` is provided, Shopify will periodically fetch tracking numbers via the callback endpoint.

    If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).

  * fulfillment​Orders​Opt​In

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Deprecated

  * permits​Sku​Sharing

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Deprecated (removal date set)

  * inventory​Management

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the fulfillment service manages product inventory and provides updates to Shopify.

    If `callbackUrl` is provided, Shopify will periodically fetch inventory levels via the callback endpoint.

    If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * requires​Shipping​Method

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the fulfillment service requires products to be physically shipped.

  ***

* fulfillment​Tracking​Info​Update

  [Fulfillment​Tracking​Info​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentTrackingInfoUpdatePayload)

  Updates tracking information for a fulfillment, including the carrier name, tracking numbers, and tracking URLs. You can provide either single or multiple tracking numbers for shipments with multiple packages.

  The mutation accepts a [`FulfillmentTrackingInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput) that supports both single tracking (using [`number`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.number) and [`url`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.url) fields) and multi-package tracking (using [`numbers`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.numbers) and [`urls`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.urls) fields). When you specify a [supported carrier name](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies), Shopify automatically generates tracking URLs for the provided tracking numbers.

  You can optionally notify customers about tracking updates with the [`notifyCustomer`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-notifyCustomer) argument. When enabled, customers receive shipping update emails with tracking details and receive notifications about future updates to the fulfillment.

  Learn more about [enabling tracking support](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-9-optional-enable-tracking-support) for fulfillment services.

  * fulfillment​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment.

  * tracking​Info​Input

    [Fulfillment​Tracking​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput)

    required

    The tracking input for the mutation, including tracking URL, number, and company.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the customer will be notified of this update and future updates for the fulfillment. If this field is left blank, then notifications won't be sent to the customer when the fulfillment is updated.

  ***

* gift​Card​Create

  [Gift​Card​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/GiftCardCreatePayload)

  Creates a new [`GiftCard`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) with a specified initial value. You can assign the gift card to a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) or create it without assignment for manual distribution.

  You can customize the gift card with an optional code, expiration date, and internal note. If you don't provide a code, the system generates a random 16 character alphanumeric code. The mutation also supports scheduling gift card notifications to recipients, with a personalized message, through the [`recipientAttributes`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput#fields-recipientAttributes) field on the `GiftCardCreateInput` input object.

  * input

    [Gift​Card​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput)

    required

    ### Arguments

    The input fields to create a gift card.

  ***

* gift​Card​Credit

  [Gift​Card​Credit​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/GiftCardCreditPayload)

  Credit a gift card.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to be credited.

  * credit​Input

    [Gift​Card​Credit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreditInput)

    required

    The input fields to credit a gift card.

  ***

* gift​Card​Deactivate

  [Gift​Card​Deactivate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/GiftCardDeactivatePayload)

  Deactivate a gift card. A deactivated gift card cannot be used by a customer. A deactivated gift card cannot be re-enabled.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to deactivate.

  ***

* gift​Card​Debit

  [Gift​Card​Debit​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/GiftCardDebitPayload)

  Debit a gift card.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to be debited.

  * debit​Input

    [Gift​Card​Debit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardDebitInput)

    required

    The input fields to debit a gift card.

  ***

* gift​Card​Send​Notification​To​Customer

  [Gift​Card​Send​Notification​To​Customer​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/GiftCardSendNotificationToCustomerPayload)

  Send notification to the customer of a gift card.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to send.

  ***

* gift​Card​Send​Notification​To​Recipient

  [Gift​Card​Send​Notification​To​Recipient​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/GiftCardSendNotificationToRecipientPayload)

  Send notification to the recipient of a gift card.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to send.

  ***

* gift​Card​Update

  [Gift​Card​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/GiftCardUpdatePayload)

  Update a gift card.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to be updated.

  * input

    [Gift​Card​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardUpdateInput)

    required

    The input fields to update the gift card.

  ***

* inventory​Activate

  [Inventory​Activate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryActivatePayload)

  Activates an inventory item at a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) by creating an [`InventoryLevel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) that tracks stock quantities. This enables you to manage inventory for a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) at the specified location.

  When you activate an inventory item, you can set its initial quantities. The [`available`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate#arguments-available) argument sets the quantity that's available for sale. [`onHand`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate#arguments-onHand) argument sets the total physical quantity at the location. If you don't specify quantities, then `available` and `onHand` default to zero.

  ***

  Caution

  As of version `2026-01`, this mutation supports an optional idempotency key using the `@idempotent` directive. As of version `2026-04`, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * inventory​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory item to activate.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the location of the inventory item being activated.

  * available

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The initial available quantity of the inventory item being activated at the location.

  * on​Hand

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The initial on\_hand quantity of the inventory item being activated at the location.

  * stock​At​Legacy​Location

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Allow activation at or away from fulfillment service location with sku sharing off. This will deactivate inventory at all other locations.

  ***

* inventory​Adjust​Quantities

  [Inventory​Adjust​Quantities​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryAdjustQuantitiesPayload)

  Adjusts quantities for inventory items by applying incremental changes at specific locations. Each adjustment modifies the quantity by a delta value rather than setting an absolute amount.

  The mutation tracks adjustments with a reason code and optional reference URI for audit trails. Returns an [`InventoryAdjustmentGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup) that records all changes made in the operation.

  Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#adjust-inventory-quantities).

  ***

  Caution

  As of version `2026-01`, this mutation supports an optional idempotency key using the `@idempotent` directive. As of version `2026-04`, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Adjust​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryAdjustQuantitiesInput)

    required

    ### Arguments

    The information required to adjust inventory quantities.

  ***

* inventory​Bulk​Toggle​Activation

  [Inventory​Bulk​Toggle​Activation​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryBulkToggleActivationPayload)

  Activates or deactivates an inventory item at multiple locations. When you activate an [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) at a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location), that location can stock and track quantities for that item. When you deactivate an inventory item at a location, the inventory item is no longer stocked at that location.

  The mutation accepts an inventory item ID and a list of location-specific activation settings. It returns the updated inventory item and any activated [`InventoryLevel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) objects.

  Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

  * inventory​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory item to modify the activation status locations for.

  * inventory​Item​Updates

    [\[Inventory​Bulk​Toggle​Activation​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryBulkToggleActivationInput)

    required

    A list of pairs of locations and activate status to update for the specified inventory item.

  ***

* inventory​Deactivate

  [Inventory​Deactivate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryDeactivatePayload)

  Removes an inventory item's quantities from a location, and turns off inventory at the location.

  * inventory​Level​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory level to deactivate.

  ***

* inventory​Item​Update

  [Inventory​Item​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryItemUpdatePayload)

  Updates an [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)'s properties including whether inventory is tracked, cost, SKU, and whether shipping is required. Inventory items represent the goods available to be shipped to customers.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory item to update.

  * input

    [Inventory​Item​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemInput)

    required

    The input fields that update an [`inventoryItem`](https://shopify.dev/api/admin-graphql/latest/queries/inventoryitem).

  ***

* inventory​Move​Quantities

  [Inventory​Move​Quantities​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryMoveQuantitiesPayload)

  Moves inventory quantities for a single inventory item between different states at a single location. Use this mutation to reallocate inventory across quantity states without moving it between locations.

  Each change specifies the quantity to move, the source state and location, and the destination state and location. The mutation returns an [`InventoryAdjustmentGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup) that tracks all changes made in a single operation, providing an audit trail with the reason and reference document URI.

  ***

  Caution

  As of version `2026-01`, this mutation supports an optional idempotency key using the `@idempotent` directive. As of version `2026-04`, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Move​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantitiesInput)

    required

    ### Arguments

    The information required to move inventory quantities.

  ***

* inventory​Set​Quantities

  [Inventory​Set​Quantities​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventorySetQuantitiesPayload)

  Set quantities of specified name using absolute values. This mutation supports compare-and-set functionality to handle concurrent requests properly. If `ignoreCompareQuantity` is not set to true, the mutation will only update the quantity if the persisted quantity matches the `compareQuantity` value. If the `compareQuantity` value does not match the persisted value, the mutation will return an error. In order to opt out of the `compareQuantity` check, the `ignoreCompareQuantity` argument can be set to true.

  ***

  Note

  Only use this mutation if calling on behalf of a system that acts as the source of truth for inventory quantities, otherwise please consider using the [inventoryAdjustQuantities](https://shopify.dev/api/admin-graphql/latest/mutations/inventoryAdjustQuantities) mutation.

  Opting out of the `compareQuantity` check can lead to inaccurate inventory quantities if multiple requests are made concurrently. It is recommended to always include the `compareQuantity` value to ensure the accuracy of the inventory quantities and to opt out of the check using `ignoreCompareQuantity` only when necessary.

  ***

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Set​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetQuantitiesInput)

    required

    ### Arguments

    The information required to set inventory quantities.

  ***

* inventory​Set​Scheduled​Changes

  [Inventory​Set​Scheduled​Changes​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventorySetScheduledChangesPayload)

  Set up scheduled changes of inventory items.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Set​Scheduled​Changes​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetScheduledChangesInput)

    required

    ### Arguments

    The input fields for setting up scheduled changes of inventory items.

  ***

* inventory​Shipment​Add​Items

  [Inventory​Shipment​Add​Items​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryShipmentAddItemsPayload)

  Adds items to an inventory shipment.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to modify.

  * line​Items

    [\[Inventory​Shipment​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentLineItemInput)

    required

    The list of line items to add to the inventory shipment.

  ***

* inventory​Shipment​Create

  [Inventory​Shipment​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryShipmentCreatePayload)

  Adds a draft shipment to an inventory transfer.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Shipment​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentCreateInput)

    required

    ### Arguments

    The input fields for the inventory shipment.

  ***

* inventory​Shipment​Create​In​Transit

  [Inventory​Shipment​Create​In​Transit​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryShipmentCreateInTransitPayload)

  Adds an in-transit shipment to an inventory transfer.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Shipment​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentCreateInput)

    required

    ### Arguments

    The input fields for the inventory shipment.

  ***

* inventory​Shipment​Delete

  [Inventory​Shipment​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryShipmentDeletePayload)

  Deletes an inventory shipment. Only draft shipments can be deleted.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to be deleted.

  ***

* inventory​Shipment​Mark​In​Transit

  [Inventory​Shipment​Mark​In​Transit​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryShipmentMarkInTransitPayload)

  Marks a draft inventory shipment as in transit.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to mark in transit.

  * date​Shipped

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date the shipment was shipped.

  ***

* inventory​Shipment​Receive

  [Inventory​Shipment​Receive​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryShipmentReceivePayload)

  Receive an inventory shipment.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to receive.

  * line​Items

    [\[Inventory​Shipment​Receive​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentReceiveItemInput)

    The list of receive line items for the inventory shipment.

  * date​Received

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date the inventory shipment was initially received.

  * bulk​Receive​Action

    [Inventory​Shipment​Receive​Line​Item​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentReceiveLineItemReason)

    The bulk receive action for the inventory shipment.

  ***

* inventory​Shipment​Remove​Items

  [Inventory​Shipment​Remove​Items​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryShipmentRemoveItemsPayload)

  Remove items from an inventory shipment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to remove items from.

  * line​Items

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    A list of inventory shipment line item ids representing the items to be removed from the shipment.

  ***

* inventory​Shipment​Set​Tracking

  [Inventory​Shipment​Set​Tracking​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryShipmentSetTrackingPayload)

  Edits the tracking info on an inventory shipment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment whose tracking info is being edited.

  * tracking

    [Inventory​Shipment​Tracking​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentTrackingInput)

    required

    The tracking info to edit on the inventory shipment.

  ***

* inventory​Shipment​Update​Item​Quantities

  [Inventory​Shipment​Update​Item​Quantities​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryShipmentUpdateItemQuantitiesPayload)

  Updates items on an inventory shipment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to update item quantities.

  * items

    [\[Inventory​Shipment​Update​Item​Quantities​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentUpdateItemQuantitiesInput)

    Default:\[]

    The list of line items to be updated to the shipment.

  ***

* inventory​Transfer​Cancel

  [Inventory​Transfer​Cancel​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryTransferCancelPayload)

  Cancels an inventory transfer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer to cancel.

  ***

* inventory​Transfer​Create

  [Inventory​Transfer​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryTransferCreatePayload)

  Creates a draft inventory transfer to move inventory items between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects in your store. The transfer tracks which items to move, their quantities, and the origin and destination locations.

  Use [`inventoryTransferMarkAsReadyToShip`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferMarkAsReadyToShip) to mark the transfer as ready to ship.

  ***

  Caution

  As of version `2026-01`, this mutation supports an optional idempotency key using the `@idempotent` directive. As of version `2026-04`, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Transfer​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateInput)

    required

    ### Arguments

    The input fields for the inventory transfer.

  ***

* inventory​Transfer​Create​As​Ready​To​Ship

  [Inventory​Transfer​Create​As​Ready​To​Ship​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryTransferCreateAsReadyToShipPayload)

  Creates an inventory transfer in ready to ship.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Transfer​Create​As​Ready​To​Ship​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateAsReadyToShipInput)

    required

    ### Arguments

    The input fields for the inventory transfer.

  ***

* inventory​Transfer​Delete

  [Inventory​Transfer​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryTransferDeletePayload)

  Deletes an inventory transfer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer to delete.

  ***

* inventory​Transfer​Duplicate

  [Inventory​Transfer​Duplicate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryTransferDuplicatePayload)

  This mutation allows duplicating an existing inventory transfer. The duplicated transfer will have the same line items and quantities as the original transfer, but will be in a draft state with no shipments.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer to duplicate.

  ***

* inventory​Transfer​Edit

  [Inventory​Transfer​Edit​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryTransferEditPayload)

  Edits an inventory transfer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory Transfer to be edited.

  * input

    [Inventory​Transfer​Edit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferEditInput)

    required

    The input fields to edit the inventory transfer.

  ***

* inventory​Transfer​Mark​As​Ready​To​Ship

  [Inventory​Transfer​Mark​As​Ready​To​Ship​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryTransferMarkAsReadyToShipPayload)

  Sets an inventory transfer to ready to ship.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer to mark as ready to ship.

  ***

* inventory​Transfer​Remove​Items

  [Inventory​Transfer​Remove​Items​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryTransferRemoveItemsPayload)

  This mutation allows removing the shippable quantities of line items on a Transfer. It removes all quantities of the item from the transfer that are not associated with shipments.

  * input

    [Inventory​Transfer​Remove​Items​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferRemoveItemsInput)

    required

    ### Arguments

    The input fields for the InventoryTransferRemoveItems mutation.

  ***

* inventory​Transfer​Set​Items

  [Inventory​Transfer​Set​Items​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventoryTransferSetItemsPayload)

  This mutation allows for the setting of line items on a Transfer. Will replace the items already set, if any.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Transfer​Set​Items​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferSetItemsInput)

    required

    ### Arguments

    The input fields for the InventoryTransferSetItems mutation.

  ***

* location​Activate

  [Location​Activate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/LocationActivatePayload)

  Activates a location so that you can stock inventory at the location. Refer to the [`isActive`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-isactive) and [`activatable`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-activatable) fields on the `Location` object.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a location to activate.

  ***

* location​Add

  [Location​Add​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/LocationAddPayload)

  Adds a new [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) where you can stock inventory and fulfill orders. Locations represent physical places like warehouses, retail stores, or fulfillment centers.

  The location requires a name and address with at least a country code. You can specify whether the location fulfills online orders, which determines if its inventory is available for online sales. You can also attach custom [metafields](https://shopify.dev/docs/apps/build/custom-data) to store additional information about the location.

  * input

    [Location​Add​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationAddInput)

    required

    ### Arguments

    The properties of the location to add.

  ***

* location​Deactivate

  [Location​Deactivate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/LocationDeactivatePayload)

  Deactivates a location and moves inventory, pending orders, and moving transfers " "to a destination location.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a location to deactivate.

  * destination​Location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a destination location to which inventory, pending orders and moving transfers will be moved from the location to deactivate.

  ***

* location​Delete

  [Location​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/LocationDeletePayload)

  Deletes a location.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a location to delete.

  ***

* location​Edit

  [Location​Edit​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/LocationEditPayload)

  Updates the properties of an existing [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location). You can modify the location's name, address, whether it fulfills online orders, and custom [`metafields`](https://shopify.dev/docs/apps/build/custom-data).

  Apps that created a [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) can edit the associated location to ensure accurate representation of their fulfillment network.

  ***

  Note

  You can't disable the [`fulfillsOnlineOrders`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit#arguments-input.fields.fulfillsOnlineOrders) setting for fulfillment service locations.

  ***

  Learn more about [editing locations for fulfillment services](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-2-edit-locations).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a location to edit.

  * input

    [Location​Edit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationEditInput)

    required

    The updated properties for the location.

  ***

* location​Local​Pickup​Disable

  [Location​Local​Pickup​Disable​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/LocationLocalPickupDisablePayload)

  Disables local pickup for a location.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the location to disable local pickup for.

  ***

* location​Local​Pickup​Enable

  [Location​Local​Pickup​Enable​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/LocationLocalPickupEnablePayload)

  Enables local pickup for a location so customers can collect their orders in person. Configures the estimated pickup time that customers see at checkout and optional instructions for finding or accessing the pickup location.

  * local​Pickup​Settings

    [Delivery​Location​Local​Pickup​Enable​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationLocalPickupEnableInput)

    required

    ### Arguments

    The settings required to enable local pickup for a location.

  ***

* market​Create

  [Market​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketCreatePayload)

  Creates a [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) to deliver customized shopping experiences. Markets define various aspects of the buyer experience including pricing, product availability, custom content, inventory and fulfillment priorities, and payment methods.

  Define conditions to match buyers by region, company location, retail location, or other criteria. Configure [`MarketCurrencySettings`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettings) to control currency behavior. Set [`MarketPriceInclusions`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketPriceInclusions) to determine tax and duty display. Assign [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects and [`MarketWebPresence`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence) configurations to control product availability and SEO strategy.

  Learn more about [Shopify Markets](https://shopify.dev/docs/apps/build/markets).

  * input

    [Market​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCreateInput)

    required

    ### Arguments

    The properties of the new market.

  ***

* market​Delete

  [Market​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketDeletePayload)

  Deletes a market definition.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market to delete.

  ***

* marketing​Activities​Delete​All​External

  [Marketing​Activities​Delete​All​External​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketingActivitiesDeleteAllExternalPayload)

  Deletes all external marketing activities. Deletion is performed by a background job, as it may take a bit of time to complete if a large number of activities are to be deleted. Attempting to create or modify external activities before the job has completed will result in the create/update/upsert mutation returning an error.

* marketing​Activity​Create

  [Marketing​Activity​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketingActivityCreatePayload)

  Create new marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

  * input

    [Marketing​Activity​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateInput)

    required

    ### Arguments

    The Input of marketing activity create.

  ***

* marketing​Activity​Create​External

  [Marketing​Activity​Create​External​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketingActivityCreateExternalPayload)

  Creates a new external marketing activity.

  * input

    [Marketing​Activity​Create​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput)

    required

    ### Arguments

    The input field for creating an external marketing activity.

  ***

* marketing​Activity​Delete​External

  [Marketing​Activity​Delete​External​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketingActivityDeleteExternalPayload)

  Deletes an external marketing activity.

  * marketing​Activity​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the marketing activity. A marketing activity ID or remote ID must be provided.

  * remote​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. A marketing activity ID or remote ID must be provided.

  ***

* marketing​Activity​Update

  [Marketing​Activity​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketingActivityUpdatePayload)

  Updates a marketing activity with the latest information. Marketing activity app extensions are deprecated and will be removed in the near future.

  * input

    [Marketing​Activity​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput)

    required

    ### Arguments

    The Input of the marketing activity.

  ***

* marketing​Activity​Update​External

  [Marketing​Activity​Update​External​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketingActivityUpdateExternalPayload)

  Update an external marketing activity.

  * input

    [Marketing​Activity​Update​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput)

    required

    ### Arguments

    The input field for updating an external marketing activity.

  * marketing​Activity​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the marketing activity. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

  * remote​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

  * utm

    [UTMInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UTMInput)

    Specifies the [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters) that are associated with a related marketing campaign. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

  ***

* marketing​Activity​Upsert​External

  [Marketing​Activity​Upsert​External​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketingActivityUpsertExternalPayload)

  Creates a new external marketing activity or updates an existing one. When optional fields are absent or null, associated information will be removed from an existing marketing activity.

  * input

    [Marketing​Activity​Upsert​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput)

    required

    ### Arguments

    The input field for creating or updating an external marketing activity.

  ***

* marketing​Engagement​Create

  [Marketing​Engagement​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketingEngagementCreatePayload)

  Creates a new marketing engagement for a marketing activity or a marketing channel.

  * marketing​Activity​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The identifier of the marketing activity for which the engagement metrics are being provided. This or the remoteId should be set when and only when providing activity-level engagements. This should be nil when providing channel-level engagements.

  * remote​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. This or the marketingActivityId should be set when and only when providing activity-level engagements. This should be nil when providing channel-level engagements.

  * channel​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The unique string identifier of the channel to which the engagement metrics are being provided. This should be set when and only when providing channel-level engagements. This should be nil when providing activity-level engagements. For the correct handle for your channel, contact your partner manager.

  * marketing​Engagement

    [Marketing​Engagement​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput)

    required

    The marketing engagement's attributes.

  ***

* marketing​Engagements​Delete

  [Marketing​Engagements​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketingEngagementsDeletePayload)

  Marks channel-level engagement data such that it no longer appears in reports. Activity-level data cannot be deleted directly, instead the MarketingActivity itself should be deleted to hide it from reports.

  * channel​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The handle of the channel for which engagement data should be deleted.

  * delete​Engagements​For​All​Channels

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    When true, engagements for all channels that belong to the api client will be deleted.

  ***

* market​Localizations​Register

  [Market​Localizations​Register​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketLocalizationsRegisterPayload)

  Creates or updates market localizations.

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the resource that is being localized within the context of a market.

  * market​Localizations

    [\[Market​Localization​Register​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketLocalizationRegisterInput)

    required

    The input fields for a market localization.

  ***

* market​Localizations​Remove

  [Market​Localizations​Remove​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketLocalizationsRemovePayload)

  Deletes market localizations.

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the resource for which market localizations are being deleted.

  * market​Localization​Keys

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The list of market localization keys.

  * market​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The list of market IDs.

  ***

* market​Update

  [Market​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketUpdatePayload)

  Updates the properties of a market.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market to update.

  * input

    [Market​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketUpdateInput)

    required

    The properties to update.

  ***

* menu​Create

  [Menu​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MenuCreatePayload)

  Creates a navigation [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) for the online store. Menus organize links that help customers navigate to [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [pages](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page), [blogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog), and custom URLs.

  Each menu requires a unique handle for identification and can contain multiple [`MenuItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem) objects with nested sub-items up to three levels deep.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The menu's title.

  * handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The menu's handle.

  * items

    [\[Menu​Item​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemCreateInput)

    required

    List of the menu's items.

  ***

* menu​Delete

  [Menu​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MenuDeletePayload)

  Deletes a menu.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the menu to be deleted.

  ***

* menu​Update

  [Menu​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MenuUpdatePayload)

  Updates a [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) for display on the storefront. Modifies the menu's title and navigation structure, including nested [`MenuItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem) objects. You can update the handle for non-default menus.

  The items argument accepts a list of menu items with their nested structure. Each item can include nested items to create multi-level navigation hierarchies. Default menus have restricted updates—you can't change their handles.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the menu to be updated.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The menu's title.

  * handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The menu's handle.

  * items

    [\[Menu​Item​Update​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemUpdateInput)

    required

    List of the menu's items.

  ***

* metafield​Definition​Create

  [Metafield​Definition​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MetafieldDefinitionCreatePayload)

  Creates a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/MetafieldDefinition) that establishes structure and validation rules for metafields. The definition specifies the data type, validation constraints, and access permissions for metafields with a given namespace and key combination.

  When you create a new definition, the system validates any existing unstructured metafields matching the same owner type, namespace, and key against it. The system updates each valid metafield's type to match the definition. Invalid metafields remain unchanged but must conform to the definition when updated.

  Learn more about [creating metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions).

  * definition

    [Metafield​Definition​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionInput)

    required

    ### Arguments

    Specifies the input fields for a metafield definition.

  ***

* metafield​Definition​Delete

  [Metafield​Definition​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MetafieldDefinitionDeletePayload)

  Deletes a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/MetafieldDefinition). You can identify the definition by providing either its owner type, namespace, and key, or its global ID.

  When you set [`deleteAllAssociatedMetafields`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/metafieldDefinitionDelete#arguments-deleteAllAssociatedMetafields) to `true`, the mutation asynchronously deletes all [`Metafield`](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/Metafield) objects that use this definition. This option must be `true` when deleting definitions under the `$app` namespace.

  Learn more about [deleting metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions).

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The id of the metafield definition to delete. Using `identifier` is preferred.

  * identifier

    [Metafield​Definition​Identifier​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

    The identifier of the metafield definition to delete.

  * delete​All​Associated​Metafields

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to delete all associated metafields.

  ***

* metafield​Definition​Pin

  [Metafield​Definition​Pin​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MetafieldDefinitionPinPayload)

  You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions. The order of your pinned metafield definitions determines the order in which your metafields are displayed on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.

  * definition​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The id of the metafield definition to pin. Using `identifier` is preferred.

  * identifier

    [Metafield​Definition​Identifier​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

    The identifier of the metafield definition to pin.

  ***

* metafield​Definition​Unpin

  [Metafield​Definition​Unpin​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MetafieldDefinitionUnpinPayload)

  You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions. The order of your pinned metafield definitions determines the order in which your metafields are displayed on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.

  * definition​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the metafield definition to unpin. Using `identifier` is preferred.

  * identifier

    [Metafield​Definition​Identifier​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

    The identifier of the metafield definition to unpin.

  ***

* metafield​Definition​Update

  [Metafield​Definition​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MetafieldDefinitionUpdatePayload)

  Updates a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/MetafieldDefinition)'s configuration and settings. You can modify the definition's name, description, validation rules, access settings, capabilities, and constraints.

  The mutation updates access settings that control visibility across different APIs, such as the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql), [Storefront API](https://shopify.dev/docs/api/storefront), and [Customer Account API](https://shopify.dev/docs/api/customer). It also enables capabilities like admin filtering or unique value validation, and modifies constraints that determine which resource subtypes the definition applies to.

  ***

  Note

  The type, namespace, key, and owner type identify the definition and so can't be changed.

  ***

  Learn more about [updating metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions).

  * definition

    [Metafield​Definition​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionUpdateInput)

    required

    ### Arguments

    The input fields for the metafield definition update.

  ***

* metafields​Delete

  [Metafields​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MetafieldsDeletePayload)

  Deletes [`Metafield`](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/Metafield) objects in bulk by specifying combinations of owner ID, namespace, and key.

  Returns the identifiers of successfully deleted metafields. If a specified metafield doesn't exist, then the mutation still succeeds but returns `null` for that identifier in the response.

  * metafields

    [\[Metafield​Identifier​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldIdentifierInput)

    required

    ### Arguments

    A list of identifiers specifying metafields to delete. At least one identifier must be specified.

  ***

* metafields​Set

  [Metafields​Set​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MetafieldsSetPayload)

  Sets metafield values. Metafield values will be set regardless if they were previously created or not.

  Allows a maximum of 25 metafields to be set at a time, with a maximum total request payload size of 10MB.

  This operation is atomic, meaning no changes are persisted if an error is encountered.

  As of `2024-07`, this operation supports compare-and-set functionality to better handle concurrent requests. If `compareDigest` is set for any metafield, the mutation will only set that metafield if the persisted metafield value matches the digest used on `compareDigest`. If the metafield doesn't exist yet, but you want to guarantee that the operation will run in a safe manner, set `compareDigest` to `null`. The `compareDigest` value can be acquired by querying the metafield object and selecting `compareDigest` as a field. If the `compareDigest` value does not match the digest for the persisted value, the mutation will return an error. You can opt out of write guarantees by not sending `compareDigest` in the request.

  * metafields

    [\[Metafields​Set​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldsSetInput)

    required

    ### Arguments

    The list of metafield values to set. Maximum of 25.

  ***

* metaobject​Bulk​Delete

  [Metaobject​Bulk​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MetaobjectBulkDeletePayload)

  Asynchronously delete metaobjects and their associated metafields in bulk.

  * where

    [Metaobject​Bulk​Delete​Where​Condition!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectBulkDeleteWhereCondition)

    required

    ### Arguments

    Specifies the condition by which metaobjects are deleted. Exactly one field of input is required.

  ***

* metaobject​Create

  [Metaobject​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MetaobjectCreatePayload)

  Creates a metaobject entry based on an existing [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition). The type must match a definition that already exists in the shop.

  Specify field values using key-value pairs that correspond to the field definitions. The mutation generates a unique handle automatically if you don't provide one. You can also configure capabilities like publishable status to control the metaobject's visibility across channels.

  Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

  * metaobject

    [Metaobject​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectCreateInput)

    required

    ### Arguments

    The parameters for the metaobject to create.

  ***

* metaobject​Definition​Create

  [Metaobject​Definition​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MetaobjectDefinitionCreatePayload)

  Creates a metaobject definition that establishes the structure for custom data objects in your store. The definition specifies the fields, data types, and access permissions that all [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries of this type share.

  Use the `type` field to create a unique namespace for your metaobjects. Prefix the type with `$app:` to reserve the definition for your app's exclusive use. The definition can include capabilities like publishable status or translation eligibility, to extend how metaobjects integrate with Shopify's features.

  Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

  * definition

    [Metaobject​Definition​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectDefinitionCreateInput)

    required

    ### Arguments

    The input fields for creating a metaobject definition.

  ***

* metaobject​Definition​Delete

  [Metaobject​Definition​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MetaobjectDefinitionDeletePayload)

  Deletes the specified metaobject definition. Also deletes all related metafield definitions, metaobjects, and metafields asynchronously.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobjects definition to delete.

  ***

* metaobject​Definition​Update

  [Metaobject​Definition​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MetaobjectDefinitionUpdatePayload)

  Updates a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)'s configuration and field structure. You can modify the definition's name, description, display name key, access controls, and capabilities, as well as those of all its fields.

  The mutation supports reordering fields when `resetFieldOrder` is `true`, which arranges submitted fields first followed by alphabetized omitted fields.

  Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobject definition to update.

  * definition

    [Metaobject​Definition​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectDefinitionUpdateInput)

    required

    The input fields for updating a metaobject definition.

  ***

* metaobject​Delete

  [Metaobject​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MetaobjectDeletePayload)

  Deletes the specified metaobject and its associated metafields.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobject to delete.

  ***

* metaobject​Update

  [Metaobject​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MetaobjectUpdatePayload)

  Updates a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) with new field values, handle, or capabilities. [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects) are custom data structures that extend Shopify's data model.

  You can modify field values mapped to the metaobject's [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition), update the handle for a unique identifier, and adjust capabilities like publishing status. When updating the handle, you can optionally create a redirect from the old handle to maintain existing references.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobject to update.

  * metaobject

    [Metaobject​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectUpdateInput)

    required

    Specifies parameters to update on the metaobject.

  ***

* metaobject​Upsert

  [Metaobject​Upsert​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MetaobjectUpsertPayload)

  Creates or updates a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) based on its handle. If a metaobject with the specified handle exists, the mutation updates it with the provided field values. If no matching metaobject exists, the mutation creates a new one.

  The handle serves as a unique identifier within a metaobject type. Field values map to the [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)'s field keys and overwrite existing values during updates.

  * handle

    [Metaobject​Handle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectHandleInput)

    required

    ### Arguments

    The identifier of the metaobject to upsert.

  * metaobject

    [Metaobject​Upsert​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectUpsertInput)

    required

    The parameters to upsert the metaobject.

  ***

* mobile​Platform​Application​Create

  [Mobile​Platform​Application​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MobilePlatformApplicationCreatePayload)

  Create a mobile platform application.

  * input

    [Mobile​Platform​Application​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MobilePlatformApplicationCreateInput)

    required

    ### Arguments

    The input to create a mobile platform application.

  ***

* mobile​Platform​Application​Delete

  [Mobile​Platform​Application​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MobilePlatformApplicationDeletePayload)

  Delete a mobile platform application.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Mobile Platform Application to be deleted.

  ***

* mobile​Platform​Application​Update

  [Mobile​Platform​Application​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MobilePlatformApplicationUpdatePayload)

  Update a mobile platform application.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Mobile Platform Application to be updated.

  * input

    [Mobile​Platform​Application​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MobilePlatformApplicationUpdateInput)

    required

    The input to updat a Mobile Platform Application.

  ***

* order​Cancel

  [Order​Cancel​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderCancelPayload)

  Cancels an order, with options for refunding, restocking inventory, and customer notification.

  ***

  Caution

  Order cancellation is irreversible. An order that has been cancelled can't be restored to its original state.

  ***

  Use the `orderCancel` mutation to programmatically cancel orders in scenarios such as:

  * Customer-requested cancellations due to size, color, or other preference changes
  * Payment processing failures or declined transactions
  * Fraud detection and prevention
  * Insufficient inventory availability
  * Staff errors in order processing
  * Wholesale or B2B order management workflows

  The `orderCancel` mutation provides flexible refund options including refunding to original payment methods or issuing store credit. If a payment was only authorized (temporarily held) but not yet charged, that hold will be automatically released when the order is cancelled, even if you choose not to refund other payments.

  The mutation supports different cancellation reasons: customer requests, payment declines, fraud, inventory issues, staff errors, or other unspecified reasons. Each cancellation can include optional staff notes for internal documentation (notes aren't visible to customers).

  An order can only be cancelled if it meets the following criteria:

  * The order hasn't already been cancelled.
  * The order has no pending payment authorizations.
  * The order has no active returns in progress.
  * The order has no outstanding fulfillments that can't be cancelled.

  Orders might be assigned to locations that become [deactivated](https://help.shopify.com/manual/fulfillment/setup/locations-management#deactivate-and-reactivate-locations) after the order was created. When cancelling such orders, inventory behavior depends on payment status:

  * **Paid orders**: Cancellation will fail with an error if restocking is enabled, since inventory can't be returned to deactivated locations.
  * **Unpaid orders**: Cancellation succeeds but inventory is not restocked anywhere, even when the restock option is enabled. The committed inventory effectively becomes unavailable rather than being returned to stock at the deactivated location.

  After you cancel an order, you can still make limited updates to certain fields (like notes and tags) using the [`orderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate).

  For partial refunds or more complex refund scenarios on active orders, such as refunding only specific line items while keeping the rest of the order fulfilled, consider using the [`refundCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate) mutation instead of full order cancellation.

  Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order to be canceled.

  * refund

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Deprecated

  * refund​Method

    [Order​Cancel​Refund​Method​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCancelRefundMethodInput)

    Indicates how to refund the amount paid by the customer. Authorized payments will be voided regardless of this setting.

  * restock

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    Whether to restock the inventory committed to the order. For unpaid orders fulfilled from locations that have been deactivated, inventory will not be restocked to the deactivated locations even if this argument is set to true.

  * reason

    [Order​Cancel​Reason!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCancelReason)

    required

    The reason for canceling the order.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to send a notification to the customer about the order cancellation.

  * staff​Note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Default:null

    A staff-facing note about the order cancellation. This is not visible to the customer. Maximum length of 255 characters.

  ***

* order​Capture

  [Order​Capture​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderCapturePayload)

  Captures payment for an authorized transaction on an order. Use this mutation to claim the money that was previously reserved by an authorization transaction.

  The `orderCapture` mutation can be used in the following scenarios:

  * To capture the full amount of an authorized transaction
  * To capture a partial payment by specifying an amount less than the total order amount
  * To perform multiple captures on the same order, as long as the order transaction is [multi-capturable](https://shopify.dev/docs/api/admin-graphql/latest/objects/ordertransaction#field-OrderTransaction.fields.multiCapturable)

  ***

  Note

  Multi-capture functionality is only available to stores on a [Shopify Plus plan](https://help.shopify.com/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan). For multi-currency orders, the [`currency`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture#arguments-input.fields.currency) field is required and should match the presentment currency from the order.

  ***

  After capturing a payment, you can:

  * View the transaction details including status, amount, and processing information.
  * Track the captured amount in both shop and presentment currencies.
  * Monitor the transaction's settlement status.

  Learn more about [order transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction).

  * input

    [Order​Capture​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCaptureInput)

    required

    ### Arguments

    The input for the mutation.

  ***

* order​Close

  [Order​Close​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderClosePayload)

  Marks an open [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) as closed. A closed order is one where merchants fulfill or cancel all [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects and complete all financial transactions.

  Once closed, the order indicates that no further work is required. The order's [`closedAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-closedAt) timestamp is set when this mutation completes successfully.

  * input

    [Order​Close​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCloseInput)

    required

    ### Arguments

    The input for the mutation.

  ***

* order​Create

  [Order​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderCreatePayload)

  Creates an order with attributes such as customer information, line items, and shipping and billing addresses.

  Use the `orderCreate` mutation to programmatically generate orders in scenarios where orders aren't created through the standard checkout process, such as when importing orders from an external system or creating orders for wholesale customers.

  The `orderCreate` mutation doesn't support applying multiple discounts, such as discounts on line items. Automatic discounts won't be applied unless you replicate the logic of those discounts in your custom implementation. You can [apply a discount code](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateDiscountCodeInput), but only one discount code can be set for each order.

  ***

  Note

  If you're using the `orderCreate` mutation with a [trial](https://help.shopify.com/manual/intro-to-shopify/pricing-plans/free-trial) or [development store](https://shopify.dev/docs/api/development-stores), then you can create a maximum of five new orders per minute.

  ***

  After you create an order, you can make subsequent edits to the order using one of the following mutations:

  * [`orderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate): Used for simple updates to an order, such as changing the order's note, tags, or customer information.
  * [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin): Used when you need to make significant updates to an order, such as adding or removing line items, changing quantities, or modifying discounts. The `orderEditBegin` mutation initiates an order editing session, allowing you to make multiple changes before finalizing them. Learn more about using the `orderEditBegin` mutation to [edit existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

  * order

    [Order​Create​Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput)

    required

    ### Arguments

    The attributes of the new order.

  * options

    [Order​Create​Options​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOptionsInput)

    The strategies for updating inventory and whether to send shipping and order confirmations to customers.

  ***

* order​Create​Mandate​Payment

  [Order​Create​Mandate​Payment​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderCreateMandatePaymentPayload)

  Creates a payment for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) using a stored [`PaymentMandate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandate). A payment mandate represents the customer's authorization to charge their payment method for deferred payments, such as pre-orders or try-before-you-buy purchases.

  The mutation processes the payment asynchronously and returns a [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) for tracking the payment status. You can specify the payment amount to collect, and use the [`autoCapture`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment#arguments-autoCapture) argument to either immediately capture the payment or only authorize it for later capture. Each payment request requires a unique [`idempotencyKey`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment#arguments-idempotencyKey) to prevent duplicate charges. Subsequent calls with the same key return the original payment result rather than creating a new payment.

  Learn more about [deferred payments and payment mandates](https://shopify.dev/docs/apps/build/purchase-options/deferred#charging-the-remaining-balance) and [idempotent requests](https://shopify.dev/docs/api/usage/idempotent-requests).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order to collect the balance for.

  * payment​Schedule​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the payment schedule to collect the balance for.

  * idempotency​Key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A unique key to identify the payment request.

  * mandate​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The mandate ID used for payment.

  * amount

    [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    The payment amount to collect.

  * auto​Capture

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the payment should be authorized or captured. If `false`, then the authorization of the payment is triggered.

  ***

* order​Create​Manual​Payment

  [Order​Create​Manual​Payment​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderCreateManualPaymentPayload)

  Records a manual payment for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) that isn't fully paid. Use this mutation to track payments received outside the standard checkout process, such as cash, check, bank transfer, or other offline payment methods.

  You can specify the payment [amount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment#arguments-amount), [method name](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment#arguments-paymentMethodName), and [when it was processed](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment#arguments-processedAt).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order to create a manual payment for.

  * amount

    [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    The manual payment amount to be created.

  * payment​Method​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the payment method used for creating the payment. If none is provided, then the default manual payment method ('Other') will be used.

  * processed​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format) when a manual payment was processed. If you're importing transactions from an app or another platform, then you can set processedAt to a date and time in the past to match when the original transaction was created.

  ***

* order​Customer​Remove

  [Order​Customer​Remove​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderCustomerRemovePayload)

  Removes customer from an order.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order having its customer removed.

  ***

* order​Customer​Set

  [Order​Customer​Set​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderCustomerSetPayload)

  Sets a customer on an order.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order having a customer set.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer being set on the order.

  ***

* order​Delete

  [Order​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderDeletePayload)

  Permanently deletes an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) from the store.

  You can only delete [specific order types](https://help.shopify.com/manual/orders/cancel-delete-order#delete-an-order). Other orders you can cancel using the [`orderCancel`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCancel) mutation instead.

  ***

  Caution

  This action is irreversible. You can't recover deleted orders.

  ***

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order to be deleted.

  ***

* order​Edit​Add​Custom​Item

  [Order​Edit​Add​Custom​Item​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderEditAddCustomItemPayload)

  Adds a custom line item to an existing [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Custom line items represent products or services not in your catalog, such as gift wrapping, installation fees, or one-off charges.

  Creates a [`CalculatedLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem) with the specified title, price, and quantity. Changes remain in the edit session until you commit them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [adding custom line items](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders#add-a-custom-line-item).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit to which the custom item is added.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The name of the custom item to add.

  * location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the retail [location](https://shopify.dev/api/admin-graphql/latest/objects/location) (if applicable) from which the custom item is sold. Used for tax calculations. A default location will be chosen automatically if none is provided.

  * price

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    The unit price of the custom item. This value can't be negative.

  * quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The quantity of the custom item. This value must be greater than zero.

  * taxable

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the custom item is taxable. Defaults to `true`.

  * requires​Shipping

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the custom item requires shipping. Defaults to `false`.

  ***

* order​Edit​Add​Line​Item​Discount

  [Order​Edit​Add​Line​Item​Discount​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderEditAddLineItemDiscountPayload)

  Applies a discount to a [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) during an order edit session. The discount can be either a fixed amount or percentage value.

  To modify pricing on specific line items, use this mutation after starting an order edit with the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation. The changes remain staged until you commit them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit.

  * line​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the calculated line item to add the discount to.

  * discount

    [Order​Edit​Applied​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAppliedDiscountInput)

    required

    The discount to add to the line item.

  ***

* order​Edit​Add​Shipping​Line

  [Order​Edit​Add​Shipping​Line​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderEditAddShippingLinePayload)

  Adds a custom shipping line to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) during an edit session. Specify the shipping title and price to create a new [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine).

  Returns a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) showing the order with edits applied but not yet saved. To save your changes, use the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit to which the shipping line is added.

  * shipping​Line

    [Order​Edit​Add​Shipping​Line​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAddShippingLineInput)

    required

    The shipping line to be added.

  ***

* order​Edit​Add​Variant

  [Order​Edit​Add​Variant​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderEditAddVariantPayload)

  Adds a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) as a line item to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) that's being edited. The mutation respects the variant's contextual pricing.

  You can specify a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) to check for inventory availability and control whether duplicate variants are allowed. The [`quantity`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant#arguments-quantity) must be a positive value.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders#add-a-new-variant).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit.

  * variant​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the variant to add.

  * location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the [location](https://shopify.dev/api/admin-graphql/latest/objects/location) to check for inventory availability. A default location ID is chosen automatically if none is provided.

  * quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The quantity of the item to add to the order. Must be a positive value.

  * allow​Duplicates

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the mutation can create a line item for a variant that's already on the calculated order.

  ***

* order​Edit​Begin

  [Order​Edit​Begin​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderEditBeginPayload)

  Starts an order editing session that enables you to modify an existing [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). This mutation creates an [`OrderEditSession`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession) and returns a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) showing how the order looks with your changes applied.

  Order editing follows a three-step workflow: Begin the edit with [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin), apply changes using mutations like [`orderEditAddVariant`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant) or [`orderEditSetQuantity`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditSetQuantity), and then save the changes with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation. The session tracks all staged changes until you commit or abandon them.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order to begin editing.

  ***

* order​Edit​Commit

  [Order​Edit​Commit​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderEditCommitPayload)

  Applies staged changes from an order editing session to the original order. This finalizes all modifications made during the edit session, including changes to line items, quantities, discounts, and shipping lines.

  Order editing follows a three-step workflow: start with [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) to create an editing session, apply changes using various orderEdit mutations, and then save the changes with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation. The mutation can optionally notify the customer of changes and add staff notes for internal tracking.

  You can only edit unfulfilled line items. If an edit changes the total order value, then the customer might need to pay a balance or receive a refund.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session that will have its changes applied to the order.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether to notify the customer or not.

  * staff​Note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Note for staff members.

  ***

* order​Edit​Remove​Discount

  [Order​Edit​Remove​Discount​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderEditRemoveDiscountPayload)

  Removes a discount on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit from which the discount is removed.

  * discount​Application​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the [calculated discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/calculateddiscountapplication) to remove.

  ***

* order​Edit​Remove​Shipping​Line

  [Order​Edit​Remove​Shipping​Line​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderEditRemoveShippingLinePayload)

  Removes a shipping line from an existing order. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit from which the shipping line is removed.

  * shipping​Line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the calculated shipping line to remove.

  ***

* order​Edit​Set​Quantity

  [Order​Edit​Set​Quantity​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderEditSetQuantityPayload)

  Sets the quantity of a line item on an order that's being edited. Use this mutation to increase, decrease, or remove items by adjusting their quantities.

  Setting the quantity to zero effectively removes the line item from the order. The item still exists as a data structure with zero quantity. When decreasing quantities, you can optionally restock the removed items to inventory by setting the `restock` parameter to `true`.

  Learn more about [editing workflows for existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. The edit changes the quantity on the line item.

  * line​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the calculated line item to edit.

  * quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The new quantity to set for the line item. This value cannot be negative.

  * restock

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether or not to restock the line item when the updated quantity is less than the original quantity.

  * location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Deprecated

  ***

* order​Edit​Update​Discount

  [Order​Edit​Update​Discount​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderEditUpdateDiscountPayload)

  Updates a manual line level discount on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit used to update the discount.

  * discount

    [Order​Edit​Applied​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAppliedDiscountInput)

    required

    The updated discount.

  * discount​Application​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the [calculated discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/calculateddiscountapplication) to update.

  ***

* order​Edit​Update​Shipping​Line

  [Order​Edit​Update​Shipping​Line​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderEditUpdateShippingLinePayload)

  Updates a shipping line on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit used to update the shipping line.

  * shipping​Line

    [Order​Edit​Update​Shipping​Line​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditUpdateShippingLineInput)

    required

    The updated shipping line.

  * shipping​Line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the calculated shipping line to update.

  ***

* order​Invoice​Send

  [Order​Invoice​Send​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderInvoiceSendPayload)

  Sends an email invoice for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

  You can customize the email recipient, sender, and subject line using the [`email`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email) argument.

  ***

  Note

  Use store or staff account email addresses for the [`from`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email.fields.from) and [`bcc`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email.fields.bcc) input fields.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The order associated with the invoice.

  * email

    [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

    The email input fields for the order invoice. The `bcc` and `from` fields should be store or staff account emails.

  ***

* order​Mark​As​Paid

  [Order​Mark​As​Paid​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderMarkAsPaidPayload)

  Marks an order as paid by recording a payment transaction for the outstanding amount.

  Use the `orderMarkAsPaid` mutation to record payments received outside the standard checkout process. The `orderMarkAsPaid` mutation is particularly useful in scenarios where:

  * Orders were created with manual payment methods (cash on delivery, bank deposit, money order)
  * Payments were received offline and need to be recorded in the system
  * Previously authorized payments need to be captured manually
  * Orders require manual payment reconciliation due to external payment processing

  The mutation validates that the order can be marked as paid before processing. An order can be marked as paid only if it has a positive outstanding balance and its [financial status](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFinancialStatus) isn't already `PAID`. The mutation will either create a new sale transaction for the full outstanding amount or capture an existing authorized transaction, depending on the order's current payment state.

  After successfully marking an order as paid, the order's financial status is updated to reflect the payment, and payment events are logged for tracking and analytics purposes.

  Learn more about [managing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps) in apps.

  * input

    [Order​Mark​As​Paid​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderMarkAsPaidInput)

    required

    ### Arguments

    The input for the mutation.

  ***

* order​Open

  [Order​Open​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderOpenPayload)

  Opens a closed order.

  * input

    [Order​Open​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderOpenInput)

    required

    ### Arguments

    The input for the mutation.

  ***

* order​Risk​Assessment​Create

  [Order​Risk​Assessment​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderRiskAssessmentCreatePayload)

  Create a risk assessment for an order.

  * order​Risk​Assessment​Input

    [Order​Risk​Assessment​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderRiskAssessmentCreateInput)

    required

    ### Arguments

    The input fields required to create a risk assessment.

  ***

* order​Update

  [Order​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderUpdatePayload)

  Updates the attributes of an order, such as the customer's email, the shipping address for the order, tags, and [metafields](https://shopify.dev/docs/apps/build/custom-data) associated with the order.

  If you need to make significant updates to an order, such as adding or removing line items, changing quantities, or modifying discounts, then use the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation instead. The `orderEditBegin` mutation initiates an order editing session, allowing you to make multiple changes before finalizing them. Learn more about using the `orderEditBegin` mutation to [edit existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  If you need to remove a customer from an order, then use the [`orderCustomerRemove`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerRemove) mutation instead.

  Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

  * input

    [Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderInput)

    required

    ### Arguments

    The attributes of the updated order.

  ***

* page​Create

  [Page​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PageCreatePayload)

  Creates a [`Page`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page) for the online store.

  Pages contain custom content like "About Us" or "Contact" information that merchants display outside their product catalog. The page requires a [`title`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.title) and can include HTML content, publishing settings, and custom [template suffixes](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.templateSuffix). You can control visibility through the [`isPublished`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.isPublished) flag or schedule publication with a specific date.

  The mutation returns the complete page object upon successful creation or validation errors if the input is invalid.

  * page

    [Page​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PageCreateInput)

    required

    ### Arguments

    The properties of the new page.

  ***

* page​Delete

  [Page​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PageDeletePayload)

  Permanently deletes a page from the online store.

  For example, merchants might delete seasonal landing pages after campaigns end, or remove outdated policy pages when terms change.

  Use the `pageDelete` mutation to:

  * Remove outdated or unnecessary pages
  * Clean up seasonal landing pages
  * Delete duplicate pages

  The deletion is permanent and returns the deleted page's ID for confirmation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the page to be deleted.

  ***

* page​Update

  [Page​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PageUpdatePayload)

  Updates an existing page's content and settings.

  For example, merchants can update their "Shipping Policy" page when rates change, or refresh their "About Us" page with new team information.

  Use the `pageUpdate` mutation to:

  * Update page content and titles
  * Modify publication status
  * Change page handles for URL structure
  * Adjust template settings

  The mutation supports partial updates, allowing specific changes while preserving other page properties.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the page to be updated.

  * page

    [Page​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PageUpdateInput)

    required

    The properties of the page to be updated.

  ***

* payment​Customization​Activation

  [Payment​Customization​Activation​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PaymentCustomizationActivationPayload)

  Activates and deactivates payment customizations.

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global IDs of the payment customizations.

  * enabled

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    The enabled status of the payment customizations.

  ***

* payment​Customization​Create

  [Payment​Customization​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PaymentCustomizationCreatePayload)

  Creates a payment customization.

  * payment​Customization

    [Payment​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentCustomizationInput)

    required

    ### Arguments

    The input data used to create the payment customization.

  ***

* payment​Customization​Delete

  [Payment​Customization​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PaymentCustomizationDeletePayload)

  Deletes a payment customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the payment customization.

  ***

* payment​Customization​Update

  [Payment​Customization​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PaymentCustomizationUpdatePayload)

  Updates a payment customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the payment customization.

  * payment​Customization

    [Payment​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentCustomizationInput)

    required

    The input data used to update the payment customization.

  ***

* payment​Reminder​Send

  [Payment​Reminder​Send​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PaymentReminderSendPayload)

  Sends an email payment reminder for a payment schedule.

  * payment​Schedule​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The payment schedule id associated with the reminder.

  ***

* payment​Terms​Create

  [Payment​Terms​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PaymentTermsCreatePayload)

  Create payment terms on an order. To create payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

  * reference​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the reference orderId to add the payment terms for.

  * payment​Terms​Attributes

    [Payment​Terms​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsCreateInput)

    required

    The attributes used to create the payment terms.

  ***

* payment​Terms​Delete

  [Payment​Terms​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PaymentTermsDeletePayload)

  Delete payment terms for an order. To delete payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

  * input

    [Payment​Terms​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsDeleteInput)

    required

    ### Arguments

    The input fields used to delete the payment terms.

  ***

* payment​Terms​Update

  [Payment​Terms​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PaymentTermsUpdatePayload)

  Update payment terms on an order. To update payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

  * input

    [Payment​Terms​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsUpdateInput)

    required

    ### Arguments

    The input fields used to update the payment terms.

  ***

* price​List​Create

  [Price​List​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PriceListCreatePayload)

  Creates a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Price lists enable contextual pricing by defining fixed prices or percentage-based adjustments.

  The price list requires a unique name, currency for fixed prices, and parent adjustment settings that determine how the system calculates prices relative to base prices. To apply contextual pricing, link the price list to a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog). When that catalog's context is matched, customers receive the price list's prices.

  Learn more about [building catalogs with price lists](https://shopify.dev/docs/apps/build/markets/build-catalog#step-2-associate-a-price-list-with-the-catalog).

  * input

    [Price​List​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListCreateInput)

    required

    ### Arguments

    The properties of the new price list.

  ***

* price​List​Delete

  [Price​List​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PriceListDeletePayload)

  Deletes a price list. For example, you can delete a price list so that it no longer applies for products in the associated market.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to be deleted.

  ***

* price​List​Fixed​Prices​Add

  [Price​List​Fixed​Prices​Add​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PriceListFixedPricesAddPayload)

  Creates or updates fixed prices on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Use this mutation to set specific prices for [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects that override the price list's default percentage-based adjustments.

  When you add fixed prices, the mutation replaces any existing fixed prices for those variants on the price list.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to which the fixed prices will be added or updated.

  * prices

    [\[Price​List​Price​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput)

    required

    The list of fixed prices to add or update in the price list.

  ***

* price​List​Fixed​Prices​By​Product​Update

  [Price​List​Fixed​Prices​By​Product​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PriceListFixedPricesByProductUpdatePayload)

  Sets or removes fixed prices for all variants of a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Simplifies pricing management when all variants of a product should have the same price on a price list, rather than setting individual variant prices.

  When you add a fixed price for a product, all its [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects receive the same price on the price list. When you remove a product's fixed prices, all variant prices revert to the price list's adjustment rules.

  * prices​To​Add

    [\[Price​List​Product​Price​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListProductPriceInput)

    ### Arguments

    A list of `PriceListProductPriceInput` that identifies which products to update the fixed prices for.

  * prices​To​Delete​By​Product​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    A list of product IDs that identifies which products to remove the fixed prices for.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The price list to update the prices for.

  ***

* price​List​Fixed​Prices​Delete

  [Price​List​Fixed​Prices​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PriceListFixedPricesDeletePayload)

  Deletes specific fixed prices from a price list using a product variant ID. You can use the `priceListFixedPricesDelete` mutation to delete a set of fixed prices from a price list. After deleting the set of fixed prices from the price list, the price of each product variant reverts to the original price that was determined by the price list adjustment.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list from which the fixed prices will be removed.

  * variant​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    A list of product variant IDs whose fixed prices will be removed from the price list.

  ***

* price​List​Fixed​Prices​Update

  [Price​List​Fixed​Prices​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PriceListFixedPricesUpdatePayload)

  Updates fixed prices on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). This mutation lets you add new fixed prices for specific [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects and remove existing prices in a single operation.

  Use this mutation to modify variant pricing on a price list by providing prices to add and variant IDs to delete.

  Learn more about [setting fixed prices for product variants](https://shopify.dev/docs/apps/build/markets/build-catalog#step-3-set-fixed-prices-for-specific-product-variants).

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The price list that the prices will be updated against.

  * prices​To​Add

    [\[Price​List​Price​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput)

    required

    The fixed prices to add.

  * variant​Ids​To​Delete

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    A list of product variant IDs to remove from the price list.

  ***

* price​List​Update

  [Price​List​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PriceListUpdatePayload)

  Updates a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)'s configuration, including its name, currency, [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) association, and pricing adjustments.

  Changing the currency removes all fixed prices from the price list. The affected [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects revert to prices calculated from the price list's adjustment settings.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to update.

  * input

    [Price​List​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListUpdateInput)

    required

    The input data used to update the price list.

  ***

* privacy​Features​Disable

  [Privacy​Features​Disable​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PrivacyFeaturesDisablePayload)

  Disable a shop's privacy features.

  * features​To​Disable

    [\[Privacy​Features​Enum!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyFeaturesEnum)

    required

    ### Arguments

    The list of privacy features to disable.

  ***

* product​Bundle​Create

  [Product​Bundle​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductBundleCreatePayload)

  Creates a product bundle that groups multiple [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects together as components. The bundle appears as a single product in the store, with its price determined by the parent product and inventory calculated from the component products.

  The mutation runs asynchronously and returns a [`ProductBundleOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation) object to track the creation status. Poll the operation using the [`productOperation`](https://shopify.dev/docs/api/admin-graphql/latest/queries/productOperation) query to determine when the bundle is ready.

  Learn more about [creating product fixed bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle#step-1-create-a-bundle).

  * input

    [Product​Bundle​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleCreateInput)

    required

    ### Arguments

    Input for creating a product bundle or componentized product.

  ***

* product​Bundle​Update

  [Product​Bundle​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductBundleUpdatePayload)

  Updates a product bundle or componentized product.

  * input

    [Product​Bundle​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleUpdateInput)

    required

    ### Arguments

    Input for updating a product bundle or componentized product.

  ***

* product​Create

  [Product​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductCreatePayload)

  Creates a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with attributes such as title, description, vendor, and media.

  The `productCreate` mutation helps you create many products at once, avoiding the tedious or time-consuming process of adding them one by one in the Shopify admin. Common examples include creating products for a new collection, launching a new product line, or adding seasonal products.

  You can define product [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and [values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue), allowing you to create products with different variations like sizes or colors. You can also associate media files to your products, including images and videos.

  The `productCreate` mutation only supports creating a product with its initial [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). To create multiple product variants for a single product and manage prices, use the [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate) mutation.

  ***

  Note

  The `productCreate` mutation has a [throttle](https://shopify.dev/docs/api/usage/rate-limits#resource-based-rate-limits) that takes effect when a store has 50,000 product variants. After this threshold is reached, no more than 1,000 new product variants can be created per day.

  ***

  After you create a product, you can make subsequent edits to the product using one of the following mutations:

  * [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish): Used to publish the product and make it available to customers. The `productCreate` mutation creates products in an unpublished state by default, so you must perform a separate operation to publish the product.
  * [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Used to update a single product, such as changing the product's title, description, vendor, or associated media.
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * input

    [Product​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput)

    Deprecated

    ### Arguments

  * product

    [Product​Create​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductCreateInput)

    The attributes of the new product.

  * media

    [\[Create​Media​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    The media to add to the product.

  ***

* product​Delete

  [Product​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductDeletePayload)

  Permanently deletes a product and all its associated data, including variants, media, publications, and inventory items.

  Use the `productDelete` mutation to programmatically remove products from your store when they need to be permanently deleted from your catalog, such as when removing discontinued items, cleaning up test data, or synchronizing with external inventory management systems.

  The `productDelete` mutation removes the product from all associated collections, and removes all associated data for the product, including:

  * All product variants and their inventory items
  * Product media (images, videos) that are not referenced by other products
  * [Product options](https://shopify.dev/api/admin-graphql/latest/objects/ProductOption) and [option values](https://shopify.dev/api/admin-graphql/latest/objects/ProductOptionValue)
  * Product publications across all sales channels
  * Product tags and metadata associations

  The `productDelete` mutation also has the following effects on existing orders and transactions:

  * **Draft orders**: Existing draft orders that reference this product will retain the product information as stored data, but the product reference will be removed. Draft orders can still be completed with the stored product details.
  * **Completed orders and refunds**: Previously completed orders that included this product aren't affected. The product information in completed orders is preserved for record-keeping, and existing refunds for this product remain valid and processable.

  ***

  Caution

  Product deletion is irreversible. After a product is deleted, it can't be recovered. Consider archiving or unpublishing products instead if you might need to restore them later.

  ***

  If you need to delete a large product, such as one that has many [variants](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant) that are active at several [locations](https://shopify.dev/api/admin-graphql/latest/objects/Location), you might encounter timeout errors. To avoid these timeout errors, you can set the [`synchronous`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete#arguments-synchronous) parameter to `false` to run the deletion asynchronously, which returns a [`ProductDeleteOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation) that you can monitor for completion status.

  If you need more granular control over product cleanup, consider using these alternative mutations:

  * [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Update the product status to archived or unpublished instead of deleting.
  * [`productVariantsBulkDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete): Delete specific variants while keeping the product.
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete): Delete the choices available for a product, such as size, color, or material.

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model).

  * input

    [Product​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductDeleteInput)

    required

    ### Arguments

    Specifies the product to delete by its ID.

  * synchronous

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Specifies whether or not to run the mutation synchronously.

  ***

* product​Duplicate

  [Product​Duplicate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductDuplicatePayload)

  Duplicates a product.

  If you need to duplicate a large product, such as one that has many [variants](https://shopify.dev/api/admin-graphql/latest/input-objects/ProductVariantInput) that are active at several [locations](https://shopify.dev/api/admin-graphql/latest/input-objects/InventoryLevelInput), you might encounter timeout errors.

  To avoid these timeout errors, you can instead duplicate the product asynchronously.

  In API version 2024-10 and higher, include `synchronous: false` argument in this mutation to perform the duplication asynchronously.

  In API version 2024-07 and lower, use the asynchronous [`ProductDuplicateAsyncV2`](https://shopify.dev/api/admin-graphql/2024-07/mutations/productDuplicateAsyncV2).

  Metafield values are not duplicated if the unique values capability is enabled.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product to be duplicated.

  * new​Title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The new title of the product.

  * new​Status

    [Product​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus)

    The new status of the product. If no value is provided the status will be inherited from the original product.

  * include​Images

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Specifies whether or not to duplicate images.

  * include​Translations

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Specifies whether or not to duplicate translations.

  * synchronous

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Specifies whether or not to run the mutation synchronously.

  ***

* product​Feed​Create

  [Product​Feed​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductFeedCreatePayload)

  Creates a product feed for a specific publication.

  * input

    [Product​Feed​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductFeedInput)

    ### Arguments

    The properties of the new product feed.

  ***

* product​Feed​Delete

  [Product​Feed​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductFeedDeletePayload)

  Deletes a product feed for a specific publication.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product feed to be deleted.

  ***

* product​Full​Sync

  [Product​Full​Sync​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductFullSyncPayload)

  Runs the full product sync for a given shop.

  * before​Updated​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    ### Arguments

    Syncs only products that haven't changed since the specified timestamp.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The product feed which needs syncing.

  * updated​At​Since

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    Syncs only products that have changed since the specified timestamp.

  ***

* product​Join​Selling​Plan​Groups

  [Product​Join​Selling​Plan​Groups​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductJoinSellingPlanGroupsPayload)

  Adds multiple selling plan groups to a product.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to add.

  ***

* product​Leave​Selling​Plan​Groups

  [Product​Leave​Selling​Plan​Groups​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductLeaveSellingPlanGroupsPayload)

  Removes multiple groups from a product.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to add.

  ***

* product​Options​Create

  [Product​Options​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductOptionsCreatePayload)

  Creates one or more [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as size, color, or material. Each option includes a name, position, and a list of values. The combination of a product option and value creates a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

  Use the `productOptionsCreate` mutation for the following use cases:

  * **Add product choices**: Add a new option, like "Size" (Small, Medium, Large) or "Color" (Red, Blue, Green), to an existing product so customers can select their preferred variant.
  * **Enable personalization features**: Add options such as "Engraving text" to let customers customize their purchase.
  * **Offer seasonal or limited edition products**: Add a new value (for example, "Holiday red") to an existing option to support limited-time or seasonal variants.
  * **Integrate with apps that manage product configuration**: Allow third-party apps to add options, like "Bundle size", when customers select or customize [product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).
  * **Link options to metafields**: Associate a product option with a custom [metafield](https://shopify.dev/docs/apps/build/custom-data), like "Fabric code", for richer integrations with other systems or apps.

  ***

  Note

  The `productOptionsCreate` mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant. If you use the [`CREATE` variant strategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate#arguments-variantStrategy.enums.CREATE), consider the maximum allowed number of variants for each product is 2048.

  ***

  After you create product options, you can further manage a product's configuration using related mutations:

  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product to update.

  * options

    [\[Option​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionCreateInput)

    required

    Options to add to the product.

  * variant​Strategy

    [Product​Option​Create​Variant​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionCreateVariantStrategy)

    Default:LEAVE\_AS\_IS

    The strategy defines which behavior the mutation should observe regarding variants. If not provided or set to null, the strategy `LEAVE_AS_IS` will be used.

  ***

* product​Options​Delete

  [Product​Options​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductOptionsDeletePayload)

  Deletes one or more [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) from a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product). Product options define the choices available for a product, such as size, color, or material.

  ***

  Caution

  Removing an option can affect a product's [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) and their configuration. Deleting an option might also delete associated option values and, depending on the chosen [strategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete#arguments-strategy), might affect variants.

  ***

  Use the `productOptionsDelete` mutation for the following use cases:

  * **Simplify product configuration**: Remove obsolete or unnecessary options (for example, discontinue "Material" if all variants are now the same material).
  * **Clean up after seasonal or limited-time offerings**: Delete options that are no longer relevant (for example, "Holiday edition").
  * **Automate catalog management**: Enable apps or integrations to programmatically remove options as product data changes.

  ***

  Note

  The `productOptionsDelete` mutation enforces strict data integrity for product options and variants. All option positions must remain sequential, and every remaining option must be used by at least one variant.

  ***

  After you delete a product option, you can further manage a product's configuration using related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the product from which to delete the options.

  * options

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    IDs of the options to delete from the product.

  * strategy

    [Product​Option​Delete​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionDeleteStrategy)

    Default:DEFAULT

    The strategy defines which behavior the mutation should observe,such as how to handle a situation where deleting an option would result in duplicate variants.

  ***

* product​Options​Reorder

  [Product​Options​Reorder​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductOptionsReorderPayload)

  Reorders the [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and [option values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), updating the order in which [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) are presented to customers.

  The `productOptionsReorder` mutation accepts a list of product options, each identified by `id` or `name`, and an optional list of values (also by `id` or `name`) specifying the new order. The order of options in the mutation's input determines their new positions (for example, the first option becomes `option1`). The order of values within each option determines their new positions. The mutation recalculates the order of variants based on the new option and value order.

  Suppose a product has the following variants:

  1. `"Red / Small"`
  2. `"Green / Medium"`
  3. `"Blue / Small"`

  You reorder options and values:

  ```
  options: [
  { name: "Size", values: [{ name: "Small" }, { name: "Medium" }] },
  { name: "Color", values: [{ name: "Green" }, { name: "Red" }, { name: "Blue" }] }
  ]
  ```

  The resulting variant order will be:

  1. `"Small / Green"`
  2. `"Small / Red"`
  3. `"Small / Blue"`
  4. `"Medium / Green"`

  Use the `productOptionsReorder` mutation for the following use cases:

  * **Change the order of product options**: For example, display "Color" before "Size" in a store.
  * **Reorder option values within an option**: For example, show "Red" before "Blue" in a color picker.
  * **Control the order of product variants**: The order of options and their values determines the sequence in which variants are listed and selected.
  * **Highlight best-selling options**: Present the most popular or relevant options and values first.
  * **Promote merchandising strategies**: Highlight seasonal colors, limited editions, or featured sizes.

  ***

  Note

  The `productOptionsReorder` mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant.

  ***

  After you reorder product options, you can further manage a product's configuration using related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [managing product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product to update.

  * options

    [\[Option​Reorder​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionReorderInput)

    required

    Options to reorder on the product.

  ***

* product​Option​Update

  [Product​Option​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductOptionUpdatePayload)

  Updates an [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as size, color, or material. Each option includes a name, position, and a list of values. The combination of a product option and value creates a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

  Use the `productOptionUpdate` mutation for the following use cases:

  * **Update product choices**: Modify an existing option, like "Size" (Small, Medium, Large) or "Color" (Red, Blue, Green), so customers can select their preferred variant.
  * **Enable personalization features**: Update an option (for example, "Engraving text") to let customers customize their purchase.
  * **Offer seasonal or limited edition products**: Update a value (for example, "Holiday red") on an existing option to support limited-time or seasonal variants.
  * **Integrate with apps that manage product configuration**: Allow third-party apps to update options, like "Bundle size", when customers select or customize [product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).
  * **Link options to metafields**: Associate a product option with a custom [metafield](https://shopify.dev/docs/apps/build/custom-data), like "Fabric code", for richer integrations with other systems or apps.

  ***

  Note

  The `productOptionUpdate` mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant.

  ***

  After you update a product option, you can further manage a product's configuration using related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * option

    [Option​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionUpdateInput)

    required

    ### Arguments

    Option to update.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the Product the Option belongs to.

  * option​Values​To​Add

    [\[Option​Value​Create​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionValueCreateInput)

    New option values to create.

  * option​Values​To​Update

    [\[Option​Value​Update​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionValueUpdateInput)

    Existing option values to update.

  * option​Values​To​Delete

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    IDs of the existing option values to delete.

  * variant​Strategy

    [Product​Option​Update​Variant​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionUpdateVariantStrategy)

    The strategy defines which behavior the mutation should observe regarding variants, such as creating variants or deleting them in response to option values to add or to delete. If not provided or set to null, the strategy `LEAVE_AS_IS` will be used.

  ***

* product​Reorder​Media

  [Product​Reorder​Media​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductReorderMediaPayload)

  Reorders [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media) attached to a product, changing their sequence in product displays. The operation processes asynchronously to handle [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with large media collections.

  Specify the [product ID](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia#arguments-id) and an array of [moves](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia#arguments-moves), where each move contains a media ID and its new zero-based position.

  ***

  Note

  Only include media items that need repositioning. Unchanged items maintain their relative order automatically.

  ***

  The mutation returns a [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) to track the reordering progress. Poll the job status to determine when the operation completes and media positions update across all sales channels.

  Learn more about [reordering product media](https://shopify.dev/docs/apps/build/online-store/product-media#step-6-reorder-media-objects).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product on which to reorder medias.

  * moves

    [\[Move​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoveInput)

    required

    A list of moves to perform which will be evaluated in order.

  ***

* product​Set

  [Product​Set​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductSetPayload)

  Performs multiple operations to create or update products in a single request.

  Use the `productSet` mutation to sync information from an external data source into Shopify, manage large product catalogs, and perform batch updates. The mutation is helpful for bulk product management, including price adjustments, inventory updates, and product lifecycle management.

  The behavior of `productSet` depends on the type of field it's modifying:

  * **For list fields**: Creates new entries, updates existing entries, and deletes existing entries that aren't included in the mutation's input. Common examples of list fields include [`collections`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.collections), [`metafields`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.metafields), and [`variants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.variants).

  * **For all other field types**: Updates only the included fields. Any omitted fields will remain unchanged.

  ***

  Note

  By default, stores have a limit of 2048 product variants for each product.

  ***

  You can run `productSet` in one of the following modes:

  * **Synchronously**: Returns the updated product in the response.
  * **Asynchronously**: Returns a [`ProductSetOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation) object. Use the [`productOperation`](https://shopify.dev/api/admin-graphql/latest/queries/productOperation) query to check the status of the operation and retrieve details of the updated product and its product variants.

  If you need to only manage product variants, then use one of the following mutations:

  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productVariantsBulkDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete)

  If you need to only manage product options, then use one of the following mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

  Learn more about [syncing product data from an external source](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/sync-data).

  * input

    [Product​Set​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput)

    required

    ### Arguments

    The properties of the newly created or updated product.

  * synchronous

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the mutation should be run synchronously or asynchronously.

    If `true`, the mutation will return the updated `product`.

    If `false`, the mutation will return a `productSetOperation`.

    Defaults to `true`.

    Setting `synchronous: false` may be desirable depending on the input complexity/size, and should be used if you are experiencing timeouts.

    **Note**: When run in the context of a [bulk operation](https://shopify.dev/api/usage/bulk-operations/imports), the mutation will always run synchronously and this argument will be ignored.

  * identifier

    [Product​Set​Identifiers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetIdentifiers)

    Specifies the identifier that will be used to lookup the resource.

  ***

* product​Update

  [Product​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductUpdatePayload)

  Updates a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with attributes such as title, description, vendor, and media.

  The `productUpdate` mutation helps you modify many products at once, avoiding the tedious or time-consuming process of updating them one by one in the Shopify admin. Common examples including updating product details like status or tags.

  The `productUpdate` mutation doesn't support updating [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). To update multiple product variants for a single product and manage prices, use the [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate) mutation.

  ***

  Note

  The `productUpdate` mutation has a [throttle](https://shopify.dev/docs/api/usage/rate-limits#resource-based-rate-limits) that takes effect when a store has 50,000 product variants. After this threshold is reached, no more than 1,000 new product variants can be updated per day.

  ***

  After updating a product, you can make additional changes using one of the following mutations:

  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.
  * [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish): Used to publish the product and make it available to customers, if the product is currently unpublished.

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * input

    [Product​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput)

    Deprecated

    ### Arguments

  * product

    [Product​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUpdateInput)

    The updated properties for a product.

  * media

    [\[Create​Media​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    List of new media to be added to the product.

  ***

* product​Variant​Append​Media

  [Product​Variant​Append​Media​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductVariantAppendMediaPayload)

  Appends existing media from a product to specific variants of that product, creating associations between media files and particular product options. This allows different variants to showcase relevant images or videos.

  For example, a t-shirt product might have color variants where each color variant displays only the images showing that specific color, helping customers see exactly what they're purchasing.

  Use `ProductVariantAppendMedia` to:

  * Associate specific images with product variants for accurate display
  * Build variant-specific media management in product interfaces
  * Implement automated media assignment based on variant attributes

  The operation links existing product media to variants without duplicating files, maintaining efficient media storage while enabling variant-specific displays.

  Learn more about [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product associated to the media.

  * variant​Media

    [\[Product​Variant​Append​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantAppendMediaInput)

    required

    A list of pairs of variants and media to be attached to the variants.

  ***

* product​Variant​Detach​Media

  [Product​Variant​Detach​Media​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductVariantDetachMediaPayload)

  Detaches media from product variants.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product to which the variants and media are associated.

  * variant​Media

    [\[Product​Variant​Detach​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantDetachMediaInput)

    required

    A list of pairs of variants and media to be deleted from the variants.

  ***

* product​Variant​Join​Selling​Plan​Groups

  [Product​Variant​Join​Selling​Plan​Groups​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductVariantJoinSellingPlanGroupsPayload)

  Adds multiple selling plan groups to a product variant.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product variant.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to add.

  ***

* product​Variant​Leave​Selling​Plan​Groups

  [Product​Variant​Leave​Selling​Plan​Groups​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductVariantLeaveSellingPlanGroupsPayload)

  Remove multiple groups from a product variant.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product variant.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to leave.

  ***

* product​Variant​Relationship​Bulk​Update

  [Product​Variant​Relationship​Bulk​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductVariantRelationshipBulkUpdatePayload)

  Creates new bundles, updates component quantities in existing bundles, and removes bundle components for one or multiple [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

  Each bundle variant can contain up to 30 component variants with specified quantities. After an app assigns components to a bundle, only that app can manage those components.

  ***

  Note

  For most use cases, use [`productBundleCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleCreate) instead, which creates product fixed bundles. `productVariantRelationshipBulkUpdate` is for [variant fixed bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-variant-fixed-bundle), where each variant has its own component configuration.

  ***

  * input

    [\[Product​Variant​Relationship​Update​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantRelationshipUpdateInput)

    required

    ### Arguments

    The input options for the product variant being updated.

  ***

* product​Variants​Bulk​Create

  [Product​Variants​Bulk​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductVariantsBulkCreatePayload)

  Creates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) for a single [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in one operation. You can run this mutation directly or as part of a [bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/imports) for large-scale catalog updates.

  Use the `productVariantsBulkCreate` mutation to efficiently add new product variants—such as different sizes, colors, or materials—to an existing product. The mutation is helpful if you need to add product variants in bulk, such as importing from an external system.

  The mutation supports:

  * Creating variants with custom option values
  * Associating media (for example, images, videos, and 3D models) with the product or its variants
  * Handling complex product configurations

  ***

  Note

  By default, stores have a limit of 2048 product variants for each product.

  ***

  After creating variants, you can make additional changes using one of the following mutations:

  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate): Updates multiple product variants for a single product in one operation.
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.

  You can also specifically manage product options through related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * variants

    [\[Product​Variants​Bulk​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput)

    required

    ### Arguments

    An array of product variants to be created.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the product on which to create the variants.

  * media

    [\[Create​Media​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    List of new media to be added to the product.

  * strategy

    [Product​Variants​Bulk​Create​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkCreateStrategy)

    Default:DEFAULT

    The strategy defines which behavior the mutation should observe, such as whether to keep or delete the standalone variant (when product has only a single or default variant) when creating new variants in bulk.

  ***

* product​Variants​Bulk​Delete

  [Product​Variants​Bulk​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductVariantsBulkDeletePayload)

  Deletes multiple variants in a single [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product). Specify the product ID and an array of variant IDs to remove variants in bulk. You can call this mutation directly or through the [`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation) mutation. Returns the updated product and any [`UserError`](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError) objects.

  * variants​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    An array of product variants IDs to delete.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the product with the variants to update.

  ***

* product​Variants​Bulk​Reorder

  [Product​Variants​Bulk​Reorder​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductVariantsBulkReorderPayload)

  Reorders multiple variants in a single product. This mutation can be called directly or via the bulkOperation.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The product ID of the variants to be reordered.

  * positions

    [\[Product​Variant​Position​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantPositionInput)

    required

    An array of variant positions.

  ***

* product​Variants​Bulk​Update

  [Product​Variants​Bulk​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductVariantsBulkUpdatePayload)

  Updates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) for a single [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in one operation. You can run this mutation directly or as part of a [bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/imports) for large-scale catalog updates.

  Use the `productVariantsBulkUpdate` mutation to efficiently modify product variants—such as different sizes, colors, or materials—associated with an existing product. The mutation is helpful if you need to update a product's variants in bulk, such as importing from an external system.

  The mutation supports:

  * Updating variants with custom option values
  * Associating media (for example, images, videos, and 3D models) with the product or its variants
  * Handling complex product configurations

  ***

  Note

  By default, stores have a limit of 2048 product variants for each product.

  ***

  After creating variants, you can make additional changes using the [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet) mutation, which is used to perform multiple operations on products, such as creating or modifying product options and variants.

  You can also specifically manage product options through related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * variants

    [\[Product​Variants​Bulk​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput)

    required

    ### Arguments

    An array of product variants to update.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the product associated with the variants to update.

  * media

    [\[Create​Media​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    List of new media to be added to the product.

  * allow​Partial​Updates

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    When partial updates are allowed, valid variant changes may be persisted even if some of the variants updated have invalid data and cannot be persisted. When partial updates are not allowed, any error will prevent all variants from updating.

  ***

* publication​Create

  [Publication​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PublicationCreatePayload)

  Creates a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that controls which [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) customers can access through a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog).

  You can create an empty publication and add products later, or prepopulate it with all existing products. The [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationCreate#arguments-input.fields.autoPublish) field determines whether the publication automatically adds newly created products.

  * input

    [Publication​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationCreateInput)

    required

    ### Arguments

    The input fields to use when creating the publication.

  ***

* publication​Delete

  [Publication​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PublicationDeletePayload)

  Deletes a publication.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the publication to delete.

  ***

* publication​Update

  [Publication​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PublicationUpdatePayload)

  Updates a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

  You can add or remove [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) from the publication, with a maximum of 50 items per operation. The [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationUpdate#arguments-input.fields.autoPublish) field determines whether new products automatically display in this publication.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the publication to update.

  * input

    [Publication​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationUpdateInput)

    required

    The input fields to use when updating the publication.

  ***

* publishable​Publish

  [Publishable​Publish​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PublishablePublishPayload)

  Publishes a resource, such as a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), to one or more [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

  For products to be visible in a channel, they must have an active [`ProductStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus). Products sold exclusively on subscription (`requiresSellingPlan: true`) can only be published to online stores.

  You can schedule future publication by providing a publish date. Only online store channels support [scheduled publishing](https://shopify.dev/docs/apps/build/sales-channels/scheduled-product-publishing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The resource to create or update publications for.

  * input

    [\[Publication​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationInput)

    required

    Specifies the input fields required to publish a resource.

  ***

* publishable​Publish​To​Current​Channel

  [Publishable​Publish​To​Current​Channel​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PublishablePublishToCurrentChannelPayload)

  Publishes a resource to the current [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) associated with the requesting app. The system determines the current channel by the app's API client ID. Resources include [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) objects that implement the [`Publishable`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable) interface.

  For products to be visible in the channel, they must have an active [`ProductStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus). Products sold exclusively on subscription ([`requiresSellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.requiresSellingPlan): `true`) can only be published to online stores.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The resource to create or update publications for.

  ***

* publishable​Unpublish

  [Publishable​Unpublish​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PublishableUnpublishPayload)

  Unpublishes a resource, such as a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), from one or more [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication). The resource remains in your store but becomes unavailable to customers.

  For products to be visible in a channel, they must have an active [`ProductStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The resource to delete or update publications for.

  * input

    [\[Publication​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationInput)

    required

    Specifies the input fields required to unpublish a resource.

  ***

* publishable​Unpublish​To​Current​Channel

  [Publishable​Unpublish​To​Current​Channel​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PublishableUnpublishToCurrentChannelPayload)

  Unpublishes a resource from the current channel. If the resource is a product, then it's visible in the channel only if the product status is `active`.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The resource to delete or update publications for.

  ***

* pub​Sub​Server​Pixel​Update

  [Pub​Sub​Server​Pixel​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PubSubServerPixelUpdatePayload)

  Updates the server pixel to connect to a Google PubSub endpoint. Running this mutation deletes any previous subscriptions for the server pixel.

  * pub​Sub​Project

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The Google PubSub project ID.

  * pub​Sub​Topic

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The Google PubSub topic ID.

  ***

* quantity​Pricing​By​Variant​Update

  [Quantity​Pricing​By​Variant​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/QuantityPricingByVariantUpdatePayload)

  Updates quantity pricing on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for specific [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects. You can set fixed prices (see [`PriceListPrice`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice)), quantity rules, and quantity price breaks in a single operation.

  [`QuantityRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule) objects define minimum, maximum, and increment constraints for ordering. [`QuantityPriceBreak`](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreak) objects offer tiered pricing based on purchase volume.

  The mutation executes delete operations before create operations and doesn't allow partial updates.

  ***

  Note

  If any requested change fails, then the mutation doesn't apply any of the changes.

  ***

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list for which quantity pricing will be updated.

  * input

    [Quantity​Pricing​By​Variant​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPricingByVariantUpdateInput)

    required

    The input data used to update the quantity pricing in the price list.

  ***

* quantity​Rules​Add

  [Quantity​Rules​Add​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/QuantityRulesAddPayload)

  Creates or updates existing quantity rules on a price list. You can use the `quantityRulesAdd` mutation to set order level minimums, maximumums and increments for specific product variants.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to which the quantity rules will be added or updated.

  * quantity​Rules

    [\[Quantity​Rule​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityRuleInput)

    required

    The list of quantity rules to add or update in the price list.

  ***

* quantity​Rules​Delete

  [Quantity​Rules​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/QuantityRulesDeletePayload)

  Deletes specific quantity rules from a price list using a product variant ID. You can use the `quantityRulesDelete` mutation to delete a set of quantity rules from a price list.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list from which the quantity rules will be deleted.

  * variant​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    A list of product variant IDs whose quantity rules will be removed from the price list.

  ***

* refund​Create

  [Refund​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/RefundCreatePayload)

  Creates a refund for an order, allowing you to process returns and issue payments back to customers.

  Use the `refundCreate` mutation to programmatically process refunds in scenarios where you need to return money to customers, such as when handling returns, processing chargebacks, or correcting order errors.

  The `refundCreate` mutation supports various refund scenarios:

  * Refunding line items with optional restocking
  * Refunding shipping costs
  * Refunding duties and import taxes
  * Refunding additional fees
  * Processing refunds through different payment methods
  * Issuing store credit refunds (when enabled)

  You can create both full and partial refunds, and optionally allow over-refunding in specific cases.

  After creating a refund, you can track its status and details through the order's [`refunds`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.refunds) field. The refund is associated with the order and can be used for reporting and reconciliation purposes.

  Learn more about [managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) and [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties).

  ***

  Note

  The refunding behavior of the `refundCreate` mutation is similar to the [`refundReturn`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRefund) mutation. The key difference is that the `refundCreate` mutation lets you to specify restocking behavior for line items, whereas the `returnRefund` mutation focuses solely on handling the financial refund without any restocking input.

  ***

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Refund​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundInput)

    required

    ### Arguments

    The input fields that are used in the mutation for creating a refund.

  ***

* remove​From​Return

  [Remove​From​Return​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/RemoveFromReturnPayload)

  Removes return and/or exchange lines from a return.

  * return​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return for line item removal.

  * return​Line​Items

    [\[Return​Line​Item​Remove​From​Return​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnLineItemRemoveFromReturnInput)

    The return line items to remove from the return.

  * exchange​Line​Items

    [\[Exchange​Line​Item​Remove​From​Return​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemRemoveFromReturnInput)

    The exchange line items to remove from the return.

  ***

* return​Approve​Request

  [Return​Approve​Request​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ReturnApproveRequestPayload)

  Approves a customer's return request. If this mutation is successful, then the `Return.status` field of the approved return is set to `OPEN`.

  * input

    [Return​Approve​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnApproveRequestInput)

    required

    ### Arguments

    The input fields to approve a return.

  ***

* return​Cancel

  [Return​Cancel​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ReturnCancelPayload)

  Cancels a return and restores the items back to being fulfilled. Canceling a return is only available before any work has been done on the return (such as an inspection or refund).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return to cancel.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:false

  ***

* return​Close

  [Return​Close​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ReturnClosePayload)

  Indicates a return is complete, either when a refund has been made and items restocked, or simply when it has been marked as returned in the system.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return to close.

  ***

* return​Create

  [Return​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ReturnCreatePayload)

  Creates a return from an existing order that has at least one fulfilled [line item](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) that hasn't yet been refunded. If you create a return on an archived order, then the order is automatically unarchived.

  Use the `returnCreate` mutation when your workflow involves [approving](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest) or [declining](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest) requested returns outside of the Shopify platform.

  The `returnCreate` mutation performs the following actions:

  * Creates a return in the `OPEN` state, and assumes that the return request from the customer has already been approved
  * Creates a [reverse fulfillment order](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders), and enables you to create a [reverse delivery](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries) for the reverse fulfillment order
  * Creates a sales agreement with a `RETURN` reason, which links to all sales created for the return or exchange
  * Generates sales records that reverse the sales records for the items being returned
  * Generates sales records for any exchange line items

  After you've created a return, use the [`return`](https://shopify.dev/docs/api/admin-graphql/latest/queries/return) query to retrieve the return by its ID. Learn more about providing a [return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) for merchants.

  * return​Input

    [Return​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnInput)

    required

    ### Arguments

    Specifies the input fields for a return.

  ***

* return​Decline​Request

  [Return​Decline​Request​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ReturnDeclineRequestPayload)

  Declines a return on an order. When a return is declined, each `ReturnLineItem.fulfillmentLineItem` can be associated to a new return. Use the `ReturnCreate` or `ReturnRequest` mutation to initiate a new return.

  * input

    [Return​Decline​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnDeclineRequestInput)

    required

    ### Arguments

    The input fields for declining a customer's return request.

  ***

* return​Process

  [Return​Process​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ReturnProcessPayload)

  Processes a return by confirming which items customers return and exchange, handling their disposition, and optionally issuing refunds. This mutation confirms the quantities for [`ReturnLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnLineItem) and [`ExchangeLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExchangeLineItem) objects previously created on the [`Return`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return).

  For returned items, you specify how to handle them through dispositions such as restocking or disposal. The mutation creates [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects for exchange items and records all transactions in the merchant's financial reports. You can optionally issue refunds through financial transfers, apply refund duties, and refund shipping costs.

  Learn more about [processing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

  * input

    [Return​Process​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessInput)

    required

    ### Arguments

    Specifies the input fields for processing a return.

  ***

* return​Reopen

  [Return​Reopen​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ReturnReopenPayload)

  Reopens a closed return.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return to reopen.

  ***

* return​Request

  [Return​Request​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ReturnRequestPayload)

  Creates a return request that requires merchant approval before processing. The return has its status set to `REQUESTED` and the merchant must approve or decline it.

  Use this mutation when customers initiate returns that need review. After creating a requested return, use [`returnApproveRequest`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest) to approve it or [`returnDeclineRequest`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest) to decline it.

  For returns that should be immediately open for processing, use the [`returnCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate) mutation instead.

  Learn more about [building return management workflows](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

  * input

    [Return​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRequestInput)

    required

    ### Arguments

    The input fields for requesting a return.

  ***

* reverse​Delivery​Create​With​Shipping

  [Reverse​Delivery​Create​With​Shipping​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ReverseDeliveryCreateWithShippingPayload)

  Creates a new reverse delivery with associated external shipping information.

  * reverse​Fulfillment​Order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the reverse fulfillment order that's associated to the reverse delivery.

  * reverse​Delivery​Line​Items

    [\[Reverse​Delivery​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryLineItemInput)

    required

    The reverse delivery line items to be created. If an empty array is provided, then this mutation will create a reverse delivery line item for each reverse fulfillment order line item, with its quantity equal to the reverse fulfillment order line item total quantity.

  * tracking​Input

    [Reverse​Delivery​Tracking​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryTrackingInput)

    Default:null

    The tracking information for the reverse delivery.

  * label​Input

    [Reverse​Delivery​Label​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryLabelInput)

    Default:null

    The return label file information for the reverse delivery.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    When `true` the customer is notified with delivery instructions if the `ReverseFulfillmentOrder.order.email` is present.

  ***

* reverse​Delivery​Shipping​Update

  [Reverse​Delivery​Shipping​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ReverseDeliveryShippingUpdatePayload)

  Updates a reverse delivery with associated external shipping information.

  * reverse​Delivery​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the reverse delivery to update.

  * tracking​Input

    [Reverse​Delivery​Tracking​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryTrackingInput)

    Default:null

    The tracking information for the reverse delivery.

  * label​Input

    [Reverse​Delivery​Label​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryLabelInput)

    Default:null

    The return label file information for the reverse delivery.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    If `true` and an email address exists on the `ReverseFulfillmentOrder.order`, then the customer is notified with the updated delivery instructions.

  ***

* reverse​Fulfillment​Order​Dispose

  [Reverse​Fulfillment​Order​Dispose​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ReverseFulfillmentOrderDisposePayload)

  Disposes reverse fulfillment order line items.

  * disposition​Inputs

    [\[Reverse​Fulfillment​Order​Dispose​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseFulfillmentOrderDisposeInput)

    required

    ### Arguments

    The input parameters required to dispose reverse fulfillment order line items.

  ***

* saved​Search​Create

  [Saved​Search​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SavedSearchCreatePayload)

  Creates a saved search.

  * input

    [Saved​Search​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchCreateInput)

    required

    ### Arguments

    Specifies the input fields for a saved search.

  ***

* saved​Search​Delete

  [Saved​Search​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SavedSearchDeletePayload)

  Delete a saved search.

  * input

    [Saved​Search​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchDeleteInput)

    required

    ### Arguments

    The input fields to delete a saved search.

  ***

* saved​Search​Update

  [Saved​Search​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SavedSearchUpdatePayload)

  Updates a saved search.

  * input

    [Saved​Search​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchUpdateInput)

    required

    ### Arguments

    The input fields to update a saved search.

  ***

* script​Tag​Create

  [Script​Tag​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ScriptTagCreatePayload)

  Theme app extensions

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  Script tag deprecation

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  Creates a new script tag.

  * input

    [Script​Tag​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ScriptTagInput)

    required

    ### Arguments

    The input fields for a script tag.

  ***

* script​Tag​Delete

  [Script​Tag​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ScriptTagDeletePayload)

  Theme app extensions

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  Script tag deprecation

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  Deletes a script tag.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the script tag to delete.

  ***

* script​Tag​Update

  [Script​Tag​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ScriptTagUpdatePayload)

  Theme app extensions

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  Script tag deprecation

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  Updates a script tag.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the script tag to update.

  * input

    [Script​Tag​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ScriptTagInput)

    required

    Specifies the input fields for a script tag.

  ***

* segment​Create

  [Segment​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SegmentCreatePayload)

  Creates a segment.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The name of the segment to be created. Segment names must be unique.

  * query

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).

  ***

* segment​Delete

  [Segment​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SegmentDeletePayload)

  Deletes a segment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the segment to delete.

  ***

* segment​Update

  [Segment​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SegmentUpdatePayload)

  Updates a segment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the segment to be updated.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The new name for the segment.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).

  ***

* selling​Plan​Group​Add​Products

  [Selling​Plan​Group​Add​Products​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SellingPlanGroupAddProductsPayload)

  Adds multiple products to a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the products to add.

  ***

* selling​Plan​Group​Add​Product​Variants

  [Selling​Plan​Group​Add​Product​Variants​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SellingPlanGroupAddProductVariantsPayload)

  Adds multiple product variants to a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Variant​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the product variants to add.

  ***

* selling​Plan​Group​Create

  [Selling​Plan​Group​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SellingPlanGroupCreatePayload)

  Creates a selling plan group that defines how products can be sold and purchased. A selling plan group represents a selling method such as "Subscribe and save", "Pre-order", or "Try before you buy" and contains one or more selling plans with specific billing, delivery, and pricing policies.

  Use the [`resources`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate#arguments-resources) argument to associate products or product variants with the group during creation. You can also add products later using [`sellingPlanGroupAddProducts`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProducts) or [`sellingPlanGroupAddProductVariants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProductVariants).

  Learn more about [building selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan#step-1-create-a-selling-plan-group) or explore [examples of creating TBYB and other selling plan groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate?example=create-a-tbyb-selling-plan-group).

  * input

    [Selling​Plan​Group​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput)

    required

    ### Arguments

    The properties of the new Selling Plan Group.

  * resources

    [Selling​Plan​Group​Resource​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupResourceInput)

    The resources this Selling Plan Group should be applied to.

  ***

* selling​Plan​Group​Delete

  [Selling​Plan​Group​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SellingPlanGroupDeletePayload)

  Delete a Selling Plan Group. This does not affect subscription contracts.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The id of the selling plan group to delete.

  ***

* selling​Plan​Group​Remove​Products

  [Selling​Plan​Group​Remove​Products​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SellingPlanGroupRemoveProductsPayload)

  Removes multiple products from a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the products to remove.

  ***

* selling​Plan​Group​Remove​Product​Variants

  [Selling​Plan​Group​Remove​Product​Variants​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SellingPlanGroupRemoveProductVariantsPayload)

  Removes multiple product variants from a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Variant​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the product variants to remove.

  ***

* selling​Plan​Group​Update

  [Selling​Plan​Group​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SellingPlanGroupUpdatePayload)

  Update a Selling Plan Group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The Selling Plan Group to update.

  * input

    [Selling​Plan​Group​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput)

    required

    The properties of the Selling Plan Group to update.

  ***

* server​Pixel​Create

  [Server​Pixel​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ServerPixelCreatePayload)

  Creates a new unconfigured server pixel. A single server pixel can exist for an app and shop combination. If you call this mutation when a server pixel already exists, then an error will return.

* server​Pixel​Delete

  [Server​Pixel​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ServerPixelDeletePayload)

  Deletes the Server Pixel associated with the current app & shop.

* shipping​Package​Delete

  [Shipping​Package​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ShippingPackageDeletePayload)

  Deletes a shipping package.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the shipping package to remove.

  ***

* shipping​Package​Make​Default

  [Shipping​Package​Make​Default​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ShippingPackageMakeDefaultPayload)

  Set a shipping package as the default. The default shipping package is the one used to calculate shipping costs on checkout.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the shipping package to set as the default.

  ***

* shipping​Package​Update

  [Shipping​Package​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ShippingPackageUpdatePayload)

  Updates a shipping package.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the shipping package to update.

  * shipping​Package

    [Custom​Shipping​Package​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomShippingPackageInput)

    required

    Specifies the input fields for a shipping package.

  ***

* shopify​Payments​Payout​Alternate​Currency​Create

  [Shopify​Payments​Payout​Alternate​Currency​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ShopifyPaymentsPayoutAlternateCurrencyCreatePayload)

  Creates an alternate currency payout for a Shopify Payments account.

  * account​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the Shopify Payments account on which the mutation is being performed.

  * currency

    [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

    required

    The currency of the balance to payout.

  ***

* shop​Locale​Disable

  [Shop​Locale​Disable​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ShopLocaleDisablePayload)

  Deletes a locale for a shop. This also deletes all translations of this locale.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    ISO code of the locale to delete.

  ***

* shop​Locale​Enable

  [Shop​Locale​Enable​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ShopLocaleEnablePayload)

  Adds a locale for a shop. The newly added locale is in the unpublished state.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    ISO code of the locale to enable.

  * market​Web​Presence​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The list of markets web presences to add the locale to.

  ***

* shop​Locale​Update

  [Shop​Locale​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ShopLocaleUpdatePayload)

  Updates a locale for a shop.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    ISO code of the locale to update.

  * shop​Locale

    [Shop​Locale​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopLocaleInput)

    required

    Specifies the input fields for a shop locale.

  ***

* shop​Policy​Update

  [Shop​Policy​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ShopPolicyUpdatePayload)

  Updates a shop policy.

  * shop​Policy

    [Shop​Policy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopPolicyInput)

    required

    ### Arguments

    The properties to use when updating the shop policy.

  ***

* shop​Resource​Feedback​Create

  [Shop​Resource​Feedback​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ShopResourceFeedbackCreatePayload)

  The `ResourceFeedback` object lets your app report the status of shops and their resources. For example, if your app is a marketplace channel, then you can use resource feedback to alert merchants that they need to connect their marketplace account by signing in.

  Resource feedback notifications are displayed to the merchant on the home screen of their Shopify admin, and in the product details view for any products that are published to your app.

  This resource should be used only in cases where you're describing steps that a merchant is required to complete. If your app offers optional or promotional set-up steps, or if it makes recommendations, then don't use resource feedback to let merchants know about them.

  ## Sending feedback on a shop

  You can send resource feedback on a shop to let the merchant know what steps they need to take to make sure that your app is set up correctly. Feedback can have one of two states: `requires_action` or `success`. You need to send a `requires_action` feedback request for each step that the merchant is required to complete.

  If there are multiple set-up steps that require merchant action, then send feedback with a state of `requires_action` as merchants complete prior steps. And to remove the feedback message from the Shopify admin, send a `success` feedback request.

  #### Important

  Sending feedback replaces previously sent feedback for the shop. Send a new `shopResourceFeedbackCreate` mutation to push the latest state of a shop or its resources to Shopify.

  * input

    [Resource​Feedback​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ResourceFeedbackCreateInput)

    required

    ### Arguments

    The fields required to create shop feedback.

  ***

* staged​Uploads​Create

  [Staged​Uploads​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/StagedUploadsCreatePayload)

  Creates staged upload targets for file uploads such as images, videos, and 3D models.

  Use the `stagedUploadsCreate` mutation instead of direct file creation mutations when:

  * **Uploading large files**: Files over a few MB benefit from staged uploads for better reliability
  * **Uploading media files**: Videos, 3D models, and high-resolution images
  * **Bulk importing**: CSV files, product catalogs, or other bulk data
  * **Using external file sources**: When files are stored remotely and need to be transferred to Shopify

  The `stagedUploadsCreate` mutation is the first step in Shopify's secure two-step upload process:

  **Step 1: Create staged upload targets** (this mutation)

  * Generate secure, temporary upload URLs for your files.
  * Receive authentication parameters for the upload.

  **Step 2: Upload files and create assets**

  * Upload your files directly to the provided URLs using the authentication parameters.
  * Use the returned `resourceUrl` as the `originalSource` in subsequent mutations like `fileCreate`.

  This approach provides better performance for large files, handles network interruptions gracefully, and ensures secure file transfers to Shopify's storage infrastructure.

  ***

  Note

  File size is required when uploading [`VIDEO`](https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource#enums-VIDEO) or [`MODEL_3D`](https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource#enums-MODEL_3D) resources.

  ***

  After creating staged upload targets, complete the process by:

  1. **Uploading files**: Send your files to the returned [`url`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.url) using the provided [`parameters`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.parameters) for authentication
  2. **Creating file assets**: Use the [`resourceUrl`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.resourceUrl) as the `originalSource` in mutations such as:

  * [`fileCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate): Creates file assets from staged uploads
  * [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Updates products with new media from staged uploads

  Learn more about [uploading media to Shopify](https://shopify.dev/apps/online-store/media/products).

  * input

    [\[Staged​Upload​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadInput)

    required

    ### Arguments

    The information required to generate staged upload targets.

  ***

* standard​Metafield​Definition​Enable

  [Standard​Metafield​Definition​Enable​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/StandardMetafieldDefinitionEnablePayload)

  Activates the specified standard metafield definition from its template.

  Refer to the [list of standard metafield definition templates](https://shopify.dev/apps/metafields/definitions/standard-definitions).

  * owner​Type

    [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

    required

    ### Arguments

    The resource type that the metafield definition is scoped to.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the standard metafield definition template to enable.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The namespace of the standard metafield to enable. Used in combination with `key`.

  * key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The key of the standard metafield to enable. Used in combination with `namespace`.

  * pin

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:null

    Whether to pin the metafield definition.

  * visible​To​Storefront​Api

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:null

  * use​As​Collection​Condition

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:null

  * capabilities

    [Metafield​Capability​Create​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldCapabilityCreateInput)

    The capabilities of the metafield definition.

  * access

    [Standard​Metafield​Definition​Access​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StandardMetafieldDefinitionAccessInput)

    The access settings that apply to each of the metafields that belong to the metafield definition.

  ***

* standard​Metaobject​Definition​Enable

  [Standard​Metaobject​Definition​Enable​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/StandardMetaobjectDefinitionEnablePayload)

  Enables the specified standard metaobject definition from its template.

  * type

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The type of the metaobject definition to enable.

  ***

* store​Credit​Account​Credit

  [Store​Credit​Account​Credit​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/StoreCreditAccountCreditPayload)

  Adds funds to a [`StoreCreditAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount) by creating a [`StoreCreditAccountCreditTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction). The mutation accepts either a store credit account ID, a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) ID, or a [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) ID. When you provide a customer or company location ID, it automatically creates an account if one doesn't exist for the specified currency.

  Store credit accounts are currency-specific. A single owner can have multiple accounts, each holding a different currency. Use the most appropriate currency for the given store credit account owner.

  Credits can optionally include an expiration date.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the store credit account or the ID of the account owner.

  * credit​Input

    [Store​Credit​Account​Credit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditAccountCreditInput)

    required

    The input fields for a store credit account credit transaction.

  ***

* store​Credit​Account​Debit

  [Store​Credit​Account​Debit​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/StoreCreditAccountDebitPayload)

  Creates a debit transaction that decreases the store credit account balance by the given amount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the store credit account or the ID of the account owner.

  * debit​Input

    [Store​Credit​Account​Debit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditAccountDebitInput)

    required

    The input fields for a store credit account debit transaction.

  ***

* storefront​Access​Token​Create

  [Storefront​Access​Token​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/StorefrontAccessTokenCreatePayload)

  Creates a storefront access token that delegates unauthenticated access scopes to clients using the [Storefront API](https://shopify.dev/docs/api/storefront). The token provides public access to storefront resources without requiring customer authentication.

  Each shop can have up to 100 active [`StorefrontAccessToken`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessToken) objects. Headless storefronts, mobile apps, and other client applications typically use these tokens to access public storefront data.

  Learn more about [building with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started).

  * input

    [Storefront​Access​Token​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StorefrontAccessTokenInput)

    required

    ### Arguments

    Provides the input fields for creating a storefront access token.

  ***

* storefront​Access​Token​Delete

  [Storefront​Access​Token​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/StorefrontAccessTokenDeletePayload)

  Deletes a storefront access token.

  * input

    [Storefront​Access​Token​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StorefrontAccessTokenDeleteInput)

    required

    ### Arguments

    Provides the input fields required to delete a storefront access token.

  ***

* subscription​Billing​Attempt​Create

  [Subscription​Billing​Attempt​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionBillingAttemptCreatePayload)

  Creates a billing attempt to charge for a [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract). The mutation processes either the payment for the current billing cycle or for a specific cycle, if selected.

  The mutation creates an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) when successful. Failed billing attempts include a [`processingError`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate#returns-subscriptionBillingAttempt.fields.processingError) field with error details.

  ***

  Tip

  Use the [`idempotencyKey`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate#arguments-subscriptionBillingAttemptInput.fields.idempotencyKey) to ensure the billing attempt executes only once, preventing duplicate charges if the request is retried.

  ***

  You can target a specific billing cycle using the [`billingCycleSelector`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleSelector) to bill past or future cycles. The [`originTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-SubscriptionBillingAttempt.fields.originTime) parameter adjusts fulfillment scheduling for attempts completed after the expected billing date.

  Learn more about [creating billing attempts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract#step-4-create-a-billing-attempt).

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract.

  * subscription​Billing​Attempt​Input

    [Subscription​Billing​Attempt​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingAttemptInput)

    required

    The information to apply as a billing attempt.

  ***

* subscription​Billing​Cycle​Bulk​Charge

  [Subscription​Billing​Cycle​Bulk​Charge​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionBillingCycleBulkChargePayload)

  Asynchronously queries and charges all subscription billing cycles whose [billingAttemptExpectedDate](https://shopify.dev/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-billingattemptexpecteddate) values fall within a specified date range and meet additional filtering criteria. The results of this action can be retrieved using the [subscriptionBillingCycleBulkResults](https://shopify.dev/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults) query.

  * billing​Attempt​Expected​Date​Range

    [Subscription​Billing​Cycles​Date​Range​Selector!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCyclesDateRangeSelector)

    required

    ### Arguments

    Specifies the date range within which the `billingAttemptExpectedDate` values of the billing cycles should fall.

  * filters

    [Subscription​Billing​Cycle​Bulk​Filters](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleBulkFilters)

    Criteria to filter the billing cycles on which the action is executed.

  * inventory​Policy

    [Subscription​Billing​Attempt​Inventory​Policy](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptInventoryPolicy)

    Default:PRODUCT\_VARIANT\_INVENTORY\_POLICY

    The behaviour to use when updating inventory.

  ***

* subscription​Billing​Cycle​Bulk​Search

  [Subscription​Billing​Cycle​Bulk​Search​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionBillingCycleBulkSearchPayload)

  Asynchronously queries all subscription billing cycles whose [billingAttemptExpectedDate](https://shopify.dev/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-billingattemptexpecteddate) values fall within a specified date range and meet additional filtering criteria. The results of this action can be retrieved using the [subscriptionBillingCycleBulkResults](https://shopify.dev/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults) query.

  * billing​Attempt​Expected​Date​Range

    [Subscription​Billing​Cycles​Date​Range​Selector!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCyclesDateRangeSelector)

    required

    ### Arguments

    Specifies the date range within which the `billingAttemptExpectedDate` values of the billing cycles should fall.

  * filters

    [Subscription​Billing​Cycle​Bulk​Filters](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleBulkFilters)

    Criteria to filter the billing cycles on which the action is executed.

  ***

* subscription​Billing​Cycle​Charge

  [Subscription​Billing​Cycle​Charge​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionBillingCycleChargePayload)

  Creates a new subscription billing attempt for a specified billing cycle. This is the alternative mutation for [subscriptionBillingAttemptCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate). For more information, refer to [Create a subscription contract](https://shopify.dev/docs/apps/selling-strategies/subscriptions/contracts/create#step-4-create-a-billing-attempt).

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract.

  * billing​Cycle​Selector

    [Subscription​Billing​Cycle​Selector!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleSelector)

    required

    Select the specific billing cycle to be billed. If the selected billing cycle's [billingAttemptExpectedDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-subscriptionbillingcycle-billingattemptexpecteddate) is in the past, the [originTime](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-subscriptionbillingattempt-origintime) of the billing attempt will be set to this date. However, if the [billingAttemptExpectedDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-subscriptionbillingcycle-billingattemptexpecteddate) is in the future, the originTime will be the current time.

  * inventory​Policy

    [Subscription​Billing​Attempt​Inventory​Policy](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptInventoryPolicy)

    Default:PRODUCT\_VARIANT\_INVENTORY\_POLICY

    The behaviour to use when updating inventory.

  ***

* subscription​Billing​Cycle​Contract​Draft​Commit

  [Subscription​Billing​Cycle​Contract​Draft​Commit​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionBillingCycleContractDraftCommitPayload)

  Commits the updates of a Subscription Billing Cycle Contract draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to commit.

  ***

* subscription​Billing​Cycle​Contract​Draft​Concatenate

  [Subscription​Billing​Cycle​Contract​Draft​Concatenate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionBillingCycleContractDraftConcatenatePayload)

  Concatenates a contract to a Subscription Draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to update.

  * concatenated​Billing​Cycle​Contracts

    [\[Subscription​Billing​Cycle​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    An array of Subscription Contracts with their selected billing cycles to concatenate to the subscription draft.

  ***

* subscription​Billing​Cycle​Contract​Edit

  [Subscription​Billing​Cycle​Contract​Edit​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionBillingCycleContractEditPayload)

  Edit the contents of a subscription contract for the specified billing cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  ***

* subscription​Billing​Cycle​Edit​Delete

  [Subscription​Billing​Cycle​Edit​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionBillingCycleEditDeletePayload)

  Delete the schedule and contract edits of the selected subscription billing cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object used to select and use billing cycles.

  ***

* subscription​Billing​Cycle​Edits​Delete

  [Subscription​Billing​Cycle​Edits​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionBillingCycleEditsDeletePayload)

  Delete the current and future schedule and contract edits of a list of subscription billing cycles.

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The globally-unique identifier of the subscription contract that the billing cycle belongs to.

  * target​Selection

    [Subscription​Billing​Cycles​Target​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCyclesTargetSelection)

    required

    Select billing cycles to be deleted.

  ***

* subscription​Billing​Cycle​Schedule​Edit

  [Subscription​Billing​Cycle​Schedule​Edit​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionBillingCycleScheduleEditPayload)

  Modify the schedule of a specific billing cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  * input

    [Subscription​Billing​Cycle​Schedule​Edit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleScheduleEditInput)

    required

    Data used to create or modify billing cycle schedule edit.

  ***

* subscription​Billing​Cycle​Skip

  [Subscription​Billing​Cycle​Skip​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionBillingCycleSkipPayload)

  Skips a Subscription Billing Cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  ***

* subscription​Billing​Cycle​Unskip

  [Subscription​Billing​Cycle​Unskip​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionBillingCycleUnskipPayload)

  Unskips a Subscription Billing Cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  ***

* subscription​Contract​Activate

  [Subscription​Contract​Activate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionContractActivatePayload)

  Activates a Subscription Contract. Contract status must be either active, paused, or failed.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

* subscription​Contract​Atomic​Create

  [Subscription​Contract​Atomic​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionContractAtomicCreatePayload)

  Creates a Subscription Contract.

  * input

    [Subscription​Contract​Atomic​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractAtomicCreateInput)

    required

    ### Arguments

    The properties of the new Subscription Contract.

  ***

* subscription​Contract​Cancel

  [Subscription​Contract​Cancel​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionContractCancelPayload)

  Cancels a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

* subscription​Contract​Create

  [Subscription​Contract​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionContractCreatePayload)

  Creates a subscription contract draft, which is an intention to create a new subscription. The draft lets you incrementally build and modify subscription details before committing them to create the actual [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract).

  The mutation requires [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) information, billing details, and contract configuration including the [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy). You can specify the [`CustomerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod), the [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) for shipping, and subscription intervals.

  After you create the draft, you can either modify it with the [`subscriptionDraftUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate) mutation or finalize and create the active subscription contract with [`subscriptionDraftCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit).

  Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract).

  * input

    [Subscription​Contract​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractCreateInput)

    required

    ### Arguments

    The properties of the new Subscription Contract.

  ***

* subscription​Contract​Expire

  [Subscription​Contract​Expire​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionContractExpirePayload)

  Expires a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

* subscription​Contract​Fail

  [Subscription​Contract​Fail​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionContractFailPayload)

  Fails a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

* subscription​Contract​Pause

  [Subscription​Contract​Pause​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionContractPausePayload)

  Pauses a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

* subscription​Contract​Product​Change

  [Subscription​Contract​Product​Change​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionContractProductChangePayload)

  Allows for the easy change of a Product in a Contract or a Product price change.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract.

  * line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Line to update.

  * input

    [Subscription​Contract​Product​Change​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractProductChangeInput)

    required

    The properties of the Product changes.

  ***

* subscription​Contract​Set​Next​Billing​Date

  [Subscription​Contract​Set​Next​Billing​Date​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionContractSetNextBillingDatePayload)

  Sets the next billing date of a Subscription Contract. This field is managed by the apps. Alternatively you can utilize our [Billing Cycles APIs](https://shopify.dev/docs/apps/selling-strategies/subscriptions/billing-cycles), which provide auto-computed billing dates and additional functionalities.

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract to set the next billing date for.

  * date

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    required

    The next billing date.

  ***

* subscription​Contract​Update

  [Subscription​Contract​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionContractUpdatePayload)

  Creates a draft of an existing [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract). The draft captures the current state of the contract and allows incremental modifications through draft mutations such as [`subscriptionDraftLineAdd`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd), [`subscriptionDraftDiscountAdd`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountAdd), and [`subscriptionDraftUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate).

  Changes remain in draft state and don't affect the live contract until committed. After you've made all necessary changes to the draft, commit it using [`subscriptionDraftCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit) to apply the updates to the original contract.

  Learn more about [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract#step-2-create-a-draft-of-an-existing-contract).

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract to update.

  ***

* subscription​Draft​Commit

  [Subscription​Draft​Commit​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionDraftCommitPayload)

  Commits the updates of a Subscription Contract draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to commit.

  ***

* subscription​Draft​Discount​Add

  [Subscription​Draft​Discount​Add​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionDraftDiscountAddPayload)

  Adds a subscription discount to a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract draft to add a subscription discount to.

  * input

    [Subscription​Manual​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountInput)

    required

    The properties of the new Subscription Discount.

  ***

* subscription​Draft​Discount​Code​Apply

  [Subscription​Draft​Discount​Code​Apply​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionDraftDiscountCodeApplyPayload)

  Applies a code discount on the subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the subscription contract draft to apply a subscription code discount on.

  * redeem​Code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    Code discount redeem code.

  ***

* subscription​Draft​Discount​Remove

  [Subscription​Draft​Discount​Remove​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionDraftDiscountRemovePayload)

  Removes a subscription discount from a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the subscription contract draft to remove a subscription discount from.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the subscription draft discount to remove.

  ***

* subscription​Draft​Discount​Update

  [Subscription​Draft​Discount​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionDraftDiscountUpdatePayload)

  Updates a subscription discount on a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract draft to update a subscription discount on.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Discount to update.

  * input

    [Subscription​Manual​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountInput)

    required

    The properties to update on the Subscription Discount.

  ***

* subscription​Draft​Free​Shipping​Discount​Add

  [Subscription​Draft​Free​Shipping​Discount​Add​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionDraftFreeShippingDiscountAddPayload)

  Adds a subscription free shipping discount to a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract draft to add a subscription free shipping discount to.

  * input

    [Subscription​Free​Shipping​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionFreeShippingDiscountInput)

    required

    The properties of the new subscription free shipping discount.

  ***

* subscription​Draft​Free​Shipping​Discount​Update

  [Subscription​Draft​Free​Shipping​Discount​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionDraftFreeShippingDiscountUpdatePayload)

  Updates a subscription free shipping discount on a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract draft to update a subscription discount on.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Discount to update.

  * input

    [Subscription​Free​Shipping​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionFreeShippingDiscountInput)

    required

    The properties to update on the Subscription Free Shipping Discount.

  ***

* subscription​Draft​Line​Add

  [Subscription​Draft​Line​Add​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionDraftLineAddPayload)

  Adds a subscription line to a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to add a subscription line to.

  * input

    [Subscription​Line​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineInput)

    required

    The properties of the new Subscription Line.

  ***

* subscription​Draft​Line​Remove

  [Subscription​Draft​Line​Remove​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionDraftLineRemovePayload)

  Removes a subscription line from a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to remove a subscription line from.

  * line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Line to remove.

  ***

* subscription​Draft​Line​Update

  [Subscription​Draft​Line​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionDraftLineUpdatePayload)

  Updates a subscription line on a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to update a subscription line from.

  * line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Line to update.

  * input

    [Subscription​Line​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineUpdateInput)

    required

    The properties of the new Subscription Line.

  ***

* subscription​Draft​Update

  [Subscription​Draft​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/SubscriptionDraftUpdatePayload)

  Updates a Subscription Draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Draft to update.

  * input

    [Subscription​Draft​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput)

    required

    The properties of the new Subscription Contract.

  ***

* tags​Add

  [Tags​Add​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/TagsAddPayload)

  Adds tags to a resource in the store. Supported resources include [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer), [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), and [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article).

  Tags help merchants organize and filter resources. See the [`tags`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsAdd#arguments-tags) argument for supported input formats.

  Learn more about [using tags to organize subscription orders](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/fulfillments/sync-orders-subscriptions#order-tagging).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a resource to add tags to.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A list of tags to add to the resource. Can be an array of strings or a single string composed of a comma-separated list of values. Example values: `["tag1", "tag2", "tag3"]`, `"tag1, tag2, tag3"`.

  ***

* tags​Remove

  [Tags​Remove​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/TagsRemovePayload)

  Removes tags from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer), [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), or [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article).

  Tags are searchable keywords that help organize and filter these resources.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the resource to remove tags from.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A list of tags to remove from the resource in the form of an array of strings. Example value: `["tag1", "tag2", "tag3"]`.

  ***

* tax​App​Configure

  [Tax​App​Configure​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/TaxAppConfigurePayload)

  Allows tax app configurations for tax partners.

  * ready

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    ### Arguments

    Configures whether the tax app is correctly configured and ready to be used.

  ***

* tax​Summary​Create

  [Tax​Summary​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/TaxSummaryCreatePayload)

  Creates a tax summary for a given order. If both an order ID and a start and end time are provided, the order ID will be used.

  * order​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the order to create the tax summary for.

  * start​Time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The start time of the range of orders to create the tax summary for.

  * end​Time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The end time of the range of orders to create the tax summary for.

  ***

* theme​Create

  [Theme​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ThemeCreatePayload)

  Creates a theme from an external URL or staged upload. The theme source can either be a ZIP file hosted at a public URL or files previously uploaded using the [`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate) mutation. The theme displays in the [Themes page](https://admin.shopify.com/themes) in the Shopify admin.

  New themes have an [`UNPUBLISHED`](https://shopify.dev//docs/api/admin-graphql/latest/mutations/themeCreate#arguments-role.enums.UNPUBLISHED) role by default. You can optionally specify a [`DEVELOPMENT`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate#arguments-role.enums.DEVELOPMENT) role for temporary themes used during development.

  * source

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    ### Arguments

    An external URL or a [staged upload URL](https://shopify.dev/api/admin-graphql/latest/mutations/stageduploadscreate) of the theme to import.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the theme to be created.

  * role

    [Theme​Role](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeRole)

    Default:UNPUBLISHED

    The role of the theme to be created. Only UNPUBLISHED and DEVELOPMENT roles are permitted.

  ***

* theme​Delete

  [Theme​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ThemeDeletePayload)

  Deletes a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the theme to be deleted.

  ***

* theme​Duplicate

  [Theme​Duplicate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ThemeDuplicatePayload)

  Duplicates a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the theme to be duplicated.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Name of the new theme.

  ***

* theme​Files​Copy

  [Theme​Files​Copy​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ThemeFilesCopyPayload)

  Copy theme files. Copying to existing theme files will overwrite them.

  * theme​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The theme to update.

  * files

    [\[Theme​Files​Copy​File​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ThemeFilesCopyFileInput)

    required

    The files to update.

  ***

* theme​Files​Delete

  [Theme​Files​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ThemeFilesDeletePayload)

  Deletes a theme's files.

  * theme​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the theme to deleted.

  * files

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The files to delete.

  ***

* theme​Files​Upsert

  [Theme​Files​Upsert​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ThemeFilesUpsertPayload)

  Creates or updates theme files in an online store theme. This mutation allows batch operations on multiple theme files, either creating new files or overwriting existing ones with the same filename.

  ***

  Note

  You can process a maximum of 50 files in a single request.

  ***

  Each file requires a filename and body content. The body must specify a [`type`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#arguments-files.fields.body.type) with the corresponding [`value`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#arguments-files.fields.body.value). The mutation returns a [`job`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#returns-job) field for tracking asynchronous operations and an [`upsertedThemeFiles`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#returns-upsertedThemeFiles) field with details about the processed files.

  * theme​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The theme to update.

  * files

    [\[Online​Store​Theme​Files​Upsert​File​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OnlineStoreThemeFilesUpsertFileInput)

    required

    The files to update.

  ***

* theme​Publish

  [Theme​Publish​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ThemePublishPayload)

  Publishes a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the theme to be published.

  ***

* theme​Update

  [Theme​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ThemeUpdatePayload)

  Updates a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the theme to be updated.

  * input

    [Online​Store​Theme​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OnlineStoreThemeInput)

    required

    The attributes of the theme to be updated.

  ***

* transaction​Void

  [Transaction​Void​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/TransactionVoidPayload)

  Trigger the voiding of an uncaptured authorization transaction.

  * parent​Transaction​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    An uncaptured authorization transaction.

  ***

* translations​Register

  [Translations​Register​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/TranslationsRegisterPayload)

  Creates or updates translations for a resource's [translatable content](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent).

  Each translation requires a digest value from the resource's translatable content. Use the [`translatableResource`](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResource) query to get a resource's translatable content and digest values before creating translations. You can optionally scope translations to specific markets using the `marketId` field in each translation input.

  Learn more about [managing translations](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the resource that is being translated.

  * translations

    [\[Translation​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/TranslationInput)

    required

    Specifies the input fields for a translation.

  ***

* translations​Remove

  [Translations​Remove​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/TranslationsRemovePayload)

  Deletes translations.

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the translatable resource for which translations are being deleted.

  * translation​Keys

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The list of translation keys.

  * locales

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The list of translation locales. Only locales returned in `shopLocales` are valid.

  * market​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The list of market IDs.

  ***

* url​Redirect​Bulk​Delete​All

  [Url​Redirect​Bulk​Delete​All​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/UrlRedirectBulkDeleteAllPayload)

  Asynchronously delete [URL redirects](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) in bulk.

* url​Redirect​Bulk​Delete​By​Ids

  [Url​Redirect​Bulk​Delete​By​Ids​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/UrlRedirectBulkDeleteByIdsPayload)

  Asynchronously delete [URLRedirect](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) objects in bulk by IDs. Learn more about [URLRedirect](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) objects.

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of [`URLRedirect`](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) object IDs to delete.

  ***

* url​Redirect​Bulk​Delete​By​Saved​Search

  [Url​Redirect​Bulk​Delete​By​Saved​Search​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/UrlRedirectBulkDeleteBySavedSearchPayload)

  Asynchronously delete redirects in bulk.

  * saved​Search​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the URL redirect saved search for filtering.

  ***

* url​Redirect​Bulk​Delete​By​Search

  [Url​Redirect​Bulk​Delete​By​Search​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/UrlRedirectBulkDeleteBySearchPayload)

  Asynchronously delete redirects in bulk.

  * search

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Search query for filtering redirects on (both Redirect from and Redirect to fields).

  ***

* url​Redirect​Create

  [Url​Redirect​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/UrlRedirectCreatePayload)

  Creates a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.

  * url​Redirect

    [Url​Redirect​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UrlRedirectInput)

    required

    ### Arguments

    The fields to use when creating the redirect.

  ***

* url​Redirect​Delete

  [Url​Redirect​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/UrlRedirectDeletePayload)

  Deletes a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the redirect to delete.

  ***

* url​Redirect​Import​Create

  [Url​Redirect​Import​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/UrlRedirectImportCreatePayload)

  Creates a [`UrlRedirectImport`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirectImport) object.

  After creating the `UrlRedirectImport` object, the `UrlRedirectImport` request can be performed using the [`urlRedirectImportSubmit`](https://shopify.dev/api/admin-graphql/latest/mutations/urlRedirectImportSubmit) mutation.

  * url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    ### Arguments

    The staged upload URL of the CSV file. You can download [a sample URL redirect CSV file](https://help.shopify.com/csv/sample-redirect-template.csv).

  ***

* url​Redirect​Import​Submit

  [Url​Redirect​Import​Submit​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/UrlRedirectImportSubmitPayload)

  Submits a `UrlRedirectImport` request to be processed.

  The `UrlRedirectImport` request is first created with the [`urlRedirectImportCreate`](https://shopify.dev/api/admin-graphql/latest/mutations/urlRedirectImportCreate) mutation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [`UrlRedirectImport`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirectImport) object.

  ***

* url​Redirect​Update

  [Url​Redirect​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/UrlRedirectUpdatePayload)

  Updates a URL redirect.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the URL redirect to update.

  * url​Redirect

    [Url​Redirect​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UrlRedirectInput)

    required

    The input fields required to update the URL redirect.

  ***

* validation​Create

  [Validation​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ValidationCreatePayload)

  Creates a validation.

  * validation

    [Validation​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ValidationCreateInput)

    required

    ### Arguments

    The input fields for a new validation.

  ***

* validation​Delete

  [Validation​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ValidationDeletePayload)

  Deletes a validation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID representing the installed validation.

  ***

* validation​Update

  [Validation​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ValidationUpdatePayload)

  Update a validation.

  * validation

    [Validation​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ValidationUpdateInput)

    required

    ### Arguments

    The input fields to update a validation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID representing the validation to update.

  ***

* webhook​Subscription​Create

  [Webhook​Subscription​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/WebhookSubscriptionCreatePayload)

  Creates a webhook subscription that notifies your [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) when specific events occur in a shop. Webhooks push event data to your endpoint immediately when changes happen, eliminating the need for polling.

  The subscription configuration supports multiple endpoint types including HTTPS URLs, Google Pub/Sub topics, and AWS EventBridge event sources. You can filter events using [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax) to receive only relevant webhooks, control which data fields are included in webhook payloads, and specify metafield namespaces to include.

  ***

  Note

  The Webhooks API version [configured in your app](https://shopify.dev/docs/apps/build/webhooks/subscribe/use-newer-api-version) determines the API version for webhook events. You can't specify it per subscription.

  ***

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

  * topic

    [Webhook​Subscription​Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

    required

    ### Arguments

    The type of event that triggers the webhook.

  * webhook​Subscription

    [Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput)

    required

    Specifies the input fields for a webhook subscription.

  ***

* webhook​Subscription​Delete

  [Webhook​Subscription​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/WebhookSubscriptionDeletePayload)

  Deletes a [`WebhookSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription) and stops all future webhooks to its endpoint. Returns the deleted subscription's ID for confirmation.

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the webhook subscription to delete.

  ***

* webhook​Subscription​Update

  [Webhook​Subscription​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/WebhookSubscriptionUpdatePayload)

  Updates a webhook subscription's configuration. Modify the endpoint URL, event filters, included fields, or metafield namespaces without recreating the subscription.

  The mutation accepts a [`WebhookSubscriptionInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput) that specifies the new configuration. You can switch between endpoint types (HTTP, Pub/Sub, EventBridge) by providing a different URI format. Updates apply atomically without interrupting webhook delivery.

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the webhook subscription to update.

  * webhook​Subscription

    [Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput)

    required

    Specifies the input fields for a webhook subscription.

  ***

* web​Pixel​Create

  [Web​Pixel​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/WebPixelCreatePayload)

  Activate a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) by creating a web pixel record on the store where you installed your app.

  When you run the `webPixelCreate` mutation, Shopify validates it against the settings definition in `shopify.extension.toml`. If the `settings` input field doesn't match the schema that you defined, then the mutation fails. Learn how to define [web pixel settings](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings).

  * web​Pixel

    [Web​Pixel​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPixelInput)

    required

    ### Arguments

    The web pixel settings in JSON format.

  ***

* web​Pixel​Delete

  [Web​Pixel​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/WebPixelDeletePayload)

  Deletes the web pixel shop settings.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web pixel to delete.

  ***

* web​Pixel​Update

  [Web​Pixel​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/WebPixelUpdatePayload)

  Activate a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) by updating a web pixel record on the store where you installed your app.

  When you run the `webPixelUpdate` mutation, Shopify validates it against the settings definition in `shopify.extension.toml`. If the `settings` input field doesn't match the schema that you defined, then the mutation fails. Learn how to define [web pixel settings](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web pixel to update.

  * web​Pixel

    [Web​Pixel​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPixelInput)

    required

    The web pixel settings in JSON format.

  ***

* web​Presence​Create

  [Web​Presence​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/WebPresenceCreatePayload)

  Creates a web presence.

  * input

    [Web​Presence​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceCreateInput)

    required

    ### Arguments

    The details of the web presence to be created.

  ***

* web​Presence​Delete

  [Web​Presence​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/WebPresenceDeletePayload)

  Deletes a web presence.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to delete.

  ***

* web​Presence​Update

  [Web​Presence​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/WebPresenceUpdatePayload)

  Updates a web presence.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to update.

  * input

    [Web​Presence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceUpdateInput)

    required

    The web presence properties to update.

  ***

### Deprecated fields

* abandonment​Email​State​Update

  [Abandonment​Email​State​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/AbandonmentEmailStateUpdatePayload)

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the abandonment that needs to be updated.

  * email​State

    [Abandonment​Email​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentEmailState)

    required

    The new email state of the abandonment.

  * email​Sent​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time for when the email was sent, if that is the case.

  * email​State​Change​Reason

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The reason why the email was or was not sent.

  ***

* collection​Publish

  [Collection​Publish​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CollectionPublishPayload)

  Deprecated

  * input

    [Collection​Publish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionPublishInput)

    required

    ### Arguments

    Specify a collection to publish and the sales channels to publish it to.

  ***

* collection​Unpublish

  [Collection​Unpublish​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CollectionUnpublishPayload)

  Deprecated

  * input

    [Collection​Unpublish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionUnpublishInput)

    required

    ### Arguments

    Specify a collection to unpublish and the sales channels to remove it from.

  ***

* company​Location​Assign​Tax​Exemptions

  [Company​Location​Assign​Tax​Exemptions​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyLocationAssignTaxExemptionsPayload)

  Deprecated

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location to which the tax exemptions will be assigned.

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    required

    The tax exemptions that are being assigned to the location.

  ***

* company​Location​Create​Tax​Registration

  [Company​Location​Create​Tax​Registration​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyLocationCreateTaxRegistrationPayload)

  Deprecated

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location that the tax registration gets assigned to.

  * tax​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The unique tax id for the tax registration.

  ***

* company​Location​Revoke​Tax​Exemptions

  [Company​Location​Revoke​Tax​Exemptions​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyLocationRevokeTaxExemptionsPayload)

  Deprecated

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location from which the tax exemptions will be revoked.

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    required

    The tax exemptions that are being revoked from the location.

  ***

* company​Location​Revoke​Tax​Registration

  [Company​Location​Revoke​Tax​Registration​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/CompanyLocationRevokeTaxRegistrationPayload)

  Deprecated

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location whose tax registration is being revoked.

  ***

* event​Bridge​Webhook​Subscription​Create

  [Event​Bridge​Webhook​Subscription​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/EventBridgeWebhookSubscriptionCreatePayload)

  Deprecated

  * topic

    [Webhook​Subscription​Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

    required

    ### Arguments

    The type of event that triggers the webhook.

  * webhook​Subscription

    [Event​Bridge​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EventBridgeWebhookSubscriptionInput)

    required

    Specifies the input fields for an EventBridge webhook subscription.

  ***

* event​Bridge​Webhook​Subscription​Update

  [Event​Bridge​Webhook​Subscription​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/EventBridgeWebhookSubscriptionUpdatePayload)

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the webhook subscription to update.

  * webhook​Subscription

    [Event​Bridge​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EventBridgeWebhookSubscriptionInput)

    required

    Specifies the input fields for an EventBridge webhook subscription.

  ***

* fulfillment​Create​V2

  [Fulfillment​Create​V2Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentCreateV2Payload)

  Deprecated

  * fulfillment

    [Fulfillment​V2Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentV2Input)

    required

    ### Arguments

    The input fields used to create a fulfillment from fulfillment orders.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional message for the fulfillment request.

  ***

* fulfillment​Tracking​Info​Update​V2

  [Fulfillment​Tracking​Info​Update​V2Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/FulfillmentTrackingInfoUpdateV2Payload)

  Deprecated

  * fulfillment​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment.

  * tracking​Info​Input

    [Fulfillment​Tracking​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput)

    required

    The tracking input for the mutation, including tracking URL, number, and company.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the customer will be notified of this update and future updates for the fulfillment. If this field is left blank, then notifications won't be sent to the customer when the fulfillment is updated.

  ***

* inventory​Set​On​Hand​Quantities

  [Inventory​Set​On​Hand​Quantities​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/InventorySetOnHandQuantitiesPayload)

  Deprecated

  * input

    [Inventory​Set​On​Hand​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetOnHandQuantitiesInput)

    required

    ### Arguments

    The information required to set inventory on hand quantities.

  ***

* market​Currency​Settings​Update

  [Market​Currency​Settings​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketCurrencySettingsUpdatePayload)

  Deprecated

  * market​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market definition to target.

  * input

    [Market​Currency​Settings​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCurrencySettingsUpdateInput)

    required

    Properties to update for the market currency settings.

  ***

* market​Region​Delete

  [Market​Region​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketRegionDeletePayload)

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market region to delete.

  ***

* market​Regions​Create

  [Market​Regions​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketRegionsCreatePayload)

  Deprecated

  * market​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market to add the regions to.

  * regions

    [\[Market​Region​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketRegionCreateInput)

    required

    The regions to be created.

  ***

* market​Regions​Delete

  [Market​Regions​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketRegionsDeletePayload)

  Deprecated

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of IDs of the market regions to delete.

  ***

* market​Web​Presence​Create

  [Market​Web​Presence​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketWebPresenceCreatePayload)

  Deprecated

  * market​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market for which to create a web presence.

  * web​Presence

    [Market​Web​Presence​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketWebPresenceCreateInput)

    required

    The details of the web presence to be created.

  ***

* market​Web​Presence​Delete

  [Market​Web​Presence​Delete​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketWebPresenceDeletePayload)

  Deprecated

  * web​Presence​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to delete.

  ***

* market​Web​Presence​Update

  [Market​Web​Presence​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/MarketWebPresenceUpdatePayload)

  Deprecated

  * web​Presence​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to update.

  * web​Presence

    [Market​Web​Presence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketWebPresenceUpdateInput)

    required

    The web\_presence fields used to update the market's web presence.

  ***

* order​Edit​Remove​Line​Item​Discount

  [Order​Edit​Remove​Line​Item​Discount​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/OrderEditRemoveLineItemDiscountPayload)

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit from which the line item discount is removed.

  * discount​Application​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the [calculated discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/calculateddiscountapplication) to remove.

  ***

* product​Change​Status

  [Product​Change​Status​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductChangeStatusPayload)

  Deprecated

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  * status

    [Product​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus)

    required

    The status to be assigned to the product.

  ***

* product​Create​Media

  [Product​Create​Media​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductCreateMediaPayload)

  Deprecated

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product associated with the media.

  * media

    [\[Create​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    required

    List of new media to be added to a product.

  ***

* product​Delete​Media

  [Product​Delete​Media​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductDeleteMediaPayload)

  Deprecated

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product ID from which the media will be deleted.

  * media​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The media IDs to be deleted.

  ***

* product​Publish

  [Product​Publish​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductPublishPayload)

  Deprecated

  * input

    [Product​Publish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductPublishInput)

    required

    ### Arguments

    Specifies the product to publish and the channels to publish it to.

  ***

* product​Unpublish

  [Product​Unpublish​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductUnpublishPayload)

  Deprecated

  * input

    [Product​Unpublish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUnpublishInput)

    required

    ### Arguments

    Specifies the product to unpublish and the channel to unpublish it from.

  ***

* product​Update​Media

  [Product​Update​Media​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ProductUpdateMediaPayload)

  Deprecated

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product on which media will be updated.

  * media

    [\[Update​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UpdateMediaInput)

    required

    A list of media updates.

  ***

* pub​Sub​Webhook​Subscription​Create

  [Pub​Sub​Webhook​Subscription​Create​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PubSubWebhookSubscriptionCreatePayload)

  Deprecated

  * topic

    [Webhook​Subscription​Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

    required

    ### Arguments

    The type of event that triggers the webhook.

  * webhook​Subscription

    [Pub​Sub​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput)

    required

    Specifies the input fields for a Google Cloud Pub/Sub webhook subscription.

  ***

* pub​Sub​Webhook​Subscription​Update

  [Pub​Sub​Webhook​Subscription​Update​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/PubSubWebhookSubscriptionUpdatePayload)

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the webhook subscription to update.

  * webhook​Subscription

    [Pub​Sub​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput)

    required

    Specifies the input fields for a Google Cloud Pub/Sub webhook subscription.

  ***

* return​Line​Item​Remove​From​Return

  [Return​Line​Item​Remove​From​Return​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ReturnLineItemRemoveFromReturnPayload)

  Deprecated

  * return​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return for line item removal.

  * return​Line​Items

    [\[Return​Line​Item​Remove​From​Return​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnLineItemRemoveFromReturnInput)

    required

    The return line items to remove from the return.

  ***

* return​Refund

  [Return​Refund​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/ReturnRefundPayload)

  Deprecated

  * return​Refund​Input

    [Return​Refund​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundInput)

    required

    ### Arguments

    The input fields to refund a return.

  ***

* staged​Upload​Target​Generate

  [Staged​Upload​Target​Generate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/StagedUploadTargetGeneratePayload)

  Deprecated

  * input

    [Staged​Upload​Target​Generate​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadTargetGenerateInput)

    required

    ### Arguments

    The input fields for generating a staged upload.

  ***

* staged​Upload​Targets​Generate

  [Staged​Upload​Targets​Generate​Payload](https://shopify.dev/docs/api/admin-graphql/latest/types/StagedUploadTargetsGeneratePayload)

  Deprecated

  * input

    [\[Stage​Image​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StageImageInput)

    required

    ### Arguments

    The input fields for generating staged uploads.

  ***

***

## Map

No referencing types
