---
title: productVariantRelationshipBulkUpdate - GraphQL Admin
description: >-
  Creates new bundles, updates component quantities in existing bundles, and
  removes bundle components for one or multiple
  [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
  objects.


  Each bundle variant can contain up to 30 component variants with specified
  quantities. After an app assigns components to a bundle, only that app can
  manage those components.


  > Note:

  > For most use cases, use
  [`productBundleCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleCreate)
  instead, which creates product fixed bundles.
  `productVariantRelationshipBulkUpdate` is for [variant fixed
  bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-variant-fixed-bundle),
  where each variant has its own component configuration.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantRelationshipBulkUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantRelationshipBulkUpdate.md
---

# product​Variant​Relationship​Bulk​Update

mutation

Requires `write_products` access scope. Also: The shop must have access to bundles feature.

Creates new bundles, updates component quantities in existing bundles, and removes bundle components for one or multiple [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

Each bundle variant can contain up to 30 component variants with specified quantities. After an app assigns components to a bundle, only that app can manage those components.

***

Note

For most use cases, use [`productBundleCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleCreate) instead, which creates product fixed bundles. `productVariantRelationshipBulkUpdate` is for [variant fixed bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-variant-fixed-bundle), where each variant has its own component configuration.

***

## Arguments

* input

  [\[Product​Variant​Relationship​Update​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantRelationshipUpdateInput)

  required

  The input options for the product variant being updated.

***

## Product​Variant​Relationship​Bulk​Update​Payload returns

* parent​Product​Variants

  [\[Product​Variant!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The product variants with successfully updated product variant relationships.

* user​Errors

  [\[Product​Variant​Relationship​Bulk​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantRelationshipBulkUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a bundle by adding components to a product variant

  #### Description

  Creates a new product variant relationship between the parent variant and the child variant passed in the input.

  #### Query

  ```graphql
  mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {
    productVariantRelationshipBulkUpdate(input: $input) {
      parentProductVariants {
        id
        productVariantComponents(first: 10) {
          nodes {
            id
            productVariant {
              id
              displayName
            }
          }
        }
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
    "input": [
      {
        "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
        "productVariantRelationshipsToCreate": [
          {
            "id": "gid://shopify/ProductVariant/149896808",
            "quantity": 1
          },
          {
            "id": "gid://shopify/ProductVariant/709406719",
            "quantity": 1
          }
        ]
      }
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) { productVariantRelationshipBulkUpdate(input: $input) { parentProductVariants { id productVariantComponents(first: 10) { nodes { id productVariant { id displayName } } } } userErrors { code field message } } }",
   "variables": {
      "input": [
        {
          "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
          "productVariantRelationshipsToCreate": [
            {
              "id": "gid://shopify/ProductVariant/149896808",
              "quantity": 1
            },
            {
              "id": "gid://shopify/ProductVariant/709406719",
              "quantity": 1
            }
          ]
        }
      ]
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
    mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {
      productVariantRelationshipBulkUpdate(input: $input) {
        parentProductVariants {
          id
          productVariantComponents(first: 10) {
            nodes {
              id
              productVariant {
                id
                displayName
              }
            }
          }
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
          "input": [
              {
                  "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                  "productVariantRelationshipsToCreate": [
                      {
                          "id": "gid://shopify/ProductVariant/149896808",
                          "quantity": 1
                      },
                      {
                          "id": "gid://shopify/ProductVariant/709406719",
                          "quantity": 1
                      }
                  ]
              }
          ]
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
    mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {
      productVariantRelationshipBulkUpdate(input: $input) {
        parentProductVariants {
          id
          productVariantComponents(first: 10) {
            nodes {
              id
              productVariant {
                id
                displayName
              }
            }
          }
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
    "input": [
      {
        "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
        "productVariantRelationshipsToCreate": [
          {
            "id": "gid://shopify/ProductVariant/149896808",
            "quantity": 1
          },
          {
            "id": "gid://shopify/ProductVariant/709406719",
            "quantity": 1
          }
        ]
      }
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {
        productVariantRelationshipBulkUpdate(input: $input) {
          parentProductVariants {
            id
            productVariantComponents(first: 10) {
              nodes {
                id
                productVariant {
                  id
                  displayName
                }
              }
            }
          }
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "input": [
              {
                  "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                  "productVariantRelationshipsToCreate": [
                      {
                          "id": "gid://shopify/ProductVariant/149896808",
                          "quantity": 1
                      },
                      {
                          "id": "gid://shopify/ProductVariant/709406719",
                          "quantity": 1
                      }
                  ]
              }
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "productVariantRelationshipBulkUpdate": {
      "parentProductVariants": [
        {
          "id": "gid://shopify/ProductVariant/799757249",
          "productVariantComponents": {
            "nodes": [
              {
                "id": "gid://shopify/ProductVariantComponent/993184086",
                "productVariant": {
                  "id": "gid://shopify/ProductVariant/149896808",
                  "displayName": "Composite_Sauce_Pack - component_product_variant_classic_hot_sauce"
                }
              },
              {
                "id": "gid://shopify/ProductVariantComponent/993184087",
                "productVariant": {
                  "id": "gid://shopify/ProductVariant/709406719",
                  "displayName": "Composite_Sauce_Pack - component_product_variant_classic_garlic_sauce"
                }
              }
            ]
          }
        }
      ],
      "userErrors": []
    }
  }
  ```

* ### Delete a product variant component

  #### Description

  Removes all the product variant relationships associated with a variant.

  #### Query

  ```graphql
  mutation RemoveABundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) {
    productVariantRelationshipBulkUpdate(input: $input) {
      parentProductVariants {
        id
        productVariantComponents(first: 10) {
          nodes {
            id
            productVariant {
              id
              displayName
            }
          }
        }
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
    "input": [
      {
        "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
        "productVariantRelationshipsToRemove": [
          "gid://shopify/ProductVariant/149896808"
        ]
      }
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation RemoveABundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) { productVariantRelationshipBulkUpdate(input: $input) { parentProductVariants { id productVariantComponents(first: 10) { nodes { id productVariant { id displayName } } } } userErrors { code field message } } }",
   "variables": {
      "input": [
        {
          "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
          "productVariantRelationshipsToRemove": [
            "gid://shopify/ProductVariant/149896808"
          ]
        }
      ]
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
    mutation RemoveABundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) {
      productVariantRelationshipBulkUpdate(input: $input) {
        parentProductVariants {
          id
          productVariantComponents(first: 10) {
            nodes {
              id
              productVariant {
                id
                displayName
              }
            }
          }
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
          "input": [
              {
                  "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                  "productVariantRelationshipsToRemove": [
                      "gid://shopify/ProductVariant/149896808"
                  ]
              }
          ]
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
    mutation RemoveABundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) {
      productVariantRelationshipBulkUpdate(input: $input) {
        parentProductVariants {
          id
          productVariantComponents(first: 10) {
            nodes {
              id
              productVariant {
                id
                displayName
              }
            }
          }
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
    "input": [
      {
        "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
        "productVariantRelationshipsToRemove": [
          "gid://shopify/ProductVariant/149896808"
        ]
      }
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation RemoveABundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) {
        productVariantRelationshipBulkUpdate(input: $input) {
          parentProductVariants {
            id
            productVariantComponents(first: 10) {
              nodes {
                id
                productVariant {
                  id
                  displayName
                }
              }
            }
          }
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "input": [
              {
                  "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                  "productVariantRelationshipsToRemove": [
                      "gid://shopify/ProductVariant/149896808"
                  ]
              }
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "productVariantRelationshipBulkUpdate": {
      "parentProductVariants": [
        {
          "id": "gid://shopify/ProductVariant/799757249",
          "productVariantComponents": {
            "nodes": [
              {
                "id": "gid://shopify/ProductVariantComponent/636669297",
                "productVariant": {
                  "id": "gid://shopify/ProductVariant/709406719",
                  "displayName": "Composite_Sauce_Pack - component_product_variant_classic_garlic_sauce"
                }
              }
            ]
          }
        }
      ],
      "userErrors": []
    }
  }
  ```

* ### Remove all product variant components of a bundle

  #### Description

  Removes all the product variant relationships associated with a variant.

  #### Query

  ```graphql
  mutation RemoveAllBundleComponents($input: [ProductVariantRelationshipUpdateInput!]!) {
    productVariantRelationshipBulkUpdate(input: $input) {
      parentProductVariants {
        id
        productVariantComponents(first: 10) {
          nodes {
            id
            productVariant {
              id
              displayName
            }
          }
        }
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
    "input": [
      {
        "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
        "removeAllProductVariantRelationships": true
      }
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation RemoveAllBundleComponents($input: [ProductVariantRelationshipUpdateInput!]!) { productVariantRelationshipBulkUpdate(input: $input) { parentProductVariants { id productVariantComponents(first: 10) { nodes { id productVariant { id displayName } } } } userErrors { code field message } } }",
   "variables": {
      "input": [
        {
          "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
          "removeAllProductVariantRelationships": true
        }
      ]
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
    mutation RemoveAllBundleComponents($input: [ProductVariantRelationshipUpdateInput!]!) {
      productVariantRelationshipBulkUpdate(input: $input) {
        parentProductVariants {
          id
          productVariantComponents(first: 10) {
            nodes {
              id
              productVariant {
                id
                displayName
              }
            }
          }
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
          "input": [
              {
                  "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                  "removeAllProductVariantRelationships": true
              }
          ]
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
    mutation RemoveAllBundleComponents($input: [ProductVariantRelationshipUpdateInput!]!) {
      productVariantRelationshipBulkUpdate(input: $input) {
        parentProductVariants {
          id
          productVariantComponents(first: 10) {
            nodes {
              id
              productVariant {
                id
                displayName
              }
            }
          }
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
    "input": [
      {
        "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
        "removeAllProductVariantRelationships": true
      }
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation RemoveAllBundleComponents($input: [ProductVariantRelationshipUpdateInput!]!) {
        productVariantRelationshipBulkUpdate(input: $input) {
          parentProductVariants {
            id
            productVariantComponents(first: 10) {
              nodes {
                id
                productVariant {
                  id
                  displayName
                }
              }
            }
          }
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "input": [
              {
                  "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                  "removeAllProductVariantRelationships": true
              }
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "productVariantRelationshipBulkUpdate": {
      "parentProductVariants": [
        {
          "id": "gid://shopify/ProductVariant/799757249",
          "productVariantComponents": {
            "nodes": []
          }
        }
      ],
      "userErrors": []
    }
  }
  ```

* ### Update a product variant relationship

  #### Description

  Updates the quantity of a bundle component.

  #### Query

  ```graphql
  mutation UpdateBundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) {
    productVariantRelationshipBulkUpdate(input: $input) {
      parentProductVariants {
        id
        productVariantComponents(first: 10) {
          nodes {
            id
            productVariant {
              id
              displayName
            }
          }
        }
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
    "input": [
      {
        "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
        "productVariantRelationshipsToUpdate": [
          {
            "id": "gid://shopify/ProductVariant/149896808",
            "quantity": 33
          }
        ]
      }
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation UpdateBundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) { productVariantRelationshipBulkUpdate(input: $input) { parentProductVariants { id productVariantComponents(first: 10) { nodes { id productVariant { id displayName } } } } userErrors { code field message } } }",
   "variables": {
      "input": [
        {
          "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
          "productVariantRelationshipsToUpdate": [
            {
              "id": "gid://shopify/ProductVariant/149896808",
              "quantity": 33
            }
          ]
        }
      ]
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
    mutation UpdateBundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) {
      productVariantRelationshipBulkUpdate(input: $input) {
        parentProductVariants {
          id
          productVariantComponents(first: 10) {
            nodes {
              id
              productVariant {
                id
                displayName
              }
            }
          }
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
          "input": [
              {
                  "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                  "productVariantRelationshipsToUpdate": [
                      {
                          "id": "gid://shopify/ProductVariant/149896808",
                          "quantity": 33
                      }
                  ]
              }
          ]
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
    mutation UpdateBundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) {
      productVariantRelationshipBulkUpdate(input: $input) {
        parentProductVariants {
          id
          productVariantComponents(first: 10) {
            nodes {
              id
              productVariant {
                id
                displayName
              }
            }
          }
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
    "input": [
      {
        "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
        "productVariantRelationshipsToUpdate": [
          {
            "id": "gid://shopify/ProductVariant/149896808",
            "quantity": 33
          }
        ]
      }
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation UpdateBundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) {
        productVariantRelationshipBulkUpdate(input: $input) {
          parentProductVariants {
            id
            productVariantComponents(first: 10) {
              nodes {
                id
                productVariant {
                  id
                  displayName
                }
              }
            }
          }
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "input": [
              {
                  "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                  "productVariantRelationshipsToUpdate": [
                      {
                          "id": "gid://shopify/ProductVariant/149896808",
                          "quantity": 33
                      }
                  ]
              }
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "productVariantRelationshipBulkUpdate": {
      "parentProductVariants": [
        {
          "id": "gid://shopify/ProductVariant/799757249",
          "productVariantComponents": {
            "nodes": [
              {
                "id": "gid://shopify/ProductVariantComponent/477596995",
                "productVariant": {
                  "id": "gid://shopify/ProductVariant/149896808",
                  "displayName": "Composite_Sauce_Pack - component_product_variant_classic_hot_sauce"
                }
              },
              {
                "id": "gid://shopify/ProductVariantComponent/636669297",
                "productVariant": {
                  "id": "gid://shopify/ProductVariant/709406719",
                  "displayName": "Composite_Sauce_Pack - component_product_variant_classic_garlic_sauce"
                }
              }
            ]
          }
        }
      ],
      "userErrors": []
    }
  }
  ```

* ### productVariantRelationshipBulkUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CreateBundle\(%24input%3A%20%5BProductVariantRelationshipUpdateInput!%5D!\)%20%7B%0A%20%20productVariantRelationshipBulkUpdate\(input%3A%20%24input\)%20%7B%0A%20%20%20%20parentProductVariants%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20productVariantComponents\(first%3A%2010\)%20%7B%0A%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20productVariant%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20displayName%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parentProductVariantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F799757249%22%2C%0A%20%20%20%20%20%20%22productVariantRelationshipsToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F149896808%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22quantity%22%3A%201%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F709406719%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22quantity%22%3A%201%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)

##### GQL

```graphql
mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {
  productVariantRelationshipBulkUpdate(input: $input) {
    parentProductVariants {
      id
      productVariantComponents(first: 10) {
        nodes {
          id
          productVariant {
            id
            displayName
          }
        }
      }
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
"query": "mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) { productVariantRelationshipBulkUpdate(input: $input) { parentProductVariants { id productVariantComponents(first: 10) { nodes { id productVariant { id displayName } } } } userErrors { code field message } } }",
 "variables": {
    "input": [
      {
        "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
        "productVariantRelationshipsToCreate": [
          {
            "id": "gid://shopify/ProductVariant/149896808",
            "quantity": 1
          },
          {
            "id": "gid://shopify/ProductVariant/709406719",
            "quantity": 1
          }
        ]
      }
    ]
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
  mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {
    productVariantRelationshipBulkUpdate(input: $input) {
      parentProductVariants {
        id
        productVariantComponents(first: 10) {
          nodes {
            id
            productVariant {
              id
              displayName
            }
          }
        }
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
        "input": [
            {
                "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                "productVariantRelationshipsToCreate": [
                    {
                        "id": "gid://shopify/ProductVariant/149896808",
                        "quantity": 1
                    },
                    {
                        "id": "gid://shopify/ProductVariant/709406719",
                        "quantity": 1
                    }
                ]
            }
        ]
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
    "query": `mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {
      productVariantRelationshipBulkUpdate(input: $input) {
        parentProductVariants {
          id
          productVariantComponents(first: 10) {
            nodes {
              id
              productVariant {
                id
                displayName
              }
            }
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "input": [
            {
                "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                "productVariantRelationshipsToCreate": [
                    {
                        "id": "gid://shopify/ProductVariant/149896808",
                        "quantity": 1
                    },
                    {
                        "id": "gid://shopify/ProductVariant/709406719",
                        "quantity": 1
                    }
                ]
            }
        ]
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
  mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {
    productVariantRelationshipBulkUpdate(input: $input) {
      parentProductVariants {
        id
        productVariantComponents(first: 10) {
          nodes {
            id
            productVariant {
              id
              displayName
            }
          }
        }
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
  "input": [
    {
      "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
      "productVariantRelationshipsToCreate": [
        {
          "id": "gid://shopify/ProductVariant/149896808",
          "quantity": 1
        },
        {
          "id": "gid://shopify/ProductVariant/709406719",
          "quantity": 1
        }
      ]
    }
  ]
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "input": [
    {
      "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
      "productVariantRelationshipsToCreate": [
        {
          "id": "gid://shopify/ProductVariant/149896808",
          "quantity": 1
        },
        {
          "id": "gid://shopify/ProductVariant/709406719",
          "quantity": 1
        }
      ]
    }
  ]
}
```

## Response

JSON

```json
{
  "productVariantRelationshipBulkUpdate": {
    "parentProductVariants": [
      {
        "id": "gid://shopify/ProductVariant/799757249",
        "productVariantComponents": {
          "nodes": [
            {
              "id": "gid://shopify/ProductVariantComponent/993184086",
              "productVariant": {
                "id": "gid://shopify/ProductVariant/149896808",
                "displayName": "Composite_Sauce_Pack - component_product_variant_classic_hot_sauce"
              }
            },
            {
              "id": "gid://shopify/ProductVariantComponent/993184087",
              "productVariant": {
                "id": "gid://shopify/ProductVariant/709406719",
                "displayName": "Composite_Sauce_Pack - component_product_variant_classic_garlic_sauce"
              }
            }
          ]
        }
      }
    ],
    "userErrors": []
  }
}
```
