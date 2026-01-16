---
title: metaobjectDelete - GraphQL Admin
description: Deletes the specified metaobject and its associated metafields.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDelete'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDelete.md
---

# metaobject​Delete

mutation

Requires `write_metaobjects` access scope.

Deletes the specified metaobject and its associated metafields.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the metaobject to delete.

***

## Metaobject​Delete​Payload returns

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted metaobject.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Deletes a metaobject

  #### Description

  Delete an existing metaobject using its ID.

  #### Query

  ```graphql
  mutation DeleteMetaobject($id: ID!) {
    metaobjectDelete(id: $id) {
      deletedId
      userErrors {
        field
        message
        code
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Metaobject/515107504"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation DeleteMetaobject($id: ID!) { metaobjectDelete(id: $id) { deletedId userErrors { field message code } } }",
   "variables": {
      "id": "gid://shopify/Metaobject/515107504"
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
    mutation DeleteMetaobject($id: ID!) {
      metaobjectDelete(id: $id) {
        deletedId
        userErrors {
          field
          message
          code
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Metaobject/515107504"
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
    mutation DeleteMetaobject($id: ID!) {
      metaobjectDelete(id: $id) {
        deletedId
        userErrors {
          field
          message
          code
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Metaobject/515107504"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation DeleteMetaobject($id: ID!) {
        metaobjectDelete(id: $id) {
          deletedId
          userErrors {
            field
            message
            code
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Metaobject/515107504"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "metaobjectDelete": {
      "deletedId": "gid://shopify/Metaobject/515107504",
      "userErrors": []
    }
  }
  ```

* ### metaobjectDelete reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20DeleteMetaobject\(%24id%3A%20ID!\)%20%7B%0A%20%20metaobjectDelete\(id%3A%20%24id\)%20%7B%0A%20%20%20%20deletedId%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMetaobject%2F515107504%22%0A%7D)

##### GQL

```graphql
mutation DeleteMetaobject($id: ID!) {
  metaobjectDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
      code
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
"query": "mutation DeleteMetaobject($id: ID!) { metaobjectDelete(id: $id) { deletedId userErrors { field message code } } }",
 "variables": {
    "id": "gid://shopify/Metaobject/515107504"
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
  mutation DeleteMetaobject($id: ID!) {
    metaobjectDelete(id: $id) {
      deletedId
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Metaobject/515107504"
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
    "query": `mutation DeleteMetaobject($id: ID!) {
      metaobjectDelete(id: $id) {
        deletedId
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Metaobject/515107504"
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
  mutation DeleteMetaobject($id: ID!) {
    metaobjectDelete(id: $id) {
      deletedId
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Metaobject/515107504"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/Metaobject/515107504"
}
```

## Response

JSON

```json
{
  "metaobjectDelete": {
    "deletedId": "gid://shopify/Metaobject/515107504",
    "userErrors": []
  }
}
```
