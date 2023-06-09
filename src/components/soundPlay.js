import keyPressSound from '../static/music/click-button.mp3'
import invalidKeyPressed from '../static/music/invalid-key.mp3'
import successMusic from '../static/music/success.mp3'

async function soundPlay(isValid) {

    const rightKey = new Audio(keyPressSound);
    const wrongKey = new Audio(invalidKeyPressed);
    const successfull = new Audio(successMusic)

    
    if(isValid===2){
        await rightKey.play();
       await successfull.play()
    }
    else if(isValid){
        rightKey.play();
    }
    else{
        wrongKey.play();
    }

    return
  
}

export default soundPlay