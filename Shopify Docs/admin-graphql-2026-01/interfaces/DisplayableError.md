---
title: DisplayableError - GraphQL Admin
description: Represents an error in the input of a mutation.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError.md
---

# Displayable​Error

interface

Represents an error in the input of a mutation.

## Fields

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Types implemented in

* [Abandonment​Email​State​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonmentEmailStateUpdateUserError)

  OBJECT

  An error that occurs during the execution of `AbandonmentEmailStateUpdate`.

  * code

    [Abandonment​Email​State​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentEmailStateUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Abandonment​Update​Activities​Delivery​Statuses​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonmentUpdateActivitiesDeliveryStatusesUserError)

  OBJECT

  An error that occurs during the execution of `AbandonmentUpdateActivitiesDeliveryStatuses`.

  * code

    [Abandonment​Update​Activities​Delivery​Statuses​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentUpdateActivitiesDeliveryStatusesUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [App​Revoke​Access​Scopes​App​Revoke​Scope​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevokeAccessScopesAppRevokeScopeError)

  OBJECT

  Represents an error that happens while revoking a granted scope.

  * code

    [App​Revoke​Access​Scopes​App​Revoke​Scope​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppRevokeAccessScopesAppRevokeScopeErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [App​Subscription​Trial​Extend​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionTrialExtendUserError)

  OBJECT

  An error that occurs during the execution of `AppSubscriptionTrialExtend`.

  * code

    [App​Subscription​Trial​Extend​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionTrialExtendUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [App​Uninstall​App​Uninstall​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUninstallAppUninstallError)

  OBJECT

  Represents an error that happens while uninstalling an app.

  * code

    [App​Uninstall​App​Uninstall​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppUninstallAppUninstallErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Article​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleCreateUserError)

  OBJECT

  An error that occurs during the execution of `ArticleCreate`.

  * code

    [Article​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ArticleCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Article​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleDeleteUserError)

  OBJECT

  An error that occurs during the execution of `ArticleDelete`.

  * code

    [Article​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ArticleDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Article​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleUpdateUserError)

  OBJECT

  An error that occurs during the execution of `ArticleUpdate`.

  * code

    [Article​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ArticleUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Billing​Attempt​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/BillingAttemptUserError)

  OBJECT

  Represents an error that happens during the execution of a billing attempt mutation.

  * code

    [Billing​Attempt​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BillingAttemptUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Blog​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogCreateUserError)

  OBJECT

  An error that occurs during the execution of `BlogCreate`.

  * code

    [Blog​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BlogCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Blog​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogDeleteUserError)

  OBJECT

  An error that occurs during the execution of `BlogDelete`.

  * code

    [Blog​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BlogDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Blog​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogUpdateUserError)

  OBJECT

  An error that occurs during the execution of `BlogUpdate`.

  * code

    [Blog​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BlogUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Bulk​Mutation​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkMutationUserError)

  OBJECT

  Represents an error that happens during execution of a bulk mutation.

  * code

    [Bulk​Mutation​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkMutationErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Bulk​Operation​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperationUserError)

  OBJECT

  An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing.

  * code

    [Bulk​Operation​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Bulk​Product​Resource​Feedback​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkProductResourceFeedbackCreateUserError)

  OBJECT

  An error that occurs during the execution of `BulkProductResourceFeedbackCreate`.

  * code

    [Bulk​Product​Resource​Feedback​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkProductResourceFeedbackCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Business​Customer​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  OBJECT

  An error that happens during the execution of a business customer mutation.

  * code

    [Business​Customer​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BusinessCustomerErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Carrier​Service​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceCreateUserError)

  OBJECT

  An error that occurs during the execution of `CarrierServiceCreate`.

  * code

    [Carrier​Service​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CarrierServiceCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Carrier​Service​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceDeleteUserError)

  OBJECT

  An error that occurs during the execution of `CarrierServiceDelete`.

  * code

    [Carrier​Service​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CarrierServiceDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Carrier​Service​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceUpdateUserError)

  OBJECT

  An error that occurs during the execution of `CarrierServiceUpdate`.

  * code

    [Carrier​Service​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CarrierServiceUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Cart​Transform​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformCreateUserError)

  OBJECT

  An error that occurs during the execution of `CartTransformCreate`.

  * code

    [Cart​Transform​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CartTransformCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Cart​Transform​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformDeleteUserError)

  OBJECT

  An error that occurs during the execution of `CartTransformDelete`.

  * code

    [Cart​Transform​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CartTransformDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Catalog​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogUserError)

  OBJECT

  Defines errors encountered while managing a catalog.

  * code

    [Catalog​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Checkout​Branding​Upsert​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingUpsertUserError)

  OBJECT

  An error that occurs during the execution of `CheckoutBrandingUpsert`.

  * code

    [Checkout​Branding​Upsert​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingUpsertUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Collection​Add​Products​V2User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionAddProductsV2UserError)

  OBJECT

  An error that occurs during the execution of `CollectionAddProductsV2`.

  * code

    [Collection​Add​Products​V2User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionAddProductsV2UserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Collection​Duplicate​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionDuplicateUserError)

  OBJECT

  Errors related to collection duplication.

  * code

    [Collection​Duplicate​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionDuplicateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Collection​Reorder​Products​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionReorderProductsUserError)

  OBJECT

  Errors related to order customer removal.

  * code

    [Collection​Reorder​Products​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionReorderProductsUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Combined​Listing​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingUpdateUserError)

  OBJECT

  An error that occurs during the execution of `CombinedListingUpdate`.

  * code

    [Combined​Listing​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CombinedListingUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Comment​Approve​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentApproveUserError)

  OBJECT

  An error that occurs during the execution of `CommentApprove`.

  * code

    [Comment​Approve​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentApproveUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Comment​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentDeleteUserError)

  OBJECT

  An error that occurs during the execution of `CommentDelete`.

  * code

    [Comment​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Comment​Not​Spam​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentNotSpamUserError)

  OBJECT

  An error that occurs during the execution of `CommentNotSpam`.

  * code

    [Comment​Not​Spam​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentNotSpamUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Comment​Spam​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentSpamUserError)

  OBJECT

  An error that occurs during the execution of `CommentSpam`.

  * code

    [Comment​Spam​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentSpamUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Consent​Policy​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicyError)

  OBJECT

  The errors encountered while performing mutations on consent policies.

  * code

    [Consent​Policy​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ConsentPolicyErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Customer​Cancel​Data​Erasure​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCancelDataErasureUserError)

  OBJECT

  An error that occurs when cancelling a customer data erasure request.

  * code

    [Customer​Cancel​Data​Erasure​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerCancelDataErasureErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Customer​Email​Marketing​Consent​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailMarketingConsentUpdateUserError)

  OBJECT

  An error that occurs during the execution of `CustomerEmailMarketingConsentUpdate`.

  * code

    [Customer​Email​Marketing​Consent​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerEmailMarketingConsentUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Customer​Merge​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeUserError)

  OBJECT

  An error that occurs while merging two customers.

  * code

    [Customer​Merge​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMergeErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Customer​Payment​Method​Create​From​Duplication​Data​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodCreateFromDuplicationDataUserError)

  OBJECT

  An error that occurs during the execution of `CustomerPaymentMethodCreateFromDuplicationData`.

  * code

    [Customer​Payment​Method​Create​From​Duplication​Data​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodCreateFromDuplicationDataUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Customer​Payment​Method​Get​Duplication​Data​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodGetDuplicationDataUserError)

  OBJECT

  An error that occurs during the execution of `CustomerPaymentMethodGetDuplicationData`.

  * code

    [Customer​Payment​Method​Get​Duplication​Data​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodGetDuplicationDataUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Customer​Payment​Method​Get​Update​Url​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodGetUpdateUrlUserError)

  OBJECT

  An error that occurs during the execution of `CustomerPaymentMethodGetUpdateUrl`.

  * code

    [Customer​Payment​Method​Get​Update​Url​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodGetUpdateUrlUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Customer​Payment​Method​Remote​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodRemoteUserError)

  OBJECT

  An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing.

  * code

    [Customer​Payment​Method​Remote​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodRemoteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Customer​Payment​Method​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodUserError)

  OBJECT

  An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing.

  * code

    [Customer​Payment​Method​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Customer​Request​Data​Erasure​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerRequestDataErasureUserError)

  OBJECT

  An error that occurs when requesting a customer data erasure.

  * code

    [Customer​Request​Data​Erasure​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerRequestDataErasureErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Customer​Segment​Members​Query​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMembersQueryUserError)

  OBJECT

  Represents a customer segment members query custom error.

  * code

    [Customer​Segment​Members​Query​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSegmentMembersQueryUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Customer​Send​Account​Invite​Email​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSendAccountInviteEmailUserError)

  OBJECT

  Defines errors for customerSendAccountInviteEmail mutation.

  * code

    [Customer​Send​Account​Invite​Email​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSendAccountInviteEmailUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Customer​Set​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSetUserError)

  OBJECT

  Defines errors for CustomerSet mutation.

  * code

    [Customer​Set​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSetUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Customer​Sms​Marketing​Consent​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentError)

  OBJECT

  An error that occurs during execution of an SMS marketing consent mutation.

  * code

    [Customer​Sms​Marketing​Consent​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSmsMarketingConsentErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Data​Sale​Opt​Out​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/DataSaleOptOutUserError)

  OBJECT

  An error that occurs during the execution of `DataSaleOptOut`.

  * code

    [Data​Sale​Opt​Out​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/DataSaleOptOutUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Delegate​Access​Token​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessTokenCreateUserError)

  OBJECT

  An error that occurs during the execution of `DelegateAccessTokenCreate`.

  * code

    [Delegate​Access​Token​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/DelegateAccessTokenCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Delegate​Access​Token​Destroy​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessTokenDestroyUserError)

  OBJECT

  An error that occurs during the execution of `DelegateAccessTokenDestroy`.

  * code

    [Delegate​Access​Token​Destroy​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/DelegateAccessTokenDestroyUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Delivery​Customization​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationError)

  OBJECT

  An error that occurs during the execution of a delivery customization mutation.

  * code

    [Delivery​Customization​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryCustomizationErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Delivery​Location​Local​Pickup​Settings​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationLocalPickupSettingsError)

  OBJECT

  Represents an error that happened when changing local pickup settings for a location.

  * code

    [Delivery​Location​Local​Pickup​Settings​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryLocationLocalPickupSettingsErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Delivery​Promise​Provider​Upsert​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseProviderUpsertUserError)

  OBJECT

  An error that occurs during the execution of `DeliveryPromiseProviderUpsert`.

  * code

    [Delivery​Promise​Provider​Upsert​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryPromiseProviderUpsertUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Discount​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  OBJECT

  An error that occurs during the execution of a discount mutation.

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

* [Dispute​Evidence​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/DisputeEvidenceUpdateUserError)

  OBJECT

  An error that occurs during the execution of `DisputeEvidenceUpdate`.

  * code

    [Dispute​Evidence​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/DisputeEvidenceUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Errors​Server​Pixel​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsServerPixelUserError)

  OBJECT

  An error that occurs during the execution of a server pixel mutation.

  * code

    [Errors​Server​Pixel​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ErrorsServerPixelUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Errors​Web​Pixel​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsWebPixelUserError)

  OBJECT

  An error that occurs during the execution of a web pixel mutation.

  * code

    [Errors​Web​Pixel​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ErrorsWebPixelUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Files​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/FilesUserError)

  OBJECT

  An error that happens during the execution of a Files API query or mutation.

  * code

    [Files​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FilesErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Fulfillment​Constraint​Rule​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleCreateUserError)

  OBJECT

  An error that occurs during the execution of `FulfillmentConstraintRuleCreate`.

  * code

    [Fulfillment​Constraint​Rule​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentConstraintRuleCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Fulfillment​Constraint​Rule​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleDeleteUserError)

  OBJECT

  An error that occurs during the execution of `FulfillmentConstraintRuleDelete`.

  * code

    [Fulfillment​Constraint​Rule​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentConstraintRuleDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Fulfillment​Constraint​Rule​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleUpdateUserError)

  OBJECT

  An error that occurs during the execution of `FulfillmentConstraintRuleUpdate`.

  * code

    [Fulfillment​Constraint​Rule​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentConstraintRuleUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Fulfillment​Order​Hold​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderHoldUserError)

  OBJECT

  An error that occurs during the execution of `FulfillmentOrderHold`.

  * code

    [Fulfillment​Order​Hold​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderHoldUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Fulfillment​Order​Line​Items​Prepared​For​Pickup​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemsPreparedForPickupUserError)

  OBJECT

  An error that occurs during the execution of `FulfillmentOrderLineItemsPreparedForPickup`.

  * code

    [Fulfillment​Order​Line​Items​Prepared​For​Pickup​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderLineItemsPreparedForPickupUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Fulfillment​Order​Merge​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMergeUserError)

  OBJECT

  An error that occurs during the execution of `FulfillmentOrderMerge`.

  * code

    [Fulfillment​Order​Merge​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderMergeUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Fulfillment​Order​Release​Hold​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderReleaseHoldUserError)

  OBJECT

  An error that occurs during the execution of `FulfillmentOrderReleaseHold`.

  * code

    [Fulfillment​Order​Release​Hold​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderReleaseHoldUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Fulfillment​Order​Reschedule​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderRescheduleUserError)

  OBJECT

  An error that occurs during the execution of `FulfillmentOrderReschedule`.

  * code

    [Fulfillment​Order​Reschedule​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderRescheduleUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Fulfillment​Order​Split​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitUserError)

  OBJECT

  An error that occurs during the execution of `FulfillmentOrderSplit`.

  * code

    [Fulfillment​Order​Split​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderSplitUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Fulfillment​Orders​Reroute​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrdersRerouteUserError)

  OBJECT

  An error that occurs during the execution of `FulfillmentOrdersReroute`.

  * code

    [Fulfillment​Orders​Reroute​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrdersRerouteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Fulfillment​Orders​Set​Fulfillment​Deadline​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrdersSetFulfillmentDeadlineUserError)

  OBJECT

  An error that occurs during the execution of `FulfillmentOrdersSetFulfillmentDeadline`.

  * code

    [Fulfillment​Orders​Set​Fulfillment​Deadline​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Gift​Card​Deactivate​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDeactivateUserError)

  OBJECT

  An error that occurs during the execution of `GiftCardDeactivate`.

  * code

    [Gift​Card​Deactivate​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardDeactivateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Gift​Card​Send​Notification​To​Customer​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSendNotificationToCustomerUserError)

  OBJECT

  An error that occurs during the execution of `GiftCardSendNotificationToCustomer`.

  * code

    [Gift​Card​Send​Notification​To​Customer​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardSendNotificationToCustomerUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Gift​Card​Send​Notification​To​Recipient​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSendNotificationToRecipientUserError)

  OBJECT

  An error that occurs during the execution of `GiftCardSendNotificationToRecipient`.

  * code

    [Gift​Card​Send​Notification​To​Recipient​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardSendNotificationToRecipientUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Gift​Card​Transaction​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardTransactionUserError)

  OBJECT

  Represents an error that happens during the execution of a gift card transaction mutation.

  * code

    [Gift​Card​Transaction​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardTransactionUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Gift​Card​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardUserError)

  OBJECT

  Represents an error that happens during the execution of a gift card mutation.

  * code

    [Gift​Card​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Adjust​Quantities​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustQuantitiesUserError)

  OBJECT

  An error that occurs during the execution of `InventoryAdjustQuantities`.

  * code

    [Inventory​Adjust​Quantities​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryAdjustQuantitiesUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Bulk​Toggle​Activation​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryBulkToggleActivationUserError)

  OBJECT

  An error that occurred while setting the activation status of an inventory item.

  * code

    [Inventory​Bulk​Toggle​Activation​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryBulkToggleActivationUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Move​Quantities​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryMoveQuantitiesUserError)

  OBJECT

  An error that occurs during the execution of `InventoryMoveQuantities`.

  * code

    [Inventory​Move​Quantities​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryMoveQuantitiesUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Set​On​Hand​Quantities​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetOnHandQuantitiesUserError)

  OBJECT

  An error that occurs during the execution of `InventorySetOnHandQuantities`.

  * code

    [Inventory​Set​On​Hand​Quantities​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventorySetOnHandQuantitiesUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Set​Quantities​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetQuantitiesUserError)

  OBJECT

  An error that occurs during the execution of `InventorySetQuantities`.

  * code

    [Inventory​Set​Quantities​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventorySetQuantitiesUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Set​Scheduled​Changes​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetScheduledChangesUserError)

  OBJECT

  An error that occurs during the execution of `InventorySetScheduledChanges`.

  * code

    [Inventory​Set​Scheduled​Changes​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventorySetScheduledChangesUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Shipment​Add​Items​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentAddItemsUserError)

  OBJECT

  An error that occurs during the execution of `InventoryShipmentAddItems`.

  * code

    [Inventory​Shipment​Add​Items​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentAddItemsUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Shipment​Create​In​Transit​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentCreateInTransitUserError)

  OBJECT

  An error that occurs during the execution of `InventoryShipmentCreateInTransit`.

  * code

    [Inventory​Shipment​Create​In​Transit​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentCreateInTransitUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Shipment​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentCreateUserError)

  OBJECT

  An error that occurs during the execution of `InventoryShipmentCreate`.

  * code

    [Inventory​Shipment​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Shipment​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentDeleteUserError)

  OBJECT

  An error that occurs during the execution of `InventoryShipmentDelete`.

  * code

    [Inventory​Shipment​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Shipment​Mark​In​Transit​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentMarkInTransitUserError)

  OBJECT

  An error that occurs during the execution of `InventoryShipmentMarkInTransit`.

  * code

    [Inventory​Shipment​Mark​In​Transit​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentMarkInTransitUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Shipment​Receive​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentReceiveUserError)

  OBJECT

  An error that occurs during the execution of `InventoryShipmentReceive`.

  * code

    [Inventory​Shipment​Receive​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentReceiveUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Shipment​Remove​Items​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentRemoveItemsUserError)

  OBJECT

  An error that occurs during the execution of `InventoryShipmentRemoveItems`.

  * code

    [Inventory​Shipment​Remove​Items​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentRemoveItemsUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Shipment​Set​Tracking​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentSetTrackingUserError)

  OBJECT

  An error that occurs during the execution of `InventoryShipmentSetTracking`.

  * code

    [Inventory​Shipment​Set​Tracking​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentSetTrackingUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Shipment​Update​Item​Quantities​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentUpdateItemQuantitiesUserError)

  OBJECT

  An error that occurs during the execution of `InventoryShipmentUpdateItemQuantities`.

  * code

    [Inventory​Shipment​Update​Item​Quantities​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentUpdateItemQuantitiesUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Transfer​Cancel​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCancelUserError)

  OBJECT

  An error that occurs during the execution of `InventoryTransferCancel`.

  * code

    [Inventory​Transfer​Cancel​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferCancelUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Transfer​Create​As​Ready​To​Ship​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateAsReadyToShipUserError)

  OBJECT

  An error that occurs during the execution of `InventoryTransferCreateAsReadyToShip`.

  * code

    [Inventory​Transfer​Create​As​Ready​To​Ship​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferCreateAsReadyToShipUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Transfer​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateUserError)

  OBJECT

  An error that occurs during the execution of `InventoryTransferCreate`.

  * code

    [Inventory​Transfer​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Transfer​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferDeleteUserError)

  OBJECT

  An error that occurs during the execution of `InventoryTransferDelete`.

  * code

    [Inventory​Transfer​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Transfer​Duplicate​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferDuplicateUserError)

  OBJECT

  An error that occurs during the execution of `InventoryTransferDuplicate`.

  * code

    [Inventory​Transfer​Duplicate​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferDuplicateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Transfer​Edit​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferEditUserError)

  OBJECT

  An error that occurs during the execution of `InventoryTransferEdit`.

  * code

    [Inventory​Transfer​Edit​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferEditUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Transfer​Mark​As​Ready​To​Ship​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferMarkAsReadyToShipUserError)

  OBJECT

  An error that occurs during the execution of `InventoryTransferMarkAsReadyToShip`.

  * code

    [Inventory​Transfer​Mark​As​Ready​To​Ship​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferMarkAsReadyToShipUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Transfer​Remove​Items​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferRemoveItemsUserError)

  OBJECT

  An error that occurs during the execution of `InventoryTransferRemoveItems`.

  * code

    [Inventory​Transfer​Remove​Items​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferRemoveItemsUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Inventory​Transfer​Set​Items​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferSetItemsUserError)

  OBJECT

  An error that occurs during the execution of `InventoryTransferSetItems`.

  * code

    [Inventory​Transfer​Set​Items​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferSetItemsUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Location​Activate​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationActivateUserError)

  OBJECT

  An error that occurs while activating a location.

  * code

    [Location​Activate​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationActivateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Location​Add​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationAddUserError)

  OBJECT

  An error that occurs while adding a location.

  * code

    [Location​Add​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationAddUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Location​Deactivate​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeactivateUserError)

  OBJECT

  The possible errors that can be returned when executing the `locationDeactivate` mutation.

  * code

    [Location​Deactivate​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationDeactivateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Location​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeleteUserError)

  OBJECT

  An error that occurs while deleting a location.

  * code

    [Location​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Location​Edit​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationEditUserError)

  OBJECT

  An error that occurs while editing a location.

  * code

    [Location​Edit​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationEditUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Market​Currency​Settings​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettingsUserError)

  OBJECT

  Error codes for failed market multi-currency operations.

  * code

    [Market​Currency​Settings​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketCurrencySettingsUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Marketing​Activity​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  OBJECT

  An error that occurs during the execution of marketing activity and engagement mutations.

  * code

    [Marketing​Activity​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Market​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  OBJECT

  Defines errors encountered while managing a Market.

  * code

    [Market​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Media​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

  OBJECT

  Represents an error that happens during execution of a Media query or mutation.

  * code

    [Media​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Menu​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuCreateUserError)

  OBJECT

  An error that occurs during the execution of `MenuCreate`.

  * code

    [Menu​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MenuCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Menu​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuDeleteUserError)

  OBJECT

  An error that occurs during the execution of `MenuDelete`.

  * code

    [Menu​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MenuDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Menu​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuUpdateUserError)

  OBJECT

  An error that occurs during the execution of `MenuUpdate`.

  * code

    [Menu​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MenuUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Metafield​Definition​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionCreateUserError)

  OBJECT

  An error that occurs during the execution of `MetafieldDefinitionCreate`.

  * code

    [Metafield​Definition​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionCreateUserErrorCode)

    The error code.

  * element​Index

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The index of the array element that's causing the error.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Metafield​Definition​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionDeleteUserError)

  OBJECT

  An error that occurs during the execution of `MetafieldDefinitionDelete`.

  * code

    [Metafield​Definition​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Metafield​Definition​Pin​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionPinUserError)

  OBJECT

  An error that occurs during the execution of `MetafieldDefinitionPin`.

  * code

    [Metafield​Definition​Pin​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Metafield​Definition​Unpin​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionUnpinUserError)

  OBJECT

  An error that occurs during the execution of `MetafieldDefinitionUnpin`.

  * code

    [Metafield​Definition​Unpin​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionUnpinUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Metafield​Definition​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionUpdateUserError)

  OBJECT

  An error that occurs during the execution of `MetafieldDefinitionUpdate`.

  * code

    [Metafield​Definition​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionUpdateUserErrorCode)

    The error code.

  * element​Index

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The index of the array element that's causing the error.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Metafields​Set​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldsSetUserError)

  OBJECT

  An error that occurs during the execution of `MetafieldsSet`.

  * code

    [Metafields​Set​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldsSetUserErrorCode)

    The error code.

  * element​Index

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The index of the array element that's causing the error.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Metaobject​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  OBJECT

  Defines errors encountered while managing metaobject resources.

  * code

    [Metaobject​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetaobjectUserErrorCode)

    The error code.

  * element​Index

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The index of the failing list element in an array.

  * element​Key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The key of the failing object element.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Mobile​Platform​Application​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationUserError)

  OBJECT

  An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing.

  * code

    [Mobile​Platform​Application​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MobilePlatformApplicationUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Online​Store​Theme​Files​User​Errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFilesUserErrors)

  OBJECT

  User errors for theme file operations.

  * code

    [Online​Store​Theme​Files​User​Errors​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OnlineStoreThemeFilesUserErrorsCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * filename

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The filename of the theme file.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Order​Cancel​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCancelUserError)

  OBJECT

  Errors related to order cancellation.

  * code

    [Order​Cancel​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCancelUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Order​Create​Mandate​Payment​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateMandatePaymentUserError)

  OBJECT

  An error that occurs during the execution of `OrderCreateMandatePayment`.

  * code

    [Order​Create​Mandate​Payment​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateMandatePaymentUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Order​Create​Manual​Payment​Order​Create​Manual​Payment​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateManualPaymentOrderCreateManualPaymentError)

  OBJECT

  An error that occurs during the execution of a order create manual payment mutation.

  * code

    [Order​Create​Manual​Payment​Order​Create​Manual​Payment​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateManualPaymentOrderCreateManualPaymentErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Order​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateUserError)

  OBJECT

  An error that occurs during the execution of `OrderCreate`.

  * code

    [Order​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Order​Customer​Remove​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCustomerRemoveUserError)

  OBJECT

  Errors related to order customer removal.

  * code

    [Order​Customer​Remove​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCustomerRemoveUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Order​Customer​Set​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCustomerSetUserError)

  OBJECT

  Errors related to order customer set.

  * code

    [Order​Customer​Set​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCustomerSetUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Order​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderDeleteUserError)

  OBJECT

  Errors related to deleting an order.

  * code

    [Order​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Order​Edit​Add​Shipping​Line​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAddShippingLineUserError)

  OBJECT

  An error that occurs during the execution of `OrderEditAddShippingLine`.

  * code

    [Order​Edit​Add​Shipping​Line​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderEditAddShippingLineUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Order​Edit​Remove​Discount​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditRemoveDiscountUserError)

  OBJECT

  An error that occurs during the execution of `OrderEditRemoveDiscount`.

  * code

    [Order​Edit​Remove​Discount​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderEditRemoveDiscountUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Order​Edit​Remove​Shipping​Line​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditRemoveShippingLineUserError)

  OBJECT

  An error that occurs during the execution of `OrderEditRemoveShippingLine`.

  * code

    [Order​Edit​Remove​Shipping​Line​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderEditRemoveShippingLineUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Order​Edit​Update​Discount​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditUpdateDiscountUserError)

  OBJECT

  An error that occurs during the execution of `OrderEditUpdateDiscount`.

  * code

    [Order​Edit​Update​Discount​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderEditUpdateDiscountUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Order​Edit​Update​Shipping​Line​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditUpdateShippingLineUserError)

  OBJECT

  An error that occurs during the execution of `OrderEditUpdateShippingLine`.

  * code

    [Order​Edit​Update​Shipping​Line​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderEditUpdateShippingLineUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Order​Invoice​Send​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderInvoiceSendUserError)

  OBJECT

  An error that occurs during the execution of `OrderInvoiceSend`.

  * code

    [Order​Invoice​Send​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderInvoiceSendUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Order​Risk​Assessment​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessmentCreateUserError)

  OBJECT

  An error that occurs during the execution of `OrderRiskAssessmentCreate`.

  * code

    [Order​Risk​Assessment​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderRiskAssessmentCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Page​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageCreateUserError)

  OBJECT

  An error that occurs during the execution of `PageCreate`.

  * code

    [Page​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PageCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Page​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageDeleteUserError)

  OBJECT

  An error that occurs during the execution of `PageDelete`.

  * code

    [Page​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PageDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Page​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageUpdateUserError)

  OBJECT

  An error that occurs during the execution of `PageUpdate`.

  * code

    [Page​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PageUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Payment​Customization​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError)

  OBJECT

  An error that occurs during the execution of a payment customization mutation.

  * code

    [Payment​Customization​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentCustomizationErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Payment​Reminder​Send​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentReminderSendUserError)

  OBJECT

  An error that occurs during the execution of `PaymentReminderSend`.

  * code

    [Payment​Reminder​Send​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentReminderSendUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Payment​Terms​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsCreateUserError)

  OBJECT

  An error that occurs during the execution of `PaymentTermsCreate`.

  * code

    [Payment​Terms​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentTermsCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Payment​Terms​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsDeleteUserError)

  OBJECT

  An error that occurs during the execution of `PaymentTermsDelete`.

  * code

    [Payment​Terms​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentTermsDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Payment​Terms​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsUpdateUserError)

  OBJECT

  An error that occurs during the execution of `PaymentTermsUpdate`.

  * code

    [Payment​Terms​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentTermsUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Price​List​Fixed​Prices​By​Product​Bulk​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListFixedPricesByProductBulkUpdateUserError)

  OBJECT

  Error codes for failed price list fixed prices by product bulk update operations.

  * code

    [Price​List​Fixed​Prices​By​Product​Bulk​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListFixedPricesByProductBulkUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Price​List​Price​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceUserError)

  OBJECT

  An error for a failed price list price operation.

  * code

    [Price​List​Price​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListPriceUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Price​List​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListUserError)

  OBJECT

  Error codes for failed contextual pricing operations.

  * code

    [Price​List​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Privacy​Features​Disable​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/PrivacyFeaturesDisableUserError)

  OBJECT

  An error that occurs during the execution of `PrivacyFeaturesDisable`.

  * code

    [Privacy​Features​Disable​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyFeaturesDisableUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Product​Bundle​Mutation​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleMutationUserError)

  OBJECT

  Defines errors encountered while managing a product bundle.

  * code

    [Product​Bundle​Mutation​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductBundleMutationUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Product​Change​Status​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductChangeStatusUserError)

  OBJECT

  An error that occurs during the execution of `ProductChangeStatus`.

  * code

    [Product​Change​Status​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductChangeStatusUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Product​Feed​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeedCreateUserError)

  OBJECT

  An error that occurs during the execution of `ProductFeedCreate`.

  * code

    [Product​Feed​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductFeedCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Product​Feed​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeedDeleteUserError)

  OBJECT

  An error that occurs during the execution of `ProductFeedDelete`.

  * code

    [Product​Feed​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductFeedDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Product​Full​Sync​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFullSyncUserError)

  OBJECT

  An error that occurs during the execution of `ProductFullSync`.

  * code

    [Product​Full​Sync​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductFullSyncUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Product​Options​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsCreateUserError)

  OBJECT

  Error codes for failed `ProductOptionsCreate` mutation.

  * code

    [Product​Options​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionsCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Product​Options​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsDeleteUserError)

  OBJECT

  Error codes for failed `ProductOptionsDelete` mutation.

  * code

    [Product​Options​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionsDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Product​Options​Reorder​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsReorderUserError)

  OBJECT

  Error codes for failed `ProductOptionsReorder` mutation.

  * code

    [Product​Options​Reorder​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionsReorderUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Product​Option​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionUpdateUserError)

  OBJECT

  Error codes for failed `ProductOptionUpdate` mutation.

  * code

    [Product​Option​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Product​Set​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetUserError)

  OBJECT

  Defines errors for ProductSet mutation.

  * code

    [Product​Set​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductSetUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Product​Variant​Relationship​Bulk​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantRelationshipBulkUpdateUserError)

  OBJECT

  An error that occurs during the execution of `ProductVariantRelationshipBulkUpdate`.

  * code

    [Product​Variant​Relationship​Bulk​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantRelationshipBulkUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Product​Variants​Bulk​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkCreateUserError)

  OBJECT

  Error codes for failed product variant bulk create mutations.

  * code

    [Product​Variants​Bulk​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Product​Variants​Bulk​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkDeleteUserError)

  OBJECT

  Error codes for failed bulk variant delete mutations.

  * code

    [Product​Variants​Bulk​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Product​Variants​Bulk​Reorder​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkReorderUserError)

  OBJECT

  Error codes for failed bulk product variants reorder operation.

  * code

    [Product​Variants​Bulk​Reorder​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkReorderUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Product​Variants​Bulk​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkUpdateUserError)

  OBJECT

  Error codes for failed variant bulk update mutations.

  * code

    [Product​Variants​Bulk​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Publication​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationUserError)

  OBJECT

  Defines errors encountered while managing a publication.

  * code

    [Publication​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PublicationUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Pub​Sub​Webhook​Subscription​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/PubSubWebhookSubscriptionCreateUserError)

  OBJECT

  An error that occurs during the execution of `PubSubWebhookSubscriptionCreate`.

  * code

    [Pub​Sub​Webhook​Subscription​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PubSubWebhookSubscriptionCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Pub​Sub​Webhook​Subscription​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/PubSubWebhookSubscriptionUpdateUserError)

  OBJECT

  An error that occurs during the execution of `PubSubWebhookSubscriptionUpdate`.

  * code

    [Pub​Sub​Webhook​Subscription​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PubSubWebhookSubscriptionUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Quantity​Pricing​By​Variant​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPricingByVariantUserError)

  OBJECT

  Error codes for failed volume pricing operations.

  * code

    [Quantity​Pricing​By​Variant​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/QuantityPricingByVariantUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Quantity​Rule​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRuleUserError)

  OBJECT

  An error for a failed quantity rule operation.

  * code

    [Quantity​Rule​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/QuantityRuleUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Return​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  OBJECT

  An error that occurs during the execution of a return mutation.

  * code

    [Return​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Selling​Plan​Group​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  OBJECT

  Represents a selling plan group custom error.

  * code

    [Selling​Plan​Group​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanGroupUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Shopify​Payments​Payout​Alternate​Currency​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutAlternateCurrencyCreateUserError)

  OBJECT

  An error that occurs during the execution of `ShopifyPaymentsPayoutAlternateCurrencyCreate`.

  * code

    [Shopify​Payments​Payout​Alternate​Currency​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutAlternateCurrencyCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Shop​Policy​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicyUserError)

  OBJECT

  An error that occurs during the execution of a shop policy mutation.

  * code

    [Shop​Policy​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopPolicyErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Shop​Resource​Feedback​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopResourceFeedbackCreateUserError)

  OBJECT

  An error that occurs during the execution of `ShopResourceFeedbackCreate`.

  * code

    [Shop​Resource​Feedback​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopResourceFeedbackCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Standard​Metafield​Definition​Enable​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionEnableUserError)

  OBJECT

  An error that occurs during the execution of `StandardMetafieldDefinitionEnable`.

  * code

    [Standard​Metafield​Definition​Enable​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/StandardMetafieldDefinitionEnableUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Store​Credit​Account​Credit​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditUserError)

  OBJECT

  An error that occurs during the execution of `StoreCreditAccountCredit`.

  * code

    [Store​Credit​Account​Credit​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditAccountCreditUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Store​Credit​Account​Debit​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitUserError)

  OBJECT

  An error that occurs during the execution of `StoreCreditAccountDebit`.

  * code

    [Store​Credit​Account​Debit​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditAccountDebitUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Subscription​Billing​Cycle​Bulk​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleBulkUserError)

  OBJECT

  Represents an error that happens during the execution of subscriptionBillingCycles mutations.

  * code

    [Subscription​Billing​Cycle​Bulk​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleBulkUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Subscription​Billing​Cycle​Skip​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleSkipUserError)

  OBJECT

  An error that occurs during the execution of `SubscriptionBillingCycleSkip`.

  * code

    [Subscription​Billing​Cycle​Skip​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleSkipUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Subscription​Billing​Cycle​Unskip​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUnskipUserError)

  OBJECT

  An error that occurs during the execution of `SubscriptionBillingCycleUnskip`.

  * code

    [Subscription​Billing​Cycle​Unskip​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleUnskipUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Subscription​Billing​Cycle​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUserError)

  OBJECT

  The possible errors for a subscription billing cycle.

  * code

    [Subscription​Billing​Cycle​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Subscription​Contract​Status​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractStatusUpdateUserError)

  OBJECT

  Represents a subscription contract status update error.

  * code

    [Subscription​Contract​Status​Update​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractStatusUpdateErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Subscription​Contract​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractUserError)

  OBJECT

  Represents a Subscription Contract error.

  * code

    [Subscription​Contract​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Subscription​Draft​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  OBJECT

  Represents a Subscription Draft error.

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

* [Tax​App​Configure​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxAppConfigureUserError)

  OBJECT

  An error that occurs during the execution of `TaxAppConfigure`.

  * code

    [Tax​App​Configure​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxAppConfigureUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Tax​Summary​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxSummaryCreateUserError)

  OBJECT

  An error that occurs during the execution of `TaxSummaryCreate`.

  * code

    [Tax​Summary​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxSummaryCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Theme​Create​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeCreateUserError)

  OBJECT

  An error that occurs during the execution of `ThemeCreate`.

  * code

    [Theme​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeCreateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Theme​Delete​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeDeleteUserError)

  OBJECT

  An error that occurs during the execution of `ThemeDelete`.

  * code

    [Theme​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeDeleteUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Theme​Duplicate​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeDuplicateUserError)

  OBJECT

  An error that occurs during the execution of `ThemeDuplicate`.

  * code

    [Theme​Duplicate​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeDuplicateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Theme​Publish​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemePublishUserError)

  OBJECT

  An error that occurs during the execution of `ThemePublish`.

  * code

    [Theme​Publish​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemePublishUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Theme​Update​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeUpdateUserError)

  OBJECT

  An error that occurs during the execution of `ThemeUpdate`.

  * code

    [Theme​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeUpdateUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Transaction​Void​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/TransactionVoidUserError)

  OBJECT

  An error that occurs during the execution of `TransactionVoid`.

  * code

    [Transaction​Void​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/TransactionVoidUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Translation​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError)

  OBJECT

  Represents an error that happens during the execution of a translation mutation.

  * code

    [Translation​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/TranslationErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Url​Redirect​Bulk​Delete​By​Ids​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteByIdsUserError)

  OBJECT

  An error that occurs during the execution of `UrlRedirectBulkDeleteByIds`.

  * code

    [Url​Redirect​Bulk​Delete​By​Ids​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectBulkDeleteByIdsUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Url​Redirect​Bulk​Delete​By​Saved​Search​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteBySavedSearchUserError)

  OBJECT

  An error that occurs during the execution of `UrlRedirectBulkDeleteBySavedSearch`.

  * code

    [Url​Redirect​Bulk​Delete​By​Saved​Search​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectBulkDeleteBySavedSearchUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Url​Redirect​Bulk​Delete​By​Search​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteBySearchUserError)

  OBJECT

  An error that occurs during the execution of `UrlRedirectBulkDeleteBySearch`.

  * code

    [Url​Redirect​Bulk​Delete​By​Search​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectBulkDeleteBySearchUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Url​Redirect​Import​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImportUserError)

  OBJECT

  Represents an error that happens during execution of a redirect import mutation.

  * code

    [Url​Redirect​Import​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectImportErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Url​Redirect​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectUserError)

  OBJECT

  Represents an error that happens during execution of a redirect mutation.

  * code

    [Url​Redirect​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  OBJECT

  An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

* [Validation​User​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationUserError)

  OBJECT

  An error that occurs during the execution of a validation mutation.

  * code

    [Validation​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ValidationUserErrorCode)

    The error code.

  * field

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The path to the input field that caused the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error message.

***

##### Variables

```json
{
	"field": "",
	"message": ""
}
```

##### Schema

```graphql
interface DisplayableError {
  field: [String!]
  message: String!
}
```
