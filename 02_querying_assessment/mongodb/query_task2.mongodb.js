// Task 2: Shift Activity Report
// Jane Doe has an upcoming performance review and the manager wants to look at her order history
// ahead of the meeting. They only need to see when each order was placed and what it was worth —
// no other details are required for this particular review.
//
// Hint: Write a query to find all orders handled by the staff member "Jane Doe".
// Your query should only return the order_date and total_price fields for these orders.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task2_bonus.sql

use("chrome-burger-db");
db.orders.find({ "staff.first_name": "Jane", "staff.last_name": "Doe" },
    { _id: 0, order_date: 1, total_price: 1 });

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
//         ใช้ฐานข้อมูลจาก chrome-burger-db เพื่อดูประวัติการรับออเดอร์ของ Jane Doe โดยผู้จัดการจะดูข้อมูล 2 ตัว จาก
// 1.order_date 2.total_price ใน collection orders ด้วย find() และใน staff หาด้วยการใส่ 0 = ไม่ต้องการค่านี้ 1 = ต้องการค่านี้
//      
