---
title: subscriptionBillingAttemptCreate - GraphQL Admin
description: >-
  Creates a billing attempt to charge for a
  [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract).
  The mutation processes either the payment for the current billing cycle or for
  a specific cycle, if selected.


  The mutation creates an
  [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)
  when successful. Failed billing attempts include a
  [`processingError`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate#returns-subscriptionBillingAttempt.fields.processingError)
  field with error details.


  > Tip:

  > Use the
  [`idempotencyKey`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate#arguments-subscriptionBillingAttemptInput.fields.idempotencyKey)
  to ensure the billing attempt executes only once, preventing duplicate charges
  if the request is retried.


  You can target a specific billing cycle using the
  [`billingCycleSelector`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleSelector)
  to bill past or future cycles. The
  [`originTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-SubscriptionBillingAttempt.fields.originTime)
  parameter adjusts fulfillment scheduling for attempts completed after the
  expected billing date.


  Learn more about [creating billing
  attempts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract#step-4-create-a-billing-attempt).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate.md
---

# subscription​Billing​Attempt​Create

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Creates a billing attempt to charge for a [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract). The mutation processes either the payment for the current billing cycle or for a specific cycle, if selected.

The mutation creates an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) when successful. Failed billing attempts include a [`processingError`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate#returns-subscriptionBillingAttempt.fields.processingError) field with error details.

***

Tip

Use the [`idempotencyKey`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate#arguments-subscriptionBillingAttemptInput.fields.idempotencyKey) to ensure the billing attempt executes only once, preventing duplicate charges if the request is retried.

***

You can target a specific billing cycle using the [`billingCycleSelector`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleSelector) to bill past or future cycles. The [`originTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-SubscriptionBillingAttempt.fields.originTime) parameter adjusts fulfillment scheduling for attempts completed after the expected billing date.

Learn more about [creating billing attempts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract#step-4-create-a-billing-attempt).

## Arguments

* subscription​Billing​Attempt​Input

  [Subscription​Billing​Attempt​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingAttemptInput)

  required

  The information to apply as a billing attempt.

* subscription​Contract​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the subscription contract.

***

## Subscription​Billing​Attempt​Create​Payload returns

* subscription​Billing​Attempt

  [Subscription​Billing​Attempt](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt)

  The subscription billing attempt.

* user​Errors

  [\[Billing​Attempt​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BillingAttemptUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a billing attempt on a specific billing cycle

  #### Description

  Creates a billing attempt on the billing cycle with cycle index \`1\`.

  #### Query

  ```graphql
  mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) {
    subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: "aaa-bbb-ccc", originTime: "2020-10-01T10:00:00Z"}) {
      subscriptionBillingAttempt {
        id
        ready
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
    "contractId": "gid://shopify/SubscriptionContract/593791907",
    "index": 1
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) { subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: \"aaa-bbb-ccc\", originTime: \"2020-10-01T10:00:00Z\"}) { subscriptionBillingAttempt { id ready } userErrors { field message } } }",
   "variables": {
      "contractId": "gid://shopify/SubscriptionContract/593791907",
      "index": 1
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
    mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) {
      subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: "aaa-bbb-ccc", originTime: "2020-10-01T10:00:00Z"}) {
        subscriptionBillingAttempt {
          id
          ready
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "contractId": "gid://shopify/SubscriptionContract/593791907",
          "index": 1
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
    mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) {
      subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: "aaa-bbb-ccc", originTime: "2020-10-01T10:00:00Z"}) {
        subscriptionBillingAttempt {
          id
          ready
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "contractId": "gid://shopify/SubscriptionContract/593791907",
    "index": 1
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) {
        subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: "aaa-bbb-ccc", originTime: "2020-10-01T10:00:00Z"}) {
          subscriptionBillingAttempt {
            id
            ready
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "contractId": "gid://shopify/SubscriptionContract/593791907",
          "index": 1
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "subscriptionBillingAttemptCreate": {
      "subscriptionBillingAttempt": {
        "id": "gid://shopify/SubscriptionBillingAttempt/528177097",
        "ready": false
      },
      "userErrors": []
    }
  }
  ```

* ### subscriptionBillingAttemptCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20subscriptionBillingAttemptCreate\(%24contractId%3A%20ID!%2C%20%24index%3A%20Int!\)%20%7B%0A%20%20subscriptionBillingAttemptCreate\(subscriptionContractId%3A%20%24contractId%2C%20subscriptionBillingAttemptInput%3A%20%7BbillingCycleSelector%3A%20%7Bindex%3A%20%24index%7D%2C%20idempotencyKey%3A%20%22aaa-bbb-ccc%22%2C%20originTime%3A%20%222020-10-01T10%3A00%3A00Z%22%7D\)%20%7B%0A%20%20%20%20subscriptionBillingAttempt%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20ready%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22contractId%22%3A%20%22gid%3A%2F%2Fshopify%2FSubscriptionContract%2F593791907%22%2C%0A%20%20%22index%22%3A%201%0A%7D)

##### GQL

```graphql
mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) {
  subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: "aaa-bbb-ccc", originTime: "2020-10-01T10:00:00Z"}) {
    subscriptionBillingAttempt {
      id
      ready
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
"query": "mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) { subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: \"aaa-bbb-ccc\", originTime: \"2020-10-01T10:00:00Z\"}) { subscriptionBillingAttempt { id ready } userErrors { field message } } }",
 "variables": {
    "contractId": "gid://shopify/SubscriptionContract/593791907",
    "index": 1
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
  mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) {
    subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: "aaa-bbb-ccc", originTime: "2020-10-01T10:00:00Z"}) {
      subscriptionBillingAttempt {
        id
        ready
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "contractId": "gid://shopify/SubscriptionContract/593791907",
        "index": 1
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
    "query": `mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) {
      subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: "aaa-bbb-ccc", originTime: "2020-10-01T10:00:00Z"}) {
        subscriptionBillingAttempt {
          id
          ready
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "contractId": "gid://shopify/SubscriptionContract/593791907",
        "index": 1
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
  mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) {
    subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: "aaa-bbb-ccc", originTime: "2020-10-01T10:00:00Z"}) {
      subscriptionBillingAttempt {
        id
        ready
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "contractId": "gid://shopify/SubscriptionContract/593791907",
  "index": 1
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "contractId": "gid://shopify/SubscriptionContract/593791907",
  "index": 1
}
```

## Response

JSON

```json
{
  "subscriptionBillingAttemptCreate": {
    "subscriptionBillingAttempt": {
      "id": "gid://shopify/SubscriptionBillingAttempt/528177097",
      "ready": false
    },
    "userErrors": []
  }
}
```
