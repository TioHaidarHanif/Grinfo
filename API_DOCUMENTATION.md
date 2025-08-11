# API Documentation

This documentation describes the available API endpoints for the Grinfo BE project, based on the controllers in `app/Http/Controllers/Api` and the routes defined in `routes/api.php`.

---

## Authentication

### Register
- **POST** `/api/register`
- **Controller:** AuthController@register
- **Description:** Register a new user.
**Request JSON:**
```json
{
  "name": "string", // required
  "username": "string", // required, unique
  "email": "string", // required, unique, email
  "password": "string", // required, min:6
  "interests": ["string"] // optional, array
}
```
**Response JSON:**
```json
{
  "user": {
    "id": 1,
    "name": "string",
    "username": "string",
    "email": "string",
    "interests": ["string"]
    // ...other fields
  },
  "token": "string"
}
```

### Login
- **POST** `/api/login`
- **Controller:** AuthController@login
- **Description:** Login and receive an authentication token.
**Request JSON:**
```json
{
  "email": "string", // required, email
  "password": "string" // required
}
```
**Response JSON:**
```json
{
  "user": {
    "id": 1,
    "name": "string",
    "username": "string",
    "email": "string",
    "interests": ["string"]
    // ...other fields
  },
  "token": "string"
}
```

### Logout
- **POST** `/api/logout`
- **Controller:** AuthController@logout
- **Middleware:** auth:sanctum
- **Description:** Logout the authenticated user.
**Response JSON:**
```json
{
  "message": "Logged out"
}
```

---

## Profile

### Get Profile
- **GET** `/api/profile`
- **Controller:** AuthController@profile
- **Middleware:** auth:sanctum
**Response JSON:**
```json
{
  "user": {
    "id": 1,
    "name": "string",
    "username": "string",
    "email": "string",
    "interests": ["string"]
    // ...other fields
  }
}
```

### Update Profile
- **PUT** `/api/profile`
- **Controller:** AuthController@update
- **Middleware:** auth:sanctum
**Request JSON:**
```json
{
  "name": "string", // optional
  "username": "string", // optional, unique
  "email": "string", // optional, unique, email
  "password": "string" // optional, min:6
}
```
**Response JSON:**
```json
{
  "user": {
    "id": 1,
    "name": "string",
    "username": "string",
    "email": "string",
    "interests": ["string"]
    // ...other fields
  }
}
```

---

## Article

### Get All Articles
- **GET** `/api/articles`
- **Controller:** ArticleController@index
- **Middleware:** auth:sanctum
**Response JSON:**
```json
{
	"articles": [
		{
			"id": 1,
			"user_id": 1,
			"title": "string",
			"content": "string",
			"image_path": "string|null",
			"tags": ["string"],
			"user": {
				"id": 1,
				"name": "string"
				// ...user fields
			}
			// ...other fields
		}
	]
}
```

### Create Article
- **POST** `/api/articles`
- **Controller:** ArticleController@store
- **Middleware:** auth:sanctum
**Request JSON:**
```json
{
  "title": "string", // required
  "content": "string", // required
  "image_path": "string", // optional
  "tags": ["string"] // optional, array
}
```
**Response JSON:**
```json
{
  "id": 1,
  "user_id": 1,
  "title": "string",
  "content": "string",
  "image_path": "string|null",
  "tags": ["string"]
  // ...other fields
}
```

### Get Article by ID
- **GET** `/api/articles/{id}`
- **Controller:** ArticleController@show
- **Middleware:** auth:sanctum, record.view
**Response JSON:**
```json
{
  "id": 1,
  "user_id": 1,
  "title": "string",
  "content": "string",
  "image_path": "string|null",
  "tags": ["string"],
  "user": {
    "id": 1,
    "name": "string"
    // ...user fields
  }
  // ...other fields
}
```

### Update Article
- **PUT** `/api/articles/{id}`
- **Controller:** ArticleController@update
- **Middleware:** auth:sanctum
**Request JSON:**
```json
{
  "title": "string", // optional
  "content": "string", // optional
  "image_path": "string", // optional
  "tags": ["string"] // optional, array
}
```
**Response JSON:**
```json
{
  "id": 1,
  "user_id": 1,
  "title": "string",
  "content": "string",
  "image_path": "string|null",
  "tags": ["string"]
  // ...other fields
}
```

### Delete Article
- **DELETE** `/api/articles/{id}`
- **Controller:** ArticleController@destroy
- **Middleware:** auth:sanctum
**Response JSON:**
```json
{
  "message": "Deleted"
}
```

---

## Idea

### Get All Ideas
- **GET** `/api/ideas`
- **Controller:** IdeaController@index
- **Middleware:** auth:sanctum
**Response JSON:**
```json
{
	"ideas": [
		{
			"id": 1,
			"user_id": 1,
			"title": "string",
			"content": "string",
			"image_path": "string|null",
			"tags": ["string"],
			"user": {
				"id": 1,
				"name": "string"
				// ...user fields
			}
			// ...other fields
		}
	]
}
```

### Create Idea
- **POST** `/api/ideas`
- **Controller:** IdeaController@store
- **Middleware:** auth:sanctum
**Request JSON:**
```json
{
  "title": "string", // required
  "content": "string", // required
  "image_path": "string", // optional
  "tags": ["string"] // optional, array
}
```
**Response JSON:**
```json
{
  "id": 1,
  "user_id": 1,
  "title": "string",
  "content": "string",
  "image_path": "string|null",
  "tags": ["string"]
  // ...other fields
}
```

### Get Idea by ID
- **GET** `/api/ideas/{id}`
- **Controller:** IdeaController@show
- **Middleware:** auth:sanctum, record.view
**Response JSON:**
```json
{
  "id": 1,
  "user_id": 1,
  "title": "string",
  "content": "string",
  "image_path": "string|null",
  "tags": ["string"],
  "user": {
    "id": 1,
    "name": "string"
    // ...user fields
  }
  // ...other fields
}
```

### Update Idea
- **PUT** `/api/ideas/{id}`
- **Controller:** IdeaController@update
- **Middleware:** auth:sanctum
**Request JSON:**
```json
{
  "title": "string", // optional
  "content": "string", // optional
  "image_path": "string", // optional
  "tags": ["string"] // optional, array
}
```
**Response JSON:**
```json
{
  "id": 1,
  "user_id": 1,
  "title": "string",
  "content": "string",
  "image_path": "string|null",
  "tags": ["string"]
  // ...other fields
}
```

### Delete Idea
- **DELETE** `/api/ideas/{id}`
- **Controller:** IdeaController@destroy
- **Middleware:** auth:sanctum
**Response JSON:**
```json
{
  "message": "Deleted"
}
```

---

## Favorite

### Get All Favorites
- **GET** `/api/favorites`
- **Controller:** FavoriteController@index
- **Middleware:** auth:sanctum
**Response JSON:**
```json
{
	"favorites": [
		{
			"id": 1,
			"user_id": 1,
			"content_type": "article|idea",
			"content_id": 1
			// ...other fields
		}
	]
}
```

### Add Favorite
- **POST** `/api/favorites`
- **Controller:** FavoriteController@store
- **Middleware:** auth:sanctum
**Request JSON:**
```json
{
  "content_type": "article|idea", // required
  "content_id": 1 // required, integer
}
```
**Response JSON:**
```json
{
  "id": 1,
  "user_id": 1,
  "content_type": "article|idea",
  "content_id": 1
  // ...other fields
}
```

### Remove Favorite
- **DELETE** `/api/favorites/{id}`
- **Controller:** FavoriteController@destroy
- **Middleware:** auth:sanctum
**Response JSON:**
```json
{
  "message": "Removed from favorites"
}
```

---

## Notes
- All endpoints (except `/register` and `/login`) require authentication via Sanctum (`auth:sanctum`).
- Some endpoints (e.g., `show` for articles and ideas) also use the `record.view` middleware.
- For request/response details, refer to each controller's implementation.
