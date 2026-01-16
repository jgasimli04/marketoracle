---
title: locationDelete - GraphQL Admin
description: Deletes a location.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDelete'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDelete.md
---

# location​Delete

mutation

Requires `write_locations` access scope.

Deletes a location.

## Arguments

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of a location to delete.

***

## Location​Delete​Payload returns

* deleted​Location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the location that was deleted.

* location​Delete​User​Errors

  [\[Location​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Delete a location and return the location ID

  #### Description

  Delete a location that has been deactivated.

  #### Query

  ```graphql
  mutation {
    locationDelete(locationId: "gid://shopify/Location/658095763") {
      deletedLocationId
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
  "query": "mutation { locationDelete(locationId: \"gid://shopify/Location/658095763\") { deletedLocationId } }"
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
      locationDelete(locationId: "gid://shopify/Location/658095763") {
        deletedLocationId
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
      locationDelete(locationId: "gid://shopify/Location/658095763") {
        deletedLocationId
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
      locationDelete(locationId: "gid://shopify/Location/658095763") {
        deletedLocationId
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "locationDelete": {
      "deletedLocationId": "gid://shopify/Location/658095763"
    }
  }
  ```

* ### Delete an active location

  #### Description

  Deleting an active location returns an error.

  #### Query

  ```graphql
  mutation {
    locationDelete(locationId: "gid://shopify/Location/658095763") {
      deletedLocationId
      locationDeleteUserErrors {
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
  "query": "mutation { locationDelete(locationId: \"gid://shopify/Location/658095763\") { deletedLocationId locationDeleteUserErrors { message code field } } }"
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
      locationDelete(locationId: "gid://shopify/Location/658095763") {
        deletedLocationId
        locationDeleteUserErrors {
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
      locationDelete(locationId: "gid://shopify/Location/658095763") {
        deletedLocationId
        locationDeleteUserErrors {
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
      locationDelete(locationId: "gid://shopify/Location/658095763") {
        deletedLocationId
        locationDeleteUserErrors {
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
    "locationDelete": {
      "deletedLocationId": null,
      "locationDeleteUserErrors": [
        {
          "message": "The location cannot be deleted while it is active.",
          "code": "LOCATION_IS_ACTIVE",
          "field": [
            "locationId"
          ]
        }
      ]
    }
  }
  ```

* ### locationDelete reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20%7B%0A%20%20locationDelete\(locationId%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F658095763%22\)%20%7B%0A%20%20%20%20deletedLocationId%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation {
  locationDelete(locationId: "gid://shopify/Location/658095763") {
    deletedLocationId
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
"query": "mutation { locationDelete(locationId: \"gid://shopify/Location/658095763\") { deletedLocationId } }"
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
    locationDelete(locationId: "gid://shopify/Location/658095763") {
      deletedLocationId
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
    locationDelete(locationId: "gid://shopify/Location/658095763") {
      deletedLocationId
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
    locationDelete(locationId: "gid://shopify/Location/658095763") {
      deletedLocationId
    }
  }
QUERY

response = client.query(query: query)
```

## Response

JSON

```json
{
  "locationDelete": {
    "deletedLocationId": "gid://shopify/Location/658095763"
  }
}
```
