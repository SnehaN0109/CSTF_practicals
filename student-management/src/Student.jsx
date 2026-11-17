function Student(props)
{
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.roll}</p>
             <p>Department: {props.department}</p>
        </div>
    );
}
export default Student;