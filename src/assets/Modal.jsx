import { useState } from "react"
import "./Modal.css"
import Button from "./Button"

export default function Modal() {
    const [hidden, setHidden] = useState(false)
    const dataFields = [
        "Public", "Statement", "Other"
    ]

    const hide = () => {
        if (hidden) setHidden(false)
        else setHidden(true)

    }

    return (
        <div className={`modal-background${hidden && " hidden" || ""}`} onClick={hide}>
            <div className="modal-wrapper">
                <div className="form">
                    <header>
                        <h2>Ipsum Lorem</h2>
                    </header>
                    <div className="multiple-choice">
                        {
                            dataFields.map((e) => {
                                return <Button content={e} type="idfk" key={e} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}