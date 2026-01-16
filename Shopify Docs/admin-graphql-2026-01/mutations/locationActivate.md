---
title: locationActivate - GraphQL Admin
description: >-
  Activates a location so that you can stock inventory at the location. Refer to
  the

  [`isActive`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-isactive)
  and

  [`activatable`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-activatable)

  fields on the `Location` object.


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
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate.md
---

# location​Activate

mutation

Requires `write_locations` access scope.

Activates a location so that you can stock inventory at the location. Refer to the [`isActive`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-isactive) and [`activatable`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-activatable) fields on the `Location` object.

***

Caution

As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

***

## Arguments

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of a location to activate.

***

## Location​Activate​Payload returns

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location that was activated.

* location​Activate​User​Errors

  [\[Location​Activate​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationActivateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Activate a deactivated location

  #### Query

  ```graphql
  mutation {
    locationActivate(locationId: "gid://shopify/Location/658095763") {
      location {
        id
        isActive
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
  "query": "mutation { locationActivate(locationId: \"gid://shopify/Location/658095763\") { location { id isActive } } }"
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
      locationActivate(locationId: "gid://shopify/Location/658095763") {
        location {
          id
          isActive
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
      locationActivate(locationId: "gid://shopify/Location/658095763") {
        location {
          id
          isActive
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
      locationActivate(locationId: "gid://shopify/Location/658095763") {
        location {
          id
          isActive
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "locationActivate": {
      "location": {
        "id": "gid://shopify/Location/658095763",
        "isActive": true
      }
    }
  }
  ```

* ### locationActivate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20%7B%0A%20%20locationActivate\(locationId%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F658095763%22\)%20%7B%0A%20%20%20%20location%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20isActive%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation {
  locationActivate(locationId: "gid://shopify/Location/658095763") {
    location {
      id
      isActive
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
"query": "mutation { locationActivate(locationId: \"gid://shopify/Location/658095763\") { location { id isActive } } }"
}'
```

##### React Router

```javascript
import { authenticate } from "../shopify.server";

export const loader = async ({request}) => {
  const { admin } = await authenticate.admin(request);
  const response = await admin.graphql(
    `#graphql
  mutation {
    locationActivate(locationId: "gid://shopify/Location/658095763") {
      location {
        id
        isActive
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
  data: `mutation {
    locationActivate(locationId: "gid://shopify/Location/658095763") {
      location {
        id
        isActive
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
  mutation {
    locationActivate(locationId: "gid://shopify/Location/658095763") {
      location {
        id
        isActive
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
  "locationActivate": {
    "location": {
      "id": "gid://shopify/Location/658095763",
      "isActive": true
    }
  }
}
```
