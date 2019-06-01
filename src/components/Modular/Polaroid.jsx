import React from 'react'
import { Divider } from 'semantic-ui-react'
import { getDateName, getIconName } from '../../helpers/index.ts'

const big_polaroid = {
  border: '3px solid gray',
  borderRadius: '5px',
  boxShadow: '0px 0px 27px 13px rgba(196,196,196,0.3)',
  backgroundColor: 'white',
  flexGrow: '2',
  alignItems: 'stretch',
  width: '75%'
};

const small_polaroid = {
  border: '3px solid gray',
  borderRadius: '5px',
  boxShadow: '0px 0px 27px 13px rgba(196,196,196,0.3)',
  backgroundColor: 'white',
  marginBottom: '10%',
  maxWidth: '15%',
  height: '70%'
};

const image = {
  maxWidth: '80%',
  maxHeight: '80%',
};

const container = {
  padding: '5%'
};

const text = {
  fontSize: '150%',
};

export const BigPolaroid = (props) => (
  <div style={big_polaroid}>
    <img style={image} src={require('../../icons/Theme2/' + props.image)} />
    <Divider />
    <div style={container}>
      <p style={text}>{props.text}</p>
    </div>
  </div>
)

export const SmallPolaroid = (props) => (
  <div style={small_polaroid}>
    <img style={image} src={require('../../icons/Theme2/' + props.image)} />
    <Divider />
    <div style={container}>
      <p style={text}>{props.text}</p>
    </div>
  </div>
)

// {props.texts.map(txt => (
//   <p style={text}>{txt}</p>
// ))}