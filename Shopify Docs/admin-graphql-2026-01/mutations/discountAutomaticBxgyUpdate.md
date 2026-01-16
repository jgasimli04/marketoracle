---
title: discountAutomaticBxgyUpdate - GraphQL Admin
description: >-
  Updates an existing

  [buy X get Y discount
  (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)

  that's automatically applied on a cart and at checkout.


  > Note:

  > To update code discounts, use the

  [`discountCodeBxgyUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate)

  mutation instead.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate.md
---

# discount​Automatic​Bxgy​Update

mutation

Requires Apps must have `write_discounts` access scope.

Updates an existing [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

***

Note

To update code discounts, use the [`discountCodeBxgyUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate) mutation instead.

***

## Arguments

* automatic​Bxgy​Discount

  [Discount​Automatic​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput)

  required

  The input data used to update the automatic BXGY discount.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the automatic BXGY discount to update.

***

## Discount​Automatic​Bxgy​Update​Payload returns

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The automatic discount that was updated.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Update an automatic BXGY discount

  #### Description

  Update an automatic \[BXGY discount]\(https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that gives customers a free product when they buy a different product. This example updates the discount's title, sets new start and end dates, and specifies which products customers need to buy and which products they get for free.

  #### Query

  ```graphql
  mutation UpdateBxgyDiscount($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
    discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            startsAt
            endsAt
          }
        }
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
    "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
    "automaticBxgyDiscount": {
      "title": "Buy first product, get second product free",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "customerBuys": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "quantity": "1"
        }
      },
      "customerGets": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/20995642"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "quantity": "1",
            "effect": {
              "percentage": 1
            }
          }
        }
      },
      "usesPerOrderLimit": "1"
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
  "query": "mutation UpdateBxgyDiscount($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) { discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticBxgy { title startsAt endsAt } } } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
      "automaticBxgyDiscount": {
        "title": "Buy first product, get second product free",
        "startsAt": "2025-01-01T00:00:00Z",
        "endsAt": "2025-12-31T23:59:59Z",
        "customerBuys": {
          "items": {
            "products": {
              "productsToAdd": [
                "gid://shopify/Product/108828309"
              ]
            }
          },
          "value": {
            "quantity": "1"
          }
        },
        "customerGets": {
          "items": {
            "products": {
              "productsToAdd": [
                "gid://shopify/Product/20995642"
              ]
            }
          },
          "value": {
            "discountOnQuantity": {
              "quantity": "1",
              "effect": {
                "percentage": 1
              }
            }
          }
        },
        "usesPerOrderLimit": "1"
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
    mutation UpdateBxgyDiscount($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              title
              startsAt
              endsAt
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
          "automaticBxgyDiscount": {
              "title": "Buy first product, get second product free",
              "startsAt": "2025-01-01T00:00:00Z",
              "endsAt": "2025-12-31T23:59:59Z",
              "customerBuys": {
                  "items": {
                      "products": {
                          "productsToAdd": [
                              "gid://shopify/Product/108828309"
                          ]
                      }
                  },
                  "value": {
                      "quantity": "1"
                  }
              },
              "customerGets": {
                  "items": {
                      "products": {
                          "productsToAdd": [
                              "gid://shopify/Product/20995642"
                          ]
                      }
                  },
                  "value": {
                      "discountOnQuantity": {
                          "quantity": "1",
                          "effect": {
                              "percentage": 1
                          }
                      }
                  }
              },
              "usesPerOrderLimit": "1"
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
    mutation UpdateBxgyDiscount($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              title
              startsAt
              endsAt
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
    "automaticBxgyDiscount": {
      "title": "Buy first product, get second product free",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "customerBuys": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "quantity": "1"
        }
      },
      "customerGets": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/20995642"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "quantity": "1",
            "effect": {
              "percentage": 1
            }
          }
        }
      },
      "usesPerOrderLimit": "1"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation UpdateBxgyDiscount($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
        discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
          automaticDiscountNode {
            id
            automaticDiscount {
              ... on DiscountAutomaticBxgy {
                title
                startsAt
                endsAt
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
          "automaticBxgyDiscount": {
              "title": "Buy first product, get second product free",
              "startsAt": "2025-01-01T00:00:00Z",
              "endsAt": "2025-12-31T23:59:59Z",
              "customerBuys": {
                  "items": {
                      "products": {
                          "productsToAdd": [
                              "gid://shopify/Product/108828309"
                          ]
                      }
                  },
                  "value": {
                      "quantity": "1"
                  }
              },
              "customerGets": {
                  "items": {
                      "products": {
                          "productsToAdd": [
                              "gid://shopify/Product/20995642"
                          ]
                      }
                  },
                  "value": {
                      "discountOnQuantity": {
                          "quantity": "1",
                          "effect": {
                              "percentage": 1
                          }
                      }
                  }
              },
              "usesPerOrderLimit": "1"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "discountAutomaticBxgyUpdate": {
      "automaticDiscountNode": {
        "id": "gid://shopify/DiscountAutomaticNode/198286294",
        "automaticDiscount": {
          "title": "Buy first product, get second product free",
          "startsAt": "2025-01-01T00:00:00Z",
          "endsAt": "2025-12-31T23:59:59Z"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Update context for an automatic BXGY discount

  #### Description

  Update an automatic \[BXGY discount]\(https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that gives customers a free product when they buy a different product. This example updates the discount so it applies to a specific customer segment

  #### Query

  ```graphql
  mutation UpdateBxgyDiscount($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
    discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            context {
              ... on DiscountCustomerSegments {
                segments {
                  id
                }
              }
            }
          }
        }
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
    "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
    "automaticBxgyDiscount": {
      "context": {
        "customerSegments": {
          "add": [
            "gid://shopify/Segment/210588551"
          ]
        }
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
  "query": "mutation UpdateBxgyDiscount($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) { discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticBxgy { title context { ... on DiscountCustomerSegments { segments { id } } } } } } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
      "automaticBxgyDiscount": {
        "context": {
          "customerSegments": {
            "add": [
              "gid://shopify/Segment/210588551"
            ]
          }
        }
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
    mutation UpdateBxgyDiscount($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              title
              context {
                ... on DiscountCustomerSegments {
                  segments {
                    id
                  }
                }
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
          "automaticBxgyDiscount": {
              "context": {
                  "customerSegments": {
                      "add": [
                          "gid://shopify/Segment/210588551"
                      ]
                  }
              }
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
    mutation UpdateBxgyDiscount($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              title
              context {
                ... on DiscountCustomerSegments {
                  segments {
                    id
                  }
                }
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
    "automaticBxgyDiscount": {
      "context": {
        "customerSegments": {
          "add": [
            "gid://shopify/Segment/210588551"
          ]
        }
      }
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation UpdateBxgyDiscount($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
        discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
          automaticDiscountNode {
            id
            automaticDiscount {
              ... on DiscountAutomaticBxgy {
                title
                context {
                  ... on DiscountCustomerSegments {
                    segments {
                      id
                    }
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
          "automaticBxgyDiscount": {
              "context": {
                  "customerSegments": {
                      "add": [
                          "gid://shopify/Segment/210588551"
                      ]
                  }
              }
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "discountAutomaticBxgyUpdate": {
      "automaticDiscountNode": {
        "id": "gid://shopify/DiscountAutomaticNode/198286294",
        "automaticDiscount": {
          "title": "My automatic bogo",
          "context": {
            "segments": [
              {
                "id": "gid://shopify/Segment/210588551"
              }
            ]
          }
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Updating a BXGY discount with invalid input returns an error

  #### Description

  This example shows the error response that's returned when you update a \[BXGY discount]\(https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) with invalid input. In this case, the error occurs because the discount percentage is greater than 1.0 (100%).

  #### Query

  ```graphql
  mutation discountAutomaticBxgyUpdate($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
    discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
      automaticDiscountNode {
        id
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
    "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
    "automaticBxgyDiscount": {
      "title": "Invalid discount percentage",
      "customerGets": {
        "value": {
          "discountOnQuantity": {
            "quantity": "1",
            "effect": {
              "percentage": 1.5
            }
          }
        }
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
  "query": "mutation discountAutomaticBxgyUpdate($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) { discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) { automaticDiscountNode { id } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
      "automaticBxgyDiscount": {
        "title": "Invalid discount percentage",
        "customerGets": {
          "value": {
            "discountOnQuantity": {
              "quantity": "1",
              "effect": {
                "percentage": 1.5
              }
            }
          }
        }
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
    mutation discountAutomaticBxgyUpdate($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
          "automaticBxgyDiscount": {
              "title": "Invalid discount percentage",
              "customerGets": {
                  "value": {
                      "discountOnQuantity": {
                          "quantity": "1",
                          "effect": {
                              "percentage": 1.5
                          }
                      }
                  }
              }
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
    mutation discountAutomaticBxgyUpdate($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
    "automaticBxgyDiscount": {
      "title": "Invalid discount percentage",
      "customerGets": {
        "value": {
          "discountOnQuantity": {
            "quantity": "1",
            "effect": {
              "percentage": 1.5
            }
          }
        }
      }
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation discountAutomaticBxgyUpdate($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
        discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
          automaticDiscountNode {
            id
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
          "automaticBxgyDiscount": {
              "title": "Invalid discount percentage",
              "customerGets": {
                  "value": {
                      "discountOnQuantity": {
                          "quantity": "1",
                          "effect": {
                              "percentage": 1.5
                          }
                      }
                  }
              }
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "discountAutomaticBxgyUpdate": {
      "automaticDiscountNode": null,
      "userErrors": [
        {
          "field": [
            "automaticBxgyDiscount",
            "customerGets",
            "value",
            "discountOnQuantity",
            "effect",
            "percentage"
          ],
          "message": "Value must be between 0.0 and 1.0"
        }
      ]
    }
  }
  ```

* ### discountAutomaticBxgyUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20UpdateBxgyDiscount\(%24id%3A%20ID!%2C%20%24automaticBxgyDiscount%3A%20DiscountAutomaticBxgyInput!\)%20%7B%0A%20%20discountAutomaticBxgyUpdate\(id%3A%20%24id%2C%20automaticBxgyDiscount%3A%20%24automaticBxgyDiscount\)%20%7B%0A%20%20%20%20automaticDiscountNode%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20automaticDiscount%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20DiscountAutomaticBxgy%20%7B%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20startsAt%0A%20%20%20%20%20%20%20%20%20%20endsAt%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FDiscountAutomaticBxgy%2F198286294%22%2C%0A%20%20%22automaticBxgyDiscount%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22Buy%20first%20product%2C%20get%20second%20product%20free%22%2C%0A%20%20%20%20%22startsAt%22%3A%20%222025-01-01T00%3A00%3A00Z%22%2C%0A%20%20%20%20%22endsAt%22%3A%20%222025-12-31T23%3A59%3A59Z%22%2C%0A%20%20%20%20%22customerBuys%22%3A%20%7B%0A%20%20%20%20%20%20%22items%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22products%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22productsToAdd%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FProduct%2F108828309%22%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22value%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%20%221%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22customerGets%22%3A%20%7B%0A%20%20%20%20%20%20%22items%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22products%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22productsToAdd%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FProduct%2F20995642%22%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22value%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22discountOnQuantity%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22quantity%22%3A%20%221%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22effect%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22percentage%22%3A%201%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22usesPerOrderLimit%22%3A%20%221%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation UpdateBxgyDiscount($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
  discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
    automaticDiscountNode {
      id
      automaticDiscount {
        ... on DiscountAutomaticBxgy {
          title
          startsAt
          endsAt
        }
      }
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
"query": "mutation UpdateBxgyDiscount($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) { discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticBxgy { title startsAt endsAt } } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
    "automaticBxgyDiscount": {
      "title": "Buy first product, get second product free",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "customerBuys": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "quantity": "1"
        }
      },
      "customerGets": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/20995642"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "quantity": "1",
            "effect": {
              "percentage": 1
            }
          }
        }
      },
      "usesPerOrderLimit": "1"
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
  mutation UpdateBxgyDiscount($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
    discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            startsAt
            endsAt
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
        "automaticBxgyDiscount": {
            "title": "Buy first product, get second product free",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "customerBuys": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/108828309"
                        ]
                    }
                },
                "value": {
                    "quantity": "1"
                }
            },
            "customerGets": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/20995642"
                        ]
                    }
                },
                "value": {
                    "discountOnQuantity": {
                        "quantity": "1",
                        "effect": {
                            "percentage": 1
                        }
                    }
                }
            },
            "usesPerOrderLimit": "1"
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
    "query": `mutation UpdateBxgyDiscount($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              title
              startsAt
              endsAt
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
        "automaticBxgyDiscount": {
            "title": "Buy first product, get second product free",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "customerBuys": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/108828309"
                        ]
                    }
                },
                "value": {
                    "quantity": "1"
                }
            },
            "customerGets": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/20995642"
                        ]
                    }
                },
                "value": {
                    "discountOnQuantity": {
                        "quantity": "1",
                        "effect": {
                            "percentage": 1
                        }
                    }
                }
            },
            "usesPerOrderLimit": "1"
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
  mutation UpdateBxgyDiscount($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
    discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            startsAt
            endsAt
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
  "automaticBxgyDiscount": {
    "title": "Buy first product, get second product free",
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "customerBuys": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/108828309"
          ]
        }
      },
      "value": {
        "quantity": "1"
      }
    },
    "customerGets": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/20995642"
          ]
        }
      },
      "value": {
        "discountOnQuantity": {
          "quantity": "1",
          "effect": {
            "percentage": 1
          }
        }
      }
    },
    "usesPerOrderLimit": "1"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/DiscountAutomaticBxgy/198286294",
  "automaticBxgyDiscount": {
    "title": "Buy first product, get second product free",
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "customerBuys": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/108828309"
          ]
        }
      },
      "value": {
        "quantity": "1"
      }
    },
    "customerGets": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/20995642"
          ]
        }
      },
      "value": {
        "discountOnQuantity": {
          "quantity": "1",
          "effect": {
            "percentage": 1
          }
        }
      }
    },
    "usesPerOrderLimit": "1"
  }
}
```

## Response

JSON

```json
{
  "discountAutomaticBxgyUpdate": {
    "automaticDiscountNode": {
      "id": "gid://shopify/DiscountAutomaticNode/198286294",
      "automaticDiscount": {
        "title": "Buy first product, get second product free",
        "startsAt": "2025-01-01T00:00:00Z",
        "endsAt": "2025-12-31T23:59:59Z"
      }
    },
    "userErrors": []
  }
}
```
