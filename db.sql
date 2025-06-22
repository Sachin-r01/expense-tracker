CREATE DATABASE IF NOT EXISTS expensetracker;

USE expensetracker;

CREATE TABLE IF NOT EXISTS expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    amount DECIMAL(10, 2),
    category VARCHAR(100),
    date DATE DEFAULT CURRENT_DATE
);
