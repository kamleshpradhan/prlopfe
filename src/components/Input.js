import { useState } from "react"
export default function Input(){
    const [text,setText] = useState('')
    return(
        <div>
            <input onChange={()=>{setText("Hello")}}></input>
            <p>{text}</p>
        </div>
    )
}