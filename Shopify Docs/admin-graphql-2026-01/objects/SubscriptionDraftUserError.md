---
title: SubscriptionDraftUserError - GraphQL Admin
description: Represents a Subscription Draft error.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError.md
---

# Subscription​Draft​User​Error

object

Requires `read_own_subscription_contracts` access scope.

Represents a Subscription Draft error.

## Fields

* code

  [Subscription​Draft​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionDraftErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

* [subscription​Billing​Cycle​Contract​Draft​Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractDraftCommit)

  mutation

  Commits the updates of a Subscription Billing Cycle Contract draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to commit.

  ***

* [subscription​Billing​Cycle​Contract​Draft​Concatenate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractDraftConcatenate)

  mutation

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

* [subscription​Billing​Cycle​Contract​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractEdit)

  mutation

  Edit the contents of a subscription contract for the specified billing cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  ***

* [subscription​Contract​Atomic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractAtomicCreate)

  mutation

  Creates a Subscription Contract.

  * input

    [Subscription​Contract​Atomic​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractAtomicCreateInput)

    required

    ### Arguments

    The properties of the new Subscription Contract.

  ***

* [subscription​Contract​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCreate)

  mutation

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

* [subscription​Contract​Product​Change](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractProductChange)

  mutation

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

* [subscription​Contract​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractUpdate)

  mutation

  Creates a draft of an existing [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract). The draft captures the current state of the contract and allows incremental modifications through draft mutations such as [`subscriptionDraftLineAdd`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd), [`subscriptionDraftDiscountAdd`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountAdd), and [`subscriptionDraftUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate).

  Changes remain in draft state and don't affect the live contract until committed. After you've made all necessary changes to the draft, commit it using [`subscriptionDraftCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit) to apply the updates to the original contract.

  Learn more about [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract#step-2-create-a-draft-of-an-existing-contract).

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract to update.

  ***

* [subscription​Draft​Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit)

  mutation

  Commits the updates of a Subscription Contract draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to commit.

  ***

* [subscription​Draft​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountAdd)

  mutation

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

* [subscription​Draft​Discount​Code​Apply](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountCodeApply)

  mutation

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

* [subscription​Draft​Discount​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountRemove)

  mutation

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

* [subscription​Draft​Discount​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountUpdate)

  mutation

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

* [subscription​Draft​Free​Shipping​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountAdd)

  mutation

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

* [subscription​Draft​Free​Shipping​Discount​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountUpdate)

  mutation

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

* [subscription​Draft​Line​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd)

  mutation

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

* [subscription​Draft​Line​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineRemove)

  mutation

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

* [subscription​Draft​Line​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineUpdate)

  mutation

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

* [subscription​Draft​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate)

  mutation

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

***

## <\~> SubscriptionDraftUserError Mutations

### Mutated by

* <\~>[subscription​Billing​Cycle​Contract​Draft​Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractDraftCommit)
* <\~>[subscription​Billing​Cycle​Contract​Draft​Concatenate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractDraftConcatenate)
* <\~>[subscription​Billing​Cycle​Contract​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractEdit)
* <\~>[subscription​Contract​Atomic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractAtomicCreate)
* <\~>[subscription​Contract​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCreate)
* <\~>[subscription​Contract​Product​Change](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractProductChange)
* <\~>[subscription​Contract​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractUpdate)
* <\~>[subscription​Draft​Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit)
* <\~>[subscription​Draft​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountAdd)
* <\~>[subscription​Draft​Discount​Code​Apply](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountCodeApply)
* <\~>[subscription​Draft​Discount​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountRemove)
* <\~>[subscription​Draft​Discount​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountUpdate)
* <\~>[subscription​Draft​Free​Shipping​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountAdd)
* <\~>[subscription​Draft​Free​Shipping​Discount​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountUpdate)
* <\~>[subscription​Draft​Line​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd)
* <\~>[subscription​Draft​Line​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineRemove)
* <\~>[subscription​Draft​Line​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineUpdate)
* <\~>[subscription​Draft​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-SubscriptionDraftUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
