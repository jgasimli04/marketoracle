---
title: ReturnUserError - GraphQL Admin
description: An error that occurs during the execution of a return mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError.md'
---

# Return​User​Error

object

An error that occurs during the execution of a return mutation.

## Fields

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

***

## Map

No referencing types

***

## Mutations

* [remove​From​Return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/removeFromReturn)

  mutation

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

* [return​Approve​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest)

  mutation

  Approves a customer's return request. If this mutation is successful, then the `Return.status` field of the approved return is set to `OPEN`.

  * input

    [Return​Approve​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnApproveRequestInput)

    required

    ### Arguments

    The input fields to approve a return.

  ***

* [return​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCancel)

  mutation

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

* [return​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnClose)

  mutation

  Indicates a return is complete, either when a refund has been made and items restocked, or simply when it has been marked as returned in the system.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return to close.

  ***

* [return​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate)

  mutation

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

* [return​Decline​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest)

  mutation

  Declines a return on an order. When a return is declined, each `ReturnLineItem.fulfillmentLineItem` can be associated to a new return. Use the `ReturnCreate` or `ReturnRequest` mutation to initiate a new return.

  * input

    [Return​Decline​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnDeclineRequestInput)

    required

    ### Arguments

    The input fields for declining a customer's return request.

  ***

* [return​Process](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnProcess)

  mutation

  Processes a return by confirming which items customers return and exchange, handling their disposition, and optionally issuing refunds. This mutation confirms the quantities for [`ReturnLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnLineItem) and [`ExchangeLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExchangeLineItem) objects previously created on the [`Return`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return).

  For returned items, you specify how to handle them through dispositions such as restocking or disposal. The mutation creates [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects for exchange items and records all transactions in the merchant's financial reports. You can optionally issue refunds through financial transfers, apply refund duties, and refund shipping costs.

  Learn more about [processing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

  * input

    [Return​Process​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessInput)

    required

    ### Arguments

    Specifies the input fields for processing a return.

  ***

* [return​Reopen](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnReopen)

  mutation

  Reopens a closed return.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return to reopen.

  ***

* [return​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRequest)

  mutation

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

* [reverse​Delivery​Create​With​Shipping](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseDeliveryCreateWithShipping)

  mutation

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

* [reverse​Delivery​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseDeliveryShippingUpdate)

  mutation

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

* [reverse​Fulfillment​Order​Dispose](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseFulfillmentOrderDispose)

  mutation

  Disposes reverse fulfillment order line items.

  * disposition​Inputs

    [\[Reverse​Fulfillment​Order​Dispose​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseFulfillmentOrderDisposeInput)

    required

    ### Arguments

    The input parameters required to dispose reverse fulfillment order line items.

  ***

### Deprecated mutations

* [return​Line​Item​Remove​From​Return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnLineItemRemoveFromReturn)

  mutation

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

* [return​Refund](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRefund)

  mutation

  Deprecated

  * return​Refund​Input

    [Return​Refund​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundInput)

    required

    ### Arguments

    The input fields to refund a return.

  ***

***

## <\~> ReturnUserError Mutations

### Mutated by

* <\~>[remove​From​Return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/removeFromReturn)
* <\~>[return​Approve​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest)
* <\~>[return​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCancel)
* <\~>[return​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnClose)
* <\~>[return​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate)
* <\~>[return​Decline​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest)
* <\~>[return​Process](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnProcess)
* <\~>[return​Reopen](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnReopen)
* <\~>[return​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRequest)
* <\~>[reverse​Delivery​Create​With​Shipping](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseDeliveryCreateWithShipping)
* <\~>[reverse​Delivery​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseDeliveryShippingUpdate)
* <\~>[reverse​Fulfillment​Order​Dispose](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseFulfillmentOrderDispose)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ReturnUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
