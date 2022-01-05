import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle'

import Menu from './components/Menu'
import Router from './routes/Router';
import Player from './components/Player';
import { MusicProvider } from './hooks/useMusic';

import "./services/axios";
import { PlayerProvider } from './hooks/usePlayer';

export function App() {
  return (
    <BrowserRouter>
        <MusicProvider>
          <PlayerProvider>
            <Router />
            <GlobalStyle />
            <Menu />
            <Player />
          </PlayerProvider>
        </MusicProvider>
    </BrowserRouter>
  )
}