import React from 'react'

const Form = ({handleTextChange, editedText}) => {
  return (
    <div className='w-96'>
        <input 
          type="text" 
          onChange={(e) => handleTextChange(e.target.value)} 
          value={editedText} 
          className='p-1 rounded-sm text-lg w-full'
          />
    </div>
  )
}

export default Form