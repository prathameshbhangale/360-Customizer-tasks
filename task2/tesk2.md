### Task 2: REST API 

## Endpoints: 

* URL: `/api/users/profile`
* HTTP Method: `GET`

## Request parameter

* required prameter:  `username`
* Optional filters: `age, location, active_status`.

## Response

for `/api/users/profile?username=prathamesh&age=21&location=Pune&active_status=true`

```json
{
    "success": true,
    "data": {
        "username": "prathamesh",
        "email": "bhangaleprathamesh744@gmail.com",
        "age": 21,
        "location": "Pune",
        "active_status": true
    }
}
```

for `/api/users/profile?username=john`
```json
{
    "success": false,
    "error": "user not found"
}