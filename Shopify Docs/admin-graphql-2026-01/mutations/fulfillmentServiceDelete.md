---
title: fulfillmentServiceDelete - GraphQL Admin
description: Deletes a fulfillment service.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceDelete.md
---

# fulfillment​Service​Delete

mutation

Requires `write_fulfillments` access scope. Also: The user must have fulfill\_and\_ship\_orders permission.

Deletes a fulfillment service.

## Arguments

* destination​Location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of an active merchant managed location where inventory and commitments will be relocated after the fulfillment service is deleted.

  Inventory will only be transferred if the [`TRANSFER`](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentServiceDeleteInventoryAction#value-transfer) inventory action has been chosen.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the fulfillment service to delete.

* inventory​Action

  [Fulfillment​Service​Delete​Inventory​Action](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentServiceDeleteInventoryAction)

  Default:TRANSFER

  The action to take with the location after the fulfillment service is deleted.

***

## Fulfillment​Service​Delete​Payload returns

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted fulfillment service.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Remove an existing FulfillmentService

  #### Description

  Delete a fulfillment service and relocate inventory and commitments to a new location.

  #### Query

  ```graphql
  mutation fulfillmentServiceDelete($id: ID!, $destinationLocationId: ID) {
    fulfillmentServiceDelete(id: $id, destinationLocationId: $destinationLocationId) {
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
    "destinationLocationId": "gid://shopify/Location/124656943",
    "id": "gid://shopify/FulfillmentService/198258461"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation fulfillmentServiceDelete($id: ID!, $destinationLocationId: ID) { fulfillmentServiceDelete(id: $id, destinationLocationId: $destinationLocationId) { deletedId userErrors { field message } } }",
   "variables": {
      "destinationLocationId": "gid://shopify/Location/124656943",
      "id": "gid://shopify/FulfillmentService/198258461"
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
    mutation fulfillmentServiceDelete($id: ID!, $destinationLocationId: ID) {
      fulfillmentServiceDelete(id: $id, destinationLocationId: $destinationLocationId) {
        deletedId
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "destinationLocationId": "gid://shopify/Location/124656943",
          "id": "gid://shopify/FulfillmentService/198258461"
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
    mutation fulfillmentServiceDelete($id: ID!, $destinationLocationId: ID) {
      fulfillmentServiceDelete(id: $id, destinationLocationId: $destinationLocationId) {
        deletedId
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "destinationLocationId": "gid://shopify/Location/124656943",
    "id": "gid://shopify/FulfillmentService/198258461"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation fulfillmentServiceDelete($id: ID!, $destinationLocationId: ID) {
        fulfillmentServiceDelete(id: $id, destinationLocationId: $destinationLocationId) {
          deletedId
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "destinationLocationId": "gid://shopify/Location/124656943",
          "id": "gid://shopify/FulfillmentService/198258461"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "fulfillmentServiceDelete": {
      "deletedId": "gid://shopify/FulfillmentService/198258461",
      "userErrors": []
    }
  }
  ```

* ### fulfillmentServiceDelete reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fulfillmentServiceDelete\(%24id%3A%20ID!%2C%20%24destinationLocationId%3A%20ID\)%20%7B%0A%20%20fulfillmentServiceDelete\(id%3A%20%24id%2C%20destinationLocationId%3A%20%24destinationLocationId\)%20%7B%0A%20%20%20%20deletedId%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22destinationLocationId%22%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F124656943%22%2C%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentService%2F198258461%22%0A%7D)

##### GQL

```graphql
mutation fulfillmentServiceDelete($id: ID!, $destinationLocationId: ID) {
  fulfillmentServiceDelete(id: $id, destinationLocationId: $destinationLocationId) {
    deletedId
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
"query": "mutation fulfillmentServiceDelete($id: ID!, $destinationLocationId: ID) { fulfillmentServiceDelete(id: $id, destinationLocationId: $destinationLocationId) { deletedId userErrors { field message } } }",
 "variables": {
    "destinationLocationId": "gid://shopify/Location/124656943",
    "id": "gid://shopify/FulfillmentService/198258461"
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
  mutation fulfillmentServiceDelete($id: ID!, $destinationLocationId: ID) {
    fulfillmentServiceDelete(id: $id, destinationLocationId: $destinationLocationId) {
      deletedId
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "destinationLocationId": "gid://shopify/Location/124656943",
        "id": "gid://shopify/FulfillmentService/198258461"
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
    "query": `mutation fulfillmentServiceDelete($id: ID!, $destinationLocationId: ID) {
      fulfillmentServiceDelete(id: $id, destinationLocationId: $destinationLocationId) {
        deletedId
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "destinationLocationId": "gid://shopify/Location/124656943",
        "id": "gid://shopify/FulfillmentService/198258461"
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
  mutation fulfillmentServiceDelete($id: ID!, $destinationLocationId: ID) {
    fulfillmentServiceDelete(id: $id, destinationLocationId: $destinationLocationId) {
      deletedId
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "destinationLocationId": "gid://shopify/Location/124656943",
  "id": "gid://shopify/FulfillmentService/198258461"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "destinationLocationId": "gid://shopify/Location/124656943",
  "id": "gid://shopify/FulfillmentService/198258461"
}
```

## Response

JSON

```json
{
  "fulfillmentServiceDelete": {
    "deletedId": "gid://shopify/FulfillmentService/198258461",
    "userErrors": []
  }
}
```
