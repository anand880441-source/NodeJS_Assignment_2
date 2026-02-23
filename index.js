const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3,
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9,
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4,
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1,
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8,
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7,
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2,
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8,
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0,
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9,
  },
];

app.get("/", (req, res) => {
  res.send("Students server is running...");
});

app.get("/students", (req, res) => {
  console.log("Students desplayed...");
  res.status(200).json(students);
});

app.get("/students/topper", (req, res) => {
  const sortedStudents = [...students].sort((a, b) => b.cgpa - a.cgpa);
  console.log(sortedStudents);

  const topper = sortedStudents[0];
  console.log(topper);
  res.status(200).json(topper);
});

app.get("/students/average", (req, res)=>{
    const totalCgpa = [...students].reduce((sum, student)=>{
        return sum + student.cgpa;
    },0);

    console.log("total: ",totalCgpa.toFixed(2))
    const average = totalCgpa/students.length;

    console.log("avg: ",average.toFixed(2))
    res.status(200).json({
        averageCGPA: parseFloat(average.toFixed(2))
    })
})

app.get("/students/count", (req,res)=>{
    const totalStudents = students.length;


    console.log("Total students : ", totalStudents)
    res.status(200).json({
        totalStudents: totalStudents
    })
})

app.get("/students/:id", (req,res)=>{
    const studentId = parseInt(req.params.id);
    const student = students.find((s) => s.id === studentId);

    if(!student) return res.status(404).json({message : "Student not found"})

    res.status(200).json(student)
})

app.get("/students/branch/:branchName", (req, res) => {
    const studentBranch = req.params.branchName; 

    const decodedBranch = decodeURIComponent(studentBranch);

    const filteredStudents = students.filter(
        (s) => s.branch.toLowerCase() === decodedBranch.toLowerCase()
    );

    if (filteredStudents.length === 0) {
        return res.status(404).json({ message: "No students found in this branch" });
    }

    res.status(200).json(filteredStudents);
});




app.listen(3000, () => {
  console.log("server started on port 3000");
});
