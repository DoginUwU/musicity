import React, { MutableRefObject, useEffect, useRef } from 'react';
import { usePlayer } from '../../hooks/usePlayer';

const AudioPlayer = React.forwardRef<HTMLAudioElement, any>((_, ref) => {
    const { url, state } = usePlayer()
    const AudioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (!AudioRef.current) return
        if (!url) return
        if (AudioRef.current.src !== url) AudioRef.current.src = url
    }, [url])

    useEffect(() => {
        if (!AudioRef.current) return

        switch (state) {
            case 'playing':
                AudioRef.current.play()
                break
            case 'paused':
                AudioRef.current.pause()
                break
            case 'stopped':
                AudioRef.current.pause()
                AudioRef.current.currentTime = 0
                AudioRef.current.src = ''
                break
        }
    }, [state])

    return <audio ref={(node) => {
        if (!node) return;
        // @ts-ignore
        AudioRef.current = node;
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ;(ref as MutableRefObject<HTMLAudioElement>).current = node
        }
    }} />
});

export default AudioPlayer;