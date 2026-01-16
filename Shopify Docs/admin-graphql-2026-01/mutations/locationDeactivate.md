---
title: locationDeactivate - GraphQL Admin
description: >-
  Deactivates a location and moves inventory, pending orders, and moving
  transfers " "to a destination location.


  > Caution:

  > As of 2026-01, this mutation supports an optional idempotency key using the
  `@idempotent` directive.

  As of 2026-04, the idempotency key is required and must be provided using the
  `@idempotent` directive.

  For more information, see the [idempotency
  documentation](https://shopify.dev/docs/api/usage/idempotent-requests).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDeactivate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDeactivate.md
---

# location​Deactivate

mutation

Requires `write_locations` access scope.

Deactivates a location and moves inventory, pending orders, and moving transfers " "to a destination location.

***

Caution

As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

***

## Arguments

* destination​Location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of a destination location to which inventory, pending orders and moving transfers will be moved from the location to deactivate.

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of a location to deactivate.

***

## Location​Deactivate​Payload returns

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location that was deactivated.

* location​Deactivate​User​Errors

  [\[Location​Deactivate​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeactivateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Deactivate a location with active inventory

  #### Description

  Deactivating a location with inventory without specifying a destination location returns an error.

  #### Query

  ```graphql
  mutation locationDeactivate {
    locationDeactivate(locationId: "gid://shopify/Location/922479430") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
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
  "query": "mutation locationDeactivate { locationDeactivate(locationId: \"gid://shopify/Location/922479430\") { location { id isActive } locationDeactivateUserErrors { message code field } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    mutation locationDeactivate {
      locationDeactivate(locationId: "gid://shopify/Location/922479430") {
        location {
          id
          isActive
        }
        locationDeactivateUserErrors {
          message
          code
          field
        }
      }
    }`,
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
    mutation locationDeactivate {
      locationDeactivate(locationId: "gid://shopify/Location/922479430") {
        location {
          id
          isActive
        }
        locationDeactivateUserErrors {
          message
          code
          field
        }
      }
    }
  QUERY

  response = client.query(query: query)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: `mutation locationDeactivate {
      locationDeactivate(locationId: "gid://shopify/Location/922479430") {
        location {
          id
          isActive
        }
        locationDeactivateUserErrors {
          message
          code
          field
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "locationDeactivate": {
      "location": {
        "id": "gid://shopify/Location/922479430",
        "isActive": true
      },
      "locationDeactivateUserErrors": [
        {
          "message": "Location could not be deactivated without specifying where to relocate inventory stocked at the location.",
          "code": "HAS_ACTIVE_INVENTORY_ERROR",
          "field": [
            "locationId"
          ]
        }
      ]
    }
  }
  ```

* ### Deactivate a location with pending orders

  #### Description

  Deactivating a location with pending orders without specifying a destination location returns an error

  #### Query

  ```graphql
  mutation locationDeactivate {
    locationDeactivate(locationId: "gid://shopify/Location/123") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
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
  "query": "mutation locationDeactivate { locationDeactivate(locationId: \"gid://shopify/Location/123\") { location { id isActive } locationDeactivateUserErrors { message code field } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    mutation locationDeactivate {
      locationDeactivate(locationId: "gid://shopify/Location/123") {
        location {
          id
          isActive
        }
        locationDeactivateUserErrors {
          message
          code
          field
        }
      }
    }`,
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
    mutation locationDeactivate {
      locationDeactivate(locationId: "gid://shopify/Location/123") {
        location {
          id
          isActive
        }
        locationDeactivateUserErrors {
          message
          code
          field
        }
      }
    }
  QUERY

  response = client.query(query: query)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: `mutation locationDeactivate {
      locationDeactivate(locationId: "gid://shopify/Location/123") {
        location {
          id
          isActive
        }
        locationDeactivateUserErrors {
          message
          code
          field
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "locationDeactivate": {
      "location": null,
      "locationDeactivateUserErrors": [
        {
          "message": "Location could not be deactivated because it has open purchase orders.",
          "code": "HAS_OPEN_PURCHASE_ORDERS_ERROR",
          "field": [
            "locationId"
          ]
        }
      ]
    }
  }
  ```

* ### Deactivate an active location

  #### Description

  Deactivates a location and transfers inventory, pending orders, and transfers to another location

  #### Query

  ```graphql
  mutation {
    locationDeactivate(locationId: "gid://shopify/Location/922479430", destinationLocationId: "gid://shopify/Location/147921425") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
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
  "query": "mutation { locationDeactivate(locationId: \"gid://shopify/Location/922479430\", destinationLocationId: \"gid://shopify/Location/147921425\") { location { id isActive } locationDeactivateUserErrors { message code field } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    mutation {
      locationDeactivate(locationId: "gid://shopify/Location/922479430", destinationLocationId: "gid://shopify/Location/147921425") {
        location {
          id
          isActive
        }
        locationDeactivateUserErrors {
          message
          code
          field
        }
      }
    }`,
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
    mutation {
      locationDeactivate(locationId: "gid://shopify/Location/922479430", destinationLocationId: "gid://shopify/Location/147921425") {
        location {
          id
          isActive
        }
        locationDeactivateUserErrors {
          message
          code
          field
        }
      }
    }
  QUERY

  response = client.query(query: query)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: `mutation {
      locationDeactivate(locationId: "gid://shopify/Location/922479430", destinationLocationId: "gid://shopify/Location/147921425") {
        location {
          id
          isActive
        }
        locationDeactivateUserErrors {
          message
          code
          field
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "locationDeactivate": {
      "location": {
        "id": "gid://shopify/Location/922479430",
        "isActive": false
      },
      "locationDeactivateUserErrors": []
    }
  }
  ```

* ### locationDeactivate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20locationDeactivate%20%7B%0A%20%20locationDeactivate\(locationId%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F922479430%22\)%20%7B%0A%20%20%20%20location%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20isActive%0A%20%20%20%20%7D%0A%20%20%20%20locationDeactivateUserErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation locationDeactivate {
  locationDeactivate(locationId: "gid://shopify/Location/922479430") {
    location {
      id
      isActive
    }
    locationDeactivateUserErrors {
      message
      code
      field
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
"query": "mutation locationDeactivate { locationDeactivate(locationId: \"gid://shopify/Location/922479430\") { location { id isActive } locationDeactivateUserErrors { message code field } } }"
}'
```

##### React Router

```javascript
import { authenticate } from "../shopify.server";

export const loader = async ({request}) => {
  const { admin } = await authenticate.admin(request);
  const response = await admin.graphql(
    `#graphql
  mutation locationDeactivate {
    locationDeactivate(locationId: "gid://shopify/Location/922479430") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
    }
  }`,
  );
  const json = await response.json();
  return json.data;
}
```

##### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation locationDeactivate {
    locationDeactivate(locationId: "gid://shopify/Location/922479430") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
    }
  }`,
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
  mutation locationDeactivate {
    locationDeactivate(locationId: "gid://shopify/Location/922479430") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
    }
  }
QUERY

response = client.query(query: query)
```

## Response

JSON

```json
{
  "locationDeactivate": {
    "location": {
      "id": "gid://shopify/Location/922479430",
      "isActive": true
    },
    "locationDeactivateUserErrors": [
      {
        "message": "Location could not be deactivated without specifying where to relocate inventory stocked at the location.",
        "code": "HAS_ACTIVE_INVENTORY_ERROR",
        "field": [
          "locationId"
        ]
      }
    ]
  }
}
```
