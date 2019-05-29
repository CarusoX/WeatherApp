import React from 'react'
import { Grid, Header, Icon, Image, Modal, Segment } from 'semantic-ui-react'
import { getDateName } from '../../../helpers/index.ts'


class ForecastCard extends React.Component {
  state = {
    maxT: 0,
    minT: 0,
    pressure: 0,
    humidity: 0,
    wind: 0,
    rain: 0,
    hour: '',
    date : '',
    currentDay: '',
  }

  set_day(day) {
      this.state.maxT= day.main.temp_max
      this.state.minT = day.main.temp_min
      this.state.date = day.dt_txt.slice(0, 10).split('-').join('/')
      this.state.currentDay = getDateName(this.state.date)
  }


  day(d) {
    {this.set_day(d)}
    return (
      <Modal trigger={
        <Grid.Column>
          <Segment>
            <Icon.Group size='massive'>
              <Icon name='sun' color='yellow'/>
            </Icon.Group>
          </Segment>
          <Segment>{this.state.currentDay}</Segment>
          <Segment>{this.state.date}</Segment>
          <Segment>{this.state.minT}</Segment>
          <Segment>{this.state.maxT}</Segment>
        </Grid.Column>
      }>
      <Modal.Content image>
        <Icon.Group size='massive'>
          <Icon name='sun' color='yellow'/>
        </Icon.Group>
        <Modal.Description>
          <Header>Date: {this.state.hour}</Header>
          <p>Temp Max: {this.state.date}</p>
          <p>Temp Min: {this.state.minT}</p>
          <p>Temp Max: {this.state.maxT}</p>
          <p>Pressure: {this.state.pressure}</p>
          <p>Humidity: {this.state.humidity}</p>
          <p>Wind Speed: {this.state.wind}</p>
          <p>Rain: {this.state.rain}</p>

        </Modal.Description>
      </Modal.Content>
      </Modal>
    );
  }

  render() {
    if(this.props.list.length === 0){
      return (
        <h1> LOADING </h1>
      )
    } else {
      return (
        <Grid columns={5} divided>
          <Grid.Row stretched>
            {this.props.list.date_days.map(day =>
                this.day(day),
            )}
          </Grid.Row>
        </Grid>
      );
    }
  };
}

export default ForecastCard