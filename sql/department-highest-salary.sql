-- Active: 1786503636234@@127.0.0.1@5432@postgres@public
SELECT * FROM employee

SELECT * FROM department

/*
 this is stil not efficient
*/

# step 1
SELECT department_id, max(salary) as max_salary
FROM employee
GROUP BY department_id

# step 2
SELECT e.id, e.name as "Employee", e.salary, d.name as "Department"
from employee e
INNER JOIN department d ON e.department_id = d.id
where (e.department_id, e.salary) 
IN (
    SELECT e.department_id, max(salary) as max_salary
FROM employee
GROUP BY department_id
)

/*
 optimization
*/

# step 1
SELECT e.department_id, e.salary, e.name,
dense_rank() OVER (PARTITION by e.department_id ORDER BY e.salary DESC) AS rank
from employee e

# step 2
WITH hihgest_salary AS (
   SELECT e.id, e.department_id, e.salary, e.name,
dense_rank() OVER (PARTITION by e.department_id ORDER BY e.salary DESC) AS rank
from employee e
)
SELECT id, name as "Employee",  salary as "Salary"
FROM hihgest_salary
WHERE rank = 1;

# step 3
WITH hihgest_salary AS (
   SELECT e.id, e.department_id, e.salary, e.name, d.name as department_name,
dense_rank() OVER (PARTITION by e.department_id ORDER BY e.salary DESC) AS rank
from employee e
inner join department d on e.department_id = d.id
)
SELECT id, name as "Employee", department_name as "Department",  salary as "Salary"
FROM hihgest_salary
WHERE rank = 1;