--This query fetches the top 5 users with the highest total order amount in the last month.

SELECT u.user_id, sum(o.amount) as total_amount
FROM users u
JOIN orders o 
ON o.user_id = u.user_id 
WHERE o.order_date >= NOW() - interval '1 month'
GROUP BY u.user_id
ORDER BY total_amount DESC
LIMIT 5;

-- Joins the users and orders tables based on user_id, filtering orders from the last month.
-- Calculates the total order amount for each user and groups by user_id.
-- Sorts users by total order amount in descending order and limits the result to the top 5 users.