import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'


class ForecastCard extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
      day: ['Sunday', 'Monday', 'Tuesday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
      m : [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5],
      maxT: 0,
      minT: 0,
      date : [],
      currentDay: 0,
  }

  day(){
    return (
          <Grid.Column>
            <Segment>
              <Icon.Group size='massive'>
                <Icon name='sun' color='yellow'/>
              </Icon.Group>
            </Segment>
            <Segment>{this.state.day[this.state.currentDay]}</Segment>
            <Segment>{this.state.maxT}</Segment>
            <Segment>{this.state.minT}</Segment>
          </Grid.Column>
        
    );
  }

  set_day(maT, miT, d){
      this.state.maxT= maT
      this.state.minT = miT

      let day = this.state.date[2] - '0'
      let month = this.state.date[1] - '0' - 1
      let year = Math.floor((this.state.date[0] - '0')/4)
      this.state.currentDay = (day + month + year) % 7
  }

  set_date(k){
    this.state.date = ['', '', '']
    for (var i = 2; i < 4; i++) {
      this.state.date[0] += this.props.list[k].dt_txt[i]
    }
    for (var i = 5; i < 7; i++) {
      this.state.date[1] += this.props.list[k].dt_txt[i]
    }
    for (var i = 8; i < 10; i++) {
      this.state.date[2] += this.props.list[k].dt_txt[i]
    }
  }


  render() {
    if(this.props.list.length === 0){
      return (
        <Grid columns={5} divided>
          <Grid.Row stretched>
            {this.set_day(0, 0, 0)}
            {this.day()}
            {this.set_day(0, 0, 0)}
            {this.day()}
            {this.set_day(0, 0, 0)}
            {this.day()}
            {this.set_day(0, 0, 0)}
            {this.day()}
            {this.set_day(0, 0, 0)}
            {this.day()}
          </Grid.Row>
        </Grid>
      )
    }
    else{
      return (
        <Grid columns={5} divided>
          <Grid.Row stretched>
                {this.set_date(0)}
                {this.set_day(this.props.list[0].main.temp_max, this.props.list[0].main.temp_min, 0)}
                {this.day()}
                {this.set_date(7)}
                {this.set_day(this.props.list[7].main.temp_max, this.props.list[7].main.temp_min, 1)}
                {this.day()}
                {this.set_date(15)}
                {this.set_day(this.props.list[15].main.temp_max, this.props.list[15].main.temp_min, 2)}
                {this.day()}
                {this.set_date(23)}
                {this.set_day(this.props.list[23].main.temp_max, this.props.list[23].main.temp_min, 3)}
                {this.day()}
                {this.set_date(31)}
                {this.set_day(this.props.list[31].main.temp_max, this.props.list[31].main.temp_min, 4)}
                {this.day()}
          </Grid.Row>
        </Grid>
      );
    }
  }
}

export default ForecastCard