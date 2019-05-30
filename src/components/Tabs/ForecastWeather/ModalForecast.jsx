import React from 'react'
import { Grid, Header, Icon, Modal, Divider } from 'semantic-ui-react'

export const ModalForecast = (props) => (
	<Modal.Content image blurring>
		<h2> Date: {props.data[0].dt_txt.slice(0, 10).split('-').join('/')} </h2>
		<Grid columns={10}>
			{props.data.map(elem => {
				return(
					<Grid.Row stretched>
			      <Icon.Group size='massive'>
			        <Icon name='sun' color='yellow'/>
			      </Icon.Group>
			      <Modal.Description alignContent = 'center'>
			        <Header>
			        	 Hour: {elem.dt_txt.slice(10, 19)}
			        </Header>
			        <p>Min Temp: {elem.main.temp_min}</p>
			        <p>Max Temp: {elem.main.temp_max}</p>
			        <p>Pressure: {elem.main.pressure}</p>
			        <p>Humidity: {elem.main.humidity}</p>
			        <p>Wind: {elem.wind.speed}</p>
			      </Modal.Description>
		    	</Grid.Row>
		    )
				})}
			</Grid>
  </Modal.Content>
)
