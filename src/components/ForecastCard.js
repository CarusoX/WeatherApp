import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'


class ForecastCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
      maxT: 0,
      minT: 0,
      currentDay: 6
    };
  }

  setday(cD, maT, miT) {
    this.setState({
      currentDay : cD,
      maxT : maT,
      minT : miT,
    });
  }

  day(i){
    return (
          <Grid.Column>
            <Segment>
              <Icon.Group size='massive'>
                <Icon name='sun' color='yellow'/>
              </Icon.Group>
            </Segment>
            <Segment>{this.state.day[i]}</Segment>
            <Segment>{this.state.maxT}</Segment>
            <Segment>{this.state.minT}</Segment>
          </Grid.Column>
        
    );
  }

  render() {
    return (
      <Grid columns={5} divided>
        <Grid.Row stretched>
          {/* Aun no se como usar los for :P jaja */}
          {this.day((this.state.currentDay)%7)}
          {this.day((this.state.currentDay + 1)%7)}
          {this.day((this.state.currentDay + 2)%7)}
          {this.day((this.state.currentDay + 3)%7)}
          {this.day((this.state.currentDay + 4)%7)}
        </Grid.Row>
      </Grid>
    );
  }
}

export default ForecastCard