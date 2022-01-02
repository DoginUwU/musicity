import React, { createContext, useContext, useState } from "react";
import { IYoutubeItemResult } from "../@types/youtube";

type PlayerState = "playing" | "paused" | "stopped";

interface IPlayerContextType {
  playYoutube: (music: IYoutubeItemResult) => void
  url: string
  state: PlayerState
  currentMusic: IYoutubeItemResult | null
}


const PlayerContext = createContext<IPlayerContextType>({} as IPlayerContextType);

const PlayerProvider: React.FC = ({ children }) => {
  const [currentMusic, setCurrentMusic] = useState<IYoutubeItemResult | null>(null)
  const [url, setUrl] = useState<string>("");
  const [state, setState] = useState<PlayerState>('stopped');
  
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
      <PlayerContext.Provider value={{ playYoutube, url, state, currentMusic }}>
        {children}
      </PlayerContext.Provider>
    )
};

const usePlayer = () => { 
    return useContext(PlayerContext);
};

export { PlayerProvider, usePlayer };