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
      "title": "String",
      "price": "Number",
      "image": "String",
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
      "price": "Number",
      "image": "String"
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

