import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import { Game } from './Game'

export const Games = ({ games }) => {
  return (
    <Container>
      <Grid celled>
        {games.map(game => (
          <Game {...game} />
        ))}
      </Grid>
    </Container>
  )
}
