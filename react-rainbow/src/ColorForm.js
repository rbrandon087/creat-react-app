import React, {useState} from "react";

export default function ColorForm({ onAddColor }) {
    let [inputVal, setInputVal] = useState('');

    const onSubmitForm = e => {
        e.preventDefault();
        onAddColor(inputVal)
        setInterval('')
    
    }

    return <div className="colorform">
        <form onSubmit={onSubmitForm}>
            <input type="text"
            value= {inputVal}
            onChange={ e => setInputVal(e.target.value)} />

<button type= 'submit'>Submit! </button>
        </form>
    </div>
}