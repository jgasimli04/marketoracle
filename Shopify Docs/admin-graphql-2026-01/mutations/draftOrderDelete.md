---
title: draftOrderDelete - GraphQL Admin
description: Deletes a draft order.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDelete'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDelete.md
---

# draft​Order​Delete

mutation

Requires `write_draft_orders` access scope or `write_quick_sale` access scope. Also: The user must have access to delete draft orders.

Deletes a draft order.

## Arguments

* input

  [Draft​Order​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderDeleteInput)

  required

  Specify the draft order to delete by its ID.

***

## Draft​Order​Delete​Payload returns

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted draft order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Delete a draft order by ID and return the deleted ID

  #### Query

  ```graphql
  mutation draftOrderDelete($input: DraftOrderDeleteInput!) {
    draftOrderDelete(input: $input) {
      deletedId
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "id": "gid://shopify/DraftOrder/276395349"
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
  "query": "mutation draftOrderDelete($input: DraftOrderDeleteInput!) { draftOrderDelete(input: $input) { deletedId } }",
   "variables": {
      "input": {
        "id": "gid://shopify/DraftOrder/276395349"
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
    mutation draftOrderDelete($input: DraftOrderDeleteInput!) {
      draftOrderDelete(input: $input) {
        deletedId
      }
    }`,
    {
      variables: {
          "input": {
              "id": "gid://shopify/DraftOrder/276395349"
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
    mutation draftOrderDelete($input: DraftOrderDeleteInput!) {
      draftOrderDelete(input: $input) {
        deletedId
      }
    }
  QUERY

  variables = {
    "input": {
      "id": "gid://shopify/DraftOrder/276395349"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation draftOrderDelete($input: DraftOrderDeleteInput!) {
        draftOrderDelete(input: $input) {
          deletedId
        }
      }`,
      "variables": {
          "input": {
              "id": "gid://shopify/DraftOrder/276395349"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "draftOrderDelete": {
      "deletedId": "gid://shopify/DraftOrder/276395349"
    }
  }
  ```

* ### Deleting a draft order that doesn't exist returns an error

  #### Query

  ```graphql
  mutation draftOrderDelete($input: DraftOrderDeleteInput!) {
    draftOrderDelete(input: $input) {
      deletedId
      userErrors {
        message
        field
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "id": "gid://shopify/DraftOrder/1"
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
  "query": "mutation draftOrderDelete($input: DraftOrderDeleteInput!) { draftOrderDelete(input: $input) { deletedId userErrors { message field } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/DraftOrder/1"
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
    mutation draftOrderDelete($input: DraftOrderDeleteInput!) {
      draftOrderDelete(input: $input) {
        deletedId
        userErrors {
          message
          field
        }
      }
    }`,
    {
      variables: {
          "input": {
              "id": "gid://shopify/DraftOrder/1"
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
    mutation draftOrderDelete($input: DraftOrderDeleteInput!) {
      draftOrderDelete(input: $input) {
        deletedId
        userErrors {
          message
          field
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "id": "gid://shopify/DraftOrder/1"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation draftOrderDelete($input: DraftOrderDeleteInput!) {
        draftOrderDelete(input: $input) {
          deletedId
          userErrors {
            message
            field
          }
        }
      }`,
      "variables": {
          "input": {
              "id": "gid://shopify/DraftOrder/1"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "draftOrderDelete": {
      "deletedId": null,
      "userErrors": [
        {
          "message": "Draft order not found",
          "field": null
        }
      ]
    }
  }
  ```

* ### Remove an existing DraftOrder

  #### Query

  ```graphql
  mutation draftOrderDelete($input: DraftOrderDeleteInput!) {
    draftOrderDelete(input: $input) {
      deletedId
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
    "input": {
      "id": "gid://shopify/DraftOrder/276395349"
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
  "query": "mutation draftOrderDelete($input: DraftOrderDeleteInput!) { draftOrderDelete(input: $input) { deletedId userErrors { field message } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/DraftOrder/276395349"
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
    mutation draftOrderDelete($input: DraftOrderDeleteInput!) {
      draftOrderDelete(input: $input) {
        deletedId
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "input": {
              "id": "gid://shopify/DraftOrder/276395349"
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
    mutation draftOrderDelete($input: DraftOrderDeleteInput!) {
      draftOrderDelete(input: $input) {
        deletedId
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "id": "gid://shopify/DraftOrder/276395349"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation draftOrderDelete($input: DraftOrderDeleteInput!) {
        draftOrderDelete(input: $input) {
          deletedId
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "id": "gid://shopify/DraftOrder/276395349"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "draftOrderDelete": {
      "deletedId": "gid://shopify/DraftOrder/276395349",
      "userErrors": []
    }
  }
  ```

* ### draftOrderDelete reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20draftOrderDelete\(%24input%3A%20DraftOrderDeleteInput!\)%20%7B%0A%20%20draftOrderDelete\(input%3A%20%24input\)%20%7B%0A%20%20%20%20deletedId%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FDraftOrder%2F276395349%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation draftOrderDelete($input: DraftOrderDeleteInput!) {
  draftOrderDelete(input: $input) {
    deletedId
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
"query": "mutation draftOrderDelete($input: DraftOrderDeleteInput!) { draftOrderDelete(input: $input) { deletedId } }",
 "variables": {
    "input": {
      "id": "gid://shopify/DraftOrder/276395349"
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
  mutation draftOrderDelete($input: DraftOrderDeleteInput!) {
    draftOrderDelete(input: $input) {
      deletedId
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/DraftOrder/276395349"
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
    "query": `mutation draftOrderDelete($input: DraftOrderDeleteInput!) {
      draftOrderDelete(input: $input) {
        deletedId
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/DraftOrder/276395349"
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
  mutation draftOrderDelete($input: DraftOrderDeleteInput!) {
    draftOrderDelete(input: $input) {
      deletedId
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/DraftOrder/276395349"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "input": {
    "id": "gid://shopify/DraftOrder/276395349"
  }
}
```

## Response

JSON

```json
{
  "draftOrderDelete": {
    "deletedId": "gid://shopify/DraftOrder/276395349"
  }
}
```
