---
title: draftOrderCalculate - GraphQL Admin
description: >-
  Calculates the properties of a
  [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)
  without creating it. Returns pricing information including
  [`CalculatedDraftOrderLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem)
  totals, shipping charges, applicable discounts, and tax calculations based on
  the provided
  [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)
  and
  [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)
  information.


  Use this mutation to preview total taxes and prices before creating a draft
  order. It's particularly useful when working with B2B
  [`PurchasingEntity`](https://shopify.dev/docs/api/admin-graphql/latest/unions/PurchasingEntity)
  or when you need to determine costs without committing to a draft order. Learn
  more about [calculating draft orders for B2B purchasing
  entities](https://shopify.dev/docs/apps/build/b2b/draft-orders#step-1-calculate-a-draft-order-for-a-purchasing-entity).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCalculate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCalculate.md
---

# draft​Order​Calculate

mutation

Requires `write_draft_orders` access scope.

Calculates the properties of a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) without creating it. Returns pricing information including [`CalculatedDraftOrderLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem) totals, shipping charges, applicable discounts, and tax calculations based on the provided [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) and [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) information.

Use this mutation to preview total taxes and prices before creating a draft order. It's particularly useful when working with B2B [`PurchasingEntity`](https://shopify.dev/docs/api/admin-graphql/latest/unions/PurchasingEntity) or when you need to determine costs without committing to a draft order. Learn more about [calculating draft orders for B2B purchasing entities](https://shopify.dev/docs/apps/build/b2b/draft-orders#step-1-calculate-a-draft-order-for-a-purchasing-entity).

## Arguments

* input

  [Draft​Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput)

  required

  The fields for the draft order.

***

## Draft​Order​Calculate​Payload returns

* calculated​Draft​Order

  [Calculated​Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder)

  The calculated properties for a draft order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Calculate properties of a draft order

  #### Description

  Calculate the properties of a proposed draft order

  #### Query

  ```graphql
  mutation CalculateDraftOrder($input: DraftOrderInput!) {
    draftOrderCalculate(input: $input) {
      calculatedDraftOrder {
        customer {
          id
          email
          firstName
          numberOfOrders
          defaultAddress {
            id
            firstName
            lastName
            address1
            address2
            city
            provinceCode
            zip
            countryCodeV2
          }
          taxExempt
        }
        billingAddressMatchesShippingAddress
        totalPriceSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems {
          appliedDiscount {
            amountSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            value
            valueType
            description
          }
          discountedTotalSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          product {
            id
            title
          }
          quantity
          requiresShipping
          sku
          taxable
          title
          variantTitle
          variant {
            id
          }
          weight {
            value
            unit
          }
        }
        totalTaxSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        totalDiscountsSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        shippingLine {
          id
          custom
          shippingRateHandle
          title
          originalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
        }
        presentmentCurrencyCode
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
    "input": {
      "appliedDiscount": {
        "description": "Loyalty",
        "value": 5,
        "valueType": "FIXED_AMOUNT"
      },
      "billingAddress": {
        "address1": "123 Amoebobacterieae St",
        "address2": "",
        "city": "Ottawa",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Bobsen",
        "phone": "",
        "provinceCode": "ON",
        "zip": "K2P0V6"
      },
      "customerId": "gid://shopify/Customer/544365967",
      "lineItems": [
        {
          "appliedDiscount": {
            "description": "Promo",
            "value": 5,
            "valueType": "FIXED_AMOUNT"
          },
          "customAttributes": [],
          "originalUnitPrice": 10,
          "quantity": 1,
          "requiresShipping": true,
          "sku": "draft-151",
          "taxable": true,
          "title": "151cm",
          "variantId": "gid://shopify/ProductVariant/43729076",
          "weight": {
            "unit": "KILOGRAMS",
            "value": 1
          }
        },
        {
          "appliedDiscount": null,
          "customAttributes": [],
          "originalUnitPrice": "10.0",
          "quantity": 2,
          "requiresShipping": true,
          "sku": null,
          "taxable": true,
          "title": "Spring Promo Item",
          "variantId": null,
          "weight": {
            "unit": "KILOGRAMS",
            "value": 1.2
          }
        }
      ],
      "presentmentCurrencyCode": "CAD",
      "shippingAddress": {
        "address1": "",
        "address2": "",
        "city": "",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Smith",
        "phone": "",
        "provinceCode": "AB",
        "zip": ""
      },
      "shippingLine": {
        "price": "0.0",
        "title": "Free shipping"
      },
      "taxExempt": false
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
  "query": "mutation CalculateDraftOrder($input: DraftOrderInput!) { draftOrderCalculate(input: $input) { calculatedDraftOrder { customer { id email firstName numberOfOrders defaultAddress { id firstName lastName address1 address2 city provinceCode zip countryCodeV2 } taxExempt } billingAddressMatchesShippingAddress totalPriceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } lineItems { appliedDiscount { amountSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } value valueType description } discountedTotalSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } product { id title } quantity requiresShipping sku taxable title variantTitle variant { id } weight { value unit } } totalTaxSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } totalDiscountsSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } shippingLine { id custom shippingRateHandle title originalPriceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } } presentmentCurrencyCode } userErrors { field message } } }",
   "variables": {
      "input": {
        "appliedDiscount": {
          "description": "Loyalty",
          "value": 5,
          "valueType": "FIXED_AMOUNT"
        },
        "billingAddress": {
          "address1": "123 Amoebobacterieae St",
          "address2": "",
          "city": "Ottawa",
          "company": "",
          "countryCode": "CA",
          "firstName": "Bob",
          "lastName": "Bobsen",
          "phone": "",
          "provinceCode": "ON",
          "zip": "K2P0V6"
        },
        "customerId": "gid://shopify/Customer/544365967",
        "lineItems": [
          {
            "appliedDiscount": {
              "description": "Promo",
              "value": 5,
              "valueType": "FIXED_AMOUNT"
            },
            "customAttributes": [],
            "originalUnitPrice": 10,
            "quantity": 1,
            "requiresShipping": true,
            "sku": "draft-151",
            "taxable": true,
            "title": "151cm",
            "variantId": "gid://shopify/ProductVariant/43729076",
            "weight": {
              "unit": "KILOGRAMS",
              "value": 1
            }
          },
          {
            "appliedDiscount": null,
            "customAttributes": [],
            "originalUnitPrice": "10.0",
            "quantity": 2,
            "requiresShipping": true,
            "sku": null,
            "taxable": true,
            "title": "Spring Promo Item",
            "variantId": null,
            "weight": {
              "unit": "KILOGRAMS",
              "value": 1.2
            }
          }
        ],
        "presentmentCurrencyCode": "CAD",
        "shippingAddress": {
          "address1": "",
          "address2": "",
          "city": "",
          "company": "",
          "countryCode": "CA",
          "firstName": "Bob",
          "lastName": "Smith",
          "phone": "",
          "provinceCode": "AB",
          "zip": ""
        },
        "shippingLine": {
          "price": "0.0",
          "title": "Free shipping"
        },
        "taxExempt": false
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
    mutation CalculateDraftOrder($input: DraftOrderInput!) {
      draftOrderCalculate(input: $input) {
        calculatedDraftOrder {
          customer {
            id
            email
            firstName
            numberOfOrders
            defaultAddress {
              id
              firstName
              lastName
              address1
              address2
              city
              provinceCode
              zip
              countryCodeV2
            }
            taxExempt
          }
          billingAddressMatchesShippingAddress
          totalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          lineItems {
            appliedDiscount {
              amountSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
                shopMoney {
                  amount
                  currencyCode
                }
              }
              value
              valueType
              description
            }
            discountedTotalSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            product {
              id
              title
            }
            quantity
            requiresShipping
            sku
            taxable
            title
            variantTitle
            variant {
              id
            }
            weight {
              value
              unit
            }
          }
          totalTaxSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          totalDiscountsSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          shippingLine {
            id
            custom
            shippingRateHandle
            title
            originalPriceSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
          }
          presentmentCurrencyCode
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "input": {
              "appliedDiscount": {
                  "description": "Loyalty",
                  "value": 5,
                  "valueType": "FIXED_AMOUNT"
              },
              "billingAddress": {
                  "address1": "123 Amoebobacterieae St",
                  "address2": "",
                  "city": "Ottawa",
                  "company": "",
                  "countryCode": "CA",
                  "firstName": "Bob",
                  "lastName": "Bobsen",
                  "phone": "",
                  "provinceCode": "ON",
                  "zip": "K2P0V6"
              },
              "customerId": "gid://shopify/Customer/544365967",
              "lineItems": [
                  {
                      "appliedDiscount": {
                          "description": "Promo",
                          "value": 5,
                          "valueType": "FIXED_AMOUNT"
                      },
                      "customAttributes": [],
                      "originalUnitPrice": 10,
                      "quantity": 1,
                      "requiresShipping": true,
                      "sku": "draft-151",
                      "taxable": true,
                      "title": "151cm",
                      "variantId": "gid://shopify/ProductVariant/43729076",
                      "weight": {
                          "unit": "KILOGRAMS",
                          "value": 1
                      }
                  },
                  {
                      "appliedDiscount": null,
                      "customAttributes": [],
                      "originalUnitPrice": "10.0",
                      "quantity": 2,
                      "requiresShipping": true,
                      "sku": null,
                      "taxable": true,
                      "title": "Spring Promo Item",
                      "variantId": null,
                      "weight": {
                          "unit": "KILOGRAMS",
                          "value": 1.2
                      }
                  }
              ],
              "presentmentCurrencyCode": "CAD",
              "shippingAddress": {
                  "address1": "",
                  "address2": "",
                  "city": "",
                  "company": "",
                  "countryCode": "CA",
                  "firstName": "Bob",
                  "lastName": "Smith",
                  "phone": "",
                  "provinceCode": "AB",
                  "zip": ""
              },
              "shippingLine": {
                  "price": "0.0",
                  "title": "Free shipping"
              },
              "taxExempt": false
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
    mutation CalculateDraftOrder($input: DraftOrderInput!) {
      draftOrderCalculate(input: $input) {
        calculatedDraftOrder {
          customer {
            id
            email
            firstName
            numberOfOrders
            defaultAddress {
              id
              firstName
              lastName
              address1
              address2
              city
              provinceCode
              zip
              countryCodeV2
            }
            taxExempt
          }
          billingAddressMatchesShippingAddress
          totalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          lineItems {
            appliedDiscount {
              amountSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
                shopMoney {
                  amount
                  currencyCode
                }
              }
              value
              valueType
              description
            }
            discountedTotalSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            product {
              id
              title
            }
            quantity
            requiresShipping
            sku
            taxable
            title
            variantTitle
            variant {
              id
            }
            weight {
              value
              unit
            }
          }
          totalTaxSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          totalDiscountsSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          shippingLine {
            id
            custom
            shippingRateHandle
            title
            originalPriceSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
          }
          presentmentCurrencyCode
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "appliedDiscount": {
        "description": "Loyalty",
        "value": 5,
        "valueType": "FIXED_AMOUNT"
      },
      "billingAddress": {
        "address1": "123 Amoebobacterieae St",
        "address2": "",
        "city": "Ottawa",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Bobsen",
        "phone": "",
        "provinceCode": "ON",
        "zip": "K2P0V6"
      },
      "customerId": "gid://shopify/Customer/544365967",
      "lineItems": [
        {
          "appliedDiscount": {
            "description": "Promo",
            "value": 5,
            "valueType": "FIXED_AMOUNT"
          },
          "customAttributes": [],
          "originalUnitPrice": 10,
          "quantity": 1,
          "requiresShipping": true,
          "sku": "draft-151",
          "taxable": true,
          "title": "151cm",
          "variantId": "gid://shopify/ProductVariant/43729076",
          "weight": {
            "unit": "KILOGRAMS",
            "value": 1
          }
        },
        {
          "appliedDiscount": null,
          "customAttributes": [],
          "originalUnitPrice": "10.0",
          "quantity": 2,
          "requiresShipping": true,
          "sku": null,
          "taxable": true,
          "title": "Spring Promo Item",
          "variantId": null,
          "weight": {
            "unit": "KILOGRAMS",
            "value": 1.2
          }
        }
      ],
      "presentmentCurrencyCode": "CAD",
      "shippingAddress": {
        "address1": "",
        "address2": "",
        "city": "",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Smith",
        "phone": "",
        "provinceCode": "AB",
        "zip": ""
      },
      "shippingLine": {
        "price": "0.0",
        "title": "Free shipping"
      },
      "taxExempt": false
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CalculateDraftOrder($input: DraftOrderInput!) {
        draftOrderCalculate(input: $input) {
          calculatedDraftOrder {
            customer {
              id
              email
              firstName
              numberOfOrders
              defaultAddress {
                id
                firstName
                lastName
                address1
                address2
                city
                provinceCode
                zip
                countryCodeV2
              }
              taxExempt
            }
            billingAddressMatchesShippingAddress
            totalPriceSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            lineItems {
              appliedDiscount {
                amountSet {
                  presentmentMoney {
                    amount
                    currencyCode
                  }
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
                value
                valueType
                description
              }
              discountedTotalSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
                shopMoney {
                  amount
                  currencyCode
                }
              }
              product {
                id
                title
              }
              quantity
              requiresShipping
              sku
              taxable
              title
              variantTitle
              variant {
                id
              }
              weight {
                value
                unit
              }
            }
            totalTaxSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            totalDiscountsSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            shippingLine {
              id
              custom
              shippingRateHandle
              title
              originalPriceSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
                shopMoney {
                  amount
                  currencyCode
                }
              }
            }
            presentmentCurrencyCode
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "appliedDiscount": {
                  "description": "Loyalty",
                  "value": 5,
                  "valueType": "FIXED_AMOUNT"
              },
              "billingAddress": {
                  "address1": "123 Amoebobacterieae St",
                  "address2": "",
                  "city": "Ottawa",
                  "company": "",
                  "countryCode": "CA",
                  "firstName": "Bob",
                  "lastName": "Bobsen",
                  "phone": "",
                  "provinceCode": "ON",
                  "zip": "K2P0V6"
              },
              "customerId": "gid://shopify/Customer/544365967",
              "lineItems": [
                  {
                      "appliedDiscount": {
                          "description": "Promo",
                          "value": 5,
                          "valueType": "FIXED_AMOUNT"
                      },
                      "customAttributes": [],
                      "originalUnitPrice": 10,
                      "quantity": 1,
                      "requiresShipping": true,
                      "sku": "draft-151",
                      "taxable": true,
                      "title": "151cm",
                      "variantId": "gid://shopify/ProductVariant/43729076",
                      "weight": {
                          "unit": "KILOGRAMS",
                          "value": 1
                      }
                  },
                  {
                      "appliedDiscount": null,
                      "customAttributes": [],
                      "originalUnitPrice": "10.0",
                      "quantity": 2,
                      "requiresShipping": true,
                      "sku": null,
                      "taxable": true,
                      "title": "Spring Promo Item",
                      "variantId": null,
                      "weight": {
                          "unit": "KILOGRAMS",
                          "value": 1.2
                      }
                  }
              ],
              "presentmentCurrencyCode": "CAD",
              "shippingAddress": {
                  "address1": "",
                  "address2": "",
                  "city": "",
                  "company": "",
                  "countryCode": "CA",
                  "firstName": "Bob",
                  "lastName": "Smith",
                  "phone": "",
                  "provinceCode": "AB",
                  "zip": ""
              },
              "shippingLine": {
                  "price": "0.0",
                  "title": "Free shipping"
              },
              "taxExempt": false
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "draftOrderCalculate": {
      "calculatedDraftOrder": {
        "customer": {
          "id": "gid://shopify/Customer/544365967",
          "email": "bob@example.com",
          "firstName": "Bob",
          "numberOfOrders": "25",
          "defaultAddress": {
            "id": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress",
            "firstName": "Bob",
            "lastName": "Bobsen",
            "address1": "123 Amoebobacterieae St",
            "address2": "",
            "city": "Ottawa",
            "provinceCode": "ON",
            "zip": "K2P0V6",
            "countryCodeV2": "CA"
          },
          "taxExempt": false
        },
        "billingAddressMatchesShippingAddress": false,
        "totalPriceSet": {
          "presentmentMoney": {
            "amount": "28.05",
            "currencyCode": "CAD"
          },
          "shopMoney": {
            "amount": "22.44",
            "currencyCode": "USD"
          }
        },
        "lineItems": [
          {
            "appliedDiscount": {
              "amountSet": {
                "presentmentMoney": {
                  "amount": "6.38",
                  "currencyCode": "CAD"
                },
                "shopMoney": {
                  "amount": "5.1",
                  "currencyCode": "USD"
                }
              },
              "value": 5,
              "valueType": "FIXED_AMOUNT",
              "description": "Promo"
            },
            "discountedTotalSet": {
              "presentmentMoney": {
                "amount": "6.61",
                "currencyCode": "CAD"
              },
              "shopMoney": {
                "amount": "5.29",
                "currencyCode": "USD"
              }
            },
            "product": {
              "id": "gid://shopify/Product/108828309",
              "title": "Draft"
            },
            "quantity": 1,
            "requiresShipping": true,
            "sku": "draft-151",
            "taxable": true,
            "title": "Draft",
            "variantTitle": "151cm",
            "variant": {
              "id": "gid://shopify/ProductVariant/43729076"
            },
            "weight": {
              "value": 1,
              "unit": "KILOGRAMS"
            }
          },
          {
            "appliedDiscount": null,
            "discountedTotalSet": {
              "presentmentMoney": {
                "amount": "25.98",
                "currencyCode": "CAD"
              },
              "shopMoney": {
                "amount": "20.78",
                "currencyCode": "USD"
              }
            },
            "product": null,
            "quantity": 2,
            "requiresShipping": true,
            "sku": null,
            "taxable": true,
            "title": "Spring Promo Item",
            "variantTitle": null,
            "variant": null,
            "weight": {
              "value": 1.2,
              "unit": "KILOGRAMS"
            }
          }
        ],
        "totalTaxSet": {
          "presentmentMoney": {
            "amount": "1.84",
            "currencyCode": "CAD"
          },
          "shopMoney": {
            "amount": "1.47",
            "currencyCode": "USD"
          }
        },
        "totalDiscountsSet": {
          "presentmentMoney": {
            "amount": "12.76",
            "currencyCode": "CAD"
          },
          "shopMoney": {
            "amount": "10.21",
            "currencyCode": "USD"
          }
        },
        "shippingLine": {
          "id": null,
          "custom": true,
          "shippingRateHandle": null,
          "title": "Free shipping",
          "originalPriceSet": {
            "presentmentMoney": {
              "amount": "0.0",
              "currencyCode": "CAD"
            },
            "shopMoney": {
              "amount": "0.0",
              "currencyCode": "USD"
            }
          }
        },
        "presentmentCurrencyCode": "CAD"
      },
      "userErrors": []
    }
  }
  ```

* ### Calculate properties of a draft order with markets context

  #### Description

  Calculate the properties of a proposed draft order with market specific context

  #### Query

  ```graphql
  mutation CalculateDraftOrder($input: DraftOrderInput!) {
    draftOrderCalculate(input: $input) {
      calculatedDraftOrder {
        purchasingEntity {
          ... on Customer {
            firstName
          }
        }
        totalPriceSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems {
          appliedDiscount {
            amountSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            value
            valueType
            description
          }
          discountedTotalSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          product {
            id
            title
          }
          quantity
          requiresShipping
          sku
          taxable
          title
          variantTitle
          variant {
            id
          }
          weight {
            value
            unit
          }
        }
        totalTaxSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        totalDiscountsSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        presentmentCurrencyCode
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
    "input": {
      "presentmentCurrencyCode": "CAD",
      "appliedDiscount": {
        "description": "Loyalty",
        "value": 5,
        "valueType": "FIXED_AMOUNT"
      },
      "billingAddress": {
        "address1": "123 Amoebobacterieae St",
        "address2": "",
        "city": "Ottawa",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Bobsen",
        "phone": "",
        "provinceCode": "ON",
        "zip": "K2P0V6"
      },
      "customerId": "gid://shopify/Customer/544365967",
      "lineItems": [
        {
          "appliedDiscount": {
            "description": "Promo",
            "value": 5,
            "valueType": "FIXED_AMOUNT"
          },
          "customAttributes": [],
          "quantity": 1,
          "requiresShipping": true,
          "sku": "draft-151",
          "taxable": true,
          "title": "151cm",
          "variantId": "gid://shopify/ProductVariant/43729076",
          "weight": {
            "unit": "KILOGRAMS",
            "value": 1
          }
        },
        {
          "appliedDiscount": null,
          "customAttributes": [],
          "originalUnitPrice": "10.0",
          "quantity": 2,
          "requiresShipping": true,
          "sku": null,
          "taxable": true,
          "title": "Spring Promo Item",
          "variantId": null,
          "weight": {
            "unit": "KILOGRAMS",
            "value": 1.2
          }
        }
      ],
      "shippingAddress": {
        "address1": "",
        "address2": "",
        "city": "",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Smith",
        "phone": "",
        "provinceCode": "AB",
        "zip": ""
      },
      "shippingLine": {
        "price": "0.0",
        "title": "Free shipping"
      },
      "taxExempt": false
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
  "query": "mutation CalculateDraftOrder($input: DraftOrderInput!) { draftOrderCalculate(input: $input) { calculatedDraftOrder { purchasingEntity { ... on Customer { firstName } } totalPriceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } lineItems { appliedDiscount { amountSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } value valueType description } discountedTotalSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } product { id title } quantity requiresShipping sku taxable title variantTitle variant { id } weight { value unit } } totalTaxSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } totalDiscountsSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } presentmentCurrencyCode } userErrors { field message } } }",
   "variables": {
      "input": {
        "presentmentCurrencyCode": "CAD",
        "appliedDiscount": {
          "description": "Loyalty",
          "value": 5,
          "valueType": "FIXED_AMOUNT"
        },
        "billingAddress": {
          "address1": "123 Amoebobacterieae St",
          "address2": "",
          "city": "Ottawa",
          "company": "",
          "countryCode": "CA",
          "firstName": "Bob",
          "lastName": "Bobsen",
          "phone": "",
          "provinceCode": "ON",
          "zip": "K2P0V6"
        },
        "customerId": "gid://shopify/Customer/544365967",
        "lineItems": [
          {
            "appliedDiscount": {
              "description": "Promo",
              "value": 5,
              "valueType": "FIXED_AMOUNT"
            },
            "customAttributes": [],
            "quantity": 1,
            "requiresShipping": true,
            "sku": "draft-151",
            "taxable": true,
            "title": "151cm",
            "variantId": "gid://shopify/ProductVariant/43729076",
            "weight": {
              "unit": "KILOGRAMS",
              "value": 1
            }
          },
          {
            "appliedDiscount": null,
            "customAttributes": [],
            "originalUnitPrice": "10.0",
            "quantity": 2,
            "requiresShipping": true,
            "sku": null,
            "taxable": true,
            "title": "Spring Promo Item",
            "variantId": null,
            "weight": {
              "unit": "KILOGRAMS",
              "value": 1.2
            }
          }
        ],
        "shippingAddress": {
          "address1": "",
          "address2": "",
          "city": "",
          "company": "",
          "countryCode": "CA",
          "firstName": "Bob",
          "lastName": "Smith",
          "phone": "",
          "provinceCode": "AB",
          "zip": ""
        },
        "shippingLine": {
          "price": "0.0",
          "title": "Free shipping"
        },
        "taxExempt": false
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
    mutation CalculateDraftOrder($input: DraftOrderInput!) {
      draftOrderCalculate(input: $input) {
        calculatedDraftOrder {
          purchasingEntity {
            ... on Customer {
              firstName
            }
          }
          totalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          lineItems {
            appliedDiscount {
              amountSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
                shopMoney {
                  amount
                  currencyCode
                }
              }
              value
              valueType
              description
            }
            discountedTotalSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            product {
              id
              title
            }
            quantity
            requiresShipping
            sku
            taxable
            title
            variantTitle
            variant {
              id
            }
            weight {
              value
              unit
            }
          }
          totalTaxSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          totalDiscountsSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          presentmentCurrencyCode
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "input": {
              "presentmentCurrencyCode": "CAD",
              "appliedDiscount": {
                  "description": "Loyalty",
                  "value": 5,
                  "valueType": "FIXED_AMOUNT"
              },
              "billingAddress": {
                  "address1": "123 Amoebobacterieae St",
                  "address2": "",
                  "city": "Ottawa",
                  "company": "",
                  "countryCode": "CA",
                  "firstName": "Bob",
                  "lastName": "Bobsen",
                  "phone": "",
                  "provinceCode": "ON",
                  "zip": "K2P0V6"
              },
              "customerId": "gid://shopify/Customer/544365967",
              "lineItems": [
                  {
                      "appliedDiscount": {
                          "description": "Promo",
                          "value": 5,
                          "valueType": "FIXED_AMOUNT"
                      },
                      "customAttributes": [],
                      "quantity": 1,
                      "requiresShipping": true,
                      "sku": "draft-151",
                      "taxable": true,
                      "title": "151cm",
                      "variantId": "gid://shopify/ProductVariant/43729076",
                      "weight": {
                          "unit": "KILOGRAMS",
                          "value": 1
                      }
                  },
                  {
                      "appliedDiscount": null,
                      "customAttributes": [],
                      "originalUnitPrice": "10.0",
                      "quantity": 2,
                      "requiresShipping": true,
                      "sku": null,
                      "taxable": true,
                      "title": "Spring Promo Item",
                      "variantId": null,
                      "weight": {
                          "unit": "KILOGRAMS",
                          "value": 1.2
                      }
                  }
              ],
              "shippingAddress": {
                  "address1": "",
                  "address2": "",
                  "city": "",
                  "company": "",
                  "countryCode": "CA",
                  "firstName": "Bob",
                  "lastName": "Smith",
                  "phone": "",
                  "provinceCode": "AB",
                  "zip": ""
              },
              "shippingLine": {
                  "price": "0.0",
                  "title": "Free shipping"
              },
              "taxExempt": false
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
    mutation CalculateDraftOrder($input: DraftOrderInput!) {
      draftOrderCalculate(input: $input) {
        calculatedDraftOrder {
          purchasingEntity {
            ... on Customer {
              firstName
            }
          }
          totalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          lineItems {
            appliedDiscount {
              amountSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
                shopMoney {
                  amount
                  currencyCode
                }
              }
              value
              valueType
              description
            }
            discountedTotalSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            product {
              id
              title
            }
            quantity
            requiresShipping
            sku
            taxable
            title
            variantTitle
            variant {
              id
            }
            weight {
              value
              unit
            }
          }
          totalTaxSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          totalDiscountsSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          presentmentCurrencyCode
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "presentmentCurrencyCode": "CAD",
      "appliedDiscount": {
        "description": "Loyalty",
        "value": 5,
        "valueType": "FIXED_AMOUNT"
      },
      "billingAddress": {
        "address1": "123 Amoebobacterieae St",
        "address2": "",
        "city": "Ottawa",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Bobsen",
        "phone": "",
        "provinceCode": "ON",
        "zip": "K2P0V6"
      },
      "customerId": "gid://shopify/Customer/544365967",
      "lineItems": [
        {
          "appliedDiscount": {
            "description": "Promo",
            "value": 5,
            "valueType": "FIXED_AMOUNT"
          },
          "customAttributes": [],
          "quantity": 1,
          "requiresShipping": true,
          "sku": "draft-151",
          "taxable": true,
          "title": "151cm",
          "variantId": "gid://shopify/ProductVariant/43729076",
          "weight": {
            "unit": "KILOGRAMS",
            "value": 1
          }
        },
        {
          "appliedDiscount": null,
          "customAttributes": [],
          "originalUnitPrice": "10.0",
          "quantity": 2,
          "requiresShipping": true,
          "sku": null,
          "taxable": true,
          "title": "Spring Promo Item",
          "variantId": null,
          "weight": {
            "unit": "KILOGRAMS",
            "value": 1.2
          }
        }
      ],
      "shippingAddress": {
        "address1": "",
        "address2": "",
        "city": "",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Smith",
        "phone": "",
        "provinceCode": "AB",
        "zip": ""
      },
      "shippingLine": {
        "price": "0.0",
        "title": "Free shipping"
      },
      "taxExempt": false
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CalculateDraftOrder($input: DraftOrderInput!) {
        draftOrderCalculate(input: $input) {
          calculatedDraftOrder {
            purchasingEntity {
              ... on Customer {
                firstName
              }
            }
            totalPriceSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            lineItems {
              appliedDiscount {
                amountSet {
                  presentmentMoney {
                    amount
                    currencyCode
                  }
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
                value
                valueType
                description
              }
              discountedTotalSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
                shopMoney {
                  amount
                  currencyCode
                }
              }
              product {
                id
                title
              }
              quantity
              requiresShipping
              sku
              taxable
              title
              variantTitle
              variant {
                id
              }
              weight {
                value
                unit
              }
            }
            totalTaxSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            totalDiscountsSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            presentmentCurrencyCode
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "presentmentCurrencyCode": "CAD",
              "appliedDiscount": {
                  "description": "Loyalty",
                  "value": 5,
                  "valueType": "FIXED_AMOUNT"
              },
              "billingAddress": {
                  "address1": "123 Amoebobacterieae St",
                  "address2": "",
                  "city": "Ottawa",
                  "company": "",
                  "countryCode": "CA",
                  "firstName": "Bob",
                  "lastName": "Bobsen",
                  "phone": "",
                  "provinceCode": "ON",
                  "zip": "K2P0V6"
              },
              "customerId": "gid://shopify/Customer/544365967",
              "lineItems": [
                  {
                      "appliedDiscount": {
                          "description": "Promo",
                          "value": 5,
                          "valueType": "FIXED_AMOUNT"
                      },
                      "customAttributes": [],
                      "quantity": 1,
                      "requiresShipping": true,
                      "sku": "draft-151",
                      "taxable": true,
                      "title": "151cm",
                      "variantId": "gid://shopify/ProductVariant/43729076",
                      "weight": {
                          "unit": "KILOGRAMS",
                          "value": 1
                      }
                  },
                  {
                      "appliedDiscount": null,
                      "customAttributes": [],
                      "originalUnitPrice": "10.0",
                      "quantity": 2,
                      "requiresShipping": true,
                      "sku": null,
                      "taxable": true,
                      "title": "Spring Promo Item",
                      "variantId": null,
                      "weight": {
                          "unit": "KILOGRAMS",
                          "value": 1.2
                      }
                  }
              ],
              "shippingAddress": {
                  "address1": "",
                  "address2": "",
                  "city": "",
                  "company": "",
                  "countryCode": "CA",
                  "firstName": "Bob",
                  "lastName": "Smith",
                  "phone": "",
                  "provinceCode": "AB",
                  "zip": ""
              },
              "shippingLine": {
                  "price": "0.0",
                  "title": "Free shipping"
              },
              "taxExempt": false
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "draftOrderCalculate": {
      "calculatedDraftOrder": {
        "purchasingEntity": {
          "firstName": "Bob"
        },
        "totalPriceSet": {
          "presentmentMoney": {
            "amount": "28.05",
            "currencyCode": "CAD"
          },
          "shopMoney": {
            "amount": "22.44",
            "currencyCode": "USD"
          }
        },
        "lineItems": [
          {
            "appliedDiscount": {
              "amountSet": {
                "presentmentMoney": {
                  "amount": "6.38",
                  "currencyCode": "CAD"
                },
                "shopMoney": {
                  "amount": "5.1",
                  "currencyCode": "USD"
                }
              },
              "value": 5,
              "valueType": "FIXED_AMOUNT",
              "description": "Promo"
            },
            "discountedTotalSet": {
              "presentmentMoney": {
                "amount": "6.61",
                "currencyCode": "CAD"
              },
              "shopMoney": {
                "amount": "5.29",
                "currencyCode": "USD"
              }
            },
            "product": {
              "id": "gid://shopify/Product/108828309",
              "title": "Draft"
            },
            "quantity": 1,
            "requiresShipping": true,
            "sku": "draft-151",
            "taxable": true,
            "title": "Draft",
            "variantTitle": "151cm",
            "variant": {
              "id": "gid://shopify/ProductVariant/43729076"
            },
            "weight": {
              "value": 1,
              "unit": "KILOGRAMS"
            }
          },
          {
            "appliedDiscount": null,
            "discountedTotalSet": {
              "presentmentMoney": {
                "amount": "25.98",
                "currencyCode": "CAD"
              },
              "shopMoney": {
                "amount": "20.78",
                "currencyCode": "USD"
              }
            },
            "product": null,
            "quantity": 2,
            "requiresShipping": true,
            "sku": null,
            "taxable": true,
            "title": "Spring Promo Item",
            "variantTitle": null,
            "variant": null,
            "weight": {
              "value": 1.2,
              "unit": "KILOGRAMS"
            }
          }
        ],
        "totalTaxSet": {
          "presentmentMoney": {
            "amount": "1.84",
            "currencyCode": "CAD"
          },
          "shopMoney": {
            "amount": "1.47",
            "currencyCode": "USD"
          }
        },
        "totalDiscountsSet": {
          "presentmentMoney": {
            "amount": "12.76",
            "currencyCode": "CAD"
          },
          "shopMoney": {
            "amount": "10.21",
            "currencyCode": "USD"
          }
        },
        "presentmentCurrencyCode": "CAD"
      },
      "userErrors": []
    }
  }
  ```

* ### Calculating a draft order with no line items

  #### Description

  Calculating a draft order with no line items returns a user error

  #### Query

  ```graphql
  mutation CalculateDraftOrder($input: DraftOrderInput!) {
    draftOrderCalculate(input: $input) {
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
    "input": {
      "appliedDiscount": {
        "description": "Loyalty",
        "value": 5,
        "valueType": "FIXED_AMOUNT"
      },
      "billingAddress": {
        "address1": "",
        "address2": "",
        "city": "",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Smith",
        "phone": "",
        "provinceCode": "AB",
        "zip": ""
      },
      "lineItems": [],
      "presentmentCurrencyCode": "CAD",
      "shippingAddress": {
        "address1": "",
        "address2": "",
        "city": "",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Smith",
        "phone": "",
        "provinceCode": "AB",
        "zip": ""
      },
      "shippingLine": {
        "price": "0.0",
        "title": "Free shipping"
      },
      "taxExempt": false
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
  "query": "mutation CalculateDraftOrder($input: DraftOrderInput!) { draftOrderCalculate(input: $input) { userErrors { field message } } }",
   "variables": {
      "input": {
        "appliedDiscount": {
          "description": "Loyalty",
          "value": 5,
          "valueType": "FIXED_AMOUNT"
        },
        "billingAddress": {
          "address1": "",
          "address2": "",
          "city": "",
          "company": "",
          "countryCode": "CA",
          "firstName": "Bob",
          "lastName": "Smith",
          "phone": "",
          "provinceCode": "AB",
          "zip": ""
        },
        "lineItems": [],
        "presentmentCurrencyCode": "CAD",
        "shippingAddress": {
          "address1": "",
          "address2": "",
          "city": "",
          "company": "",
          "countryCode": "CA",
          "firstName": "Bob",
          "lastName": "Smith",
          "phone": "",
          "provinceCode": "AB",
          "zip": ""
        },
        "shippingLine": {
          "price": "0.0",
          "title": "Free shipping"
        },
        "taxExempt": false
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
    mutation CalculateDraftOrder($input: DraftOrderInput!) {
      draftOrderCalculate(input: $input) {
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "input": {
              "appliedDiscount": {
                  "description": "Loyalty",
                  "value": 5,
                  "valueType": "FIXED_AMOUNT"
              },
              "billingAddress": {
                  "address1": "",
                  "address2": "",
                  "city": "",
                  "company": "",
                  "countryCode": "CA",
                  "firstName": "Bob",
                  "lastName": "Smith",
                  "phone": "",
                  "provinceCode": "AB",
                  "zip": ""
              },
              "lineItems": [],
              "presentmentCurrencyCode": "CAD",
              "shippingAddress": {
                  "address1": "",
                  "address2": "",
                  "city": "",
                  "company": "",
                  "countryCode": "CA",
                  "firstName": "Bob",
                  "lastName": "Smith",
                  "phone": "",
                  "provinceCode": "AB",
                  "zip": ""
              },
              "shippingLine": {
                  "price": "0.0",
                  "title": "Free shipping"
              },
              "taxExempt": false
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
    mutation CalculateDraftOrder($input: DraftOrderInput!) {
      draftOrderCalculate(input: $input) {
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "appliedDiscount": {
        "description": "Loyalty",
        "value": 5,
        "valueType": "FIXED_AMOUNT"
      },
      "billingAddress": {
        "address1": "",
        "address2": "",
        "city": "",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Smith",
        "phone": "",
        "provinceCode": "AB",
        "zip": ""
      },
      "lineItems": [],
      "presentmentCurrencyCode": "CAD",
      "shippingAddress": {
        "address1": "",
        "address2": "",
        "city": "",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Smith",
        "phone": "",
        "provinceCode": "AB",
        "zip": ""
      },
      "shippingLine": {
        "price": "0.0",
        "title": "Free shipping"
      },
      "taxExempt": false
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CalculateDraftOrder($input: DraftOrderInput!) {
        draftOrderCalculate(input: $input) {
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "appliedDiscount": {
                  "description": "Loyalty",
                  "value": 5,
                  "valueType": "FIXED_AMOUNT"
              },
              "billingAddress": {
                  "address1": "",
                  "address2": "",
                  "city": "",
                  "company": "",
                  "countryCode": "CA",
                  "firstName": "Bob",
                  "lastName": "Smith",
                  "phone": "",
                  "provinceCode": "AB",
                  "zip": ""
              },
              "lineItems": [],
              "presentmentCurrencyCode": "CAD",
              "shippingAddress": {
                  "address1": "",
                  "address2": "",
                  "city": "",
                  "company": "",
                  "countryCode": "CA",
                  "firstName": "Bob",
                  "lastName": "Smith",
                  "phone": "",
                  "provinceCode": "AB",
                  "zip": ""
              },
              "shippingLine": {
                  "price": "0.0",
                  "title": "Free shipping"
              },
              "taxExempt": false
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "draftOrderCalculate": {
      "userErrors": [
        {
          "field": null,
          "message": "Add at least 1 product"
        }
      ]
    }
  }
  ```

* ### draftOrderCalculate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CalculateDraftOrder\(%24input%3A%20DraftOrderInput!\)%20%7B%0A%20%20draftOrderCalculate\(input%3A%20%24input\)%20%7B%0A%20%20%20%20calculatedDraftOrder%20%7B%0A%20%20%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20%20%20numberOfOrders%0A%20%20%20%20%20%20%20%20defaultAddress%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20%20%20%20%20lastName%0A%20%20%20%20%20%20%20%20%20%20address1%0A%20%20%20%20%20%20%20%20%20%20address2%0A%20%20%20%20%20%20%20%20%20%20city%0A%20%20%20%20%20%20%20%20%20%20provinceCode%0A%20%20%20%20%20%20%20%20%20%20zip%0A%20%20%20%20%20%20%20%20%20%20countryCodeV2%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20taxExempt%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20billingAddressMatchesShippingAddress%0A%20%20%20%20%20%20totalPriceSet%20%7B%0A%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20lineItems%20%7B%0A%20%20%20%20%20%20%20%20appliedDiscount%20%7B%0A%20%20%20%20%20%20%20%20%20%20amountSet%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20valueType%0A%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20discountedTotalSet%20%7B%0A%20%20%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20product%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20quantity%0A%20%20%20%20%20%20%20%20requiresShipping%0A%20%20%20%20%20%20%20%20sku%0A%20%20%20%20%20%20%20%20taxable%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20variantTitle%0A%20%20%20%20%20%20%20%20variant%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20weight%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20unit%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20totalTaxSet%20%7B%0A%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20totalDiscountsSet%20%7B%0A%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20shippingLine%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20custom%0A%20%20%20%20%20%20%20%20shippingRateHandle%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20originalPriceSet%20%7B%0A%20%20%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20presentmentCurrencyCode%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22appliedDiscount%22%3A%20%7B%0A%20%20%20%20%20%20%22description%22%3A%20%22Loyalty%22%2C%0A%20%20%20%20%20%20%22value%22%3A%205%2C%0A%20%20%20%20%20%20%22valueType%22%3A%20%22FIXED_AMOUNT%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22billingAddress%22%3A%20%7B%0A%20%20%20%20%20%20%22address1%22%3A%20%22123%20Amoebobacterieae%20St%22%2C%0A%20%20%20%20%20%20%22address2%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22city%22%3A%20%22Ottawa%22%2C%0A%20%20%20%20%20%20%22company%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22countryCode%22%3A%20%22CA%22%2C%0A%20%20%20%20%20%20%22firstName%22%3A%20%22Bob%22%2C%0A%20%20%20%20%20%20%22lastName%22%3A%20%22Bobsen%22%2C%0A%20%20%20%20%20%20%22phone%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22provinceCode%22%3A%20%22ON%22%2C%0A%20%20%20%20%20%20%22zip%22%3A%20%22K2P0V6%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22customerId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%2C%0A%20%20%20%20%22lineItems%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22appliedDiscount%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22description%22%3A%20%22Promo%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%205%2C%0A%20%20%20%20%20%20%20%20%20%20%22valueType%22%3A%20%22FIXED_AMOUNT%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%22customAttributes%22%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20%22originalUnitPrice%22%3A%2010%2C%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%201%2C%0A%20%20%20%20%20%20%20%20%22requiresShipping%22%3A%20true%2C%0A%20%20%20%20%20%20%20%20%22sku%22%3A%20%22draft-151%22%2C%0A%20%20%20%20%20%20%20%20%22taxable%22%3A%20true%2C%0A%20%20%20%20%20%20%20%20%22title%22%3A%20%22151cm%22%2C%0A%20%20%20%20%20%20%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F43729076%22%2C%0A%20%20%20%20%20%20%20%20%22weight%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22unit%22%3A%20%22KILOGRAMS%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%201%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22appliedDiscount%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%22customAttributes%22%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20%22originalUnitPrice%22%3A%20%2210.0%22%2C%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%202%2C%0A%20%20%20%20%20%20%20%20%22requiresShipping%22%3A%20true%2C%0A%20%20%20%20%20%20%20%20%22sku%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%22taxable%22%3A%20true%2C%0A%20%20%20%20%20%20%20%20%22title%22%3A%20%22Spring%20Promo%20Item%22%2C%0A%20%20%20%20%20%20%20%20%22variantId%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%22weight%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22unit%22%3A%20%22KILOGRAMS%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%201.2%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22presentmentCurrencyCode%22%3A%20%22CAD%22%2C%0A%20%20%20%20%22shippingAddress%22%3A%20%7B%0A%20%20%20%20%20%20%22address1%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22address2%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22city%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22company%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22countryCode%22%3A%20%22CA%22%2C%0A%20%20%20%20%20%20%22firstName%22%3A%20%22Bob%22%2C%0A%20%20%20%20%20%20%22lastName%22%3A%20%22Smith%22%2C%0A%20%20%20%20%20%20%22phone%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22provinceCode%22%3A%20%22AB%22%2C%0A%20%20%20%20%20%20%22zip%22%3A%20%22%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22shippingLine%22%3A%20%7B%0A%20%20%20%20%20%20%22price%22%3A%20%220.0%22%2C%0A%20%20%20%20%20%20%22title%22%3A%20%22Free%20shipping%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22taxExempt%22%3A%20false%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation CalculateDraftOrder($input: DraftOrderInput!) {
  draftOrderCalculate(input: $input) {
    calculatedDraftOrder {
      customer {
        id
        email
        firstName
        numberOfOrders
        defaultAddress {
          id
          firstName
          lastName
          address1
          address2
          city
          provinceCode
          zip
          countryCodeV2
        }
        taxExempt
      }
      billingAddressMatchesShippingAddress
      totalPriceSet {
        presentmentMoney {
          amount
          currencyCode
        }
        shopMoney {
          amount
          currencyCode
        }
      }
      lineItems {
        appliedDiscount {
          amountSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          value
          valueType
          description
        }
        discountedTotalSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        product {
          id
          title
        }
        quantity
        requiresShipping
        sku
        taxable
        title
        variantTitle
        variant {
          id
        }
        weight {
          value
          unit
        }
      }
      totalTaxSet {
        presentmentMoney {
          amount
          currencyCode
        }
        shopMoney {
          amount
          currencyCode
        }
      }
      totalDiscountsSet {
        presentmentMoney {
          amount
          currencyCode
        }
        shopMoney {
          amount
          currencyCode
        }
      }
      shippingLine {
        id
        custom
        shippingRateHandle
        title
        originalPriceSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
      }
      presentmentCurrencyCode
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
"query": "mutation CalculateDraftOrder($input: DraftOrderInput!) { draftOrderCalculate(input: $input) { calculatedDraftOrder { customer { id email firstName numberOfOrders defaultAddress { id firstName lastName address1 address2 city provinceCode zip countryCodeV2 } taxExempt } billingAddressMatchesShippingAddress totalPriceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } lineItems { appliedDiscount { amountSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } value valueType description } discountedTotalSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } product { id title } quantity requiresShipping sku taxable title variantTitle variant { id } weight { value unit } } totalTaxSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } totalDiscountsSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } shippingLine { id custom shippingRateHandle title originalPriceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } } presentmentCurrencyCode } userErrors { field message } } }",
 "variables": {
    "input": {
      "appliedDiscount": {
        "description": "Loyalty",
        "value": 5,
        "valueType": "FIXED_AMOUNT"
      },
      "billingAddress": {
        "address1": "123 Amoebobacterieae St",
        "address2": "",
        "city": "Ottawa",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Bobsen",
        "phone": "",
        "provinceCode": "ON",
        "zip": "K2P0V6"
      },
      "customerId": "gid://shopify/Customer/544365967",
      "lineItems": [
        {
          "appliedDiscount": {
            "description": "Promo",
            "value": 5,
            "valueType": "FIXED_AMOUNT"
          },
          "customAttributes": [],
          "originalUnitPrice": 10,
          "quantity": 1,
          "requiresShipping": true,
          "sku": "draft-151",
          "taxable": true,
          "title": "151cm",
          "variantId": "gid://shopify/ProductVariant/43729076",
          "weight": {
            "unit": "KILOGRAMS",
            "value": 1
          }
        },
        {
          "appliedDiscount": null,
          "customAttributes": [],
          "originalUnitPrice": "10.0",
          "quantity": 2,
          "requiresShipping": true,
          "sku": null,
          "taxable": true,
          "title": "Spring Promo Item",
          "variantId": null,
          "weight": {
            "unit": "KILOGRAMS",
            "value": 1.2
          }
        }
      ],
      "presentmentCurrencyCode": "CAD",
      "shippingAddress": {
        "address1": "",
        "address2": "",
        "city": "",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Smith",
        "phone": "",
        "provinceCode": "AB",
        "zip": ""
      },
      "shippingLine": {
        "price": "0.0",
        "title": "Free shipping"
      },
      "taxExempt": false
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
  mutation CalculateDraftOrder($input: DraftOrderInput!) {
    draftOrderCalculate(input: $input) {
      calculatedDraftOrder {
        customer {
          id
          email
          firstName
          numberOfOrders
          defaultAddress {
            id
            firstName
            lastName
            address1
            address2
            city
            provinceCode
            zip
            countryCodeV2
          }
          taxExempt
        }
        billingAddressMatchesShippingAddress
        totalPriceSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems {
          appliedDiscount {
            amountSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            value
            valueType
            description
          }
          discountedTotalSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          product {
            id
            title
          }
          quantity
          requiresShipping
          sku
          taxable
          title
          variantTitle
          variant {
            id
          }
          weight {
            value
            unit
          }
        }
        totalTaxSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        totalDiscountsSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        shippingLine {
          id
          custom
          shippingRateHandle
          title
          originalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
        }
        presentmentCurrencyCode
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "appliedDiscount": {
                "description": "Loyalty",
                "value": 5,
                "valueType": "FIXED_AMOUNT"
            },
            "billingAddress": {
                "address1": "123 Amoebobacterieae St",
                "address2": "",
                "city": "Ottawa",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Bobsen",
                "phone": "",
                "provinceCode": "ON",
                "zip": "K2P0V6"
            },
            "customerId": "gid://shopify/Customer/544365967",
            "lineItems": [
                {
                    "appliedDiscount": {
                        "description": "Promo",
                        "value": 5,
                        "valueType": "FIXED_AMOUNT"
                    },
                    "customAttributes": [],
                    "originalUnitPrice": 10,
                    "quantity": 1,
                    "requiresShipping": true,
                    "sku": "draft-151",
                    "taxable": true,
                    "title": "151cm",
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "weight": {
                        "unit": "KILOGRAMS",
                        "value": 1
                    }
                },
                {
                    "appliedDiscount": null,
                    "customAttributes": [],
                    "originalUnitPrice": "10.0",
                    "quantity": 2,
                    "requiresShipping": true,
                    "sku": null,
                    "taxable": true,
                    "title": "Spring Promo Item",
                    "variantId": null,
                    "weight": {
                        "unit": "KILOGRAMS",
                        "value": 1.2
                    }
                }
            ],
            "presentmentCurrencyCode": "CAD",
            "shippingAddress": {
                "address1": "",
                "address2": "",
                "city": "",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Smith",
                "phone": "",
                "provinceCode": "AB",
                "zip": ""
            },
            "shippingLine": {
                "price": "0.0",
                "title": "Free shipping"
            },
            "taxExempt": false
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
    "query": `mutation CalculateDraftOrder($input: DraftOrderInput!) {
      draftOrderCalculate(input: $input) {
        calculatedDraftOrder {
          customer {
            id
            email
            firstName
            numberOfOrders
            defaultAddress {
              id
              firstName
              lastName
              address1
              address2
              city
              provinceCode
              zip
              countryCodeV2
            }
            taxExempt
          }
          billingAddressMatchesShippingAddress
          totalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          lineItems {
            appliedDiscount {
              amountSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
                shopMoney {
                  amount
                  currencyCode
                }
              }
              value
              valueType
              description
            }
            discountedTotalSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            product {
              id
              title
            }
            quantity
            requiresShipping
            sku
            taxable
            title
            variantTitle
            variant {
              id
            }
            weight {
              value
              unit
            }
          }
          totalTaxSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          totalDiscountsSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          shippingLine {
            id
            custom
            shippingRateHandle
            title
            originalPriceSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
          }
          presentmentCurrencyCode
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "appliedDiscount": {
                "description": "Loyalty",
                "value": 5,
                "valueType": "FIXED_AMOUNT"
            },
            "billingAddress": {
                "address1": "123 Amoebobacterieae St",
                "address2": "",
                "city": "Ottawa",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Bobsen",
                "phone": "",
                "provinceCode": "ON",
                "zip": "K2P0V6"
            },
            "customerId": "gid://shopify/Customer/544365967",
            "lineItems": [
                {
                    "appliedDiscount": {
                        "description": "Promo",
                        "value": 5,
                        "valueType": "FIXED_AMOUNT"
                    },
                    "customAttributes": [],
                    "originalUnitPrice": 10,
                    "quantity": 1,
                    "requiresShipping": true,
                    "sku": "draft-151",
                    "taxable": true,
                    "title": "151cm",
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "weight": {
                        "unit": "KILOGRAMS",
                        "value": 1
                    }
                },
                {
                    "appliedDiscount": null,
                    "customAttributes": [],
                    "originalUnitPrice": "10.0",
                    "quantity": 2,
                    "requiresShipping": true,
                    "sku": null,
                    "taxable": true,
                    "title": "Spring Promo Item",
                    "variantId": null,
                    "weight": {
                        "unit": "KILOGRAMS",
                        "value": 1.2
                    }
                }
            ],
            "presentmentCurrencyCode": "CAD",
            "shippingAddress": {
                "address1": "",
                "address2": "",
                "city": "",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Smith",
                "phone": "",
                "provinceCode": "AB",
                "zip": ""
            },
            "shippingLine": {
                "price": "0.0",
                "title": "Free shipping"
            },
            "taxExempt": false
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
  mutation CalculateDraftOrder($input: DraftOrderInput!) {
    draftOrderCalculate(input: $input) {
      calculatedDraftOrder {
        customer {
          id
          email
          firstName
          numberOfOrders
          defaultAddress {
            id
            firstName
            lastName
            address1
            address2
            city
            provinceCode
            zip
            countryCodeV2
          }
          taxExempt
        }
        billingAddressMatchesShippingAddress
        totalPriceSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems {
          appliedDiscount {
            amountSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            value
            valueType
            description
          }
          discountedTotalSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          product {
            id
            title
          }
          quantity
          requiresShipping
          sku
          taxable
          title
          variantTitle
          variant {
            id
          }
          weight {
            value
            unit
          }
        }
        totalTaxSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        totalDiscountsSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        shippingLine {
          id
          custom
          shippingRateHandle
          title
          originalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
        }
        presentmentCurrencyCode
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "appliedDiscount": {
      "description": "Loyalty",
      "value": 5,
      "valueType": "FIXED_AMOUNT"
    },
    "billingAddress": {
      "address1": "123 Amoebobacterieae St",
      "address2": "",
      "city": "Ottawa",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Bobsen",
      "phone": "",
      "provinceCode": "ON",
      "zip": "K2P0V6"
    },
    "customerId": "gid://shopify/Customer/544365967",
    "lineItems": [
      {
        "appliedDiscount": {
          "description": "Promo",
          "value": 5,
          "valueType": "FIXED_AMOUNT"
        },
        "customAttributes": [],
        "originalUnitPrice": 10,
        "quantity": 1,
        "requiresShipping": true,
        "sku": "draft-151",
        "taxable": true,
        "title": "151cm",
        "variantId": "gid://shopify/ProductVariant/43729076",
        "weight": {
          "unit": "KILOGRAMS",
          "value": 1
        }
      },
      {
        "appliedDiscount": null,
        "customAttributes": [],
        "originalUnitPrice": "10.0",
        "quantity": 2,
        "requiresShipping": true,
        "sku": null,
        "taxable": true,
        "title": "Spring Promo Item",
        "variantId": null,
        "weight": {
          "unit": "KILOGRAMS",
          "value": 1.2
        }
      }
    ],
    "presentmentCurrencyCode": "CAD",
    "shippingAddress": {
      "address1": "",
      "address2": "",
      "city": "",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Smith",
      "phone": "",
      "provinceCode": "AB",
      "zip": ""
    },
    "shippingLine": {
      "price": "0.0",
      "title": "Free shipping"
    },
    "taxExempt": false
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "input": {
    "appliedDiscount": {
      "description": "Loyalty",
      "value": 5,
      "valueType": "FIXED_AMOUNT"
    },
    "billingAddress": {
      "address1": "123 Amoebobacterieae St",
      "address2": "",
      "city": "Ottawa",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Bobsen",
      "phone": "",
      "provinceCode": "ON",
      "zip": "K2P0V6"
    },
    "customerId": "gid://shopify/Customer/544365967",
    "lineItems": [
      {
        "appliedDiscount": {
          "description": "Promo",
          "value": 5,
          "valueType": "FIXED_AMOUNT"
        },
        "customAttributes": [],
        "originalUnitPrice": 10,
        "quantity": 1,
        "requiresShipping": true,
        "sku": "draft-151",
        "taxable": true,
        "title": "151cm",
        "variantId": "gid://shopify/ProductVariant/43729076",
        "weight": {
          "unit": "KILOGRAMS",
          "value": 1
        }
      },
      {
        "appliedDiscount": null,
        "customAttributes": [],
        "originalUnitPrice": "10.0",
        "quantity": 2,
        "requiresShipping": true,
        "sku": null,
        "taxable": true,
        "title": "Spring Promo Item",
        "variantId": null,
        "weight": {
          "unit": "KILOGRAMS",
          "value": 1.2
        }
      }
    ],
    "presentmentCurrencyCode": "CAD",
    "shippingAddress": {
      "address1": "",
      "address2": "",
      "city": "",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Smith",
      "phone": "",
      "provinceCode": "AB",
      "zip": ""
    },
    "shippingLine": {
      "price": "0.0",
      "title": "Free shipping"
    },
    "taxExempt": false
  }
}
```

## Response

JSON

```json
{
  "draftOrderCalculate": {
    "calculatedDraftOrder": {
      "customer": {
        "id": "gid://shopify/Customer/544365967",
        "email": "bob@example.com",
        "firstName": "Bob",
        "numberOfOrders": "25",
        "defaultAddress": {
          "id": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress",
          "firstName": "Bob",
          "lastName": "Bobsen",
          "address1": "123 Amoebobacterieae St",
          "address2": "",
          "city": "Ottawa",
          "provinceCode": "ON",
          "zip": "K2P0V6",
          "countryCodeV2": "CA"
        },
        "taxExempt": false
      },
      "billingAddressMatchesShippingAddress": false,
      "totalPriceSet": {
        "presentmentMoney": {
          "amount": "28.05",
          "currencyCode": "CAD"
        },
        "shopMoney": {
          "amount": "22.44",
          "currencyCode": "USD"
        }
      },
      "lineItems": [
        {
          "appliedDiscount": {
            "amountSet": {
```
