import React, { useEffect, useState } from 'react';
import './App.css';
import { Games } from './components/Games';
import { GameForm } from './components/GameForm';
import { Container, Divider, Image, Header } from 'semantic-ui-react';
import { Footer } from './components/Footer';
import Headroom from 'react-headroom';
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
        <Headroom>
        <Header as='h1'><Image circular src='react.png' size='tiny' /> Page 4  <Image src='flask.png' size='mini' /></Header>
        </Headroom>
 
 
        <Container text>

    <Header as='h2'>Summary</Header>
    <p>
      This is our example page for showcasing our understanding of React and Flask. 
      We created a simple POST GET interaction between React frontend and Flask backend. 
      React asks for user input to feed it into Flask to input it into the server database. 
      Users are able to create their own lists regarding their video game hobby. The list 
      can extends with a row of an image, title, description, and user rating. We use semantic
      React for the user interface. There is a number of useful tools within semantic, which 
      helps in clearing up a webpage. 
    </p>
    <p>
      We drew our direction from collaborative video tutorials presented by PrettyPrinted 
      and Ben Awad. As such, some of our code may resemble theirs. We hope this will not be 
      a potential for reprimand. We tried to use their instructions to lead us into the frameworks 
      and have learned plenty from doing so. 
    </p>
  </Container>

      <Divider horizontal>Make your own list of Games</Divider>

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
