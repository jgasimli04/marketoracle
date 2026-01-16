---
title: carrierServiceUpdate - GraphQL Admin
description: >-
  Updates a carrier service. Only the app that creates a carrier service can
  update it.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceUpdate.md
---

# carrier​Service​Update

mutation

Requires `write_shipping` access scope.

Updates a carrier service. Only the app that creates a carrier service can update it.

## Arguments

* input

  [Delivery​Carrier​Service​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceUpdateInput)

  required

  The input fields used to update a carrier service.

***

## Carrier​Service​Update​Payload returns

* carrier​Service

  [Delivery​Carrier​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

  The updated carrier service.

* user​Errors

  [\[Carrier​Service​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Modify an existing CarrierService

  #### Query

  ```graphql
  mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
    carrierServiceUpdate(input: $input) {
      carrierService {
        id
        name
        callbackUrl
        active
      }
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
      "id": "gid://shopify/DeliveryCarrierService/1036895102",
      "name": "new test carrier service",
      "callbackUrl": "https://new.example.com/",
      "active": true
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
  "query": "mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) { carrierServiceUpdate(input: $input) { carrierService { id name callbackUrl active } userErrors { field message } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/DeliveryCarrierService/1036895102",
        "name": "new test carrier service",
        "callbackUrl": "https://new.example.com/",
        "active": true
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
    mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
      carrierServiceUpdate(input: $input) {
        carrierService {
          id
          name
          callbackUrl
          active
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "input": {
              "id": "gid://shopify/DeliveryCarrierService/1036895102",
              "name": "new test carrier service",
              "callbackUrl": "https://new.example.com/",
              "active": true
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
    mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
      carrierServiceUpdate(input: $input) {
        carrierService {
          id
          name
          callbackUrl
          active
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "id": "gid://shopify/DeliveryCarrierService/1036895102",
      "name": "new test carrier service",
      "callbackUrl": "https://new.example.com/",
      "active": true
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
        carrierServiceUpdate(input: $input) {
          carrierService {
            id
            name
            callbackUrl
            active
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "id": "gid://shopify/DeliveryCarrierService/1036895102",
              "name": "new test carrier service",
              "callbackUrl": "https://new.example.com/",
              "active": true
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "carrierServiceUpdate": {
      "carrierService": {
        "id": "gid://shopify/DeliveryCarrierService/1036895102",
        "name": "new test carrier service",
        "callbackUrl": "https://new.example.com/",
        "active": true
      },
      "userErrors": []
    }
  }
  ```

* ### carrierServiceUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CarrierServiceUpdate\(%24input%3A%20DeliveryCarrierServiceUpdateInput!\)%20%7B%0A%20%20carrierServiceUpdate\(input%3A%20%24input\)%20%7B%0A%20%20%20%20carrierService%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20callbackUrl%0A%20%20%20%20%20%20active%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FDeliveryCarrierService%2F1036895102%22%2C%0A%20%20%20%20%22name%22%3A%20%22new%20test%20carrier%20service%22%2C%0A%20%20%20%20%22callbackUrl%22%3A%20%22https%3A%2F%2Fnew.example.com%2F%22%2C%0A%20%20%20%20%22active%22%3A%20true%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
  carrierServiceUpdate(input: $input) {
    carrierService {
      id
      name
      callbackUrl
      active
    }
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
"query": "mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) { carrierServiceUpdate(input: $input) { carrierService { id name callbackUrl active } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/DeliveryCarrierService/1036895102",
      "name": "new test carrier service",
      "callbackUrl": "https://new.example.com/",
      "active": true
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
  mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
    carrierServiceUpdate(input: $input) {
      carrierService {
        id
        name
        callbackUrl
        active
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/DeliveryCarrierService/1036895102",
            "name": "new test carrier service",
            "callbackUrl": "https://new.example.com/",
            "active": true
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
    "query": `mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
      carrierServiceUpdate(input: $input) {
        carrierService {
          id
          name
          callbackUrl
          active
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/DeliveryCarrierService/1036895102",
            "name": "new test carrier service",
            "callbackUrl": "https://new.example.com/",
            "active": true
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
  mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
    carrierServiceUpdate(input: $input) {
      carrierService {
        id
        name
        callbackUrl
        active
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/DeliveryCarrierService/1036895102",
    "name": "new test carrier service",
    "callbackUrl": "https://new.example.com/",
    "active": true
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "input": {
    "id": "gid://shopify/DeliveryCarrierService/1036895102",
    "name": "new test carrier service",
    "callbackUrl": "https://new.example.com/",
    "active": true
  }
}
```

## Response

JSON

```json
{
  "carrierServiceUpdate": {
    "carrierService": {
      "id": "gid://shopify/DeliveryCarrierService/1036895102",
      "name": "new test carrier service",
      "callbackUrl": "https://new.example.com/",
      "active": true
    },
    "userErrors": []
  }
}
```
