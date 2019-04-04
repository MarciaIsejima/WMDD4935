# WMDD4935 - Assignment 2
## Texting to-do items to a database

![High Level Architecture](./twilio.png)

### Endpoint: 
`https://mysql-get-todo.marciaisejima.now.sh`

### Instructions:
#### To retrieve complete list of to-do items:
`https://mysql-get-todo.marciaisejima.now.sh`

#### To search for a particular to-do item, add a query expression to the end of the endpoint. E.g. to search for to-do's that contain the word "butter", add the search key 'title' with the desired word:
`https://mysql-get-todo.marciaisejima.now.sh?title=butter`

returned message:

```
[
    {
        "todoItem": "Buy butter"
    }
]
```

If there are no items matching criteria, the API will return a error message:<br>

```
No items that match search criteria.
```
