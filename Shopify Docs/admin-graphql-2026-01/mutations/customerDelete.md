---
title: customerDelete - GraphQL Admin
description: >-
  Deletes a
  [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)
  from the store. You can only delete customers who haven't placed any
  [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).


  Apps using protected customer data must meet Shopify's [protected customer
  data
  requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerDelete'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerDelete.md
---

# customer​Delete

mutation

Requires `write_customers` access scope.

Deletes a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) from the store. You can only delete customers who haven't placed any [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

Apps using protected customer data must meet Shopify's [protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements).

## Arguments

* input

  [Customer​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerDeleteInput)

  required

  Specifies the customer to delete.

***

## Customer​Delete​Payload returns

* deleted​Customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted customer.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The shop of the deleted customer.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Deletes a customer

  #### Query

  ```graphql
  mutation customerDelete($id: ID!) {
    customerDelete(input: {id: $id}) {
      shop {
        id
      }
      userErrors {
        field
        message
      }
      deletedCustomerId
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Customer/105906728"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation customerDelete($id: ID!) { customerDelete(input: {id: $id}) { shop { id } userErrors { field message } deletedCustomerId } }",
   "variables": {
      "id": "gid://shopify/Customer/105906728"
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
    mutation customerDelete($id: ID!) {
      customerDelete(input: {id: $id}) {
        shop {
          id
        }
        userErrors {
          field
          message
        }
        deletedCustomerId
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Customer/105906728"
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
    mutation customerDelete($id: ID!) {
      customerDelete(input: {id: $id}) {
        shop {
          id
        }
        userErrors {
          field
          message
        }
        deletedCustomerId
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Customer/105906728"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation customerDelete($id: ID!) {
        customerDelete(input: {id: $id}) {
          shop {
            id
          }
          userErrors {
            field
            message
          }
          deletedCustomerId
        }
      }`,
      "variables": {
          "id": "gid://shopify/Customer/105906728"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "customerDelete": {
      "shop": {
        "id": "gid://shopify/Shop/26371970"
      },
      "userErrors": [],
      "deletedCustomerId": "gid://shopify/Customer/105906728"
    }
  }
  ```

* ### customerDelete reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20customerDelete\(%24id%3A%20ID!\)%20%7B%0A%20%20customerDelete\(input%3A%20%7Bid%3A%20%24id%7D\)%20%7B%0A%20%20%20%20shop%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20deletedCustomerId%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F105906728%22%0A%7D)

##### GQL

```graphql
mutation customerDelete($id: ID!) {
  customerDelete(input: {id: $id}) {
    shop {
      id
    }
    userErrors {
      field
      message
    }
    deletedCustomerId
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
"query": "mutation customerDelete($id: ID!) { customerDelete(input: {id: $id}) { shop { id } userErrors { field message } deletedCustomerId } }",
 "variables": {
    "id": "gid://shopify/Customer/105906728"
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
  mutation customerDelete($id: ID!) {
    customerDelete(input: {id: $id}) {
      shop {
        id
      }
      userErrors {
        field
        message
      }
      deletedCustomerId
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Customer/105906728"
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
    "query": `mutation customerDelete($id: ID!) {
      customerDelete(input: {id: $id}) {
        shop {
          id
        }
        userErrors {
          field
          message
        }
        deletedCustomerId
      }
    }`,
    "variables": {
        "id": "gid://shopify/Customer/105906728"
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
  mutation customerDelete($id: ID!) {
    customerDelete(input: {id: $id}) {
      shop {
        id
      }
      userErrors {
        field
        message
      }
      deletedCustomerId
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Customer/105906728"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/Customer/105906728"
}
```

## Response

JSON

```json
{
  "customerDelete": {
    "shop": {
      "id": "gid://shopify/Shop/26371970"
    },
    "userErrors": [],
    "deletedCustomerId": "gid://shopify/Customer/105906728"
  }
}
```
