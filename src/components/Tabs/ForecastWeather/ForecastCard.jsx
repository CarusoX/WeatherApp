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
      this.state.maxT= this.props.list.list[k].main.temp_max
      this.state.minT = this.props.list.list[k].main.temp_min
      this.state.pressure = this.props.list.list[k].main.pressure
      this.state.humidity = this.props.list.list[k].main.humidity
      this.state.wind = this.props.list.list[k].wind.speed
      this.state.rain = this.props.list.list[k].rain
      this.state.date = ''
      this.state.hour = ''
      
      var n = ''
      for (var i = 5; i < 10; i++) {
        n = this.props.list.list[k].dt_txt[i]
        if(n === '-') n = '/'
        this.state.date += n
      }
      this.state.date += '/'
      for (var i = 2; i < 4; i++) {
        n = this.props.list.list[k].dt_txt[i]
        this.state.date += n
      }
      this.state.currentDay = getDateName(this.state.date)

      n = ''
      for(var i = 11; i < 16; i++){
        n = this.props.list.list[k].dt_txt[i]
        if(n === '-') n = '/'
        this.state.hour += n
      }
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