import React from 'react'
import { Segment, Divider} from 'semantic-ui-react'

export const Cell = (props) =>
    <Segment>
        { props.message }
    <Divider />
        { props.val }
    </Segment>