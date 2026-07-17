-- Task 2: Shift Activity Report
-- Jane Doe has an upcoming performance review and the manager wants to look at her order history
-- ahead of the meeting. They only need to see when each order was placed and what it was worth —
-- no other details are required for this particular review.
--
-- Hint: Write a query to find all orders handled by the staff member "Jane Doe".
-- Your query should only return the order_date and total_price fields for these orders.

-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task2_bonus.mongodb.js

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- We need order_date and total_price from the Orders table, filtered by staff name "Jane Doe".
-- The staff name is stored in the Staff table, so we need to JOIN Orders with Staff on staff_id.
-- We filter with a WHERE clause matching first_name = 'Jane' AND last_name = 'Doe'.

