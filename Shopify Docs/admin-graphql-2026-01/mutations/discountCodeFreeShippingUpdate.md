---
title: discountCodeFreeShippingUpdate - GraphQL Admin
description: >-
  Updates a [free shipping
  discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping)
  that's applied on a cart and at checkout when a customer enters a code.


  > Note:

  > To update a free shipping discount that's automatically applied on a cart
  and at checkout, use the
  [`discountAutomaticFreeShippingUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate)
  mutation.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingUpdate.md
---

# discount​Code​Free​Shipping​Update

mutation

Requires Apps must have `write_discounts` access scope.

Updates a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

***

Note

To update a free shipping discount that's automatically applied on a cart and at checkout, use the [`discountAutomaticFreeShippingUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate) mutation.

***

## Arguments

* free​Shipping​Code​Discount

  [Discount​Code​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput)

  required

  The input data used to update the discount code.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the discount code to update.

***

## Discount​Code​Free​Shipping​Update​Payload returns

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The discount code that was updated.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Update a free shipping discount code

  #### Description

  Update a \[free shipping discount]\(https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied when customers enter a code. This example shows how to update the minimum subtotal requirement to 25 USD, make it valid for the first week of August, and update the discount's code.

  #### Query

  ```graphql
  mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) {
    discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeFreeShipping {
            title
            startsAt
            endsAt
            minimumRequirement {
              ... on DiscountMinimumSubtotal {
                greaterThanOrEqualToSubtotal {
                  amount
                  currencyCode
                }
              }
            }
            codes(first: 2) {
              nodes {
                code
              }
            }
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "freeShippingCodeDiscount": {
      "code": "FRSHP25",
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": 25
        }
      },
      "startsAt": "2022-08-01",
      "endsAt": "2022-08-08",
      "title": "Free shipping for orders above $25"
    },
    "id": "gid://shopify/DiscountCodeFreeShipping/445378512"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) { discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) { codeDiscountNode { id codeDiscount { ... on DiscountCodeFreeShipping { title startsAt endsAt minimumRequirement { ... on DiscountMinimumSubtotal { greaterThanOrEqualToSubtotal { amount currencyCode } } } codes(first: 2) { nodes { code } } } } } userErrors { field code message } } }",
   "variables": {
      "freeShippingCodeDiscount": {
        "code": "FRSHP25",
        "minimumRequirement": {
          "subtotal": {
            "greaterThanOrEqualToSubtotal": 25
          }
        },
        "startsAt": "2022-08-01",
        "endsAt": "2022-08-08",
        "title": "Free shipping for orders above $25"
      },
      "id": "gid://shopify/DiscountCodeFreeShipping/445378512"
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
    mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) {
      discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) {
        codeDiscountNode {
          id
          codeDiscount {
            ... on DiscountCodeFreeShipping {
              title
              startsAt
              endsAt
              minimumRequirement {
                ... on DiscountMinimumSubtotal {
                  greaterThanOrEqualToSubtotal {
                    amount
                    currencyCode
                  }
                }
              }
              codes(first: 2) {
                nodes {
                  code
                }
              }
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }`,
    {
      variables: {
          "freeShippingCodeDiscount": {
              "code": "FRSHP25",
              "minimumRequirement": {
                  "subtotal": {
                      "greaterThanOrEqualToSubtotal": 25
                  }
              },
              "startsAt": "2022-08-01",
              "endsAt": "2022-08-08",
              "title": "Free shipping for orders above $25"
          },
          "id": "gid://shopify/DiscountCodeFreeShipping/445378512"
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
    mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) {
      discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) {
        codeDiscountNode {
          id
          codeDiscount {
            ... on DiscountCodeFreeShipping {
              title
              startsAt
              endsAt
              minimumRequirement {
                ... on DiscountMinimumSubtotal {
                  greaterThanOrEqualToSubtotal {
                    amount
                    currencyCode
                  }
                }
              }
              codes(first: 2) {
                nodes {
                  code
                }
              }
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }
  QUERY

  variables = {
    "freeShippingCodeDiscount": {
      "code": "FRSHP25",
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": 25
        }
      },
      "startsAt": "2022-08-01",
      "endsAt": "2022-08-08",
      "title": "Free shipping for orders above $25"
    },
    "id": "gid://shopify/DiscountCodeFreeShipping/445378512"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) {
        discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) {
          codeDiscountNode {
            id
            codeDiscount {
              ... on DiscountCodeFreeShipping {
                title
                startsAt
                endsAt
                minimumRequirement {
                  ... on DiscountMinimumSubtotal {
                    greaterThanOrEqualToSubtotal {
                      amount
                      currencyCode
                    }
                  }
                }
                codes(first: 2) {
                  nodes {
                    code
                  }
                }
              }
            }
          }
          userErrors {
            field
            code
            message
          }
        }
      }`,
      "variables": {
          "freeShippingCodeDiscount": {
              "code": "FRSHP25",
              "minimumRequirement": {
                  "subtotal": {
                      "greaterThanOrEqualToSubtotal": 25
                  }
              },
              "startsAt": "2022-08-01",
              "endsAt": "2022-08-08",
              "title": "Free shipping for orders above $25"
          },
          "id": "gid://shopify/DiscountCodeFreeShipping/445378512"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "discountCodeFreeShippingUpdate": {
      "codeDiscountNode": {
        "id": "gid://shopify/DiscountCodeNode/445378512",
        "codeDiscount": {
          "title": "Free shipping for orders above $25",
          "startsAt": "2022-08-01T00:00:00Z",
          "endsAt": "2022-08-08T00:00:00Z",
          "minimumRequirement": {
            "greaterThanOrEqualToSubtotal": {
              "amount": "25.0",
              "currencyCode": "USD"
            }
          },
          "codes": {
            "nodes": [
              {
                "code": "FRSHP25"
              }
            ]
          }
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Update the context of a free shipping discount code

  #### Description

  Update a \[free shipping discount]\(https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied when customers enter a code. This example shows how to update the context and code for a free shipping discount.

  #### Query

  ```graphql
  mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) {
    discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeFreeShipping {
            title
            startsAt
            endsAt
            context {
              ... on DiscountCustomerSegments {
                segments {
                  id
                }
              }
            }
            codes(first: 2) {
              nodes {
                code
              }
            }
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "freeShippingCodeDiscount": {
      "code": "FRSHP25",
      "context": {
        "customerSegments": {
          "add": [
            "gid://shopify/Segment/210588551"
          ]
        }
      },
      "startsAt": "2025-07-24T16:18:22-04:00",
      "endsAt": "2025-07-29T16:18:22-04:00"
    },
    "id": "gid://shopify/DiscountCodeFreeShipping/445378512"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) { discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) { codeDiscountNode { id codeDiscount { ... on DiscountCodeFreeShipping { title startsAt endsAt context { ... on DiscountCustomerSegments { segments { id } } } codes(first: 2) { nodes { code } } } } } userErrors { field code message } } }",
   "variables": {
      "freeShippingCodeDiscount": {
        "code": "FRSHP25",
        "context": {
          "customerSegments": {
            "add": [
              "gid://shopify/Segment/210588551"
            ]
          }
        },
        "startsAt": "2025-07-24T16:18:22-04:00",
        "endsAt": "2025-07-29T16:18:22-04:00"
      },
      "id": "gid://shopify/DiscountCodeFreeShipping/445378512"
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
    mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) {
      discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) {
        codeDiscountNode {
          id
          codeDiscount {
            ... on DiscountCodeFreeShipping {
              title
              startsAt
              endsAt
              context {
                ... on DiscountCustomerSegments {
                  segments {
                    id
                  }
                }
              }
              codes(first: 2) {
                nodes {
                  code
                }
              }
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }`,
    {
      variables: {
          "freeShippingCodeDiscount": {
              "code": "FRSHP25",
              "context": {
                  "customerSegments": {
                      "add": [
                          "gid://shopify/Segment/210588551"
                      ]
                  }
              },
              "startsAt": "2025-07-24T16:18:22-04:00",
              "endsAt": "2025-07-29T16:18:22-04:00"
          },
          "id": "gid://shopify/DiscountCodeFreeShipping/445378512"
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
    mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) {
      discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) {
        codeDiscountNode {
          id
          codeDiscount {
            ... on DiscountCodeFreeShipping {
              title
              startsAt
              endsAt
              context {
                ... on DiscountCustomerSegments {
                  segments {
                    id
                  }
                }
              }
              codes(first: 2) {
                nodes {
                  code
                }
              }
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }
  QUERY

  variables = {
    "freeShippingCodeDiscount": {
      "code": "FRSHP25",
      "context": {
        "customerSegments": {
          "add": [
            "gid://shopify/Segment/210588551"
          ]
        }
      },
      "startsAt": "2025-07-24T16:18:22-04:00",
      "endsAt": "2025-07-29T16:18:22-04:00"
    },
    "id": "gid://shopify/DiscountCodeFreeShipping/445378512"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) {
        discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) {
          codeDiscountNode {
            id
            codeDiscount {
              ... on DiscountCodeFreeShipping {
                title
                startsAt
                endsAt
                context {
                  ... on DiscountCustomerSegments {
                    segments {
                      id
                    }
                  }
                }
                codes(first: 2) {
                  nodes {
                    code
                  }
                }
              }
            }
          }
          userErrors {
            field
            code
            message
          }
        }
      }`,
      "variables": {
          "freeShippingCodeDiscount": {
              "code": "FRSHP25",
              "context": {
                  "customerSegments": {
                      "add": [
                          "gid://shopify/Segment/210588551"
                      ]
                  }
              },
              "startsAt": "2025-07-24T16:18:22-04:00",
              "endsAt": "2025-07-29T16:18:22-04:00"
          },
          "id": "gid://shopify/DiscountCodeFreeShipping/445378512"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "discountCodeFreeShippingUpdate": {
      "codeDiscountNode": {
        "id": "gid://shopify/DiscountCodeNode/445378512",
        "codeDiscount": {
          "title": "LMAOFREESHIPPING",
          "startsAt": "2025-07-24T20:18:22Z",
          "endsAt": "2025-07-29T20:18:22Z",
          "context": {
            "segments": [
              {
                "id": "gid://shopify/Segment/210588551"
              }
            ]
          },
          "codes": {
            "nodes": [
              {
                "code": "FRSHP25"
              }
            ]
          }
        }
      },
      "userErrors": []
    }
  }
  ```

* ### discountCodeFreeShippingUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20discountCodeFreeShippingUpdate\(%24freeShippingCodeDiscount%3A%20DiscountCodeFreeShippingInput!%2C%20%24id%3A%20ID!\)%20%7B%0A%20%20discountCodeFreeShippingUpdate\(freeShippingCodeDiscount%3A%20%24freeShippingCodeDiscount%2C%20id%3A%20%24id\)%20%7B%0A%20%20%20%20codeDiscountNode%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20codeDiscount%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20DiscountCodeFreeShipping%20%7B%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20startsAt%0A%20%20%20%20%20%20%20%20%20%20endsAt%0A%20%20%20%20%20%20%20%20%20%20minimumRequirement%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountMinimumSubtotal%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20greaterThanOrEqualToSubtotal%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20codes\(first%3A%202\)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20code%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22freeShippingCodeDiscount%22%3A%20%7B%0A%20%20%20%20%22code%22%3A%20%22FRSHP25%22%2C%0A%20%20%20%20%22minimumRequirement%22%3A%20%7B%0A%20%20%20%20%20%20%22subtotal%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22greaterThanOrEqualToSubtotal%22%3A%2025%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22startsAt%22%3A%20%222022-08-01%22%2C%0A%20%20%20%20%22endsAt%22%3A%20%222022-08-08%22%2C%0A%20%20%20%20%22title%22%3A%20%22Free%20shipping%20for%20orders%20above%20%2425%22%0A%20%20%7D%2C%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FDiscountCodeFreeShipping%2F445378512%22%0A%7D)

##### GQL

```graphql
mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) {
  discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) {
    codeDiscountNode {
      id
      codeDiscount {
        ... on DiscountCodeFreeShipping {
          title
          startsAt
          endsAt
          minimumRequirement {
            ... on DiscountMinimumSubtotal {
              greaterThanOrEqualToSubtotal {
                amount
                currencyCode
              }
            }
          }
          codes(first: 2) {
            nodes {
              code
            }
          }
        }
      }
    }
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
"query": "mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) { discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) { codeDiscountNode { id codeDiscount { ... on DiscountCodeFreeShipping { title startsAt endsAt minimumRequirement { ... on DiscountMinimumSubtotal { greaterThanOrEqualToSubtotal { amount currencyCode } } } codes(first: 2) { nodes { code } } } } } userErrors { field code message } } }",
 "variables": {
    "freeShippingCodeDiscount": {
      "code": "FRSHP25",
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": 25
        }
      },
      "startsAt": "2022-08-01",
      "endsAt": "2022-08-08",
      "title": "Free shipping for orders above $25"
    },
    "id": "gid://shopify/DiscountCodeFreeShipping/445378512"
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
  mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) {
    discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeFreeShipping {
            title
            startsAt
            endsAt
            minimumRequirement {
              ... on DiscountMinimumSubtotal {
                greaterThanOrEqualToSubtotal {
                  amount
                  currencyCode
                }
              }
            }
            codes(first: 2) {
              nodes {
                code
              }
            }
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }`,
  {
    variables: {
        "freeShippingCodeDiscount": {
            "code": "FRSHP25",
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": 25
                }
            },
            "startsAt": "2022-08-01",
            "endsAt": "2022-08-08",
            "title": "Free shipping for orders above $25"
        },
        "id": "gid://shopify/DiscountCodeFreeShipping/445378512"
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
    "query": `mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) {
      discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) {
        codeDiscountNode {
          id
          codeDiscount {
            ... on DiscountCodeFreeShipping {
              title
              startsAt
              endsAt
              minimumRequirement {
                ... on DiscountMinimumSubtotal {
                  greaterThanOrEqualToSubtotal {
                    amount
                    currencyCode
                  }
                }
              }
              codes(first: 2) {
                nodes {
                  code
                }
              }
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }`,
    "variables": {
        "freeShippingCodeDiscount": {
            "code": "FRSHP25",
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": 25
                }
            },
            "startsAt": "2022-08-01",
            "endsAt": "2022-08-08",
            "title": "Free shipping for orders above $25"
        },
        "id": "gid://shopify/DiscountCodeFreeShipping/445378512"
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
  mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) {
    discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeFreeShipping {
            title
            startsAt
            endsAt
            minimumRequirement {
              ... on DiscountMinimumSubtotal {
                greaterThanOrEqualToSubtotal {
                  amount
                  currencyCode
                }
              }
            }
            codes(first: 2) {
              nodes {
                code
              }
            }
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }
QUERY

variables = {
  "freeShippingCodeDiscount": {
    "code": "FRSHP25",
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": 25
      }
    },
    "startsAt": "2022-08-01",
    "endsAt": "2022-08-08",
    "title": "Free shipping for orders above $25"
  },
  "id": "gid://shopify/DiscountCodeFreeShipping/445378512"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "freeShippingCodeDiscount": {
    "code": "FRSHP25",
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": 25
      }
    },
    "startsAt": "2022-08-01",
    "endsAt": "2022-08-08",
    "title": "Free shipping for orders above $25"
  },
  "id": "gid://shopify/DiscountCodeFreeShipping/445378512"
}
```

## Response

JSON

```json
{
  "discountCodeFreeShippingUpdate": {
    "codeDiscountNode": {
      "id": "gid://shopify/DiscountCodeNode/445378512",
      "codeDiscount": {
        "title": "Free shipping for orders above $25",
        "startsAt": "2022-08-01T00:00:00Z",
        "endsAt": "2022-08-08T00:00:00Z",
        "minimumRequirement": {
          "greaterThanOrEqualToSubtotal": {
            "amount": "25.0",
            "currencyCode": "USD"
          }
        },
        "codes": {
          "nodes": [
            {
              "code": "FRSHP25"
            }
          ]
        }
      }
    },
    "userErrors": []
  }
}
```
