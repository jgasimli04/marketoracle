---
title: carrierServiceCreate - GraphQL Admin
description: >-
  Creates a carrier service that provides real-time shipping rates to Shopify.
  Carrier services provide real-time shipping rates from external providers like
  FedEx, UPS, or custom shipping solutions. The carrier service connects to your
  external shipping rate calculation system through a callback URL.


  When customers reach checkout, Shopify sends order details to your callback
  URL and displays the returned shipping rates. The service must be active to
  provide rates during checkout.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceCreate.md
---

# carrier​Service​Create

mutation

Requires `write_shipping` access scope.

Creates a carrier service that provides real-time shipping rates to Shopify. Carrier services provide real-time shipping rates from external providers like FedEx, UPS, or custom shipping solutions. The carrier service connects to your external shipping rate calculation system through a callback URL.

When customers reach checkout, Shopify sends order details to your callback URL and displays the returned shipping rates. The service must be active to provide rates during checkout.

## Arguments

* input

  [Delivery​Carrier​Service​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceCreateInput)

  required

  The input fields used to create a carrier service.

***

## Carrier​Service​Create​Payload returns

* carrier​Service

  [Delivery​Carrier​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

  The created carrier service.

* user​Errors

  [\[Carrier​Service​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a new CarrierService

  #### Query

  ```graphql
  mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
    carrierServiceCreate(input: $input) {
      carrierService {
        id
        name
        callbackUrl
        active
        supportsServiceDiscovery
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
      "name": "test carrier service",
      "callbackUrl": "https://example.com/",
      "supportsServiceDiscovery": true,
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
  "query": "mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) { carrierServiceCreate(input: $input) { carrierService { id name callbackUrl active supportsServiceDiscovery } userErrors { field message } } }",
   "variables": {
      "input": {
        "name": "test carrier service",
        "callbackUrl": "https://example.com/",
        "supportsServiceDiscovery": true,
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
    mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
      carrierServiceCreate(input: $input) {
        carrierService {
          id
          name
          callbackUrl
          active
          supportsServiceDiscovery
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
              "name": "test carrier service",
              "callbackUrl": "https://example.com/",
              "supportsServiceDiscovery": true,
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
    mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
      carrierServiceCreate(input: $input) {
        carrierService {
          id
          name
          callbackUrl
          active
          supportsServiceDiscovery
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
      "name": "test carrier service",
      "callbackUrl": "https://example.com/",
      "supportsServiceDiscovery": true,
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
      "query": `mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
        carrierServiceCreate(input: $input) {
          carrierService {
            id
            name
            callbackUrl
            active
            supportsServiceDiscovery
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "name": "test carrier service",
              "callbackUrl": "https://example.com/",
              "supportsServiceDiscovery": true,
              "active": true
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "carrierServiceCreate": {
      "carrierService": {
        "id": "gid://shopify/DeliveryCarrierService/1036895098",
        "name": "test carrier service",
        "callbackUrl": "https://example.com/",
        "active": true,
        "supportsServiceDiscovery": true
      },
      "userErrors": []
    }
  }
  ```

* ### carrierServiceCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CarrierServiceCreate\(%24input%3A%20DeliveryCarrierServiceCreateInput!\)%20%7B%0A%20%20carrierServiceCreate\(input%3A%20%24input\)%20%7B%0A%20%20%20%20carrierService%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20callbackUrl%0A%20%20%20%20%20%20active%0A%20%20%20%20%20%20supportsServiceDiscovery%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22test%20carrier%20service%22%2C%0A%20%20%20%20%22callbackUrl%22%3A%20%22https%3A%2F%2Fexample.com%2F%22%2C%0A%20%20%20%20%22supportsServiceDiscovery%22%3A%20true%2C%0A%20%20%20%20%22active%22%3A%20true%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
  carrierServiceCreate(input: $input) {
    carrierService {
      id
      name
      callbackUrl
      active
      supportsServiceDiscovery
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
"query": "mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) { carrierServiceCreate(input: $input) { carrierService { id name callbackUrl active supportsServiceDiscovery } userErrors { field message } } }",
 "variables": {
    "input": {
      "name": "test carrier service",
      "callbackUrl": "https://example.com/",
      "supportsServiceDiscovery": true,
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
  mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
    carrierServiceCreate(input: $input) {
      carrierService {
        id
        name
        callbackUrl
        active
        supportsServiceDiscovery
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
            "name": "test carrier service",
            "callbackUrl": "https://example.com/",
            "supportsServiceDiscovery": true,
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
    "query": `mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
      carrierServiceCreate(input: $input) {
        carrierService {
          id
          name
          callbackUrl
          active
          supportsServiceDiscovery
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "name": "test carrier service",
            "callbackUrl": "https://example.com/",
            "supportsServiceDiscovery": true,
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
  mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
    carrierServiceCreate(input: $input) {
      carrierService {
        id
        name
        callbackUrl
        active
        supportsServiceDiscovery
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
    "name": "test carrier service",
    "callbackUrl": "https://example.com/",
    "supportsServiceDiscovery": true,
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
    "name": "test carrier service",
    "callbackUrl": "https://example.com/",
    "supportsServiceDiscovery": true,
    "active": true
  }
}
```

## Response

JSON

```json
{
  "carrierServiceCreate": {
    "carrierService": {
      "id": "gid://shopify/DeliveryCarrierService/1036895098",
      "name": "test carrier service",
      "callbackUrl": "https://example.com/",
      "active": true,
      "supportsServiceDiscovery": true
    },
    "userErrors": []
  }
}
```
