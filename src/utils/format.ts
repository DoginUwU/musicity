const secondsToMMSS = (time: number) => { 
    const minutes = '0' + Math.floor(time / 60)
    const seconds = '0' + Math.floor(time - Number(minutes) * 60)
    const dur = minutes.substr(-2) + ':' + seconds.substr(-2)

    return dur;
};

export { secondsToMMSS };