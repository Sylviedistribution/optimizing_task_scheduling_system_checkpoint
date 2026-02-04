# 📋 Optimizing Task Scheduling System
## 🧠 Description

This project is a lightweight task scheduler built in Node.js for managing tasks efficiently.
It focuses on algorithmic optimization, time & space complexity analysis, and practical memory estimation.

The system allows users to:

-Add tasks

-Sort tasks by start time

-Group tasks by priority

-Detect overlapping tasks

-Estimate memory usage dynamically

The goal is to apply algorithmic thinking and Big-O analysis to real-world task management scenarios.

## 🚀 Features

### 1️⃣ Task Creation

Each task contains:

-Name

-Start time

-End time

-Priority (High, Medium, Low)

### 2️⃣ Sorting Tasks

Tasks are sorted efficiently by start time using:

Array.prototype.sort()

### 3️⃣ Grouping by Priority

Tasks are grouped using a hash map (object) for fast lookup.

### 4️⃣ Overlapping Task Detection

Overlapping tasks are detected using interval scheduling logic after sorting.

### 5️⃣ Memory Usage Estimation (Bonus)

Estimates:

-Total memory usage based on number of tasks

-Space complexity for each operation

Example:

1000 tasks → ~70 KB  
10000 tasks → ~700 KB  

## ⚙️ Technologies Used

JavaScript (Node.js)

CLI Interface (readline module)

## 📦 Installation & Execution

Prerequisites
Node.js installed

Run the program
node index.js

### 🖥️ CLI Dashboard

The application provides an interactive terminal menu:

1. Add Task
2. Sort Tasks by Start Time
3. Group Tasks by Priority
4. Check Overlapping Tasks
5. Estimate Memory Usage
6. Exit

### 🧮 Algorithmic Complexity Analysis

#### ⏱ Time Complexity

Function	Complexity
Add Task	O(1)
Sort Tasks	O(n log n)
Group Tasks	O(n)
Overlap Detection O(n log n)

#### 🧠 Space Complexity
Function	Complexity
Add Task	O(1)
Sort Tasks	O(1)
Group Tasks	O(n)
Overlap Detection	O(n)

#### 💾 Memory Usage Estimation

Each task is estimated at ~70 bytes:

Number of Tasks	Estimated Memory
100	~6.8 KB
1,000	~68 KB
10,000	~680 KB

### 🏗️ Project Structure
index.js

### 🎯 Educational Goals

This project demonstrates:

Algorithm optimization

Space & time complexity analysis

Efficient data structures usage

Practical memory estimation

Clean CLI design

### 🧠 Key Concepts Used

Greedy algorithms

Interval scheduling

Hash maps

Big-O analysis

Memory estimation modeling

👨‍💻 Author

Sylvestre IBOMBO GAKOSSO
