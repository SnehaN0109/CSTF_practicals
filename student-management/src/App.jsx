
import { useState } from "react";
import Student from "./Student";

function App() {

    // Store the list of students
    const [students, setStudents] = useState([
        { name: "Rahul", rollNo: "101", department: "Computer Engineering" },
        { name: "Sneha", rollNo: "102", department: "IT" },
        { name: "Priya", rollNo: "103", department: "Computer Engineering" }
    ]);

    // Store form input values
    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [department, setDepartment] = useState("");

    

    // Function to add a student
    function addStudent(e) 
    {

        // Prevent page reload
        e.preventDefault();

        // Check whether all fields are filled
        if (name === "" || rollNo === "" || department === "") {
            alert("Please fill all fields");
            return;
        }

        // Add new student to existing list
        const newStudent = {
            name: name,
            rollNo: rollNo,
            department: department
        };

        setStudents([...students, newStudent]);

        // Clear the input fields
        setName("");
        setRollNo("");
        setDepartment("");
    }

    return (
        <div>
            <h1>Student Management System</h1>

            <h2>Add New Student</h2>

            <form onSubmit={addStudent}>

                <input
                    type="text"
                    placeholder="Enter student name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Enter roll number"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Enter department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />

                <br /><br />

                <button type="submit">Add Student</button>

            </form>








            <h2>Student List</h2>

            {
            students.map((student, index) => 
                (
                <Student
                    key={index}
                    name={student.name}
                    rollNo={student.rollNo}
                    department={student.department}
                />
            ))}

        </div>
    );
}

export default App;
