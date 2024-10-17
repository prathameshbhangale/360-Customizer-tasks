
## Why Use Indexes?

Indexes improve the speed of data retrieval by allowing faster searching. However, they can slow down data modification operations.

In PostgreSQL, when we define a primary key on a table, an index is automatically created on the primary key column(s).

## tables:

orders (user_id, amount, order_date)
forign key: user_id with refernece user table

users (user_id, username, email)   
primary key: user_id

## indexing in order table

for fast retrieval of data from table indexing done on 
(user_id , order_date)

there can be many user_id for order but combination of user_id and order_date is unique. So instead of user_id, (user_id , order_date) is better for indexing.

```sql
CREATE INDEX order_table_index ON "order" (user_id, order_date);
