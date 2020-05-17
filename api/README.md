# Keep It Later! API Endpoints

## Get all items

**Endpoint:** `http://localhost:8000/items`

**Method:** GET

**Response example:**

```json
[
  {
    "id": 4,
    "category_id": null,
    "category_name": null,
    "url": "https://www.dga.or.th/th/index.php"
  },
  {
    "id": 3,
    "category_id": "1",
    "category_name": "Personal",
    "url": "https://www.cookingchanneltv.com/"
  },
  {
    "id": 2,
    "category_id": "2",
    "category_name": "Technical",
    "url": "https://reactjs.org/"
  },
  {
    "id": 1,
    "category_id": "2",
    "category_name": "Technical",
    "url": "https://www.dataquest.io/blog/data-pipelines-tutorial/"
  }
]
```

## Filter items by category

**Endpoint:** `http://localhost:8000/items?category=2`

**Method:** GET

**Response example**

```json
[
  {
    "id": 2,
    "category_id": "2",
    "category_name": "Technical",
    "url": "https://reactjs.org/"
  },
  {
    "id": 1,
    "category_id": "2",
    "category_name": "Technical",
    "url": "https://www.dataquest.io/blog/data-pipelines-tutorial/"
  }
]
```

## Create an item

**Endpoint:** `http://localhost:8000/items`

**Method:** POST

**Request payload**:

```json
{
  "category_id": 2,
  "url": "https://www.google.com"
}
```

**Response example:**

```json
{
  "id": 5,
  "category_id": {
    "String": "",
    "Valid": false
  },
  "category_name": {
    "String": "Technical",
    "Valid": true
  },
  "url": "https://www.google.com"
}
```

## Delete an item

**Endpoint:** `http://localhost:8000/items/{id}`

**Method:** DELETE

## Get all categories

**Endpoint:** `http://localhost:8000/categories`

**Method:** GET

**Response example:**

```json
[
  {
    "id": 2,
    "name": "Personal"
  },
  {
    "id": 4,
    "name": "Knowledge"
  }
]
```

## Create a category

**Endpoint:** `http://localhost:8000/categories`

**Method:** POST

**Request payload**:

```json
{
  "name": "Cooking"
}
```

**Response example:**

```json
{
  "id": 3,
  "name": "Cooking"
}
```

## Delete a category

**Endpoint:** `http://localhost:8000/categories/{id}`

**Method:** DELETE
