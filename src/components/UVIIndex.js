import React from 'react'
import { Grid } from 'semantic-ui-react'
import { RadialChart } from 'react-vis';

const myData = [
    { angle: 72, color: 'green' },
    { angle: 72, color: 'yellow' },
    { angle: 72, color: 'orange' },
    { angle: 72, color: 'red' },
    { angle: 72, color: 'purple' }
];

const UVIIndex = () => (
    <Grid stretched centered>
        <Grid.Row>
            Current UVI index
        </Grid.Row>
        <Grid.Row>
            9.1
        </Grid.Row>
        <Grid.Row>
            <RadialChart
                data={myData}
                width={300}
                height={300}
                innerRadius={60}
                radius={80}
                colorType='literal' />
        </Grid.Row>

    </Grid>
)

export default UVIIndex;