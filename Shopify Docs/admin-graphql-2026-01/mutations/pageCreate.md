---
title: pageCreate - GraphQL Admin
description: >-
  Creates a
  [`Page`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page) for
  the online store.


  Pages contain custom content like "About Us" or "Contact" information that
  merchants display outside their product catalog. The page requires a
  [`title`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.title)
  and can include HTML content, publishing settings, and custom [template
  suffixes](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.templateSuffix).
  You can control visibility through the
  [`isPublished`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.isPublished)
  flag or schedule publication with a specific date.


  The mutation returns the complete page object upon successful creation or
  validation errors if the input is invalid.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageCreate'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageCreate.md'
---

# page​Create

mutation

Requires Any of `write_content`, `write_online_store_pages` access scopes.

Creates a [`Page`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page) for the online store.

Pages contain custom content like "About Us" or "Contact" information that merchants display outside their product catalog. The page requires a [`title`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.title) and can include HTML content, publishing settings, and custom [template suffixes](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.templateSuffix). You can control visibility through the [`isPublished`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.isPublished) flag or schedule publication with a specific date.

The mutation returns the complete page object upon successful creation or validation errors if the input is invalid.

## Arguments

* page

  [Page​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PageCreateInput)

  required

  The properties of the new page.

***

## Page​Create​Payload returns

* page

  [Page](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page)

  The page that was created.

* user​Errors

  [\[Page​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Creates a page

  #### Query

  ```graphql
  mutation CreatePage($page: PageCreateInput!) {
    pageCreate(page: $page) {
      page {
        id
        title
        handle
      }
      userErrors {
        code
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "page": {
      "title": "New Page Title",
      "handle": "new-page-title",
      "body": "This is the content of the page.",
      "isPublished": true,
      "templateSuffix": "custom"
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
  "query": "mutation CreatePage($page: PageCreateInput!) { pageCreate(page: $page) { page { id title handle } userErrors { code field message } } }",
   "variables": {
      "page": {
        "title": "New Page Title",
        "handle": "new-page-title",
        "body": "This is the content of the page.",
        "isPublished": true,
        "templateSuffix": "custom"
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
    mutation CreatePage($page: PageCreateInput!) {
      pageCreate(page: $page) {
        page {
          id
          title
          handle
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    {
      variables: {
          "page": {
              "title": "New Page Title",
              "handle": "new-page-title",
              "body": "This is the content of the page.",
              "isPublished": true,
              "templateSuffix": "custom"
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
    mutation CreatePage($page: PageCreateInput!) {
      pageCreate(page: $page) {
        page {
          id
          title
          handle
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "page": {
      "title": "New Page Title",
      "handle": "new-page-title",
      "body": "This is the content of the page.",
      "isPublished": true,
      "templateSuffix": "custom"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CreatePage($page: PageCreateInput!) {
        pageCreate(page: $page) {
          page {
            id
            title
            handle
          }
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "page": {
              "title": "New Page Title",
              "handle": "new-page-title",
              "body": "This is the content of the page.",
              "isPublished": true,
              "templateSuffix": "custom"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "pageCreate": {
      "page": {
        "id": "gid://shopify/Page/1025371368",
        "title": "New Page Title",
        "handle": "new-page-title"
      },
      "userErrors": []
    }
  }
  ```

* ### pageCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CreatePage\(%24page%3A%20PageCreateInput!\)%20%7B%0A%20%20pageCreate\(page%3A%20%24page\)%20%7B%0A%20%20%20%20page%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20handle%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22page%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22New%20Page%20Title%22%2C%0A%20%20%20%20%22handle%22%3A%20%22new-page-title%22%2C%0A%20%20%20%20%22body%22%3A%20%22This%20is%20the%20content%20of%20the%20page.%22%2C%0A%20%20%20%20%22isPublished%22%3A%20true%2C%0A%20%20%20%20%22templateSuffix%22%3A%20%22custom%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation CreatePage($page: PageCreateInput!) {
  pageCreate(page: $page) {
    page {
      id
      title
      handle
    }
    userErrors {
      code
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
"query": "mutation CreatePage($page: PageCreateInput!) { pageCreate(page: $page) { page { id title handle } userErrors { code field message } } }",
 "variables": {
    "page": {
      "title": "New Page Title",
      "handle": "new-page-title",
      "body": "This is the content of the page.",
      "isPublished": true,
      "templateSuffix": "custom"
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
  mutation CreatePage($page: PageCreateInput!) {
    pageCreate(page: $page) {
      page {
        id
        title
        handle
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "page": {
            "title": "New Page Title",
            "handle": "new-page-title",
            "body": "This is the content of the page.",
            "isPublished": true,
            "templateSuffix": "custom"
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
    "query": `mutation CreatePage($page: PageCreateInput!) {
      pageCreate(page: $page) {
        page {
          id
          title
          handle
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "page": {
            "title": "New Page Title",
            "handle": "new-page-title",
            "body": "This is the content of the page.",
            "isPublished": true,
            "templateSuffix": "custom"
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
  mutation CreatePage($page: PageCreateInput!) {
    pageCreate(page: $page) {
      page {
        id
        title
        handle
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "page": {
    "title": "New Page Title",
    "handle": "new-page-title",
    "body": "This is the content of the page.",
    "isPublished": true,
    "templateSuffix": "custom"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "page": {
    "title": "New Page Title",
    "handle": "new-page-title",
    "body": "This is the content of the page.",
    "isPublished": true,
    "templateSuffix": "custom"
  }
}
```

## Response

JSON

```json
{
  "pageCreate": {
    "page": {
      "id": "gid://shopify/Page/1025371368",
      "title": "New Page Title",
      "handle": "new-page-title"
    },
    "userErrors": []
  }
}
```
