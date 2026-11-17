import { useState } from 'react'
import Student from "./Student"
import "./App.css"

function App() 
{
  const [student, setstudent] = useState([]);
  const [rollno, setrollno]=useState("");
  const[name,setname]=useState("");
  const[dept,setdept]=useState("");


//update student
  function updateStudent(rollno) {

    const newName = prompt("Enter new name:");
    const newRollno = prompt("Enter new roll number:");
    const newDept = prompt("Enter new department:");

    if (!newName || !newRollno || !newDept) {
        return;
    }

    const updatedStudents = student.map((s) => {

        if (s.rollno === rollno) {
            return {
                ...s,
                name: newName,
                rollno: newRollno,
                dept: newDept
            };
        }
        else {
            return s;
        }

    });

    setstudent(updatedStudents);
}



//delete student 
  function removeStudent(rollno) {
    setstudent(
        student.filter((s) => s.rollno !== rollno)
    );
}



//add new student 
  function addStudent(e)
  {
    e.preventDefault();
    if(name===""|| rollno===""|| dept==="")
    {
      alert("please fill all the attributes");
      return;
    }
    const newstudent={
      name:name,
      rollno:rollno,
      dept:dept
    };
    setstudent([...student,newstudent]);

    setname("");
    setrollno("");
    setdept("");
  }






  //what would be displayed 
  return (
    <div>
      <form onSubmit={addStudent}>
      <input
      type="text"
      placeholder="add name"
      value={name}
      onChange={(e)=>setname(e.target.value)}></input>

      <input
      type="text"
      placeholder="add rollno"
      value={rollno}
      onChange={(e)=>setrollno(e.target.value)}></input>

      <input
      type="text"
      placeholder="add dept"
      value={dept}
      onChange={(e)=>setdept(e.target.value)}></input>


       <button type="submit">submit the form</button>
       </form>

       {
        student.map((s1,index)=>
        (
          <Student
              key={index}
              name={s1.name}
              rollno={s1.rollno}
              dept={s1.dept}
              removeStudent={removeStudent}
              updateStudent={updateStudent}
          />
        ))
       }
    </div>
    
   
  );
  
}

export default App
