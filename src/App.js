import React, { Component } from 'react'
import ListContacts from './ListContacts'

const contacts = [
  {
    id: 'ryan',
    name: 'Ryan Florence',
    email: 'ryan@reacttraining.com',
    avatarURL: 'http://localhost:5001/ryan.jpg'
  },
  {
    id: 'michael',
    name: 'Michael Jackson',
    email: 'michael@reacttraining.com',
    avatar: 'http://localhost:5001/michael'
  },
  {
    id: 'tyler',
    name: 'Tyler McGinnis',
    email: 'tyler@reacttraining.com',
    avatar: 'http://localhost:5001/tyler'
  }
]

class App extends Component {
  render () {
    return (
      <div>
        <ListContacts contacts={contacts} />
      </div>
    )
  }
}

export default App
