import { useState, useEffect } from "react";

const storedVal = () => JSON.parse(localStorage.getItem('value')) || ''

const LocalDemo = () => {
    const [value, setValue] = useState(storedVal())
    
    useEffect(()=> {
        localStorage.setItem('value', JSON.stringify(value))
    }, [value])

    return(
        <div>
            <h1>Local Storage Demo</h1>
            <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}>
            </input>
            <button>Get</button>
            <button>Remove</button>
            <div>
                {value}
            </div>
        </div>
    )
}

export default LocalDemo