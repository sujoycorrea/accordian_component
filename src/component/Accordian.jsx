import { useState } from "react"

import Qa from "./Qa"




export default function Accordian({data}){

    const[curOpen, setCurOpen] = useState()

    return(
        <div className="the-list">   

            {data.map((i, num )=> <Qa curOpen={curOpen} onCurOpen={setCurOpen} qA= {i} id={num} key={i.title}/> )}

        </div>
    )
}