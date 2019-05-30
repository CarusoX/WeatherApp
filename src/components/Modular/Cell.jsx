import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

export const Cell = (props) => (
    <Segment raised compact>
        <Grid columns={2} stackable centered>
        <Grid.Column width={4}>
            <Image src={require('../../icons/Theme2/' + props.image)}
            size='mini' verticalAlign='middle' />
        </Grid.Column>
        <Grid.Column width={10}>
            <Grid.Row>
                <h3 style={{fontSize: 15}}>{props.title}</h3>
            </Grid.Row>
            <Grid.Row>
                {props.content} {props.unit}
            </Grid.Row>
        </Grid.Column>
        </Grid>
    </Segment>
)
