function Student(props)
{
    return (
        <div className="student-card">
        <h1>{props.name}</h1>
        <p>{props.rollno}</p>
        <p>{props.dept}</p>
        <button onClick={()=>props.removeStudent(props.rollno)}>
            remove
        </button>
        <button onClick={() => props.updateStudent(props.rollno)}>
    Update
</button>
        </div>
    );
}
export default Student;