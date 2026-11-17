function Productcard(props)
{
    return(
    <div>
        <h3>{props.name}</h3>
        <img src={props.img}></img>
        <p><i>{props.description}</i></p>
    </div>
    );
}
export default Productcard;