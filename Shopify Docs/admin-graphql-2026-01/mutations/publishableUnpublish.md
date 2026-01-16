---
title: publishableUnpublish - GraphQL Admin
description: >-
  Unpublishes a resource, such as a
  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
  or
  [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection),
  from one or more
  [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
  The resource remains in your store but becomes unavailable to customers.


  For products to be visible in a channel, they must have an active
  [`ProductStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish.md
---

# publishable​Unpublish

mutation

Requires `write_publications` access scope. Also: The user must have permission to create and edit products or create and edit catalogs.

Unpublishes a resource, such as a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), from one or more [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication). The resource remains in your store but becomes unavailable to customers.

For products to be visible in a channel, they must have an active [`ProductStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus).

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The resource to delete or update publications for.

* input

  [\[Publication​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationInput)

  required

  Specifies the input fields required to unpublish a resource.

***

## Publishable​Unpublish​Payload returns

* publishable

  [Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

  Resource that has been unpublished.

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

* ### Delete a collection listing to unpublish a collection from your app

  #### Query

  ```graphql
  mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {
    publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {
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
    "collectionId": "gid://shopify/Collection/142458073",
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
  "query": "mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) { publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) { publishable { publishedOnPublication(publicationId: $publicationId) } userErrors { field message } } }",
   "variables": {
      "collectionId": "gid://shopify/Collection/142458073",
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
    mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {
      publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {
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
          "collectionId": "gid://shopify/Collection/142458073",
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
    mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {
      publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {
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
    "collectionId": "gid://shopify/Collection/142458073",
    "publicationId": "gid://shopify/Publication/762454635"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {
        publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {
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
          "collectionId": "gid://shopify/Collection/142458073",
          "publicationId": "gid://shopify/Publication/762454635"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "publishableUnpublish": {
      "publishable": {
        "publishedOnPublication": false
      },
      "userErrors": []
    }
  }
  ```

* ### Delete a product listing to unpublish a product from your app

  #### Query

  ```graphql
  mutation PublishableUnpublish($productId: ID!, $publicationId: ID!) {
    publishableUnpublish(id: $productId, input: {publicationId: $publicationId}) {
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
    "productId": "gid://shopify/Product/108828309",
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
  "query": "mutation PublishableUnpublish($productId: ID!, $publicationId: ID!) { publishableUnpublish(id: $productId, input: {publicationId: $publicationId}) { publishable { publishedOnPublication(publicationId: $publicationId) } userErrors { field message } } }",
   "variables": {
      "productId": "gid://shopify/Product/108828309",
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
    mutation PublishableUnpublish($productId: ID!, $publicationId: ID!) {
      publishableUnpublish(id: $productId, input: {publicationId: $publicationId}) {
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
          "productId": "gid://shopify/Product/108828309",
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
    mutation PublishableUnpublish($productId: ID!, $publicationId: ID!) {
      publishableUnpublish(id: $productId, input: {publicationId: $publicationId}) {
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
    "productId": "gid://shopify/Product/108828309",
    "publicationId": "gid://shopify/Publication/762454635"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation PublishableUnpublish($productId: ID!, $publicationId: ID!) {
        publishableUnpublish(id: $productId, input: {publicationId: $publicationId}) {
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
          "productId": "gid://shopify/Product/108828309",
          "publicationId": "gid://shopify/Publication/762454635"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "publishableUnpublish": {
      "publishable": {
        "publishedOnPublication": false
      },
      "userErrors": []
    }
  }
  ```

* ### Error response

  #### Description

  Attempting to unpublish a product without providing either a channel ID or a publication ID returns an error.

  #### Query

  ```graphql
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
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
    "id": "gid://shopify/Product/108828309",
    "input": {
      "publishDate": "2024-11-14T11:45:48-05:00"
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
  "query": "mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) { publishableUnpublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/Product/108828309",
      "input": {
        "publishDate": "2024-11-14T11:45:48-05:00"
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
    mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
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
          "id": "gid://shopify/Product/108828309",
          "input": {
              "publishDate": "2024-11-14T11:45:48-05:00"
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
    mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
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
    "id": "gid://shopify/Product/108828309",
    "input": {
      "publishDate": "2024-11-14T11:45:48-05:00"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
        publishableUnpublish(id: $id, input: $input) {
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
          "id": "gid://shopify/Product/108828309",
          "input": {
              "publishDate": "2024-11-14T11:45:48-05:00"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "publishableUnpublish": {
      "publishable": {
        "availablePublicationsCount": {
          "count": 4
        },
        "resourcePublicationsCount": {
          "count": 4
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
          "message": "PublicationId cannot be empty"
        }
      ]
    }
  }
  ```

* ### Unpublish a product from a channel

  #### Query

  ```graphql
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
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
    "id": "gid://shopify/Product/108828309",
    "input": {
      "channelId": "gid://shopify/Channel/762454635"
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
  "query": "mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) { publishableUnpublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/Product/108828309",
      "input": {
        "channelId": "gid://shopify/Channel/762454635"
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
    mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
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
          "id": "gid://shopify/Product/108828309",
          "input": {
              "channelId": "gid://shopify/Channel/762454635"
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
    mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
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
    "id": "gid://shopify/Product/108828309",
    "input": {
      "channelId": "gid://shopify/Channel/762454635"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
        publishableUnpublish(id: $id, input: $input) {
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
          "id": "gid://shopify/Product/108828309",
          "input": {
              "channelId": "gid://shopify/Channel/762454635"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "publishableUnpublish": {
      "publishable": {
        "availablePublicationsCount": {
          "count": 3
        },
        "resourcePublicationsCount": {
          "count": 3
        }
      },
      "shop": {
        "publicationCount": 8
      },
      "userErrors": []
    }
  }
  ```

* ### Unpublish a product from a non-existing channel

  #### Query

  ```graphql
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
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
    "id": "gid://shopify/Product/108828309",
    "input": {
      "channelId": "gid://shopify/Channel/0"
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
  "query": "mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) { publishableUnpublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/Product/108828309",
      "input": {
        "channelId": "gid://shopify/Channel/0"
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
    mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
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
          "id": "gid://shopify/Product/108828309",
          "input": {
              "channelId": "gid://shopify/Channel/0"
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
    mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
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
    "id": "gid://shopify/Product/108828309",
    "input": {
      "channelId": "gid://shopify/Channel/0"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
        publishableUnpublish(id: $id, input: $input) {
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
          "id": "gid://shopify/Product/108828309",
          "input": {
              "channelId": "gid://shopify/Channel/0"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "publishableUnpublish": {
      "publishable": {
        "availablePublicationsCount": {
          "count": 4
        },
        "resourcePublicationsCount": {
          "count": 4
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
          "message": "Channel does not exist or is not publishable"
        }
      ]
    }
  }
  ```

* ### Unpublish a product from a non-existing publication

  #### Query

  ```graphql
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
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
    "id": "gid://shopify/Product/108828309",
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
  "query": "mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) { publishableUnpublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/Product/108828309",
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
    mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
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
          "id": "gid://shopify/Product/108828309",
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
    mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
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
    "id": "gid://shopify/Product/108828309",
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
      "query": `mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
        publishableUnpublish(id: $id, input: $input) {
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
          "id": "gid://shopify/Product/108828309",
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
    "publishableUnpublish": {
      "publishable": {
        "availablePublicationsCount": {
          "count": 4
        },
        "resourcePublicationsCount": {
          "count": 4
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

* ### Unpublish a product from a publication

  #### Query

  ```graphql
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
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
    "id": "gid://shopify/Product/108828309",
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
  "query": "mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) { publishableUnpublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/Product/108828309",
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
    mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
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
          "id": "gid://shopify/Product/108828309",
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
    mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
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
    "id": "gid://shopify/Product/108828309",
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
      "query": `mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
        publishableUnpublish(id: $id, input: $input) {
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
          "id": "gid://shopify/Product/108828309",
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
    "publishableUnpublish": {
      "publishable": {
        "availablePublicationsCount": {
          "count": 3
        },
        "resourcePublicationsCount": {
          "count": 3
        }
      },
      "shop": {
        "publicationCount": 8
      },
      "userErrors": []
    }
  }
  ```

* ### Unpublish a product using both a channel ID and publication ID

  #### Description

  If you provide a channel ID and publication ID, then only the publication ID is used.

  #### Query

  ```graphql
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
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
    "id": "gid://shopify/Product/108828309",
    "input": {
      "channelId": "gid://shopify/Channel/762454635",
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
  "query": "mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) { publishableUnpublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/Product/108828309",
      "input": {
        "channelId": "gid://shopify/Channel/762454635",
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
    mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
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
          "id": "gid://shopify/Product/108828309",
          "input": {
              "channelId": "gid://shopify/Channel/762454635",
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
    mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
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
    "id": "gid://shopify/Product/108828309",
    "input": {
      "channelId": "gid://shopify/Channel/762454635",
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
      "query": `mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
        publishableUnpublish(id: $id, input: $input) {
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
          "id": "gid://shopify/Product/108828309",
          "input": {
              "channelId": "gid://shopify/Channel/762454635",
              "publicationId": "gid://shopify/Publication/762454635"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "publishableUnpublish": {
      "publishable": {
        "availablePublicationsCount": {
          "count": 3
        },
        "resourcePublicationsCount": {
          "count": 3
        }
      },
      "shop": {
        "publicationCount": 8
      },
      "userErrors": []
    }
  }
  ```

* ### publishableUnpublish reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20PublishableUnpublish\(%24collectionId%3A%20ID!%2C%20%24publicationId%3A%20ID!\)%20%7B%0A%20%20publishableUnpublish\(id%3A%20%24collectionId%2C%20input%3A%20%7BpublicationId%3A%20%24publicationId%7D\)%20%7B%0A%20%20%20%20publishable%20%7B%0A%20%20%20%20%20%20publishedOnPublication\(publicationId%3A%20%24publicationId\)%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22collectionId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F142458073%22%2C%0A%20%20%22publicationId%22%3A%20%22gid%3A%2F%2Fshopify%2FPublication%2F762454635%22%0A%7D)

##### GQL

```graphql
mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {
  publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {
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
"query": "mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) { publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) { publishable { publishedOnPublication(publicationId: $publicationId) } userErrors { field message } } }",
 "variables": {
    "collectionId": "gid://shopify/Collection/142458073",
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
  mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {
    publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {
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
        "collectionId": "gid://shopify/Collection/142458073",
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
    "query": `mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {
      publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {
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
        "collectionId": "gid://shopify/Collection/142458073",
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
  mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {
    publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {
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
  "collectionId": "gid://shopify/Collection/142458073",
  "publicationId": "gid://shopify/Publication/762454635"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "collectionId": "gid://shopify/Collection/142458073",
  "publicationId": "gid://shopify/Publication/762454635"
}
```

## Response

JSON

```json
{
  "publishableUnpublish": {
    "publishable": {
      "publishedOnPublication": false
    },
    "userErrors": []
  }
}
```
