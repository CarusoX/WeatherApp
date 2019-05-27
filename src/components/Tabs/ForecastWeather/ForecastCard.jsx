import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'
import { getDateName } from '../../../helpers/index.ts'


class ForecastCard extends React.Component {
  state = {
      maxT: 0,
      minT: 0,
      date : '',
      currentDay: '',
  }

  day(){
    return (
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
    );
  }

  set_day(k){
      this.state.maxT= this.props.list.list[k].main.temp_max
      this.state.minT = this.props.list.list[k].main.temp_min
      this.state.date = ''
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