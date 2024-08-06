const family = [{
    id: 0, 
    name: 'Finley',
    favorite: 'his bottle',
    gender: 'male'
},{
    id: 1,
    name: 'Jackary',
    favorite: 'video games',
    gender: 'male'
},{
    id: 2,
    name: 'Tina',
    favorite: 'T-Swift',
    gender: 'female'
},{
    id: 3,
    name: 'Casey',
    favorite: 'coding',
    gender: 'male'
}]

function ListItem({member}) {
    let pronoun
    member.gender === 'male' ? pronoun = 'His' : pronoun = 'Her'
    return(
        <p key={member.id}>
            {pronoun} name is {member.name}. {pronoun} favorite thing is {member.favorite}
        </p>
    )
}

export default function Prompt(){
    let guys = []
    let girls = []
    family.forEach(person =>
        person.gender === 'male' ? guys.push(person) : girls.push(person))
    return(
        <div>
        <h3>Guys</h3>
        {guys.map(people =>
            <ListItem member = {people} />)}
        <h3>Girls</h3>
        {girls.map(people =>
            <ListItem member = {people} />)}
        </div>
    )
}

