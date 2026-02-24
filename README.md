# Student API (Using In-Memory JSON Database)


## Objective

Build a REST API using Express.js that manages student CGPA records stored in an in-memory JSON array.

The application must:
 
- Use only GET routes (for this assignment)
- Include static routes and dynamic routes
- Follow REST principles
- Return proper HTTP status codes

---

## Student Record Structure

Each student record contains:

```js
{
  id: 1,
  name: "Aditya",
  branch: "CSE",
  semester: 6,
  cgpa: 8.4
}
```

The project contains 10 student records stored inside the `students` array in `index.js`.

---

# Implemented Routes

## 1. GET /

Checks if server is running.

Response:

```
Express server is running...
```

Status Code: 200

---

## 2. GET /students

Returns all students.

- Status Code: 200  
- Returns full JSON array  

---

## 3. GET /students/topper

Returns the student with the highest CGPA.

- Status Code: 200  
- Returns one student object  

---

## 4. GET /students/average

Returns the average CGPA of all students.

Response format:

```json
{
  "averageCGPA": "8.09"
}
```

(Note: Value is returned as a string because `toFixed(2)` is used.)

Status Code: 200

---

## 5. GET /students/count

Returns total number of students.

Response:

```json
{
  "totalStudents": 10
}
```

Status Code: 200

---

## 6. GET /students/:id

Returns student by ID.

Example:

```
GET /students/3
```

- If student exists → 200  
- If not found → 404  

Error Response:

```json
{
  "message": "Student not found"
}
```

---

## 7. GET /students/branch/:branchName

Returns all students from a specific branch (case-insensitive).

Example:

```
GET /students/branch/CSE
```

- Status Code: 200  
- Returns array of matching students  
- If no students found → returns empty array  

---

# Steps to Run Locally

1. Clone the repository  
2. Run `npm install`  
3. Start server using:

```
node index.js
```

4. Server runs on:

```
http://localhost:3000
```

---

# GitHub Repository

https://github.com/anand880441-source/NodeJS_Assignment_2

---

# Postman Documentation

https://documenter.getpostman.com/view/50840839/2sBXcEmgar

---

# Render Deployment

https://nodejs-assignment-2-d7jc.onrender.com/
