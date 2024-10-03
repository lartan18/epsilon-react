import { useState } from "react"

export default function Button(props) {
    // console.log(props)
    const [selected, setSelected] = useState(false)

    const content = props.content
    const type = props.type
    const reset = props.reset
    
    return (
        <button onClick={() => { setSelected(!selected);  }} className={selected && "selected" || "not-selected"} >
            {content}
        </button>
    )
}