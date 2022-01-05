import React from 'react';
import { RiPauseFill, RiPlayFill, RiSkipBackFill, RiSkipForwardFill } from 'react-icons/ri';
import { usePlayer } from '../../hooks/usePlayer';

interface IPlayerProps { 
    onPlayPause: () => void
}

const ControlsPlayer: React.FC<IPlayerProps> = ({ onPlayPause }) => {
  const { state, queue } = usePlayer()

  return (
    <>
      {queue.length > 0 && <RiSkipBackFill />}
      {state === 'playing' && <RiPauseFill onClick={onPlayPause} />}
      {state === 'paused' && <RiPlayFill onClick={onPlayPause} />}
      {queue.length > 0 && <RiSkipForwardFill />}
    </>
  )
}

export default ControlsPlayer;