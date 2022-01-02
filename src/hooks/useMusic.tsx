import { createContext, useContext } from "react";
import { IYoutubeSearchResponse } from "../@types/youtube";
import { search } from "../services/youtube";

interface IMusicContext {
  getSearchResults: (query: string) => Promise<IYoutubeSearchResponse>;
}

const MusicContext = createContext<IMusicContext>({} as IMusicContext);

const MusicProvider: React.FC = ({ children }) => {

    const getSearchResults = async (query: string) => { 
      const results = await search(query);
      return results;
    };

    return (
      <MusicContext.Provider value={{ getSearchResults }}>
        {children}
      </MusicContext.Provider>
    );
};

const useMusic = () => { 
    const context = useContext(MusicContext);
    if (context === undefined) {
        throw new Error("useMusic must be used within a MusicProvider");
    }
    return context;
};

export { MusicProvider, useMusic };