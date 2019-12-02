import React, { useEffect, useState } from 'react';
import './App.css';
import { Games } from './components/Games';
import { GameForm } from './components/GameForm';
import { Container } from 'semantic-ui-react';
import { Footer } from './components/Footer';
import axios from 'axios';

const persist_to_db = async game => {
  await axios.post('https://flask-test530.herokuapp.com/add_game', game);
};

function App() {
  const [games, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        'https://flask-test530.herokuapp.com/games',
      );

      setList(data.games);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Page 4</h1>

        <Container style={{ marginTop: 50 }}>
          <GameForm
            user_submitted={game => {
              persist_to_db(game);
              setList(current_list => [game, ...current_list]);
            }}
          />
          <Games games={games} />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
