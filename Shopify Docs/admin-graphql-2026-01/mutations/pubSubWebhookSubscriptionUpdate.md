---
title: pubSubWebhookSubscriptionUpdate - GraphQL Admin
description: >-
  Updates a Google Cloud Pub/Sub webhook subscription.


  Building an app? If you only use app-specific webhooks, you won't need this.
  App-specific webhook subscriptions specified in your `shopify.app.toml` may be
  easier. They are automatically kept up to date by Shopify & require less
  maintenance. Please read [About managing webhook
  subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubWebhookSubscriptionUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubWebhookSubscriptionUpdate.md
---

# pub​Sub​Webhook​Subscription​Update

mutation

Deprecated. Use [webhookSubscriptionUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionUpdate) instead.

Updates a Google Cloud Pub/Sub webhook subscription.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the webhook subscription to update.

* webhook​Subscription

  [Pub​Sub​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput)

  required

  Specifies the input fields for a Google Cloud Pub/Sub webhook subscription.

***

## Pub​Sub​Webhook​Subscription​Update​Payload returns

* user​Errors

  [\[Pub​Sub​Webhook​Subscription​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PubSubWebhookSubscriptionUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* webhook​Subscription

  [Webhook​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

  The webhook subscription that was updated.

***

## Examples

* ### Update a webhook subscription from HTTP to Google Pub/Sub

  #### Query

  ```graphql
  mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
      userErrors {
        field
        message
      }
      webhookSubscription {
        id
        topic
        endpoint {
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
          }
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/WebhookSubscription/525699895",
    "webhookSubscription": {
      "pubSubProject": "a-gcp-project",
      "pubSubTopic": "a-pubsub-topic",
      "format": "JSON"
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
  "query": "mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) { pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) { userErrors { field message } webhookSubscription { id topic endpoint { ... on WebhookPubSubEndpoint { pubSubProject pubSubTopic } } } } }",
   "variables": {
      "id": "gid://shopify/WebhookSubscription/525699895",
      "webhookSubscription": {
        "pubSubProject": "a-gcp-project",
        "pubSubTopic": "a-pubsub-topic",
        "format": "JSON"
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
    mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
      pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
        userErrors {
          field
          message
        }
        webhookSubscription {
          id
          topic
          endpoint {
            ... on WebhookPubSubEndpoint {
              pubSubProject
              pubSubTopic
            }
          }
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/WebhookSubscription/525699895",
          "webhookSubscription": {
              "pubSubProject": "a-gcp-project",
              "pubSubTopic": "a-pubsub-topic",
              "format": "JSON"
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
    mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
      pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
        userErrors {
          field
          message
        }
        webhookSubscription {
          id
          topic
          endpoint {
            ... on WebhookPubSubEndpoint {
              pubSubProject
              pubSubTopic
            }
          }
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/WebhookSubscription/525699895",
    "webhookSubscription": {
      "pubSubProject": "a-gcp-project",
      "pubSubTopic": "a-pubsub-topic",
      "format": "JSON"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
        pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
          userErrors {
            field
            message
          }
          webhookSubscription {
            id
            topic
            endpoint {
              ... on WebhookPubSubEndpoint {
                pubSubProject
                pubSubTopic
              }
            }
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/WebhookSubscription/525699895",
          "webhookSubscription": {
              "pubSubProject": "a-gcp-project",
              "pubSubTopic": "a-pubsub-topic",
              "format": "JSON"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "pubSubWebhookSubscriptionUpdate": {
      "userErrors": [],
      "webhookSubscription": {
        "id": "gid://shopify/WebhookSubscription/525699895",
        "topic": "ORDERS_CREATE",
        "endpoint": {
          "pubSubProject": "a-gcp-project",
          "pubSubTopic": "a-pubsub-topic"
        }
      }
    }
  }
  ```

* ### pubSubWebhookSubscriptionUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20pubSubWebhookSubscriptionUpdate\(%24id%3A%20ID!%2C%20%24webhookSubscription%3A%20PubSubWebhookSubscriptionInput!\)%20%7B%0A%20%20pubSubWebhookSubscriptionUpdate\(id%3A%20%24id%2C%20webhookSubscription%3A%20%24webhookSubscription\)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20webhookSubscription%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20topic%0A%20%20%20%20%20%20endpoint%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20WebhookPubSubEndpoint%20%7B%0A%20%20%20%20%20%20%20%20%20%20pubSubProject%0A%20%20%20%20%20%20%20%20%20%20pubSubTopic%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FWebhookSubscription%2F525699895%22%2C%0A%20%20%22webhookSubscription%22%3A%20%7B%0A%20%20%20%20%22pubSubProject%22%3A%20%22a-gcp-project%22%2C%0A%20%20%20%20%22pubSubTopic%22%3A%20%22a-pubsub-topic%22%2C%0A%20%20%20%20%22format%22%3A%20%22JSON%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
  pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
    userErrors {
      field
      message
    }
    webhookSubscription {
      id
      topic
      endpoint {
        ... on WebhookPubSubEndpoint {
          pubSubProject
          pubSubTopic
        }
      }
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
"query": "mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) { pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) { userErrors { field message } webhookSubscription { id topic endpoint { ... on WebhookPubSubEndpoint { pubSubProject pubSubTopic } } } } }",
 "variables": {
    "id": "gid://shopify/WebhookSubscription/525699895",
    "webhookSubscription": {
      "pubSubProject": "a-gcp-project",
      "pubSubTopic": "a-pubsub-topic",
      "format": "JSON"
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
  mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
      userErrors {
        field
        message
      }
      webhookSubscription {
        id
        topic
        endpoint {
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/WebhookSubscription/525699895",
        "webhookSubscription": {
            "pubSubProject": "a-gcp-project",
            "pubSubTopic": "a-pubsub-topic",
            "format": "JSON"
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
    "query": `mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
      pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
        userErrors {
          field
          message
        }
        webhookSubscription {
          id
          topic
          endpoint {
            ... on WebhookPubSubEndpoint {
              pubSubProject
              pubSubTopic
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/WebhookSubscription/525699895",
        "webhookSubscription": {
            "pubSubProject": "a-gcp-project",
            "pubSubTopic": "a-pubsub-topic",
            "format": "JSON"
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
  mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
      userErrors {
        field
        message
      }
      webhookSubscription {
        id
        topic
        endpoint {
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/WebhookSubscription/525699895",
  "webhookSubscription": {
    "pubSubProject": "a-gcp-project",
    "pubSubTopic": "a-pubsub-topic",
    "format": "JSON"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/WebhookSubscription/525699895",
  "webhookSubscription": {
    "pubSubProject": "a-gcp-project",
    "pubSubTopic": "a-pubsub-topic",
    "format": "JSON"
  }
}
```

## Response

JSON

```json
{
  "pubSubWebhookSubscriptionUpdate": {
    "userErrors": [],
    "webhookSubscription": {
      "id": "gid://shopify/WebhookSubscription/525699895",
      "topic": "ORDERS_CREATE",
      "endpoint": {
        "pubSubProject": "a-gcp-project",
        "pubSubTopic": "a-pubsub-topic"
      }
    }
  }
}
```
