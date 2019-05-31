import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

export const Cell2 = (props) => (
  <Grid.Column width={props.width} centered>
    <Segment> {props.day} </Segment>
    <Segment> 
        {
          props.icon && <Image
                  class="ui medium circular image"
                  src={require(`../../icons/Theme2/${props.icon}.png`)}
                  verticalAlign='middle'
                />
        }
    </Segment>
    <Segment> {props.date} </Segment>
    <Segment> {props.max} </Segment>
    <Segment> {props.min} </Segment>
    <Segment> {props.temp} </Segment>
    <Segment> {props.humidity} </Segment>
    <Segment> {props.wind_direction} </Segment>
    <Segment> {props.wind_speed} </Segment>
  </Grid.Column>
)