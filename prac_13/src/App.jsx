import { useState } from 'react'

import './App.css'

function App() {
  const [student,setstudent] = useState([]);
  const[name,setname]=useState("");
  const[rollno,setrollno]=useState("");
  const[sub1,setsub1]=useState("");
  const[sub2,setsub2]=useState("");
  const[sub3,setsub3]=useState("");
  const[sub4,setsub4]=useState("");
  const[sub5,setsub5]=useState("");

  function addstudent(e)
  {
      e.preventDefault();
      if(!name||!rollno||!sub1||!sub2||!sub3||!sub4||!sub5)
      {
        alert("enter all details properly");
          return;
      }
      const totalmarks=(Number(sub1)+Number(sub2)+Number(sub3)+Number(sub4)+Number(sub5));

      const per=(totalmarks/500)*100;

      let result;

      if (per >= 35) {
        result = "Pass";
      }
      else {
      result = "Fail";
      }

      const newstudent=
      {
        name:name,
        rollno:rollno,
        sub1:sub1,
        sub2:sub2,
        sub3:sub3,
        sub4:sub4,
        sub5:sub5,
        totalmarks:totalmarks,
        per:per,
        result:result
      };

      setstudent([...student,newstudent]);

      setname("");
      setrollno("");
      setsub1("");
      setsub2("");
      setsub3("");
      setsub4("");
      setsub5("");



  }

  return (
   <div>
        <form onSubmit={addstudent}>
          <input type="text" placeholder='enter roll no'
          value={rollno} onChange={(e)=>setrollno(e.target.value)}>
            </input>

             <input type="text" placeholder='enter name'
          value={name} onChange={(e)=>setname(e.target.value)}></input>

          <input type="number" placeholder='enter sub1'
          value={sub1} onChange={(e)=>setsub1(e.target.value)}></input>

           <input type="number" placeholder='enter sub2'
          value={sub2} onChange={(e)=>setsub2(e.target.value)}></input>

           <input type="number" placeholder='enter sub3'
          value={sub3} onChange={(e)=>setsub3(e.target.value)}></input>

           <input type="number" placeholder='enter sub4'
          value={sub4} onChange={(e)=>setsub4(e.target.value)}></input>

           <input type="number" placeholder='enter sub5'
          value={sub5} onChange={(e)=>setsub5(e.target.value)}></input>

          <button type="submit">add the info</button>
          
        </form>

        {stu}
   </div>
  )
}

export default App
