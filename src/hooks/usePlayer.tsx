import React, { createContext, Dispatch, useContext, useState } from "react";
import { IYoutubeItemResult } from "../@types/youtube";

type PlayerState = "playing" | "paused" | "stopped";

interface IPlayerContextType {
  playYoutube: (music: IYoutubeItemResult) => void
  playYoutubePlaylist: (playlist: IYoutubeItemResult[]) => void
  nextMusicYoutubePlaylist: () => void
  url: string
  state: PlayerState
  setState: Dispatch<React.SetStateAction<PlayerState>>
  currentMusic: IYoutubeItemResult | null
  queue: IYoutubeItemResult[]
}


const PlayerContext = createContext<IPlayerContextType>({} as IPlayerContextType);

const PlayerProvider: React.FC = ({ children }) => {
  const [currentMusic, setCurrentMusic] = useState<IYoutubeItemResult | null>(null)
  const [url, setUrl] = useState<string>("");
  const [state, setState] = useState<PlayerState>('stopped');
  const [queue, setQueue] = useState<IYoutubeItemResult[]>([]);

  const playYoutubePlaylist = (playlist: IYoutubeItemResult[]) => { 
    setQueue(playlist);
    setState('playing');
    playYoutube(playlist[0]);
  }
  
  const nextMusicYoutubePlaylist = () => { 
    if (queue.length > 0) {
      const nextMusic = queue.shift();
      setQueue(queue);
      if(nextMusic) 
      playYoutube(nextMusic);
    }
  }
  
  const playYoutube = (music: IYoutubeItemResult) => {
    setState('stopped');
    setCurrentMusic(music);
    window.Main.sendMessage('loadYoutubeAudio', music.id.videoId);
  }
  
  window.Main.on('youtubeAudioURL', (url: string) => {
    setUrl(url);
    setState('playing');
  });

    return (
      <PlayerContext.Provider
      value={{
          currentMusic,
          playYoutube,
          playYoutubePlaylist,
          nextMusicYoutubePlaylist,
          url,
          state,
          setState,
          queue,
        }}
      >
        {children}
      </PlayerContext.Provider>
    )
};

const usePlayer = () => { 
    return useContext(PlayerContext);
};

export { PlayerProvider, usePlayer };