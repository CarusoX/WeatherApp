import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'


class ForecastCard extends React.Component {
  state = {
      day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
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
            <Segment>
              {
                this.state.date[2] + '/' +
                this.state.date[1] + '/' +
                this.state.date[0] 
                
              }

            </Segment>
            <Segment>{this.state.minT}</Segment>
            <Segment>{this.state.maxT}</Segment>
          </Grid.Column>
    );
  }

  set_day(k){
      this.state.maxT= this.props.list.list[k].main.temp_max
      this.state.minT = this.props.list.list[k].main.temp_min
      this.state.date = ['', '', '']

      for (var i = 2; i < 4; i++) {
        this.state.date[0] += this.props.list.list[k].dt_txt[i]
      }
      for (var i = 5; i < 7; i++) {
        this.state.date[1] += this.props.list.list[k].dt_txt[i]
      }
      for (var i = 8; i < 10; i++) {
        this.state.date[2] += this.props.list.list[k].dt_txt[i]
      }

      let key_month = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5]
      let day = this.state.date[2] - '0'
      let month = this.state.date[1] - '0' - 1
      let year = Math.floor((this.state.date[0] - '0')/4)
      let correction = key_month[month]

      this.state.currentDay = (day + month + year + correction + 6) % 7
  }


  render() {
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
    }
    else {
      return (
        <Grid columns={5} divided>
          <Grid.Row stretched>
                {this.set_day(0)}
                {this.day()}
                {this.set_day(7)}
                {this.day()}
                {this.set_day(15)}
                {this.day()}
                {this.set_day(23)}
                {this.day()}
                {this.set_day(31)}
                {this.day()}
          </Grid.Row>
        </Grid>
      );
    }
  }
}

export default ForecastCard