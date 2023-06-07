import React from 'react'

const Stats = ({level,WPM, accuracy, right, wrong}) => {
  return (
    <div className=' w-60 h-full bg-zinc-800 rounded-lg p-2 text-white text-lg font-extralight'>
        <table>
            <tr>
                <td className='pr-5 text-zinc-500 font-normal'>Level</td>
                <td>{level}</td>
            </tr>
            <tr>
                <td className='pr-5 text-zinc-500 font-normal'>Accuracy</td>
                <td>{accuracy}%</td>
            </tr>
            <tr>
                <td className='pr-5 text-zinc-500 font-normal'>WPM</td>
                <td>{WPM}</td>
            </tr>
            <tr>
                <td className='pr-5 text-zinc-500 font-normal'>Right</td>
                <td>{right}</td>
            </tr>
            <tr>
                <td className='pr-5 text-zinc-500 font-normal'>Wrong</td>
                <td>{wrong}</td>
            </tr>
        </table>
    </div>
  )
}

export default Stats