---
title: marketingActivityUpdateExternal - GraphQL Admin
description: Update an external marketing activity.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdateExternal
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdateExternal.md
---

# marketing​Activity​Update​External

mutation

Requires `write_marketing_events` access scope.

Update an external marketing activity.

## Arguments

* input

  [Marketing​Activity​Update​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput)

  required

  The input field for updating an external marketing activity.

* marketing​Activity​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the marketing activity. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

* remote​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

* utm

  [UTMInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UTMInput)

  Specifies the [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters) that are associated with a related marketing campaign. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

***

## Marketing​Activity​Update​External​Payload returns

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  The updated marketing activity.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Update an external marketing activity and its status

  #### Description

  Starting from API version 2024-01, the status field for creating an external marketing activity will be an optional, modifiable field.

  #### Query

  ```graphql
  mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
    marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
      marketingActivity {
        id
        title
        marketingEvent {
          manageUrl
          previewUrl
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "remoteId": "abcdefg",
    "updateInput": {
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com",
      "status": "PAUSED"
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
  "query": "mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) { marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) { marketingActivity { id title marketingEvent { manageUrl previewUrl } } } }",
   "variables": {
      "remoteId": "abcdefg",
      "updateInput": {
        "title": "New Title",
        "remoteUrl": "https://example.com",
        "remotePreviewImageUrl": "https://example.com",
        "status": "PAUSED"
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
    mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
      marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
        marketingActivity {
          id
          title
          marketingEvent {
            manageUrl
            previewUrl
          }
        }
      }
    }`,
    {
      variables: {
          "remoteId": "abcdefg",
          "updateInput": {
              "title": "New Title",
              "remoteUrl": "https://example.com",
              "remotePreviewImageUrl": "https://example.com",
              "status": "PAUSED"
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
    mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
      marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
        marketingActivity {
          id
          title
          marketingEvent {
            manageUrl
            previewUrl
          }
        }
      }
    }
  QUERY

  variables = {
    "remoteId": "abcdefg",
    "updateInput": {
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com",
      "status": "PAUSED"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
        marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
          marketingActivity {
            id
            title
            marketingEvent {
              manageUrl
              previewUrl
            }
          }
        }
      }`,
      "variables": {
          "remoteId": "abcdefg",
          "updateInput": {
              "title": "New Title",
              "remoteUrl": "https://example.com",
              "remotePreviewImageUrl": "https://example.com",
              "status": "PAUSED"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "marketingActivityUpdateExternal": {
      "marketingActivity": {
        "id": "gid://shopify/MarketingActivity/36187062",
        "title": "New Title",
        "marketingEvent": {
          "manageUrl": "https://example.com",
          "previewUrl": "https://example.com"
        }
      }
    }
  }
  ```

* ### Update an external marketing activity using the remote id

  #### Query

  ```graphql
  mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
    marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
      marketingActivity {
        id
        title
        marketingEvent {
          manageUrl
          previewUrl
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "remoteId": "abcdefg",
    "updateInput": {
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com"
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
  "query": "mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) { marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) { marketingActivity { id title marketingEvent { manageUrl previewUrl } } } }",
   "variables": {
      "remoteId": "abcdefg",
      "updateInput": {
        "title": "New Title",
        "remoteUrl": "https://example.com",
        "remotePreviewImageUrl": "https://example.com"
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
    mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
      marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
        marketingActivity {
          id
          title
          marketingEvent {
            manageUrl
            previewUrl
          }
        }
      }
    }`,
    {
      variables: {
          "remoteId": "abcdefg",
          "updateInput": {
              "title": "New Title",
              "remoteUrl": "https://example.com",
              "remotePreviewImageUrl": "https://example.com"
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
    mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
      marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
        marketingActivity {
          id
          title
          marketingEvent {
            manageUrl
            previewUrl
          }
        }
      }
    }
  QUERY

  variables = {
    "remoteId": "abcdefg",
    "updateInput": {
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
        marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
          marketingActivity {
            id
            title
            marketingEvent {
              manageUrl
              previewUrl
            }
          }
        }
      }`,
      "variables": {
          "remoteId": "abcdefg",
          "updateInput": {
              "title": "New Title",
              "remoteUrl": "https://example.com",
              "remotePreviewImageUrl": "https://example.com"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "marketingActivityUpdateExternal": {
      "marketingActivity": {
        "id": "gid://shopify/MarketingActivity/36187062",
        "title": "New Title",
        "marketingEvent": {
          "manageUrl": "https://example.com",
          "previewUrl": "https://example.com"
        }
      }
    }
  }
  ```

* ### Update an external marketing activity using the utm parameters

  #### Query

  ```graphql
  mutation marketingActivityUpdateExternal($utm: UTMInput!, $updateInput: MarketingActivityUpdateExternalInput!) {
    marketingActivityUpdateExternal(utm: $utm, input: $updateInput) {
      marketingActivity {
        id
        title
        marketingEvent {
          manageUrl
          previewUrl
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "utm": {
      "source": "email",
      "medium": "newsletter",
      "campaign": "external-event-campaign"
    },
    "updateInput": {
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com"
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
  "query": "mutation marketingActivityUpdateExternal($utm: UTMInput!, $updateInput: MarketingActivityUpdateExternalInput!) { marketingActivityUpdateExternal(utm: $utm, input: $updateInput) { marketingActivity { id title marketingEvent { manageUrl previewUrl } } } }",
   "variables": {
      "utm": {
        "source": "email",
        "medium": "newsletter",
        "campaign": "external-event-campaign"
      },
      "updateInput": {
        "title": "New Title",
        "remoteUrl": "https://example.com",
        "remotePreviewImageUrl": "https://example.com"
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
    mutation marketingActivityUpdateExternal($utm: UTMInput!, $updateInput: MarketingActivityUpdateExternalInput!) {
      marketingActivityUpdateExternal(utm: $utm, input: $updateInput) {
        marketingActivity {
          id
          title
          marketingEvent {
            manageUrl
            previewUrl
          }
        }
      }
    }`,
    {
      variables: {
          "utm": {
              "source": "email",
              "medium": "newsletter",
              "campaign": "external-event-campaign"
          },
          "updateInput": {
              "title": "New Title",
              "remoteUrl": "https://example.com",
              "remotePreviewImageUrl": "https://example.com"
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
    mutation marketingActivityUpdateExternal($utm: UTMInput!, $updateInput: MarketingActivityUpdateExternalInput!) {
      marketingActivityUpdateExternal(utm: $utm, input: $updateInput) {
        marketingActivity {
          id
          title
          marketingEvent {
            manageUrl
            previewUrl
          }
        }
      }
    }
  QUERY

  variables = {
    "utm": {
      "source": "email",
      "medium": "newsletter",
      "campaign": "external-event-campaign"
    },
    "updateInput": {
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation marketingActivityUpdateExternal($utm: UTMInput!, $updateInput: MarketingActivityUpdateExternalInput!) {
        marketingActivityUpdateExternal(utm: $utm, input: $updateInput) {
          marketingActivity {
            id
            title
            marketingEvent {
              manageUrl
              previewUrl
            }
          }
        }
      }`,
      "variables": {
          "utm": {
              "source": "email",
              "medium": "newsletter",
              "campaign": "external-event-campaign"
          },
          "updateInput": {
              "title": "New Title",
              "remoteUrl": "https://example.com",
              "remotePreviewImageUrl": "https://example.com"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "marketingActivityUpdateExternal": {
      "marketingActivity": {
        "id": "gid://shopify/MarketingActivity/36187062",
        "title": "New Title",
        "marketingEvent": {
          "manageUrl": "https://example.com",
          "previewUrl": "https://example.com"
        }
      }
    }
  }
  ```

* ### Updates a marketing event

  #### Query

  ```graphql
  mutation marketingActivityUpdateExternal($marketingActivityId: ID!, $updateInput: MarketingActivityUpdateExternalInput!) {
    marketingActivityUpdateExternal(marketingActivityId: $marketingActivityId, input: $updateInput) {
      marketingActivity {
        id
        title
        marketingEvent {
          manageUrl
          previewUrl
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "marketingActivityId": "gid://shopify/MarketingActivity/36187062",
    "updateInput": {
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com"
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
  "query": "mutation marketingActivityUpdateExternal($marketingActivityId: ID!, $updateInput: MarketingActivityUpdateExternalInput!) { marketingActivityUpdateExternal(marketingActivityId: $marketingActivityId, input: $updateInput) { marketingActivity { id title marketingEvent { manageUrl previewUrl } } } }",
   "variables": {
      "marketingActivityId": "gid://shopify/MarketingActivity/36187062",
      "updateInput": {
        "title": "New Title",
        "remoteUrl": "https://example.com",
        "remotePreviewImageUrl": "https://example.com"
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
    mutation marketingActivityUpdateExternal($marketingActivityId: ID!, $updateInput: MarketingActivityUpdateExternalInput!) {
      marketingActivityUpdateExternal(marketingActivityId: $marketingActivityId, input: $updateInput) {
        marketingActivity {
          id
          title
          marketingEvent {
            manageUrl
            previewUrl
          }
        }
      }
    }`,
    {
      variables: {
          "marketingActivityId": "gid://shopify/MarketingActivity/36187062",
          "updateInput": {
              "title": "New Title",
              "remoteUrl": "https://example.com",
              "remotePreviewImageUrl": "https://example.com"
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
    mutation marketingActivityUpdateExternal($marketingActivityId: ID!, $updateInput: MarketingActivityUpdateExternalInput!) {
      marketingActivityUpdateExternal(marketingActivityId: $marketingActivityId, input: $updateInput) {
        marketingActivity {
          id
          title
          marketingEvent {
            manageUrl
            previewUrl
          }
        }
      }
    }
  QUERY

  variables = {
    "marketingActivityId": "gid://shopify/MarketingActivity/36187062",
    "updateInput": {
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation marketingActivityUpdateExternal($marketingActivityId: ID!, $updateInput: MarketingActivityUpdateExternalInput!) {
        marketingActivityUpdateExternal(marketingActivityId: $marketingActivityId, input: $updateInput) {
          marketingActivity {
            id
            title
            marketingEvent {
              manageUrl
              previewUrl
            }
          }
        }
      }`,
      "variables": {
          "marketingActivityId": "gid://shopify/MarketingActivity/36187062",
          "updateInput": {
              "title": "New Title",
              "remoteUrl": "https://example.com",
              "remotePreviewImageUrl": "https://example.com"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "marketingActivityUpdateExternal": {
      "marketingActivity": {
        "id": "gid://shopify/MarketingActivity/36187062",
        "title": "New Title",
        "marketingEvent": {
          "manageUrl": "https://example.com",
          "previewUrl": "https://example.com"
        }
      }
    }
  }
  ```

* ### marketingActivityUpdateExternal reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20marketingActivityUpdateExternal\(%24remoteId%3A%20String!%2C%20%24updateInput%3A%20MarketingActivityUpdateExternalInput!\)%20%7B%0A%20%20marketingActivityUpdateExternal\(remoteId%3A%20%24remoteId%2C%20input%3A%20%24updateInput\)%20%7B%0A%20%20%20%20marketingActivity%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20marketingEvent%20%7B%0A%20%20%20%20%20%20%20%20manageUrl%0A%20%20%20%20%20%20%20%20previewUrl%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22remoteId%22%3A%20%22abcdefg%22%2C%0A%20%20%22updateInput%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22New%20Title%22%2C%0A%20%20%20%20%22remoteUrl%22%3A%20%22https%3A%2F%2Fexample.com%22%2C%0A%20%20%20%20%22remotePreviewImageUrl%22%3A%20%22https%3A%2F%2Fexample.com%22%2C%0A%20%20%20%20%22status%22%3A%20%22PAUSED%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
  marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
    marketingActivity {
      id
      title
      marketingEvent {
        manageUrl
        previewUrl
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
"query": "mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) { marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) { marketingActivity { id title marketingEvent { manageUrl previewUrl } } } }",
 "variables": {
    "remoteId": "abcdefg",
    "updateInput": {
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com",
      "status": "PAUSED"
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
  mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
    marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
      marketingActivity {
        id
        title
        marketingEvent {
          manageUrl
          previewUrl
        }
      }
    }
  }`,
  {
    variables: {
        "remoteId": "abcdefg",
        "updateInput": {
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com",
            "status": "PAUSED"
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
    "query": `mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
      marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
        marketingActivity {
          id
          title
          marketingEvent {
            manageUrl
            previewUrl
          }
        }
      }
    }`,
    "variables": {
        "remoteId": "abcdefg",
        "updateInput": {
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com",
            "status": "PAUSED"
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
  mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
    marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
      marketingActivity {
        id
        title
        marketingEvent {
          manageUrl
          previewUrl
        }
      }
    }
  }
QUERY

variables = {
  "remoteId": "abcdefg",
  "updateInput": {
    "title": "New Title",
    "remoteUrl": "https://example.com",
    "remotePreviewImageUrl": "https://example.com",
    "status": "PAUSED"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "remoteId": "abcdefg",
  "updateInput": {
    "title": "New Title",
    "remoteUrl": "https://example.com",
    "remotePreviewImageUrl": "https://example.com",
    "status": "PAUSED"
  }
}
```

## Response

JSON

```json
{
  "marketingActivityUpdateExternal": {
    "marketingActivity": {
      "id": "gid://shopify/MarketingActivity/36187062",
      "title": "New Title",
      "marketingEvent": {
        "manageUrl": "https://example.com",
        "previewUrl": "https://example.com"
      }
    }
  }
}
```
