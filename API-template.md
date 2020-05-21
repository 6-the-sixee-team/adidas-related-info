## Server API

### Get product info
  * GET `/api/product/:id`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `200`

**Error Status Code:** `500`: Internal Server Error

**Error Status Code:** `400` : Bad Request

**Returns:** JSON

```json
    {
      "id": "Number",
      "name": "String",
      "price": "Number",
      "image": "String",
      "DateCreated": "Date",
      "DateModified": "Date",
      "sizesAvailable": "String",
      "availability": "Boolean",
      "category": "String"
    }
```

### Add Product
  * POST `/api/product/:id`

**Success Status Code:** `201`

**Error Status Code:** `500`: Internal Server Error

**Error Status Code:** `400` : Bad Request

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "name": "String",
      "title": "String",
      "price": "Number",
      "DateCreated": "Date",
      "image": "String",
      "sizesAvailable": "String",
      "availability": "Boolean",
      "category": "String"
    }
```


### Update product info
  * PATCH `/api/product/:id`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `204`

**Error Status Code:** `500`: Internal Server Error

**Error Status Code:** `400` : Bad Request

**Error Status Code:** `404` : ProductId does not match with any existing products 

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "name": "String",
      "title": "String",
      "DateModified": "Date",
      "price": "Number",
      "image": "String",
      "category": "String"
    }
```

### Delete product
  * DELETE `/api/product/:id`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `204`

**Error Status Code:** `400` : Bad Request

**Error Status Code:** `404` : ProductId does not match with any existing products 

**Error Status Code:** `500`: Internal Server Error

### GET top 12 products based on category
  * GET `/api/product/:productId/?category="name"&results=12`

**Path Parameters:**

  * `productId` product id
  * `?category="name"` category query param, name can be shoe category
  * `&results=12` choose the top 12 results based on popularity or date created

**Success Status Code:** `200`

**Error Status Code:** `400` : Bad Request

**Error Status Code:** `404` : productId, category does not match with any of the existing products

**Error Status Code:** `500`: Internal Server Error

**Request Body**: Expects JSON with the following keys.

```json
    {
      "productId": "Number",
      "productName": "String",
      "productCategory":"String",
      "DateCreated": "Date",
      "DateModified": "Date",
      "relatedProducts": [
          {
            "id": "Number",
            "name": "String",
            "title": "String",
            "price": "Number",
            "image": "String",
            "category": "String"   
          },
          {
            "id": "Number",
            "name": "String",
            "title": "String",
            "price": "Number",
            "image": "String",
            "category": "String"   
          }
      ]
    }
```
