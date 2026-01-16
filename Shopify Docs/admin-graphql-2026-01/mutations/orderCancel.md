---
title: orderCancel - GraphQL Admin
description: >-
  Cancels an order, with options for refunding, restocking inventory, and
  customer notification.


  > Caution:

  > Order cancellation is irreversible. An order that has been cancelled can't
  be restored to its original state.


  Use the `orderCancel` mutation to programmatically cancel orders in scenarios
  such as:


  - Customer-requested cancellations due to size, color, or other preference
  changes

  - Payment processing failures or declined transactions

  - Fraud detection and prevention

  - Insufficient inventory availability

  - Staff errors in order processing

  - Wholesale or B2B order management workflows


  The `orderCancel` mutation provides flexible refund options including
  refunding to original payment methods

  or issuing store credit. If a payment was only authorized (temporarily held)
  but not yet charged,

  that hold will be automatically released when the order is cancelled, even if
  you choose not to refund other payments.


  The mutation supports different cancellation reasons: customer requests,
  payment declines, fraud,

  inventory issues, staff errors, or other unspecified reasons. Each
  cancellation can include optional

  staff notes for internal documentation (notes aren't visible to customers).


  An order can only be cancelled if it meets the following criteria:


  - The order hasn't already been cancelled.

  - The order has no pending payment authorizations.

  - The order has no active returns in progress.

  - The order has no outstanding fulfillments that can't be cancelled.


  Orders might be assigned to locations that become

  [deactivated](https://help.shopify.com/manual/fulfillment/setup/locations-management#deactivate-and-reactivate-locations)

  after the order was created. When cancelling such orders, inventory behavior
  depends on payment status:


  - **Paid orders**: Cancellation will fail with an error if restocking is
  enabled, since inventory

  can't be returned to deactivated locations.

  - **Unpaid orders**: Cancellation succeeds but inventory is not restocked
  anywhere, even when the

  restock option is enabled. The committed inventory effectively becomes
  unavailable rather than being

  returned to stock at the deactivated location.


  After you cancel an order, you can still make limited updates to certain
  fields (like

  notes and tags) using the

  [`orderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate).


  For partial refunds or more complex refund scenarios on active orders,

  such as refunding only specific line items while keeping the rest of the order
  fulfilled,

  consider using the
  [`refundCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate)

  mutation instead of full order cancellation.


  Learn how to build apps that integrate with

  [order management and fulfillment
  processes](https://shopify.dev/docs/apps/build/orders-fulfillment).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCancel'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCancel.md'
---

# order​Cancel

mutation

Requires `write_orders` access scope or `write_marketplace_orders` access scope. Also: This action cannot be reversed.

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

## Arguments

* notify​Customer

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether to send a notification to the customer about the order cancellation.

* order​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the order to be canceled.

* reason

  [Order​Cancel​Reason!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCancelReason)

  required

  The reason for canceling the order.

* refund​Method

  [Order​Cancel​Refund​Method​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCancelRefundMethodInput)

  Indicates how to refund the amount paid by the customer. Authorized payments will be voided regardless of this setting.

* restock

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  required

  Whether to restock the inventory committed to the order. For unpaid orders fulfilled from locations that have been deactivated, inventory will not be restocked to the deactivated locations even if this argument is set to true.

* staff​Note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Default:null

  A staff-facing note about the order cancellation. This is not visible to the customer. Maximum length of 255 characters.

* refund

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Deprecated

***

## Order​Cancel​Payload returns

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The job that asynchronously cancels the order.

* order​Cancel​User​Errors

  [\[Order​Cancel​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCancelUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-nullDeprecated

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Cancel an order

  #### Description

  Cancel an \[order]\(https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) with full refund to the original payment method. The mutation refunds the customer, sends a notification, restocks inventory, and records a cancellation reason with staff notes. The response includes \[job details]\(https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) and comprehensive order status information.

  #### Query

  ```graphql
  mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
    orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {
      job {
        id
        done
      }
      orderCancelUserErrors {
        field
        message
        code
      }
      userErrors {
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "orderId": "gid://shopify/Order/148977776",
    "notifyCustomer": true,
    "refundMethod": {
      "originalPaymentMethodsRefund": true
    },
    "restock": true,
    "reason": "CUSTOMER",
    "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) { orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) { job { id done } orderCancelUserErrors { field message code } userErrors { field message } } }",
   "variables": {
      "orderId": "gid://shopify/Order/148977776",
      "notifyCustomer": true,
      "refundMethod": {
        "originalPaymentMethodsRefund": true
      },
      "restock": true,
      "reason": "CUSTOMER",
      "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
      orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {
        job {
          id
          done
        }
        orderCancelUserErrors {
          field
          message
          code
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "orderId": "gid://shopify/Order/148977776",
          "notifyCustomer": true,
          "refundMethod": {
              "originalPaymentMethodsRefund": true
          },
          "restock": true,
          "reason": "CUSTOMER",
          "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
      orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {
        job {
          id
          done
        }
        orderCancelUserErrors {
          field
          message
          code
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "orderId": "gid://shopify/Order/148977776",
    "notifyCustomer": true,
    "refundMethod": {
      "originalPaymentMethodsRefund": true
    },
    "restock": true,
    "reason": "CUSTOMER",
    "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
        orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {
          job {
            id
            done
          }
          orderCancelUserErrors {
            field
            message
            code
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "orderId": "gid://shopify/Order/148977776",
          "notifyCustomer": true,
          "refundMethod": {
              "originalPaymentMethodsRefund": true
          },
          "restock": true,
          "reason": "CUSTOMER",
          "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "orderCancel": {
      "job": {
        "id": "gid://shopify/Job/1fb9ff6d-d99c-49cf-80c5-6f915f0735ad",
        "done": false
      },
      "orderCancelUserErrors": [],
      "userErrors": []
    }
  }
  ```

* ### Cancel an order and refund to store credit

  #### Description

  Cancel an \[order]\(https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and refund the payment to the customer's store credit account. The mutation creates store credit with an expiration date and maintains the refundable amount for future use. This example demonstrates the alternative refund method for providing customer value without processing traditional refunds.

  #### Query

  ```graphql
  mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) {
    orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason) {
      job {
        id
        done
      }
      orderCancelUserErrors {
        field
        message
        code
      }
      userErrors {
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "orderId": "gid://shopify/Order/148977776",
    "refundMethod": {
      "storeCreditRefund": {
        "expiresAt": "2026-06-19T23:35:01-04:00"
      }
    },
    "restock": true,
    "reason": "CUSTOMER"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) { orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason) { job { id done } orderCancelUserErrors { field message code } userErrors { field message } } }",
   "variables": {
      "orderId": "gid://shopify/Order/148977776",
      "refundMethod": {
        "storeCreditRefund": {
          "expiresAt": "2026-06-19T23:35:01-04:00"
        }
      },
      "restock": true,
      "reason": "CUSTOMER"
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) {
      orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason) {
        job {
          id
          done
        }
        orderCancelUserErrors {
          field
          message
          code
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "orderId": "gid://shopify/Order/148977776",
          "refundMethod": {
              "storeCreditRefund": {
                  "expiresAt": "2026-06-19T23:35:01-04:00"
              }
          },
          "restock": true,
          "reason": "CUSTOMER"
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) {
      orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason) {
        job {
          id
          done
        }
        orderCancelUserErrors {
          field
          message
          code
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "orderId": "gid://shopify/Order/148977776",
    "refundMethod": {
      "storeCreditRefund": {
        "expiresAt": "2026-06-19T23:35:01-04:00"
      }
    },
    "restock": true,
    "reason": "CUSTOMER"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) {
        orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason) {
          job {
            id
            done
          }
          orderCancelUserErrors {
            field
            message
            code
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "orderId": "gid://shopify/Order/148977776",
          "refundMethod": {
              "storeCreditRefund": {
                  "expiresAt": "2026-06-19T23:35:01-04:00"
              }
          },
          "restock": true,
          "reason": "CUSTOMER"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "orderCancel": {
      "job": {
        "id": "gid://shopify/Job/fce26225-36ae-4ae8-b42e-793a8c6bbdaa",
        "done": false
      },
      "orderCancelUserErrors": [],
      "userErrors": []
    }
  }
  ```

* ### Cancel an order without refunding

  #### Description

  Cancel an \[order]\(https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) without refunding the customer while still voiding authorized payments. The mutation cancels the order and restocks inventory but maintains the refundable amount, allowing for manual refund processing later. This example demonstrates order cancellation without automatic customer refunds.

  #### Query

  ```graphql
  mutation OrderCancel($orderId: ID!, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) {
    orderCancel(orderId: $orderId, refundMethod: $refundMethod, restock: $restock, reason: $reason) {
      job {
        id
        done
      }
      orderCancelUserErrors {
        field
        message
        code
      }
      userErrors {
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "orderId": "gid://shopify/Order/148977776",
    "refundMethod": {
      "originalPaymentMethodsRefund": false
    },
    "restock": true,
    "reason": "INVENTORY"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation OrderCancel($orderId: ID!, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) { orderCancel(orderId: $orderId, refundMethod: $refundMethod, restock: $restock, reason: $reason) { job { id done } orderCancelUserErrors { field message code } userErrors { field message } } }",
   "variables": {
      "orderId": "gid://shopify/Order/148977776",
      "refundMethod": {
        "originalPaymentMethodsRefund": false
      },
      "restock": true,
      "reason": "INVENTORY"
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    mutation OrderCancel($orderId: ID!, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) {
      orderCancel(orderId: $orderId, refundMethod: $refundMethod, restock: $restock, reason: $reason) {
        job {
          id
          done
        }
        orderCancelUserErrors {
          field
          message
          code
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "orderId": "gid://shopify/Order/148977776",
          "refundMethod": {
              "originalPaymentMethodsRefund": false
          },
          "restock": true,
          "reason": "INVENTORY"
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    mutation OrderCancel($orderId: ID!, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) {
      orderCancel(orderId: $orderId, refundMethod: $refundMethod, restock: $restock, reason: $reason) {
        job {
          id
          done
        }
        orderCancelUserErrors {
          field
          message
          code
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "orderId": "gid://shopify/Order/148977776",
    "refundMethod": {
      "originalPaymentMethodsRefund": false
    },
    "restock": true,
    "reason": "INVENTORY"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation OrderCancel($orderId: ID!, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) {
        orderCancel(orderId: $orderId, refundMethod: $refundMethod, restock: $restock, reason: $reason) {
          job {
            id
            done
          }
          orderCancelUserErrors {
            field
            message
            code
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "orderId": "gid://shopify/Order/148977776",
          "refundMethod": {
              "originalPaymentMethodsRefund": false
          },
          "restock": true,
          "reason": "INVENTORY"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "orderCancel": {
      "job": {
        "id": "gid://shopify/Job/90d193b2-6e66-49e9-b594-09abcbe48c1d",
        "done": false
      },
      "orderCancelUserErrors": [],
      "userErrors": []
    }
  }
  ```

* ### orderCancel reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20OrderCancel\(%24orderId%3A%20ID!%2C%20%24notifyCustomer%3A%20Boolean%2C%20%24refundMethod%3A%20OrderCancelRefundMethodInput!%2C%20%24restock%3A%20Boolean!%2C%20%24reason%3A%20OrderCancelReason!%2C%20%24staffNote%3A%20String\)%20%7B%0A%20%20orderCancel\(orderId%3A%20%24orderId%2C%20notifyCustomer%3A%20%24notifyCustomer%2C%20refundMethod%3A%20%24refundMethod%2C%20restock%3A%20%24restock%2C%20reason%3A%20%24reason%2C%20staffNote%3A%20%24staffNote\)%20%7B%0A%20%20%20%20job%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20done%0A%20%20%20%20%7D%0A%20%20%20%20orderCancelUserErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22orderId%22%3A%20%22gid%3A%2F%2Fshopify%2FOrder%2F148977776%22%2C%0A%20%20%22notifyCustomer%22%3A%20true%2C%0A%20%20%22refundMethod%22%3A%20%7B%0A%20%20%20%20%22originalPaymentMethodsRefund%22%3A%20true%0A%20%20%7D%2C%0A%20%20%22restock%22%3A%20true%2C%0A%20%20%22reason%22%3A%20%22CUSTOMER%22%2C%0A%20%20%22staffNote%22%3A%20%22Wrong%20size.%20Customer%20reached%20out%20saying%20they%20already%20re-purchased%20the%20correct%20size.%22%0A%7D)

##### GQL

```graphql
mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
  orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {
    job {
      id
      done
    }
    orderCancelUserErrors {
      field
      message
      code
    }
    userErrors {
      field
      message
    }
  }
}
```

##### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) { orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) { job { id done } orderCancelUserErrors { field message code } userErrors { field message } } }",
 "variables": {
    "orderId": "gid://shopify/Order/148977776",
    "notifyCustomer": true,
    "refundMethod": {
      "originalPaymentMethodsRefund": true
    },
    "restock": true,
    "reason": "CUSTOMER",
    "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
  }
}'
```

##### React Router

```javascript
import { authenticate } from "../shopify.server";

export const loader = async ({request}) => {
  const { admin } = await authenticate.admin(request);
  const response = await admin.graphql(
    `#graphql
  mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
    orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {
      job {
        id
        done
      }
      orderCancelUserErrors {
        field
        message
        code
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "orderId": "gid://shopify/Order/148977776",
        "notifyCustomer": true,
        "refundMethod": {
            "originalPaymentMethodsRefund": true
        },
        "restock": true,
        "reason": "CUSTOMER",
        "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
    },
  },
  );
  const json = await response.json();
  return json.data;
}
```

##### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
      orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {
        job {
          id
          done
        }
        orderCancelUserErrors {
          field
          message
          code
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "orderId": "gid://shopify/Order/148977776",
        "notifyCustomer": true,
        "refundMethod": {
            "originalPaymentMethodsRefund": true
        },
        "restock": true,
        "reason": "CUSTOMER",
        "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
    },
  },
});
```

##### Ruby

```ruby
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
    orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {
      job {
        id
        done
      }
      orderCancelUserErrors {
        field
        message
        code
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "orderId": "gid://shopify/Order/148977776",
  "notifyCustomer": true,
  "refundMethod": {
    "originalPaymentMethodsRefund": true
  },
  "restock": true,
  "reason": "CUSTOMER",
  "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "orderId": "gid://shopify/Order/148977776",
  "notifyCustomer": true,
  "refundMethod": {
    "originalPaymentMethodsRefund": true
  },
  "restock": true,
  "reason": "CUSTOMER",
  "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
}
```

## Response

JSON

```json
{
  "orderCancel": {
    "job": {
      "id": "gid://shopify/Job/1fb9ff6d-d99c-49cf-80c5-6f915f0735ad",
      "done": false
    },
    "orderCancelUserErrors": [],
    "userErrors": []
  }
}
```
