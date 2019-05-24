import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'

class WheaterCard extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>

            <Segment>
              <Icon.Group size='massive'>
                <Icon name='sun' color='yellow'/>
              </Icon.Group>
            </Segment>
            
            <Segment>
              Temp
              <Segment>
                {this.props.temperature}
              </Segment>
            </Segment>
            
            <Segment>
              State
              <Segment>
                {this.props.weather_state}
              </Segment>
            </Segment>

          </Grid.Column>
          <Grid.Column>

            <Segment>
              Preassure
              <Segment>
                {this.props.pressure}
              </Segment>
            </Segment>
            <Segment>
              Min temp
              <Segment>
                {this.props.min_temp}
              </Segment>
            </Segment>
            <Segment>
              Sunrise
              <Segment>
                No se jaja salu2
              </Segment>
            </Segment>
            <Segment>
              Wind
              <Segment>
                {this.props.wind_speed}
              </Segment>
            </Segment>
          
          </Grid.Column>
          <Grid.Column>

            <Segment>
              Humidity
              <Segment>
                {this.props.humidity}
              </Segment>
            </Segment>
            <Segment>
              Max temp
              <Segment>
                {this.props.max_temp}
              </Segment>
            </Segment>
            <Segment>
              Sunset
              <Segment>
                No se jaja salu2
              </Segment>
            </Segment>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default WheaterCard;