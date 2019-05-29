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

  day() {
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

  set_day(k) {
      this.state.maxT= this.props.list.days[k].main.temp_max
      this.state.minT = this.props.list.days[k].main.temp_min
      this.state.date = this.props.list.date_forecast[Math.ceil(k/8) - 1].date

      this.state.currentDay = getDateName(this.state.date)
  }

  render() {
    console.log(this.props.list)
    if(this.props.list.length === 0){
      return (
        <Grid columns={5} divided>
          <Grid.Row stretched>
            {this.day()}
            {this.day()}
            {this.day()}
            {this.day()}
            {this.day()}
          </Grid.Row>
        </Grid>
      )
    } else {
      return (
        <Grid columns={5} divided>
          <Grid.Row stretched>
            {this.set_day(7)}
            {this.day()}
            {this.set_day(15)}
            {this.day()}
            {this.set_day(23)}
            {this.day()}
            {this.set_day(31)}
            {this.day()}
            {this.set_day(39)}
            {this.day()}
          </Grid.Row>
        </Grid>
      );
    }
  };
}

export default ForecastCard