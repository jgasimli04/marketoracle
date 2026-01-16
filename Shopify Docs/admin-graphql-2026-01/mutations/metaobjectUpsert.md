---
title: metaobjectUpsert - GraphQL Admin
description: >-
  Creates or updates a
  [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)
  based on its handle. If a metaobject with the specified handle exists, the
  mutation updates it with the provided field values. If no matching metaobject
  exists, the mutation creates a new one.


  The handle serves as a unique identifier within a metaobject type. Field
  values map to the
  [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)'s
  field keys and overwrite existing values during updates.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpsert'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpsert.md
---

# metaobject​Upsert

mutation

Requires `write_metaobjects` access scope.

Creates or updates a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) based on its handle. If a metaobject with the specified handle exists, the mutation updates it with the provided field values. If no matching metaobject exists, the mutation creates a new one.

The handle serves as a unique identifier within a metaobject type. Field values map to the [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)'s field keys and overwrite existing values during updates.

## Arguments

* handle

  [Metaobject​Handle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectHandleInput)

  required

  The identifier of the metaobject to upsert.

* metaobject

  [Metaobject​Upsert​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectUpsertInput)

  required

  The parameters to upsert the metaobject.

***

## Metaobject​Upsert​Payload returns

* metaobject

  [Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  The created or updated metaobject.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Upsert a metaobject

  #### Description

  To upsert a metaobject, you can use the \`metaobjectUpsert\` mutation with the \`handle\` and \`metaobject\` input arguments which will either create a new metaobject or update an existing one. The following example uses upsert to create a new "color" metaobject with the handle "indigo-swatch" since it does not already exist.

  #### Query

  ```graphql
  mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
    metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
      metaobject {
        handle
        hex: field(key: "hex") {
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
    "handle": {
      "type": "color",
      "handle": "indigo-swatch"
    },
    "metaobject": {
      "fields": [
        {
          "key": "hex",
          "value": "#4B0082"
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
  "query": "mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) { metaobjectUpsert(handle: $handle, metaobject: $metaobject) { metaobject { handle hex: field(key: \"hex\") { value } } userErrors { field message code } } }",
   "variables": {
      "handle": {
        "type": "color",
        "handle": "indigo-swatch"
      },
      "metaobject": {
        "fields": [
          {
            "key": "hex",
            "value": "#4B0082"
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
    mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
      metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
        metaobject {
          handle
          hex: field(key: "hex") {
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
          "handle": {
              "type": "color",
              "handle": "indigo-swatch"
          },
          "metaobject": {
              "fields": [
                  {
                      "key": "hex",
                      "value": "#4B0082"
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
    mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
      metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
        metaobject {
          handle
          hex: field(key: "hex") {
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
    "handle": {
      "type": "color",
      "handle": "indigo-swatch"
    },
    "metaobject": {
      "fields": [
        {
          "key": "hex",
          "value": "#4B0082"
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
      "query": `mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
        metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
          metaobject {
            handle
            hex: field(key: "hex") {
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
          "handle": {
              "type": "color",
              "handle": "indigo-swatch"
          },
          "metaobject": {
              "fields": [
                  {
                      "key": "hex",
                      "value": "#4B0082"
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
    "metaobjectUpsert": {
      "metaobject": {
        "handle": "indigo-swatch",
        "hex": {
          "value": "#4B0082"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### metaobjectUpsert reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20UpsertMetaobject\(%24handle%3A%20MetaobjectHandleInput!%2C%20%24metaobject%3A%20MetaobjectUpsertInput!\)%20%7B%0A%20%20metaobjectUpsert\(handle%3A%20%24handle%2C%20metaobject%3A%20%24metaobject\)%20%7B%0A%20%20%20%20metaobject%20%7B%0A%20%20%20%20%20%20handle%0A%20%20%20%20%20%20hex%3A%20field\(key%3A%20%22hex%22\)%20%7B%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22handle%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22color%22%2C%0A%20%20%20%20%22handle%22%3A%20%22indigo-swatch%22%0A%20%20%7D%2C%0A%20%20%22metaobject%22%3A%20%7B%0A%20%20%20%20%22fields%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22key%22%3A%20%22hex%22%2C%0A%20%20%20%20%20%20%20%20%22value%22%3A%20%22%234B0082%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
  metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
    metaobject {
      handle
      hex: field(key: "hex") {
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
"query": "mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) { metaobjectUpsert(handle: $handle, metaobject: $metaobject) { metaobject { handle hex: field(key: \"hex\") { value } } userErrors { field message code } } }",
 "variables": {
    "handle": {
      "type": "color",
      "handle": "indigo-swatch"
    },
    "metaobject": {
      "fields": [
        {
          "key": "hex",
          "value": "#4B0082"
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
  mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
    metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
      metaobject {
        handle
        hex: field(key: "hex") {
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
        "handle": {
            "type": "color",
            "handle": "indigo-swatch"
        },
        "metaobject": {
            "fields": [
                {
                    "key": "hex",
                    "value": "#4B0082"
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
    "query": `mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
      metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
        metaobject {
          handle
          hex: field(key: "hex") {
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
        "handle": {
            "type": "color",
            "handle": "indigo-swatch"
        },
        "metaobject": {
            "fields": [
                {
                    "key": "hex",
                    "value": "#4B0082"
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
  mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
    metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
      metaobject {
        handle
        hex: field(key: "hex") {
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
  "handle": {
    "type": "color",
    "handle": "indigo-swatch"
  },
  "metaobject": {
    "fields": [
      {
        "key": "hex",
        "value": "#4B0082"
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
  "handle": {
    "type": "color",
    "handle": "indigo-swatch"
  },
  "metaobject": {
    "fields": [
      {
        "key": "hex",
        "value": "#4B0082"
      }
    ]
  }
}
```

## Response

JSON

```json
{
  "metaobjectUpsert": {
    "metaobject": {
      "handle": "indigo-swatch",
      "hex": {
        "value": "#4B0082"
      }
    },
    "userErrors": []
  }
}
```
