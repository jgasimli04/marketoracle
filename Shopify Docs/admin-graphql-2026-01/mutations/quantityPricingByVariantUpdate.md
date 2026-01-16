---
title: quantityPricingByVariantUpdate - GraphQL Admin
description: >-
  Updates quantity pricing on a
  [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)
  for specific
  [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
  objects. You can set fixed prices (see
  [`PriceListPrice`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice)),
  quantity rules, and quantity price breaks in a single operation.


  [`QuantityRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule)
  objects define minimum, maximum, and increment constraints for ordering.
  [`QuantityPriceBreak`](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreak)
  objects offer tiered pricing based on purchase volume.


  The mutation executes delete operations before create operations and doesn't
  allow partial updates.


  > Note: If any requested change fails, then the mutation doesn't apply any of
  the changes.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityPricingByVariantUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityPricingByVariantUpdate.md
---

# quantity​Pricing​By​Variant​Update

mutation

Requires `write_products` access scope. Also: The user must have permission to create and edit catalogs, and the shop requires B2B features enabled.

Updates quantity pricing on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for specific [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects. You can set fixed prices (see [`PriceListPrice`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice)), quantity rules, and quantity price breaks in a single operation.

[`QuantityRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule) objects define minimum, maximum, and increment constraints for ordering. [`QuantityPriceBreak`](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreak) objects offer tiered pricing based on purchase volume.

The mutation executes delete operations before create operations and doesn't allow partial updates.

***

Note

If any requested change fails, then the mutation doesn't apply any of the changes.

***

## Arguments

* input

  [Quantity​Pricing​By​Variant​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPricingByVariantUpdateInput)

  required

  The input data used to update the quantity pricing in the price list.

* price​List​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the price list for which quantity pricing will be updated.

***

## Quantity​Pricing​By​Variant​Update​Payload returns

* product​Variants

  [\[Product​Variant!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The variants for which quantity pricing was created successfully in the price list.

* user​Errors

  [\[Quantity​Pricing​By​Variant​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPricingByVariantUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Configure quantity pricing for a price list

  #### Description

  Add quantity pricing for a product variant

  #### Query

  ```graphql
  mutation quantityPricingByVariantUpdate($priceListId: ID!, $input: QuantityPricingByVariantUpdateInput!, $companyLocationId: ID!) {
    quantityPricingByVariantUpdate(priceListId: $priceListId, input: $input) {
      productVariants {
        id
        contextualPricing(context: {companyLocationId: $companyLocationId}) {
          quantityPriceBreaks(first: 1) {
            nodes {
              minimumQuantity
              price {
                amount
                currencyCode
              }
            }
          }
          quantityRule {
            minimum
            maximum
            increment
          }
        }
      }
      userErrors {
        message
        code
        field
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "priceListId": "gid://shopify/PriceList/467640202",
    "companyLocationId": "gid://shopify/CompanyLocation/441870438",
    "input": {
      "quantityPriceBreaksToAdd": [
        {
          "variantId": "gid://shopify/ProductVariant/113711323",
          "price": {
            "amount": 35,
            "currencyCode": "USD"
          },
          "minimumQuantity": 10
        }
      ],
      "quantityPriceBreaksToDelete": [],
      "quantityRulesToAdd": [
        {
          "variantId": "gid://shopify/ProductVariant/113711323",
          "minimum": 10,
          "maximum": 100,
          "increment": 5
        }
      ],
      "quantityRulesToDeleteByVariantId": [],
      "pricesToAdd": [
        {
          "price": {
            "amount": 40,
            "currencyCode": "USD"
          },
          "variantId": "gid://shopify/ProductVariant/113711323"
        }
      ],
      "pricesToDeleteByVariantId": []
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
  "query": "mutation quantityPricingByVariantUpdate($priceListId: ID!, $input: QuantityPricingByVariantUpdateInput!, $companyLocationId: ID!) { quantityPricingByVariantUpdate(priceListId: $priceListId, input: $input) { productVariants { id contextualPricing(context: {companyLocationId: $companyLocationId}) { quantityPriceBreaks(first: 1) { nodes { minimumQuantity price { amount currencyCode } } } quantityRule { minimum maximum increment } } } userErrors { message code field } } }",
   "variables": {
      "priceListId": "gid://shopify/PriceList/467640202",
      "companyLocationId": "gid://shopify/CompanyLocation/441870438",
      "input": {
        "quantityPriceBreaksToAdd": [
          {
            "variantId": "gid://shopify/ProductVariant/113711323",
            "price": {
              "amount": 35,
              "currencyCode": "USD"
            },
            "minimumQuantity": 10
          }
        ],
        "quantityPriceBreaksToDelete": [],
        "quantityRulesToAdd": [
          {
            "variantId": "gid://shopify/ProductVariant/113711323",
            "minimum": 10,
            "maximum": 100,
            "increment": 5
          }
        ],
        "quantityRulesToDeleteByVariantId": [],
        "pricesToAdd": [
          {
            "price": {
              "amount": 40,
              "currencyCode": "USD"
            },
            "variantId": "gid://shopify/ProductVariant/113711323"
          }
        ],
        "pricesToDeleteByVariantId": []
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
    mutation quantityPricingByVariantUpdate($priceListId: ID!, $input: QuantityPricingByVariantUpdateInput!, $companyLocationId: ID!) {
      quantityPricingByVariantUpdate(priceListId: $priceListId, input: $input) {
        productVariants {
          id
          contextualPricing(context: {companyLocationId: $companyLocationId}) {
            quantityPriceBreaks(first: 1) {
              nodes {
                minimumQuantity
                price {
                  amount
                  currencyCode
                }
              }
            }
            quantityRule {
              minimum
              maximum
              increment
            }
          }
        }
        userErrors {
          message
          code
          field
        }
      }
    }`,
    {
      variables: {
          "priceListId": "gid://shopify/PriceList/467640202",
          "companyLocationId": "gid://shopify/CompanyLocation/441870438",
          "input": {
              "quantityPriceBreaksToAdd": [
                  {
                      "variantId": "gid://shopify/ProductVariant/113711323",
                      "price": {
                          "amount": 35,
                          "currencyCode": "USD"
                      },
                      "minimumQuantity": 10
                  }
              ],
              "quantityPriceBreaksToDelete": [],
              "quantityRulesToAdd": [
                  {
                      "variantId": "gid://shopify/ProductVariant/113711323",
                      "minimum": 10,
                      "maximum": 100,
                      "increment": 5
                  }
              ],
              "quantityRulesToDeleteByVariantId": [],
              "pricesToAdd": [
                  {
                      "price": {
                          "amount": 40,
                          "currencyCode": "USD"
                      },
                      "variantId": "gid://shopify/ProductVariant/113711323"
                  }
              ],
              "pricesToDeleteByVariantId": []
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
    mutation quantityPricingByVariantUpdate($priceListId: ID!, $input: QuantityPricingByVariantUpdateInput!, $companyLocationId: ID!) {
      quantityPricingByVariantUpdate(priceListId: $priceListId, input: $input) {
        productVariants {
          id
          contextualPricing(context: {companyLocationId: $companyLocationId}) {
            quantityPriceBreaks(first: 1) {
              nodes {
                minimumQuantity
                price {
                  amount
                  currencyCode
                }
              }
            }
            quantityRule {
              minimum
              maximum
              increment
            }
          }
        }
        userErrors {
          message
          code
          field
        }
      }
    }
  QUERY

  variables = {
    "priceListId": "gid://shopify/PriceList/467640202",
    "companyLocationId": "gid://shopify/CompanyLocation/441870438",
    "input": {
      "quantityPriceBreaksToAdd": [
        {
          "variantId": "gid://shopify/ProductVariant/113711323",
          "price": {
            "amount": 35,
            "currencyCode": "USD"
          },
          "minimumQuantity": 10
        }
      ],
      "quantityPriceBreaksToDelete": [],
      "quantityRulesToAdd": [
        {
          "variantId": "gid://shopify/ProductVariant/113711323",
          "minimum": 10,
          "maximum": 100,
          "increment": 5
        }
      ],
      "quantityRulesToDeleteByVariantId": [],
      "pricesToAdd": [
        {
          "price": {
            "amount": 40,
            "currencyCode": "USD"
          },
          "variantId": "gid://shopify/ProductVariant/113711323"
        }
      ],
      "pricesToDeleteByVariantId": []
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation quantityPricingByVariantUpdate($priceListId: ID!, $input: QuantityPricingByVariantUpdateInput!, $companyLocationId: ID!) {
        quantityPricingByVariantUpdate(priceListId: $priceListId, input: $input) {
          productVariants {
            id
            contextualPricing(context: {companyLocationId: $companyLocationId}) {
              quantityPriceBreaks(first: 1) {
                nodes {
                  minimumQuantity
                  price {
                    amount
                    currencyCode
                  }
                }
              }
              quantityRule {
                minimum
                maximum
                increment
              }
            }
          }
          userErrors {
            message
            code
            field
          }
        }
      }`,
      "variables": {
          "priceListId": "gid://shopify/PriceList/467640202",
          "companyLocationId": "gid://shopify/CompanyLocation/441870438",
          "input": {
              "quantityPriceBreaksToAdd": [
                  {
                      "variantId": "gid://shopify/ProductVariant/113711323",
                      "price": {
                          "amount": 35,
                          "currencyCode": "USD"
                      },
                      "minimumQuantity": 10
                  }
              ],
              "quantityPriceBreaksToDelete": [],
              "quantityRulesToAdd": [
                  {
                      "variantId": "gid://shopify/ProductVariant/113711323",
                      "minimum": 10,
                      "maximum": 100,
                      "increment": 5
                  }
              ],
              "quantityRulesToDeleteByVariantId": [],
              "pricesToAdd": [
                  {
                      "price": {
                          "amount": 40,
                          "currencyCode": "USD"
                      },
                      "variantId": "gid://shopify/ProductVariant/113711323"
                  }
              ],
              "pricesToDeleteByVariantId": []
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "quantityPricingByVariantUpdate": {
      "productVariants": [
        {
          "id": "gid://shopify/ProductVariant/113711323",
          "contextualPricing": {
            "quantityPriceBreaks": {
              "nodes": [
                {
                  "minimumQuantity": 10,
                  "price": {
                    "amount": "35.0",
                    "currencyCode": "USD"
                  }
                }
              ]
            },
            "quantityRule": {
              "minimum": 10,
              "maximum": 100,
              "increment": 5
            }
          }
        }
      ],
      "userErrors": []
    }
  }
  ```

* ### Configuring invalid quantity pricing returns an error

  #### Description

  Attempt to configure conflicting quantity rules and quantity price breaks

  #### Query

  ```graphql
  mutation quantityPricingByVariantUpdate($priceListId: ID!, $input: QuantityPricingByVariantUpdateInput!, $companyLocationId: ID!) {
    quantityPricingByVariantUpdate(priceListId: $priceListId, input: $input) {
      productVariants {
        id
        contextualPricing(context: {companyLocationId: $companyLocationId}) {
          quantityPriceBreaks(first: 1) {
            nodes {
              minimumQuantity
              price {
                amount
                currencyCode
              }
            }
          }
          quantityRule {
            minimum
            maximum
            increment
          }
        }
      }
      userErrors {
        message
        code
        field
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "priceListId": "gid://shopify/PriceList/467640202",
    "companyLocationId": "gid://shopify/CompanyLocation/441870438",
    "input": {
      "quantityPriceBreaksToAdd": [
        {
          "variantId": "gid://shopify/ProductVariant/113711323",
          "price": {
            "amount": 35,
            "currencyCode": "USD"
          },
          "minimumQuantity": 5
        }
      ],
      "quantityPriceBreaksToDelete": [],
      "quantityRulesToAdd": [
        {
          "variantId": "gid://shopify/ProductVariant/113711323",
          "minimum": 10,
          "maximum": 100,
          "increment": 5
        }
      ],
      "quantityRulesToDeleteByVariantId": [],
      "pricesToAdd": [
        {
          "price": {
            "amount": 40,
            "currencyCode": "USD"
          },
          "variantId": "gid://shopify/ProductVariant/113711323"
        }
      ],
      "pricesToDeleteByVariantId": []
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
  "query": "mutation quantityPricingByVariantUpdate($priceListId: ID!, $input: QuantityPricingByVariantUpdateInput!, $companyLocationId: ID!) { quantityPricingByVariantUpdate(priceListId: $priceListId, input: $input) { productVariants { id contextualPricing(context: {companyLocationId: $companyLocationId}) { quantityPriceBreaks(first: 1) { nodes { minimumQuantity price { amount currencyCode } } } quantityRule { minimum maximum increment } } } userErrors { message code field } } }",
   "variables": {
      "priceListId": "gid://shopify/PriceList/467640202",
      "companyLocationId": "gid://shopify/CompanyLocation/441870438",
      "input": {
        "quantityPriceBreaksToAdd": [
          {
            "variantId": "gid://shopify/ProductVariant/113711323",
            "price": {
              "amount": 35,
              "currencyCode": "USD"
            },
            "minimumQuantity": 5
          }
        ],
        "quantityPriceBreaksToDelete": [],
        "quantityRulesToAdd": [
          {
            "variantId": "gid://shopify/ProductVariant/113711323",
            "minimum": 10,
            "maximum": 100,
            "increment": 5
          }
        ],
        "quantityRulesToDeleteByVariantId": [],
        "pricesToAdd": [
          {
            "price": {
              "amount": 40,
              "currencyCode": "USD"
            },
            "variantId": "gid://shopify/ProductVariant/113711323"
          }
        ],
        "pricesToDeleteByVariantId": []
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
    mutation quantityPricingByVariantUpdate($priceListId: ID!, $input: QuantityPricingByVariantUpdateInput!, $companyLocationId: ID!) {
      quantityPricingByVariantUpdate(priceListId: $priceListId, input: $input) {
        productVariants {
          id
          contextualPricing(context: {companyLocationId: $companyLocationId}) {
            quantityPriceBreaks(first: 1) {
              nodes {
                minimumQuantity
                price {
                  amount
                  currencyCode
                }
              }
            }
            quantityRule {
              minimum
              maximum
              increment
            }
          }
        }
        userErrors {
          message
          code
          field
        }
      }
    }`,
    {
      variables: {
          "priceListId": "gid://shopify/PriceList/467640202",
          "companyLocationId": "gid://shopify/CompanyLocation/441870438",
          "input": {
              "quantityPriceBreaksToAdd": [
                  {
                      "variantId": "gid://shopify/ProductVariant/113711323",
                      "price": {
                          "amount": 35,
                          "currencyCode": "USD"
                      },
                      "minimumQuantity": 5
                  }
              ],
              "quantityPriceBreaksToDelete": [],
              "quantityRulesToAdd": [
                  {
                      "variantId": "gid://shopify/ProductVariant/113711323",
                      "minimum": 10,
                      "maximum": 100,
                      "increment": 5
                  }
              ],
              "quantityRulesToDeleteByVariantId": [],
              "pricesToAdd": [
                  {
                      "price": {
                          "amount": 40,
                          "currencyCode": "USD"
                      },
                      "variantId": "gid://shopify/ProductVariant/113711323"
                  }
              ],
              "pricesToDeleteByVariantId": []
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
    mutation quantityPricingByVariantUpdate($priceListId: ID!, $input: QuantityPricingByVariantUpdateInput!, $companyLocationId: ID!) {
      quantityPricingByVariantUpdate(priceListId: $priceListId, input: $input) {
        productVariants {
          id
          contextualPricing(context: {companyLocationId: $companyLocationId}) {
            quantityPriceBreaks(first: 1) {
              nodes {
                minimumQuantity
                price {
                  amount
                  currencyCode
                }
              }
            }
            quantityRule {
              minimum
              maximum
              increment
            }
          }
        }
        userErrors {
          message
          code
          field
        }
      }
    }
  QUERY

  variables = {
    "priceListId": "gid://shopify/PriceList/467640202",
    "companyLocationId": "gid://shopify/CompanyLocation/441870438",
    "input": {
      "quantityPriceBreaksToAdd": [
        {
          "variantId": "gid://shopify/ProductVariant/113711323",
          "price": {
            "amount": 35,
            "currencyCode": "USD"
          },
          "minimumQuantity": 5
        }
      ],
      "quantityPriceBreaksToDelete": [],
      "quantityRulesToAdd": [
        {
          "variantId": "gid://shopify/ProductVariant/113711323",
          "minimum": 10,
          "maximum": 100,
          "increment": 5
        }
      ],
      "quantityRulesToDeleteByVariantId": [],
      "pricesToAdd": [
        {
          "price": {
            "amount": 40,
            "currencyCode": "USD"
          },
          "variantId": "gid://shopify/ProductVariant/113711323"
        }
      ],
      "pricesToDeleteByVariantId": []
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation quantityPricingByVariantUpdate($priceListId: ID!, $input: QuantityPricingByVariantUpdateInput!, $companyLocationId: ID!) {
        quantityPricingByVariantUpdate(priceListId: $priceListId, input: $input) {
          productVariants {
            id
            contextualPricing(context: {companyLocationId: $companyLocationId}) {
              quantityPriceBreaks(first: 1) {
                nodes {
                  minimumQuantity
                  price {
                    amount
                    currencyCode
                  }
                }
              }
              quantityRule {
                minimum
                maximum
                increment
              }
            }
          }
          userErrors {
            message
            code
            field
          }
        }
      }`,
      "variables": {
          "priceListId": "gid://shopify/PriceList/467640202",
          "companyLocationId": "gid://shopify/CompanyLocation/441870438",
          "input": {
              "quantityPriceBreaksToAdd": [
                  {
                      "variantId": "gid://shopify/ProductVariant/113711323",
                      "price": {
                          "amount": 35,
                          "currencyCode": "USD"
                      },
                      "minimumQuantity": 5
                  }
              ],
              "quantityPriceBreaksToDelete": [],
              "quantityRulesToAdd": [
                  {
                      "variantId": "gid://shopify/ProductVariant/113711323",
                      "minimum": 10,
                      "maximum": 100,
                      "increment": 5
                  }
              ],
              "quantityRulesToDeleteByVariantId": [],
              "pricesToAdd": [
                  {
                      "price": {
                          "amount": 40,
                          "currencyCode": "USD"
                      },
                      "variantId": "gid://shopify/ProductVariant/113711323"
                  }
              ],
              "pricesToDeleteByVariantId": []
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "quantityPricingByVariantUpdate": {
      "productVariants": null,
      "userErrors": [
        {
          "message": "Miniumum quantity price break must be greater than or equal to the minimum quantity rule.",
          "code": "QUANTITY_PRICE_BREAK_ADD_MIN_LOWER_THAN_QUANTITY_RULES_MIN",
          "field": [
            "input",
            "quantityPriceBreaksToAdd",
            "0"
          ]
        },
        {
          "message": "Minimum quantity rule must be less than or equal to the minimum quantity price break.",
          "code": "QUANTITY_RULE_ADD_MIN_HIGHER_THAN_QUANTITY_PRICE_BREAK_MIN",
          "field": [
            "input",
            "quantityRulesToAdd",
            "0"
          ]
        }
      ]
    }
  }
  ```

* ### quantityPricingByVariantUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20quantityPricingByVariantUpdate\(%24priceListId%3A%20ID!%2C%20%24input%3A%20QuantityPricingByVariantUpdateInput!%2C%20%24companyLocationId%3A%20ID!\)%20%7B%0A%20%20quantityPricingByVariantUpdate\(priceListId%3A%20%24priceListId%2C%20input%3A%20%24input\)%20%7B%0A%20%20%20%20productVariants%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20contextualPricing\(context%3A%20%7BcompanyLocationId%3A%20%24companyLocationId%7D\)%20%7B%0A%20%20%20%20%20%20%20%20quantityPriceBreaks\(first%3A%201\)%20%7B%0A%20%20%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20minimumQuantity%0A%20%20%20%20%20%20%20%20%20%20%20%20price%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20quantityRule%20%7B%0A%20%20%20%20%20%20%20%20%20%20minimum%0A%20%20%20%20%20%20%20%20%20%20maximum%0A%20%20%20%20%20%20%20%20%20%20increment%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22priceListId%22%3A%20%22gid%3A%2F%2Fshopify%2FPriceList%2F467640202%22%2C%0A%20%20%22companyLocationId%22%3A%20%22gid%3A%2F%2Fshopify%2FCompanyLocation%2F441870438%22%2C%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22quantityPriceBreaksToAdd%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F113711323%22%2C%0A%20%20%20%20%20%20%20%20%22price%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22amount%22%3A%2035%2C%0A%20%20%20%20%20%20%20%20%20%20%22currencyCode%22%3A%20%22USD%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%22minimumQuantity%22%3A%2010%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22quantityPriceBreaksToDelete%22%3A%20%5B%5D%2C%0A%20%20%20%20%22quantityRulesToAdd%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F113711323%22%2C%0A%20%20%20%20%20%20%20%20%22minimum%22%3A%2010%2C%0A%20%20%20%20%20%20%20%20%22maximum%22%3A%20100%2C%0A%20%20%20%20%20%20%20%20%22increment%22%3A%205%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22quantityRulesToDeleteByVariantId%22%3A%20%5B%5D%2C%0A%20%20%20%20%22pricesToAdd%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22price%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22amount%22%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%22currencyCode%22%3A%20%22USD%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F113711323%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22pricesToDeleteByVariantId%22%3A%20%5B%5D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation quantityPricingByVariantUpdate($priceListId: ID!, $input: QuantityPricingByVariantUpdateInput!, $companyLocationId: ID!) {
  quantityPricingByVariantUpdate(priceListId: $priceListId, input: $input) {
    productVariants {
      id
      contextualPricing(context: {companyLocationId: $companyLocationId}) {
        quantityPriceBreaks(first: 1) {
          nodes {
            minimumQuantity
            price {
              amount
              currencyCode
            }
          }
        }
        quantityRule {
          minimum
          maximum
          increment
        }
      }
    }
    userErrors {
      message
      code
      field
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
"query": "mutation quantityPricingByVariantUpdate($priceListId: ID!, $input: QuantityPricingByVariantUpdateInput!, $companyLocationId: ID!) { quantityPricingByVariantUpdate(priceListId: $priceListId, input: $input) { productVariants { id contextualPricing(context: {companyLocationId: $companyLocationId}) { quantityPriceBreaks(first: 1) { nodes { minimumQuantity price { amount currencyCode } } } quantityRule { minimum maximum increment } } } userErrors { message code field } } }",
 "variables": {
    "priceListId": "gid://shopify/PriceList/467640202",
    "companyLocationId": "gid://shopify/CompanyLocation/441870438",
    "input": {
      "quantityPriceBreaksToAdd": [
        {
          "variantId": "gid://shopify/ProductVariant/113711323",
          "price": {
            "amount": 35,
            "currencyCode": "USD"
          },
          "minimumQuantity": 10
        }
      ],
      "quantityPriceBreaksToDelete": [],
      "quantityRulesToAdd": [
        {
          "variantId": "gid://shopify/ProductVariant/113711323",
          "minimum": 10,
          "maximum": 100,
          "increment": 5
        }
      ],
      "quantityRulesToDeleteByVariantId": [],
      "pricesToAdd": [
        {
          "price": {
            "amount": 40,
            "currencyCode": "USD"
          },
          "variantId": "gid://shopify/ProductVariant/113711323"
        }
      ],
      "pricesToDeleteByVariantId": []
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
  mutation quantityPricingByVariantUpdate($priceListId: ID!, $input: QuantityPricingByVariantUpdateInput!, $companyLocationId: ID!) {
    quantityPricingByVariantUpdate(priceListId: $priceListId, input: $input) {
      productVariants {
        id
        contextualPricing(context: {companyLocationId: $companyLocationId}) {
          quantityPriceBreaks(first: 1) {
            nodes {
              minimumQuantity
              price {
                amount
                currencyCode
              }
            }
          }
          quantityRule {
            minimum
            maximum
            increment
          }
        }
      }
      userErrors {
        message
        code
        field
      }
    }
  }`,
  {
    variables: {
        "priceListId": "gid://shopify/PriceList/467640202",
        "companyLocationId": "gid://shopify/CompanyLocation/441870438",
        "input": {
            "quantityPriceBreaksToAdd": [
                {
                    "variantId": "gid://shopify/ProductVariant/113711323",
                    "price": {
                        "amount": 35,
                        "currencyCode": "USD"
                    },
                    "minimumQuantity": 10
                }
            ],
            "quantityPriceBreaksToDelete": [],
            "quantityRulesToAdd": [
                {
                    "variantId": "gid://shopify/ProductVariant/113711323",
                    "minimum": 10,
                    "maximum": 100,
                    "increment": 5
                }
            ],
            "quantityRulesToDeleteByVariantId": [],
            "pricesToAdd": [
                {
                    "price": {
                        "amount": 40,
                        "currencyCode": "USD"
                    },
                    "variantId": "gid://shopify/ProductVariant/113711323"
                }
            ],
            "pricesToDeleteByVariantId": []
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
    "query": `mutation quantityPricingByVariantUpdate($priceListId: ID!, $input: QuantityPricingByVariantUpdateInput!, $companyLocationId: ID!) {
      quantityPricingByVariantUpdate(priceListId: $priceListId, input: $input) {
        productVariants {
          id
          contextualPricing(context: {companyLocationId: $companyLocationId}) {
            quantityPriceBreaks(first: 1) {
              nodes {
                minimumQuantity
                price {
                  amount
                  currencyCode
                }
              }
            }
            quantityRule {
              minimum
              maximum
              increment
            }
          }
        }
        userErrors {
          message
          code
          field
        }
      }
    }`,
    "variables": {
        "priceListId": "gid://shopify/PriceList/467640202",
        "companyLocationId": "gid://shopify/CompanyLocation/441870438",
        "input": {
            "quantityPriceBreaksToAdd": [
                {
                    "variantId": "gid://shopify/ProductVariant/113711323",
                    "price": {
                        "amount": 35,
                        "currencyCode": "USD"
                    },
                    "minimumQuantity": 10
                }
            ],
            "quantityPriceBreaksToDelete": [],
            "quantityRulesToAdd": [
                {
                    "variantId": "gid://shopify/ProductVariant/113711323",
                    "minimum": 10,
                    "maximum": 100,
                    "increment": 5
                }
            ],
            "quantityRulesToDeleteByVariantId": [],
            "pricesToAdd": [
                {
                    "price": {
                        "amount": 40,
                        "currencyCode": "USD"
                    },
                    "variantId": "gid://shopify/ProductVariant/113711323"
                }
            ],
            "pricesToDeleteByVariantId": []
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
  mutation quantityPricingByVariantUpdate($priceListId: ID!, $input: QuantityPricingByVariantUpdateInput!, $companyLocationId: ID!) {
    quantityPricingByVariantUpdate(priceListId: $priceListId, input: $input) {
      productVariants {
        id
        contextualPricing(context: {companyLocationId: $companyLocationId}) {
          quantityPriceBreaks(first: 1) {
            nodes {
              minimumQuantity
              price {
                amount
                currencyCode
              }
            }
          }
          quantityRule {
            minimum
            maximum
            increment
          }
        }
      }
      userErrors {
        message
        code
        field
      }
    }
  }
QUERY

variables = {
  "priceListId": "gid://shopify/PriceList/467640202",
  "companyLocationId": "gid://shopify/CompanyLocation/441870438",
  "input": {
    "quantityPriceBreaksToAdd": [
      {
        "variantId": "gid://shopify/ProductVariant/113711323",
        "price": {
          "amount": 35,
          "currencyCode": "USD"
        },
        "minimumQuantity": 10
      }
    ],
    "quantityPriceBreaksToDelete": [],
    "quantityRulesToAdd": [
      {
        "variantId": "gid://shopify/ProductVariant/113711323",
        "minimum": 10,
        "maximum": 100,
        "increment": 5
      }
    ],
    "quantityRulesToDeleteByVariantId": [],
    "pricesToAdd": [
      {
        "price": {
          "amount": 40,
          "currencyCode": "USD"
        },
        "variantId": "gid://shopify/ProductVariant/113711323"
      }
    ],
    "pricesToDeleteByVariantId": []
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "priceListId": "gid://shopify/PriceList/467640202",
  "companyLocationId": "gid://shopify/CompanyLocation/441870438",
  "input": {
    "quantityPriceBreaksToAdd": [
      {
        "variantId": "gid://shopify/ProductVariant/113711323",
        "price": {
          "amount": 35,
          "currencyCode": "USD"
        },
        "minimumQuantity": 10
      }
    ],
    "quantityPriceBreaksToDelete": [],
    "quantityRulesToAdd": [
      {
        "variantId": "gid://shopify/ProductVariant/113711323",
        "minimum": 10,
        "maximum": 100,
        "increment": 5
      }
    ],
    "quantityRulesToDeleteByVariantId": [],
    "pricesToAdd": [
      {
        "price": {
          "amount": 40,
          "currencyCode": "USD"
        },
        "variantId": "gid://shopify/ProductVariant/113711323"
      }
    ],
    "pricesToDeleteByVariantId": []
  }
}
```

## Response

JSON

```json
{
  "quantityPricingByVariantUpdate": {
    "productVariants": [
      {
        "id": "gid://shopify/ProductVariant/113711323",
        "contextualPricing": {
          "quantityPriceBreaks": {
            "nodes": [
              {
                "minimumQuantity": 10,
                "price": {
                  "amount": "35.0",
                  "currencyCode": "USD"
                }
              }
            ]
          },
          "quantityRule": {
            "minimum": 10,
            "maximum": 100,
            "increment": 5
          }
        }
      }
    ],
    "userErrors": []
  }
}
```
