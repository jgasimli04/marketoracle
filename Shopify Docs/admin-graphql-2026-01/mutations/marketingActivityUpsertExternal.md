---
title: marketingActivityUpsertExternal - GraphQL Admin
description: >-
  Creates a new external marketing activity or updates an existing one. When
  optional fields are absent or null, associated information will be removed
  from an existing marketing activity.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpsertExternal
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpsertExternal.md
---

# marketing​Activity​Upsert​External

mutation

Requires `write_marketing_events` access scope.

Creates a new external marketing activity or updates an existing one. When optional fields are absent or null, associated information will be removed from an existing marketing activity.

## Arguments

* input

  [Marketing​Activity​Upsert​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput)

  required

  The input field for creating or updating an external marketing activity.

***

## Marketing​Activity​Upsert​External​Payload returns

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  The external marketing activity that was created or updated.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Upsert (create or update) an external marketing activity

  #### Query

  ```graphql
  mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
    marketingActivityUpsertExternal(input: $input) {
      marketingActivity {
        id
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "remoteId": "A unique identifier",
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "status": "ACTIVE",
      "utm": {
        "source": "email",
        "medium": "newsletter",
        "campaign": "external-campaign"
      },
      "tactic": "NEWSLETTER",
      "marketingChannelType": "EMAIL"
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
  "query": "mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) { marketingActivityUpsertExternal(input: $input) { marketingActivity { id } } }",
   "variables": {
      "input": {
        "remoteId": "A unique identifier",
        "title": "New Title",
        "remoteUrl": "https://example.com",
        "status": "ACTIVE",
        "utm": {
          "source": "email",
          "medium": "newsletter",
          "campaign": "external-campaign"
        },
        "tactic": "NEWSLETTER",
        "marketingChannelType": "EMAIL"
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
    mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
      marketingActivityUpsertExternal(input: $input) {
        marketingActivity {
          id
        }
      }
    }`,
    {
      variables: {
          "input": {
              "remoteId": "A unique identifier",
              "title": "New Title",
              "remoteUrl": "https://example.com",
              "status": "ACTIVE",
              "utm": {
                  "source": "email",
                  "medium": "newsletter",
                  "campaign": "external-campaign"
              },
              "tactic": "NEWSLETTER",
              "marketingChannelType": "EMAIL"
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
    mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
      marketingActivityUpsertExternal(input: $input) {
        marketingActivity {
          id
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "remoteId": "A unique identifier",
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "status": "ACTIVE",
      "utm": {
        "source": "email",
        "medium": "newsletter",
        "campaign": "external-campaign"
      },
      "tactic": "NEWSLETTER",
      "marketingChannelType": "EMAIL"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
        marketingActivityUpsertExternal(input: $input) {
          marketingActivity {
            id
          }
        }
      }`,
      "variables": {
          "input": {
              "remoteId": "A unique identifier",
              "title": "New Title",
              "remoteUrl": "https://example.com",
              "status": "ACTIVE",
              "utm": {
                  "source": "email",
                  "medium": "newsletter",
                  "campaign": "external-campaign"
              },
              "tactic": "NEWSLETTER",
              "marketingChannelType": "EMAIL"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "marketingActivityUpsertExternal": {
      "marketingActivity": {
        "id": "gid://shopify/MarketingActivity/1063897336"
      }
    }
  }
  ```

* ### marketingActivityUpsertExternal reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20marketingActivityUpsertExternal\(%24input%3A%20MarketingActivityUpsertExternalInput!\)%20%7B%0A%20%20marketingActivityUpsertExternal\(input%3A%20%24input\)%20%7B%0A%20%20%20%20marketingActivity%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22remoteId%22%3A%20%22A%20unique%20identifier%22%2C%0A%20%20%20%20%22title%22%3A%20%22New%20Title%22%2C%0A%20%20%20%20%22remoteUrl%22%3A%20%22https%3A%2F%2Fexample.com%22%2C%0A%20%20%20%20%22status%22%3A%20%22ACTIVE%22%2C%0A%20%20%20%20%22utm%22%3A%20%7B%0A%20%20%20%20%20%20%22source%22%3A%20%22email%22%2C%0A%20%20%20%20%20%20%22medium%22%3A%20%22newsletter%22%2C%0A%20%20%20%20%20%20%22campaign%22%3A%20%22external-campaign%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22tactic%22%3A%20%22NEWSLETTER%22%2C%0A%20%20%20%20%22marketingChannelType%22%3A%20%22EMAIL%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
  marketingActivityUpsertExternal(input: $input) {
    marketingActivity {
      id
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
"query": "mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) { marketingActivityUpsertExternal(input: $input) { marketingActivity { id } } }",
 "variables": {
    "input": {
      "remoteId": "A unique identifier",
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "status": "ACTIVE",
      "utm": {
        "source": "email",
        "medium": "newsletter",
        "campaign": "external-campaign"
      },
      "tactic": "NEWSLETTER",
      "marketingChannelType": "EMAIL"
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
  mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
    marketingActivityUpsertExternal(input: $input) {
      marketingActivity {
        id
      }
    }
  }`,
  {
    variables: {
        "input": {
            "remoteId": "A unique identifier",
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "status": "ACTIVE",
            "utm": {
                "source": "email",
                "medium": "newsletter",
                "campaign": "external-campaign"
            },
            "tactic": "NEWSLETTER",
            "marketingChannelType": "EMAIL"
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
    "query": `mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
      marketingActivityUpsertExternal(input: $input) {
        marketingActivity {
          id
        }
      }
    }`,
    "variables": {
        "input": {
            "remoteId": "A unique identifier",
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "status": "ACTIVE",
            "utm": {
                "source": "email",
                "medium": "newsletter",
                "campaign": "external-campaign"
            },
            "tactic": "NEWSLETTER",
            "marketingChannelType": "EMAIL"
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
  mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
    marketingActivityUpsertExternal(input: $input) {
      marketingActivity {
        id
      }
    }
  }
QUERY

variables = {
  "input": {
    "remoteId": "A unique identifier",
    "title": "New Title",
    "remoteUrl": "https://example.com",
    "status": "ACTIVE",
    "utm": {
      "source": "email",
      "medium": "newsletter",
      "campaign": "external-campaign"
    },
    "tactic": "NEWSLETTER",
    "marketingChannelType": "EMAIL"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "input": {
    "remoteId": "A unique identifier",
    "title": "New Title",
    "remoteUrl": "https://example.com",
    "status": "ACTIVE",
    "utm": {
      "source": "email",
      "medium": "newsletter",
      "campaign": "external-campaign"
    },
    "tactic": "NEWSLETTER",
    "marketingChannelType": "EMAIL"
  }
}
```

## Response

JSON

```json
{
  "marketingActivityUpsertExternal": {
    "marketingActivity": {
      "id": "gid://shopify/MarketingActivity/1063897336"
    }
  }
}
```
