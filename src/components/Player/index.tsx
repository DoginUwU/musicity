import React, { createRef, useEffect, useState } from 'react';
import { RiPlayFill, RiSkipBackFill, RiSkipForwardFill } from 'react-icons/ri';
import { usePlayer } from '../../hooks/usePlayer';
import { secondsToMMSS } from '../../utils/format';
import AudioPlayer from '../AudioPlayer';

import {
  Container,
  PlayerControls,
  PlayerInfo,
  PlayerProgress,
} from "./styles";

interface IPlayerTimes {
  currentTime: number;
  duration: number;
}

const Player: React.FC = () => {
  const { currentMusic, state } = usePlayer()
  const AudioRef = createRef<HTMLAudioElement>();
  const [times, setTimes] = useState<IPlayerTimes>(
    {} as IPlayerTimes
  )

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (AudioRef.current) {
          const audioCurrentTime = AudioRef.current.currentTime;
          const audioDuration = AudioRef.current.duration;
          
          setTimes({
            currentTime: audioCurrentTime,
            duration: audioDuration,
          })
        }
      },
      1000
    )

    return () => clearInterval(interval);
  }, []);

  const handleChangeProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!AudioRef.current) return

    AudioRef.current.currentTime = Number(e.target.value);
  }

    return (
      <Container disabled={state === 'stopped'}>
        <AudioPlayer ref={AudioRef} />
        <PlayerControls>
          <RiSkipBackFill />
          <RiPlayFill />
          <RiSkipForwardFill />
        </PlayerControls>
        <PlayerInfo>
          <img src={currentMusic?.snippet.thumbnails.medium.url} alt="Player" />
          <div>
            <h2>{currentMusic?.snippet.title}</h2>
            <p>{currentMusic?.snippet.channelTitle}</p>
          </div>
        </PlayerInfo>
        <PlayerProgress>
          <p>{secondsToMMSS(times.currentTime)}</p>
          <input
            type="range"
            min="0"
            value={times.currentTime}
            max={times.duration}
            onChange={handleChangeProgress}
          />
          <p>{secondsToMMSS(times.duration)}</p>
        </PlayerProgress>
      </Container>
    )
}

export default Player;