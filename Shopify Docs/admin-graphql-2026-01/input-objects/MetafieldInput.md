---
title: MetafieldInput - GraphQL Admin
description: >-
  The input fields to use to create or update a metafield through a mutation on
  the owning resource.

  An alternative way to create or update a metafield is by using the

  [metafieldsSet](https://shopify.dev/api/admin-graphql/latest/mutations/metafieldsSet)
  mutation.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput.md
---

# Metafield​Input

input\_object

The input fields to use to create or update a metafield through a mutation on the owning resource. An alternative way to create or update a metafield is by using the [metafieldsSet](https://shopify.dev/api/admin-graphql/latest/mutations/metafieldsSet) mutation.

## Fields

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The unique ID of the metafield. Using `owner_id`, `namespace`, and `key` is preferred for creating and updating.

* key

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The unique identifier for a metafield within its namespace.

  Required when creating a metafield, but optional when updating. Used to help identify the metafield when updating, but can't be updated itself.

  Must be 2-64 characters long and can contain alphanumeric, hyphen, and underscore characters.

* namespace

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The container for a group of metafields that the metafield is or will be associated with. Used in tandem with `key` to lookup a metafield on a resource, preventing conflicts with other metafields with the same `key`.

  Required when creating a metafield, but optional when updating. Used to help identify the metafield when updating, but can't be updated itself.

  Must be 3-255 characters long and can contain alphanumeric, hyphen, and underscore characters.

* type

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The type of data that is stored in the metafield. Refer to the list of [supported types](https://shopify.dev/apps/metafields/types).

  Required when creating or updating a metafield without a definition.

* value

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The data stored in the metafield. Always stored as a string, regardless of the metafield's type.

***

## Input objects using this input

* [Article​Create​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput#fields-metafields)

  INPUT OBJECT

  The input fields to create an article.

* [Article​Update​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput#fields-metafields)

  INPUT OBJECT

  The input fields to update an article.

* [Blog​Create​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogCreateInput#fields-metafields)

  INPUT OBJECT

  The input fields to create a blog.

* [Blog​Update​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogUpdateInput#fields-metafields)

  INPUT OBJECT

  The input fields to update a blog.

* [Collection​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput#fields-metafields)

  INPUT OBJECT

  The input fields required to create a collection.

* [Customer​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput#fields-metafields)

  INPUT OBJECT

  The input fields and values to use when creating or updating a customer.

* [Delivery​Customization​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCustomizationInput#fields-metafields)

  INPUT OBJECT

  The input fields to create and update a delivery customization.

* [Discount​Automatic​App​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput#fields-metafields)

  INPUT OBJECT

  The input fields for creating or updating an automatic discount that's managed by an app.

  Use these input fields when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

* [Discount​Code​App​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput#fields-metafields)

  INPUT OBJECT

  The input fields for creating or updating a code discount, where the discount type is provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions).

  Use these input fields when you need advanced or custom discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

* [Draft​Order​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-metafields)

  INPUT OBJECT

  The input fields used to create or update a draft order.

* [Location​Add​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationAddInput#fields-metafields)

  INPUT OBJECT

  The input fields to use to add a location.

* [Location​Edit​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationEditInput#fields-metafields)

  INPUT OBJECT

  The input fields to use to edit a location.

* [Order​Create​Order​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-metafields)

  INPUT OBJECT

  The input fields for creating an order.

* [Order​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderInput#fields-metafields)

  INPUT OBJECT

  The input fields for specifying the information to be updated on an order when using the orderUpdate mutation.

* [Page​Create​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PageCreateInput#fields-metafields)

  INPUT OBJECT

  The input fields to create a page.

* [Page​Update​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PageUpdateInput#fields-metafields)

  INPUT OBJECT

  The input fields to update a page.

* [Payment​Customization​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentCustomizationInput#fields-metafields)

  INPUT OBJECT

  The input fields to create and update a payment customization.

* [Product​Create​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductCreateInput#fields-metafields)

  INPUT OBJECT

  The input fields required to create a product.

* [Product​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput#fields-metafields)

  INPUT OBJECT

  The input fields for creating or updating a product.

* [Product​Set​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput#fields-metafields)

  INPUT OBJECT

  The input fields required to create or update a product via ProductSet mutation.

* [Product​Update​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUpdateInput#fields-metafields)

  INPUT OBJECT

  The input fields for updating a product.

* [Product​Variant​Set​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput#fields-metafields)

  INPUT OBJECT

  The input fields for specifying a product variant to create or update.

* [Product​Variants​Bulk​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-metafields)

  INPUT OBJECT

  The input fields for specifying a product variant to create as part of a variant bulk mutation.

* [Selling​Plan​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanInput#fields-metafields)

  INPUT OBJECT

  The input fields to create or update a selling plan.

* [Validation​Create​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ValidationCreateInput#fields-metafields)

  INPUT OBJECT

  The input fields required to install a validation.

* [Validation​Update​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ValidationUpdateInput#fields-metafields)

  INPUT OBJECT

  The input fields required to update a validation.

***

## Map

### Input objects using this input

* [Article​Create​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput#fields-metafields)
* [Article​Update​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput#fields-metafields)
* [Blog​Create​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogCreateInput#fields-metafields)
* [Blog​Update​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogUpdateInput#fields-metafields)
* [Collection​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput#fields-metafields)
* [Customer​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput#fields-metafields)
* [Delivery​Customization​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCustomizationInput#fields-metafields)
* [Discount​Automatic​App​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput#fields-metafields)
* [Discount​Code​App​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput#fields-metafields)
* [Draft​Order​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-metafields)
* [Location​Add​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationAddInput#fields-metafields)
* [Location​Edit​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationEditInput#fields-metafields)
* [Order​Create​Order​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-metafields)
* [Order​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderInput#fields-metafields)
* [Page​Create​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PageCreateInput#fields-metafields)
* [Page​Update​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PageUpdateInput#fields-metafields)
* [Payment​Customization​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentCustomizationInput#fields-metafields)
* [Product​Create​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductCreateInput#fields-metafields)
* [Product​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput#fields-metafields)
* [Product​Set​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput#fields-metafields)
* [Product​Update​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUpdateInput#fields-metafields)
* [Product​Variant​Set​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput#fields-metafields)
* [Product​Variants​Bulk​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-metafields)
* [Selling​Plan​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanInput#fields-metafields)
* [Validation​Create​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ValidationCreateInput#fields-metafields)
* [Validation​Update​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ValidationUpdateInput#fields-metafields)
