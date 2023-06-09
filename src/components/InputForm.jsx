import React, { useState } from 'react'

const InputForm = () => {
    const [wordSize, setWordSize] = useState(2);
    const [noOfWords,setNoOfWords] = useState(1);
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        
    }
  return (

    <form onSubmit={handleSubmit} className=' w-60  rounded-lg p-2 h-full bg-zinc-800'>
        <div className='flex justify-between'>
            <label htmlFor="wordsize" className=' text-lg text-zinc-500 p-2 font-normal'>Word Size</label>
            <input 
                className='p-1 w-20 m-2 rounded-sm float-right' 
                type="number" 
                name="wordsize" 
                id="wordsize" 
                min={2} 
                max={10} 
                value={wordSize}
                onChange={(e)=>setWordSize(e.target.value)}
            />
        </div>
        <div className='flex justify-between'>
            <label htmlFor="words" className=' text-lg text-zinc-500 p-2 font-normal'>No.of Words</label>
            <input 
                className='p-1 w-20 m-2 rounded-sm float-right' 
                type="number" 
                name="words" 
                id="words" 
                min={1} 
                max={10} 
                value = {noOfWords}
                onChange={(e)=>setNoOfWords(e.target.value)}
            />
        </div>
        <div className=' flex justify-center m-2'>

        <button className='px-2 py-1 border border-yellow-500 text-yellow-500 rounded-md hover:text-white hover:bg-yellow-500' >Apply 
                    </button>
        </div>

    </form>
  )
}

export default InputForm