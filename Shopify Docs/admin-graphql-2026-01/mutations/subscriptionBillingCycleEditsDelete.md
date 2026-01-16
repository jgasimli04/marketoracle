---
title: subscriptionBillingCycleEditsDelete - GraphQL Admin
description: >-
  Delete the current and future schedule and contract edits of a list of
  subscription billing cycles.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditsDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditsDelete.md
---

# subscription​Billing​Cycle​Edits​Delete

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Delete the current and future schedule and contract edits of a list of subscription billing cycles.

## Arguments

* contract​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The globally-unique identifier of the subscription contract that the billing cycle belongs to.

* target​Selection

  [Subscription​Billing​Cycles​Target​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCyclesTargetSelection)

  required

  Select billing cycles to be deleted.

***

## Subscription​Billing​Cycle​Edits​Delete​Payload returns

* billing​Cycles

  [\[Subscription​Billing​Cycle!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  The list of updated billing cycles.

* user​Errors

  [\[Subscription​Billing​Cycle​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Delete the edits on the current and all future billing cycles

  #### Description

  Deletes the schedule and contract edits on the current and all future billing cycles, and reverts the schedule and contract to the information on the base subscription contract.

  #### Query

  ```graphql
  mutation subscriptionBillingCycleEditsDelete($contractId: ID!) {
    subscriptionBillingCycleEditsDelete(contractId: $contractId, targetSelection: ALL) {
      billingCycles {
        cycleStartAt
        cycleEndAt
        cycleIndex
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
    "contractId": "gid://shopify/SubscriptionContract/398475269"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation subscriptionBillingCycleEditsDelete($contractId: ID!) { subscriptionBillingCycleEditsDelete(contractId: $contractId, targetSelection: ALL) { billingCycles { cycleStartAt cycleEndAt cycleIndex } userErrors { field message } } }",
   "variables": {
      "contractId": "gid://shopify/SubscriptionContract/398475269"
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
    mutation subscriptionBillingCycleEditsDelete($contractId: ID!) {
      subscriptionBillingCycleEditsDelete(contractId: $contractId, targetSelection: ALL) {
        billingCycles {
          cycleStartAt
          cycleEndAt
          cycleIndex
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "contractId": "gid://shopify/SubscriptionContract/398475269"
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
    mutation subscriptionBillingCycleEditsDelete($contractId: ID!) {
      subscriptionBillingCycleEditsDelete(contractId: $contractId, targetSelection: ALL) {
        billingCycles {
          cycleStartAt
          cycleEndAt
          cycleIndex
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "contractId": "gid://shopify/SubscriptionContract/398475269"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation subscriptionBillingCycleEditsDelete($contractId: ID!) {
        subscriptionBillingCycleEditsDelete(contractId: $contractId, targetSelection: ALL) {
          billingCycles {
            cycleStartAt
            cycleEndAt
            cycleIndex
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "contractId": "gid://shopify/SubscriptionContract/398475269"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "subscriptionBillingCycleEditsDelete": {
      "billingCycles": [
        {
          "cycleStartAt": "2021-12-15T15:33:01Z",
          "cycleEndAt": "2022-01-01T12:00:00Z",
          "cycleIndex": 1
        }
      ],
      "userErrors": []
    }
  }
  ```

* ### subscriptionBillingCycleEditsDelete reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20subscriptionBillingCycleEditsDelete\(%24contractId%3A%20ID!\)%20%7B%0A%20%20subscriptionBillingCycleEditsDelete\(contractId%3A%20%24contractId%2C%20targetSelection%3A%20ALL\)%20%7B%0A%20%20%20%20billingCycles%20%7B%0A%20%20%20%20%20%20cycleStartAt%0A%20%20%20%20%20%20cycleEndAt%0A%20%20%20%20%20%20cycleIndex%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22contractId%22%3A%20%22gid%3A%2F%2Fshopify%2FSubscriptionContract%2F398475269%22%0A%7D)

##### GQL

```graphql
mutation subscriptionBillingCycleEditsDelete($contractId: ID!) {
  subscriptionBillingCycleEditsDelete(contractId: $contractId, targetSelection: ALL) {
    billingCycles {
      cycleStartAt
      cycleEndAt
      cycleIndex
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
"query": "mutation subscriptionBillingCycleEditsDelete($contractId: ID!) { subscriptionBillingCycleEditsDelete(contractId: $contractId, targetSelection: ALL) { billingCycles { cycleStartAt cycleEndAt cycleIndex } userErrors { field message } } }",
 "variables": {
    "contractId": "gid://shopify/SubscriptionContract/398475269"
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
  mutation subscriptionBillingCycleEditsDelete($contractId: ID!) {
    subscriptionBillingCycleEditsDelete(contractId: $contractId, targetSelection: ALL) {
      billingCycles {
        cycleStartAt
        cycleEndAt
        cycleIndex
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "contractId": "gid://shopify/SubscriptionContract/398475269"
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
    "query": `mutation subscriptionBillingCycleEditsDelete($contractId: ID!) {
      subscriptionBillingCycleEditsDelete(contractId: $contractId, targetSelection: ALL) {
        billingCycles {
          cycleStartAt
          cycleEndAt
          cycleIndex
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "contractId": "gid://shopify/SubscriptionContract/398475269"
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
  mutation subscriptionBillingCycleEditsDelete($contractId: ID!) {
    subscriptionBillingCycleEditsDelete(contractId: $contractId, targetSelection: ALL) {
      billingCycles {
        cycleStartAt
        cycleEndAt
        cycleIndex
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "contractId": "gid://shopify/SubscriptionContract/398475269"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "contractId": "gid://shopify/SubscriptionContract/398475269"
}
```

## Response

JSON

```json
{
  "subscriptionBillingCycleEditsDelete": {
    "billingCycles": [
      {
        "cycleStartAt": "2021-12-15T15:33:01Z",
        "cycleEndAt": "2022-01-01T12:00:00Z",
        "cycleIndex": 1
      }
    ],
    "userErrors": []
  }
}
```
