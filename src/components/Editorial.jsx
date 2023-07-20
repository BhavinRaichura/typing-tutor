import React, { useEffect, useReducer, useState } from 'react'
import Form from './Form';
import soundPlay from './soundPlay';
import Stats from './Stats';
import InputForm from './InputForm';
import KeyBoard from './Keyboard';
import { startStopwatch, stopStopwatch } from './TimeCalculation';
import NavBar from './NavBar';


function reducerFn(state, action) {
    switch (action.type) {
        case "CHAR_UPDATE":
            return { ch: action.payload.ch };
        default:
            return state;
    }
}

function generateWord(wordLen, sentanceLen = 10 ) {
    const characters = "asdfjkl;";
    const space = ' ';
    const wordLength = wordLen !==0 ? wordLen : Math.floor(Math.random() * 10) ; // Generate word length between 1 and 10
    let word = '';
    for (let j = 0; j < sentanceLen; j++) {
        for (let i = 0; i < wordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            word += characters[randomIndex];
        }
        console.log(word)
        if (j !== sentanceLen - 1)
            word += space;
    }
    return word;
}

const Editorial = () => {
    const [editedText, setEditedText] = useState("");
    const [showText, setShowText] = useState("aa ff ss dd jj ;; kk ll");

    const [level, setLevel] = useState(1);
    const [right, setRight] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [WPM, setWPM] = useState(0);
    
    const [prevlen, setPrevlen] = useState(0);
    const [currIndex, setCurrIndex] = useState(0);
    const [startWriting, setStartWriting] = useState(0);
    const [startingTime, setStartingTime] = useState(0);
    const [showKeyboard, setShowKeyboard] = useState(0);

    const [state, dispatch] = useReducer(reducerFn, { ch: "" });

   /* useEffect(() => {
        let acu = Math.round((right / (right + wrong)) * 100);
        setAccuracy(acu >= 0 ? acu : 0);
        setCurrIndex(0);
        dispatch({ type: "CHAR_UPDATE", payload: { ch: showText[0] } });
        setPrevlen(0);

        let timediff = stopStopwatch(startingTime);
        setWPM(Math.round(60 / (timediff / level)));
        console.log("wpm ", WPM)
        setStartWriting(0);

        setRight(0);
        setWrong(0);

    } );//, [level]);*/

    useEffect(() => {
        setStartingTime(startStopwatch());
    }, [startWriting])

    const handleTextChange = (e) => {
        setStartWriting(1);
        let n = e.length;
        let text = e;
        setEditedText(text);
        if (prevlen < n) {
            if (showText.startsWith(text) === true && showText === e) {
                return updateLevel();
            }
            else if (showText.startsWith(text) === true) {
                setRight((x) => x + 1);
                soundPlay(1)
                setCurrIndex(n);
                dispatch({ type: "CHAR_UPDATE", payload: { ch: showText[n] } });
            }
            else {
                setWrong((x) => x + 1);
                soundPlay(0)
            }
        }
        else if (currIndex >= n) {
            setCurrIndex(n);
            dispatch({ type: "CHAR_UPDATE", payload: { ch: showText[n] } });

        }
        setPrevlen(n);
    }

    const updateLevel = async() => {
        setLevel((l) => l + 1);
        soundPlay(2)
        setEditedText("");
        let newstring = generateWord(level);
        setShowText(newstring);
        updateStats(newstring);
        
    }

    const updateStats = (newstring) =>{
        let acu = Math.round((right / (right + wrong)) * 100);
        setAccuracy(acu >= 0 ? acu : 0);
        setCurrIndex(0);
        dispatch({ type: "CHAR_UPDATE", payload: { ch: newstring[0] } });
        setPrevlen(0);

        let timediff = stopStopwatch(startingTime);
        setWPM(Math.round(60 / (timediff / level)));
        console.log("wpm ", WPM)
        setStartWriting(0);

        setRight(0);
        setWrong(0);
    }

    

    return (
        <div>
            <NavBar />
            <div className='flex flex-row flex-wrap justify-center'>
                <div className='m-1'>
                    <Stats
                        right={right}
                        wrong={wrong}
                        accuracy={accuracy}
                        level={level}
                        WPM={WPM}
                    />
                </div>
                {/*
                <div className='m-1'>
                    <InputForm />
                </div>
                */}
            </div>

            <div className=' object-center'>
                <div className="font-normal text-center text-white text-4xl py-10 ">
                    {showText}
                </div>
                <div className='flex justify-center'>
                    <Form
                        handleTextChange={handleTextChange}
                        editedText={editedText}
                    />
                </div>
                
            </div>
            <div className=' mt-20 '>
                <div className='flex justify-center'>
                    <button className='px-2 py-1 border text-white rounded-md' onClick={() => setShowKeyboard((e) => { return !(e) })}>
                        keyboard  
                        <span className='text-yellow-500 text-lg font-extrabold'>{showKeyboard===true ? "  ^ " : "  v "}</span>
                    </button>
                    <hr />
                </div>
                {
                    showKeyboard ? <KeyBoard state={state} /> : ""
                }
            </div>


        </div>
    )
}

export default Editorial


