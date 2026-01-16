---
title: discountCodeDelete - GraphQL Admin
description: >-
  Removes a code discount from the store, making it permanently unavailable for
  customer use. This mutation provides a clean way to eliminate discount codes
  that are no longer needed or have been replaced.


  For example, when a seasonal promotion ends or a discount code has been
  compromised, merchants can delete it entirely rather than just deactivating
  it, ensuring customers cannot attempt to use expired promotional codes.


  Use `DiscountCodeDelete` to:

  - persistently remove outdated promotional codes

  - Clean up discount code lists after campaigns end

  - Eliminate compromised or leaked discount codes

  - Maintain organized discount management


  Once deleted, the discount code cannot be recovered and any customer attempts
  to use it will fail. This differs from deactivation, which preserves the code
  for potential future reactivation.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeDelete.md
---

# discount​Code​Delete

mutation

Requires Apps must have `write_discounts` access scope.

Removes a code discount from the store, making it permanently unavailable for customer use. This mutation provides a clean way to eliminate discount codes that are no longer needed or have been replaced.

For example, when a seasonal promotion ends or a discount code has been compromised, merchants can delete it entirely rather than just deactivating it, ensuring customers cannot attempt to use expired promotional codes.

Use `DiscountCodeDelete` to:

* persistently remove outdated promotional codes
* Clean up discount code lists after campaigns end
* Eliminate compromised or leaked discount codes
* Maintain organized discount management

Once deleted, the discount code cannot be recovered and any customer attempts to use it will fail. This differs from deactivation, which preserves the code for potential future reactivation.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the code discount to delete.

***

## Discount​Code​Delete​Payload returns

* deleted​Code​Discount​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the code discount that was deleted.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Delete an amount off discount

  #### Description

  Delete an \[amount off discount]\(https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) discount. This mutation returns the ID of the deleted discount.

  #### Query

  ```graphql
  mutation {
    discountCodeDelete(id: "gid://shopify/DiscountCodeNode/206265824") {
      deletedCodeDiscountId
      userErrors {
        field
        code
        message
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
  "query": "mutation { discountCodeDelete(id: \"gid://shopify/DiscountCodeNode/206265824\") { deletedCodeDiscountId userErrors { field code message } } }"
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
      discountCodeDelete(id: "gid://shopify/DiscountCodeNode/206265824") {
        deletedCodeDiscountId
        userErrors {
          field
          code
          message
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
      discountCodeDelete(id: "gid://shopify/DiscountCodeNode/206265824") {
        deletedCodeDiscountId
        userErrors {
          field
          code
          message
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
      discountCodeDelete(id: "gid://shopify/DiscountCodeNode/206265824") {
        deletedCodeDiscountId
        userErrors {
          field
          code
          message
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "discountCodeDelete": {
      "deletedCodeDiscountId": "gid://shopify/DiscountCodeNode/206265824",
      "userErrors": []
    }
  }
  ```

* ### discountCodeDelete reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20%7B%0A%20%20discountCodeDelete\(id%3A%20%22gid%3A%2F%2Fshopify%2FDiscountCodeNode%2F206265824%22\)%20%7B%0A%20%20%20%20deletedCodeDiscountId%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation {
  discountCodeDelete(id: "gid://shopify/DiscountCodeNode/206265824") {
    deletedCodeDiscountId
    userErrors {
      field
      code
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
"query": "mutation { discountCodeDelete(id: \"gid://shopify/DiscountCodeNode/206265824\") { deletedCodeDiscountId userErrors { field code message } } }"
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
    discountCodeDelete(id: "gid://shopify/DiscountCodeNode/206265824") {
      deletedCodeDiscountId
      userErrors {
        field
        code
        message
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
    discountCodeDelete(id: "gid://shopify/DiscountCodeNode/206265824") {
      deletedCodeDiscountId
      userErrors {
        field
        code
        message
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
    discountCodeDelete(id: "gid://shopify/DiscountCodeNode/206265824") {
      deletedCodeDiscountId
      userErrors {
        field
        code
        message
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
  "discountCodeDelete": {
    "deletedCodeDiscountId": "gid://shopify/DiscountCodeNode/206265824",
    "userErrors": []
  }
}
```
