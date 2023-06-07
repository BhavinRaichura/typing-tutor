import React from 'react'
import KeyBoardKey from './KeyBoardKey';

const keys = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",""],
["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"],
["z", "x", "c", "v", "b", "n", "m","",""]];

const KeyBoard = ({state}) => {
    return (
        <div className='flex justify-center text-zinc-400 text-center font-semibold '>
            <div className=' absolute bg-hand-img '></div>
            <div>
                {
                    keys.map((data, index) => {
                        return (
                            <div key={index} className='flex flex-row justify-center m-1 low-z-index'>
                                {data.map((k , i) => {
                                    return (

                                        <KeyBoardKey key={i} ch={k} state={state}/>
                                    )
                                })}
                            </div>
                        )
                    })
                }
                <div className='flex justify-center'>
                    <div className={'p-2 w-52 h-10 border border-zinc-700 rounded-md hover:bg-zinc-700 hover:text-white '+(state.ch===" " ? "bg-yellow-500 text-black":" ") }>
                        Space
                    </div> 
                </div>
            </div>
        </div>
    )

}

export default KeyBoard


