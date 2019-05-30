import React from 'react'
import { Grid, Header, Icon, Image, Modal, Segment } from 'semantic-ui-react'
import { getDateName } from '../../../helpers/index.ts'
import { ModalForecast } from './ModalForecast'


class ForecastCard extends React.Component {

  day(d) {
    var flag = false
    var a = 7
    return (
      <Modal trigger={
        <Grid.Column>
          <Segment>
            <Icon.Group size='massive'>
              <Icon name='sun' color='yellow'/>
            </Icon.Group>
          </Segment>
          <Segment>{d.dt_txt.slice(0, 10).split('-').join('/')}</Segment>
          <Segment>{getDateName(d.dt_txt.slice(0, 10).split('-').join('/'))}</Segment>
          <Segment>{d.main.temp_max}</Segment>
          <Segment>{d.main.temp_min}</Segment>
        </Grid.Column>
      }>
      <ModalForecast 
        data={this.props.list.days.filter(days => {
                  if(d === days){
                    flag = true
                    return true
                  }
                  if(flag && a > 0){
                    a--
                    return true
                  }
                  return false
                })}
      />
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