-- Active: 1786503636234@@127.0.0.1@5432@postgres@public
SELECT * FROM employee

SELECT * FROM department

-- step 1
SELECT department_id, max(salary) as max_salary
FROM employee
GROUP BY department_id

-- step 2
SELECT e.id, e.name as "Employee", e.salary, d.name as "Department"
from employee e
INNER JOIN department d ON e.department_id = d.id
where (e.department_id, e.salary) 
IN (
    SELECT e.department_id, max(salary) as max_salary
FROM employee
GROUP BY department_id
)
