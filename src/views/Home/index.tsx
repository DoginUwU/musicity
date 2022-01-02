import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    navigate(`/search/${search}`);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Procurar música"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </Container>
  );
}

export default Home;