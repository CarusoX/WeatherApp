import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'


class ForecastCard extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
      day: ['Monday', 'Tuesday', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      maxT: 0,
      minT: 0,
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

  set_day(maT, miT, cDay){
      this.state.maxT= maT
      this.state.minT = miT
      this.state.currentDay = cDay
  }

  render() {
    return (
      <Grid columns={5} divided>
        <Grid.Row stretched>
          {/* Aun no se como usar los for :P jaja */}
          {/* console.log(this.props.min_temp)*/}
          {this.set_day(this.props.max_temp, this.props.min_temp, 0)}
          {this.day()}
          {this.set_day(this.props.max_temp, this.props.min_temp, 1)}
          {this.day()}
          {this.day()}
          {this.day()}
          {this.day()}
        </Grid.Row>
      </Grid>
    );
  }
}

export default ForecastCard