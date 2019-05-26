import React from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const ErrorImages = {
  1: '../../images/invalid_key.png',
  2: '../../images/wrong_search.png',
  3: '../../images/blocked_key.png',
  4: '../../images/server_error.png'
}

const ErrorMessages = {
  1: 'Invalid API Key!',
  2: 'City Not Found!',
  3: 'API Key Blocked',
  4: 'Server Error :('
}

const DefaultTab = (props) => {
  return (
    <Tab.Pane attached={false} loading={props.mode}>
      <h1> We're sorry! </h1>
      <h3> Something went wrong :( </h3>
      <h3> {ErrorMessages[this.props.error]} </h3>
      <img src={require(ErrorImages[this.props.error])} alt='Error' style={{ maxHeight: 50, maxWidth: 50 }} />
    </Tab.Pane>
  )
}

export default DefaultTab