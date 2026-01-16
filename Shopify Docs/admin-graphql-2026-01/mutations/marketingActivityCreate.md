---
title: marketingActivityCreate - GraphQL Admin
description: >-
  Create new marketing activity. Marketing activity app extensions are
  deprecated and will be removed in the near future.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreate.md
---

# marketing​Activity​Create

mutation

Requires `write_marketing_events` access scope.

Create new marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

## Arguments

* input

  [Marketing​Activity​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateInput)

  required

  The Input of marketing activity create.

***

## Marketing​Activity​Create​Payload returns

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

### Deprecated marketingactivitycreatepayload returns

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  Deprecated

  The created marketing activity.

* redirect​Path

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

  The path to return back to shopify admin from embedded editor.

***

## Examples

* ### Create a DRAFT marketing activity for a specific marketing activity extension

  #### Query

  ```graphql
  mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {
    marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {
      marketingActivity {
        id
        title
        status
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "marketingActivityTitle": "Draft Marketing Activity",
    "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
    "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
    "status": "DRAFT"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) { marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) { marketingActivity { id title status } } }",
   "variables": {
      "marketingActivityTitle": "Draft Marketing Activity",
      "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
      "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
      "status": "DRAFT"
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
    mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {
      marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {
        marketingActivity {
          id
          title
          status
        }
      }
    }`,
    {
      variables: {
          "marketingActivityTitle": "Draft Marketing Activity",
          "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
          "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
          "status": "DRAFT"
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
    mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {
      marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {
        marketingActivity {
          id
          title
          status
        }
      }
    }
  QUERY

  variables = {
    "marketingActivityTitle": "Draft Marketing Activity",
    "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
    "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
    "status": "DRAFT"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {
        marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {
          marketingActivity {
            id
            title
            status
          }
        }
      }`,
      "variables": {
          "marketingActivityTitle": "Draft Marketing Activity",
          "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
          "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
          "status": "DRAFT"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "marketingActivityCreate": {
      "marketingActivity": {
        "id": "gid://shopify/MarketingActivity/1063897335",
        "title": "Draft Marketing Activity",
        "status": "DRAFT"
      }
    }
  }
  ```

* ### marketingActivityCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20marketingActivityCreate\(%24marketingActivityTitle%3A%20String!%2C%20%24marketingActivityExtensionId%3A%20ID!%2C%20%24context%3A%20String!%2C%20%24status%3A%20MarketingActivityStatus!\)%20%7B%0A%20%20marketingActivityCreate\(input%3A%20%7BmarketingActivityTitle%3A%20%24marketingActivityTitle%2C%20marketingActivityExtensionId%3A%20%24marketingActivityExtensionId%2C%20status%3A%20%24status%2C%20context%3A%20%24context%7D\)%20%7B%0A%20%20%20%20marketingActivity%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20status%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22marketingActivityTitle%22%3A%20%22Draft%20Marketing%20Activity%22%2C%0A%20%20%22marketingActivityExtensionId%22%3A%20%22gid%3A%2F%2Fshopify%2FMarketingActivityExtension%2F666dcce8-6389-425f-bcf0-6c9469b6716f%22%2C%0A%20%20%22context%22%3A%20%22eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ%3D%3D%22%2C%0A%20%20%22status%22%3A%20%22DRAFT%22%0A%7D)

##### GQL

```graphql
mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {
  marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {
    marketingActivity {
      id
      title
      status
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
"query": "mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) { marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) { marketingActivity { id title status } } }",
 "variables": {
    "marketingActivityTitle": "Draft Marketing Activity",
    "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
    "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
    "status": "DRAFT"
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
  mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {
    marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {
      marketingActivity {
        id
        title
        status
      }
    }
  }`,
  {
    variables: {
        "marketingActivityTitle": "Draft Marketing Activity",
        "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
        "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
        "status": "DRAFT"
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
    "query": `mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {
      marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {
        marketingActivity {
          id
          title
          status
        }
      }
    }`,
    "variables": {
        "marketingActivityTitle": "Draft Marketing Activity",
        "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
        "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
        "status": "DRAFT"
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
  mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {
    marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {
      marketingActivity {
        id
        title
        status
      }
    }
  }
QUERY

variables = {
  "marketingActivityTitle": "Draft Marketing Activity",
  "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
  "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
  "status": "DRAFT"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "marketingActivityTitle": "Draft Marketing Activity",
  "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
  "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
  "status": "DRAFT"
}
```

## Response

JSON

```json
{
  "marketingActivityCreate": {
    "marketingActivity": {
      "id": "gid://shopify/MarketingActivity/1063897335",
      "title": "Draft Marketing Activity",
      "status": "DRAFT"
    }
  }
}
```
