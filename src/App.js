import React, { useEffect, useState } from 'react'
import './App.css'
import { Games } from './components/Games'
import { GameForm } from './components/GameForm'
import { Container } from 'semantic-ui-react'
import { Footer } from './components/Footer'

function App() {
  const [games, setList] = useState([])

  useEffect(() => {
    fetch('/games').then(response =>
      response.json().then(data => {
        setList(data.games)
      }),
    )
  }, [])

  return (
    <>
      <div className="App">
        <h1>Page 4</h1>

        <Container style={{ marginTop: 50 }}>
          <GameForm
            user_submitted={game =>
              setList(current_list => [game, ...current_list])
            }
          />
          <Games games={games} />
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default App
