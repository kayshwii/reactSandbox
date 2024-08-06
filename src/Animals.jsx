/*
//basic
function Animals(){
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    return(
        <div>
            <h1>Animals: </h1>
            <ul>
                {animals.map((animal) =>{
                    return <li key={animal}>{animal}</li>
                })}
            </ul>
        </div>
    )
}
*/

/*
//basic conditional
function List(props){
    if(!props.animals){
        return <div>Loading...</div>
    }
    if(props.animals.length === 0) {
        return <div>There are no animals in the list!</div>
    }
    return <ul>
        {props.animals.map((animal)=>{
            return <ListItem key={animal} animal={animal} />
        })}
    </ul>
}
*/

//advanced conditional
function List(props) {
    return(
        <>
        {/*if animals property does not exist*/}
        {!props.animals ? (
        <div>Loading...</div>
        //else if animals list is not empty
        ) : props.animals.length > 0 ? (
        <ul>
            {props.animals.map((animal)=> {
                return <ListItem key ={animal} animal={animal} />
                })}
        </ul>
        //else
        ) : (
        <div>There are no animals in the list!</div>
        )}
        </>
    )
}

function ListItem(props){
    return <li>{props.animal}</li>
}

function Animals(){
    const animals = ["Lion", "Cow", "Snake", "Lizard"]

    return(
        <div>
            <h1>Animals: </h1>
            <List animals={animals} />
        </div>
    )
}

export default Animals