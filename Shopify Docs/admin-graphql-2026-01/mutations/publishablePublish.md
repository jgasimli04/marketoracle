---
title: publishablePublish - GraphQL Admin
description: >-
  Publishes a resource, such as a
  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
  or
  [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection),
  to one or more
  [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).


  For products to be visible in a channel, they must have an active
  [`ProductStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus).
  Products sold exclusively on subscription (`requiresSellingPlan: true`) can
  only be published to online stores.


  You can schedule future publication by providing a publish date. Only online
  store channels support [scheduled
  publishing](https://shopify.dev/docs/apps/build/sales-channels/scheduled-product-publishing).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish.md
---

# publishable​Publish

mutation

Requires `write_publications` access scope. Also: The user must have permission to create and edit products or create and edit catalogs.

Publishes a resource, such as a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), to one or more [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

For products to be visible in a channel, they must have an active [`ProductStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus). Products sold exclusively on subscription (`requiresSellingPlan: true`) can only be published to online stores.

You can schedule future publication by providing a publish date. Only online store channels support [scheduled publishing](https://shopify.dev/docs/apps/build/sales-channels/scheduled-product-publishing).

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The resource to create or update publications for.

* input

  [\[Publication​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationInput)

  required

  Specifies the input fields required to publish a resource.

***

## Publishable​Publish​Payload returns

* publishable

  [Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

  Resource that has been published.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a collection listing to publish a collection to your app

  #### Query

  ```graphql
  mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {
    publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {
      publishable {
        publishedOnPublication(publicationId: $publicationId)
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
    "collectionId": "gid://shopify/Collection/636030761",
    "publicationId": "gid://shopify/Publication/762454635"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) { publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) { publishable { publishedOnPublication(publicationId: $publicationId) } userErrors { field message } } }",
   "variables": {
      "collectionId": "gid://shopify/Collection/636030761",
      "publicationId": "gid://shopify/Publication/762454635"
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
    mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {
      publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {
        publishable {
          publishedOnPublication(publicationId: $publicationId)
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "collectionId": "gid://shopify/Collection/636030761",
          "publicationId": "gid://shopify/Publication/762454635"
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
    mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {
      publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {
        publishable {
          publishedOnPublication(publicationId: $publicationId)
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "collectionId": "gid://shopify/Collection/636030761",
    "publicationId": "gid://shopify/Publication/762454635"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {
        publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {
          publishable {
            publishedOnPublication(publicationId: $publicationId)
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "collectionId": "gid://shopify/Collection/636030761",
          "publicationId": "gid://shopify/Publication/762454635"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "publishablePublish": {
      "publishable": {
        "publishedOnPublication": true
      },
      "userErrors": []
    }
  }
  ```

* ### Create a product listing to publish a product to your app

  #### Query

  ```graphql
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
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
    "id": "gid://shopify/Product/558169081",
    "input": {
      "publicationId": "gid://shopify/Publication/762454635"
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
  "query": "mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) { publishablePublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/Product/558169081",
      "input": {
        "publicationId": "gid://shopify/Publication/762454635"
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
    mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Product/558169081",
          "input": {
              "publicationId": "gid://shopify/Publication/762454635"
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
    mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Product/558169081",
    "input": {
      "publicationId": "gid://shopify/Publication/762454635"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
        publishablePublish(id: $id, input: $input) {
          publishable {
            availablePublicationsCount {
              count
            }
            resourcePublicationsCount {
              count
            }
          }
          shop {
            publicationCount
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Product/558169081",
          "input": {
              "publicationId": "gid://shopify/Publication/762454635"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "publishablePublish": {
      "publishable": {
        "availablePublicationsCount": {
          "count": 1
        },
        "resourcePublicationsCount": {
          "count": 1
        }
      },
      "shop": {
        "publicationCount": 8
      },
      "userErrors": []
    }
  }
  ```

* ### Publish a collection with a publication ID

  #### Query

  ```graphql
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
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
    "id": "gid://shopify/Collection/636030761",
    "input": {
      "publicationId": "gid://shopify/Publication/762454635"
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
  "query": "mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) { publishablePublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/Collection/636030761",
      "input": {
        "publicationId": "gid://shopify/Publication/762454635"
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
    mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Collection/636030761",
          "input": {
              "publicationId": "gid://shopify/Publication/762454635"
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
    mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Collection/636030761",
    "input": {
      "publicationId": "gid://shopify/Publication/762454635"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
        publishablePublish(id: $id, input: $input) {
          publishable {
            availablePublicationsCount {
              count
            }
            resourcePublicationsCount {
              count
            }
          }
          shop {
            publicationCount
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Collection/636030761",
          "input": {
              "publicationId": "gid://shopify/Publication/762454635"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "publishablePublish": {
      "publishable": {
        "availablePublicationsCount": {
          "count": 1
        },
        "resourcePublicationsCount": {
          "count": 1
        }
      },
      "shop": {
        "publicationCount": 8
      },
      "userErrors": []
    }
  }
  ```

* ### Publish a product that does not belong to the shop

  #### Description

  Attempting to publish a product that does not belong to the same shop returns an error.

  #### Query

  ```graphql
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
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
    "id": "gid://shopify/Product/921728736",
    "input": {
      "publicationId": "gid://shopify/Publication/762454635"
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
  "query": "mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) { publishablePublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/Product/921728736",
      "input": {
        "publicationId": "gid://shopify/Publication/762454635"
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
    mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Product/921728736",
          "input": {
              "publicationId": "gid://shopify/Publication/762454635"
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
    mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Product/921728736",
    "input": {
      "publicationId": "gid://shopify/Publication/762454635"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
        publishablePublish(id: $id, input: $input) {
          publishable {
            availablePublicationsCount {
              count
            }
            resourcePublicationsCount {
              count
            }
          }
          shop {
            publicationCount
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Product/921728736",
          "input": {
              "publicationId": "gid://shopify/Publication/762454635"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "publishablePublish": {
      "publishable": null,
      "shop": {
        "publicationCount": 8
      },
      "userErrors": [
        {
          "field": [
            "id"
          ],
          "message": "Resource does not exist"
        }
      ]
    }
  }
  ```

* ### Publish a product that does not exist

  #### Description

  Attempting to publish a product that does not exists returns an error.

  #### Query

  ```graphql
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
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
    "id": "gid://shopify/Product/0",
    "input": {
      "publicationId": "gid://shopify/Publication/762454635"
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
  "query": "mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) { publishablePublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/Product/0",
      "input": {
        "publicationId": "gid://shopify/Publication/762454635"
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
    mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Product/0",
          "input": {
              "publicationId": "gid://shopify/Publication/762454635"
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
    mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Product/0",
    "input": {
      "publicationId": "gid://shopify/Publication/762454635"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
        publishablePublish(id: $id, input: $input) {
          publishable {
            availablePublicationsCount {
              count
            }
            resourcePublicationsCount {
              count
            }
          }
          shop {
            publicationCount
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Product/0",
          "input": {
              "publicationId": "gid://shopify/Publication/762454635"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "publishablePublish": {
      "publishable": null,
      "shop": {
        "publicationCount": 8
      },
      "userErrors": [
        {
          "field": [
            "id"
          ],
          "message": "Resource does not exist"
        }
      ]
    }
  }
  ```

* ### Publish a product with a future publication date

  #### Query

  ```graphql
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
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
    "id": "gid://shopify/Product/558169081",
    "input": {
      "publicationId": "gid://shopify/Publication/762454635",
      "publishDate": "2999-01-01T00:00:00-00:00"
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
  "query": "mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) { publishablePublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/Product/558169081",
      "input": {
        "publicationId": "gid://shopify/Publication/762454635",
        "publishDate": "2999-01-01T00:00:00-00:00"
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
    mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Product/558169081",
          "input": {
              "publicationId": "gid://shopify/Publication/762454635",
              "publishDate": "2999-01-01T00:00:00-00:00"
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
    mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Product/558169081",
    "input": {
      "publicationId": "gid://shopify/Publication/762454635",
      "publishDate": "2999-01-01T00:00:00-00:00"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
        publishablePublish(id: $id, input: $input) {
          publishable {
            availablePublicationsCount {
              count
            }
            resourcePublicationsCount {
              count
            }
          }
          shop {
            publicationCount
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Product/558169081",
          "input": {
              "publicationId": "gid://shopify/Publication/762454635",
              "publishDate": "2999-01-01T00:00:00-00:00"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "publishablePublish": {
      "publishable": {
        "availablePublicationsCount": {
          "count": 0
        },
        "resourcePublicationsCount": {
          "count": 0
        }
      },
      "shop": {
        "publicationCount": 8
      },
      "userErrors": []
    }
  }
  ```

* ### Publish a product with an invalid publication ID

  #### Description

  Attempting to publish a product with an invalid publication ID returns an error.

  #### Query

  ```graphql
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
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
    "id": "gid://shopify/Product/558169081",
    "input": {
      "publicationId": "gid://shopify/Publication/0"
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
  "query": "mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) { publishablePublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/Product/558169081",
      "input": {
        "publicationId": "gid://shopify/Publication/0"
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
    mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Product/558169081",
          "input": {
              "publicationId": "gid://shopify/Publication/0"
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
    mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Product/558169081",
    "input": {
      "publicationId": "gid://shopify/Publication/0"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
        publishablePublish(id: $id, input: $input) {
          publishable {
            availablePublicationsCount {
              count
            }
            resourcePublicationsCount {
              count
            }
          }
          shop {
            publicationCount
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Product/558169081",
          "input": {
              "publicationId": "gid://shopify/Publication/0"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "publishablePublish": {
      "publishable": {
        "availablePublicationsCount": {
          "count": 0
        },
        "resourcePublicationsCount": {
          "count": 0
        }
      },
      "shop": {
        "publicationCount": 8
      },
      "userErrors": [
        {
          "field": [
            "input",
            "0",
            "publicationId"
          ],
          "message": "Publication does not exist or is not publishable"
        }
      ]
    }
  }
  ```

* ### publishablePublish reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20PublishablePublish\(%24collectionId%3A%20ID!%2C%20%24publicationId%3A%20ID!\)%20%7B%0A%20%20publishablePublish\(id%3A%20%24collectionId%2C%20input%3A%20%7BpublicationId%3A%20%24publicationId%7D\)%20%7B%0A%20%20%20%20publishable%20%7B%0A%20%20%20%20%20%20publishedOnPublication\(publicationId%3A%20%24publicationId\)%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22collectionId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F636030761%22%2C%0A%20%20%22publicationId%22%3A%20%22gid%3A%2F%2Fshopify%2FPublication%2F762454635%22%0A%7D)

##### GQL

```graphql
mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {
  publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {
    publishable {
      publishedOnPublication(publicationId: $publicationId)
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
"query": "mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) { publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) { publishable { publishedOnPublication(publicationId: $publicationId) } userErrors { field message } } }",
 "variables": {
    "collectionId": "gid://shopify/Collection/636030761",
    "publicationId": "gid://shopify/Publication/762454635"
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
  mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {
    publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {
      publishable {
        publishedOnPublication(publicationId: $publicationId)
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "collectionId": "gid://shopify/Collection/636030761",
        "publicationId": "gid://shopify/Publication/762454635"
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
    "query": `mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {
      publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {
        publishable {
          publishedOnPublication(publicationId: $publicationId)
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "collectionId": "gid://shopify/Collection/636030761",
        "publicationId": "gid://shopify/Publication/762454635"
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
  mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {
    publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {
      publishable {
        publishedOnPublication(publicationId: $publicationId)
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "collectionId": "gid://shopify/Collection/636030761",
  "publicationId": "gid://shopify/Publication/762454635"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "collectionId": "gid://shopify/Collection/636030761",
  "publicationId": "gid://shopify/Publication/762454635"
}
```

## Response

JSON

```json
{
  "publishablePublish": {
    "publishable": {
      "publishedOnPublication": true
    },
    "userErrors": []
  }
}
```
