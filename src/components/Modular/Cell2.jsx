import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

export const Cell2 = (props) => (
  <Grid.Column width={props.width} centered>
    {/* <Segment>
      {
        <Image
          src={require('../../../icons/Theme2/' + props.icon + '.png')}
          size='medium'
          verticalAlign='middle'
        />
      }
    </Segment> */}
    <Segment>{props.date}</Segment>
    <Segment>{props.day}</Segment>
    <Segment>{props.max}</Segment>
    <Segment>{props.min}</Segment>
  </Grid.Column>

  // data={this.props.list.days.filter(days => {
  //           if(d === days){
  //             flag = true
  //             return true
  //           }
  //           if(flag && a > 0){
  //             a--
  //             return true
  //           }
  //           return false
  //         })}
)
