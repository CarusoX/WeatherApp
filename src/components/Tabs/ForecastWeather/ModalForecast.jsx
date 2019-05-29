import React from 'react'
import { Grid, Header, Icon, Image, Modal, Segment } from 'semantic-ui-react'
import { getDateName } from '../../../helpers/index.ts'

export const ModalForecast = (props) => (
		<Modal.Content image>
        <Icon.Group size='massive'>
          <Icon name='sun' color='yellow'/>
        </Icon.Group>
        <Modal.Description>
          <Header>Date: {props.date}</Header>
          <p>Hour: {props.hour}</p>
          <p>Temp Min: {props.minT}</p>
          <p>Temp Max: {props.maxT}</p>
          <p>Pressure: {props.pressure}</p>
          <p>Humidity: {props.humidity}</p>
          <p>Wind Speed: {props.wind}</p>

        </Modal.Description>
      </Modal.Content>
)