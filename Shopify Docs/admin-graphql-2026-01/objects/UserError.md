---
title: UserError - GraphQL Admin
description: >-
  An error in the input of a mutation. Mutations return `UserError` objects to
  indicate validation failures, such as invalid field values or business logic
  violations, that prevent the operation from completing.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError.md'
---

# User​Error

object

An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing.

## Fields

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

### Fields with this object

* {}[AppFeedback.messages](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback#field-AppFeedback.fields.messages)
* {}[MarketingActivityExtensionAppErrors.userErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityExtensionAppErrors#field-MarketingActivityExtensionAppErrors.fields.userErrors)
* {}[ProductDeleteOperation.userErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation#field-ProductDeleteOperation.fields.userErrors)
* {}[ProductDuplicateOperation.userErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDuplicateOperation#field-ProductDuplicateOperation.fields.userErrors)

***

## Mutations

* [app​Purchase​One​Time​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appPurchaseOneTimeCreate)

  mutation

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

* [app​Subscription​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCancel)

  mutation

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

* [app​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate)

  mutation

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

* [app​Subscription​Line​Item​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionLineItemUpdate)

  mutation

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

* [app​Usage​Record​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appUsageRecordCreate)

  mutation

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

* [bulk​Operation​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationCancel)

  mutation

  Starts the cancelation process of a running bulk operation.

  There may be a short delay from when a cancelation starts until the operation is actually canceled.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the bulk operation to cancel.

  ***

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

* [collection​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionDelete)

  mutation

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

* [collection​Remove​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionRemoveProducts)

  mutation

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

* [customer​Address​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressCreate)

  mutation

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

* [customer​Address​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressDelete)

  mutation

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

* [customer​Address​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressUpdate)

  mutation

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

* [customer​Add​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddTaxExemptions)

  mutation

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

* [customer​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerCreate)

  mutation

  Creates a new [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) in the store.

  Accepts customer details including contact information, marketing consent preferences, and tax exemptions through the [`CustomerInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput) input object. You can also associate [`metafields`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput) and tags to organize and extend customer data.

  Apps using protected customer data must meet Shopify's [protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements).

  * input

    [Customer​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput)

    required

    ### Arguments

    The input fields to create a customer.

  ***

* [customer​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerDelete)

  mutation

  Deletes a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) from the store. You can only delete customers who haven't placed any [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

  Apps using protected customer data must meet Shopify's [protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements).

  * input

    [Customer​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerDeleteInput)

    required

    ### Arguments

    Specifies the customer to delete.

  ***

* [customer​Generate​Account​Activation​Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerGenerateAccountActivationUrl)

  mutation

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

* [customer​Payment​Method​Credit​Card​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodCreditCardCreate)

  mutation

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

* [customer​Payment​Method​Credit​Card​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodCreditCardUpdate)

  mutation

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

* [customer​Payment​Method​Revoke](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodRevoke)

  mutation

  Revokes a customer's payment method.

  * customer​Payment​Method​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer payment method to be revoked.

  ***

* [customer​Payment​Method​Send​Update​Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodSendUpdateEmail)

  mutation

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

* [customer​Remove​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerRemoveTaxExemptions)

  mutation

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

* [customer​Replace​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerReplaceTaxExemptions)

  mutation

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

* [customer​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdate)

  mutation

  Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s attributes including personal information and [`tax exemptions`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption).

  Apps using protected customer data must meet Shopify's [protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements).

  * input

    [Customer​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput)

    required

    ### Arguments

    Provides updated fields for the customer. To set marketing consent, use the `customerEmailMarketingConsentUpdate` or `customerSmsMarketingConsentUpdate` mutations instead.

  ***

* [customer​Update​Default​Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdateDefaultAddress)

  mutation

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

* [delivery​Profile​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileCreate)

  mutation

  Creates a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) that defines shipping rates for specific products and locations.

  A delivery profile groups products with their shipping zones and rates. You can associate profiles with [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to customize shipping for subscriptions and pre-orders. Each profile contains [`DeliveryProfileLocationGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup) objects that specify which [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects ship to which [`DeliveryZone`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone) objects with specific [`DeliveryMethodDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinition) objects and rates.

  Learn more about [building delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

  * profile

    [Delivery​Profile​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput)

    required

    ### Arguments

    Specifies the input fields for a delivery profile.

  ***

* [delivery​Profile​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileRemove)

  mutation

  Enqueue the removal of a delivery profile.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the delivery profile to remove.

  ***

* [delivery​Profile​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileUpdate)

  mutation

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

* [delivery​Promise​Participants​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryPromiseParticipantsUpdate)

  mutation

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

* [delivery​Setting​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverySettingUpdate)

  mutation

  Set the delivery settings for a shop.

  * setting

    [Delivery​Setting​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliverySettingInput)

    required

    ### Arguments

    Specifies the input fields for the delivery shop level settings.

  ***

* [delivery​Shipping​Origin​Assign](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryShippingOriginAssign)

  mutation

  Assigns a location as the shipping origin while using legacy compatibility mode for multi-location delivery profiles.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the location to assign as the shipping origin.

  ***

* [draft​Order​Bulk​Add​Tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkAddTags)

  mutation

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

* [draft​Order​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkDelete)

  mutation

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

* [draft​Order​Bulk​Remove​Tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkRemoveTags)

  mutation

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

* [draft​Order​Calculate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCalculate)

  mutation

  Calculates the properties of a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) without creating it. Returns pricing information including [`CalculatedDraftOrderLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem) totals, shipping charges, applicable discounts, and tax calculations based on the provided [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) and [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) information.

  Use this mutation to preview total taxes and prices before creating a draft order. It's particularly useful when working with B2B [`PurchasingEntity`](https://shopify.dev/docs/api/admin-graphql/latest/unions/PurchasingEntity) or when you need to determine costs without committing to a draft order. Learn more about [calculating draft orders for B2B purchasing entities](https://shopify.dev/docs/apps/build/b2b/draft-orders#step-1-calculate-a-draft-order-for-a-purchasing-entity).

  * input

    [Draft​Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput)

    required

    ### Arguments

    The fields for the draft order.

  ***

* [draft​Order​Complete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete)

  mutation

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

* [draft​Order​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate)

  mutation

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

* [draft​Order​Create​From​Order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreateFromOrder)

  mutation

  Creates a draft order from order.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the order's id that we create the draft order from.

  ***

* [draft​Order​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDelete)

  mutation

  Deletes a draft order.

  * input

    [Draft​Order​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderDeleteInput)

    required

    ### Arguments

    Specify the draft order to delete by its ID.

  ***

* [draft​Order​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDuplicate)

  mutation

  Duplicates a draft order.

  * draft​Order​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Deprecated

    ### Arguments

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order to duplicate.

  ***

* [draft​Order​Invoice​Preview](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoicePreview)

  mutation

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

* [draft​Order​Invoice​Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend)

  mutation

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

* [draft​Order​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderUpdate)

  mutation

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

* [flow​Trigger​Receive](https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowTriggerReceive)

  mutation

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

* [fulfillment​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCancel)

  mutation

  Cancels an existing [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment) and reverses its effects on associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. When you cancel a fulfillment, the system creates new fulfillment orders for the cancelled items so they can be fulfilled again.

  The cancellation affects fulfillment orders differently based on their fulfillment status. If a fulfillment order was entirely fulfilled, then it automatically closes. If a fulfillment order is partially fulfilled, then the remaining quantities adjust to include the cancelled items. The system creates new fulfillment orders at the original [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) when items are still stocked there, or at alternative locations based on the store's fulfillment priority settings.

  Learn more about [canceling fulfillments](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-7-cancel-a-fulfillment).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment to be canceled.

  ***

* [fulfillment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreate)

  mutation

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

* [fulfillment​Event​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentEventCreate)

  mutation

  Creates a [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) to track the shipment status and location of items that have shipped. Events capture status updates like carrier pickup, in transit, out for delivery, or delivered.

  Each event records the timestamp and current status of the [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment). You can include optional details such as the location where the event occurred, estimated arrival time, and messages for tracking purposes.

  * fulfillment​Event

    [Fulfillment​Event​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentEventInput)

    required

    ### Arguments

    The input fields used to create a fulfillment event for a fulfillment.

  ***

* [fulfillment​Order​Accept​Cancellation​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptCancellationRequest)

  mutation

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

* [fulfillment​Order​Accept​Fulfillment​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest)

  mutation

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

* [fulfillment​Order​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderCancel)

  mutation

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

* [fulfillment​Order​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderClose)

  mutation

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

* [fulfillment​Order​Move](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMove)

  mutation

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

* [fulfillment​Order​Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderOpen)

  mutation

  Marks a scheduled fulfillment order as open.

  From API version 2026-01, this will also mark a fulfillment order as open when it is assigned to a merchant managed location and has had progress reported.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to mark as open.

  ***

* [fulfillment​Order​Reject​Cancellation​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderRejectCancellationRequest)

  mutation

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

* [fulfillment​Order​Reject​Fulfillment​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest)

  mutation

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

* [fulfillment​Order​Submit​Cancellation​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest)

  mutation

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

* [fulfillment​Order​Submit​Fulfillment​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitFulfillmentRequest)

  mutation

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

* [fulfillment​Service​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceCreate)

  mutation

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

* [fulfillment​Service​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceDelete)

  mutation

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

* [fulfillment​Service​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceUpdate)

  mutation

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

* [fulfillment​Tracking​Info​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate)

  mutation

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

* [gift​Card​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardUpdate)

  mutation

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

* [inventory​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate)

  mutation

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

* [inventory​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryDeactivate)

  mutation

  Removes an inventory item's quantities from a location, and turns off inventory at the location.

  * inventory​Level​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory level to deactivate.

  ***

* [inventory​Item​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryItemUpdate)

  mutation

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

* [marketing​Activity​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreate)

  mutation

  Create new marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

  * input

    [Marketing​Activity​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateInput)

    required

    ### Arguments

    The Input of marketing activity create.

  ***

* [marketing​Activity​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdate)

  mutation

  Updates a marketing activity with the latest information. Marketing activity app extensions are deprecated and will be removed in the near future.

  * input

    [Marketing​Activity​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput)

    required

    ### Arguments

    The Input of the marketing activity.

  ***

* [metafields​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsDelete)

  mutation

  Deletes [`Metafield`](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/Metafield) objects in bulk by specifying combinations of owner ID, namespace, and key.

  Returns the identifiers of successfully deleted metafields. If a specified metafield doesn't exist, then the mutation still succeeds but returns `null` for that identifier in the response.

  * metafields

    [\[Metafield​Identifier​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldIdentifierInput)

    required

    ### Arguments

    A list of identifiers specifying metafields to delete. At least one identifier must be specified.

  ***

* [order​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCancel)

  mutation

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

* [order​Capture](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture)

  mutation

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

* [order​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderClose)

  mutation

  Marks an open [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) as closed. A closed order is one where merchants fulfill or cancel all [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects and complete all financial transactions.

  Once closed, the order indicates that no further work is required. The order's [`closedAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-closedAt) timestamp is set when this mutation completes successfully.

  * input

    [Order​Close​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCloseInput)

    required

    ### Arguments

    The input for the mutation.

  ***

* [order​Edit​Add​Custom​Item](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddCustomItem)

  mutation

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

* [order​Edit​Add​Line​Item​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddLineItemDiscount)

  mutation

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

* [order​Edit​Add​Variant](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant)

  mutation

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

* [order​Edit​Begin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin)

  mutation

  Starts an order editing session that enables you to modify an existing [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). This mutation creates an [`OrderEditSession`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession) and returns a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) showing how the order looks with your changes applied.

  Order editing follows a three-step workflow: Begin the edit with [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin), apply changes using mutations like [`orderEditAddVariant`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant) or [`orderEditSetQuantity`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditSetQuantity), and then save the changes with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation. The session tracks all staged changes until you commit or abandon them.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order to begin editing.

  ***

* [order​Edit​Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit)

  mutation

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

* [order​Edit​Set​Quantity](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditSetQuantity)

  mutation

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

* [order​Mark​As​Paid](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderMarkAsPaid)

  mutation

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

* [order​Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderOpen)

  mutation

  Opens a closed order.

  * input

    [Order​Open​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderOpenInput)

    required

    ### Arguments

    The input for the mutation.

  ***

* [order​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate)

  mutation

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

* [product​Bundle​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleCreate)

  mutation

  Creates a product bundle that groups multiple [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects together as components. The bundle appears as a single product in the store, with its price determined by the parent product and inventory calculated from the component products.

  The mutation runs asynchronously and returns a [`ProductBundleOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation) object to track the creation status. Poll the operation using the [`productOperation`](https://shopify.dev/docs/api/admin-graphql/latest/queries/productOperation) query to determine when the bundle is ready.

  Learn more about [creating product fixed bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle#step-1-create-a-bundle).

  * input

    [Product​Bundle​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleCreateInput)

    required

    ### Arguments

    Input for creating a product bundle or componentized product.

  ***

* [product​Bundle​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleUpdate)

  mutation

  Updates a product bundle or componentized product.

  * input

    [Product​Bundle​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleUpdateInput)

    required

    ### Arguments

    Input for updating a product bundle or componentized product.

  ***

* [product​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate)

  mutation

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

* [product​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete)

  mutation

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

* [product​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDuplicate)

  mutation

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

* [product​Reorder​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia)

  mutation

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

* [product​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate)

  mutation

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

* [publishable​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish)

  mutation

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

* [publishable​Publish​To​Current​Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublishToCurrentChannel)

  mutation

  Publishes a resource to the current [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) associated with the requesting app. The system determines the current channel by the app's API client ID. Resources include [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) objects that implement the [`Publishable`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable) interface.

  For products to be visible in the channel, they must have an active [`ProductStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus). Products sold exclusively on subscription ([`requiresSellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.requiresSellingPlan): `true`) can only be published to online stores.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The resource to create or update publications for.

  ***

* [publishable​Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish)

  mutation

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

* [publishable​Unpublish​To​Current​Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublishToCurrentChannel)

  mutation

  Unpublishes a resource from the current channel. If the resource is a product, then it's visible in the channel only if the product status is `active`.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The resource to delete or update publications for.

  ***

* [refund​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate)

  mutation

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

* [saved​Search​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchCreate)

  mutation

  Creates a saved search.

  * input

    [Saved​Search​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchCreateInput)

    required

    ### Arguments

    Specifies the input fields for a saved search.

  ***

* [saved​Search​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchDelete)

  mutation

  Delete a saved search.

  * input

    [Saved​Search​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchDeleteInput)

    required

    ### Arguments

    The input fields to delete a saved search.

  ***

* [saved​Search​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchUpdate)

  mutation

  Updates a saved search.

  * input

    [Saved​Search​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchUpdateInput)

    required

    ### Arguments

    The input fields to update a saved search.

  ***

* [script​Tag​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagCreate)

  mutation

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

* [script​Tag​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagDelete)

  mutation

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

* [script​Tag​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagUpdate)

  mutation

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

* [segment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentCreate)

  mutation

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

* [segment​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentDelete)

  mutation

  Deletes a segment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the segment to delete.

  ***

* [segment​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentUpdate)

  mutation

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

* [shipping​Package​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingPackageDelete)

  mutation

  Deletes a shipping package.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the shipping package to remove.

  ***

* [shipping​Package​Make​Default](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingPackageMakeDefault)

  mutation

  Set a shipping package as the default. The default shipping package is the one used to calculate shipping costs on checkout.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the shipping package to set as the default.

  ***

* [shipping​Package​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingPackageUpdate)

  mutation

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

* [shop​Locale​Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleDisable)

  mutation

  Deletes a locale for a shop. This also deletes all translations of this locale.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    ISO code of the locale to delete.

  ***

* [shop​Locale​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleEnable)

  mutation

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

* [shop​Locale​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleUpdate)

  mutation

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

* [staged​Uploads​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadsCreate)

  mutation

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

* [storefront​Access​Token​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenCreate)

  mutation

  Creates a storefront access token that delegates unauthenticated access scopes to clients using the [Storefront API](https://shopify.dev/docs/api/storefront). The token provides public access to storefront resources without requiring customer authentication.

  Each shop can have up to 100 active [`StorefrontAccessToken`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessToken) objects. Headless storefronts, mobile apps, and other client applications typically use these tokens to access public storefront data.

  Learn more about [building with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started).

  * input

    [Storefront​Access​Token​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StorefrontAccessTokenInput)

    required

    ### Arguments

    Provides the input fields for creating a storefront access token.

  ***

* [storefront​Access​Token​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenDelete)

  mutation

  Deletes a storefront access token.

  * input

    [Storefront​Access​Token​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StorefrontAccessTokenDeleteInput)

    required

    ### Arguments

    Provides the input fields required to delete a storefront access token.

  ***

* [tags​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsAdd)

  mutation

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

* [tags​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsRemove)

  mutation

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

* [url​Redirect​Bulk​Delete​All](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteAll)

  mutation

  Asynchronously delete [URL redirects](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) in bulk.

* [webhook​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionCreate)

  mutation

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

* [webhook​Subscription​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionDelete)

  mutation

  Deletes a [`WebhookSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription) and stops all future webhooks to its endpoint. Returns the deleted subscription's ID for confirmation.

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the webhook subscription to delete.

  ***

* [webhook​Subscription​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionUpdate)

  mutation

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

* [event​Bridge​Webhook​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeWebhookSubscriptionCreate)

  mutation

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

* [event​Bridge​Webhook​Subscription​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeWebhookSubscriptionUpdate)

  mutation

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

* [fulfillment​Create​V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreateV2)

  mutation

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

* [fulfillment​Tracking​Info​Update​V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdateV2)

  mutation

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

* [order​Edit​Remove​Line​Item​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveLineItemDiscount)

  mutation

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

* [product​Create​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreateMedia)

  mutation

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

* [product​Delete​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDeleteMedia)

  mutation

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

* [product​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productPublish)

  mutation

  Deprecated

  * input

    [Product​Publish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductPublishInput)

    required

    ### Arguments

    Specifies the product to publish and the channels to publish it to.

  ***

* [product​Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUnpublish)

  mutation

  Deprecated

  * input

    [Product​Unpublish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUnpublishInput)

    required

    ### Arguments

    Specifies the product to unpublish and the channel to unpublish it from.

  ***

* [product​Update​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdateMedia)

  mutation

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

* [staged​Upload​Target​Generate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadTargetGenerate)

  mutation

  Deprecated

  * input

    [Staged​Upload​Target​Generate​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadTargetGenerateInput)

    required

    ### Arguments

    The input fields for generating a staged upload.

  ***

* [staged​Upload​Targets​Generate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadTargetsGenerate)

  mutation

  Deprecated

  * input

    [\[Stage​Image​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StageImageInput)

    required

    ### Arguments

    The input fields for generating staged uploads.

  ***

***

## <\~> UserError Mutations

### Mutated by

* <\~>[app​Purchase​One​Time​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appPurchaseOneTimeCreate)
* <\~>[app​Subscription​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCancel)
* <\~>[app​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate)
* <\~>[app​Subscription​Line​Item​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionLineItemUpdate)
* <\~>[app​Usage​Record​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appUsageRecordCreate)
* <\~>[bulk​Operation​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationCancel)
* <\~>[collection​Add​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProducts)
* <\~>[collection​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionCreate)
* <\~>[collection​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionDelete)
* <\~>[collection​Remove​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionRemoveProducts)
* <\~>[collection​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUpdate)
* <\~>[customer​Add​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddTaxExemptions)
* <\~>[customer​Address​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressCreate)
* <\~>[customer​Address​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressDelete)
* <\~>[customer​Address​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressUpdate)
* <\~>[customer​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerCreate)
* <\~>[customer​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerDelete)
* <\~>[customer​Generate​Account​Activation​Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerGenerateAccountActivationUrl)
* <\~>[customer​Payment​Method​Credit​Card​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodCreditCardCreate)
* <\~>[customer​Payment​Method​Credit​Card​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodCreditCardUpdate)
* <\~>[customer​Payment​Method​Revoke](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodRevoke)
* <\~>[customer​Payment​Method​Send​Update​Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodSendUpdateEmail)
* <\~>[customer​Remove​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerRemoveTaxExemptions)
* <\~>[customer​Replace​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerReplaceTaxExemptions)
* <\~>[customer​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdate)
* <\~>[customer​Update​Default​Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdateDefaultAddress)
* <\~>[delivery​Profile​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileCreate)
* <\~>[delivery​Profile​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileRemove)
* <\~>[delivery​Profile​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileUpdate)
* <\~>[delivery​Promise​Participants​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryPromiseParticipantsUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-UserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
