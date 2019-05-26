import React from 'react'
import { Tab, Image } from 'semantic-ui-react'

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

export const ErrorTab = (props) =>
    <Tab.Pane attached={false}>
      <h1> We're sorry! </h1>
      <h3> Something went wrong :( </h3>
      <h3> {ErrorMessages[props.error]} </h3>
      {/* <Image src={require(ErrorImages[props.error])} alt='Error' style={{ maxHeight: 50, maxWidth: 50 }} /> */}
    </Tab.Pane>