import React from 'react'
import { Header, GridRow, GridColumn } from 'semantic-ui-react'

export const Game = ({ image, title, description, rating }) => (
  <GridRow>
    <GridColumn width={2}>
      <Header>
        <img
          src={image}
          onError={e => {
            e.target.src = 'defaultart.jpg'
          }}
          alt={title}
        />
      </Header>
      <Header>{title}</Header>
    </GridColumn>
    <GridColumn width={12}>
      <Header>{description}</Header>
    </GridColumn>
    <GridColumn width={2}>
      <Header>{rating} </Header>
    </GridColumn>
  </GridRow>
)
