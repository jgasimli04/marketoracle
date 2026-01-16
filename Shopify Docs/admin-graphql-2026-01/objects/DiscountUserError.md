---
title: DiscountUserError - GraphQL Admin
description: An error that occurs during the execution of a discount mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError.md
---

# Discount​User​Error

object

An error that occurs during the execution of a discount mutation.

## Fields

* code

  [Discount​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountErrorCode)

  The error code.

* extra​Info

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Extra information about this error.

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

* {}[DiscountRedeemCodeBulkCreationCode.errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreationCode#field-DiscountRedeemCodeBulkCreationCode.fields.errors)

***

## Mutations

* [discount​Automatic​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticActivate)

  mutation

  Activates an automatic discount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic discount to activate.

  ***

* [discount​Automatic​App​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate)

  mutation

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

* [discount​Automatic​App​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppUpdate)

  mutation

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

* [discount​Automatic​Basic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate)

  mutation

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

* [discount​Automatic​Basic​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate)

  mutation

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

* [discount​Automatic​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBulkDelete)

  mutation

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

* [discount​Automatic​Bxgy​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate)

  mutation

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

* [discount​Automatic​Bxgy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate)

  mutation

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

* [discount​Automatic​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticDeactivate)

  mutation

  Deactivates an automatic discount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic discount to deactivate.

  ***

* [discount​Automatic​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticDelete)

  mutation

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

* [discount​Automatic​Free​Shipping​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate)

  mutation

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

* [discount​Automatic​Free​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate)

  mutation

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

* [discount​Code​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeActivate)

  mutation

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

* [discount​Code​App​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate)

  mutation

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

* [discount​Code​App​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppUpdate)

  mutation

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

* [discount​Code​Basic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate)

  mutation

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

* [discount​Code​Basic​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate)

  mutation

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

* [discount​Code​Bulk​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkActivate)

  mutation

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

* [discount​Code​Bulk​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkDeactivate)

  mutation

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

* [discount​Code​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkDelete)

  mutation

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

* [discount​Code​Bxgy​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate)

  mutation

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

* [discount​Code​Bxgy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate)

  mutation

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

* [discount​Code​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeDeactivate)

  mutation

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

* [discount​Code​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeDelete)

  mutation

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

* [discount​Code​Free​Shipping​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingCreate)

  mutation

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

* [discount​Code​Free​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingUpdate)

  mutation

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

* [discount​Code​Redeem​Code​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeRedeemCodeBulkDelete)

  mutation

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

* [discount​Redeem​Code​Bulk​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountRedeemCodeBulkAdd)

  mutation

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

***

## <\~> DiscountUserError Mutations

### Mutated by

* <\~>[discount​Automatic​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticActivate)
* <\~>[discount​Automatic​App​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate)
* <\~>[discount​Automatic​App​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppUpdate)
* <\~>[discount​Automatic​Basic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate)
* <\~>[discount​Automatic​Basic​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate)
* <\~>[discount​Automatic​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBulkDelete)
* <\~>[discount​Automatic​Bxgy​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate)
* <\~>[discount​Automatic​Bxgy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate)
* <\~>[discount​Automatic​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticDeactivate)
* <\~>[discount​Automatic​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticDelete)
* <\~>[discount​Automatic​Free​Shipping​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate)
* <\~>[discount​Automatic​Free​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate)
* <\~>[discount​Code​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeActivate)
* <\~>[discount​Code​App​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate)
* <\~>[discount​Code​App​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppUpdate)
* <\~>[discount​Code​Basic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate)
* <\~>[discount​Code​Basic​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate)
* <\~>[discount​Code​Bulk​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkActivate)
* <\~>[discount​Code​Bulk​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkDeactivate)
* <\~>[discount​Code​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkDelete)
* <\~>[discount​Code​Bxgy​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate)
* <\~>[discount​Code​Bxgy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate)
* <\~>[discount​Code​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeDeactivate)
* <\~>[discount​Code​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeDelete)
* <\~>[discount​Code​Free​Shipping​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingCreate)
* <\~>[discount​Code​Free​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingUpdate)
* <\~>[discount​Code​Redeem​Code​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeRedeemCodeBulkDelete)
* <\~>[discount​Redeem​Code​Bulk​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountRedeemCodeBulkAdd)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-DiscountUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
