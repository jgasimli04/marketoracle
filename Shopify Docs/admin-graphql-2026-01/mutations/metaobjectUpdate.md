---
title: metaobjectUpdate - GraphQL Admin
description: >-
  Updates a
  [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)
  with new field values, handle, or capabilities.
  [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects)
  are custom data structures that extend Shopify's data model.


  You can modify field values mapped to the metaobject's
  [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition),
  update the handle for a unique identifier, and adjust capabilities like
  publishing status. When updating the handle, you can optionally create a
  redirect from the old handle to maintain existing references.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpdate'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpdate.md
---

# metaobject​Update

mutation

Requires `write_metaobjects` access scope.

Updates a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) with new field values, handle, or capabilities. [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects) are custom data structures that extend Shopify's data model.

You can modify field values mapped to the metaobject's [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition), update the handle for a unique identifier, and adjust capabilities like publishing status. When updating the handle, you can optionally create a redirect from the old handle to maintain existing references.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the metaobject to update.

* metaobject

  [Metaobject​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectUpdateInput)

  required

  Specifies parameters to update on the metaobject.

***

## Metaobject​Update​Payload returns

* metaobject

  [Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  The updated metaobject.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Update a metaobject

  #### Description

  To update an existing metaobject, you can use the \`metaobjectUpdate\` mutation with the \`id\` and \`metaobject\` arguments. The following example updates the \`season\` field to be \`winter\` for the \`fall-2021\` "LookBook" metaobject.

  #### Query

  ```graphql
  mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
    metaobjectUpdate(id: $id, metaobject: $metaobject) {
      metaobject {
        handle
        season: field(key: "season") {
          value
        }
      }
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
    "id": "gid://shopify/Metaobject/515107504",
    "metaobject": {
      "fields": [
        {
          "key": "season",
          "value": "winter"
        }
      ]
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
  "query": "mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) { metaobjectUpdate(id: $id, metaobject: $metaobject) { metaobject { handle season: field(key: \"season\") { value } } userErrors { field message code } } }",
   "variables": {
      "id": "gid://shopify/Metaobject/515107504",
      "metaobject": {
        "fields": [
          {
            "key": "season",
            "value": "winter"
          }
        ]
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
    mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
      metaobjectUpdate(id: $id, metaobject: $metaobject) {
        metaobject {
          handle
          season: field(key: "season") {
            value
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Metaobject/515107504",
          "metaobject": {
              "fields": [
                  {
                      "key": "season",
                      "value": "winter"
                  }
              ]
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
    mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
      metaobjectUpdate(id: $id, metaobject: $metaobject) {
        metaobject {
          handle
          season: field(key: "season") {
            value
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Metaobject/515107504",
    "metaobject": {
      "fields": [
        {
          "key": "season",
          "value": "winter"
        }
      ]
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
        metaobjectUpdate(id: $id, metaobject: $metaobject) {
          metaobject {
            handle
            season: field(key: "season") {
              value
            }
          }
          userErrors {
            field
            message
            code
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Metaobject/515107504",
          "metaobject": {
              "fields": [
                  {
                      "key": "season",
                      "value": "winter"
                  }
              ]
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "metaobjectUpdate": {
      "metaobject": {
        "handle": "fall-2021",
        "season": {
          "value": "winter"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### metaobjectUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20UpdateMetaobject\(%24id%3A%20ID!%2C%20%24metaobject%3A%20MetaobjectUpdateInput!\)%20%7B%0A%20%20metaobjectUpdate\(id%3A%20%24id%2C%20metaobject%3A%20%24metaobject\)%20%7B%0A%20%20%20%20metaobject%20%7B%0A%20%20%20%20%20%20handle%0A%20%20%20%20%20%20season%3A%20field\(key%3A%20%22season%22\)%20%7B%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMetaobject%2F515107504%22%2C%0A%20%20%22metaobject%22%3A%20%7B%0A%20%20%20%20%22fields%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22key%22%3A%20%22season%22%2C%0A%20%20%20%20%20%20%20%20%22value%22%3A%20%22winter%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
  metaobjectUpdate(id: $id, metaobject: $metaobject) {
    metaobject {
      handle
      season: field(key: "season") {
        value
      }
    }
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
"query": "mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) { metaobjectUpdate(id: $id, metaobject: $metaobject) { metaobject { handle season: field(key: \"season\") { value } } userErrors { field message code } } }",
 "variables": {
    "id": "gid://shopify/Metaobject/515107504",
    "metaobject": {
      "fields": [
        {
          "key": "season",
          "value": "winter"
        }
      ]
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
  mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
    metaobjectUpdate(id: $id, metaobject: $metaobject) {
      metaobject {
        handle
        season: field(key: "season") {
          value
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Metaobject/515107504",
        "metaobject": {
            "fields": [
                {
                    "key": "season",
                    "value": "winter"
                }
            ]
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
    "query": `mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
      metaobjectUpdate(id: $id, metaobject: $metaobject) {
        metaobject {
          handle
          season: field(key: "season") {
            value
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Metaobject/515107504",
        "metaobject": {
            "fields": [
                {
                    "key": "season",
                    "value": "winter"
                }
            ]
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
  mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
    metaobjectUpdate(id: $id, metaobject: $metaobject) {
      metaobject {
        handle
        season: field(key: "season") {
          value
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Metaobject/515107504",
  "metaobject": {
    "fields": [
      {
        "key": "season",
        "value": "winter"
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/Metaobject/515107504",
  "metaobject": {
    "fields": [
      {
        "key": "season",
        "value": "winter"
      }
    ]
  }
}
```

## Response

JSON

```json
{
  "metaobjectUpdate": {
    "metaobject": {
      "handle": "fall-2021",
      "season": {
        "value": "winter"
      }
    },
    "userErrors": []
  }
}
```
