

export function startStopwatch() {
  
    let startTime = new Date().getTime();
    return startTime;
    
}

export function stopStopwatch(startTime) {

    const endTime = new Date().getTime();
    const elapsedTime = (endTime - startTime) / 1000; // Convert to seconds
    return elapsedTime;
  
}

