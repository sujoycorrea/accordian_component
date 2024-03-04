import { useState } from "react"



export default function Qa({qA, id, curOpen, onCurOpen}){
    
    const isOpen = id === curOpen
    // const [isOpen, setIsOpen] = useState(false)

    function handleIcon(){
        // setIsOpen(()=> !isOpen);
        onCurOpen(isOpen ? null : id)
    }

    return(
        <div className="qa">
                <div className="q">
                <p>{id + 1}</p>
                    <p>{qA.title}</p>
                    <p className="icon" onClick={handleIcon}> {!isOpen? "➕" : "➖"} </p>
                </div>

                <div className={!isOpen ? "a hide" : "a"}>
                    <p>{qA.text}</p>
                </div>
            </div>
    )
}