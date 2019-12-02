import React, { useState } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

export const GameForm = ({ user_submitted }) => {
  const [title, set_title] = useState('')
  const [description, set_description] = useState('')
  const [rating, set_rating] = useState('')
  const [image, set_image] = useState('')

  return (
    <Form>
      <Form.Field width={2}>
        <Input
          placeholder="Game Title"
          value={title}
          onChange={e => set_title(e.target.value)}
        />
      </Form.Field>

      <Form.Field width={6}>
        <Input
          placeholder="Input image URL"
          value={image}
          onChange={e => set_image(e.target.value)}
        />
      </Form.Field>

      <Form.Field width={16}>
        <Input
          placeholder="Description"
          value={description}
          onChange={e => set_description(e.target.value)}
        />
      </Form.Field>

      <Form.Field width={1}>
        <Input
          placeholder="00"
          value={rating}
          onChange={e => set_rating(e.target.value)}
        />
      </Form.Field>

      <Form.Field>
        <Button
          onClick={async () => {
            const game = { title, description, rating, image }
            await fetch('/add_game', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(game),
            })

            user_submitted(game)
          }}
        >
          Submit
        </Button>
      </Form.Field>
    </Form>
  )
}
