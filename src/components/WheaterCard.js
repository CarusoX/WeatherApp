import React from 'react'
import { Segment, Grid, Icon, Divider } from 'semantic-ui-react'

class WheaterCard extends React.Component {

  render() {
    return (
      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>

            <Segment>
              <Icon.Group size='massive'>
                <Icon name='sun' color='yellow' />
              </Icon.Group>
            </Segment>

            <Segment>
              Max temp
              <Divider/>
              {this.props.max_temp} {this.props.unit}
            </Segment>

            <Segment>
              Min temp
              <Divider/>
              {this.props.min_temp} {this.props.unit}
            </Segment>

          </Grid.Column>
          <Grid.Column>

            <Segment>
              Temp
              <Divider/>
              {this.props.temperature} {this.props.unit}
            </Segment>

            <Segment>
              State
              <Divider/>
              {this.props.weather_state}
            </Segment>

            <Segment>
              Humidity
              <Divider/>
              {this.props.humidity} %
            </Segment>

            <Segment>
              Wind
              <Divider/>
              {this.props.wind_speed} M/s
            </Segment>          

          </Grid.Column>
          <Grid.Column>

          <Segment>
              Sunrise
              <Divider/>
              No se jaja salu2 AM
            </Segment>
            
            <Segment>
              Sunset
              <Divider/>
              No se jaja salu2 PM
            </Segment>

            <Segment>
              Preassure
              <Divider/>
              {this.props.pressure} hPa
            </Segment>  

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default WheaterCard;