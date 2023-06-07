import { useState } from "react"

const KeyBoardKey = ({ch, state}) => {
    
  return (
    <div className={' text-lg key-btn w-10 h-10 border p-2 m-1 rounded-md border-zinc-700 hover:bg-zinc-700 hover:text-white ' + (ch===state.ch ? "bg-yellow-500 text-black" : " ")}> 
      <span >{ch.toUpperCase()}</span>
    </div>
  )
}

export default KeyBoardKey