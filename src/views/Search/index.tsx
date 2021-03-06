import React, { useEffect, useState } from 'react';
import { RiPlayFill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { IYoutubeItemResult } from '../../@types/youtube';
import { useMusic } from '../../hooks/useMusic';
import { usePlayer } from '../../hooks/usePlayer';

import { Container, MusicsContainer, MusicContainer } from "./styles";

const Search: React.FC = () => {
  const { getSearchResults } = useMusic();
  const { playYoutube, currentMusic } = usePlayer()
  const { name } = useParams();
  const [musics, setMusics] = useState<IYoutubeItemResult[]>([]);

  useEffect(() => {
      if (!name) return;
      getSearchResults(name).then(response => {
        setMusics(response.items);
      });
  }, [name]);
  
  const playMusic = (music: IYoutubeItemResult) => {
    playYoutube(music);
  };

    return (
      <Container>
        <h1>Pesquisando: {name}</h1>
        <MusicsContainer>
          {musics.map(music => (
            <MusicContainer
              key={music.id.videoId}
              onClick={() => playMusic(music)}
            >
              <div className="image">
                <img
                  src={music.snippet.thumbnails.medium.url}
                  alt={music.snippet.title}
                />
                {currentMusic?.id.videoId === music.id.videoId && (
                  <div>
                    <RiPlayFill />
                  </div>
                )}
              </div>
              <h2>{music.snippet.title}</h2>
              <p>{music.snippet.channelTitle}</p>
            </MusicContainer>
          ))}
        </MusicsContainer>
      </Container>
    )
}

export default Search;