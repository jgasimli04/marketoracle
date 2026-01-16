---
title: flowTriggerReceive - GraphQL Admin
description: >-
  Triggers any workflows that begin with the trigger specified in the request
  body. To learn more, refer to [_Create Shopify Flow
  triggers_](https://shopify.dev/apps/flow/triggers).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowTriggerReceive
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowTriggerReceive.md
---

# flow​Trigger​Receive

mutation

Triggers any workflows that begin with the trigger specified in the request body. To learn more, refer to [*Create Shopify Flow triggers*](https://shopify.dev/apps/flow/triggers).

## Arguments

* handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The handle of the trigger.

* payload

  [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

  The payload needed to run the Trigger.

* body

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

***

## Flow​Trigger​Receive​Payload returns

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Trigger workflows defined in Shopify Flow

  #### Description

  Triggers any workflow that uses the trigger specified in the payload.

  #### Query

  ```graphql
  mutation flowTriggerReceive($handle: String, $payload: JSON) {
    flowTriggerReceive(handle: $handle, payload: $payload) {
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
    "handle": "handle",
    "payload": {
      "key": "Some value"
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation flowTriggerReceive($handle: String, $payload: JSON) { flowTriggerReceive(handle: $handle, payload: $payload) { userErrors { field message } } }",
   "variables": {
      "handle": "handle",
      "payload": {
        "key": "Some value"
      }
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
    mutation flowTriggerReceive($handle: String, $payload: JSON) {
      flowTriggerReceive(handle: $handle, payload: $payload) {
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "handle": "handle",
          "payload": {
              "key": "Some value"
          }
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
    mutation flowTriggerReceive($handle: String, $payload: JSON) {
      flowTriggerReceive(handle: $handle, payload: $payload) {
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "handle": "handle",
    "payload": {
      "key": "Some value"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation flowTriggerReceive($handle: String, $payload: JSON) {
        flowTriggerReceive(handle: $handle, payload: $payload) {
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "handle": "handle",
          "payload": {
              "key": "Some value"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "flowTriggerReceive": {
      "userErrors": []
    }
  }
  ```

* ### flowTriggerReceive reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20flowTriggerReceive\(%24handle%3A%20String%2C%20%24payload%3A%20JSON\)%20%7B%0A%20%20flowTriggerReceive\(handle%3A%20%24handle%2C%20payload%3A%20%24payload\)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22handle%22%3A%20%22handle%22%2C%0A%20%20%22payload%22%3A%20%7B%0A%20%20%20%20%22key%22%3A%20%22Some%20value%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation flowTriggerReceive($handle: String, $payload: JSON) {
  flowTriggerReceive(handle: $handle, payload: $payload) {
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
"query": "mutation flowTriggerReceive($handle: String, $payload: JSON) { flowTriggerReceive(handle: $handle, payload: $payload) { userErrors { field message } } }",
 "variables": {
    "handle": "handle",
    "payload": {
      "key": "Some value"
    }
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
  mutation flowTriggerReceive($handle: String, $payload: JSON) {
    flowTriggerReceive(handle: $handle, payload: $payload) {
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "handle": "handle",
        "payload": {
            "key": "Some value"
        }
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
    "query": `mutation flowTriggerReceive($handle: String, $payload: JSON) {
      flowTriggerReceive(handle: $handle, payload: $payload) {
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "handle": "handle",
        "payload": {
            "key": "Some value"
        }
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
  mutation flowTriggerReceive($handle: String, $payload: JSON) {
    flowTriggerReceive(handle: $handle, payload: $payload) {
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "handle": "handle",
  "payload": {
    "key": "Some value"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "handle": "handle",
  "payload": {
    "key": "Some value"
  }
}
```

## Response

JSON

```json
{
  "flowTriggerReceive": {
    "userErrors": []
  }
}
```
