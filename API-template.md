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

### GET all images to a product
  * GET `/api/product/:productId/images`

**Path Parameters:**

  * `productId` product id

**Success Status Code:** `200`

**Error Status Code:** `400` : Bad Request

**Error Status Code:** `500`: Internal Server Error

**Request Body**: Expects JSON with the following keys.

```json
    {
      "imageId": "Number",
      "imageName": "String",
      "imageTitle": "String",
      "imageURL": "String",
      "imageCreatedDate": "Date",
      "imageModifiedDate": "Date"
    }
```

### POST all images to a product
  * POST `/api/product/:productId/images`

**Path Parameters:**

  * `productId` product id

**Success Status Code:** `201`

**Error Status Code:** `400` : Bad Request

**Error Status Code:** `404` : productId does not match with any of the existing products

**Error Status Code:** `500`: Internal Server Error

**Request Body**: Expects JSON with the following keys.

```json
    {
      "imageId": "Number",
      "imageName": "String",
      "imageTitle": "String",
      "imageURL": "String",
      "imageCreatedDate": "Date",
      "imageModifiedDate": "Date"
    }
```

### DELETE all images to a product
  * DELETE `/api/product/:productId/images`

**Path Parameters:**

  * `productId` product id

**Success Status Code:** `201`

**Error Status Code:** `400` : Bad Request

**Error Status Code:** `404` : productId does not match with any of the existing products

**Error Status Code:** `500`: Internal Server Error

**Request Body**: Expects JSON with the following keys.

```json
    {
      "imageId": "Number",
      "imageName": "String",
      "imageTitle": "String",
      "imageURL": "String",
      "imageCreatedDate": "Date",
      "imageModifiedDate": "Date"
    }
```
### GET all products based on category
  * GET `/api/product/:productId/?category="name"`

**Path Parameters:**

  * `productId` product id
  * `?category="name"` category query param

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
      "relatedProducts": [
          {
            "id": "Number",
            "name": "String",
            "title": "String",
            "price": "Number",
            "image": "String"    
          },
          {
            "id": "Number",
            "name": "String",
            "title": "String",
            "price": "Number",
            "image": "String"   
          }
      ]
    }
```
### DELETE all products based on category
  * DELETE `/api/product/:productId/?category="name"`

**Path Parameters:**

  * `productId` product id
  * `?category="name"` category query param

**Success Status Code:** `201`

**Error Status Code:** `400` : Bad Request

**Error Status Code:** `404` : productId, category does not match with any of the existing products

**Error Status Code:** `500`: Internal Server Error
