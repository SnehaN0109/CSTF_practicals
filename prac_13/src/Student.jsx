function Studentcard(props)
{
    return(
        <div>
            <p>{props.name} {props.rollno} {props.sub1} {props.sub2} {props.sub3} {props.sub4} {props.sub5} {props.totalmarks} {props.per} {props.result}</p>
        </div>
    );
}
export default Studentcard;