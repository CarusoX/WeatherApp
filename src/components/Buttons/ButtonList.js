import React from 'react'
import { Buttons } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export const ButtonList = (props) => (
  <Button.Group buttons={props.names} color={props.color} size={props.size} />
)